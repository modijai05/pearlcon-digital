import { Reveal, Section, SectionLabel } from "./primitives";

const STATS = [
  { value: "2", label: "Specialised divisions" },
  { value: "16+", label: "Brands & institutions served" },
  { value: "PAN", label: "India media reach" },
];

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20">
        <div>
          <Reveal>
            <SectionLabel>Who We Are</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-7 display-xl text-[clamp(2.1rem,5.2vw,4.6rem)]">
              A 360° PR and digital growth partner.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                PEARLCON DIGITAL helps brands build reputation, visibility and growth through
                nationwide media coverage and modern digital marketing.
              </p>
              <p>
                We work through two divisions — PR &amp; Media and Digital Marketing — so
                communication and campaigns move together under one strategy, instead of being
                handled in silos.
              </p>
            </div>
          </Reveal>

          <ul className="mt-12 grid grid-cols-3 gap-4">
            {STATS.map((stat, i) => (
              <Reveal as="li" key={stat.label} delay={220 + i * 90}>
                <p className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-semibold leading-snug text-muted-foreground">{stat.label}</p>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={120} className="lg:pt-4">
          <figure className="glass overflow-hidden rounded-[2rem] p-3 sm:p-5">
            <img
              src="/assets/illustrations/about-crowd.png"
              alt="Audience at a large brand event hosted for a PEARLCON DIGITAL client"
              loading="lazy"
              className="w-full rounded-[1.4rem] object-cover"
            />
            <figcaption className="px-2 py-4 text-xs leading-relaxed text-muted-foreground">
              Reputation is built in public — through the rooms your brand is seen in, and the
              publications that carry its story.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </Section>
  );
}