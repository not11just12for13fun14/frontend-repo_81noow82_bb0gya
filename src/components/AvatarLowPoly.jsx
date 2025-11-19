import React from 'react';

// Low-poly, monochrome avatar with neon cyan linework on dark background
// Matches: "Low-poly geometric portrait of a corporate lawyer... neon blue lines highlighting sharp facial features, cybernetic implants, and suit contours."
export default function AvatarLowPoly({ className = "h-36 w-full rounded-xl" }) {
  return (
    <div className={`${className} relative overflow-hidden ring-1 ring-cyan-400/30 bg-slate-950`}>      
      <svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="neon" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#4be0ff" stopOpacity="0.95" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="colored" />
            <feMerge>
              <feMergeNode in="colored" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Dark grid backdrop */}
        <g opacity="0.08" stroke="#00f0ff" strokeWidth="1">
          {Array.from({ length: 20 }).map((_, i) => (
            <line key={`v-${i}`} x1={i*15} y1="0" x2={i*15} y2="180" />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={i*15} x2="300" y2={i*15} />
          ))}
        </g>

        {/* Head (low-poly) */}
        <g fill="none" stroke="url(#neon)" strokeWidth="1.8" filter="url(#glow)">
          <polygon points="150,20 200,45 215,90 200,135 150,160 100,135 85,90 100,45" />
          {/* Cheek cuts */}
          <polyline points="200,45 150,70 100,45" />
          <polyline points="85,90 150,110 215,90" />
          {/* Jaw lines */}
          <polyline points="100,135 150,120 200,135" />
          {/* Eyes (slits) */}
          <line x1="125" y1="90" x2="140" y2="90" />
          <line x1="160" y1="90" x2="175" y2="90" />
          {/* Nose ridge */}
          <polyline points="150,75 150,102 155,108" />
          {/* Mouth */}
          <line x1="135" y1="118" x2="165" y2="118" opacity="0.8" />
        </g>

        {/* Cybernetic implants */}
        <g stroke="url(#neon)" strokeWidth="1.6" filter="url(#glow)">
          <circle cx="205" cy="78" r="6" fill="none" />
          <line x1="205" y1="78" x2="235" y2="70" />
          <circle cx="95" cy="78" r="4" fill="none" />
          <line x1="95" y1="78" x2="70" y2="68" />
        </g>

        {/* Suit contours */}
        <g stroke="url(#neon)" strokeWidth="1.8" fill="none" filter="url(#glow)">
          <polyline points="100,135 75,175 225,175 200,135" />
          <polyline points="150,120 150,175" />
          <polyline points="135,135 150,150 165,135" />
        </g>
      </svg>
      {/* Subtle scanlines */}
      <div className="absolute inset-0 opacity-[0.09] [background:repeating-linear-gradient(180deg,transparent,transparent_2px,rgba(0,240,255,0.25)_3px,transparent_4px)]" />
    </div>
  );
}
