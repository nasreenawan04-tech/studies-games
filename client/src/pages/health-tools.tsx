import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'wouter';
import { Heart, Search, Beaker, Atom, Microscope, Telescope, Activity, Zap, Target } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolCard from '@/components/ToolCard';
import { tools } from '@/data/tools';
import { searchAndFilterTools } from '@/lib/search';

const HealthTools = () => {
  const [location, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTools, setFilteredTools] = useState(tools.filter(tool => tool.category === 'science'));

  // Parse URL parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(location.split('?')[1] || '');
    const searchParam = urlParams.get('search') || '';
    setSearchQuery(searchParam);
  }, [location]);

  // Filter tools based on search
  useEffect(() => {
    const filtered = searchAndFilterTools(searchQuery, 'science');
    setFilteredTools(filtered);
  }, [searchQuery]);

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
          <section className="bg-gradient-to-r from-pink-600 via-rose-500 to-red-700 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="text-page-title">
                Science Games
              </h1>
              <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
                25+ interactive science games covering physics, chemistry, biology, and earth sciences
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
                  <div className="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-xl flex items-center pointer-events-none">
                    <Search className="w-5 h-5" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tools Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Results Info */}
              <div className="mb-8">
                <p className="text-neutral-600 text-center" data-testid="text-results-count">
                  Showing {filteredTools.length} science games
                  {searchQuery && ` matching "${searchQuery}"`}
                </p>
              </div>

              {/* Games Grid */}
              {filteredTools.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="grid-science-games">
                  {filteredTools.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16" data-testid="empty-state-no-tools">
                  <Search className="w-16 h-16 text-neutral-300 mb-4 mx-auto" />
                  <h3 className="text-2xl font-bold text-neutral-600 mb-2">No science games found</h3>
                  <p className="text-neutral-500">
                    Try adjusting your search query.
                  </p>
                </div>
              )}

              {/* Popular Games Section */}
              <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-neutral-800 mb-6 text-center">Popular Science Games</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-pink-50 rounded-xl">
                    <Beaker className="w-6 h-6 text-pink-600 mb-2 mx-auto" />
                    <h3 className="font-semibold text-neutral-800">Chemistry Lab</h3>
                    <p className="text-sm text-neutral-600">Explore chemical reactions</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-xl">
                    <Atom className="w-6 h-6 text-red-600 mb-2 mx-auto" />
                    <h3 className="font-semibold text-neutral-800">Physics Simulator</h3>
                    <p className="text-sm text-neutral-600">Simulate physics experiments</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <Microscope className="w-6 h-6 text-blue-600 mb-2 mx-auto" />
                    <h3 className="font-semibold text-neutral-800">Biology Quiz</h3>
                    <p className="text-sm text-neutral-600">Test biological knowledge</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <Telescope className="w-6 h-6 text-purple-600 mb-2 mx-auto" />
                    <h3 className="font-semibold text-neutral-800">Astronomy Adventure</h3>
                    <p className="text-sm text-neutral-600">Explore the solar system</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Science Games Section */}
          <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-6">
                  Why Play Our Science Games?
                </h2>
                <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                  Our interactive science games make complex scientific concepts accessible and engaging 
                  through hands-on virtual experiments and immersive learning experiences.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Heart className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Love for Science</h3>
                  <p className="text-neutral-600">
                    Develop a passion for scientific discovery through engaging and interactive gameplay.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Activity className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Hands-On Learning</h3>
                  <p className="text-neutral-600">
                    Conduct virtual experiments safely while learning fundamental scientific principles.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Zap className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Quick Understanding</h3>
                  <p className="text-neutral-600">
                    Grasp complex concepts quickly through visual simulations and interactive demonstrations.
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

export default HealthTools;