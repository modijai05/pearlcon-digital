import { MEDIA_COVERAGE } from "@/lib/site-data";

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

const PLACEHOLDER_COUNT = 4;

function InstaPlaceholderCard({ delay }: { delay: number }) {
  return (
    <Reveal as="li" delay={delay}>
      <div className="glass group relative overflow-hidden rounded-[1.5rem] p-5 transition-transform duration-700 [transition-timing-function:var(--ease-out-expo)] hover:-translate-y-1">
        {/* Shimmer sweep */}
        <div className="pointer-events-none absolute inset-0 -translate-x-full animate-[shimmer_2.2s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        {/* Profile header */}
        <div className="flex items-center gap-3">
          {/* Instagram gradient avatar ring */}
          <div className="relative h-12 w-12 shrink-0 rounded-full bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] p-[2px]">
            <div className="h-full w-full rounded-full bg-card" />
            <span className="absolute inset-0 rounded-full animate-[pulse_2.5s_ease-in-out_infinite] bg-gradient-to-br from-[#833ab4]/40 via-[#fd1d1d]/40 to-[#fcb045]/40 blur-sm" />
          </div>
          {/* Handle skeleton */}
          <div className="flex-1 space-y-2">
            <div className="h-3 w-28 animate-pulse rounded-full bg-muted-foreground/20" />
            <div
              className="h-2.5 w-20 animate-pulse rounded-full bg-muted-foreground/10"
              style={{ animationDelay: "0.3s" }}
            />
          </div>
          {/* Instagram logo */}
          <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-muted-foreground/40" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </div>

        {/* Stats row */}
        <div className="mt-4 flex justify-between">
          {["Posts", "Followers", "Following"].map((label, j) => (
            <div key={label} className="flex flex-col items-center gap-1.5">
              <div
                className="h-3.5 w-8 animate-pulse rounded-full bg-muted-foreground/20"
                style={{ animationDelay: `${j * 0.15}s` }}
              />
              <span className="text-[0.6rem] uppercase tracking-widest text-muted-foreground/50">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Bio skeleton lines */}
        <div className="mt-4 space-y-2">
          <div
            className="h-2.5 w-full animate-pulse rounded-full bg-muted-foreground/10"
            style={{ animationDelay: "0.2s" }}
          />
          <div
            className="h-2.5 w-4/5 animate-pulse rounded-full bg-muted-foreground/10"
            style={{ animationDelay: "0.35s" }}
          />
        </div>

        {/* Post grid skeleton */}
        <div className="mt-4 grid grid-cols-3 gap-1">
          {Array.from({ length: 6 }).map((_, k) => (
            <div
              key={k}
              className="aspect-square animate-pulse rounded-md bg-muted-foreground/10"
              style={{ animationDelay: `${k * 0.08}s` }}
            />
          ))}
        </div>

        {/* Coming soon badge */}
        <p className="mt-4 text-center text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground/40">
          Coming soon
        </p>
      </div>
    </Reveal>
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
      <Reveal delay={140}>
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
          We manage Instagram and social profiles across hospitality, education, and lifestyle
          brands. Client handles will be featured here shortly.
        </p>
      </Reveal>

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
          <InstaPlaceholderCard key={i} delay={i * 80} />
        ))}
      </ul>
    </Section>
  );
}