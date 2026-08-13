import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

import { CLIENTS, CONTACT } from "@/lib/site-data";
import { cn } from "@/lib/utils";

import { GlassButton, Magnetic, useFinePointer, useReducedMotion } from "./primitives";

const PARTICLES = [
  { x: 12, y: 24, s: 5, d: 26 },
  { x: 78, y: 18, s: 3, d: 46 },
  { x: 66, y: 62, s: 7, d: 18 },
  { x: 30, y: 76, s: 4, d: 34 },
  { x: 91, y: 48, s: 3, d: 54 },
  { x: 46, y: 12, s: 3, d: 40 },
];


export function Hero() {
  const [ready, setReady] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  const fine = useFinePointer();
  const reduced = useReducedMotion();
  const parallax = fine && !reduced;

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !parallax) return;
    let raf = 0;
    let tx = 0;
    let ty = 0;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5;
      ty = (e.clientY - r.top) / r.height - 0.5;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        el.style.setProperty("--mx", tx.toFixed(4));
        el.style.setProperty("--my", ty.toFixed(4));
      });
    };
    el.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      el.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [parallax]);

  return (
    <section
      id="top"
      ref={ref}
      className="group/hero relative flex min-h-dvh w-full flex-col justify-center overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:px-12"
      style={{ ["--mx" as string]: 0, ["--my" as string]: 0 }}
    >
      {/* cursor-reactive atmospheric light */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="atm-a absolute left-[8%] top-[6%] h-[62vh] w-[62vw] rounded-full bg-[radial-gradient(circle_at_center,var(--blue-atm),transparent_62%)] blur-3xl"
          style={{
            transform: "translate3d(calc(var(--mx) * 42px), calc(var(--my) * 32px), 0)",
            transition: "transform 900ms var(--ease-out-expo)",
          }}
        />
        <div
          className="atm-b absolute right-[6%] top-[30%] h-[45vh] w-[45vw] rounded-full bg-[radial-gradient(circle_at_center,var(--peach-atm),transparent_62%)] blur-3xl"
          style={{
            transform: "translate3d(calc(var(--mx) * -60px), calc(var(--my) * -40px), 0)",
            transition: "transform 1100ms var(--ease-out-expo)",
          }}
        />
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full border border-foreground/25 opacity-0 transition-opacity duration-700 group-hover/hero:opacity-100"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.s,
              height: p.s,
              background: i % 2 ? "transparent" : "color-mix(in oklab, var(--foreground) 30%, transparent)",
              transform: `translate3d(calc(var(--mx) * ${p.d}px), calc(var(--my) * ${p.d}px), 0)`,
              transition: "transform 1200ms var(--ease-out-expo), opacity 700ms ease-out",
            }}
          />
        ))}
        <svg
          className="absolute inset-x-0 bottom-[12%] h-24 w-full text-foreground/10"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0 92 C 300 92, 380 20, 700 34 S 1050 86, 1200 60"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            style={{
              strokeDasharray: 2000,
              strokeDashoffset: ready ? 0 : 2000,
              transition: "stroke-dashoffset 2600ms var(--ease-out-expo) 400ms",
            }}
          />
        </svg>
      </div>

      <div className="mx-auto w-full max-w-[1440px]">
        {/* ── TOP LABEL ─────────────────────────────────────────── */}
        <p
          className={cn(
            "eyebrow transition-all duration-1000 [transition-timing-function:var(--ease-out-expo)]",
            ready ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
          )}
        >
          360° PR &amp; Digital Growth Agency
        </p>

        {/* ── GROW YOUR PRESENCE ONLINE ─────────────────────────── */}
        <h1
          className={cn(
            "mt-4 font-display font-black uppercase leading-[1.08] tracking-tight text-foreground transition-all duration-1000 [transition-timing-function:var(--ease-out-expo)] sm:mt-5",
            ready ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
          )}
          style={{
            fontSize: "clamp(2.2rem, 5.5vw, 4.2rem)",
            transitionDelay: "140ms",
          }}
        >
          Grow Your Presence Online.
        </h1>

        {/* ── Sub-tagline ──────────────────────────────────────── */}
        <p
          className={cn(
            "mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground transition-all duration-1000 [transition-timing-function:var(--ease-out-expo)] sm:text-base",
            ready ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
          style={{ transitionDelay: "280ms" }}
        >
          We combine{" "}
          <span className="font-bold text-foreground">social media</span>,{" "}
          <span className="font-bold text-foreground">creative content</span>,{" "}
          <span className="font-bold text-foreground">digital advertising</span>,{" "}
          <span className="font-bold text-foreground">PR</span> and{" "}
          <span className="font-bold text-foreground">nationwide media coverage</span> to help
          you reach the right audience.
        </p>

        {/* ── CTA Buttons ──────────────────────────────────────── */}
        <div
          style={{ transitionDelay: "420ms" }}
          className={cn(
            "mt-7 flex flex-wrap gap-3 transition-all duration-1000 [transition-timing-function:var(--ease-out-expo)]",
            ready ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          <Magnetic>
            <GlassButton href="#contact" variant="solid">
              Let's Talk
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 [transition-timing-function:var(--ease-out-expo)] group-hover/btn:translate-x-1"
                aria-hidden
              />
            </GlassButton>
          </Magnetic>
          <Magnetic>
            <GlassButton href="#services">
              Explore Services
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 [transition-timing-function:var(--ease-out-expo)] group-hover/btn:translate-x-1"
                aria-hidden
              />
            </GlassButton>
          </Magnetic>
          <Magnetic>
            <GlassButton href={CONTACT.phoneHref}>Call Now</GlassButton>
          </Magnetic>
        </div>

        {/* ── CLIENT LOGO MARQUEE ─────────────────────────────────── */}
        <div
          style={{ transitionDelay: "560ms" }}
          className={cn(
            "mt-14 sm:mt-18 w-full overflow-hidden transition-all duration-1000",
            ready ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          <p className="mb-5 text-center text-[0.6rem] font-black uppercase tracking-[0.25em] text-muted-foreground/50">
            Trusted by leading brands &amp; institutions
          </p>
          <div className="relative w-full overflow-hidden marquee-mask py-4">
            <div className="flex w-max items-center gap-12 sm:gap-16 md:gap-20 pr-12 sm:pr-16 md:pr-20 animate-marquee hover:[animation-play-state:paused] will-change-transform">
              {[...CLIENTS, ...CLIENTS].map((client, i) => (
                <img
                  key={`${client.name}-${i}`}
                  src={client.logo}
                  alt={client.name}
                  title={client.name}
                  loading="eager"
                  className="h-14 sm:h-20 md:h-24 w-auto max-w-[200px] sm:max-w-[280px] object-contain transition-all duration-300 hover:scale-105 shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradientShift {
          from { filter: hue-rotate(0deg); }
          to   { filter: hue-rotate(30deg); }
        }
      `}</style>
    </section>
  );
}
