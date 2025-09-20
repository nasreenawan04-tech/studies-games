
import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolCard from '@/components/ToolCard';
import { tools } from '@/data/tools';
import { searchAndFilterTools } from '@/lib/search';
import { Target, Puzzle, Brain, Lightbulb, Search, Plus, X, Divide } from 'lucide-react';

const LogicGames = () => {
  const [location] = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTools, setFilteredTools] = useState(tools.filter(tool => tool.category === 'logic'));

  // Parse URL parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(location.split('?')[1] || '');
    const searchParam = urlParams.get('search') || '';
    setSearchQuery(searchParam);
  }, [location]);

  // Filter games based on search
  useEffect(() => {
    const filtered = searchAndFilterTools(searchQuery, 'logic');
    setFilteredTools(filtered);
  }, [searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
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

      <div className="min-h-screen flex flex-col" data-testid="page-logic-games">
        <Header />
        
        <main className="flex-1 bg-neutral-50">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-700 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-page-title">
                Logic Games
              </h1>
              <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
                32+ interactive logic games to improve critical thinking, problem-solving, and reasoning skills
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search logic games..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full py-4 px-6 pr-16 text-lg text-neutral-800 bg-white rounded-2xl shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-200 transition-all duration-200"
                    data-testid="input-search-logic-games"
                  />
                  <div className="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl flex items-center pointer-events-none">
                    <Search className="w-5 h-5" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Games Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Results Info */}
              <div className="mb-8">
                <p className="text-neutral-600 text-center" data-testid="text-results-count">
                  Showing {filteredTools.length} logic games
                  {searchQuery && ` matching "${searchQuery}"`}
                </p>
              </div>

              {/* Games Grid */}
              {filteredTools.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="grid-logic-games">
                  {filteredTools.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16" data-testid="empty-state-no-tools">
                  <Search className="w-16 h-16 text-neutral-300 mb-4 mx-auto" />
                  <h3 className="text-2xl font-bold text-neutral-600 mb-2">No logic games found</h3>
                  <p className="text-neutral-500">
                    Try adjusting your search query.
                  </p>
                </div>
              )}

              {/* Popular Games Section */}
              <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-neutral-800 mb-6 text-center">Popular Logic Games</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-emerald-50 rounded-xl">
                    <Target className="w-6 h-6 text-emerald-600 mb-2 mx-auto" />
                    <h3 className="font-semibold text-neutral-800">Sudoku Solver</h3>
                    <p className="text-sm text-neutral-600">Master sudoku puzzles with hints</p>
                  </div>
                  <div className="text-center p-4 bg-teal-50 rounded-xl">
                    <Puzzle className="w-6 h-6 text-teal-600 mb-2 mx-auto" />
                    <h3 className="font-semibold text-neutral-800">Chess Tactics</h3>
                    <p className="text-sm text-neutral-600">Improve chess strategy</p>
                  </div>
                  <div className="text-center p-4 bg-cyan-50 rounded-xl">
                    <Brain className="w-6 h-6 text-cyan-600 mb-2 mx-auto" />
                    <h3 className="font-semibold text-neutral-800">Brain Teasers</h3>
                    <p className="text-sm text-neutral-600">Challenge your mind</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <Lightbulb className="w-6 h-6 text-blue-600 mb-2 mx-auto" />
                    <h3 className="font-semibold text-neutral-800">Logic Puzzles</h3>
                    <p className="text-sm text-neutral-600">Develop reasoning skills</p>
                  </div>
                </div>
              </div>
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
