import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'wouter';
import { 
  BookOpen, 
  Search, 
  Type, 
  MessageCircle, 
  Globe, 
  Volume2, 
  Target, 
  Gamepad2,
  PenTool,
  GraduationCap,
  Trophy,
  Zap,
  Brain,
  Play,
  Users,
  Headphones
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GameCard from '@/components/GameCard';
import { tools } from '@/data/tools';
import { searchAndFilterTools } from '@/lib/search';

const LanguageGames = () => {
  const [location] = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTools, setFilteredTools] = useState(tools.filter(tool => tool.category === 'language'));

  // Parse URL parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(location.split('?')[1] || '');
    const searchParam = urlParams.get('search') || '';
    setSearchQuery(searchParam);
  }, [location]);

  // Filter games based on search
  useEffect(() => {
    const filtered = searchAndFilterTools(searchQuery, 'language');
    setFilteredTools(filtered);
  }, [searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Language Games - 32+ Free Language Learning Games | DapsiGames</title>
        <meta name="description" content="Free language games including vocabulary builder, grammar challenge, spelling bee, and 29+ more interactive learning games." />
        <meta name="keywords" content="language games, vocabulary games, grammar games, spelling games, reading comprehension games, educational games" />
        <meta property="og:title" content="Language Games - 32+ Free Language Learning Games | DapsiGames" />
        <meta property="og:description" content="Free language games including vocabulary builder, grammar challenge, and 29+ more educational games." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://dapsigames.com/language-games" />
      </Helmet>

      <div className="min-h-screen flex flex-col" data-testid="page-language-games">
        <Header />

        <main className="flex-1 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-900">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-r from-yellow-600 via-orange-500 to-red-700 text-white py-20 overflow-hidden">
            {/* Gaming Pattern Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10">
                <Gamepad2 className="w-8 h-8" />
              </div>
              <div className="absolute top-20 right-20">
                <PenTool className="w-6 h-6" />
              </div>
              <div className="absolute bottom-16 left-16">
                <BookOpen className="w-7 h-7" />
              </div>
              <div className="absolute bottom-10 right-10">
                <Trophy className="w-8 h-8" />
              </div>
              <div className="absolute top-32 left-1/3">
                <Type className="w-5 h-5" />
              </div>
              <div className="absolute bottom-32 right-1/3">
                <MessageCircle className="w-5 h-5" />
              </div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
              {/* Enhanced Icon Design */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center shadow-lg border border-white/20">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                  <Gamepad2 className="w-8 h-8 text-white" />
                </div>
                <div className="w-18 h-18 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center shadow-lg border border-white/20">
                  <GraduationCap className="w-9 h-9 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="text-page-title">
                <span className="bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
                  Language Games
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-yellow-100 mb-4 max-w-4xl mx-auto leading-relaxed">
                32+ interactive language games combining education with engaging gameplay
              </p>
              
              <p className="text-lg text-yellow-200 mb-10 max-w-3xl mx-auto">
                Master vocabulary, grammar, spelling, and reading comprehension through fun, gamified learning experiences
              </p>

              {/* Enhanced Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search language games..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full py-4 px-6 pr-20 text-lg text-neutral-800 bg-white/95 backdrop-blur rounded-2xl shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/30 focus:bg-white transition-all duration-300 border border-white/20"
                    data-testid="input-search-language-games"
                  />
                  <div className="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-xl flex items-center pointer-events-none shadow-lg">
                    <Search className="w-5 h-5" aria-hidden="true" />
                  </div>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-6 text-yellow-100">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur">
                  <Brain className="w-5 h-5" />
                  <span className="text-sm font-medium">Language Skills</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur">
                  <Zap className="w-5 h-5" />
                  <span className="text-sm font-medium">Instant Feedback</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur">
                  <Play className="w-5 h-5" />
                  <span className="text-sm font-medium">Play & Learn</span>
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
                  Explore Language Games
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6" data-testid="text-results-count">
                  Showing {filteredTools.length} interactive language games
                  {searchQuery && ` matching "${searchQuery}"`}
                </p>
                {!searchQuery && (
                  <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium dark:bg-yellow-900/50 dark:text-yellow-200">Vocabulary</span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-medium dark:bg-orange-900/50 dark:text-orange-200">Grammar</span>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-medium dark:bg-red-900/50 dark:text-red-200">Spelling</span>
                    <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full font-medium dark:bg-pink-900/50 dark:text-pink-200">Reading</span>
                  </div>
                )}
              </div>

              {/* Games Grid */}
              {filteredTools.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" data-testid="grid-language-games">
                  {filteredTools.map((tool) => (
                    <GameCard key={tool.id} tool={tool} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white dark:bg-neutral-800 rounded-3xl shadow-lg border border-neutral-200 dark:border-neutral-700" data-testid="empty-state-no-tools">
                  <div className="w-24 h-24 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-3">No language games found</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                    Try adjusting your search query or browse our popular games below.
                  </p>
                  <button className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                    Browse All Games
                  </button>
                </div>
              )}

              {/* Enhanced Popular Games Section */}
              <div className="mt-20 bg-gradient-to-br from-white to-yellow-50 dark:from-neutral-800 dark:to-neutral-900 rounded-3xl shadow-xl p-8 border border-neutral-200 dark:border-neutral-700">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Trophy className="w-8 h-8 text-yellow-500" />
                    <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200">Popular Language Games</h2>
                    <Trophy className="w-8 h-8 text-yellow-500" />
                  </div>
                  <p className="text-lg text-neutral-600 dark:text-neutral-400">
                    Start your language journey with these fan-favorite games
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center p-8 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950/50 dark:to-yellow-900/50 rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer group border border-yellow-200 dark:border-yellow-800">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <Type className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-neutral-800 dark:text-neutral-200 mb-2 text-lg">Vocabulary Builder</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">Expand your word knowledge with contextual learning</p>
                  </div>
                  
                  <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/50 dark:to-orange-900/50 rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer group border border-orange-200 dark:border-orange-800">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-neutral-800 dark:text-neutral-200 mb-2 text-lg">Grammar Challenge</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">Master grammar rules through interactive practice</p>
                  </div>
                  
                  <div className="text-center p-8 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/50 dark:to-red-900/50 rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer group border border-red-200 dark:border-red-800">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <Volume2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-neutral-800 dark:text-neutral-200 mb-2 text-lg">Spelling Bee</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">Perfect your spelling skills with competitive challenges</p>
                  </div>
                  
                  <div className="text-center p-8 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/50 dark:to-pink-900/50 rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer group border border-pink-200 dark:border-pink-800">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-neutral-800 dark:text-neutral-200 mb-2 text-lg">Reading Comprehension</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">Improve reading skills with engaging stories</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Why Language Games Section */}
          <section className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-900 relative overflow-hidden">
            {/* Background Gaming Elements */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
              <div className="absolute top-20 left-20">
                <PenTool className="w-12 h-12" />
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
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 dark:text-neutral-200">
                    Why Choose Our Language Games?
                  </h2>
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                    <Gamepad2 className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed">
                  Experience the perfect blend of education and entertainment with our interactive language games. 
                  Master vocabulary, grammar, and communication skills through engaging gameplay and immediate feedback.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center group bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <BookOpen className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Vocabulary Growth</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Expand your vocabulary through contextual learning, word associations, and interactive games that make words memorable.
                  </p>
                </div>

                <div className="text-center group bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <MessageCircle className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Grammar Mastery</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Master grammar rules and sentence structure through engaging practice exercises and real-world applications.
                  </p>
                </div>

                <div className="text-center group bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Globe className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Communication Skills</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Develop strong communication abilities through reading comprehension, writing practice, and interactive dialogues.
                  </p>
                </div>

                <div className="text-center group bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Target className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Academic Success</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Build language skills essential for academic achievement, standardized tests, and professional growth.
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

export default LanguageGames;