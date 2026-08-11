import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

export function useFinePointer() {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setFine(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return fine;
}

export function Atmosphere() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="atm-a absolute -right-[10%] top-[-20%] h-[70vh] w-[70vw] rounded-full bg-[radial-gradient(circle_at_center,var(--blue-atm),transparent_65%)] blur-3xl" />
      <div className="atm-b absolute right-[12%] top-[18%] h-[42vh] w-[42vw] rounded-full bg-[radial-gradient(circle_at_center,var(--peach-atm),transparent_65%)] blur-3xl" />
      <div className="atm-a absolute -left-[15%] bottom-[6%] h-[55vh] w-[55vw] rounded-full bg-[radial-gradient(circle_at_center,var(--blue-atm),transparent_65%)] opacity-70 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklab, var(--foreground) 4%, transparent) 1px, transparent 1px)",
          backgroundSize: "clamp(90px, 12vw, 180px) 100%",
        }}
      />
    </div>
  );
}

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setP(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-px">
      <div
        className="h-full origin-left bg-foreground/45"
        style={{ transform: `scaleX(${p})`, transition: "transform 120ms linear" }}
      />
    </div>
  );
}

/** Thin editorial connector drawn between two sections. */
export function SectionSeam({ flip = false }: { flip?: boolean }) {
  const ref = useRef<SVGSVGElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries)
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div aria-hidden className="pointer-events-none relative mx-auto h-16 w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
      <svg
        ref={ref}
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className={cn("h-full w-full", flip && "-scale-x-100")}
      >
        <path
          d="M0 58 C 260 58, 330 6, 600 6 S 940 58, 1200 58"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-foreground/15"
          style={{
            strokeDasharray: 1500,
            strokeDashoffset: shown ? 0 : 1500,
            transition: "stroke-dashoffset 1800ms var(--ease-out-expo)",
          }}
        />
        <circle
          cx="600"
          cy="6"
          r="2.5"
          className="fill-foreground/30"
          style={{ opacity: shown ? 1 : 0, transition: "opacity 900ms 900ms ease-out" }}
        />
      </svg>
    </div>
  );
}

/** Subtle magnetic follow for major CTAs. Desktop + motion-allowed only. */
export function Magnetic({
  children,
  strength = 10,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const fine = useFinePointer();
  const reduced = useReducedMotion();
  const enabled = fine && !reduced;

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el || !enabled) return;
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * strength * 2;
      const y = ((e.clientY - r.top) / r.height - 0.5) * strength * 1.4;
      el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
    },
    [enabled, strength],
  );

  const reset = useCallback(() => {
    const el = ref.current;
    if (el) el.style.transform = "translate3d(0,0,0)";
  }, []);

  return (
    <span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={cn(
        "magnetic-target inline-block transition-transform duration-500 [transition-timing-function:var(--ease-out-expo)]",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("relative w-full px-5 py-20 sm:px-8 md:py-28 lg:px-12 lg:py-36", className)}
    >
      <div className="mx-auto w-full max-w-[1440px]">{children}</div>
    </section>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow flex items-center gap-3">
      <span className="h-px w-8 bg-foreground/25" aria-hidden />
      {children}
    </p>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-[opacity,transform,filter,clip-path] duration-[900ms] [transition-timing-function:var(--ease-out-expo)]",
        shown
          ? "translate-y-0 opacity-100 blur-0 [clip-path:inset(0_0_0%_0)]"
          : "translate-y-7 opacity-0 blur-[7px] [clip-path:inset(0_0_18%_0)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

type GlassButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "solid" | "glass" | "ghost";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function GlassButton({
  href,
  children,
  variant = "glass",
  className,
  ...rest
}: GlassButtonProps) {
  const classes = cn(
    "group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-[0.78rem] font-medium uppercase tracking-[0.12em] transition-[transform,background-color,box-shadow,border-color,color] duration-[320ms] [transition-timing-function:var(--ease-out-expo)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60",
    variant === "solid" &&
      "bg-primary text-primary-foreground hover:-translate-y-[3px] hover:shadow-[0_22px_50px_-18px_oklch(0.268_0.014_268/0.55)]",
    variant === "glass" &&
      "glass text-foreground hover:-translate-y-[3px] hover:border-foreground/25 hover:bg-glass-strong hover:shadow-[var(--shadow-soft)]",
    variant === "ghost" && "border border-border text-foreground hover:-translate-y-[2px] hover:border-foreground/30 hover:bg-secondary",
    className,
  );

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}