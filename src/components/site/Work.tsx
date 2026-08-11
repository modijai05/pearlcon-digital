import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { WORK_FILTERS, WORK_ITEMS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

import { Lightbox } from "./Lightbox";
import { Reveal, Section, SectionLabel } from "./primitives";

export function Work() {
  const [filter, setFilter] = useState<(typeof WORK_FILTERS)[number]>("All");
  const [active, setActive] = useState<number | null>(null);

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

      {items.length === 0 ? (
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