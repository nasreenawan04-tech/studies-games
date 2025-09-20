import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'wouter';
import { Pen, Search, Type, CheckCircle, Shield, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolCard from '@/components/ToolCard';
import { tools } from '@/data/tools';
import { searchAndFilterTools } from '@/lib/search';

const TextTools = () => {
  const [location] = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTools, setFilteredTools] = useState(tools.filter(tool => tool.category === 'language'));

  // Parse URL parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(location.split('?')[1] || '');
    const searchParam = urlParams.get('search') || '';
    setSearchQuery(searchParam);
  }, [location]);

  // Filter tools based on search
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
        <title>Language Games - 32+ Free Educational Language Games | Study Games Hub</title>
        <meta name="description" content="Free language games including vocabulary builder, spelling bee, grammar challenge, reading comprehension, and 28+ more interactive language learning games. No sign-up required." />
        <meta name="keywords" content="language games, vocabulary games, spelling games, grammar games, reading games, educational language games" />
        <meta property="og:title" content="Language Games - 32+ Free Educational Language Games | Study Games Hub" />
        <meta property="og:description" content="Free language games including vocabulary builder, spelling bee, grammar challenge, and 28+ more interactive language learning games." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://dapsiwow.com/language-games" />
      </Helmet>

      <div className="min-h-screen flex flex-col" data-testid="page-language-games">
        <Header />
        
        <main className="flex-1 bg-neutral-50">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-yellow-600 via-orange-500 to-red-600 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Pen className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="text-page-title">
                Language Games
              </h1>
              <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
                30+ interactive language games to improve vocabulary, grammar, and reading skills
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

          {/* Tools Section */}
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

              {/* Popular Tools Section */}
              <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-neutral-800 mb-6 text-center">Popular Language Games</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-yellow-50 rounded-xl">
                    <Type className="w-6 h-6 text-yellow-600 mb-2 mx-auto" />
                    <h3 className="font-semibold text-neutral-800">Vocabulary Builder</h3>
                    <p className="text-sm text-neutral-600">Expand your vocabulary</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-green-600 mb-2 mx-auto" />
                    <h3 className="font-semibold text-neutral-800">Grammar Challenge</h3>
                    <p className="text-sm text-neutral-600">Test grammar skills</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <Shield className="w-6 h-6 text-blue-600 mb-2 mx-auto" />
                    <h3 className="font-semibold text-neutral-800">Spelling Bee</h3>
                    <p className="text-sm text-neutral-600">Master spelling words</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <FileText className="w-6 h-6 text-purple-600 mb-2 mx-auto" />
                    <h3 className="font-semibold text-neutral-800">Reading Comprehension</h3>
                    <p className="text-sm text-neutral-600">Improve reading skills</p>
                  </div>
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

export default TextTools;