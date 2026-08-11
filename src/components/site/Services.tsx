import { DIGITAL_CAPABILITIES, DIGITAL_SERVICES, PR_SERVICES, type Service } from "@/lib/site-data";

import { GlassButton, Reveal, Section, SectionLabel } from "./primitives";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Reveal as="li" delay={index * 80}>
      <article className="group glass h-full rounded-[1.5rem] p-7 transition-all duration-700 [transition-timing-function:var(--ease-out-expo)] hover:-translate-y-1 hover:bg-glass-strong hover:shadow-[var(--shadow-soft)]">
        <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
        <h3 className="mt-6 font-display text-xl font-light tracking-tight sm:text-2xl">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
      </article>
    </Reveal>
  );
}

export function Services() {
  return (
    <Section id="services">
      <Reveal>
        <SectionLabel>What We Do</SectionLabel>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-7 max-w-4xl display-xl text-[clamp(2.1rem,5.2vw,4.6rem)]">
          Two divisions. One strategy.
        </h2>
      </Reveal>

      <div className="mt-16 space-y-16">
        <div>
          <Reveal>
            <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 border-b border-border pb-5">
              <h3 className="font-display text-2xl font-light tracking-tight sm:text-3xl">
                PR &amp; Media
              </h3>
              <p className="text-sm text-muted-foreground">
                Media coverage and reputation, across India.
              </p>
            </div>
          </Reveal>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {PR_SERVICES.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </ul>
        </div>

        <div>
          <Reveal>
            <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 border-b border-border pb-5">
              <h3 className="font-display text-2xl font-light tracking-tight sm:text-3xl">
                Digital Marketing
              </h3>
              <p className="text-sm text-muted-foreground">
                Digital growth built around business goals.
              </p>
            </div>
          </Reveal>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {DIGITAL_SERVICES.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </ul>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <Reveal>
            <div>
              <SectionLabel>Full Capability List</SectionLabel>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Everything below is delivered in-house, and scoped to what your brand actually
                needs. Tell us the objective and we'll recommend the right combination.
              </p>
              <GlassButton href="#contact" className="mt-8">
                Discuss requirements
              </GlassButton>
            </div>
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-2">
            {DIGITAL_CAPABILITIES.map((group, gi) => (
              <Reveal as="li" key={group.group} delay={gi * 70}>
                <div className="glass h-full rounded-[1.5rem] p-6">
                  <h4 className="text-[0.7rem] uppercase tracking-[0.16em]">{group.group}</h4>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}