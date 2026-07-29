import { profile } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, MailIcon, DocIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative left-1/2 -mt-14 flex min-h-[90vh] w-screen -translate-x-1/2 items-center justify-center overflow-hidden pt-14 text-center"
    >
      {/* Grainy aurora, full-bleed. */}
      <div className="aurora">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <div className="hero-in relative z-10 mx-auto max-w-2xl px-6">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.28em] text-muted sm:text-sm">
          {profile.role} · {profile.location}
        </p>
        <h1 className="text-balance text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl md:text-6xl">
          {profile.tagline}
        </h1>
        <p className="mx-auto mt-7 max-w-xl text-pretty leading-relaxed text-muted">
          3+ years shipping production software end to end, from real-time 3D and XR in Unreal
          Engine and C++ to modern web products in React, Next.js and TypeScript with AI.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition hover:opacity-90"
          >
            <DocIcon /> Résumé
          </a>
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg">
            <MailIcon /> Email
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg">
            <GitHubIcon /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg">
            <LinkedInIcon /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
