import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Atmosphere() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -right-[10%] top-[-20%] h-[70vh] w-[70vw] rounded-full bg-[radial-gradient(circle_at_center,var(--blue-atm),transparent_65%)] blur-3xl" />
      <div className="absolute right-[12%] top-[18%] h-[42vh] w-[42vw] rounded-full bg-[radial-gradient(circle_at_center,var(--peach-atm),transparent_65%)] blur-3xl" />
      <div className="absolute -left-[15%] bottom-[6%] h-[55vh] w-[55vw] rounded-full bg-[radial-gradient(circle_at_center,var(--blue-atm),transparent_65%)] opacity-70 blur-3xl" />
    </div>
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
        "transition-[opacity,transform,filter] duration-[900ms] [transition-timing-function:var(--ease-out-expo)]",
        shown ? "translate-y-0 opacity-100 blur-0" : "translate-y-6 opacity-0 blur-[6px]",
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
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.78rem] font-medium uppercase tracking-[0.12em] transition-all duration-500 [transition-timing-function:var(--ease-out-expo)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60",
    variant === "solid" &&
      "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]",
    variant === "glass" &&
      "glass text-foreground hover:-translate-y-0.5 hover:bg-glass-strong hover:shadow-[var(--shadow-soft)]",
    variant === "ghost" && "border border-border text-foreground hover:bg-secondary",
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