
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolCard from '@/components/ToolCard';
import { getToolsByCategory } from '@/data/tools';
import { searchAndFilterTools } from '@/lib/search';
import { Search, FlaskConical, Atom, Microscope, Globe, Target, Brain, Gamepad2, TrendingUp } from 'lucide-react';

const ScienceGames = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const scienceGames = getToolsByCategory('science');
  const filteredGames = searchQuery ? searchAndFilterTools(searchQuery, 'science') : scienceGames;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Science Games - 25+ Free Educational Science Games | DapsiGames</title>
        <meta name="description" content="Free science games including periodic table quest, physics playground, biology explorer, and 22+ more interactive learning games." />
        <meta name="keywords" content="science games, chemistry games, physics games, biology games, earth science games, educational games" />
        <meta property="og:title" content="Science Games - 25+ Free Educational Science Games | DapsiGames" />
        <meta property="og:description" content="Free science games including periodic table quest, physics playground, and 22+ more educational games." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://dapsiwow.com/science-games" />
      </Helmet>

      <div className="min-h-screen flex flex-col" data-testid="page-science-games">
        <Header />
        
        <main className="flex-1 bg-neutral-50">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-800 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FlaskConical className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-page-title">
                Science Games
              </h1>
              <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
                25+ interactive science games exploring physics, chemistry, biology, and earth sciences
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search science games..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full py-4 px-6 pr-16 text-lg text-neutral-800 bg-white rounded-2xl shadow-lg focus:outline-none focus:ring-4 focus:ring-pink-200 transition-all duration-200"
                    data-testid="input-search-science-games"
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
                  {searchQuery ? `Search Results (${filteredGames.length})` : `All Science Games (${scienceGames.length})`}
                </h2>
                <p className="text-neutral-600">
                  {searchQuery 
                    ? `Games matching "${searchQuery}"`
                    : 'Explore scientific concepts through hands-on virtual experiments and simulations'
                  }
                </p>
              </div>

              {filteredGames.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="grid-science-games">
                  {filteredGames.map((game) => (
                    <ToolCard key={game.id} tool={game} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <FlaskConical className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-neutral-600 mb-2">No science games found</h3>
                  <p className="text-neutral-500">Try adjusting your search terms</p>
                </div>
              )}

              {/* Popular Games Section */}
              <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-neutral-800 mb-6 text-center">Popular Science Games</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-pink-50 rounded-xl">
                    <Atom className="w-6 h-6 text-pink-600 mb-2 mx-auto" />
                    <h3 className="font-semibold text-neutral-800">Periodic Table Quest</h3>
                    <p className="text-sm text-neutral-600">Explore elements</p>
                  </div>
                  <div className="text-center p-4 bg-pink-50 rounded-xl">
                    <FlaskConical className="w-6 h-6 text-pink-600 mb-2 mx-auto" />
                    <h3 className="font-semibold text-neutral-800">Physics Playground</h3>
                    <p className="text-sm text-neutral-600">Interactive experiments</p>
                  </div>
                  <div className="text-center p-4 bg-pink-50 rounded-xl">
                    <Microscope className="w-6 h-6 text-pink-600 mb-2 mx-auto" />
                    <h3 className="font-semibold text-neutral-800">Biology Explorer</h3>
                    <p className="text-sm text-neutral-600">Life sciences</p>
                  </div>
                  <div className="text-center p-4 bg-pink-50 rounded-xl">
                    <Globe className="w-6 h-6 text-pink-600 mb-2 mx-auto" />
                    <h3 className="font-semibold text-neutral-800">Earth Science Lab</h3>
                    <p className="text-sm text-neutral-600">Geology & weather</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-neutral-800 mb-4">Discover Science Through Play</h2>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                  Engage with scientific concepts through interactive experiments and virtual laboratories
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <FlaskConical className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Virtual Experiments</h3>
                  <p className="text-neutral-600">
                    Conduct safe experiments and explore scientific principles in virtual labs.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Brain className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Concept Mastery</h3>
                  <p className="text-neutral-600">
                    Understand complex scientific concepts through interactive visualizations.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Track Learning</h3>
                  <p className="text-neutral-600">
                    Monitor your scientific knowledge growth with detailed progress tracking.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Target className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Scientific Thinking</h3>
                  <p className="text-neutral-600">
                    Develop critical thinking and analytical skills essential for scientific reasoning.
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

export default ScienceGames;
