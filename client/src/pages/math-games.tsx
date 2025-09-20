import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'wouter';
import { Sigma, Search, Plus, X, Divide, TrendingUp, DollarSign, Target, Gamepad2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolCard from '@/components/ToolCard';
import { tools } from '@/data/tools';
import { searchAndFilterTools } from '@/lib/search';

const MathGames = () => {
  const [location] = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTools, setFilteredTools] = useState(tools.filter(tool => tool.category === 'math'));

  // Parse URL parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(location.split('?')[1] || '');
    const searchParam = urlParams.get('search') || '';
    setSearchQuery(searchParam);
  }, [location]);

  // Filter games based on search
  useEffect(() => {
    const filtered = searchAndFilterTools(searchQuery, 'math');
    setFilteredTools(filtered);
  }, [searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Math Games - 36+ Free Educational Math Games | DapsiGames</title>
        <meta name="description" content="Free math games including addition race, multiplication master, fraction frenzy, and 33+ more interactive learning games." />
        <meta name="keywords" content="math games, educational games, addition games, multiplication games, fraction games, algebra games, geometry games" />
        <meta property="og:title" content="Math Games - 36+ Free Educational Math Games | DapsiGames" />
        <meta property="og:description" content="Free math games including addition race, multiplication master, and 33+ more educational games." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://dapsiwow.com/math-games" />
      </Helmet>

      <div className="min-h-screen flex flex-col" data-testid="page-math-games">
        <Header />

        <main className="flex-1 bg-neutral-50">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Sigma className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="text-page-title">
                Math Games
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                36+ interactive math games covering arithmetic, algebra, geometry, and advanced mathematics
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search math games..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full py-4 px-6 pr-16 text-lg text-neutral-800 bg-white rounded-2xl shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-200"
                    data-testid="input-search-math-games"
                  />
                  <div className="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl flex items-center pointer-events-none">
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
                  Showing {filteredTools.length} math games
                  {searchQuery && ` matching "${searchQuery}"`}
                </p>
              </div>

              {/* Games Grid */}
              {filteredTools.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="grid-math-games">
                  {filteredTools.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16" data-testid="empty-state-no-tools">
                  <Search className="w-16 h-16 text-neutral-300 mb-4 mx-auto" />
                  <h3 className="text-2xl font-bold text-neutral-600 mb-2">No math games found</h3>
                  <p className="text-neutral-500">
                    Try adjusting your search query.
                  </p>
                </div>
              )}

              {/* Popular Games Section */}
              <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-neutral-800 mb-6 text-center">Popular Math Games</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <Plus className="w-6 h-6 text-blue-600 mb-2 mx-auto" />
                    <h3 className="font-semibold text-neutral-800">Addition Race</h3>
                    <p className="text-sm text-neutral-600">Race through addition problems</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <X className="w-6 h-6 text-green-600 mb-2 mx-auto" />
                    <h3 className="font-semibold text-neutral-800">Multiplication Master</h3>
                    <p className="text-sm text-neutral-600">Master multiplication tables</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <Divide className="w-6 h-6 text-purple-600 mb-2 mx-auto" />
                    <h3 className="font-semibold text-neutral-800">Fraction Frenzy</h3>
                    <p className="text-sm text-neutral-600">Learn fractions through games</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-xl">
                    <Sigma className="w-6 h-6 text-orange-600 mb-2 mx-auto" />
                    <h3 className="font-semibold text-neutral-800">Algebra Adventure</h3>
                    <p className="text-sm text-neutral-600">Solve algebraic equations</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Why Math Games Section */}
          <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-6">
                  Why Play Our Math Games?
                </h2>
                <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                  Our interactive math games make learning mathematics engaging and fun while building 
                  strong foundational skills through progressive challenges and immediate feedback.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Sigma className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Master Concepts</h3>
                  <p className="text-neutral-600">
                    Build strong math foundations through interactive games that reinforce key concepts.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Progressive Learning</h3>
                  <p className="text-neutral-600">
                    Advance through difficulty levels that adapt to your skill level and learning pace.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Gamepad2 className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Engaging Gameplay</h3>
                  <p className="text-neutral-600">
                    Turn math practice into fun adventures with gamified learning experiences.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Target className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Achieve Success</h3>
                  <p className="text-neutral-600">
                    Track your progress and celebrate achievements as you master math skills.
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

export default MathGames;