
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolCard from '@/components/ToolCard';
import { getToolsByCategory } from '@/data/tools';
import { searchAndFilterTools } from '@/lib/search';
import { Search, Brain, Target, Zap, TrendingUp, Gamepad2, Timer, Award } from 'lucide-react';

const MemoryGames = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const memoryGames = getToolsByCategory('memory');
  const filteredGames = searchQuery ? searchAndFilterTools(searchQuery, 'memory') : memoryGames;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Memory Games - 25+ Free Brain Training Games | DapsiGames</title>
        <meta name="description" content="Free memory games including memory palace builder, sequence master, pattern recall, and 22+ more cognitive training games." />
        <meta name="keywords" content="memory games, brain training games, cognitive games, memory improvement, brain exercises, educational games" />
        <meta property="og:title" content="Memory Games - 25+ Free Brain Training Games | DapsiGames" />
        <meta property="og:description" content="Free memory games including memory palace builder, sequence master, and 22+ more brain training games." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://dapsiwow.com/memory-games" />
      </Helmet>

      <div className="min-h-screen flex flex-col" data-testid="page-memory-games">
        <Header />
        
        <main className="flex-1 bg-neutral-50">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-800 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Brain className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-page-title">
                Memory Games
              </h1>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                25+ brain training games to improve memory, focus, and cognitive abilities
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
                  {searchQuery ? `Search Results (${filteredGames.length})` : `All Memory Games (${memoryGames.length})`}
                </h2>
                <p className="text-neutral-600">
                  {searchQuery 
                    ? `Games matching "${searchQuery}"`
                    : 'Train your brain with scientifically-designed cognitive exercises'
                  }
                </p>
              </div>

              {filteredGames.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="grid-memory-games">
                  {filteredGames.map((game) => (
                    <ToolCard key={game.id} tool={game} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <Brain className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-neutral-600 mb-2">No memory games found</h3>
                  <p className="text-neutral-500">Try adjusting your search terms</p>
                </div>
              )}

              {/* Popular Games Section */}
              <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-neutral-800 mb-6 text-center">Popular Memory Games</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <Brain className="w-6 h-6 text-purple-600 mb-2 mx-auto" />
                    <h3 className="font-semibold text-neutral-800">Memory Palace</h3>
                    <p className="text-sm text-neutral-600">Build memory palaces</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <Target className="w-6 h-6 text-purple-600 mb-2 mx-auto" />
                    <h3 className="font-semibold text-neutral-800">Sequence Master</h3>
                    <p className="text-sm text-neutral-600">Remember sequences</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <Zap className="w-6 h-6 text-purple-600 mb-2 mx-auto" />
                    <h3 className="font-semibold text-neutral-800">Pattern Recall</h3>
                    <p className="text-sm text-neutral-600">Visual memory training</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <Timer className="w-6 h-6 text-purple-600 mb-2 mx-auto" />
                    <h3 className="font-semibold text-neutral-800">Dual N-Back</h3>
                    <p className="text-sm text-neutral-600">Working memory</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-neutral-800 mb-4">Boost Your Cognitive Abilities</h2>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                  Scientifically-designed memory games to enhance focus, attention, and mental agility
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform shadow-lg">
                    <Brain className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Improve Focus</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Enhance concentration and attention span through targeted cognitive exercises.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform shadow-lg">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Track Progress</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Monitor your cognitive improvement with detailed performance analytics.
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

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform shadow-lg">
                    <Award className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Achieve Goals</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Set and reach memory improvement milestones with personalized challenges.
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
