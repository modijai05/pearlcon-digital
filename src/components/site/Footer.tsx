import { CONTACT, NAV_LINKS } from "@/lib/site-data";

import { WhatsAppIcon } from "./icons";

export function Footer() {
  return (
    <footer className="relative w-full px-5 pb-10 pt-16 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid gap-10 border-t border-border pt-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/assets/logo/pearlcon-mark.png"
                alt=""
                className="h-7 w-auto"
                width={34}
                height={27}
                loading="lazy"
              />
              <span className="font-display text-[0.78rem] uppercase tracking-[0.22em]">
                Pearlcon Digital
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Reputation. Visibility. Growth. A 360° PR and digital growth agency based in
              {" "}
              {CONTACT.office}, working with brands across India.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow">Explore</h2>
            <ul className="mt-5 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors duration-400 hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow">Get in touch</h2>
            <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href={CONTACT.phoneHref} className="transition-colors hover:text-foreground">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={CONTACT.emailHref} className="transition-colors hover:text-foreground">
                  {CONTACT.emailDisplay}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" /> WhatsApp
                </a>
              </li>
              <li>{CONTACT.office}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} PEARLCON DIGITAL. All rights reserved.
          </p>
          <p className="eyebrow">Reputation. Visibility. Growth.</p>
        </div>
      </div>
    </footer>
  );
}