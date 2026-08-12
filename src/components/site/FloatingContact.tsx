import { useEffect, useState } from "react";
import { ArrowRight, MessageSquare, Phone, Sparkles, X } from "lucide-react";

import { CONTACT } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./icons";

export function FloatingContact() {
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 350) {
        setShow(true);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleVisitElectionSection = (e: React.MouseEvent) => {
    const el = document.getElementById("election-services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  if (dismissed) return null;

  return (
    <div
      className={cn(
        "fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 transition-all duration-700 [transition-timing-function:var(--ease-out-expo)]",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0",
      )}
    >
      {/* Expanded Animated Popup Card */}
      {isOpen && (
        <div className="relative w-84 max-w-[90vw] overflow-hidden rounded-3xl border border-amber-500/50 bg-card/95 p-6 shadow-2xl backdrop-blur-2xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-5">
          {/* Top ambient color glow */}
          <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br from-amber-500/30 to-purple-500/30 blur-2xl animate-pulse" />

          {/* Close button */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close popup"
            className="absolute right-4 top-4 grid h-7 w-7 place-items-center rounded-full bg-muted/60 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Live Indicator Badge */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[0.68rem] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Active Campaign Desk
            </span>
          </div>

          <h4 className="mt-3 font-display text-xl font-extrabold tracking-tight text-foreground">
            Election Digital Services 2026
          </h4>
          <p className="mt-1.5 text-xs font-medium leading-relaxed text-muted-foreground">
            Nationwide PR, Candidate Websites, Social Media Command Rooms &amp; Voter Ads for 2026 Elections.
          </p>

          {/* Visit Election Section Button */}
          <div className="mt-5 space-y-2.5">
            <a
              href="#election-services"
              onClick={handleVisitElectionSection}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 px-4 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-amber-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-amber-500/40"
            >
              <Sparkles className="h-4 w-4 animate-spin [animation-duration:6s]" />
              Visit Election Section 2026
              <ArrowRight className="h-4 w-4" />
            </a>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600/10 border border-emerald-600/30 px-3 py-2.5 text-[0.68rem] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 transition-colors hover:bg-emerald-600/20"
              >
                <WhatsAppIcon className="h-3.5 w-3.5" />
                WhatsApp
              </a>
              <a
                href={CONTACT.phoneHref}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-border bg-card px-3 py-2.5 text-[0.68rem] font-bold uppercase tracking-wider text-foreground transition-colors hover:bg-muted"
              >
                <Phone className="h-3.5 w-3.5 text-primary" />
                Call Desk
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Animated Floating Trigger Banner */}
      <div className="flex items-center gap-2">
        {/* Animated Banner Badge */}
        {!isOpen && (
          <a
            href="#election-services"
            onClick={handleVisitElectionSection}
            className="group relative flex items-center gap-2.5 overflow-hidden rounded-full border border-amber-500/50 bg-card/95 px-4 py-2.5 text-xs font-extrabold shadow-xl backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-amber-500 hover:shadow-amber-500/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
            </span>
            <Sparkles className="h-4 w-4 text-amber-500 animate-spin [animation-duration:8s]" />
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-purple-600 bg-clip-text text-transparent font-black">
              Election Services 2026
            </span>
            <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-[0.6rem] font-extrabold text-amber-700 dark:text-amber-300">
              EXPLORE
            </span>
          </a>
        )}

        {/* Floating Toggle & Direct Actions */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Election Popup"
          className="group flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-amber-500 to-purple-600 text-white shadow-lg shadow-amber-500/20 transition-all duration-500 hover:-translate-y-1 hover:scale-105"
        >
          <Sparkles className="h-5 w-5 animate-pulse" />
        </button>
      </div>
    </div>
  );
}