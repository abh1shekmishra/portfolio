import { profile } from "@/lib/data";
import { ArrowIcon, DocIcon } from "@/components/icons";

/* A flat four-point star — a brutalist mark, not a chrome trinket. */
function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor" aria-hidden>
      <path d="M50 0 C54 30 70 46 100 50 C70 54 54 70 50 100 C46 70 30 54 0 50 C30 46 46 30 50 0 Z" />
    </svg>
  );
}

export default function Hero() {
  const year = new Date().getFullYear();
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28 pb-10"
    >
      {/* Decorative marks */}
      <Star className="floaty pointer-events-none absolute left-[6%] top-[26%] h-10 w-10 text-ink sm:h-14 sm:w-14" />
      <Star className="floaty-slow pointer-events-none absolute right-[7%] top-[44%] h-8 w-8 text-ink sm:h-11 sm:w-11" />

      <div className="cascade relative z-10">
        <p className="text-center font-medium uppercase tracking-[0.28em] text-faint text-[11px] sm:text-xs">
          {profile.role} · {profile.location}
        </p>

        <h1 className="display mt-6 text-center text-ink text-[clamp(3.25rem,15vw,13rem)]">
          Software
          <br />
          Engineer
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-balance text-center text-base leading-relaxed text-muted sm:text-lg">
          I build web &amp; AI products, and real-time 3D — from Unreal Engine and C++ to
          React, Next.js and TypeScript.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition-opacity hover:opacity-85"
          >
            <DocIcon /> Résumé
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            View work <ArrowIcon />
          </a>
        </div>
      </div>

      {/* Corner meta, editorial style */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex items-end justify-between px-1 font-medium text-faint">
        <span className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">©{year}</span>
        <span className="text-[10px] uppercase tracking-[0.2em] sm:text-xs">
          / Creating since 2022
        </span>
      </div>
    </section>
  );
}
