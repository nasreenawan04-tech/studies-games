import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'wouter';
import { 
  Brain, 
  Search, 
  Target, 
  Zap, 
  Gamepad2, 
  TrendingUp,
  GraduationCap,
  Trophy,
  Play,
  Eye,
  RotateCcw,
  Clock
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GameCard from '@/components/GameCard';
import { tools } from '@/data/tools';
import { searchAndFilterTools } from '@/lib/search';

const MemoryGames = () => {
  const [location] = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTools, setFilteredTools] = useState(tools.filter(tool => tool.category === 'memory'));

  // Parse URL parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(location.split('?')[1] || '');
    const searchParam = urlParams.get('search') || '';
    setSearchQuery(searchParam);
  }, [location]);

  // Filter games based on search
  useEffect(() => {
    const filtered = searchAndFilterTools(searchQuery, 'memory');
    setFilteredTools(filtered);
  }, [searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
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
        <link rel="canonical" href="https://dapsigames.com/memory-games" />
      </Helmet>

      <div className="min-h-screen flex flex-col" data-testid="page-memory-games">
        <Header />

        <main className="flex-1 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-900">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-700 text-white py-20 overflow-hidden">
            {/* Gaming Pattern Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10">
                <Gamepad2 className="w-8 h-8" />
              </div>
              <div className="absolute top-20 right-20">
                <Eye className="w-6 h-6" />
              </div>
              <div className="absolute bottom-16 left-16">
                <Clock className="w-7 h-7" />
              </div>
              <div className="absolute bottom-10 right-10">
                <Trophy className="w-8 h-8" />
              </div>
              <div className="absolute top-32 left-1/3">
                <Brain className="w-5 h-5" />
              </div>
              <div className="absolute bottom-32 right-1/3">
                <RotateCcw className="w-5 h-5" />
              </div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
              {/* Enhanced Icon Design */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center shadow-lg border border-white/20">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                  <Gamepad2 className="w-8 h-8 text-white" />
                </div>
                <div className="w-18 h-18 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center shadow-lg border border-white/20">
                  <GraduationCap className="w-9 h-9 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="text-page-title">
                <span className="bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                  Memory Games
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-purple-100 mb-4 max-w-4xl mx-auto leading-relaxed">
                25+ brain training games combining cognitive enhancement with engaging gameplay
              </p>
              
              <p className="text-lg text-purple-200 mb-10 max-w-3xl mx-auto">
                Master memory techniques, improve focus, and boost cognitive abilities through fun, gamified brain training experiences
              </p>

              {/* Enhanced Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search memory games..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full py-4 px-6 pr-20 text-lg text-neutral-800 bg-white/95 backdrop-blur rounded-2xl shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/30 focus:bg-white transition-all duration-300 border border-white/20"
                    data-testid="input-search-memory-games"
                  />
                  <div className="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl flex items-center pointer-events-none shadow-lg">
                    <Search className="w-5 h-5" aria-hidden="true" />
                  </div>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-6 text-purple-100">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur">
                  <Brain className="w-5 h-5" />
                  <span className="text-sm font-medium">Brain Training</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur">
                  <Zap className="w-5 h-5" />
                  <span className="text-sm font-medium">Memory Boost</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur">
                  <Play className="w-5 h-5" />
                  <span className="text-sm font-medium">Play & Train</span>
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
                  Explore Memory Games
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6" data-testid="text-results-count">
                  Showing {filteredTools.length} interactive memory games
                  {searchQuery && ` matching "${searchQuery}"`}
                </p>
                {!searchQuery && (
                  <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium dark:bg-purple-900/50 dark:text-purple-200">Memory Palace</span>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full font-medium dark:bg-indigo-900/50 dark:text-indigo-200">Pattern Recognition</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium dark:bg-blue-900/50 dark:text-blue-200">Sequence Training</span>
                    <span className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full font-medium dark:bg-violet-900/50 dark:text-violet-200">Working Memory</span>
                  </div>
                )}
              </div>

              {/* Games Grid */}
              {filteredTools.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" data-testid="grid-memory-games">
                  {filteredTools.map((tool) => (
                    <GameCard key={tool.id} tool={tool} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white dark:bg-neutral-800 rounded-3xl shadow-lg border border-neutral-200 dark:border-neutral-700" data-testid="empty-state-no-tools">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-3">No memory games found</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                    Try adjusting your search query or browse our popular games below.
                  </p>
                  <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                    Browse All Games
                  </button>
                </div>
              )}

              {/* Enhanced Popular Games Section */}
              <div className="mt-20 bg-gradient-to-br from-white to-purple-50 dark:from-neutral-800 dark:to-neutral-900 rounded-3xl shadow-xl p-8 border border-neutral-200 dark:border-neutral-700">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Trophy className="w-8 h-8 text-yellow-500" />
                    <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200">Popular Memory Games</h2>
                    <Trophy className="w-8 h-8 text-yellow-500" />
                  </div>
                  <p className="text-lg text-neutral-600 dark:text-neutral-400">
                    Start your memory training journey with these brain-boosting games
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50 rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer group border border-purple-200 dark:border-purple-800">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-neutral-800 dark:text-neutral-200 mb-2 text-lg">Memory Palace Builder</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">Build memory palaces for enhanced recall and retention</p>
                  </div>
                  
                  <div className="text-center p-8 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950/50 dark:to-indigo-900/50 rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer group border border-indigo-200 dark:border-indigo-800">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-neutral-800 dark:text-neutral-200 mb-2 text-lg">Sequence Master</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">Remember complex sequences with progressive difficulty</p>
                  </div>
                  
                  <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer group border border-blue-200 dark:border-blue-800">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-neutral-800 dark:text-neutral-200 mb-2 text-lg">Pattern Recall</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">Memorize visual patterns with increasing complexity</p>
                  </div>
                  
                  <div className="text-center p-8 bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-950/50 dark:to-violet-900/50 rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer group border border-violet-200 dark:border-violet-800">
                    <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <RotateCcw className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-neutral-800 dark:text-neutral-200 mb-2 text-lg">Dual N-Back Training</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">Improve working memory through dual-task training</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Why Memory Games Section */}
          <section className="py-20 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-900 relative overflow-hidden">
            {/* Background Gaming Elements */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
              <div className="absolute top-20 left-20">
                <Eye className="w-12 h-12" />
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
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 dark:text-neutral-200">
                    Why Choose Our Memory Games?
                  </h2>
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Gamepad2 className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed">
                  Experience the perfect blend of education and entertainment with our interactive memory games. 
                  Build strong memory skills, enhance cognitive abilities, and improve focus through engaging gameplay and progressive challenges.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center group bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Brain className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Cognitive Enhancement</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Strengthen working memory, improve focus, and enhance cognitive flexibility through scientifically-designed targeted exercises.
                  </p>
                </div>

                <div className="text-center group bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Target className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Better Focus</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Develop sustained attention and concentration skills that transfer effectively to academic and professional tasks.
                  </p>
                </div>

                <div className="text-center group bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Zap className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Faster Recall</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Train your brain to retrieve information more quickly and accurately through proven memory techniques and strategies.
                  </p>
                </div>

                <div className="text-center group bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Gamepad2 className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Engaging Gameplay</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Enjoy engaging gameplay mechanics while building real cognitive skills that provide lasting benefits for daily life.
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