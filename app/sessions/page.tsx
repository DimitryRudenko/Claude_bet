import Link from 'next/link';
import footballSession from '@/data/sessions/2026-02-03_Football.json';
import nbaSession from '@/data/sessions/2026-02-04_NBA.json';
import tennisSession from '@/data/sessions/2026-02-05_Tennis.json';
import joSession from '@/data/sessions/2026-02-05_JO-Hiver.json';
import snookerSession from '@/data/sessions/2026-02-05_Snooker.json';
import type { Session } from '../types';

export default function SessionsPage() {
  const sessions: Session[] = [tennisSession, joSession, snookerSession, nbaSession, footballSession] as Session[];

  const completedSessions = sessions.filter((s) => s.status === 'completed');
  const pendingSessions = sessions.filter((s) => s.status === 'pending');

  const totalProfit = completedSessions.reduce((sum, s) => sum + (s.profit ?? 0), 0);
  const totalStaked = sessions.reduce((sum, s) => sum + s.staked, 0);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-6xl mx-auto px-8 py-10">

        <header className="mb-10">
          <Link href="/" className="text-zinc-500 text-sm hover:text-white transition mb-4 inline-block">← Dashboard</Link>
          <h1 className="text-3xl font-semibold">Sessions</h1>
          <p className="text-zinc-500 mt-1">
            {sessions.length} sessions · {totalStaked}€ misé ·
            <span className={totalProfit >= 0 ? ' text-emerald-400' : ' text-red-400'}>
              {totalProfit >= 0 ? ' +' : ' '}{totalProfit.toFixed(0)}€
            </span>
          </p>
        </header>

        {pendingSessions.length > 0 && (
          <section className="mb-10">
            <h2 className="text-lg font-medium text-amber-400 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              En cours ({pendingSessions.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {pendingSessions.map((session) => (
                <Link key={session.id} href={`/sessions/${session.id}`}
                  className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4 hover:border-amber-500/40 transition">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{session.sport}</span>
                    <span className="text-zinc-500 text-sm">{session.date}</span>
                  </div>
                  <p className="text-zinc-500 text-sm truncate">{session.competition}</p>
                  <p className="text-zinc-600 text-sm mt-2">{session.bets.length} paris · {session.staked}€</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="text-lg font-medium text-emerald-400 mb-4">Terminées ({completedSessions.length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {completedSessions.map((session) => {
              const isProfit = session.profit !== null && session.profit > 0;
              return (
                <Link key={session.id} href={`/sessions/${session.id}`}
                  className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{session.sport}</span>
                    <span className="text-zinc-500 text-sm">{session.date}</span>
                  </div>
                  <p className="text-zinc-500 text-sm truncate mb-3">{session.competition}</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-600">{session.bets.length} paris</span>
                    <span className={isProfit ? 'text-emerald-400' : 'text-red-400'}>
                      {isProfit ? '+' : ''}{session.profit?.toFixed(0)}€
                      <span className="text-zinc-600 ml-1">({session.roi}%)</span>
                    </span>
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
