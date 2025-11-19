import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden" id="hero">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Glass gradient overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-900/50 to-slate-950/90" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-900/60 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-cyan-200/80 backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500 shadow-[0_0_12px_rgba(255,0,0,0.9)]" />
            Warning: Red-Team Access Granted
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_22px_rgba(0,240,255,0.25)]">
            AUTOMATE YOUR LEGAL DOMINANCE.
          </h1>
          <p className="mt-5 text-lg text-cyan-100/80 max-w-2xl">
            The first AI-driven hostile takeover platform. Liquidate assets with a single keystroke.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-600 px-5 py-3 text-slate-900 font-semibold shadow-[0_0_40px_rgba(0,240,255,0.35)] ring-2 ring-cyan-300/50">
              START FREE TRIAL [Risk Class C]
            </a>
            <a href="#platform" className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/40 bg-slate-900/70 px-4 py-3 text-cyan-100/90">
              View Platform
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
