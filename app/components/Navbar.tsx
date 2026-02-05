import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-white">
            Betting Dashboard
          </Link>
          <div className="flex space-x-4">
            <Link
              href="/"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/sessions"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Sessions
            </Link>
            <Link
              href="/active"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Active Bets
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
