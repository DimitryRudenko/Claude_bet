interface ConfidenceBadgeProps {
  confidence: number;
}

export default function ConfidenceBadge({ confidence }: ConfidenceBadgeProps) {
  const getStars = () => {
    if (confidence >= 85) return 5;
    if (confidence >= 75) return 4;
    if (confidence >= 65) return 3;
    if (confidence >= 55) return 2;
    return 1;
  };

  const stars = getStars();
  const filledStars = Array(stars).fill(null);
  const emptyStars = Array(5 - stars).fill(null);

  const getColor = () => {
    if (confidence >= 85) return 'text-green-400';
    if (confidence >= 75) return 'text-green-500';
    if (confidence >= 65) return 'text-yellow-400';
    if (confidence >= 55) return 'text-orange-400';
    return 'text-red-400';
  };

  return (
    <div className="flex items-center gap-1">
      <span className={`flex ${getColor()}`}>
        {filledStars.map((_, i) => (
          <span key={`filled-${i}`}>&#9733;</span>
        ))}
        {emptyStars.map((_, i) => (
          <span key={`empty-${i}`} className="text-gray-600">&#9733;</span>
        ))}
      </span>
      <span className="text-gray-400 text-sm ml-1">{confidence}%</span>
    </div>
  );
}
