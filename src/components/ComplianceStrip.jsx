export default function ComplianceStrip() {
  return (
    <div className="relative border-y border-red-400/20 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        <span className="text-[10px] uppercase tracking-[0.35em] text-red-300/90">Alert: Only for entities with lawful standing. Misuse triggers automatic counter‑litigation.</span>
        <span className="text-[10px] uppercase tracking-[0.35em] text-cyan-300/80">Audit Trail: On / Red-Team Mode: Standby / SOC-2: Pass</span>
      </div>
    </div>
  );
}
