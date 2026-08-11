import { useState } from "react";
import { Plus } from "lucide-react";

import { FAQS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

import { Reveal, Section, SectionLabel } from "./primitives";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faqs">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <SectionLabel>FAQs</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-7 display-xl text-[clamp(2.1rem,5vw,4rem)]">
              Questions,
              <br />
              answered.
            </h2>
          </Reveal>
        </div>

        <ul>
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal as="li" key={faq.q} delay={Math.min(i, 6) * 45}>
                <div className="border-b border-border first:border-t">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-start justify-between gap-6 py-6 text-left"
                    >
                      <span className="max-w-2xl font-display text-lg font-light tracking-tight sm:text-xl">
                        {faq.q}
                      </span>
                      <span
                        aria-hidden
                        className={cn(
                          "mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border transition-all duration-500 [transition-timing-function:var(--ease-out-expo)]",
                          isOpen && "rotate-45 bg-primary text-primary-foreground",
                        )}
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </span>
                    </button>
                  </h3>
                  <div
                    className={cn(
                      "grid transition-all duration-700 [transition-timing-function:var(--ease-out-expo)]",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-7 text-sm leading-relaxed text-muted-foreground">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}