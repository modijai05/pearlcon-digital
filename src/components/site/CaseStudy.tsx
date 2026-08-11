import { CASE_STUDY, WHY_US } from "@/lib/site-data";

import { Reveal, Section, SectionLabel } from "./primitives";

export function CaseStudy() {
  return (
    <Section id="case-study">
      <div className="glass overflow-hidden rounded-[2rem]">
        <div className="grid lg:grid-cols-2">
          <div className="p-8 sm:p-12 lg:p-16">
            <Reveal>
              <SectionLabel>Case Study</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-7 display-xl text-[clamp(2rem,4.4vw,3.6rem)]">
                {CASE_STUDY.client}
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                <span className="text-foreground">Objective — </span>
                {CASE_STUDY.objective}
              </p>
            </Reveal>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <Reveal delay={200}>
                <h3 className="eyebrow">Strategy</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                  {CASE_STUDY.strategy.map((s) => (
                    <li key={s} className="border-b border-border pb-2.5">
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={260}>
                <h3 className="eyebrow">Results</h3>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {CASE_STUDY.results.map((r) => (
                    <li key={r} className="border-b border-border pb-2.5">
                      {r}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>

          <Reveal delay={120} className="relative min-h-[18rem] bg-secondary">
            <img
              src={CASE_STUDY.image}
              alt="Media coverage secured for the Formidium campaign"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </div>

      <div className="mt-20 grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
        <Reveal>
          <SectionLabel>Why Brands Choose Us</SectionLabel>
        </Reveal>
        <ul className="grid gap-px overflow-hidden rounded-[1.5rem] border border-border bg-border sm:grid-cols-2">
          {WHY_US.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 80}>
              <div className="h-full bg-card p-8">
                <h3 className="font-display text-xl font-light tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}