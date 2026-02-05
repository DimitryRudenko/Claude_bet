interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon?: React.ReactNode;
}

export default function StatsCard({ title, value, subtitle, trend, icon }: StatsCardProps) {
  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'text-green-400';
      case 'down':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm font-medium">{title}</p>
          <p className={`text-3xl font-bold mt-2 ${getTrendColor()}`}>{value}</p>
          {subtitle && <p className="text-gray-500 text-sm mt-1">{subtitle}</p>}
        </div>
        {icon && <div className="text-gray-500 text-3xl">{icon}</div>}
      </div>
    </div>
  );
}
