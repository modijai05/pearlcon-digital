import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

import { CLIENTS, CONTACT } from "@/lib/site-data";
import { cn } from "@/lib/utils";

import { GlassButton, Magnetic, useFinePointer, useReducedMotion } from "./primitives";

const WORDS = ["REPUTATION.", "VISIBILITY.", "GROWTH."];

const PARTICLES = [
  { x: 12, y: 24, s: 5, d: 26 },
  { x: 78, y: 18, s: 3, d: 46 },
  { x: 66, y: 62, s: 7, d: 18 },
  { x: 30, y: 76, s: 4, d: 34 },
  { x: 91, y: 48, s: 3, d: 54 },
  { x: 46, y: 12, s: 3, d: 40 },
];

/* ── Floating Service Pill ──────────────────────────────────────── */
function ServicePill({
  label,
  icon,
  delay,
  className,
}: {
  label: string;
  icon: React.ReactNode;
  delay: number;
  className?: string;
}) {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVis(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div
      className={cn(
        "absolute flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-widest text-white shadow-lg backdrop-blur-md transition-all duration-1000 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
        vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className,
      )}
    >
      <span className="text-base leading-none">{icon}</span>
      {label}
    </div>
  );
}

/* ── Animated Waveform SVG ──────────────────────────────────────── */
function AnimatedWave({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 60"
      className={cn("w-full overflow-visible", className)}
      aria-hidden
    >
      <defs>
        <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="50%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>
      </defs>
      <path
        d="M0 30 C 25 10, 50 50, 75 30 S 125 10, 150 30 S 175 50, 200 30"
        fill="none"
        stroke="url(#wave-grad)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
        style={{
          strokeDasharray: 400,
          animation: "waveflow 3s ease-in-out infinite alternate",
        }}
      />
      <path
        d="M0 35 C 30 15, 60 55, 90 35 S 140 15, 170 35 S 190 55, 200 35"
        fill="none"
        stroke="url(#wave-grad)"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.35"
        style={{
          strokeDasharray: 400,
          animation: "waveflow 4s ease-in-out infinite alternate-reverse",
        }}
      />
      <style>{`
        @keyframes waveflow {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: 200; }
        }
      `}</style>
    </svg>
  );
}

/* ── Orbiting Icons Ring ────────────────────────────────────────── */
function OrbitRing({ ready }: { ready: boolean }) {
  const icons = ["📱", "📰", "🎯", "📡", "🏆", "✨"];
  return (
    <div
      className={cn(
        "relative mx-auto h-48 w-48 sm:h-56 sm:w-56 transition-all duration-1500 [transition-timing-function:var(--ease-out-expo)]",
        ready ? "scale-100 opacity-100" : "scale-75 opacity-0",
      )}
      style={{ transitionDelay: "600ms" }}
    >
      {/* Central glow orb */}
      <div className="absolute inset-0 m-auto h-28 w-28 sm:h-32 sm:w-32 rounded-full bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700 shadow-[0_0_60px_20px_rgba(139,92,246,0.4)] animate-pulse" />

      {/* PC Logo centered */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <img
          src="/assets/logo/pearlcon-mark.png"
          alt="Pearlcon Digital"
          className="h-12 w-auto sm:h-14 object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]"
          loading="eager"
        />
      </div>

      {/* Orbit ring */}
      <div
        className="absolute inset-0 rounded-full border border-white/20"
        style={{ animation: "orbitSpin 12s linear infinite" }}
      >
        {icons.map((icon, i) => {
          const angle = (i / icons.length) * 360;
          const rad = (angle * Math.PI) / 180;
          const cx = 50 + 42 * Math.cos(rad);
          const cy = 50 + 42 * Math.sin(rad);
          return (
            <div
              key={i}
              className="absolute flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-white/30 bg-white/15 text-base backdrop-blur-md shadow-lg"
              style={{
                left: `${cx}%`,
                top: `${cy}%`,
                transform: "translate(-50%, -50%)",
                animation: `orbitSpin 12s linear infinite reverse`,
              }}
            >
              {icon}
            </div>
          );
        })}
      </div>
      <style>{`
        @keyframes orbitSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}

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

        {/* ── MAIN HERO GRID ─────────────────────────────────────── */}
        <div className="mt-6 grid items-center gap-8 lg:grid-cols-[1fr_auto] xl:gap-16">
          {/* Left: Headline + Grow tagline + CTA */}
          <div>
            {/* Headline words */}
            <h1 className="display-xl text-[clamp(2.75rem,11.5vw,10.5rem)]">
              {WORDS.map((word, i) => (
                <span key={word} className="block overflow-hidden pb-[0.24em] -mb-[0.18em]">
                  <span
                    style={{
                      transitionDelay: `${200 + i * 190}ms`,
                      transform: ready
                        ? "translate3d(calc(var(--mx) * " + (i + 1) * 3 + "px), 0, 0)"
                        : undefined,
                    }}
                    className={cn(
                      "block transition-[transform,opacity,filter,clip-path] duration-[1300ms] [transition-timing-function:var(--ease-out-expo)]",
                      ready
                        ? "translate-y-0 opacity-100 blur-0 [clip-path:none]"
                        : "translate-y-[105%] opacity-0 blur-[10px] [clip-path:inset(0_0_100%_0)]",
                    )}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </h1>

            {/* ── GROW YOUR PRESENCE ONLINE banner ───────────────── */}
            <div
              style={{ transitionDelay: "750ms" }}
              className={cn(
                "mt-8 sm:mt-10 rounded-2xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-purple-700/15 to-indigo-600/20 p-5 sm:p-6 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-all duration-1000 [transition-timing-function:var(--ease-out-expo)]",
                ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
              )}
            >
              {/* Company logo row */}
              <div className="mb-4 flex items-center gap-3">
                <img
                  src="/assets/logo/pearlcon-mark.png"
                  alt="Pearlcon Digital"
                  className="h-8 w-auto object-contain"
                  loading="eager"
                />
                <span className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-muted-foreground/70">
                  Pearlcon Digital
                </span>
              </div>

              {/* GROW YOUR PRESENCE ONLINE heading */}
              <h2
                className="font-display font-black uppercase leading-[1.05] tracking-tight text-foreground"
                style={{ fontSize: "clamp(1.35rem, 3.2vw, 2.4rem)" }}
              >
                <span
                  className="bg-gradient-to-r from-violet-400 via-pink-400 to-orange-400 bg-clip-text text-transparent"
                  style={{ animation: "gradientShift 4s ease-in-out infinite alternate" }}
                >
                  Grow Your Presence Online.
                </span>
              </h2>

              {/* Animated wave */}
              <div className="my-3 opacity-70">
                <AnimatedWave />
              </div>

              {/* Sub-tagline */}
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
                We combine{" "}
                <span className="font-bold text-foreground">social media</span>,{" "}
                <span className="font-bold text-foreground">creative content</span>,{" "}
                <span className="font-bold text-foreground">digital advertising</span>,{" "}
                <span className="font-bold text-foreground">PR</span> and{" "}
                <span className="font-bold text-foreground">nationwide media coverage</span> to help
                you reach the right audience.
              </p>

              {/* Service pills row */}
              <div className="mt-4 flex flex-wrap gap-2">
                {["📱 Social Media", "🎯 Digital Ads", "📰 PR & Media", "🏆 Brand Strategy"].map(
                  (pill, i) => (
                    <span
                      key={pill}
                      className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-foreground/80 backdrop-blur-sm"
                      style={{
                        animation: `fadeSlideIn 0.6s ease both`,
                        animationDelay: `${1100 + i * 80}ms`,
                      }}
                    >
                      {pill}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              style={{ transitionDelay: "940ms" }}
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
          </div>

          {/* Right: Orbit Ring + Hero Graphic */}
          <div
            className="relative hidden lg:flex flex-col items-center justify-center gap-6"
            style={{ transitionDelay: "500ms" }}
          >
            {/* Orbit Ring with logo */}
            <OrbitRing ready={ready} />

            {/* Floating service pills around the orbit */}
            <div className="relative mt-2 w-72 xl:w-80">
              <div className="relative h-40">
                {[
                  { label: "Social Media", icon: "📱", delay: 900, className: "-top-8 left-0" },
                  { label: "Digital PR", icon: "📰", delay: 1050, className: "-top-4 right-0" },
                  { label: "Advertising", icon: "🎯", delay: 1200, className: "top-8 left-4" },
                  { label: "Media Coverage", icon: "📡", delay: 1350, className: "bottom-0 right-2" },
                ].map((p) => (
                  <ServicePill key={p.label} {...p} />
                ))}
              </div>

              {/* Hero illustration image */}
              <div
                className={cn(
                  "mt-4 overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-all duration-1500 [transition-timing-function:var(--ease-out-expo)]",
                  ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                )}
                style={{ transitionDelay: "800ms" }}
              >
                <img
                  src="/assets/hero-graphic.png"
                  alt="Digital marketing illustration — social media, PR and advertising services"
                  loading="eager"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── CLIENT LOGO MARQUEE ─────────────────────────────────── */}
        <div
          style={{ transitionDelay: "1060ms" }}
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
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
