interface StatusBadgeProps {
  status: 'won' | 'lost' | 'pending' | 'completed';
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const getStatusStyles = () => {
    switch (status) {
      case 'won':
      case 'completed':
        return 'bg-green-900/50 text-green-400 border-green-700';
      case 'lost':
        return 'bg-red-900/50 text-red-400 border-red-700';
      case 'pending':
        return 'bg-yellow-900/50 text-yellow-400 border-yellow-700';
      default:
        return 'bg-gray-700 text-gray-300 border-gray-600';
    }
  };

  const getStatusLabel = () => {
    switch (status) {
      case 'won':
        return 'Won';
      case 'lost':
        return 'Lost';
      case 'pending':
        return 'Pending';
      case 'completed':
        return 'Completed';
      default:
        return status;
    }
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusStyles()}`}
    >
      {getStatusLabel()}
    </span>
  );
}
