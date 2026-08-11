import { useCallback, useEffect } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

import type { WorkItem } from "@/lib/site-data";

export function Lightbox({
  items,
  index,
  onClose,
  onIndex,
}: {
  items: WorkItem[];
  index: number;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const item = items[index];

  const step = useCallback(
    (dir: number) => onIndex((index + dir + items.length) % items.length),
    [index, items.length, onIndex],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, step]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <div
        className="absolute inset-0 animate-in fade-in duration-300 backdrop-blur-2xl"
        style={{ background: "oklch(0.268 0.014 268 / 0.55)" }}
      />

      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="glass-strong absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full transition-transform duration-300 hover:scale-105 sm:right-8 sm:top-8"
      >
        <X className="h-4 w-4" aria-hidden />
      </button>

      {items.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="glass-strong absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full transition-transform duration-300 hover:-translate-x-0.5 hover:scale-105 sm:left-8"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="glass-strong absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full transition-transform duration-300 hover:translate-x-0.5 hover:scale-105 sm:right-8"
          >
            <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
        </>
      )}

      <figure
        key={item.id}
        className="glass-strong relative max-h-full w-full max-w-5xl animate-in fade-in zoom-in-95 overflow-y-auto rounded-[1.75rem] p-3 duration-[450ms] sm:p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.image}
          alt={item.title}
          className="max-h-[74vh] w-full rounded-[1.25rem] object-contain"
        />
        <figcaption className="flex flex-wrap items-center justify-between gap-3 px-2 py-4 text-sm text-muted-foreground">
          <span>{item.title}</span>
          <span className="eyebrow">
            {item.category} — {index + 1}/{items.length}
          </span>
        </figcaption>
      </figure>
    </div>
  );
}