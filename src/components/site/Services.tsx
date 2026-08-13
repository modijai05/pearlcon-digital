import { DIGITAL_CAPABILITIES, DIGITAL_SERVICES, PR_SERVICES, type Service } from "@/lib/site-data";
import { GlassButton, Reveal, Section, SectionLabel } from "./primitives";

/* ── Group icons ──────────────────────────────────────────────────────────── */
const GROUP_ICONS: Record<string, JSX.Element> = {
  "Website & Digital Presence": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6" aria-hidden>
      <circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" /><path d="M2 12h20" />
    </svg>
  ),
  "Social Media": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6" aria-hidden>
      <path d="M17 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM7 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM17 16a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" /><path d="M14.5 4.5L9.5 11M9.5 13l5 4" />
    </svg>
  ),
  "Creative & Design": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6" aria-hidden>
      <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  ),
  "WhatsApp & Automation": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6" aria-hidden>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  "Digital Advertising": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6" aria-hidden>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
};

const GROUP_GRADIENT: Record<string, string> = {
  "Website & Digital Presence": "from-blue-500/15 to-indigo-500/10",
  "Social Media":               "from-pink-500/15 to-rose-400/10",
  "Creative & Design":          "from-violet-500/15 to-purple-400/10",
  "WhatsApp & Automation":      "from-emerald-500/15 to-green-400/10",
  "Digital Advertising":        "from-amber-500/15 to-orange-400/10",
};

const GROUP_ICON_COLOR: Record<string, string> = {
  "Website & Digital Presence": "text-blue-500",
  "Social Media":               "text-pink-500",
  "Creative & Design":          "text-violet-500",
  "WhatsApp & Automation":      "text-emerald-500",
  "Digital Advertising":        "text-amber-500",
};

const SERVICE_ICONS: Record<string, JSX.Element> = {
  "media-coverage": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-8 w-8" aria-hidden>
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
      <path d="M18 14h-8" /><path d="M15 18h-5" /><path d="M10 6h8v4h-8V6z" />
    </svg>
  ),
  "press-releases": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-8 w-8" aria-hidden>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  "digital-pr": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-8 w-8" aria-hidden>
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  "crisis": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-8 w-8" aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  "social-media": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-8 w-8" aria-hidden>
      <path d="M17 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM7 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM17 16a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
      <path d="M14.5 4.5L9.5 11M9.5 13l5 4" />
    </svg>
  ),
  "content-design": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-8 w-8" aria-hidden>
      <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  ),
  "paid-ads": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-8 w-8" aria-hidden>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  "brand-strategy": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-8 w-8" aria-hidden>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
};

const SERVICE_GRADIENT: Record<string, string> = {
  "media-coverage":  "from-sky-500 to-blue-600",
  "press-releases":  "from-indigo-500 to-violet-600",
  "digital-pr":      "from-cyan-500 to-teal-600",
  "crisis":          "from-rose-500 to-red-600",
  "social-media":    "from-pink-500 to-fuchsia-600",
  "content-design":  "from-violet-500 to-purple-600",
  "paid-ads":        "from-amber-500 to-orange-600",
  "brand-strategy":  "from-emerald-500 to-green-600",
};

/* ── Service card ─────────────────────────────────────────────────────────── */
function ServiceCard({ service, index }: { service: Service; index: number }) {
  const grad = SERVICE_GRADIENT[service.id] ?? "from-primary to-primary/70";
  const icon = SERVICE_ICONS[service.id];
  return (
    <Reveal as="li" delay={index * 80}>
      <article className="group glass h-full rounded-[1.5rem] p-7 transition-all duration-700 [transition-timing-function:var(--ease-out-expo)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-soft)] overflow-hidden relative">
        {/* subtle gradient glow on hover */}
        <span className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${grad} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-700 rounded-[1.5rem]`} />

        {/* icon badge */}
        {icon && (
          <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${grad} text-white shadow-md`}>
            {icon}
          </div>
        )}

        <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
        <h3 className="mt-4 font-display text-xl font-bold tracking-tight sm:text-2xl">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
      </article>
    </Reveal>
  );
}

/* ── Capability group card ────────────────────────────────────────────────── */
function CapabilityCard({ group, gi }: { group: { group: string; items: string[] }; gi: number }) {
  const icon = GROUP_ICONS[group.group];
  const grad = GROUP_GRADIENT[group.group] ?? "from-primary/10 to-primary/5";
  const iconColor = GROUP_ICON_COLOR[group.group] ?? "text-primary";
  return (
    <Reveal as="li" delay={gi * 80}>
      <div className={`group glass h-full rounded-[1.5rem] p-6 transition-all duration-700 [transition-timing-function:var(--ease-out-expo)] hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] relative overflow-hidden`}>
        {/* gradient wash */}
        <span className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${grad} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[1.5rem]`} />

        {/* icon + group label */}
        <div className="relative flex items-center gap-3 mb-5">
          <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-card shadow-sm border border-border ${iconColor} transition-transform duration-500 group-hover:scale-110`}>
            {icon}
          </div>
          <h4 className="font-display text-sm font-bold uppercase tracking-[0.12em] text-foreground">
            {group.group}
          </h4>
        </div>

        {/* items */}
        <ul className="relative flex flex-wrap gap-2">
          {group.items.map((item) => (
            <li
              key={item}
              className="rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:text-foreground hover:bg-card"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

/* ── Services section ─────────────────────────────────────────────────────── */
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

      <div className="mt-16 space-y-20">
        {/* PR & Media */}
        <div>
          <Reveal>
            <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 border-b-2 border-border pb-5">
              <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                PR &amp; Media
              </h3>
              <p className="text-sm font-medium text-muted-foreground">
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

        {/* Digital Marketing */}
        <div>
          <Reveal>
            <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 border-b-2 border-border pb-5">
              <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Digital Marketing
              </h3>
              <p className="text-sm font-medium text-muted-foreground">
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

        {/* Full Capability List */}
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionLabel>Full Capability List</SectionLabel>
              <h3 className="mt-5 font-display text-2xl font-bold tracking-tight sm:text-3xl leading-snug">
                Everything in-house,<br />scoped to you.
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Delivered in-house and scoped to what your brand actually needs. Tell us the
                objective and we'll recommend the right combination.
              </p>
              <GlassButton href="#contact" className="mt-8">
                Discuss requirements
              </GlassButton>

              {/* decorative stat pills */}
              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  { n: "15+", label: "Sectors" },
                  { n: "360°", label: "Coverage" },
                  { n: "1000+", label: "Clients" },
                ].map(({ n, label }) => (
                  <div
                    key={label}
                    className="glass rounded-2xl px-4 py-3 flex flex-col items-center min-w-[72px]"
                  >
                    <span className="font-display text-2xl font-bold tracking-tight">{n}</span>
                    <span className="eyebrow mt-0.5">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-2">
            {DIGITAL_CAPABILITIES.map((group, gi) => (
              <CapabilityCard key={group.group} group={group} gi={gi} />
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}