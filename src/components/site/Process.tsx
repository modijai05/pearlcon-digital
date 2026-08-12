import { PROCESS_STEPS } from "@/lib/site-data";

import { Reveal, Section, SectionLabel } from "./primitives";

export function Process() {
  return (
    <Section id="process">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <SectionLabel>How We Work</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-7 display-xl text-[clamp(2.1rem,5.2vw,4.2rem)]">
              A process, not a package.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Five steps that keep media, content and campaigns pointed at the same objective.
            </p>
          </Reveal>
        </div>

        <ol className="relative">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal as="li" key={step.id} delay={i * 90}>
              <div className="group grid grid-cols-[auto_minmax(0,1fr)] gap-6 border-b border-border py-8 transition-colors duration-500 first:border-t sm:gap-10">
                <span className="font-display text-sm font-bold tracking-[0.1em] text-muted-foreground">
                  {step.id}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-2xl font-bold tracking-tight transition-transform duration-700 [transition-timing-function:var(--ease-out-expo)] group-hover:translate-x-1 sm:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm font-medium leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}