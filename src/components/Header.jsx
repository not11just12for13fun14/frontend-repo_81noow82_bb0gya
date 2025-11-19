import { Menu, LogIn, ShieldAlert, Rocket, Lock, Radio } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const TICKER_ITEMS = [
  "MILITECH +2.4%",
  "ARASAKA -0.8%",
  "KANG TAO +5.1%",
  "NETWATCH +1.2%",
  "TRAUMA TEAM +3.7%",
  "NEBULA SYS +4.4%",
];

export default function Header() {
  const tickerRef = useRef(null);

  useEffect(() => {
    if (!tickerRef.current) return;
    const el = tickerRef.current;
    let frame;
    let x = 0;
    const speed = 0.7; // px per frame

    const step = () => {
      x -= speed;
      if (Math.abs(x) >= el.scrollWidth / 2) x = 0;
      el.style.transform = `translateX(${x}px)`;
      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/60 border-b border-cyan-400/20">
      {/* Live Market Ticker */}
      <div className="relative overflow-hidden border-b border-cyan-400/10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent" />
        <div className="flex items-center gap-2 px-4 py-2 text-xs tracking-wider uppercase">
          <Radio className="w-4 h-4 text-cyan-300" />
          <span className="text-cyan-300/80">Live Market Ticker</span>
        </div>
        <div className="relative w-full h-8">
          <div className="absolute flex whitespace-nowrap will-change-transform" ref={tickerRef}>
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((t, i) => (
              <span
                key={i}
                className="px-6 text-[11px] leading-8 tracking-[0.2em] text-cyan-100/70"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Nav */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between py-4">
          <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 ring-2 ring-cyan-400/40 shadow-[0_0_40px_0_rgba(0,240,255,0.35)]" />
            <div className="leading-tight">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">[Encrypted]</p>
              <p className="text-sm font-semibold text-white">AI Legal Warfare</p>
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {[
              { id: "platform", label: "Platform" },
              { id: "solutions", label: "Solutions" },
              { id: "pricing", label: "Pricing" },
              { id: "architects", label: "The Architects" },
            ].map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-cyan-100/80 hover:text-cyan-300 transition">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-slate-800/60 px-3 py-2 text-xs font-medium text-cyan-100 hover:bg-slate-700/60 transition">
              <LogIn className="h-4 w-4 text-cyan-300" /> Login [Encrypted]
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 px-4 py-2 text-xs font-semibold tracking-wide text-slate-900 ring-2 ring-cyan-400/50 shadow-[0_0_30px_0_rgba(0,240,255,0.35)]">
              <Rocket className="h-4 w-4" /> DEPLOY SYSTEM (v.2.0)
            </button>
            <button className="md:hidden p-2 rounded-lg border border-cyan-400/20 text-cyan-200/90">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
