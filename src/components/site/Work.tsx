import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { WORK_FILTERS, WORK_ITEMS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

import { Lightbox } from "./Lightbox";
import { Reveal, Section, SectionLabel } from "./primitives";

/* ─── Instagram placeholder card ────────────────────────────────────────── */
function InstaPlaceholderCard({ delay }: { delay: number }) {
  return (
    <Reveal as="li" delay={delay}>
      <div className="glass group relative overflow-hidden rounded-[1.5rem] p-6 transition-transform duration-700 [transition-timing-function:var(--ease-out-expo)] hover:-translate-y-1">
        {/* shimmer sweep */}
        <div className="pointer-events-none absolute inset-0 -translate-x-full animate-[shimmer_2.2s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        {/* Big Instagram logo centred */}
        <div className="flex flex-col items-center py-6">
          <div className="relative mb-5">
            {/* glow ring */}
            <span className="absolute inset-0 rounded-full animate-[pulse_2.4s_ease-in-out_infinite] bg-gradient-to-br from-[#833ab4]/50 via-[#fd1d1d]/50 to-[#fcb045]/50 blur-xl scale-125" />
            {/* gradient border */}
            <div className="relative h-20 w-20 rounded-[22px] bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] p-[3px] shadow-lg">
              <div className="flex h-full w-full items-center justify-center rounded-[19px] bg-card">
                <svg
                  viewBox="0 0 24 24"
                  className="h-10 w-10"
                  fill="url(#ig-grad)"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#fcb045" />
                      <stop offset="50%" stopColor="#fd1d1d" />
                      <stop offset="100%" stopColor="#833ab4" />
                    </linearGradient>
                  </defs>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
            </div>
          </div>

          {/* handle skeleton */}
          <div className="h-3.5 w-32 animate-pulse rounded-full bg-muted-foreground/20 mb-2" />
          <div className="h-2.5 w-24 animate-pulse rounded-full bg-muted-foreground/12 mb-5" style={{ animationDelay: "0.2s" }} />

          {/* stats */}
          <div className="flex w-full justify-around border-t border-border pt-4">
            {["Posts", "Followers", "Following"].map((label, j) => (
              <div key={label} className="flex flex-col items-center gap-1.5">
                <div
                  className="h-3 w-8 animate-pulse rounded-full bg-muted-foreground/20"
                  style={{ animationDelay: `${j * 0.15}s` }}
                />
                <span className="text-[0.58rem] uppercase tracking-widest text-muted-foreground/50">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* post grid */}
          <div className="mt-4 grid w-full grid-cols-3 gap-1">
            {Array.from({ length: 6 }).map((_, k) => (
              <div
                key={k}
                className="aspect-square animate-pulse rounded-md bg-muted-foreground/10"
                style={{ animationDelay: `${k * 0.08}s` }}
              />
            ))}
          </div>
        </div>

        <p className="text-center text-[0.62rem] uppercase tracking-[0.15em] text-muted-foreground/40">
          Coming soon
        </p>
      </div>
    </Reveal>
  );
}

/* ─── Work section ───────────────────────────────────────────────────────── */
export function Work() {
  const [filter, setFilter] = useState<(typeof WORK_FILTERS)[number]>("All");
  const [active, setActive] = useState<number | null>(null);

  const isSocial = filter === "Social Media";

  const items = useMemo(
    () => (filter === "All" ? WORK_ITEMS : WORK_ITEMS.filter((i) => i.category === filter)),
    [filter],
  );

  return (
    <Section id="work">
      <Reveal>
        <SectionLabel>Our Work</SectionLabel>
      </Reveal>
      <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <Reveal delay={60}>
          <h2 className="display-xl text-[clamp(2.1rem,5.2vw,4.6rem)]">
            Coverage, campaigns
            <br />
            and creative.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <ul className="flex flex-wrap gap-2">
            {WORK_FILTERS.map((f) => (
              <li key={f}>
                <button
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={filter === f}
                  className={cn(
                    "rounded-full border px-4 py-2 text-[0.66rem] uppercase tracking-[0.14em] transition-all duration-500 [transition-timing-function:var(--ease-out-expo)]",
                    filter === f
                      ? "border-transparent bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                      : "glass border-transparent text-muted-foreground hover:-translate-y-0.5 hover:text-foreground",
                  )}
                >
                  {f}
                </button>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Social Media → animated placeholders */}
      {isSocial ? (
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <InstaPlaceholderCard key={i} delay={i * 80} />
          ))}
        </ul>
      ) : items.length === 0 ? (
        <p className="mt-16 rounded-[1.5rem] border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
          New {filter.toLowerCase()} work is being added to this section shortly.
        </p>
      ) : (
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal
              as="li"
              key={item.id}
              delay={Math.min(i, 6) * 70}
              className={cn(
                "transition-[grid-column,grid-row] duration-500",
                item.feature && "sm:col-span-2 sm:row-span-2",
                !item.feature && i % 5 === 3 && "lg:col-span-2",
              )}
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                data-cursor="Open"
                className="group glass h-full w-full overflow-hidden rounded-[1.5rem] p-3 text-left transition-all duration-700 [transition-timing-function:var(--ease-out-expo)] hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="relative overflow-hidden rounded-[1.1rem] bg-card">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_top,oklch(0.268_0.014_268/0.55),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <span className="pointer-events-none absolute bottom-3 left-4 z-20 translate-y-3 text-[0.6rem] uppercase tracking-[0.16em] text-background opacity-0 transition-all duration-500 [transition-timing-function:var(--ease-out-expo)] group-hover:translate-y-0 group-hover:opacity-100">
                    {item.category}
                  </span>
                  <span className="pointer-events-none absolute bottom-3 right-4 z-20 grid h-8 w-8 translate-y-3 place-items-center rounded-full bg-background/90 opacity-0 transition-all duration-500 [transition-timing-function:var(--ease-out-expo)] group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] [transition-timing-function:var(--ease-out-expo)] group-hover:scale-[1.06]"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 px-2 pb-1 pt-4">
                  <p className="text-sm leading-snug transition-transform duration-500 [transition-timing-function:var(--ease-out-expo)] group-hover:-translate-y-0.5">{item.title}</p>
                  <span className="eyebrow shrink-0 pt-0.5">{item.category}</span>
                </div>
              </button>
            </Reveal>
          ))}
        </ul>
      )}

      {active !== null && (
        <Lightbox items={items} index={active} onClose={() => setActive(null)} onIndex={setActive} />
      )}
    </Section>
  );
}