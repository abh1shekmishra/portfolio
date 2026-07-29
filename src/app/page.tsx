import Image from "next/image";
import Reveal from "@/components/Reveal";
import { profile, projects, experience, skills, type Project } from "@/lib/data";

/* ── tiny inline icons ─────────────────────────────────────────────── */
function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" {...props}>
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.4-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.05.78 2.12v3.15c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}
function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" {...props}>
      <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.24 8.25h4.5V24H.24V8.25Zm7.5 0h4.31v2.15h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.01 5.42 6.92V24h-4.5v-6.9c0-1.64-.03-3.75-2.28-3.75-2.28 0-2.63 1.78-2.63 3.63V24h-4.5V8.25Z" />
    </svg>
  );
}
function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}
function ArrowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="14" height="14" {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}
function DocIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16" {...props}>
      <path d="M14 3v5h5" />
      <path d="M6 3h8l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

/* ── shared bits ───────────────────────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-accent">{children}</p>;
}

function TechTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-[11px] text-muted">
      {children}
    </span>
  );
}

function LinkPill({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent"
    >
      {children}
    </a>
  );
}

/* ── page ──────────────────────────────────────────────────────────── */
export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <main className="mx-auto max-w-3xl px-6">
      {/* Nav */}
      <header className="sticky top-0 z-20 -mx-6 border-b border-border/60 bg-bg/70 px-6 backdrop-blur-md">
        <nav className="mx-auto flex h-14 max-w-3xl items-center justify-between">
          <a href="#top" className="font-mono text-sm font-semibold tracking-tight text-fg">
            AM<span className="text-accent">.</span>
          </a>
          <div className="flex items-center gap-5 text-sm text-muted">
            <a href="#work" className="hidden hover:text-fg sm:inline">Work</a>
            <a href="#experience" className="hidden hover:text-fg sm:inline">Experience</a>
            <a href="#skills" className="hidden hover:text-fg sm:inline">Skills</a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-fg hover:border-accent hover:text-accent"
            >
              <DocIcon /> Résumé
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="hero-glow relative pt-20 pb-24">
        <Reveal>
          <p className="mb-5 font-mono text-sm text-muted">
            {profile.role} · {profile.location}
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            {profile.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted">{profile.pitch}</p>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
            <LinkPill href={profile.github}>
              <GitHubIcon /> GitHub
            </LinkPill>
            <LinkPill href={profile.linkedin}>
              <LinkedInIcon /> LinkedIn
            </LinkPill>
            <LinkPill href={`mailto:${profile.email}`}>
              <MailIcon /> {profile.email}
            </LinkPill>
          </div>
        </Reveal>
      </section>

      {/* Work */}
      <section id="work" className="scroll-mt-16 border-t border-border py-20">
        <Reveal>
          <SectionLabel>Selected work</SectionLabel>
        </Reveal>

        <div className="space-y-16">
          {featured.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <FeaturedProject p={p} />
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal key={p.title} delay={i * 50}>
              <SmallProject p={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-16 border-t border-border py-20">
        <Reveal>
          <SectionLabel>Experience</SectionLabel>
        </Reveal>
        <div className="space-y-10">
          {experience.map((e, i) => (
            <Reveal key={e.company} delay={i * 60}>
              <div className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-baseline">
                <h3 className="font-medium text-fg">
                  {e.role} <span className="text-muted">· {e.company}</span>
                </h3>
                <p className="font-mono text-xs text-faint sm:text-right">{e.period}</p>
              </div>
              <ul className="mt-3 space-y-1.5">
                {e.points.map((pt) => (
                  <li key={pt} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {pt}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-16 border-t border-border py-20">
        <Reveal>
          <SectionLabel>Skills</SectionLabel>
        </Reveal>
        <div className="space-y-5">
          {skills.map((g, i) => (
            <Reveal key={g.label} delay={i * 40}>
              <div className="grid gap-2 sm:grid-cols-[160px_1fr] sm:items-start">
                <p className="font-mono text-xs text-faint">{g.label}</p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <TechTag key={s}>{s}</TechTag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact / footer */}
      <footer className="border-t border-border py-20">
        <Reveal>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="text-2xl font-semibold tracking-tight">Let&apos;s build something.</h2>
          <p className="mt-3 max-w-md leading-relaxed text-muted">
            I&apos;m open to frontend, full-stack, and AI product roles. If you&apos;re building
            something ambitious, reach out.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-bg hover:opacity-90"
            >
              <MailIcon /> Email me
            </a>
            <LinkPill href={profile.github}>
              <GitHubIcon /> GitHub
            </LinkPill>
            <LinkPill href={profile.linkedin}>
              <LinkedInIcon /> LinkedIn
            </LinkPill>
          </div>
          <p className="mt-14 font-mono text-xs text-faint">
            © {new Date().getFullYear()} {profile.name} · Built with Next.js, deployed on Vercel.
          </p>
        </Reveal>
      </footer>
    </main>
  );
}

/* ── project cards ─────────────────────────────────────────────────── */
function FeaturedProject({ p }: { p: Project }) {
  return (
    <article className="grid gap-6 md:grid-cols-2 md:gap-8">
      {p.image && (
        <a
          href={p.live ?? p.code}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block aspect-[16/10] overflow-hidden rounded-xl border border-border bg-surface"
        >
          <Image
            src={p.image}
            alt={p.title}
            fill
            sizes="(min-width: 768px) 45vw, 90vw"
            className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
          />
        </a>
      )}
      <div className="flex flex-col">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
          <span className="font-mono text-xs text-faint">{p.tagline}</span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <TechTag key={t}>{t}</TechTag>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-4">
          {p.live && (
            <LinkPill href={p.live}>
              Live demo <ArrowIcon />
            </LinkPill>
          )}
          {p.code && (
            <LinkPill href={p.code}>
              <GitHubIcon /> Code
            </LinkPill>
          )}
        </div>
      </div>
    </article>
  );
}

function SmallProject({ p }: { p: Project }) {
  const clickable = Boolean(p.live || p.code);
  const inner = (
    <>
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-semibold tracking-tight">{p.title}</h3>
        {clickable && <ArrowIcon className="text-faint transition group-hover:text-accent" />}
      </div>
      <p className="mt-0.5 font-mono text-xs text-faint">{p.tagline}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
      {p.meta && <p className="mt-3 font-mono text-[11px] text-faint">{p.meta}</p>}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {p.tech.slice(0, 4).map((t) => (
          <TechTag key={t}>{t}</TechTag>
        ))}
      </div>
    </>
  );
  const cls =
    "group flex h-full flex-col rounded-xl border border-border bg-surface p-5 transition hover:border-accent/50 hover:bg-surface-2";
  return clickable ? (
    <a href={p.live ?? p.code} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}
