import { HelpCircle, ShieldCheck, Scale, Server, Clock } from "lucide-react";

const faqs = [
  { q: "Czy to jest legalne?", a: "Platforma automatyzuje procesy prawne i zachowuje pełną zgodność z obowiązującymi przepisami oraz standardami dowodowymi." , icon: Scale},
  { q: "Jak chronione są dane?", a: "Szyfrowanie end‑to‑end, segmentacja tenantów oraz ścieżki audytu podpisane kryptograficznie.", icon: ShieldCheck},
  { q: "Czy działa w czasie rzeczywistym?", a: "Tak. Silniki reagują z opóźnieniem rzędu milisekund i skalują się poziomo.", icon: Clock},
  { q: "Gdzie hostujecie?", a: "Wieloregionowa chmura z opcją wdrożeń on‑prem oraz air‑gapped.", icon: Server},
  { q: "Wsparcie?", a: "24/7, dedykowany opiekun dla planów Pro oraz Enterprise.", icon: HelpCircle},
];

export default function FAQ() {
  return (
    <section className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 [background:radial-gradient(55%_45%_at_50%_0%,rgba(0,240,255,0.07),transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">FAQ</p>
          <h2 className="mt-2 text-3xl font-bold text-white">Najczęstsze pytania</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-xl border border-cyan-400/30 bg-slate-900/70 backdrop-blur p-5">
              <div className="flex items-center gap-3">
                <f.icon className="h-5 w-5 text-cyan-300" />
                <h3 className="text-white font-semibold">{f.q}</h3>
              </div>
              <p className="mt-2 text-sm text-cyan-100/85">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
