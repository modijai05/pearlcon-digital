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
        "fixed bottom-5 right-5 z-40 flex flex-col gap-3 transition-all duration-700 [transition-timing-function:var(--ease-out-expo)]",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with PEARLCON DIGITAL on WhatsApp"
        className="glass-strong grid h-12 w-12 place-items-center rounded-full transition-transform duration-500 hover:-translate-y-1"
      >
        <WhatsAppIcon className="h-5 w-5" />
      </a>
      <a
        href={CONTACT.phoneHref}
        aria-label="Call PEARLCON DIGITAL"
        className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-500 hover:-translate-y-1"
      >
        <Phone className="h-4.5 w-4.5" aria-hidden />
      </a>
    </div>
  );
}