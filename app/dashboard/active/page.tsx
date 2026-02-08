import Link from 'next/link';
import { getAllSessions } from '@/lib/sessions';
import type { Bet } from '../../types';

export default function ActivePage() {
  const sessions = getAllSessions();
  const pendingSessions = sessions.filter((s) => s.status === 'pending');

  const allPendingBets: (Bet & { sessionId: string; sport: string })[] = pendingSessions.flatMap((s) =>
    s.bets.filter((b) => b.status === 'pending').map((b) => ({ ...b, sessionId: s.id, sport: s.sport }))
  );

  const totalStaked = allPendingBets.reduce((sum, b) => sum + b.stake, 0);
  const potentialProfit = allPendingBets.reduce((sum, b) => sum + (b.stake * b.odds - b.stake), 0);

  if (allPendingBets.length === 0) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-4xl mb-4">✓</p>
          <h1 className="text-2xl font-semibold mb-2">Aucun pari en cours</h1>
          <p className="text-zinc-500 mb-6">Tous réglés.</p>
          <Link href="/dashboard" className="px-4 py-2 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition">Dashboard</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-6xl mx-auto px-8 py-10">
        <header className="mb-10">
          <Link href="/dashboard" className="text-zinc-500 text-sm hover:text-white transition mb-4 inline-block">← Dashboard</Link>
          <h1 className="text-3xl font-semibold flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-amber-400 animate-pulse" />
            Paris en cours
          </h1>
          <p className="text-zinc-500 mt-1">{allPendingBets.length} paris · {totalStaked}€ misé · <span className="text-emerald-400">+{potentialProfit.toFixed(0)}€ potentiel</span></p>
        </header>

        {pendingSessions.map((session) => (
          <section key={session.id} className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="font-medium">{session.sport}</h2>
                <p className="text-zinc-500 text-sm">{session.competition}</p>
              </div>
              <Link href={`/dashboard/sessions/${session.id}`} className="text-zinc-500 text-sm hover:text-white transition">Détails →</Link>
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
                  {session.bets.filter((b) => b.status === 'pending').map((bet) => (
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
                      <td className="px-4 py-3 text-right text-emerald-400">+{(bet.stake * bet.odds - bet.stake).toFixed(0)}€</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
