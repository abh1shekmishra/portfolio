export const profile = {
  name: "Abhishek Mishra",
  role: "Senior Software Engineer",
  tagline: "I build web and AI products, and real-time 3D.",
  pitch:
    "Software engineer with 3+ years shipping production software end to end, from real-time 3D and XR in Unreal Engine and C++ to modern web products in React, Next.js and TypeScript with AI built on the Claude and Google APIs.",
  location: "Noida, India",
  email: "abhishek.boss31@gmail.com",
  github: "https://github.com/abh1shekmishra",
  linkedin: "https://linkedin.com/in/abh1shekmishra",
  resume: "/Abhishek-Mishra-Resume.pdf",
};

export type Project = {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  image?: string;
  live?: string;
  code?: string;
  meta?: string; // e.g. client / status
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "LeadScraper",
    tagline: "AI lead generation",
    description:
      "A full-stack AI product that searches real businesses, visits each one's website server-side to detect a provable digital gap, scores leads hot/warm/cold, and drafts personalized outreach with Claude. Built on one rule: never make a claim the tool can't prove. Unit-tested engine, CI, and a keyless zero-cost demo.",
    tech: ["Next.js", "TypeScript", "Claude API", "Google Places", "Zustand"],
    image: "/projects/leadscraper.png",
    live: "https://lead-scraper-gold.vercel.app",
    code: "https://github.com/abh1shekmishra/LeadScraper",
    featured: true,
  },
  {
    title: "Undercover",
    tagline: "Social-deduction PWA",
    description:
      "An installable, offline-first party game built around a pure, deterministic, fully unit-tested game engine (seeded RNG, 42 tests) cleanly separated from the UI. 11 game modes driven by declarative rule flags so the engine never branches on a mode id.",
    tech: ["React", "TypeScript (strict)", "Zustand", "PWA", "Vitest"],
    image: "/projects/undercover.png",
    live: "https://impostor-who-mu.vercel.app",
    code: "https://github.com/abh1shekmishra/impostor-who",
    featured: true,
  },
  {
    title: "Mahindra Citadel",
    tagline: "Real-time digital twin",
    description:
      "A real-time 3D digital twin of a residential project with fully explorable VR and desktop modes and avatar-based, human-scale navigation. Integrated AWS Transcribe and Speech for a real-time in-app voice concierge.",
    tech: ["Unreal Engine", "C++", "AWS Transcribe", "OpenXR"],
    meta: "Client: Mahindra Lifespaces",
  },
  {
    title: "Prism",
    tagline: "Unreal Engine plugin for AR/VR workflows",
    description:
      "A custom UE C++ plugin automating repetitive VR scene setup (batch light building, auto collision/navigation meshes, material switching) to streamline the design-to-deployment pipeline. Cut AR/VR presentation setup time for designers and clients by up to 30%.",
    tech: ["C++", "Unreal Engine 5", "Blueprints"],
    meta: "Trezi internal tool",
  },
  {
    title: "broll",
    tagline: "Stock B-roll finder",
    description:
      "A local, bring-your-own-key desktop tool that ranks and downloads stock B-roll against a shot list using a free relevance model (tag overlap, resolution and result-position scoring). No paid AI, no cloud. Unit-tested ranking, CI.",
    tech: ["Python", "Flask", "Vanilla JS", "pytest"],
    meta: "Private, product in progress",
  },
  {
    title: "Eldeco 360° Web Viewer",
    tagline: "Browser-based property visualization",
    description:
      "A web 360° property viewer with VR integration, deployed across multiple properties, bringing real-time 3D walkthroughs to the browser with no install required.",
    tech: ["Three.js", "WebGL", "WebXR"],
    meta: "Client work at Trezi",
  },
];

export const experience = [
  {
    company: "Trezi (SmartVizX)",
    role: "Senior Software Engineer",
    period: "Jun 2023 — Present",
    location: "Noida",
    points: [
      "Built immersive AR/VR and desktop visualization tools in Unreal Engine 5 and C++ for architecture and design.",
      "Built browser-based 360° property viewers (Three.js, WebGL, WebXR) alongside the native apps, with cross-device AR (ARKit, ARCore, OpenXR).",
      "Developed real-time scenes with performance-optimized rendering pipelines, and internal plugins that automated production workflows.",
    ],
  },
  {
    company: "Amazon",
    role: "Customer Service Associate → Training Subject Matter Expert",
    period: "Oct 2019 — May 2023",
    location: "Noida",
    points: [
      "Promoted from Customer Service Associate to Training Subject Matter Expert.",
      "Recruited, trained, and onboarded new team members, and introduced process improvements that raised team productivity.",
    ],
  },
];

export const skills: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "C++", "C#", "Python", "HTML/CSS", "SQL"] },
  { label: "Frontend / Web", items: ["React", "Next.js", "Tailwind CSS", "Zustand", "Framer Motion", "Vite", "PWAs"] },
  { label: "AI / Product", items: ["Anthropic Claude API", "Prompt engineering", "AI-assisted development", "Rapid prototyping"] },
  { label: "Real-time 3D / XR", items: ["Unreal Engine 4/5", "Blueprints", "Unity", "Three.js", "WebGL", "WebXR", "AR/VR"] },
  { label: "Backend / Tooling", items: ["Node.js", "Flask", "Git/GitHub", "GitHub Actions", "Vitest", "pytest", "Vercel"] },
];
