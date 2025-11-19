import { ShieldAlert, Radar, Microscope, Banknote, Hammer, Fingerprint, Satellite, Siren } from "lucide-react";

const items = [
  { icon: Hammer, title: "Injunction Storm", desc: "Parallel-filed motions across jurisdictions to overwhelm opposition." },
  { icon: Banknote, title: "Liquidity Stranglehold", desc: "Freeze custody wallets, broker accounts, and credit lines in minutes." },
  { icon: Fingerprint, title: "Forensic Harvest", desc: "Chain-of-custody evidence extraction with cryptographic seals." },
  { icon: Radar, title: "Target Acquisition", desc: "Graph search maps relationships, directors, assets, and shell entities." },
  { icon: ShieldAlert, title: "Countermeasure Evasion", desc: "Adaptive filings avoid rate-limits, honeypots, and regulatory tripwires." },
  { icon: Microscope, title: "Discovery Autopsy", desc: "Semantic shredders auto-summarize terabytes of discovery data." },
  { icon: Satellite, title: "Jurisdiction Hopping", desc: "Latency-aware routing to favorable venues in real time." },
  { icon: Siren, title: "Breach Protocol", desc: "Emergency red-team mode for imminent asset flight scenarios." },
];

export default function AttackMatrix() {
  return (
    <section id="solutions" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 [background:radial-gradient(60%_50%_at_50%_0%,rgba(255,0,72,0.08),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-red-300/80">Offensive + Defensive Stack</p>
            <h2 className="mt-2 text-3xl font-extrabold text-white">Attack Surface Control</h2>
          </div>
          <span className="rounded-full border border-red-400/30 bg-red-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-red-200">v2.0 Aggressive Profile</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl border border-cyan-400/20 bg-slate-900/60 backdrop-blur p-5 transition hover:border-cyan-300/40 hover:shadow-[0_0_50px_rgba(0,240,255,0.18)]">
              <div className="pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-100 transition [background:conic-gradient(from_180deg_at_50%_50%,rgba(0,240,255,0.15),transparent_70%)]" />
              <div className="relative flex items-center gap-3">
                <it.icon className="h-5 w-5 text-cyan-300" />
                <h3 className="text-white font-semibold">{it.title}</h3>
              </div>
              <p className="relative mt-2 text-sm text-cyan-100/80">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
