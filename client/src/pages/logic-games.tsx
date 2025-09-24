import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GameCard from '@/components/GameCard';
import { tools } from '@/data/tools';
import { searchAndFilterTools } from '@/lib/search';
import { 
  Puzzle, 
  Target, 
  Brain, 
  Lightbulb, 
  Search, 
  Plus, 
  X, 
  Divide,
  Gamepad2,
  GraduationCap,
  Trophy,
  Zap,
  Play,
  Cog,
  Grid3X3
} from 'lucide-react';

const LogicGames = () => {
  const [location, setLocation] = useLocation();
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
    const newQuery = e.target.value;
    setSearchQuery(newQuery);

    // Update URL to reflect search state
    const newUrl = newQuery ? `/logic-games?search=${encodeURIComponent(newQuery)}` : '/logic-games';
    setLocation(newUrl);
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
        <link rel="canonical" href="https://dapsigames.com/logic-games" />
      </Helmet>

      <div className="min-h-screen flex flex-col" data-testid="page-logic-games">
        <Header />

        <main className="flex-1 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-900">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-r from-green-400 via-green-500 to-green-800 text-white py-20 overflow-hidden">
            {/* Gaming Pattern Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10">
                <Gamepad2 className="w-8 h-8" />
              </div>
              <div className="absolute top-20 right-20">
                <Cog className="w-6 h-6" />
              </div>
              <div className="absolute bottom-16 left-16">
                <Grid3X3 className="w-7 h-7" />
              </div>
              <div className="absolute bottom-10 right-10">
                <Trophy className="w-8 h-8" />
              </div>
              <div className="absolute top-32 left-1/3">
                <Puzzle className="w-5 h-5" />
              </div>
              <div className="absolute bottom-32 right-1/3">
                <Target className="w-5 h-5" />
              </div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
              {/* Enhanced Icon Design */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center shadow-lg border border-white/20">
                  <Puzzle className="w-10 h-10 text-white" />
                </div>
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                  <Gamepad2 className="w-8 h-8 text-white" />
                </div>
                <div className="w-18 h-18 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center shadow-lg border border-white/20">
                  <GraduationCap className="w-9 h-9 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="text-page-title">
                <span className="bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                  Logic Games
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-green-100 mb-4 max-w-4xl mx-auto leading-relaxed">
                32+ interactive logic games combining critical thinking with engaging gameplay
              </p>
              
              <p className="text-lg text-green-200 mb-10 max-w-3xl mx-auto">
                Master problem-solving, strategic thinking, and reasoning skills through fun, gamified puzzle experiences
              </p>

              {/* Enhanced Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search logic games..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full py-4 px-6 pr-20 text-lg text-neutral-800 bg-white/95 backdrop-blur rounded-2xl shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/30 focus:bg-white transition-all duration-300 border border-white/20"
                    data-testid="input-search-logic-games"
                  />
                  <div className="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-xl flex items-center pointer-events-none shadow-lg">
                    <Search className="w-5 h-5" aria-hidden="true" />
                  </div>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-6 text-green-100">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur">
                  <Brain className="w-5 h-5" />
                  <span className="text-sm font-medium">Critical Thinking</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur">
                  <Zap className="w-5 h-5" />
                  <span className="text-sm font-medium">Brain Training</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur">
                  <Play className="w-5 h-5" />
                  <span className="text-sm font-medium">Play & Think</span>
                </div>
              </div>
            </div>
          </section>

          {/* Games Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Enhanced Results Info */}
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                  Explore Logic Games
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6" data-testid="text-results-count">
                  Showing {filteredTools.length} interactive logic games
                  {searchQuery && ` matching "${searchQuery}"`}
                </p>
                {!searchQuery && (
                  <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium dark:bg-green-900/50 dark:text-green-200">Puzzles</span>
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-medium dark:bg-emerald-900/50 dark:text-emerald-200">Strategy</span>
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full font-medium dark:bg-teal-900/50 dark:text-teal-200">Brain Teasers</span>
                    <span className="bg-lime-100 text-lime-800 px-3 py-1 rounded-full font-medium dark:bg-lime-900/50 dark:text-lime-200">Critical Thinking</span>
                  </div>
                )}
              </div>

              {/* Games Grid */}
              {filteredTools.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" data-testid="grid-logic-games">
                  {filteredTools.map((tool) => (
                    <GameCard key={tool.id} tool={tool} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white dark:bg-neutral-800 rounded-3xl shadow-lg border border-neutral-200 dark:border-neutral-700" data-testid="empty-state-no-tools">
                  <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-3">No logic games found</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                    Try adjusting your search query or browse our popular games below.
                  </p>
                  <button className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                    Browse All Games
                  </button>
                </div>
              )}

              {/* Enhanced Popular Games Section */}
              <div className="mt-20 bg-gradient-to-br from-white to-green-50 dark:from-neutral-800 dark:to-neutral-900 rounded-3xl shadow-xl p-8 border border-neutral-200 dark:border-neutral-700">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Trophy className="w-8 h-8 text-yellow-500" />
                    <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200">Popular Logic Games</h2>
                    <Trophy className="w-8 h-8 text-yellow-500" />
                  </div>
                  <p className="text-lg text-neutral-600 dark:text-neutral-400">
                    Start your logic journey with these brain-challenging games
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/50 dark:to-green-900/50 rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer group border border-green-200 dark:border-green-800">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <Puzzle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-neutral-800 dark:text-neutral-200 mb-2 text-lg">Sudoku Solver</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">Master sudoku puzzles with interactive hints and guidance</p>
                  </div>
                  
                  <div className="text-center p-8 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/50 dark:to-emerald-900/50 rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer group border border-emerald-200 dark:border-emerald-800">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-neutral-800 dark:text-neutral-200 mb-2 text-lg">Chess Tactics</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">Improve chess strategy through tactical puzzles</p>
                  </div>
                  
                  <div className="text-center p-8 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950/50 dark:to-teal-900/50 rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer group border border-teal-200 dark:border-teal-800">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-neutral-800 dark:text-neutral-200 mb-2 text-lg">Brain Teasers</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">Challenge your mind with creative problem solving</p>
                  </div>
                  
                  <div className="text-center p-8 bg-gradient-to-br from-lime-50 to-lime-100 dark:from-lime-950/50 dark:to-lime-900/50 rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer group border border-lime-200 dark:border-lime-800">
                    <div className="w-16 h-16 bg-gradient-to-r from-lime-500 to-lime-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-neutral-800 dark:text-neutral-200 mb-2 text-lg">Logic Puzzles</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">Develop reasoning skills through logical challenges</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Why Logic Games Section */}
          <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-900 relative overflow-hidden">
            {/* Background Gaming Elements */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
              <div className="absolute top-20 left-20">
                <Cog className="w-12 h-12" />
              </div>
              <div className="absolute bottom-20 right-20">
                <Trophy className="w-10 h-10" />
              </div>
              <div className="absolute top-1/2 left-10">
                <Gamepad2 className="w-8 h-8" />
              </div>
              <div className="absolute top-1/3 right-10">
                <GraduationCap className="w-9 h-9" />
              </div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 dark:text-neutral-200">
                    Why Choose Our Logic Games?
                  </h2>
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <Gamepad2 className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed">
                  Experience the perfect blend of education and entertainment with our interactive logic games. 
                  Strengthen analytical thinking, enhance problem-solving abilities, and develop critical thinking skills through engaging gameplay.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center group bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Brain className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Critical Thinking</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Develop analytical skills and logical reasoning abilities through challenging puzzles, pattern recognition, and systematic problem-solving.
                  </p>
                </div>

                <div className="text-center group bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Puzzle className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Problem Solving</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Master systematic approaches to breaking down complex problems into manageable steps and finding optimal solutions.
                  </p>
                </div>

                <div className="text-center group bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Target className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Strategic Planning</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Learn to think ahead, consider multiple possibilities, and make optimal decisions under time and resource constraints.
                  </p>
                </div>

                <div className="text-center group bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-r from-lime-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Lightbulb className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Creative Solutions</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Discover innovative approaches and develop lateral thinking skills for unique problem-solving through gamified challenges.
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