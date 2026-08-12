import { CONTACT, NAV_LINKS } from "@/lib/site-data";
import { WhatsAppIcon } from "./icons";

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden px-5 pb-10 pt-16 sm:px-8 lg:px-12">
      {/* Top Gradient Hairline Accent */}
      <div aria-hidden className="mx-auto h-[2px] w-full max-w-[1440px] bg-gradient-to-r from-transparent via-amber-500/40 via-purple-500/40 to-transparent" />

      <div className="mx-auto w-full max-w-[1440px] pt-12">
        <div className="grid gap-12 border-t border-border/60 pt-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <a href="#top" className="group flex items-center gap-3">
              <div className="relative flex h-8 w-8 items-center justify-center">
                <span aria-hidden className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500/40 via-purple-500/40 to-blue-500/40 blur-md animate-pulse group-hover:scale-125 transition-transform duration-500" />
                <img
                  src="/assets/logo/pearlcon-mark.png"
                  alt=""
                  className="relative h-7 w-auto transition-transform duration-500 group-hover:scale-110"
                  width={34}
                  height={27}
                  loading="lazy"
                />
              </div>
              <span className="font-display text-[0.85rem] font-extrabold uppercase tracking-[0.22em] text-foreground">
                Pearlcon Digital
              </span>
            </a>
            <p className="mt-6 max-w-sm text-sm font-semibold leading-relaxed text-muted-foreground">
              Reputation. Visibility. Growth. A 360° PR and digital growth agency based in{" "}
              <span className="font-bold text-foreground">{CONTACT.office}</span>, delivering nationwide media coverage &amp; digital marketing across India.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow font-extrabold text-foreground">Explore Navigation</h2>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => {
                const isElection = l.label.toLowerCase().includes("election");
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className={`group inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 hover:translate-x-1.5 ${
                        isElection
                          ? "bg-gradient-to-r from-amber-600 via-rose-600 to-purple-600 bg-clip-text text-transparent font-black"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/40 transition-transform duration-300 group-hover:scale-150 group-hover:bg-primary" />
                      {l.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow font-extrabold text-foreground">Get In Touch</h2>
            <ul className="mt-5 space-y-3.5 text-sm font-bold text-muted-foreground">
              <li>
                <a href={CONTACT.phoneHref} className="transition-all duration-300 hover:text-foreground hover:translate-x-1 inline-block">
                  <span className="text-muted-foreground/60 mr-1.5 font-normal">Phone:</span>
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={CONTACT.emailHref} className="transition-all duration-300 hover:text-foreground hover:translate-x-1 inline-block">
                  <span className="text-muted-foreground/60 mr-1.5 font-normal">Email:</span>
                  {CONTACT.emailDisplay}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 transition-all duration-300 hover:translate-x-1.5"
                >
                  <WhatsAppIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-125" />
                  <span className="font-extrabold">WhatsApp Chat Desk</span>
                </a>
              </li>
              <li className="font-semibold text-foreground/80">
                <span className="text-muted-foreground/60 mr-1.5 font-normal">Headquarters:</span>
                {CONTACT.office}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-6">
          <p className="text-xs font-bold text-muted-foreground">
            © {new Date().getFullYear()} PEARLCON DIGITAL. All rights reserved.
          </p>
          <p className="eyebrow font-black bg-gradient-to-r from-amber-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Reputation. Visibility. Growth.
          </p>
        </div>
      </div>
    </footer>
  );
}