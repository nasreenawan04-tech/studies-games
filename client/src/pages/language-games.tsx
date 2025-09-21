
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'wouter';
import { BookOpen, Search, Type, MessageCircle, Globe, Volume2, Target, Gamepad2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolCard from '@/components/ToolCard';
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

        <main className="flex-1 bg-neutral-50">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <BookOpen className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="text-page-title">
                Language Games
              </h1>
              <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
                32+ interactive language games covering vocabulary, grammar, reading, and communication skills
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search language games..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full py-4 px-6 pr-16 text-lg text-neutral-800 bg-white rounded-2xl shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-200 transition-all duration-200"
                    data-testid="input-search-language-games"
                  />
                  <div className="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-xl flex items-center pointer-events-none">
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
                  Showing {filteredTools.length} language games
                  {searchQuery && ` matching "${searchQuery}"`}
                </p>
              </div>

              {/* Games Grid */}
              {filteredTools.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="grid-language-games">
                  {filteredTools.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16" data-testid="empty-state-no-tools">
                  <Search className="w-16 h-16 text-neutral-300 mb-4 mx-auto" />
                  <h3 className="text-2xl font-bold text-neutral-600 mb-2">No language games found</h3>
                  <p className="text-neutral-500">
                    Try adjusting your search query.
                  </p>
                </div>
              )}

              {/* Popular Games Section */}
              <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-neutral-800 mb-8 text-center">Popular Language Games</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-yellow-50 rounded-xl hover:bg-yellow-100 transition-colors cursor-pointer group">
                    <Type className="w-8 h-8 text-yellow-600 mb-3 mx-auto group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-neutral-800 mb-2">Vocabulary Builder</h3>
                    <p className="text-sm text-neutral-600">Expand your word knowledge</p>
                  </div>
                  <div className="text-center p-6 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors cursor-pointer group">
                    <MessageCircle className="w-8 h-8 text-orange-600 mb-3 mx-auto group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-neutral-800 mb-2">Grammar Challenge</h3>
                    <p className="text-sm text-neutral-600">Master grammar rules</p>
                  </div>
                  <div className="text-center p-6 bg-red-50 rounded-xl hover:bg-red-100 transition-colors cursor-pointer group">
                    <Volume2 className="w-8 h-8 text-red-600 mb-3 mx-auto group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-neutral-800 mb-2">Spelling Bee</h3>
                    <p className="text-sm text-neutral-600">Perfect your spelling skills</p>
                  </div>
                  <div className="text-center p-6 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors cursor-pointer group">
                    <BookOpen className="w-8 h-8 text-pink-600 mb-3 mx-auto group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-neutral-800 mb-2">Reading Comprehension</h3>
                    <p className="text-sm text-neutral-600">Improve reading skills</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Language Games Section */}
          <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-6">
                  Why Play Our Language Games?
                </h2>
                <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                  Our interactive language games make learning vocabulary, grammar, and communication skills 
                  engaging and effective through gamified experiences and immediate feedback.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform shadow-lg">
                    <BookOpen className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Vocabulary Growth</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Expand your vocabulary through contextual learning and interactive word games.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform shadow-lg">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Grammar Mastery</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Master grammar rules and sentence structure through engaging practice exercises.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform shadow-lg">
                    <Globe className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Communication Skills</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Develop strong communication abilities through reading and writing practice.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform shadow-lg">
                    <Target className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Academic Success</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Build language skills essential for academic achievement and professional growth.
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
