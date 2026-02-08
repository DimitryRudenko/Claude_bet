'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  BarChart3,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  Zap,
  BrainCircuit,
  Activity,
  Wallet,
  Trophy,
  Dumbbell
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }

const GlassCard = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn(
    "relative border border-white/10 bg-[#0a0a0a]/60 backdrop-blur-2xl rounded-[24px] overflow-hidden p-1 shadow-2xl transition-all duration-500 hover:border-emerald-500/30",
    className
  )}>
    {children}
  </div>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-8 bg-white/[0.01] hover:bg-white/[0.03] rounded-xl flex flex-col gap-4 group border border-white/5 hover:border-emerald-500/20 transition-all"
  >
    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
      <Icon className="w-5 h-5 text-emerald-400" />
    </div>
    <div>
      <h3 className="text-[13px] font-bold tracking-widest text-white uppercase mb-2">{title}</h3>
      <p className="text-[12px] leading-relaxed text-white/40">{description}</p>
    </div>
  </motion.div>
);

const SportTile = ({ name, rate, icon: Icon }: { name: string, rate: string, icon: React.ElementType }) => (
  <div className="p-6 bg-white/[0.01] rounded-xl border border-white/5 flex items-center justify-between group hover:border-emerald-500/20 transition-all">
    <div className="flex items-center gap-4">
      <Icon className="w-5 h-5 text-white/20 group-hover:text-emerald-400 transition-colors" />
      <span className="text-[12px] font-medium tracking-wider text-white/60">{name}</span>
    </div>
    <span className="text-sm font-light text-emerald-400">{rate}</span>
  </div>
);

export default function RuneLanding() {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityHero = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-emerald-500/30 font-sans">

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[100] px-8 py-6 flex justify-between items-center backdrop-blur-md bg-[#050505]/50 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-sm bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-[0_0_15px_rgba(52,211,153,0.3)]">
            <div className="w-2 h-2 bg-black rotate-45" />
          </div>
          <span className="text-[13px] font-bold tracking-[0.2em] text-white/90">RUNE</span>
        </div>
        <div className="hidden md:flex gap-8 items-center mr-8">
          {[
            { label: 'Intelligence', href: '#intelligence' },
            { label: 'Performance', href: '#performance' },
            { label: 'Stats', href: '#stats' },
          ].map((item) => (
            <a key={item.label} href={item.href} className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase cursor-pointer hover:text-white/60 transition-colors">{item.label}</a>
          ))}
        </div>
        <Link href="/login">
          <button className="text-[11px] font-semibold uppercase tracking-widest px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all active:scale-95 text-white/80">
            Connexion
          </button>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-500/10 blur-[120px] mix-blend-screen animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-600/10 blur-[140px] mix-blend-screen" />
          <div className="absolute top-1/4 left-1/3 w-[30%] h-[30%] rounded-full bg-violet-500/5 blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <motion.div style={{ y: yHero, opacity: opacityHero }} className="relative z-10 container mx-auto px-6 pt-32 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-md"
          >
            <Zap className="w-3 h-3 text-emerald-400 fill-emerald-400" />
            <span className="text-[10px] font-bold tracking-[0.15em] text-emerald-400 uppercase">IA Multi-Agents Quantitative</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-[100px] font-light tracking-[-0.04em] leading-[0.9] text-white mb-8"
          >
            RUNE<span className="text-emerald-500/80">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-lg text-white/40 text-[13px] leading-relaxed mb-10 tracking-wide"
          >
            Analyses souveraines pour le parieur moderne. Exploitez la puissance d&apos;agents IA pour naviguer les inefficiences du marché avec une précision chirurgicale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link href="/login">
              <button className="group px-8 py-3.5 rounded-full bg-emerald-500 text-black font-bold text-[11px] tracking-[0.15em] uppercase shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:scale-105 transition-transform active:scale-95">
                <span className="flex items-center gap-2">Commencer <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></span>
              </button>
            </Link>
            <Link href="/login">
              <button className="px-8 py-3.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[11px] font-bold tracking-[0.15em] uppercase text-white/80 hover:bg-white/10 transition-all">
                Voir le Dashboard
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Quick Stats Card */}
        <motion.div id="stats"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 mt-24 w-full max-w-[1000px] px-6"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-indigo-500/20 rounded-[32px] blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000" />
            <GlassCard>
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                <div className="text-[10px] font-medium tracking-[0.2em] text-white/20 uppercase">Flux temps réel // actif</div>
                <ShieldCheck className="w-4 h-4 text-emerald-500/50" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-1 p-1">
                {[
                  { label: "Profit Total", value: "+314€", trend: "+12.4%" },
                  { label: "ROI", value: "30%", trend: "+8.2%" },
                  { label: "Taux Victoire", value: "55%", trend: "Stable" },
                  { label: "Sessions", value: "24", trend: "Actif" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    className="p-6 bg-white/[0.01] hover:bg-white/[0.03] transition-colors rounded-xl"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-[10px] font-medium tracking-widest text-white/30 uppercase">{stat.label}</p>
                      <span className={cn(
                        "text-[9px] font-bold tracking-tighter px-2 py-0.5 rounded-full border",
                        stat.trend.includes('+') ? "text-emerald-400 border-emerald-500/20 bg-emerald-500/5" : "text-white/30 border-white/10"
                      )}>{stat.trend}</span>
                    </div>
                    <p className="text-xl font-light text-white tracking-tight">{stat.value}</p>
                  </motion.div>
                ))}
              </div>
              <div className="px-6 py-8 h-48 flex items-end justify-between gap-2">
                {[40, 70, 45, 90, 65, 85, 100, 80, 50, 60, 75, 95].map((h, i) => (
                  <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 1.5, delay: 1.2 + i * 0.05, ease: "circOut" }} className="flex-1 rounded-t-[2px] bg-gradient-to-t from-emerald-500/5 to-emerald-500/20 border-t border-emerald-500/30" />
                ))}
              </div>
            </GlassCard>
          </div>
        </motion.div>

        <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-[#050505] to-transparent z-30 pointer-events-none" />
      </section>

      {/* Features Section */}
      <section id="intelligence" className="py-32 px-6 relative scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-20">
            <div className="h-px w-12 bg-emerald-500/50 mb-8" />
            <h2 className="text-[10px] font-bold tracking-[0.3em] text-emerald-400 uppercase mb-4">Intelligence Centrale</h2>
            <p className="text-3xl font-light tracking-tight text-white/90">Analyse Autonome des Marchés</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard icon={BrainCircuit} title="Analyse IA" description="Système multi-agents propriétaire avec 5 agents spécialisés analysant pronostics, stats, contexte, value et risques en parallèle." />
            <FeatureCard icon={Activity} title="Suivi Temps Réel" description="Dashboard live capturant les mouvements de cotes et métriques de performance sur les marchés NBA, Football et Rugby." />
            <FeatureCard icon={Wallet} title="Bankroll Intelligente" description="Critère de Half Kelly adaptatif assurant un sizing optimal basé sur l'edge calculé, avec protection stop-loss automatique." />
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section id="performance" className="py-32 px-6 relative bg-white/[0.01] border-y border-white/5 scroll-mt-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-[10px] font-bold tracking-[0.3em] text-emerald-400 uppercase mb-6">Performance par Sport</h2>
            <h3 className="text-4xl font-light tracking-tight text-white mb-8 leading-tight">
              Des résultats supérieurs sur <span className="text-emerald-500/50 italic">chaque</span> terrain.
            </h3>
            <p className="text-white/40 text-[13px] leading-relaxed max-w-md">
              Nos agents se spécialisent sur les marchés Tier 1 à haute liquidité où la densité de données permet la modélisation prédictive la plus précise.
            </p>
          </div>
          <div className="grid gap-3">
            <SportTile name="NBA Basketball" rate="82% VICTOIRES" icon={Activity} />
            <SportTile name="Football Tier 1" rate="57% VICTOIRES" icon={Trophy} />
            <SportTile name="Rugby Union" rate="43% VICTOIRES" icon={Dumbbell} />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
          <div className="w-[800px] h-[800px] rounded-full bg-emerald-500/20 blur-[160px]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-8">
            <TrendingUp className="w-6 h-6 text-emerald-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-10">Commencez votre aventure quantitative.</h2>
          <Link href="/login">
            <button className="group relative px-10 py-4 rounded-full bg-emerald-500 text-black font-bold text-[12px] tracking-[0.15em] uppercase overflow-hidden transition-all hover:shadow-[0_0_50px_rgba(16,185,129,0.4)] hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2">Accéder <ArrowRight className="w-4 h-4" /></span>
            </button>
          </Link>
          <div className="mt-40 pt-10 border-t border-white/5 w-full flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-sm bg-white/10 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white/40 rotate-45" />
              </div>
              <span className="text-[11px] font-bold tracking-[0.2em] text-white/30">RUNE 2026</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02]">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-bold tracking-widest text-white/40 uppercase">Système Opérationnel</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
