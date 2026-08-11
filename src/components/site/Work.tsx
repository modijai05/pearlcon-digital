import { useMemo, useState } from "react";
import { X } from "lucide-react";

import { WORK_FILTERS, WORK_ITEMS, type WorkItem } from "@/lib/site-data";
import { cn } from "@/lib/utils";

import { Reveal, Section, SectionLabel } from "./primitives";

export function Work() {
  const [filter, setFilter] = useState<(typeof WORK_FILTERS)[number]>("All");
  const [active, setActive] = useState<WorkItem | null>(null);

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
                      ? "border-transparent bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground hover:text-foreground",
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
              className={cn(item.feature && "sm:col-span-2 sm:row-span-2")}
            >
              <button
                type="button"
                onClick={() => setActive(item)}
                className="group glass h-full w-full overflow-hidden rounded-[1.5rem] p-3 text-left transition-all duration-700 [transition-timing-function:var(--ease-out-expo)] hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="overflow-hidden rounded-[1.1rem] bg-card">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] [transition-timing-function:var(--ease-out-expo)] group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 px-2 pb-1 pt-4">
                  <p className="text-sm leading-snug">{item.title}</p>
                  <span className="eyebrow shrink-0 pt-0.5">{item.category}</span>
                </div>
              </button>
            </Reveal>
          ))}
        </ul>
      )}

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActive(null)}
        >
          <div
            className="absolute inset-0 backdrop-blur-xl"
            style={{ background: "oklch(0.268 0.014 268 / 0.5)" }}
          />
          <div
            className="glass-strong relative max-h-full w-full max-w-4xl overflow-y-auto rounded-[1.75rem] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-background/80"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
            <img
              src={active.image}
              alt={active.title}
              className="w-full rounded-[1.25rem] object-contain"
            />
            <p className="px-2 py-4 text-sm text-muted-foreground">{active.title}</p>
          </div>
        </div>
      )}
    </Section>
  );
}