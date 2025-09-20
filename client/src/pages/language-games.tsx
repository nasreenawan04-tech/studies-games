
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolCard from '@/components/ToolCard';
import { getToolsByCategory } from '@/data/tools';
import { searchAndFilterTools } from '@/lib/search';
import { Search, BookOpen, PenTool, Mic, Globe, Target, Brain, Gamepad2, TrendingUp } from 'lucide-react';

const LanguageGames = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const languageGames = getToolsByCategory('language');
  const filteredGames = searchQuery ? searchAndFilterTools(searchQuery, 'language') : languageGames;

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
        <link rel="canonical" href="https://dapsiwow.com/language-games" />
      </Helmet>

      <div className="min-h-screen flex flex-col" data-testid="page-language-games">
        <Header />
        
        <main className="flex-1 bg-neutral-50">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <BookOpen className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-page-title">
                Language Games
              </h1>
              <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
                32+ interactive language games for vocabulary, grammar, reading, and writing skills
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search language games..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full py-4 px-6 pr-16 text-lg text-neutral-800 bg-white rounded-2xl shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-200 transition-all duration-200"
                    data-testid="input-search-language-games"
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
                  {searchQuery ? `Search Results (${filteredGames.length})` : `All Language Games (${languageGames.length})`}
                </h2>
                <p className="text-neutral-600">
                  {searchQuery 
                    ? `Games matching "${searchQuery}"`
                    : 'Improve vocabulary, grammar, and communication skills through engaging gameplay'
                  }
                </p>
              </div>

              {filteredGames.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="grid-language-games">
                  {filteredGames.map((game) => (
                    <ToolCard key={game.id} tool={game} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <BookOpen className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-neutral-600 mb-2">No language games found</h3>
                  <p className="text-neutral-500">Try adjusting your search terms</p>
                </div>
              )}

              {/* Popular Games Section */}
              <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-neutral-800 mb-6 text-center">Popular Language Games</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-yellow-50 rounded-xl">
                    <BookOpen className="w-6 h-6 text-yellow-600 mb-2 mx-auto" />
                    <h3 className="font-semibold text-neutral-800">Vocabulary Builder</h3>
                    <p className="text-sm text-neutral-600">Learn new words</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-xl">
                    <PenTool className="w-6 h-6 text-yellow-600 mb-2 mx-auto" />
                    <h3 className="font-semibold text-neutral-800">Grammar Challenge</h3>
                    <p className="text-sm text-neutral-600">Master grammar rules</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-xl">
                    <Mic className="w-6 h-6 text-yellow-600 mb-2 mx-auto" />
                    <h3 className="font-semibold text-neutral-800">Spelling Bee</h3>
                    <p className="text-sm text-neutral-600">Improve spelling skills</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-xl">
                    <Globe className="w-6 h-6 text-yellow-600 mb-2 mx-auto" />
                    <h3 className="font-semibold text-neutral-800">Reading Quest</h3>
                    <p className="text-sm text-neutral-600">Comprehension skills</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-neutral-800 mb-4">Master Language Skills</h2>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                  Develop stronger communication abilities through interactive language learning games
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Expand Vocabulary</h3>
                  <p className="text-neutral-600">
                    Learn thousands of new words through context-based games and spaced repetition.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <PenTool className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Perfect Grammar</h3>
                  <p className="text-neutral-600">
                    Master grammar rules through interactive exercises and real-world examples.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Brain className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Improve Reading</h3>
                  <p className="text-neutral-600">
                    Enhance reading comprehension and speed through engaging story-based challenges.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Target className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">Track Progress</h3>
                  <p className="text-neutral-600">
                    Monitor your language learning journey with detailed progress analytics.
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
