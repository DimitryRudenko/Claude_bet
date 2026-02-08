'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Eye, EyeOff, User, Lock, ArrowLeft, Diamond } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (username === 'Rune' && password === 'GOATRUNE') {
      document.cookie = `rune-auth=true; path=/; max-age=86400`;
      setTimeout(() => {
        router.push('/dashboard');
      }, 800);
    } else {
      setTimeout(() => {
        setError('Identifiants invalides. Accès refusé.');
        setIsSubmitting(false);
      }, 500);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#050505] overflow-hidden flex items-center justify-center font-sans selection:bg-emerald-500/30">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/15 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/15 blur-[120px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-[420px] px-6"
      >
        <div className="group bg-[#0a0a0a]/60 backdrop-blur-2xl border border-white/10 rounded-[24px] p-8 shadow-2xl transition-all duration-500 hover:border-emerald-500/20 hover:shadow-emerald-500/5">

          {/* Logo */}
          <div className="flex flex-col items-center mb-10">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)] mb-4">
              <Diamond className="w-5 h-5 text-black fill-black/20" />
            </div>
            <h1 className="text-white text-xl font-medium tracking-tight">Bon retour</h1>
            <p className="text-white/40 text-[13px] mt-1">Accédez à votre intelligence paris</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[11px] uppercase tracking-wider text-white/30 font-bold ml-1">Identifiant</label>
              <div className="relative group/input">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within/input:text-emerald-400 transition-colors">
                  <User size={16} />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl backdrop-blur-md text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 px-11 py-3.5 text-[14px] transition-all"
                  placeholder="Entrez votre identifiant"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] uppercase tracking-wider text-white/30 font-bold ml-1">Mot de passe</label>
              <div className="relative group/input">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within/input:text-emerald-400 transition-colors">
                  <Lock size={16} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl backdrop-blur-md text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 px-11 py-3.5 text-[14px] transition-all"
                  placeholder="Entrez votre mot de passe"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Error */}
            <AnimatePresence mode="wait">
              {error && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: [0, -4, 4, -4, 4, 0] }}
                  exit={{ opacity: 0 }}
                  className="bg-red-500/10 border border-red-500/20 rounded-lg p-3"
                >
                  <p className="text-red-400 text-[12px] text-center font-medium">{error}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full h-[46px] mt-2 rounded-full bg-emerald-500 overflow-hidden text-black font-bold text-[12px] uppercase tracking-[0.1em] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_40px_rgba(16,185,129,0.2)]"
            >
              <span className="relative z-10">
                {isSubmitting ? 'Authentification...' : 'Se connecter'}
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
            <Link href="/" className="group flex items-center gap-2 text-[12px] text-white/30 hover:text-white transition-colors">
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
              Retour à l&apos;accueil
            </Link>
            <span className="text-[12px] text-white/20">v1.0.0</span>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-white/20 text-[11px] uppercase tracking-[0.2em]">Analyses de Précision</p>
        </div>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" />
    </div>
  );
}
