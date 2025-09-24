import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'wouter';
import { 
  FlaskConical, 
  Search, 
  Beaker, 
  Atom, 
  Microscope, 
  Telescope, 
  Activity, 
  Zap, 
  Target,
  Gamepad2,
  GraduationCap,
  Trophy,
  Play,
  Brain,
  Dna
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GameCard from '@/components/GameCard';
import { tools } from '@/data/tools';
import { searchAndFilterTools } from '@/lib/search';

const ScienceGames = () => {
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
        <link rel="canonical" href="https://dapsigames.com/science-games" />
      </Helmet>

      <div className="min-h-screen flex flex-col" data-testid="page-science-games">
        <Header />

        <main className="flex-1 bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-900">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-r from-pink-600 via-rose-500 to-red-700 text-white py-20 overflow-hidden">
            {/* Gaming Pattern Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10">
                <Gamepad2 className="w-8 h-8" />
              </div>
              <div className="absolute top-20 right-20">
                <Microscope className="w-6 h-6" />
              </div>
              <div className="absolute bottom-16 left-16">
                <Dna className="w-7 h-7" />
              </div>
              <div className="absolute bottom-10 right-10">
                <Trophy className="w-8 h-8" />
              </div>
              <div className="absolute top-32 left-1/3">
                <Atom className="w-5 h-5" />
              </div>
              <div className="absolute bottom-32 right-1/3">
                <Beaker className="w-5 h-5" />
              </div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
              {/* Enhanced Icon Design */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center shadow-lg border border-white/20">
                  <FlaskConical className="w-10 h-10 text-white" />
                </div>
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                  <Gamepad2 className="w-8 h-8 text-white" />
                </div>
                <div className="w-18 h-18 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center shadow-lg border border-white/20">
                  <GraduationCap className="w-9 h-9 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="text-page-title">
                <span className="bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
                  Science Games
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-pink-100 mb-4 max-w-4xl mx-auto leading-relaxed">
                25+ interactive science games combining education with engaging gameplay
              </p>
              
              <p className="text-lg text-pink-200 mb-10 max-w-3xl mx-auto">
                Master physics, chemistry, biology, and earth sciences through fun, gamified learning experiences and virtual experiments
              </p>

              {/* Enhanced Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search science games..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full py-4 px-6 pr-20 text-lg text-neutral-800 bg-white/95 backdrop-blur rounded-2xl shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/30 focus:bg-white transition-all duration-300 border border-white/20"
                    data-testid="input-search-science-games"
                  />
                  <div className="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-xl flex items-center pointer-events-none shadow-lg">
                    <Search className="w-5 h-5" aria-hidden="true" />
                  </div>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-6 text-pink-100">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur">
                  <Brain className="w-5 h-5" />
                  <span className="text-sm font-medium">Science Learning</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur">
                  <Zap className="w-5 h-5" />
                  <span className="text-sm font-medium">Virtual Experiments</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur">
                  <Play className="w-5 h-5" />
                  <span className="text-sm font-medium">Play & Discover</span>
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
                  Explore Science Games
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6" data-testid="text-results-count">
                  Showing {filteredTools.length} interactive science games
                  {searchQuery && ` matching "${searchQuery}"`}
                </p>
                {!searchQuery && (
                  <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full font-medium dark:bg-pink-900/50 dark:text-pink-200">Chemistry</span>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-medium dark:bg-red-900/50 dark:text-red-200">Physics</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium dark:bg-blue-900/50 dark:text-blue-200">Biology</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium dark:bg-purple-900/50 dark:text-purple-200">Earth Science</span>
                  </div>
                )}
              </div>

              {/* Games Grid */}
              {filteredTools.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" data-testid="grid-science-games">
                  {filteredTools.map((tool) => (
                    <GameCard key={tool.id} tool={tool} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white dark:bg-neutral-800 rounded-3xl shadow-lg border border-neutral-200 dark:border-neutral-700" data-testid="empty-state-no-tools">
                  <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-3">No science games found</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                    Try adjusting your search query or browse our popular games below.
                  </p>
                  <button className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                    Browse All Games
                  </button>
                </div>
              )}

              {/* Enhanced Popular Games Section */}
              <div className="mt-20 bg-gradient-to-br from-white to-pink-50 dark:from-neutral-800 dark:to-neutral-900 rounded-3xl shadow-xl p-8 border border-neutral-200 dark:border-neutral-700">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Trophy className="w-8 h-8 text-yellow-500" />
                    <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200">Popular Science Games</h2>
                    <Trophy className="w-8 h-8 text-yellow-500" />
                  </div>
                  <p className="text-lg text-neutral-600 dark:text-neutral-400">
                    Start your scientific journey with these engaging discovery games
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center p-8 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/50 dark:to-pink-900/50 rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer group border border-pink-200 dark:border-pink-800">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <Beaker className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-neutral-800 dark:text-neutral-200 mb-2 text-lg">Chemistry Lab</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">Explore chemical reactions through virtual experiments</p>
                  </div>
                  
                  <div className="text-center p-8 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/50 dark:to-red-900/50 rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer group border border-red-200 dark:border-red-800">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <Atom className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-neutral-800 dark:text-neutral-200 mb-2 text-lg">Physics Simulator</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">Simulate physics experiments and discover natural laws</p>
                  </div>
                  
                  <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer group border border-blue-200 dark:border-blue-800">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <Microscope className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-neutral-800 dark:text-neutral-200 mb-2 text-lg">Biology Explorer</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">Test biological knowledge through interactive quizzes</p>
                  </div>
                  
                  <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50 rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer group border border-purple-200 dark:border-purple-800">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <Telescope className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-neutral-800 dark:text-neutral-200 mb-2 text-lg">Astronomy Adventure</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">Explore the solar system and cosmic phenomena</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Why Science Games Section */}
          <section className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-900 relative overflow-hidden">
            {/* Background Gaming Elements */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
              <div className="absolute top-20 left-20">
                <Microscope className="w-12 h-12" />
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
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 dark:text-neutral-200">
                    Why Choose Our Science Games?
                  </h2>
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-red-600 rounded-xl flex items-center justify-center">
                    <Gamepad2 className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed">
                  Experience the perfect blend of education and entertainment with our interactive science games. 
                  Make complex scientific concepts accessible through hands-on virtual experiments and immersive learning experiences.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center group bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <FlaskConical className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Scientific Discovery</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Explore the wonders of science through engaging virtual experiments, hypothesis testing, and interactive discovery processes.
                  </p>
                </div>

                <div className="text-center group bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-r from-rose-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Activity className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Hands-On Learning</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Conduct safe virtual experiments while learning fundamental scientific principles through practical application and observation.
                  </p>
                </div>

                <div className="text-center group bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Zap className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Quick Understanding</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Grasp complex scientific concepts quickly through visual simulations, interactive demonstrations, and gamified learning experiences.
                  </p>
                </div>

                <div className="text-center group bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Target className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Scientific Thinking</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Develop critical thinking and analytical skills essential for scientific reasoning, problem-solving, and evidence-based conclusions.
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