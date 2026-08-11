import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

import { CONTACT } from "@/lib/site-data";
import { cn } from "@/lib/utils";

import { WhatsAppIcon } from "./icons";

export function FloatingContact() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 transition-all duration-700 [transition-timing-function:var(--ease-out-expo)]",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with PEARLCON DIGITAL on WhatsApp"
        className="glass-strong group flex h-12 items-center gap-0 overflow-hidden rounded-full pl-3.5 pr-3.5 transition-all duration-500 [transition-timing-function:var(--ease-out-expo)] hover:-translate-y-1 hover:gap-3 hover:pr-5 hover:shadow-[var(--shadow-soft)]"
      >
        <WhatsAppIcon className="h-5 w-5 shrink-0" />
        <span className="max-w-0 whitespace-nowrap text-[0.62rem] uppercase tracking-[0.14em] opacity-0 transition-all duration-500 [transition-timing-function:var(--ease-out-expo)] group-hover:max-w-[9rem] group-hover:opacity-100">
          WhatsApp {CONTACT.phoneDisplay}
        </span>
      </a>
      <a
        href={CONTACT.phoneHref}
        aria-label="Call PEARLCON DIGITAL"
        className="group flex h-12 items-center gap-0 overflow-hidden rounded-full bg-primary pl-4 pr-4 text-primary-foreground transition-all duration-500 [transition-timing-function:var(--ease-out-expo)] hover:-translate-y-1 hover:gap-3 hover:pr-5 hover:shadow-[var(--shadow-soft)]"
      >
        <Phone className="h-4 w-4 shrink-0" aria-hidden />
        <span className="max-w-0 whitespace-nowrap text-[0.62rem] uppercase tracking-[0.14em] opacity-0 transition-all duration-500 [transition-timing-function:var(--ease-out-expo)] group-hover:max-w-[9rem] group-hover:opacity-100">
          Call {CONTACT.phoneDisplay}
        </span>
      </a>
    </div>
  );
}