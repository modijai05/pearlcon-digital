import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

import { CONTACT } from "@/lib/site-data";
import { cn } from "@/lib/utils";

import { GlassButton } from "./primitives";

const WORDS = ["REPUTATION.", "VISIBILITY.", "GROWTH."];

export function Hero() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-dvh w-full flex-col justify-center px-5 pb-16 pt-32 sm:px-8 lg:px-12"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <p
          className={cn(
            "eyebrow transition-all duration-1000 [transition-timing-function:var(--ease-out-expo)]",
            ready ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
          )}
        >
          360° PR &amp; Digital Growth Agency
        </p>

        <h1 className="mt-6 display-xl text-[clamp(2.75rem,11.5vw,10.5rem)]">
          {WORDS.map((word, i) => (
            <span key={word} className="block overflow-hidden pb-[0.06em]">
              <span
                style={{ transitionDelay: `${180 + i * 140}ms` }}
                className={cn(
                  "block transition-all duration-[1100ms] [transition-timing-function:var(--ease-out-expo)]",
                  ready ? "translate-y-0 opacity-100" : "translate-y-[110%] opacity-0",
                )}
              >
                {word}
              </span>
            </span>
          ))}
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <p
            style={{ transitionDelay: "620ms" }}
            className={cn(
              "max-w-xl text-base leading-relaxed text-muted-foreground transition-all duration-1000 [transition-timing-function:var(--ease-out-expo)] sm:text-lg",
              ready ? "translate-y-0 opacity-100 blur-0" : "translate-y-4 opacity-0 blur-[6px]",
            )}
          >
            We build brand reputation through nationwide media coverage and modern digital
            marketing — strategy, media, content, campaigns and results, delivered end to end.
          </p>

          <div
            style={{ transitionDelay: "760ms" }}
            className={cn(
              "flex flex-wrap gap-3 transition-all duration-1000 [transition-timing-function:var(--ease-out-expo)]",
              ready ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            )}
          >
            <GlassButton href="#contact" variant="solid">
              Let's Talk
            </GlassButton>
            <GlassButton href={CONTACT.phoneHref}>Call Now</GlassButton>
          </div>
        </div>

        <a
          href="#about"
          style={{ transitionDelay: "900ms" }}
          className={cn(
            "eyebrow mt-16 inline-flex items-center gap-3 transition-all duration-1000 hover:text-foreground",
            ready ? "opacity-100" : "opacity-0",
          )}
        >
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" aria-hidden />
          Scroll
        </a>
      </div>
    </section>
  );
}