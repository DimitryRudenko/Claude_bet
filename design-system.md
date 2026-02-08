```tsx
// REQUIRED DEPENDENCIES:
// - framer-motion (npm install framer-motion)
// - lucide-react (npm install lucide-react)
// - clsx (npm install clsx)
// - tailwind-merge (npm install tailwind-merge)

import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BarChart3, TrendingUp, ShieldCheck, ArrowRight, Zap } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility for Tailwind class merging
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * RUNE HERO SECTION
 * Aesthetic: Apple Vision Pro / Liquid Glass / Refined Luxury
 * Functional Context: Sports Betting Analytics (NBA, Football, Rugby)
 */
export default function RuneHero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050505] flex flex-col items-center justify-center selection:bg-emerald-500/30">
      {/* --- ATMOSPHERE & MESH BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        {/* Deep liquid mesh gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-500/10 blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-600/10 blur-[140px] mix-blend-screen" />
        <div className="absolute top-1/4 left-1/3 w-[30%] h-[30%] rounded-full bg-violet-500/5 blur-[100px]" />

        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* --- NAVIGATION (REFINED SCALE) --- */}
      <nav className="absolute top-0 w-full z-50 px-8 py-6 flex justify-between items-center max-w-7xl">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-6 h-6 rounded-sm bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-[0_0_15px_rgba(52,211,153,0.3)]">
            <div className="w-2 h-2 bg-black rotate-45" />
          </div>
          <span className="text-[13px] font-bold tracking-[0.2em] text-white/90">RUNE</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-[11px] font-medium uppercase tracking-widest text-white/40">
          <a href="#" className="hover:text-white transition-colors">Analytics</a>
          <a href="#" className="hover:text-white transition-colors">Markets</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
        </div>

        <button className="text-[11px] font-semibold uppercase tracking-widest px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all active:scale-95 text-white/80">
          Access Portal
        </button>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <motion.div
        style={{ y: y1, opacity }}
        className="relative z-10 container mx-auto px-6 pt-20 flex flex-col items-center text-center"
      >
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-md"
        >
          <Zap className="w-3 h-3 text-emerald-400 fill-emerald-400" />
          <span className="text-[10px] font-bold tracking-[0.15em] text-emerald-400 uppercase">
            Quant-Driven Betting Engine
          </span>
        </motion.div>

        {/* Hero Heading */}
        <motion.h1
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-[100px] font-light tracking-[-0.04em] leading-[0.9] text-white mb-8"
        >
          RUNE<span className="text-emerald-500/80">.</span>
        </motion.h1>

        {/* Subheading - Refined Scale */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-[540px] text-sm md:text-base text-white/40 leading-relaxed font-light mb-12"
        >
          Precision analytics for the modern bettor. Our neural networks process
          millions of data points across global markets to deliver
          <span className="text-white/80"> institutional-grade edges </span>
          for NBA, Football, and Rugby.
        </motion.p>

        {/* CTA Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <button className="group relative px-7 py-3 rounded-full bg-emerald-500 text-black font-bold text-[12px] tracking-wider uppercase transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
            <span className="relative z-10 flex items-center gap-2">
              Start Free Trial <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button className="px-7 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-white/70 font-bold text-[12px] tracking-wider uppercase transition-all hover:bg-white/10 hover:text-white">
            View Live Performance
          </button>
        </motion.div>
      </motion.div>

      {/* --- FLOATING "GLASS" DASHBOARD PREVIEW --- */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 mt-24 w-full max-w-[1000px] px-6"
      >
        <div className="relative group">
          {/* Glowing Aura behind panel */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-indigo-500/20 rounded-[32px] blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000" />

          {/* Main Glass Panel */}
          <div className="relative border border-white/10 bg-[#0a0a0a]/60 backdrop-blur-2xl rounded-[24px] overflow-hidden p-1 shadow-2xl">
            {/* Header of internal panel */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              <div className="text-[10px] font-medium tracking-[0.2em] text-white/20 uppercase">Real-time Stream // active</div>
              <ShieldCheck className="w-4 h-4 text-emerald-500/50" />
            </div>

            {/* Content Mockup */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 p-1">
              {/* Stat Card 1 */}
              <GlassCard
                label="Total Profit"
                value="[Stat]"
                trend="+12.4%"
                icon={<BarChart3 className="w-4 h-4 text-emerald-400" />}
              />
              {/* Stat Card 2 */}
              <GlassCard
                label="ROI (Current Season)"
                value="[Stat]"
                trend="+8.2%"
                icon={<TrendingUp className="w-4 h-4 text-indigo-400" />}
              />
              {/* Stat Card 3 */}
              <GlassCard
                label="Win Probability"
                value="[Stat]"
                trend="Stable"
                icon={<Zap className="w-4 h-4 text-amber-400" />}
              />
            </div>

            {/* Visual Graph Mockup */}
            <div className="px-6 py-8 h-48 flex items-end justify-between gap-2">
              {[40, 70, 45, 90, 65, 85, 100, 80, 50, 60, 75, 95].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 1.5, delay: 1 + (i * 0.05), ease: "circOut" }}
                  className="flex-1 rounded-t-[2px] bg-gradient-to-t from-emerald-500/5 to-emerald-500/20 border-t border-emerald-500/30"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-[#050505] to-transparent z-30 pointer-events-none" />
    </section>
  );
}

/**
 * Sub-component for the dashboard preview cards
 */
function GlassCard({ label, value, trend, icon }: { label: string; value: string; trend: string; icon: React.ReactNode }) {
  return (
    <div className="p-6 bg-white/[0.01] hover:bg-white/[0.03] transition-colors rounded-xl border border-transparent hover:border-white/5">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 rounded-lg bg-white/5 border border-white/5">
          {icon}
        </div>
        <span className={cn(
          "text-[9px] font-bold tracking-tighter px-2 py-0.5 rounded-full border",
          trend.includes('+') ? "text-emerald-400 border-emerald-500/20 bg-emerald-500/5" : "text-white/30 border-white/10"
        )}>
          {trend}
        </span>
      </div>
      <p className="text-[10px] font-medium tracking-widest text-white/30 uppercase mb-1">{label}</p>
      <p className="text-xl font-light text-white tracking-tight">{value}</p>
    </div>
  );
}
```

## Design Tokens

### Colors
- **Background**: `#050505` (near-black)
- **Primary Accent**: Emerald (`emerald-400`, `emerald-500`, `emerald-600`)
- **Secondary**: Indigo (`indigo-400`, `indigo-600`)
- **Tertiary**: Violet (`violet-500`)
- **Text Primary**: `white`, `white/90`
- **Text Secondary**: `white/40`
- **Text Muted**: `white/20`, `white/30`
- **Surface Glass**: `bg-white/[0.01]` to `bg-white/[0.03]`
- **Border**: `border-white/10`, `border-white/5`

### Typography
- **Font**: Inter (system)
- **Display**: `text-[100px] font-light tracking-[-0.04em]`
- **Badge**: `text-[10px] font-bold tracking-[0.15em] uppercase`
- **Nav**: `text-[11px] font-medium uppercase tracking-widest`
- **Body**: `text-sm md:text-base font-light leading-relaxed`
- **Stat Label**: `text-[10px] font-medium tracking-widest uppercase`
- **Stat Value**: `text-xl font-light tracking-tight`
- **Micro**: `text-[9px] font-bold tracking-tighter`

### Effects
- **Glass Panel**: `bg-[#0a0a0a]/60 backdrop-blur-2xl border border-white/10 rounded-[24px]`
- **Glow Aura**: `bg-gradient-to-r from-emerald-500/20 to-indigo-500/20 blur-2xl`
- **CTA Shadow**: `shadow-[0_0_40px_rgba(16,185,129,0.3)]`
- **Mesh Gradient**: Large blurred circles with `mix-blend-screen`
- **Noise Overlay**: `opacity-[0.03]` grain texture
- **Subtle Grid**: `44px` grid with radial mask

### Animations
- **Entrance**: `duration: 0.8-1.2s`, ease `[0.16, 1, 0.3, 1]`
- **Blur reveal**: `filter: blur(10px) → blur(0px)`
- **Parallax**: `useTransform(scrollY, [0, 500], [0, 200])`
- **Hover scale**: `hover:scale-105 active:scale-95`

### Components
- **Button Primary**: `rounded-full bg-emerald-500 text-black font-bold text-[12px] tracking-wider uppercase`
- **Button Secondary**: `rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-white/70`
- **Badge**: `rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-md`
- **Glass Card**: `bg-white/[0.01] hover:bg-white/[0.03] rounded-xl border border-transparent hover:border-white/5`
- **Logo**: Emerald gradient square with rotated diamond inside
