import { useEffect, useRef, useState } from "react";

import { useFinePointer, useReducedMotion } from "./primitives";

/**
 * Subtle desktop-only cursor. Elements can opt into a label via
 * data-cursor="View" / data-cursor="Open".
 */
export function CustomCursor() {
  const fine = useFinePointer();
  const reduced = useReducedMotion();
  const dot = useRef<HTMLDivElement | null>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [interactive, setInteractive] = useState(false);
  const [visible, setVisible] = useState(false);

  const enabled = fine && !reduced;

  useEffect(() => {
    if (!enabled) return;
    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;

    const loop = () => {
      cx += (x - cx) * 0.18;
      cy += (y - cy) * 0.18;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      setVisible(true);
      const el = (e.target as HTMLElement | null)?.closest?.(
        "[data-cursor], a, button, input, textarea, select, [role='button']",
      ) as HTMLElement | null;
      setLabel(el?.dataset?.["cursor"] ?? null);
      setInteractive(Boolean(el));
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={dot}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden md:block"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 300ms ease-out" }}
    >
      <div
        className="grid place-items-center rounded-full border border-foreground/35 backdrop-blur-[2px] transition-[width,height,background-color,border-color] duration-[350ms] [transition-timing-function:var(--ease-out-expo)]"
        style={{
          width: label ? 66 : interactive ? 34 : 14,
          height: label ? 66 : interactive ? 34 : 14,
          background: label
            ? "oklch(0.268 0.014 268 / 0.82)"
            : interactive
              ? "oklch(0.268 0.014 268 / 0.08)"
              : "oklch(0.268 0.014 268 / 0.18)",
          borderColor: label ? "transparent" : undefined,
        }}
      >
        <span
          className="text-[0.55rem] uppercase tracking-[0.16em] text-background transition-opacity duration-300"
          style={{ opacity: label ? 1 : 0 }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}