import { useEffect, useState } from "react";
import { Menu, Phone, Sparkles, X } from "lucide-react";

import { CONTACT, NAV_LINKS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

import { WhatsAppIcon } from "./icons";

export function Header() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 220 && y > last);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.2, 0.5] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed left-1/2 top-3 z-50 w-[min(96vw,1320px)] -translate-x-1/2 transition-all duration-700 [transition-timing-function:var(--ease-out-expo)] sm:top-5",
          hidden && !open ? "-translate-y-[140%] opacity-0" : "translate-y-0 opacity-100",
        )}
      >
        <div
          className={cn(
            "glass grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-full py-2 pl-4 pr-2 sm:pl-5 xl:grid-cols-[auto_minmax(0,1fr)_auto]",
            scrolled && "bg-glass-strong shadow-lg border-primary/20",
          )}
        >
          {/* Logo with Animated Glow Effect */}
          <a
            href="#top"
            className="group flex min-w-0 items-center gap-3"
            aria-label="PEARLCON DIGITAL — home"
          >
            <div className="relative flex h-8 w-8 items-center justify-center shrink-0">
              <span aria-hidden className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500/50 via-pink-500/50 to-purple-500/50 blur-md animate-pulse [animation-duration:3s] group-hover:scale-125 transition-transform duration-500" />
              <img
                src="/assets/logo/pearlcon-mark.png"
                alt=""
                className="relative h-7 w-auto shrink-0 drop-shadow-md transition-transform duration-500 group-hover:scale-110"
                width={34}
                height={27}
              />
            </div>
            <span className="truncate font-display text-[0.78rem] font-extrabold uppercase tracking-[0.22em] text-foreground sm:text-[0.84rem]">
              Pearlcon Digital
            </span>
          </a>

          {/* Navigation Links — Bold & Colourful Election Services */}
          <nav className="hidden items-center gap-6 justify-self-center xl:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => {
              const isElection = link.label.toLowerCase().includes("election");
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-[0.72rem] font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:scale-105",
                    isElection
                      ? "rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 px-3 py-1 text-white shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 font-extrabold animate-pulse"
                      : isActive
                        ? "text-foreground font-black"
                        : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {isElection && <Sparkles className="mr-1.5 inline-block h-3 w-3 animate-spin [animation-duration:6s]" />}
                  {link.label}
                  {!isElection && (
                    <span
                      aria-hidden
                      className={cn(
                        "absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-foreground transition-opacity duration-300",
                        isActive ? "opacity-100" : "opacity-0",
                      )}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={CONTACT.phoneHref}
              className="hidden items-center gap-2 rounded-full border border-border px-4 py-2.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] transition-all duration-400 hover:bg-secondary hover:scale-105 lg:inline-flex"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden />
              Call Now
            </a>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-primary-foreground shadow-md transition-all duration-400 hover:-translate-y-0.5 hover:scale-105 lg:inline-flex"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              Let's Connect
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="glass grid h-10 w-10 shrink-0 place-items-center rounded-full xl:hidden"
            >
              <Menu className="h-4 w-4" aria-hidden />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-[60] transition-opacity duration-500 xl:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div
          className="glass-strong absolute inset-0 flex flex-col overflow-y-auto px-6 pb-10 pt-6"
          style={{ background: "oklch(0.977 0.002 106 / 0.92)" }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <img src="/assets/logo/pearlcon-mark.png" alt="" className="h-6 w-auto" />
              <span className="font-display text-[0.8rem] font-bold uppercase tracking-[0.22em]">
                Pearlcon Digital
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="glass grid h-10 w-10 place-items-center rounded-full"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
            {NAV_LINKS.map((link, i) => {
              const isElection = link.label.toLowerCase().includes("election");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: `${open ? 80 + i * 45 : 0}ms` }}
                  className={cn(
                    "border-b border-border/60 py-3.5 font-display text-2xl font-bold tracking-tight transition-all duration-700 [transition-timing-function:var(--ease-out-expo)] sm:text-3xl",
                    isElection && "bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 bg-clip-text text-transparent font-extrabold",
                    open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="mt-auto grid gap-3 pt-8">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-[0.72rem] font-bold uppercase tracking-[0.14em]"
            >
              <Phone className="h-4 w-4" aria-hidden /> Call Now
            </a>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-primary-foreground"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}