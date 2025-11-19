import { TerminalSquare, Shield, Zap } from "lucide-react";

export default function CTAConsole() {
  return (
    <section className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 [background:radial-gradient(50%_60%_at_50%_100%,rgba(0,240,255,0.07),transparent_70%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-cyan-400/30 bg-slate-900/70 backdrop-blur p-6">
          <div className="flex items-center gap-3">
            <TerminalSquare className="h-5 w-5 text-cyan-300" />
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">Holographic Command Console</p>
          </div>
          <div className="mt-4 grid md:grid-cols-[1.2fr,0.8fr] gap-4">
            <div className="rounded-xl border border-cyan-400/20 bg-slate-950/70 p-4">
              <pre className="text-[12px] leading-5 text-cyan-200/90">
{`> audit entity --name \"ARASAKA LTD\" --exposure high\n`}
{`> scan-directors --graph --limit 12\n`}
{`> freeze-assets --jurisdictions us,uk,sg --mode stealth\n`}
{`> file-injunction --venue \"SDNY\" --auto-sign\n`}
              </pre>
            </div>
            <div className="rounded-xl border border-cyan-400/20 bg-slate-950/70 p-4">
              <p className="text-cyan-100/80 text-sm">Preflight checks</p>
              <ul className="mt-2 space-y-1 text-[12px] text-cyan-200/80">
                <li>✔ Compliance window open</li>
                <li>✔ Venue latency within SLA</li>
                <li>✔ Counsel signatures cached</li>
                <li>✔ Banking API tokens valid</li>
              </ul>
              <div className="mt-4 flex gap-2">
                <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-600 px-4 py-2 text-slate-900 font-semibold ring-2 ring-cyan-300/60"><Zap className="h-4 w-4" /> Execute</button>
                <button className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/30 px-4 py-2 text-cyan-100/90"><Shield className="h-4 w-4" /> Safe Mode</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
