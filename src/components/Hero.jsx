import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden" id="hero">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Aggressive holographic overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-900/40 to-slate-950/90" />
        <div className="absolute -inset-20 opacity-20 [background:conic-gradient(from_180deg_at_50%_50%,#00f0ff33,transparent_60%)]" />
        <div className="absolute inset-0 opacity-15 [background:repeating-linear-gradient(90deg,transparent,transparent_22px,rgba(0,240,255,0.09)_24px,transparent_26px)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-36">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-400/40 bg-red-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-red-200 backdrop-blur">
            <span className="h-1.5 w-1.5 animate-ping rounded-full bg-red-500 shadow-[0_0_12px_rgba(255,0,0,0.9)]" />
            Breach Protocol: Authorized Operators Only
          </div>
          <h1 className="text-[42px] sm:text-6xl md:text-7xl font-black leading-tight text-white drop-shadow-[0_0_26px_rgba(0,240,255,0.35)]">
            EXECUTE HOSTILE LEGAL OPS AT MACHINE SPEED.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-cyan-100/85 max-w-2xl">
            Aggressive, fully autonomous filings. Jurisdiction hopping. Asset freeze orchestration. Evidence minted on-chain.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-600 px-5 py-3 text-slate-900 font-semibold shadow-[0_0_40px_rgba(0,240,255,0.35)] ring-2 ring-cyan-300/50">
              START FREE TRIAL [Risk Class C]
            </a>
            <a href="#platform" className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/40 bg-slate-900/70 px-4 py-3 text-cyan-100/90">
              View Platform
            </a>
          </div>

          <div className="mt-10 text-[11px] uppercase tracking-[0.3em] text-cyan-300/80">Latency SLA: 10ms • Evidence Integrity: Quantum-Safe • Coverage: 27 Jurisdictions</div>
        </motion.div>
      </div>
    </section>
  );
}
