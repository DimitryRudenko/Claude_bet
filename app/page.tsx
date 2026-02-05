import Link from 'next/link';
import stats from '@/data/stats.json';
import footballSession from '@/data/sessions/2026-02-03_Football.json';
import nbaSession from '@/data/sessions/2026-02-04_NBA.json';
import tennisSession from '@/data/sessions/2026-02-05_Tennis.json';
import joSession from '@/data/sessions/2026-02-05_JO-Hiver.json';
import snookerSession from '@/data/sessions/2026-02-05_Snooker.json';
import type { Session, Bet } from './types';

export default function Home() {
  const sessions: Session[] = [tennisSession, joSession, snookerSession, nbaSession, footballSession] as Session[];
  const recentSessions = sessions.slice(0, 5);

  const pendingBets: (Bet & { sessionId: string; sport: string })[] = sessions
    .filter((s) => s.status === 'pending')
    .flatMap((s) =>
      s.bets
        .filter((b) => b.status === 'pending')
        .map((b) => ({ ...b, sessionId: s.id, sport: s.sport }))
    );

  const totalPendingStake = pendingBets.reduce((sum, b) => sum + b.stake, 0);
  const potentialProfit = pendingBets.reduce((sum, b) => sum + (b.stake * b.odds - b.stake), 0);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-6xl mx-auto px-8 py-10">

        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Claude Bet</h1>
            <p className="text-zinc-500 mt-1">Dashboard de suivi</p>
          </div>
          <nav className="flex gap-2">
            {pendingBets.length > 0 && (
              <Link href="/active" className="px-4 py-2 text-sm rounded-lg bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 transition">
                {pendingBets.length} en cours
              </Link>
            )}
            <Link href="/sessions" className="px-4 py-2 text-sm rounded-lg bg-zinc-800 text-zinc-300 hover:bg-zinc-700 transition">
              Sessions
            </Link>
          </nav>
        </header>

        {/* Stats */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
            <p className="text-zinc-500 text-sm mb-1">Profit Net</p>
            <p className="text-3xl font-semibold text-emerald-400">+{stats.netProfit}€</p>
            <p className="text-zinc-600 text-xs mt-2">{stats.totalStaked}€ misé</p>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
            <p className="text-zinc-500 text-sm mb-1">ROI</p>
            <p className="text-3xl font-semibold text-blue-400">+{stats.roi}%</p>
            <p className="text-zinc-600 text-xs mt-2">Retour investissement</p>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
            <p className="text-zinc-500 text-sm mb-1">Win Rate</p>
            <p className="text-3xl font-semibold text-violet-400">{stats.winRate}%</p>
            <p className="text-zinc-600 text-xs mt-2">{stats.totalBets} paris total</p>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
            <p className="text-zinc-500 text-sm mb-1">Sessions</p>
            <p className="text-3xl font-semibold text-white">{stats.totalSessions}</p>
            <p className="text-zinc-600 text-xs mt-2">analysées</p>
          </div>
        </section>

        {/* Stratégie */}
        <section className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6 mb-12">
          <h2 className="text-lg font-medium mb-1">Stratégie</h2>
          <p className="text-zinc-500 text-sm mb-6">"Mieux vaut 2 paris sûrs que 10 paris hasardeux"</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div>
              <h3 className="text-zinc-400 font-medium mb-3">Règles</h3>
              <ul className="space-y-2 text-zinc-500">
                <li>• Max 50% budget / pari</li>
                <li>• Max 4 sélections / combiné</li>
                <li>• Min 55% confiance requis</li>
              </ul>
            </div>
            <div>
              <h3 className="text-zinc-400 font-medium mb-3">Scoring</h3>
              <ul className="space-y-2 text-zinc-500">
                <li className="flex justify-between"><span>Consensus</span><span>20%</span></li>
                <li className="flex justify-between"><span>Stats</span><span>25%</span></li>
                <li className="flex justify-between"><span>Contexte</span><span>20%</span></li>
                <li className="flex justify-between"><span>Value</span><span>15%</span></li>
                <li className="flex justify-between"><span>Red flags</span><span>20%</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-zinc-400 font-medium mb-3">Confiance</h3>
              <ul className="space-y-2 text-zinc-500">
                <li className="flex justify-between"><span>85%+</span><span className="text-emerald-400">Mise forte</span></li>
                <li className="flex justify-between"><span>75-84%</span><span className="text-blue-400">Standard</span></li>
                <li className="flex justify-between"><span>65-74%</span><span className="text-amber-400">Modérée</span></li>
                <li className="flex justify-between"><span>&lt;55%</span><span className="text-red-400">Éviter</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Paris en cours */}
        {pendingBets.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <h2 className="text-lg font-medium">Paris en cours</h2>
              </div>
              <p className="text-zinc-500 text-sm">{totalPendingStake}€ misé · <span className="text-emerald-400">+{potentialProfit.toFixed(0)}€ potentiel</span></p>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800 text-zinc-500">
                    <th className="text-left px-4 py-3 font-medium">Match</th>
                    <th className="text-left px-4 py-3 font-medium">Pari</th>
                    <th className="text-right px-4 py-3 font-medium">Mise</th>
                    <th className="text-right px-4 py-3 font-medium">Cote</th>
                    <th className="text-center px-4 py-3 font-medium">Conf.</th>
                    <th className="text-right px-4 py-3 font-medium">Potentiel</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingBets.map((bet) => (
                    <tr key={`${bet.sessionId}-${bet.id}`} className="border-b border-zinc-800/50 hover:bg-zinc-800/30">
                      <td className="px-4 py-3">
                        <span className="text-zinc-600 text-xs mr-2">{bet.sport}</span>
                        <span className="text-white">{bet.match}</span>
                      </td>
                      <td className="px-4 py-3 text-blue-400">{bet.pick}</td>
                      <td className="px-4 py-3 text-right">{bet.stake}€</td>
                      <td className="px-4 py-3 text-right text-amber-400">{bet.odds}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={`px-2 py-0.5 rounded text-xs ${
                          bet.confidence >= 80 ? 'bg-emerald-500/20 text-emerald-400' :
                          bet.confidence >= 70 ? 'bg-blue-500/20 text-blue-400' :
                          'bg-amber-500/20 text-amber-400'
                        }`}>
                          {bet.confidence}%
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right text-emerald-400">+{(bet.stake * bet.odds - bet.stake).toFixed(0)}€</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Sessions récentes */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Sessions récentes</h2>
            <Link href="/sessions" className="text-zinc-500 text-sm hover:text-white transition">Voir tout →</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {recentSessions.map((session) => {
              const isPending = session.status === 'pending';
              const isProfit = session.profit !== null && session.profit > 0;

              return (
                <Link
                  key={session.id}
                  href={`/sessions/${session.id}`}
                  className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{session.sport}</span>
                    {isPending && <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />}
                  </div>
                  <p className="text-zinc-500 text-sm mb-3 truncate">{session.competition}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-600">{session.bets.length} paris</span>
                    {isPending ? (
                      <span className="text-amber-400">En cours</span>
                    ) : (
                      <span className={isProfit ? 'text-emerald-400' : 'text-red-400'}>
                        {isProfit ? '+' : ''}{session.profit?.toFixed(0)}€
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}
