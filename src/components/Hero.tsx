"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";
import { profile } from "@/lib/data";
import Reveal from "@/components/Reveal";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

// The 3D canvas is client-only and lazy — never blocks first paint.
const HeroScene = dynamic(() => import("@/components/HeroScene"), { ssr: false });

const MQ = "(min-width: 768px)";
function subscribe(cb: () => void) {
  const mq = window.matchMedia(MQ);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

export default function Hero() {
  // Only mount the 3D scene on wider screens (keeps phones light and fast).
  const show3d = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(MQ).matches,
    () => false,
  );

  return (
    <section id="top" className="hero-glow relative pt-14 pb-24 md:pt-20">
      <div className="grid items-center gap-6 md:grid-cols-[1.05fr_0.95fr] md:gap-10">
        <div>
          <Reveal>
            <p className="mb-5 font-mono text-sm text-muted">
              {profile.role} · {profile.location}
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              {profile.tagline}
            </h1>
            <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted">{profile.pitch}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent">
                <GitHubIcon /> GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent">
                <LinkedInIcon /> LinkedIn
              </a>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent">
                <MailIcon /> {profile.email}
              </a>
            </div>
          </Reveal>
        </div>

        <div className="relative hidden h-[340px] w-full md:block lg:h-[400px]">
          {show3d && <HeroScene />}
        </div>
      </div>
    </section>
  );
}
