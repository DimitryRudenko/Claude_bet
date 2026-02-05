import Link from 'next/link';
import type { Session } from '../types';
import StatusBadge from './StatusBadge';

interface SessionCardProps {
  session: Session;
}

export default function SessionCard({ session }: SessionCardProps) {
  const isProfit = session.profit !== null && session.profit > 0;
  const isLoss = session.profit !== null && session.profit < 0;

  return (
    <Link href={`/sessions/${session.id}`}>
      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-colors cursor-pointer">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold">{session.sport}</span>
            <StatusBadge status={session.status} />
          </div>
          <span className="text-gray-400 text-sm">{session.date}</span>
        </div>
        <p className="text-gray-400 text-sm mb-3">{session.competition}</p>
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <span className="text-gray-400">Staked: </span>
            <span className="text-white font-medium">{session.staked}€</span>
          </div>
          <div className="text-sm">
            <span className="text-gray-400">Bets: </span>
            <span className="text-white font-medium">{session.bets.length}</span>
          </div>
          {session.profit !== null ? (
            <div className="text-sm">
              <span className="text-gray-400">Profit: </span>
              <span
                className={`font-bold ${isProfit ? 'text-green-400' : isLoss ? 'text-red-400' : 'text-gray-300'}`}
              >
                {isProfit ? '+' : ''}{session.profit.toFixed(2)}€
              </span>
            </div>
          ) : (
            <div className="text-sm text-yellow-400">Pending</div>
          )}
        </div>
      </div>
    </Link>
  );
}
