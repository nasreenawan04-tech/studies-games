
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { useLocation } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolCard from '@/components/ToolCard';
import EnhancedSearchFilters from '@/components/EnhancedSearchFilters';
import { tools, getToolsByCategory } from '@/data/tools';
import { searchAndFilterTools } from '@/lib/search';
import { Brain, Target, Zap, Gamepad2 } from 'lucide-react';

const MemoryGames = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [, setLocation] = useLocation();

  const memoryGames = getToolsByCategory('memory');
  const filteredGames = searchAndFilterTools(searchQuery, 'memory');

  const sortedGames = [...filteredGames].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'popular':
        return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
      default:
        return 0;
    }
  });

  const handleViewAllGames = () => {
    setLocation('/games');
  };

  return (
    <>
      <Helmet>
        <title>Memory Games - 25+ Free Memory Training Games | DapsiGames</title>
        <meta name="description" content="Free memory games including memory palace builder, sequence master, pattern recall, and 22+ more brain training games. Improve focus and cognitive abilities." />
        <meta name="keywords" content="memory games, brain training games, memory palace, pattern recognition, sequence memory, cognitive training games" />
        <meta property="og:title" content="Memory Games - 25+ Free Memory Training Games | DapsiGames" />
        <meta property="og:description" content="Free memory games including memory palace builder, sequence master, and 22+ more brain training games." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://dapsiwow.com/memory-games" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 bg-neutral-50">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-700 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Brain className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="text-page-title">
                Memory Games
              </h1>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                25+ interactive memory games to improve focus, attention, and cognitive abilities
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search memory games..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full py-4 px-6 pr-16 text-lg text-neutral-800 bg-white rounded-2xl shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-200 transition-all duration-200"
                    data-testid="input-search-memory-games"
                  />
                  <button 
                    type="button"
                    className="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl hover:from-purple-600 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Search and Filters */}
          <section className="py-8 bg-white border-b border-neutral-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <EnhancedSearchFilters
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                sortBy={sortBy}
                setSortBy={setSortBy}
                selectedCategory="memory"
                setSelectedCategory={() => {}}
                showCategoryFilter={false}
                placeholder="Search memory games..."
              />
            </div>
          </section>

          {/* Games Grid */}
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-neutral-800">
                  All Memory Games ({sortedGames.length})
                </h2>
              </div>
              
              {sortedGames.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {sortedGames.map((game) => (
                    <ToolCard key={game.id} tool={game} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <Brain size={64} className="mx-auto text-neutral-400 mb-4" />
                  <h3 className="text-xl font-semibold text-neutral-600 mb-2">No games found</h3>
                  <p className="text-neutral-500 mb-6">Try adjusting your search terms or browse all games.</p>
                  <button
                    onClick={handleViewAllGames}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
                  >
                    Browse All Games
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Why Memory Games Section */}
          <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-6">
                  Why Play Memory Games?
                </h2>
                <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                  Memory games provide scientifically-backed cognitive training that can improve your focus, 
                  attention span, and recall abilities through engaging gameplay.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Brain className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Cognitive Enhancement</h3>
                  <p className="text-neutral-600">
                    Strengthen working memory, improve focus, and enhance cognitive flexibility through targeted exercises.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Target className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Better Focus</h3>
                  <p className="text-neutral-600">
                    Develop sustained attention and concentration skills that transfer to academic and professional tasks.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Zap className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Faster Recall</h3>
                  <p className="text-neutral-600">
                    Train your brain to retrieve information more quickly and accurately through memory techniques.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Gamepad2 className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Fun Learning</h3>
                  <p className="text-neutral-600">
                    Enjoy engaging gameplay while building real cognitive skills that benefit daily life.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default MemoryGames;
