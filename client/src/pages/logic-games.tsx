
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolCard from '@/components/ToolCard';
import { getToolsByCategory } from '@/data/tools';
import { searchAndFilterTools } from '@/lib/search';
import { Search, Puzzle, Brain, Lightbulb, Target, Gamepad2, TrendingUp, Zap, Award } from 'lucide-react';

const LogicGames = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const logicGames = getToolsByCategory('logic');
  const filteredGames = searchQuery ? searchAndFilterTools(searchQuery, 'logic') : logicGames;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Logic Games - 32+ Free Logic & Puzzle Games | DapsiGames</title>
        <meta name="description" content="Free logic games including sudoku solver, chess tactics, brain teasers, and 29+ more critical thinking games." />
        <meta name="keywords" content="logic games, puzzle games, brain teasers, critical thinking games, problem solving games, educational games" />
        <meta property="og:title" content="Logic Games - 32+ Free Logic & Puzzle Games | DapsiGames" />
        <meta property="og:description" content="Free logic games including sudoku solver, chess tactics, and 29+ more critical thinking games." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://dapsiwow.com/logic-games" />
      </Helmet>

      <div className="min-h-screen flex flex-col" data-testid="page-logic-games">
        <Header />
        
        <main className="flex-1 bg-neutral-50">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-green-400 via-green-500 to-green-800 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Puzzle className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-page-title">
                Logic Games
              </h1>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
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
                    className="w-full py-4 px-6 pr-16 text-lg text-neutral-800 bg-white rounded-2xl shadow-lg focus:outline-none focus:ring-4 focus:ring-green-200 transition-all duration-200"
                    data-testid="input-search-logic-games"
                  />
                  <div className="absolute right-4 top-4">
                    <Search className="w-6 h-6 text-neutral-400" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Games Grid */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-neutral-800 mb-4">
                  {searchQuery ? `Search Results (${filteredGames.length})` : `All Logic Games (${logicGames.length})`}
                </h2>
                <p className="text-neutral-600">
                  {searchQuery 
                    ? `Games matching "${searchQuery}"`
                    : 'Challenge your mind with puzzles and brain teasers that develop logical reasoning'
                  }
                </p>
              </div>

              {filteredGames.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="grid-logic-games">
                  {filteredGames.map((game) => (
                    <ToolCard key={game.id} tool={game} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <Puzzle className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-neutral-600 mb-2">No logic games found</h3>
                  <p className="text-neutral-500">Try adjusting your search terms</p>
                </div>
              )}

              {/* Popular Games Section */}
              <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-neutral-800 mb-6 text-center">Popular Logic Games</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <Puzzle className="w-6 h-6 text-green-600 mb-2 mx-auto" />
                    <h3 className="font-semibold text-neutral-800">Sudoku Solver</h3>
                    <p className="text-sm text-neutral-600">Master sudoku puzzles with hints</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <Puzzle className="w-6 h-6 text-green-600 mb-2 mx-auto" />
                    <h3 className="font-semibold text-neutral-800">Chess Tactics</h3>
                    <p className="text-sm text-neutral-600">Improve chess strategy</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <Brain className="w-6 h-6 text-green-600 mb-2 mx-auto" />
                    <h3 className="font-semibold text-neutral-800">Brain Teasers</h3>
                    <p className="text-sm text-neutral-600">Challenge your mind</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <Lightbulb className="w-6 h-6 text-green-600 mb-2 mx-auto" />
                    <h3 className="font-semibold text-neutral-800">Logic Puzzles</h3>
                    <p className="text-sm text-neutral-600">Deductive reasoning</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-neutral-800 mb-4">Sharpen Your Mind</h2>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                  Develop critical thinking and problem-solving skills through challenging logic puzzles
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Brain className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Critical Thinking</h3>
                  <p className="text-neutral-600">
                    Develop analytical skills and logical reasoning through complex puzzles.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Lightbulb className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Problem Solving</h3>
                  <p className="text-neutral-600">
                    Learn to approach challenges systematically and find creative solutions.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Target className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Strategic Thinking</h3>
                  <p className="text-neutral-600">
                    Plan ahead and think multiple steps in advance to solve complex puzzles.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Award className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Mental Agility</h3>
                  <p className="text-neutral-600">
                    Improve mental flexibility and quick thinking through varied challenges.
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
