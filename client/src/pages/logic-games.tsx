
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { useLocation } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolCard from '@/components/ToolCard';
import EnhancedSearchFilters from '@/components/EnhancedSearchFilters';
import { tools, getToolsByCategory } from '@/data/tools';
import { searchAndFilterTools } from '@/lib/search';
import { Target, Puzzle, Brain, Lightbulb } from 'lucide-react';

const LogicGames = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [, setLocation] = useLocation();

  const logicGames = getToolsByCategory('logic');
  const filteredGames = searchAndFilterTools(searchQuery, 'logic');

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
        <title>Logic & Puzzle Games - 32+ Free Brain Training Games | DapsiGames</title>
        <meta name="description" content="Free logic games including sudoku solver, chess tactics, brain teasers, and 29+ more puzzle games. Develop critical thinking and problem-solving skills." />
        <meta name="keywords" content="logic games, puzzle games, sudoku, chess tactics, brain teasers, critical thinking games, problem solving puzzles" />
        <meta property="og:title" content="Logic & Puzzle Games - 32+ Free Brain Training Games | DapsiGames" />
        <meta property="og:description" content="Free logic games including sudoku solver, chess tactics, and 29+ more puzzle games." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://dapsiwow.com/logic-games" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 bg-neutral-50">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-indigo-600 via-purple-500 to-blue-700 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="text-page-title">
                Logic Games
              </h1>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                32+ interactive logic games to improve critical thinking, problem-solving, and reasoning skills
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search logic games..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full py-4 px-6 pr-16 text-lg text-neutral-800 bg-white rounded-2xl shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-200 transition-all duration-200"
                    data-testid="input-search-logic-games"
                  />
                  <button 
                    type="button"
                    className="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-xl hover:from-indigo-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
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
                selectedCategory="logic"
                setSelectedCategory={() => {}}
                showCategoryFilter={false}
                placeholder="Search logic games..."
              />
            </div>
          </section>

          {/* Games Grid */}
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-neutral-800">
                  All Logic Games ({sortedGames.length})
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
                  <Target size={64} className="mx-auto text-neutral-400 mb-4" />
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

          {/* Why Logic Games Section */}
          <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-6">
                  Why Play Logic Games?
                </h2>
                <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                  Logic games strengthen your analytical thinking, enhance problem-solving abilities, 
                  and develop the critical thinking skills essential for academic and professional success.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Brain className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Critical Thinking</h3>
                  <p className="text-neutral-600">
                    Develop analytical skills and logical reasoning abilities through challenging puzzles and brain teasers.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Puzzle className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Problem Solving</h3>
                  <p className="text-neutral-600">
                    Master systematic approaches to breaking down complex problems into manageable steps.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Target className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Strategic Planning</h3>
                  <p className="text-neutral-600">
                    Learn to think ahead, consider multiple possibilities, and make optimal decisions under constraints.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Lightbulb className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Creative Solutions</h3>
                  <p className="text-neutral-600">
                    Discover innovative approaches and develop lateral thinking skills for unique problem solving.
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

export default LogicGames;
