import type { Bet } from '../types';
import StatusBadge from './StatusBadge';
import ConfidenceBadge from './ConfidenceBadge';

interface BetRowProps {
  bet: Bet;
}

export default function BetRow({ bet }: BetRowProps) {
  const potentialWin = bet.stake * bet.odds;
  const profit = potentialWin - bet.stake;

  return (
    <tr className="border-b border-gray-700 hover:bg-gray-800/50">
      <td className="px-4 py-3">
        <span className="text-gray-400 text-sm">{bet.id}</span>
      </td>
      <td className="px-4 py-3">
        <span className="font-medium">{bet.match}</span>
      </td>
      <td className="px-4 py-3">
        <span className="text-blue-400">{bet.pick}</span>
      </td>
      <td className="px-4 py-3 text-right">
        <span>{bet.stake}€</span>
      </td>
      <td className="px-4 py-3 text-right">
        <span className="text-yellow-400">{bet.odds}</span>
      </td>
      <td className="px-4 py-3">
        <ConfidenceBadge confidence={bet.confidence} />
      </td>
      <td className="px-4 py-3 text-right">
        <span className="text-gray-400">
          {bet.status === 'won' ? (
            <span className="text-green-400">+{profit.toFixed(2)}€</span>
          ) : bet.status === 'lost' ? (
            <span className="text-red-400">-{bet.stake}€</span>
          ) : (
            <span className="text-yellow-400">+{profit.toFixed(2)}€</span>
          )}
        </span>
      </td>
      <td className="px-4 py-3">
        <StatusBadge status={bet.status} />
      </td>
    </tr>
  );
}
