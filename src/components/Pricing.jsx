import { motion } from 'framer-motion';
import { Shield, Crown, Sword } from 'lucide-react';

const plans = [
  {
    name: 'Street Ronin',
    tier: 'Starter',
    price: '$499/mo',
    icon: Sword,
    features: ['Basic legal defense', 'Automated contract review', 'Email support'],
    accent: 'border-cyan-400/30',
  },
  {
    name: 'Corporate Exec',
    tier: 'Pro',
    price: '$4,999/mo',
    icon: Shield,
    features: ['Hostile takeover tools', 'Asset freezing module', 'Priority support'],
    highlight: true,
    accent: 'border-amber-400/60 shadow-[0_0_50px_rgba(255,215,0,0.25)]',
  },
  {
    name: 'Board Member',
    tier: 'Enterprise',
    price: 'Custom',
    icon: Crown,
    features: ['Total immunity protocols', 'Dedicated lawyer team', 'On-prem deployments'],
    accent: 'border-red-400/40',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,240,255,0.07),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">Pricing</p>
          <h2 className="mt-2 text-3xl font-bold text-white">Choose your command tier</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`relative rounded-2xl p-6 bg-slate-900/60 border ${p.highlight ? 'border-amber-400/60' : 'border-cyan-400/20'} backdrop-blur ${p.accent}`}
            >
              <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-white/5 to-transparent" />
              <div className="flex items-center gap-3">
                <p.icon className={`h-6 w-6 ${p.highlight ? 'text-amber-300' : 'text-cyan-300'}`} />
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">{p.tier}</p>
                  <h3 className="text-xl font-semibold text-white">{p.name}</h3>
                </div>
              </div>
              <p className="mt-4 text-4xl font-extrabold text-white">{p.price}</p>
              <ul className="mt-4 space-y-2 text-cyan-100/80 text-sm">
                {p.features.map((f, idx) => (
                  <li key={idx}>• {f}</li>
                ))}
              </ul>
              <a href="#" className={`mt-6 inline-flex items-center justify-center rounded-lg px-4 py-2 font-semibold ${p.highlight ? 'bg-amber-300 text-slate-900' : 'bg-cyan-400 text-slate-900'} ring-2 ${p.highlight ? 'ring-amber-200/80' : 'ring-cyan-300/80'}`}>
                Purchase
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
