import Image from "next/image";
import Reveal from "@/components/Reveal";
import Hero from "@/components/Hero";
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowIcon, DocIcon } from "@/components/icons";
import { profile, projects, experience, skills, stats, type Project } from "@/lib/data";

/* ── shared bits ───────────────────────────────────────────────────── */
function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">{label}</p>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
    </div>
  );
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
      <Hero />

      {/* Stats */}
      <section className="border-t border-border py-12">
        <Reveal>
          <div className="grid grid-cols-3 gap-4 text-center sm:gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-semibold tracking-tight sm:text-4xl">{s.value}</div>
                <div className="mt-1.5 font-mono text-[10px] uppercase tracking-wider text-faint sm:text-xs">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Work */}
      <section id="work" className="scroll-mt-16 border-t border-border py-20">
        <Reveal>
          <SectionHeader label="Selected work" title="A few things I've shipped" />
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
          <SectionHeader label="Experience" title="Where I've worked" />
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
          <SectionHeader label="Skills" title="What I work with" />
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
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Let&apos;s build something.</h2>
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
          className="group relative block aspect-[16/10] overflow-hidden rounded-xl border border-border bg-surface transition duration-300 hover:border-accent/40 hover:shadow-[0_10px_50px_-10px] hover:shadow-accent/25"
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
    "group flex h-full flex-col rounded-xl border border-border bg-surface p-5 transition duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-surface-2 hover:shadow-lg hover:shadow-accent/10";
  return clickable ? (
    <a href={p.live ?? p.code} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}
