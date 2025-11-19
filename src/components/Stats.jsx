import { useEffect, useState } from 'react';

function useCounter(target, duration = 1500) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setValue(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [target, duration]);
  return value;
}

export default function Stats() {
  const funds = useCounter(840);
  const cases = useCounter(99);
  const clients = useCounter(1200);

  return (
    <section id="trust" className="relative py-20 bg-slate-950/95">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/80">The Trust Protocol</p>
          <h2 className="mt-2 text-3xl font-bold text-white">Operational Track Record</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-amber-400/30 bg-slate-900/60 backdrop-blur p-6 shadow-[0_0_40px_rgba(255,215,0,0.15)]">
            <p className="text-amber-300/80 text-sm">Funds Recovered</p>
            <p className="mt-2 text-4xl font-extrabold text-white">${'{'}{funds}{'}'}B+</p>
          </div>
          <div className="rounded-xl border border-cyan-400/30 bg-slate-900/60 backdrop-blur p-6">
            <p className="text-cyan-300/80 text-sm">Cases Won by AI</p>
            <p className="mt-2 text-4xl font-extrabold text-white">{cases}.9%</p>
          </div>
          <div className="rounded-xl border border-red-400/30 bg-slate-900/60 backdrop-blur p-6">
            <p className="text-red-300/80 text-sm">Active Corporate Clients</p>
            <p className="mt-2 text-4xl font-extrabold text-white">{clients.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
