import { MEDIA_COVERAGE, SOCIAL_PROFILES } from "@/lib/site-data";

import { Reveal, Section, SectionLabel } from "./primitives";

export function MediaCoverage() {
  return (
    <Section id="media">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-end">
        <div>
          <Reveal>
            <SectionLabel>Media Coverage</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-7 display-xl text-[clamp(2.1rem,5.2vw,4.2rem)]">
              Seen in print.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={140}>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:justify-self-end">
            Newspaper and digital placements secured for our clients through focused media
            outreach.
          </p>
        </Reveal>
      </div>

      <ul className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>li]:mb-5 [&>li]:break-inside-avoid">
        {MEDIA_COVERAGE.map((item, i) => (
          <Reveal as="li" key={item.id} delay={Math.min(i, 5) * 70}>
            <figure className="glass overflow-hidden rounded-[1.5rem] p-3">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full rounded-[1.1rem] object-cover"
              />
              <figcaption className="px-2 pb-1 pt-3 text-xs leading-relaxed text-muted-foreground">
                {item.title}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

export function SocialPresence() {
  return (
    <Section id="social">
      <Reveal>
        <SectionLabel>Social Media We Manage</SectionLabel>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-7 max-w-3xl display-xl text-[clamp(2.1rem,5.2vw,4.2rem)]">
          Pages we run, day after day.
        </h2>
      </Reveal>

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {SOCIAL_PROFILES.map((item, i) => (
          <Reveal as="li" key={item.id} delay={i * 80}>
            <figure className="glass h-full overflow-hidden rounded-[1.5rem] p-3 transition-transform duration-700 [transition-timing-function:var(--ease-out-expo)] hover:-translate-y-1">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full rounded-[1.1rem] object-cover"
              />
              <figcaption className="px-2 pb-1 pt-3 text-xs leading-relaxed text-muted-foreground">
                {item.title}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}