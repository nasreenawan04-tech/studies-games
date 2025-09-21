import { useState } from 'react';
import { useLocation } from 'wouter';
import { popularTools, getToolsByCategory, categories } from '@/data/tools';
import ToolCard from './ToolCard';

const PopularToolsSection = () => {
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
    <section className="py-20 bg-white" data-testid="popular-games-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6" data-testid="text-popular-games-title">
            Our Most Popular Study Games
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto" data-testid="text-popular-games-subtitle">
            Free educational games to make learning fun. No limits, no sign-up required.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" data-testid="tabs-game-filter">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 rounded-xl font-semibold transition-colors ${
                activeTab === tab.key
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
              data-testid={`button-tab-${tab.key}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" data-testid="grid-popular-games">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleViewAllGames}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            data-testid="button-view-all-games"
          >
            View All 30+ Study Games
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularToolsSection;