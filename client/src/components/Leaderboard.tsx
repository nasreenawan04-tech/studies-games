
import React, { useState, useEffect } from 'react';
import { Trophy, Medal, Award, User, Star, Clock, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

interface LeaderboardEntry {
  id: string;
  username: string;
  totalScore: number;
  gamesPlayed: number;
  averageScore: number;
  rank: number;
  avatar?: string;
}

interface LeaderboardProps {
  gameId?: string;
  limit?: number;
  showTitle?: boolean;
}

const Leaderboard: React.FC<LeaderboardProps> = ({ 
  gameId, 
  limit = 10, 
  showTitle = true 
}) => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [timeFilter, setTimeFilter] = useState<'all' | 'week' | 'month'>('all');
  const { user } = useAuth();

  useEffect(() => {
    fetchLeaderboard();
  }, [gameId, timeFilter]);

  const fetchLeaderboard = async () => {
    setLoading(true);
    try {
      const url = gameId 
        ? `/api/leaderboard/game/${gameId}?period=${timeFilter}&limit=${limit}`
        : `/api/leaderboard/global?period=${timeFilter}&limit=${limit}`;
      
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setLeaderboard(data);
      }
    } catch (error) {
      console.error('Failed to fetch leaderboard:', error);
    } finally {
      setLoading(false);
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-sm font-bold text-gray-600">#{rank}</span>;
    }
  };

  const getRankBadge = (rank: number) => {
    if (rank === 1) return 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white';
    if (rank === 2) return 'bg-gradient-to-r from-gray-300 to-gray-500 text-white';
    if (rank === 3) return 'bg-gradient-to-r from-amber-400 to-amber-600 text-white';
    return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white';
  };

  if (loading) {
    return (
      <Card className="p-6">
        <div className="animate-pulse space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/4"></div>
              </div>
              <div className="h-6 bg-gray-200 rounded w-16"></div>
            </div>
          ))}
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      {showTitle && (
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Trophy className="w-6 h-6 text-yellow-500" />
            <h2 className="text-2xl font-bold text-gray-800">
              {gameId ? 'Game Leaderboard' : 'Global Leaderboard'}
            </h2>
          </div>
          <div className="flex space-x-2">
            <Button
              variant={timeFilter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setTimeFilter('all')}
            >
              All Time
            </Button>
            <Button
              variant={timeFilter === 'month' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setTimeFilter('month')}
            >
              This Month
            </Button>
            <Button
              variant={timeFilter === 'week' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setTimeFilter('week')}
            >
              This Week
            </Button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {leaderboard.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <Target className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>No scores yet. Be the first to play!</p>
          </div>
        ) : (
          leaderboard.map((entry, index) => (
            <div
              key={entry.id}
              className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                user?.id === entry.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {getRankIcon(entry.rank)}
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    {entry.avatar ? (
                      <img 
                        src={entry.avatar} 
                        alt={entry.username}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <User className="w-5 h-5 text-white" />
                    )}
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-gray-800">
                        {entry.username}
                        {user?.id === entry.id && (
                          <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            You
                          </span>
                        )}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span className="flex items-center space-x-1">
                        <Target className="w-3 h-3" />
                        <span>{entry.gamesPlayed} games</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Star className="w-3 h-3" />
                        <span>Avg: {entry.averageScore.toFixed(0)}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold ${getRankBadge(entry.rank)}`}>
                  {entry.totalScore.toLocaleString()} pts
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {user && !leaderboard.some(entry => entry.id === user.id) && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-semibold text-gray-800">{user.username} (You)</span>
                <div className="text-xs text-gray-500">
                  {user.gamesPlayed} games played
                </div>
              </div>
            </div>
            <div className="text-sm font-bold text-gray-600">
              {user.totalScore.toLocaleString()} pts
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default Leaderboard;
import React from 'react';
import { Trophy, Medal, Crown } from 'lucide-react';

interface LeaderboardProps {
  limit?: number;
  showTitle?: boolean;
}

const Leaderboard: React.FC<LeaderboardProps> = ({ limit = 10, showTitle = true }) => {
  // Mock leaderboard data
  const leaderboardData = [
    { id: 1, username: 'MathWizard2024', score: 15420, rank: 1 },
    { id: 2, username: 'ScienceExplorer', score: 14890, rank: 2 },
    { id: 3, username: 'WordMaster', score: 14320, rank: 3 },
    { id: 4, username: 'BrainTrainer', score: 13950, rank: 4 },
    { id: 5, username: 'LogicMaster', score: 13480, rank: 5 },
    { id: 6, username: 'QuizChampion', score: 12990, rank: 6 },
    { id: 7, username: 'StudyHero', score: 12750, rank: 7 },
    { id: 8, username: 'DemoPlayer', score: 12500, rank: 8 },
    { id: 9, username: 'LearnMaster', score: 12250, rank: 9 },
    { id: 10, username: 'GamePro', score: 12000, rank: 10 }
  ].slice(0, limit);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-5 h-5 text-yellow-500" />;
      case 2: return <Medal className="w-5 h-5 text-gray-400" />;
      case 3: return <Medal className="w-5 h-5 text-amber-600" />;
      default: return <Trophy className="w-4 h-4 text-gray-400" />;
    }
  };

  const getRankStyle = (rank: number) => {
    switch (rank) {
      case 1: return 'bg-yellow-50 border-yellow-200';
      case 2: return 'bg-gray-50 border-gray-200';
      case 3: return 'bg-amber-50 border-amber-200';
      default: return 'bg-white border-gray-100';
    }
  };

  return (
    <div className="w-full">
      {showTitle && (
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
            <Trophy className="w-6 h-6 text-yellow-500" />
            Top Players
          </h3>
          <p className="text-sm text-gray-600">See how you rank against other players!</p>
        </div>
      )}
      
      <div className="space-y-2">
        {leaderboardData.map((player) => (
          <div 
            key={player.id} 
            className={`flex items-center justify-between p-3 rounded-lg border ${getRankStyle(player.rank)} hover:shadow-sm transition-shadow`}
          >
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-8 h-8">
                {getRankIcon(player.rank)}
              </div>
              <div>
                <div className="font-medium text-gray-900">{player.username}</div>
                <div className="text-sm text-gray-500">Rank #{player.rank}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold text-blue-600">{player.score.toLocaleString()}</div>
              <div className="text-xs text-gray-500">points</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
