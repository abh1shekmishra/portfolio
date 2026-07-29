import { skills } from "@/lib/data";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="whitespace-nowrap rounded-full border border-border bg-surface px-4 py-2 font-mono text-xs text-muted">
      {children}
    </span>
  );
}

function Row({ items, reverse }: { items: string[]; reverse?: boolean }) {
  // Duplicate the list so the -50% translate loops seamlessly.
  const loop = [...items, ...items];
  return (
    <div className="marquee relative left-1/2 w-screen -translate-x-1/2">
      <div className={`marquee-track px-1.5 ${reverse ? "reverse" : ""}`}>
        {loop.map((s, i) => (
          <Chip key={i}>{s}</Chip>
        ))}
      </div>
    </div>
  );
}

export default function SkillsMarquee() {
  const all = skills.flatMap((g) => g.items);
  const half = Math.ceil(all.length / 2);
  return (
    <div className="space-y-3">
      <Row items={all.slice(0, half)} />
      <Row items={all.slice(half)} reverse />
    </div>
  );
}
