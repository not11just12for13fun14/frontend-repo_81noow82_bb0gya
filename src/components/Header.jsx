import { Menu, LogIn, ShieldAlert, Rocket, Lock, Radio } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState, useMemo } from "react";

const COMPANIES = [
  "MILITECH",
  "ARASAKA",
  "KANG TAO",
  "NETWATCH",
  "TRAUMA TEAM",
  "NEBULA SYS",
  "PETROCHEM",
  "BIOTECHNA",
];

function generateInitialTickers() {
  return COMPANIES.map((name) => ({
    name,
    change: +(Math.random() * 6 - 3).toFixed(1), // -3.0% to +3.0%
  }));
}

export default function Header() {
  const tickerRef = useRef(null);
  const [tickers, setTickers] = useState(generateInitialTickers);

  // Animate marquee movement (aggressive speed)
  useEffect(() => {
    if (!tickerRef.current) return;
    const el = tickerRef.current;
    let frame;
    let x = 0;
    const speed = 1.2; // faster for aggressive vibe

    const step = () => {
      x -= speed;
      if (Math.abs(x) >= el.scrollWidth / 2) x = 0;
      el.style.transform = `translateX(${x}px)`;
      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Live updates (random walk) for ticker values
  useEffect(() => {
    const id = setInterval(() => {
      setTickers((prev) =>
        prev.map((t) => {
          const delta = +(Math.random() * 1.4 - 0.7).toFixed(1); // -0.7%..+0.7%
          let next = t.change + delta;
          // clamp to a sensible window
          if (next > 9.9) next = 9.9;
          if (next < -9.9) next = -9.9;
          return { ...t, change: +next.toFixed(1) };
        })
      );
    }, 1400);
    return () => clearInterval(id);
  }, []);

  const rendered = useMemo(() => {
    return [...tickers, ...tickers].map((t, i) => {
      const positive = t.change >= 0;
      const sign = positive ? "+" : "";
      const color = positive ? "text-cyan-300" : "text-red-300";
      return (
        <span key={i} className="px-6 text-[11px] leading-8 tracking-[0.2em] text-cyan-100/80">
          <span className="text-cyan-200/90">{t.name}</span>
          <span className={`ml-2 ${color}`}>{`${sign}${t.change.toFixed(1)}%`}</span>
        </span>
      );
    });
  }, [tickers]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/70 border-b border-cyan-400/30 shadow-[0_8px_30px_rgba(0,240,255,0.08)]">
      {/* Live Market Ticker */}
      <div className="relative overflow-hidden border-b border-cyan-400/20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent" />
        <div className="flex items-center gap-2 px-4 py-2 text-xs tracking-wider uppercase">
          <Radio className="w-4 h-4 text-cyan-300 animate-pulse" />
          <span className="text-cyan-300/80">Live Market Ticker</span>
          <span className="ml-auto rounded-full border border-red-400/40 bg-red-500/10 px-2 py-0.5 text-[10px] tracking-[0.25em] text-red-200">Aggressive Mode</span>
        </div>
        <div className="relative w-full h-8">
          <div className="absolute flex whitespace-nowrap will-change-transform" ref={tickerRef}>
            {rendered}
          </div>
        </div>
      </div>

      {/* Nav */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between py-4">
          <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 ring-2 ring-cyan-400/50 shadow-[0_0_40px_0_rgba(0,240,255,0.45)]" />
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
              <a key={item.id} href={`#${item.id}`} className="text-cyan-100/90 hover:text-cyan-300 transition">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-cyan-400/40 bg-slate-800/60 px-3 py-2 text-xs font-medium text-cyan-100 hover:bg-slate-700/60 transition">
              <LogIn className="h-4 w-4 text-cyan-300" /> Login [Encrypted]
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 px-4 py-2 text-xs font-semibold tracking-wide text-slate-900 ring-2 ring-cyan-400/60 shadow-[0_0_30px_0_rgba(0,240,255,0.45)]">
              <Rocket className="h-4 w-4" /> DEPLOY SYSTEM (v.2.0)
            </button>
            <button className="md:hidden p-2 rounded-lg border border-cyan-400/30 text-cyan-200/90">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
