import { useState } from 'react';
import { useLocation } from 'wouter';
import { popularTools, getToolsByCategory, categories, tools } from '@/data/tools';
import GameCard from './GameCard';
import { Gamepad2, Trophy, Star, Sparkles } from 'lucide-react';

const PopularGamesSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [, setLocation] = useLocation();

  const tabs = [
    { key: 'all', label: 'All Games' },
    { key: 'math', label: 'Math' },
    { key: 'science', label: 'Science' },
    { key: 'language', label: 'Language' },
    { key: 'memory', label: 'Memory' },
    { key: 'logic', label: 'Logic' }
  ];

  const getFilteredTools = () => {
    const allPopularTools = popularTools;
    if (activeTab === 'all') return allPopularTools;
    return allPopularTools.filter(tool => tool.category === activeTab);
  };

  const filteredTools = getFilteredTools();

  const handleViewAllGames = () => {
    setLocation('/games');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden" data-testid="popular-games-section">
      {/* Gaming-themed decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true" role="presentation">
        <div className="absolute top-32 left-10 text-blue-200/20 text-4xl motion-safe:animate-bounce motion-safe:delay-1000">🎮</div>
        <div className="absolute top-20 right-20 text-green-200/20 text-5xl motion-safe:animate-pulse motion-safe:delay-500">⭐</div>
        <div className="absolute bottom-40 left-20 text-yellow-200/20 text-3xl motion-safe:animate-bounce motion-safe:delay-700">🏆</div>
        <div className="absolute bottom-20 right-32 text-blue-200/20 text-4xl motion-safe:animate-pulse motion-safe:delay-300">💎</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Gaming-themed header */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-gray-200/50">
              <Trophy className="w-8 h-8 text-yellow-500" />
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent" data-testid="text-popular-games-title">
                Most Popular Study Games
              </h2>
              <Sparkles className="w-8 h-8 text-blue-500 animate-pulse" />
            </div>
          </div>
          
          <p className="text-xl text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto" data-testid="text-popular-games-subtitle">
            Discover the games that thousands of students love! <span className="font-semibold text-green-600">Free forever</span>, 
            no registration required, and designed to make learning an adventure.
          </p>
        </div>

        {/* Gaming-styled Tab Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-testid="tabs-game-filter">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
                activeTab === tab.key
                  ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-neutral-700 dark:text-neutral-300 hover:bg-white dark:hover:bg-gray-700 border border-gray-200/50 hover:border-blue-300'
              }`}
              data-testid={`button-tab-${tab.key}`}
            >
              <Gamepad2 className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" data-testid="grid-popular-games">
          {filteredTools.map((tool) => (
            <GameCard key={tool.id} tool={tool} />
          ))}
        </div>

        {/* Gaming-styled Call-to-Action */}
        <div className="text-center">
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50">
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-2 text-2xl">
                <span>🎮</span>
                <span>🎓</span>
                <span>🏆</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
              Ready for More Gaming Adventures?
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-md mx-auto">
              Discover all {tools.length}+ educational games across every subject. Level up your learning today!
            </p>
            <button
              onClick={handleViewAllGames}
              className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25 flex items-center gap-3 mx-auto"
              data-testid="button-view-all-games"
            >
              <Trophy className="w-5 h-5 group-hover:animate-bounce" />
              View All Study Games
              <Star className="w-5 h-5 group-hover:animate-pulse" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularGamesSection;