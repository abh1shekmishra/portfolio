"use client";

import { useEffect, useRef } from "react";

/* A small dot that trails the pointer and inverts against whatever is behind
   it (mix-blend-mode: difference) — black over the cream page, white over the
   black nav and headline. Grows over links and buttons. Desktop-only: it never
   engages on touch or coarse pointers, and it degrades to the native cursor. */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const dot = dotRef.current;
    if (!dot) return;

    document.documentElement.classList.add("has-cursor");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let x = mx;
    let y = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      dot.classList.toggle("cursor-lg", !!target?.closest("a, button, [data-cursor]"));
    };
    const onLeave = () => dot.classList.add("cursor-hidden");
    const onEnter = () => dot.classList.remove("cursor-hidden");

    const loop = () => {
      x += (mx - x) * 0.2;
      y += (my - y) * 0.2;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("has-cursor");
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" aria-hidden />;
}
