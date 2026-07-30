import Image from "next/image";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowIcon, DocIcon } from "@/components/icons";
import { profile, projects, experience, skills, type Project } from "@/lib/data";

const services = [
  { title: "Real-time 3D / XR", tags: ["Unreal Engine 5", "C++", "WebXR", "AR / VR"] },
  { title: "Frontend Development", tags: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { title: "AI Product Engineering", tags: ["Claude API", "Prompt design", "Rapid prototyping"] },
  { title: "Full-stack & Tooling", tags: ["Node.js", "Flask", "CI / CD", "Testing"] },
];

/* ── shared bits ───────────────────────────────────────────────────── */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-faint">{children}</p>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-ink/15 px-3 py-1 text-xs font-medium text-muted">
      {children}
    </span>
  );
}

const container = "mx-auto w-full max-w-[1180px] px-6";

/* ── page ──────────────────────────────────────────────────────────── */
export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <>
      {/* Pill nav */}
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <nav className="flex items-center gap-1 rounded-full bg-ink p-1.5 text-cream shadow-[0_8px_30px_-8px_rgba(0,0,0,0.4)]">
          <a href="#top" className="px-4 py-1.5 text-sm font-bold tracking-tight">
            Abhishek Mishra
          </a>
          <span className="hidden items-center sm:flex">
            <a href="#work" className="rounded-full px-3 py-1.5 text-sm text-cream/60 transition-colors hover:text-cream">Work</a>
            <a href="#about" className="rounded-full px-3 py-1.5 text-sm text-cream/60 transition-colors hover:text-cream">About</a>
            <a href="#contact" className="rounded-full px-3 py-1.5 text-sm text-cream/60 transition-colors hover:text-cream">Contact</a>
          </span>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 rounded-full bg-cream px-4 py-1.5 text-sm font-semibold text-ink transition-opacity hover:opacity-85"
          >
            Résumé
          </a>
        </nav>
      </header>

      <main className={container}>
        <Hero />

        {/* Intro */}
        <section id="about" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
          <Reveal>
            <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:gap-16">
              <h2 className="text-5xl font-bold tracking-tight sm:text-6xl">Hey!</h2>
              <div className="space-y-8 text-lg leading-relaxed text-muted">
                <p>
                  I&apos;m Abhishek — a senior software engineer based in Noida, India. For 3+ years
                  I&apos;ve shipped production software end to end, moving comfortably between
                  real-time 3D and the modern web.
                </p>
                <p>
                  At <span className="font-semibold text-ink">Trezi</span> I build immersive AR/VR
                  and desktop tools in Unreal Engine and C++. On my own time I build AI products and
                  web apps in React, Next.js and TypeScript — always tested, always shipped.
                </p>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 text-base font-semibold text-ink underline decoration-ink/25 underline-offset-4 transition-colors hover:decoration-ink"
                >
                  Get in touch
                  <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Statement */}
        <section className="border-t border-border py-24 sm:py-28">
          <Reveal>
            <p className="max-w-4xl text-3xl font-semibold leading-[1.25] tracking-tight sm:text-4xl md:text-[2.75rem]">
              <span className="text-faint">From idea to launch.</span> Clean, scalable products —
              built to move fast, stay simple, and hold up in the real world.
            </p>
          </Reveal>
        </section>

        {/* What I do */}
        <section className="border-t border-border py-24 sm:py-32">
          <Reveal>
            <Label>What I do</Label>
          </Reveal>
          <div>
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <div className="group relative grid gap-4 border-b border-border py-8 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div className="flex items-center gap-4">
                    <h3 className="text-2xl font-semibold tracking-tight transition-transform duration-300 ease-out group-hover:translate-x-3 sm:text-3xl">
                      {s.title}
                    </h3>
                    <ArrowIcon className="h-4 w-4 -translate-x-2 text-ink opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </div>
                  <div className="flex flex-wrap gap-2 transition-opacity duration-300 group-hover:opacity-100 sm:justify-end sm:opacity-70">
                    {s.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Work */}
        <section id="work" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
          <Reveal>
            <Label>Selected work</Label>
            <h2 className="mb-12 text-5xl font-bold tracking-tight sm:text-6xl">Featured Projects</h2>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {featured.map((p, i) => (
              <Reveal key={p.title} delay={i * 90} className="h-full">
                <FeaturedCard p={p} />
              </Reveal>
            ))}
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {rest.map((p, i) => (
              <Reveal key={p.title} delay={i * 70} className="h-full">
                <SmallCard p={p} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="border-t border-border py-24 sm:py-32">
          <Reveal>
            <Label>Experience</Label>
            <h2 className="mb-12 text-5xl font-bold tracking-tight sm:text-6xl">Where I&apos;ve worked</h2>
          </Reveal>
          <div className="space-y-14">
            {experience.map((e, i) => (
              <Reveal key={e.company} delay={i * 80}>
                <div className="grid gap-4 md:grid-cols-[1fr_1.4fr] md:gap-12">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{e.company}</h3>
                    <p className="mt-1 text-sm text-muted">{e.role}</p>
                    <p className="mt-1 text-sm text-faint">{e.period}</p>
                  </div>
                  <ul className="space-y-3">
                    {e.points.map((pt) => (
                      <li key={pt} className="flex gap-3 leading-relaxed text-muted">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="border-t border-border py-24 sm:py-32">
          <Reveal>
            <Label>Toolkit</Label>
            <h2 className="mb-12 text-5xl font-bold tracking-tight sm:text-6xl">What I work with</h2>
          </Reveal>
          <div className="space-y-8">
            {skills.map((g, i) => (
              <Reveal key={g.label} delay={i * 60}>
                <div className="grid gap-3 md:grid-cols-[200px_1fr] md:items-start">
                  <p className="pt-1 text-sm font-semibold uppercase tracking-[0.14em] text-faint">
                    {g.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      {/* Contact + footer */}
      <footer id="contact" className="scroll-mt-24 bg-dark text-cream">
        <div className={`${container} py-24 sm:py-32`}>
          <Reveal>
            <Label>Contact</Label>
            <h2 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-7xl">
              Let&apos;s build something.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/60">
              Open to frontend, full-stack, and AI product roles. If you&apos;re building something
              ambitious, reach out.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-85"
              >
                <MailIcon /> Email me
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-cream hover:text-ink"
              >
                <DocIcon /> Résumé
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="ml-2 text-cream/60 transition-colors hover:text-cream" aria-label="GitHub">
                <GitHubIcon />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-cream/60 transition-colors hover:text-cream" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Giant static wordmark */}
        <div className="overflow-hidden border-t border-cream/10 py-10">
          <p className="display whitespace-nowrap text-center leading-none text-cream/35 text-[clamp(2rem,11.5vw,9.5rem)]">
            Abhishek Mishra
          </p>
        </div>

        <div className={`${container} flex flex-wrap items-center justify-between gap-3 pb-10 text-xs text-cream/40`}>
          <span>© {new Date().getFullYear()} Abhishek Mishra</span>
          <span>Built with Next.js · Deployed on Vercel</span>
        </div>
      </footer>
    </>
  );
}

/* ── project cards ─────────────────────────────────────────────────── */
function FeaturedCard({ p }: { p: Project }) {
  return (
    <a
      href={p.live ?? p.code}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:border-ink/20 hover:shadow-[0_28px_60px_-28px_rgba(17,17,17,0.4)]"
    >
      {p.image && (
        <div className="relative aspect-[16/10] overflow-hidden bg-bg">
          <Image
            src={p.image}
            alt={p.title}
            fill
            sizes="(min-width: 640px) 45vw, 90vw"
            className="object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-xl font-bold tracking-tight">{p.title}</h3>
          <span className="inline-flex items-center gap-1 text-sm text-faint transition-colors group-hover:text-ink">
            {p.live ? "Live" : "Code"}
            <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
        <p className="mt-1 text-sm font-medium text-faint">{p.tagline}</p>
        <p className="mt-4 flex-1 leading-relaxed text-muted">{p.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {p.tech.slice(0, 5).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </a>
  );
}

function SmallCard({ p }: { p: Project }) {
  const clickable = Boolean(p.live || p.code);
  const inner = (
    <>
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-lg font-bold tracking-tight">{p.title}</h3>
        {clickable && (
          <ArrowIcon className="text-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
        )}
      </div>
      <p className="mt-1 text-sm font-medium text-faint">{p.tagline}</p>
      <p className="mt-3 flex-1 leading-relaxed text-muted">{p.description}</p>
      {p.meta && <p className="mt-4 text-xs font-medium uppercase tracking-wider text-faint">{p.meta}</p>}
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tech.slice(0, 4).map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </>
  );
  const cls =
    "group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-ink/20 hover:shadow-[0_22px_50px_-26px_rgba(17,17,17,0.35)]";
  return clickable ? (
    <a href={p.live ?? p.code} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}
