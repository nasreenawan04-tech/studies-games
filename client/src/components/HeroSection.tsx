import { useState } from 'react';
import { useLocation } from 'wouter';
import { searchTools } from '@/lib/search';
import { tools } from '@/data/tools';
import { Search, Play, Sparkles, Trophy, Target, HeartPulse, BookOpen, Brain } from 'lucide-react';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState(tools.slice(0, 8));
  const [, setLocation] = useLocation();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim()) {
      const results = searchTools(query);
      setSearchResults(results.slice(0, 8));
      setIsSearchOpen(true);
    } else {
      setSearchResults(tools.slice(0, 8));
      setIsSearchOpen(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setLocation(`/games?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      setLocation('/games');
    }
    setIsSearchOpen(false);
  };

  const handleToolClick = (toolHref: string) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setLocation(toolHref);
  };

  const handleInputFocus = () => {
    if (searchResults.length > 0) {
      setIsSearchOpen(true);
    }
  };

  const handleInputBlur = () => {
    // Delay hiding to allow clicks on results
    setTimeout(() => setIsSearchOpen(false), 200);
  };

  return (
    <section className="gradient-gaming relative overflow-hidden" data-testid="hero-section">
      {/* Floating gaming elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true" role="presentation">
        <div className="absolute top-20 left-20 text-yellow-300/20 text-6xl motion-safe:animate-bounce">🎮</div>
        <div className="absolute top-40 right-32 text-blue-300/20 text-4xl motion-safe:animate-pulse">⭐</div>
        <div className="absolute bottom-32 left-16 text-green-300/20 text-5xl motion-safe:animate-bounce motion-safe:delay-500">🏆</div>
        <div className="absolute bottom-20 right-20 text-yellow-300/20 text-3xl motion-safe:animate-pulse motion-safe:delay-300">💡</div>
        <div className="absolute top-60 left-1/3 text-blue-300/20 text-4xl motion-safe:animate-bounce motion-safe:delay-700">🧠</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        
        {/* Hero Content */}
        <div className="text-center text-white">
          {/* Logo and Brand */}
          <div className="flex justify-center items-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div>
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-white">DapsiGames</h2>
                  <p className="text-white/80 text-sm">Study + Gaming Hub</p>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight" data-testid="text-hero-title">
            <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
              Advanced Learning Platform
            </span>
            <br />
            <span className="text-white">150+ Educational Tools</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed" data-testid="text-hero-subtitle">
            Enhance your academic performance with our comprehensive suite of interactive learning tools. 
            Master <span className="text-blue-300 font-semibold">mathematics, science, language arts, and critical thinking</span> through evidence-based educational methodologies.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => setLocation('/games')}
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3"
              data-testid="button-start-playing"
            >
              <Play className="w-5 h-5" />
              Access Learning Tools
            </button>
            
            <button
              onClick={() => setLocation('/about')}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:border-white/50"
              data-testid="button-learn-more"
            >
              Learn More
            </button>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16 relative">
          <form onSubmit={handleSearch} className="relative">
            <input 
              type="text" 
              placeholder="Search for study games..."
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              className="w-full py-4 px-6 pr-16 text-lg text-neutral-800 bg-white rounded-2xl shadow-lg focus:outline-none focus:ring-4 focus:ring-secondary/30 transition-all duration-200"
              data-testid="input-search-tools"
            />
            <button 
              type="submit"
              className="absolute right-2 top-2 bottom-2 px-6 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg"
              data-testid="button-search-tools"
            >
              <Search size={20} />
            </button>
          </form>

          {/* Search Results Dropdown */}
          {isSearchOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 z-50 max-h-96 overflow-hidden">
              {searchResults.length > 0 ? (
                <div className="py-2">
                  {searchResults.map((tool) => (
                    <button
                      key={tool.id}
                      onClick={() => handleToolClick(tool.href)}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                      data-testid={`hero-search-result-${tool.id}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-gray-900 truncate">{tool.name}</div>
                          <div className="text-sm text-gray-500 truncate">{tool.description}</div>
                        </div>
                        {tool.isPopular && (
                          <div className="bg-accent/20 text-accent-foreground text-xs px-2 py-1 rounded-full flex-shrink-0">
                            Popular
                          </div>
                        )}
                      </div>
                    </button>
                  ))}

                  {searchQuery.trim() && (
                    <div className="px-4 py-3 border-t border-gray-200">
                      <button
                        onClick={handleSearch}
                        className="w-full text-center text-secondary hover:text-secondary/80 font-medium text-sm"
                        data-testid="hero-search-view-all"
                      >
                        View all results for "{searchQuery}" →
                      </button>
                    </div>
                  )}
                </div>
              ) : searchQuery.trim() ? (
                <div className="p-8 text-center text-neutral-500">
                  <Search size={48} className="mx-auto mb-4" />
                  <p>No tools found matching "{searchQuery}"</p>
                  <button
                    onClick={() => setLocation('/games')}
                    className="mt-4 text-secondary hover:text-secondary/80 font-medium"
                  >
                    Browse all games →
                  </button>
                </div>
              ) : null}
            </div>
          )}
        </div>

          {/* Professional Stats Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group" data-testid="stat-active-players">
                <div className="flex items-center justify-center mb-3">
                  <HeartPulse className="w-8 h-8 text-blue-300" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-2 text-blue-300">500K+</div>
                <div className="text-white/90 text-sm lg:text-base">Active Learners</div>
              </div>
              <div className="text-center group" data-testid="stat-games-played">
                <div className="flex items-center justify-center mb-3">
                  <Target className="w-8 h-8 text-green-300" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-2 text-green-300">5M+</div>
                <div className="text-white/90 text-sm lg:text-base">Sessions Completed</div>
              </div>
              <div className="text-center group" data-testid="stat-study-games">
                <div className="flex items-center justify-center mb-3">
                  <BookOpen className="w-8 h-8 text-blue-300" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-2 text-blue-300">150+</div>
                <div className="text-white/90 text-sm lg:text-base">Learning Tools</div>
              </div>
              <div className="text-center group" data-testid="stat-learning-hours">
                <div className="flex items-center justify-center mb-3">
                  <Brain className="w-8 h-8 text-purple-300" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-2 text-purple-300">1M+</div>
                <div className="text-white/90 text-sm lg:text-base">Study Hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;