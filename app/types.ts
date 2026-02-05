export interface Bet {
  id: string;
  match: string;
  pick: string;
  stake: number;
  odds: number;
  confidence: number;
  status: 'won' | 'lost' | 'pending';
}

export interface Session {
  id: string;
  date: string;
  sport: string;
  competition: string;
  status: 'completed' | 'pending';
  budget: number;
  staked: number;
  profit: number | null;
  roi: number | null;
  bets: Bet[];
}

export interface Stats {
  totalSessions: number;
  totalBets: number;
  totalStaked: number;
  netProfit: number;
  roi: number;
  winRate: number;
}
