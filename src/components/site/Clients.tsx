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
          <p className="max-w-md text-sm font-semibold leading-relaxed text-muted-foreground lg:justify-self-end">
            Hospitality, education, associations and non-profits — brands that rely on credible
            communication and consistent visibility.
          </p>
        </Reveal>
      </div>

      <ul className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[1.5rem] border border-border bg-border sm:grid-cols-3 lg:grid-cols-4">
        {CLIENTS.map((client, i) => (
          <Reveal as="li" key={client.name} delay={Math.min(i, 8) * 55}>
            <div className="group relative flex h-full min-h-[9rem] items-center justify-center overflow-hidden bg-card p-6 transition-colors duration-500 hover:bg-secondary">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,var(--blue-atm),transparent_70%)] opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
              />
              <img
                src={client.logo}
                alt={client.name}
                loading="lazy"
                className="relative max-h-20 sm:max-h-24 w-auto max-w-[85%] object-contain transition-all duration-500 [transition-timing-function:var(--ease-out-expo)] group-hover:-translate-y-1.5 group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-x-3 bottom-3 translate-y-2 text-center text-[0.6rem] uppercase leading-tight tracking-[0.14em] text-muted-foreground opacity-0 transition-all duration-500 [transition-timing-function:var(--ease-out-expo)] group-hover:translate-y-0 group-hover:opacity-100">
                {client.name}
              </span>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}