import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { z } from "zod";

import { CONTACT, DIGITAL_SERVICES, PR_SERVICES } from "@/lib/site-data";

import { WhatsAppIcon } from "./icons";
import { GlassButton, Reveal, Section, SectionLabel } from "./primitives";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20, "Please enter a valid phone number")
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number"),
  email: z.string().trim().email("Please enter a valid email").max(255),
  service: z.string().trim().min(1, "Please select a service"),
  message: z.string().trim().min(10, "Please add a few more details").max(1000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const SERVICE_OPTIONS = [
  ...PR_SERVICES.map((s) => s.title),
  ...DIGITAL_SERVICES.map((s) => s.title),
  "Website & Digital Presence",
  "Something else",
];

const fieldClass =
  "w-full rounded-xl border border-border bg-background/70 px-4 py-3.5 text-sm outline-none transition-all duration-400 placeholder:text-muted-foreground/70 focus:border-foreground/30 focus:bg-background";

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    const v = parsed.data;
    const text = `New enquiry via pearlcon.in%0A%0AName: ${v.name}%0APhone: ${v.phone}%0AEmail: ${v.email}%0AService: ${v.service}%0A%0A${v.message}`;
    window.open(
      `https://wa.me/917300055922?text=${encodeURIComponent(decodeURIComponent(text))}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <Section id="contact">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
        <div>
          <Reveal>
            <SectionLabel>Contact</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-7 display-xl text-[clamp(2.2rem,6vw,5rem)]">
              Let's build your
              <br />
              brand's reputation.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-7 max-w-md text-sm leading-relaxed text-muted-foreground">
              Tell us about your brand and objectives. We'll come back with the right PR and
              digital direction — usually within one business day.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <ul className="mt-12 space-y-1">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="group flex items-center gap-4 border-b border-border py-5 transition-colors duration-500 hover:text-foreground"
                >
                  <Phone className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
                  <span className="min-w-0 flex-1 font-display text-xl font-light tracking-tight">
                    {CONTACT.phoneDisplay}
                  </span>
                  <span className="eyebrow">Call</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 border-b border-border py-5"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <span className="min-w-0 flex-1 font-display text-xl font-light tracking-tight">
                    {CONTACT.whatsappDisplay}
                  </span>
                  <span className="eyebrow">WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.emailHref}
                  className="group flex items-center gap-4 border-b border-border py-5"
                >
                  <Mail className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
                  <span className="min-w-0 flex-1 truncate font-display text-xl font-light tracking-tight">
                    {CONTACT.emailDisplay}
                  </span>
                  <span className="eyebrow">Email</span>
                </a>
              </li>
              <li className="flex items-center gap-4 border-b border-border py-5">
                <MapPin className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
                <span className="min-w-0 flex-1 font-display text-xl font-light tracking-tight">
                  {CONTACT.office}
                </span>
                <span className="eyebrow">{CONTACT.reach}</span>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <form onSubmit={onSubmit} noValidate className="glass rounded-[2rem] p-6 sm:p-9">
            <div className="grid gap-5">
              <div>
                <label htmlFor="name" className="eyebrow">
                  Name
                </label>
                <input id="name" name="name" className={`mt-3 ${fieldClass}`} placeholder="Your full name" />
                {errors.name && <p className="mt-2 text-xs text-destructive">{errors.name}</p>}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="eyebrow">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    inputMode="tel"
                    className={`mt-3 ${fieldClass}`}
                    placeholder="Contact number"
                  />
                  {errors.phone && <p className="mt-2 text-xs text-destructive">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="eyebrow">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    inputMode="email"
                    className={`mt-3 ${fieldClass}`}
                    placeholder="name@company.com"
                  />
                  {errors.email && <p className="mt-2 text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="service" className="eyebrow">
                  Service required
                </label>
                <select id="service" name="service" defaultValue="" className={`mt-3 ${fieldClass}`}>
                  <option value="" disabled>
                    Select a service
                  </option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-2 text-xs text-destructive">{errors.service}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="eyebrow">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={`mt-3 resize-none ${fieldClass}`}
                  placeholder="Tell us about your brand and what you'd like to achieve."
                />
                {errors.message && (
                  <p className="mt-2 text-xs text-destructive">{errors.message}</p>
                )}
              </div>

              <GlassButton variant="solid" type="submit" className="w-full py-4">
                Send Enquiry
              </GlassButton>

              <p aria-live="polite" className="min-h-5 text-xs text-muted-foreground">
                {sent
                  ? "Thank you — your enquiry has been prepared on WhatsApp. Press send there and we'll respond within one business day."
                  : "Your enquiry opens in WhatsApp so we can respond immediately."}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}