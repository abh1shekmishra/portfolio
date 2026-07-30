"use client";

import { useEffect, useRef } from "react";

/* Scroll-linked text fill: the words start faint and darken to solid ink
   progressively, left to right, as the paragraph scrolls up through the
   viewport. Opacities are written straight to the DOM (no re-render), and it
   settles fully visible for reduced-motion users. */
export default function ScrollFillText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll<HTMLElement>("[data-w]"));
    const n = spans.length;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      spans.forEach((s) => (s.style.opacity = "1"));
      return;
    }

    let raf = 0;
    const update = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.9; // begins filling when the top hits 90% of the viewport
      const end = vh * 0.4; // fully filled by the time the top reaches 40%
      const p = Math.max(0, Math.min(1, (start - r.top) / (start - end)));
      spans.forEach((s, i) => {
        const wp = Math.max(0, Math.min(1, p * n - i));
        s.style.opacity = String(0.16 + 0.84 * wp);
      });
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <span
          key={i}
          data-w
          style={{ opacity: 0.16, color: "var(--color-ink)", transition: "opacity 0.12s linear" }}
        >
          {w}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
