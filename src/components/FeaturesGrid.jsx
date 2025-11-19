import { Scale, ScrollText, Lock, Building2, Globe2, Bolt } from "lucide-react";

const features = [
  { icon: Scale, title: "AI Pleadings", desc: "Pisma procesowe tworzone automatycznie z cytowaniami i przypisami." },
  { icon: ScrollText, title: "Smart Contracts", desc: "Audyt i egzekucja zobowiązań on‑chain/off‑chain." },
  { icon: Lock, title: "Evidence Vault", desc: "HSM + podpisy kwantoodporne + pełne ścieżki audytu." },
  { icon: Building2, title: "Corporate Graph", desc: "Powiązania właścicielskie i dyrektorskie z multipleksem źródeł." },
  { icon: Globe2, title: "Venue Router", desc: "Automatyczne dobieranie jurysdykcji i składanie wniosków." },
  { icon: Bolt, title: "Realtime Ops", desc: "Operacje nanoskalowalne z SLA < 10ms." },
];

export default function FeaturesGrid() {
  return (
    <section className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 [background:radial-gradient(60%_50%_at_50%_0%,rgba(0,240,255,0.07),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">More capability</p>
          <h2 className="mt-2 text-3xl font-bold text-white">Funkcje platformy</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div key={i} className="relative overflow-hidden rounded-xl border border-cyan-400/25 bg-slate-900/60 backdrop-blur p-5 hover:border-cyan-300/40 hover:shadow-[0_0_50px_rgba(0,240,255,0.18)] transition">
              <div className="pointer-events-none absolute -inset-1 opacity-0 hover:opacity-100 [background:conic-gradient(from_180deg_at_50%_50%,rgba(0,240,255,0.12),transparent_70%)] transition" />
              <div className="relative flex items-center gap-3">
                <f.icon className="h-5 w-5 text-cyan-300" />
                <h3 className="text-white font-semibold">{f.title}</h3>
              </div>
              <p className="relative mt-2 text-sm text-cyan-100/85">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
