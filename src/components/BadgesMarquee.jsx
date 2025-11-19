import { ShieldAlert, Cpu, CircuitBoard } from "lucide-react";

const badges = [
  { icon: ShieldAlert, text: "Lex-Grade AI" },
  { icon: Cpu, text: "Neural Prosecutors" },
  { icon: CircuitBoard, text: "On-Chain Evidence" },
  { icon: ShieldAlert, text: "SOC-2 / ISO-LEX 9001" },
];

export default function BadgesMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-cyan-400/20 bg-slate-900/60">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent" />
      <div className="animate-[marquee_22s_linear_infinite] whitespace-nowrap py-2">
        <style>{`@keyframes marquee {0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
        {[...badges, ...badges, ...badges].map((b, i) => (
          <span key={i} className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-cyan-200/80 px-6">
            <b.icon className="h-4 w-4 text-cyan-300" />{b.text}
          </span>
        ))}
      </div>
    </div>
  );
}
