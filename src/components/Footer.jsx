import { ShieldCheck, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-cyan-400/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,240,255,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-5 w-5 text-cyan-300" />
          <p className="text-cyan-100/90 text-sm">System Secure. Encryption Level: MILITARY.</p>
        </div>
        <div className="flex items-center gap-4 text-cyan-200/80">
          <a href="#" aria-label="Twitter" className="hover:text-cyan-300 transition"><Twitter className="h-5 w-5" /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-cyan-300 transition"><Linkedin className="h-5 w-5" /></a>
          <a href="#" aria-label="GitHub" className="hover:text-cyan-300 transition"><Github className="h-5 w-5" /></a>
        </div>
      </div>
    </footer>
  );
}
