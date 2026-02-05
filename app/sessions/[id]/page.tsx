import { notFound } from 'next/navigation';
import Link from 'next/link';
import footballSession from '@/data/sessions/2026-02-03_Football.json';
import nbaSession from '@/data/sessions/2026-02-04_NBA.json';
import tennisSession from '@/data/sessions/2026-02-05_Tennis.json';
import joSession from '@/data/sessions/2026-02-05_JO-Hiver.json';
import snookerSession from '@/data/sessions/2026-02-05_Snooker.json';
import rugbySession from '@/data/sessions/2026-02-05_Rugby.json';
import type { Session } from '../../types';

const sessionsMap: Record<string, Session> = {
  '2026-02-03_Football': footballSession as Session,
  '2026-02-04_NBA': nbaSession as Session,
  '2026-02-05_Tennis': tennisSession as Session,
  '2026-02-05_JO-Hiver': joSession as Session,
  '2026-02-05_Snooker': snookerSession as Session,
  '2026-02-05_Rugby': rugbySession as Session,
};

interface PageProps { params: Promise<{ id: string }>; }

export default async function SessionDetailPage({ params }: PageProps) {
  const { id } = await params;
  const session = sessionsMap[id];
  if (!session) notFound();

  const wonBets = session.bets.filter((b) => b.status === 'won').length;
  const lostBets = session.bets.filter((b) => b.status === 'lost').length;
  const pendingBets = session.bets.filter((b) => b.status === 'pending').length;
  const isPending = session.status === 'pending';

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-5xl mx-auto px-8 py-10">

        <header className="mb-10">
          <Link href="/sessions" className="text-zinc-500 text-sm hover:text-white transition mb-4 inline-block">← Sessions</Link>

          <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl font-semibold">{session.sport}</h1>
                  {isPending ? (
                    <span className="px-2 py-1 text-xs rounded bg-amber-500/20 text-amber-400">En cours</span>
                  ) : (
                    <span className="px-2 py-1 text-xs rounded bg-emerald-500/20 text-emerald-400">Terminée</span>
                  )}
                </div>
                <p className="text-zinc-500 mt-1">{session.competition}</p>
              </div>
              <span className="text-zinc-500 text-sm">{session.date}</span>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div><p className="text-zinc-500 text-xs">Budget</p><p className="text-lg font-medium">{session.budget}€</p></div>
              <div><p className="text-zinc-500 text-xs">Misé</p><p className="text-lg font-medium">{session.staked}€</p></div>
              <div>
                <p className="text-zinc-500 text-xs">Profit</p>
                <p className={`text-lg font-medium ${session.profit === null ? 'text-amber-400' : session.profit >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {session.profit === null ? '-' : `${session.profit >= 0 ? '+' : ''}${session.profit.toFixed(0)}€`}
                </p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs">ROI</p>
                <p className={`text-lg font-medium ${session.roi === null ? 'text-zinc-500' : session.roi >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {session.roi === null ? '-' : `${session.roi}%`}
                </p>
              </div>
            </div>
          </div>
        </header>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-medium">Paris ({session.bets.length})</h2>
            <div className="flex gap-3 text-sm">
              {wonBets > 0 && <span className="text-emerald-400">{wonBets} gagnés</span>}
              {lostBets > 0 && <span className="text-red-400">{lostBets} perdus</span>}
              {pendingBets > 0 && <span className="text-amber-400">{pendingBets} en cours</span>}
            </div>
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
                  <th className="text-right px-4 py-3 font-medium">Résultat</th>
                  <th className="text-center px-4 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {session.bets.map((bet) => {
                  const profit = bet.stake * bet.odds - bet.stake;
                  return (
                    <tr key={bet.id} className="border-b border-zinc-800/50 hover:bg-zinc-800/30">
                      <td className="px-4 py-3">{bet.match}</td>
                      <td className="px-4 py-3 text-blue-400">{bet.pick}</td>
                      <td className="px-4 py-3 text-right">{bet.stake}€</td>
                      <td className="px-4 py-3 text-right text-amber-400">{bet.odds}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={`px-2 py-0.5 rounded text-xs ${
                          bet.confidence >= 80 ? 'bg-emerald-500/20 text-emerald-400' :
                          bet.confidence >= 70 ? 'bg-blue-500/20 text-blue-400' : 'bg-amber-500/20 text-amber-400'
                        }`}>{bet.confidence}%</span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        {bet.status === 'won' && <span className="text-emerald-400">+{profit.toFixed(0)}€</span>}
                        {bet.status === 'lost' && <span className="text-red-400">-{bet.stake}€</span>}
                        {bet.status === 'pending' && <span className="text-amber-400">+{profit.toFixed(0)}€</span>}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {bet.status === 'won' && <span className="px-2 py-0.5 rounded text-xs bg-emerald-500/20 text-emerald-400">Gagné</span>}
                        {bet.status === 'lost' && <span className="px-2 py-0.5 rounded text-xs bg-red-500/20 text-red-400">Perdu</span>}
                        {bet.status === 'pending' && <span className="px-2 py-0.5 rounded text-xs bg-amber-500/20 text-amber-400">En cours</span>}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  );
}

export function generateStaticParams() {
  return [
    { id: '2026-02-03_Football' },
    { id: '2026-02-04_NBA' },
    { id: '2026-02-05_Tennis' },
    { id: '2026-02-05_JO-Hiver' },
    { id: '2026-02-05_Snooker' },
    { id: '2026-02-05_Rugby' },
  ];
}
