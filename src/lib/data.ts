export const profile = {
  name: "Abhishek Mishra",
  role: "Unreal & Unity Developer",
  tagline: "I build real-time 3D and XR in Unreal Engine and Unity.",
  pitch:
    "Real-time 3D developer with 3+ years in Unreal Engine (C++, Blueprints, multiplayer) and Unity (C#), shipping VR, AR and desktop applications for enterprise clients. I also build web and AI products in React, Next.js and TypeScript.",
  location: "Noida, India",
  email: "abhshkmishra@gmail.com",
  github: "https://github.com/abh1shekmishra",
  linkedin: "https://linkedin.com/in/abh1shekmishra",
  resume: "/Abhishek-Mishra-Resume.pdf",
};

export const stats: { value: string; label: string }[] = [
  { value: "3+", label: "Years in production" },
  { value: "6+", label: "Enterprise clients" },
  { value: "10+", label: "Projects shipped" },
];

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
  group: "xr" | "web";
};

export const projects: Project[] = [
  // ── Real-time 3D / XR ───────────────────────────────────────────────
  {
    group: "xr",
    title: "MPVehiclePrototype",
    tagline: "Unreal multiplayer vehicle prototype",
    description:
      "UE 5.4 C++ multiplayer prototype. Host a game or join by code from a custom Slate UI, with sessions created, found and joined through the Online Subsystem. Replicated vehicle pawns and player state, plus an authority-driven, replicated damage component.",
    tech: ["Unreal Engine 5.4", "C++", "Online Subsystem", "Replication", "Slate"],
    code: "https://github.com/abh1shekmishra/MPVehiclePrototype",
    meta: "Personal project",
  },
  {
    group: "xr",
    title: "Mahindra Citadel",
    tagline: "Real-time digital twin",
    description:
      "A real-time 3D digital twin of a residential project with fully explorable VR and desktop modes and avatar-based, human-scale navigation. Integrated AWS Transcribe and Speech for a real-time in-app voice concierge.",
    tech: ["Unreal Engine", "C++", "AWS Transcribe", "OpenXR"],
    meta: "Client: Mahindra Lifespaces",
  },
  {
    group: "xr",
    title: "Museum of the Bible VR Tour",
    tagline: "Standalone VR in Unity",
    description:
      "A VR tour built in Unity and packaged as an Android APK that runs directly on the headset, with no PC required.",
    tech: ["Unity", "C#", "Standalone VR", "OpenXR"],
    meta: "Standalone VR",
  },
  {
    group: "xr",
    title: "Prism",
    tagline: "Unreal Engine plugin for AR/VR workflows",
    description:
      "A custom UE C++ plugin automating repetitive VR scene setup (batch light building, auto collision/navigation meshes, material switching) to streamline the design-to-deployment pipeline. Cut AR/VR presentation setup time for designers and clients by up to 30%.",
    tech: ["C++", "Unreal Engine 5", "Blueprints"],
    meta: "Trezi internal tool",
  },
  {
    group: "xr",
    title: "ESP32 Motion Sensor System",
    tagline: "Hardware to Unity over WiFi",
    description:
      "An ESP32 sensor system that reads a bat's movement and streams the data to Unity over WiFi. Delivered end to end, from the sensor hardware to the live Unity application.",
    tech: ["ESP32", "Unity", "C#", "WiFi"],
    meta: "Freelance",
  },
  {
    group: "xr",
    title: "Panasonic 3D Globe",
    tagline: "Cross-platform Unity desktop app",
    description:
      "A Windows and macOS desktop app in Unity with an animated 3D globe and a live flight-tracking feed from a Flight Radar API. Delivered end to end as packaged builds for both platforms.",
    tech: ["Unity", "C#", "Flight Radar API"],
    meta: "Freelance",
  },
  {
    group: "xr",
    title: "Eldeco 360° Web Viewer",
    tagline: "Browser-based property visualization",
    description:
      "A web 360° property viewer with VR integration, deployed across multiple properties, bringing real-time 3D walkthroughs to the browser with no install required.",
    tech: ["Three.js", "WebGL", "WebXR"],
    meta: "Client work at Trezi",
  },

  // ── Web & AI ────────────────────────────────────────────────────────
  {
    group: "web",
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
    group: "web",
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
    group: "web",
    title: "Terra",
    tagline: "Interactive 3D globe for live planetary data",
    description:
      "An interactive 3D globe unifying six live data feeds, rendering thousands of animated objects at 60fps with GPU instancing and custom GLSL shaders. SGP4 satellite propagation and geospatial mapping.",
    tech: ["React", "TypeScript", "Three.js", "GLSL"],
    live: "https://terra-flax-pi.vercel.app",
    code: "https://github.com/abh1shekmishra/terra",
  },
];

export const experience = [
  {
    company: "Trezi (SmartVizX)",
    role: "Senior Software Engineer",
    period: "Jun 2023 - Present",
    location: "Noida",
    points: [
      "Build immersive AR, VR and desktop applications in Unreal Engine 5 and C++ for architecture and design, delivered end to end for 6+ enterprise clients.",
      "Bring architectural source data into Unreal through Datasmith, BIM/Revit import and LiDAR point clouds, and optimize scenes with light building, occlusion strategies and profiling until they hold framerate in VR.",
      "Built browser-based 360° property viewers (Three.js, WebGL, WebXR) alongside the native apps, with cross-device AR (ARKit, ARCore, OpenXR).",
      "Build and maintain internal Unreal C++ plugins that automate scene setup, so designers who don't work in the engine can get a scene ready on their own.",
    ],
  },
  {
    company: "Amazon",
    role: "Customer Service Associate → Training Subject Matter Expert",
    period: "Oct 2019 - May 2023",
    location: "Noida",
    points: [
      "Promoted from Customer Service Associate to Training Subject Matter Expert.",
      "Recruited, trained, and onboarded new team members, and introduced process improvements that raised team productivity.",
    ],
  },
];

export const skills: { label: string; items: string[] }[] = [
  {
    label: "Unreal Engine",
    items: ["Unreal Engine 4/5", "C++", "Blueprints", "Multiplayer / replication", "Plugins & editor tooling", "Datasmith", "BIM / Revit", "LiDAR"],
  },
  {
    label: "Unity / XR",
    items: ["Unity (C#)", "Standalone VR", "XR Interaction Toolkit", "OpenXR", "ARKit / ARCore", "WebXR"],
  },
  { label: "Hardware / IoT", items: ["ESP32", "Sensor data over WiFi into Unity"] },
  { label: "Languages", items: ["C++", "C#", "TypeScript", "JavaScript", "Python", "SQL"] },
  { label: "Web / AI", items: ["React", "Next.js", "Three.js", "WebGL", "Tailwind CSS", "Node.js", "Claude API", "AI-assisted development"] },
  { label: "Tooling", items: ["Git/GitHub", "GitHub Actions", "Visual Studio", "Vitest", "pytest", "Vercel"] },
];
