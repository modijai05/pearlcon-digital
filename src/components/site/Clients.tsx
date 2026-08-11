import { CLIENTS } from "@/lib/site-data";

import { Reveal, Section, SectionLabel } from "./primitives";

export function Clients() {
  return (
    <Section id="clients">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end">
        <div>
          <Reveal>
            <SectionLabel>Clients</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-7 display-xl text-[clamp(2.1rem,5.2vw,4.2rem)]">
              Trusted across sectors.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={140}>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:justify-self-end">
            Hospitality, education, associations and non-profits — brands that rely on credible
            communication and consistent visibility.
          </p>
        </Reveal>
      </div>

      <ul className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[1.5rem] border border-border bg-border sm:grid-cols-3 lg:grid-cols-4">
        {CLIENTS.map((client, i) => (
          <Reveal as="li" key={client.name} delay={Math.min(i, 8) * 55}>
            <div className="group flex h-full min-h-[9rem] items-center justify-center bg-card p-6 transition-colors duration-500 hover:bg-secondary">
              <img
                src={client.logo}
                alt={client.name}
                loading="lazy"
                className="max-h-16 w-auto max-w-[78%] object-contain opacity-70 mix-blend-multiply transition-all duration-700 [transition-timing-function:var(--ease-out-expo)] group-hover:scale-[1.04] group-hover:opacity-100"
              />
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}