import { motion } from 'framer-motion';

const team = [
  {
    recruiting: true,
    name: 'RECRUITING / NEW PARTNER',
    role: 'Pending Clearance',
    augmentation: 'To Be Augmented',
  },
  {
    name: 'Dr. Nyx Vale',
    role: 'Head of Algorithmic Law',
    augmentation: 'Optic Neural Mesh v3',
  },
  {
    name: 'Ilya Korax',
    role: 'Chief Litigator (AI Ops)',
    augmentation: 'Cortex Overclock 12GHz',
  },
  {
    name: 'Maeve Rook',
    role: 'Director of Asset Recovery',
    augmentation: 'Quantum Ledger Implant',
  },
  {
    name: 'Sable Quinn',
    role: 'Threat Intelligence',
    augmentation: 'Ghost-Trace Spine',
  },
];

export default function Architects() {
  return (
    <section id="architects" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,240,255,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">The Architects</p>
          <h2 className="mt-2 text-3xl font-bold text-white">Meet the humans behind the code.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`relative rounded-2xl p-6 bg-slate-900/60 border backdrop-blur ${
                t.recruiting
                  ? 'border-amber-400/60 shadow-[0_0_40px_rgba(255,215,0,0.25)] animate-pulse'
                  : 'border-cyan-400/20'
              }`}
            >
              <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-white/5 to-transparent" />
              {/* Image placeholder */}
              <div className="h-36 rounded-xl bg-gradient-to-br from-slate-800/70 to-slate-900/70 ring-1 ring-cyan-400/20 mb-4 grid place-items-center">
                {/* <img src="/team-placeholder-1.jpg" alt="" className="h-full w-full object-cover rounded-xl"/> */}
                <div className="h-12 w-12 rounded-full bg-cyan-500/20 ring-2 ring-cyan-400/40" />
              </div>
              <div className="relative">
                <p className="text-white font-semibold">{t.name}</p>
                <p className="text-cyan-200/80 text-sm">{t.role}</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-cyan-300/70">Augmentation: <span className="text-cyan-100/80">{t.augmentation}</span></p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
