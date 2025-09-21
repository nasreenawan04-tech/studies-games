import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'wouter';
import { Brain, Search, Target, Zap, Gamepad2, TrendingUp } from 'lucide-react';
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

        <main className="flex-1 bg-neutral-50">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-700 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Brain className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="text-page-title">
                Memory Games
              </h1>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                25+ brain training games focused on memory, attention, and cognitive enhancement
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search memory games..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full py-4 px-6 pr-16 text-lg text-neutral-800 bg-white rounded-2xl shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-200 transition-all duration-200"
                    data-testid="input-search-memory-games"
                  />
                  <div className="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl flex items-center pointer-events-none">
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
                  Showing {filteredTools.length} memory games
                  {searchQuery && ` matching "${searchQuery}"`}
                </p>
              </div>

              {/* Games Grid */}
              {filteredTools.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="grid-memory-games">
                  {filteredTools.map((tool) => (
                    <GameCard key={tool.id} tool={tool} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16" data-testid="empty-state-no-tools">
                  <Search className="w-16 h-16 text-neutral-300 mb-4 mx-auto" />
                  <h3 className="text-2xl font-bold text-neutral-600 mb-2">No memory games found</h3>
                  <p className="text-neutral-500">
                    Try adjusting your search query.
                  </p>
                </div>
              )}

              {/* Popular Games Section */}
              <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-neutral-800 mb-8 text-center">Popular Memory Games</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors cursor-pointer group">
                    <Brain className="w-8 h-8 text-purple-600 mb-3 mx-auto group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-neutral-800 mb-2">Memory Palace Builder</h3>
                    <p className="text-sm text-neutral-600">Build memory palaces for recall</p>
                  </div>
                  <div className="text-center p-6 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-colors cursor-pointer group">
                    <Target className="w-8 h-8 text-indigo-600 mb-3 mx-auto group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-neutral-800 mb-2">Sequence Master</h3>
                    <p className="text-sm text-neutral-600">Remember complex sequences</p>
                  </div>
                  <div className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer group">
                    <Zap className="w-8 h-8 text-blue-600 mb-3 mx-auto group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-neutral-800 mb-2">Pattern Recall</h3>
                    <p className="text-sm text-neutral-600">Memorize visual patterns</p>
                  </div>
                  <div className="text-center p-6 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors cursor-pointer group">
                    <Gamepad2 className="w-8 h-8 text-pink-600 mb-3 mx-auto group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-neutral-800 mb-2">Dual N-Back Training</h3>
                    <p className="text-sm text-neutral-600">Improve working memory</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Memory Games Section */}
          <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-6">
                  Why Play Our Memory Games?
                </h2>
                <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                  Our interactive memory games make cognitive training engaging and fun while building 
                  strong memory skills through progressive challenges and immediate feedback.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform shadow-lg">
                    <Brain className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Cognitive Enhancement</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Strengthen working memory, improve focus, and enhance cognitive flexibility through targeted exercises.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform shadow-lg">
                    <Target className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Better Focus</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Develop sustained attention and concentration skills that transfer to academic and professional tasks.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform shadow-lg">
                    <Zap className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Faster Recall</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Train your brain to retrieve information more quickly and accurately through memory techniques.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform shadow-lg">
                    <Gamepad2 className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Fun Learning</h3>
                  <p className="text-neutral-600 leading-relaxed">
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