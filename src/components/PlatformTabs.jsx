import { useState } from 'react';
import { Lock, FileCode2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TABS = [
  {
    key: 'auto',
    label: 'Auto-Litigation',
    icon: FileCode2,
    title: 'Autonomous Litigation Engine',
    desc: 'Deploy AI prosecutors to parse, draft, and file at machine speed. Precision discovery, surgical filings, verdict optimization.',
    visual: 'contract'
  },
  {
    key: 'freeze',
    label: 'Asset Freezing',
    icon: Lock,
    title: 'Zero-Latency Asset Freezing',
    desc: 'Trigger coordinated injunctions across banking networks. Real-time lockout with evidentiary trails and compliance logging.',
    visual: 'lock'
  }
];

export default function PlatformTabs() {
  const [active, setActive] = useState('auto');
  const ActiveIcon = TABS.find(t => t.key === active)?.icon || FileCode2;

  return (
    <section id="platform" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,240,255,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">Platform Capability</p>
            <h2 className="mt-2 text-3xl font-bold text-white">Software Modules</h2>
          </div>
          <div className="hidden md:flex items-center gap-2 text-cyan-200/70">
            <ActiveIcon className="h-5 w-5 text-cyan-300" />
            <span className="text-sm">{TABS.find(t => t.key === active)?.label}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1 rounded-xl border border-cyan-400/20 bg-slate-900/60 backdrop-blur p-2">
            {TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`w-full text-left rounded-lg px-4 py-3 mb-2 last:mb-0 transition ${active === t.key ? 'bg-slate-800/70 ring-1 ring-cyan-400/40' : 'hover:bg-slate-800/40'}`}
              >
                <div className="flex items-center gap-3">
                  <t.icon className="h-4 w-4 text-cyan-300" />
                  <span className="text-cyan-100/90 text-sm">{t.label}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="md:col-span-2">
            <AnimatePresence mode="wait">
              {TABS.map((t) => (
                t.key === active && (
                  <motion.div
                    key={t.key}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-xl border border-cyan-400/20 bg-slate-900/60 backdrop-blur p-6"
                  >
                    <h3 className="text-xl font-semibold text-white">{t.title}</h3>
                    <p className="mt-2 text-cyan-100/80">{t.desc}</p>
                    <div className="mt-6 grid sm:grid-cols-2 gap-4">
                      <div className="rounded-lg border border-cyan-400/20 bg-slate-950/60 p-4">
                        <p className="text-[11px] uppercase tracking-[0.25em] text-cyan-300/80">Visual</p>
                        <div className="mt-2 h-40 rounded bg-gradient-to-br from-slate-800/80 to-slate-900/80 grid place-items-center">
                          {t.visual === 'contract' ? (
                            <div className="text-center">
                              {/* Image placeholder: contract code analysis */}
                              <div className="mx-auto h-12 w-12 rounded-lg bg-cyan-500/20 ring-2 ring-cyan-400/40" />
                              <p className="mt-2 text-cyan-100/80 text-sm">Code analyzing a contract</p>
                            </div>
                          ) : (
                            <div className="text-center">
                              {/* Image placeholder: Lock on bank UI */}
                              <div className="mx-auto h-12 w-12 rounded-full bg-cyan-500/20 ring-2 ring-cyan-400/40" />
                              <p className="mt-2 text-cyan-100/80 text-sm">Lock icon on bank interface</p>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="rounded-lg border border-cyan-400/20 bg-slate-950/60 p-4">
                        <p className="text-[11px] uppercase tracking-[0.25em] text-cyan-300/80">Telemetry</p>
                        <ul className="mt-2 text-cyan-100/80 text-sm space-y-2">
                          <li>Latency: <span className="text-cyan-300">4.2ms</span></li>
                          <li>Throughput: <span className="text-cyan-300">2.1M ops/sec</span></li>
                          <li>Compliance: <span className="text-cyan-300">ISO-LEX 9001</span></li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
