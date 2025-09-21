
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, PlayCircle, Calculator, FileText, Settings, Shield, Briefcase, Flame, HelpCircle, Mail, Lightbulb, Monitor, Smartphone } from 'lucide-react';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const helpCategories = [
    {
      id: 'getting-started',
      name: 'Getting Started',
      icon: 'PlayCircle',
      color: 'from-secondary to-secondary/90',
      description: 'New to DapsiGames? Start here to learn the basics'
    },
    {
      id: 'math-games',
      name: 'Math Games',
      icon: 'Calculator',
      color: 'from-green-500 to-green-600',
      description: 'Help with math games and arithmetic challenges'
    },
    {
      id: 'study-games',
      name: 'Study Games',
      icon: 'FileText',
      color: 'from-primary to-primary/90',
      description: 'Science, language, memory, and logic games'
    },
    {
      id: 'technical',
      name: 'Technical Support',
      icon: 'Settings',
      color: 'from-purple-500 to-purple-600',
      description: 'Technical issues and troubleshooting'
    },
    {
      id: 'account',
      name: 'Account & Privacy',
      icon: 'Shield',
      color: 'from-indigo-500 to-indigo-600',
      description: 'Privacy, security, and account questions'
    },
    {
      id: 'business',
      name: 'Educators & Classrooms',
      icon: 'Briefcase',
      color: 'from-orange-500 to-orange-600',
      description: 'Using DapsiGames in educational settings'
    }
  ];

  // Icon component mapping
  const iconComponents = {
    PlayCircle,
    Calculator,
    FileText,
    Settings,
    Shield,
    Briefcase
  };

  const renderIcon = (iconName: string) => {
    const IconComponent = iconComponents[iconName as keyof typeof iconComponents];
    return IconComponent ? <IconComponent size={24} aria-hidden="true" style={{ pointerEvents: 'none' }} /> : null;
  };

  const faqs = [
    {
      question: "How do I get started with DapsiGames?",
      answer: "Simply visit our homepage and start playing any of our 150+ educational games immediately. No registration or downloads required - just click on any game and begin learning!",
      category: 'getting-started'
    },
    {
      question: "Are all games completely free to use?",
      answer: "Yes! All 150+ educational games on DapsiGames are completely free with no hidden costs, subscriptions, or premium tiers. We believe quality education should be accessible to everyone.",
      category: 'getting-started'
    },
    {
      question: "Do I need to create an account?",
      answer: "No account creation is necessary. All games are accessible immediately without any registration process. This helps protect your privacy and saves you time.",
      category: 'account'
    },
    {
      question: "How educational are the math games?",
      answer: "Our math games are designed by educational experts and aligned with curriculum standards. They provide engaging practice for arithmetic, algebra, geometry, and problem-solving skills across all grade levels.",
      category: 'math-games'
    },
    {
      question: "What subjects are covered in the study games?",
      answer: "We cover all major academic subjects including math, science, language arts, memory training, and logic puzzles. Each game is designed for specific learning objectives and skill levels.",
      category: 'study-games'
    },
    {
      question: "Is my data safe and private?",
      answer: "Absolutely! Most games process data locally in your browser. We don't store your files or personal information, and all processing is done securely on your device.",
      category: 'account'
    },
    {
      question: "Can I use these games in my classroom?",
      answer: "Yes! You can use all our educational games in classrooms, tutoring sessions, and educational projects without any restrictions or additional licensing fees.",
      category: 'business'
    },
    {
      question: "Why is a game not working properly?",
      answer: "Try refreshing the page, checking your internet connection, or using a different browser. If problems persist, contact our support team with details about your issue.",
      category: 'technical'
    },
    {
      question: "Are the games mobile-friendly?",
      answer: "Yes! All our educational games are designed with responsive interfaces that work seamlessly on desktop, tablet, and mobile devices.",
      category: 'technical'
    },
    {
      question: "How often are new games added?",
      answer: "We regularly update our collection with new educational games based on user feedback, curriculum needs, and educational trends. Follow us for updates on new releases!",
      category: 'getting-started'
    }
  ];

  const popularTopics = [
    { title: "How to start with math games", category: "math-games", views: "15.2k" },
    { title: "Using memory training games", category: "study-games", views: "12.8k" },
    { title: "Privacy and Data Security", category: "account", views: "9.4k" },
    { title: "Classroom Use Guidelines", category: "business", views: "7.1k" },
    { title: "Troubleshooting Common Issues", category: "technical", views: "6.9k" }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Help Center - DapsiGames Support & FAQ</title>
        <meta name="description" content="Get comprehensive support for DapsiGames' 150+ free educational games. Find answers, tutorials, and expert help for all your learning needs." />
        <meta name="keywords" content="help center, FAQ, support, dapsigames help, study games support, tutorials, guides" />
        <meta property="og:title" content="Help Center - DapsiGames Support & FAQ" />
        <meta property="og:description" content="Get comprehensive support for DapsiGames' free educational games and find answers to all your questions." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/help" />
      </Helmet>

      <div className="min-h-screen flex flex-col" data-testid="page-help-center">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-secondary/10 via-secondary/20 to-accent/20 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-5xl lg:text-6xl font-bold text-neutral-800 mb-6" data-testid="text-page-title">
                  How can we <span className="text-secondary">help</span> you?
                </h1>
                <p className="text-xl lg:text-2xl text-neutral-600 mb-10 max-w-4xl mx-auto leading-relaxed">
                  Get instant support for all 150+ educational games, find detailed guides, and discover tips to make the most of DapsiGames
                </p>
                
                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mb-12">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search for help topics, games, or questions..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-6 py-4 pl-14 text-neutral-800 bg-white rounded-2xl shadow-lg focus:outline-none focus:ring-4 focus:ring-secondary/30 focus:ring-opacity-50 text-lg"
                      data-testid="input-search-help"
                    />
                    <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">24/7</div>
                    <div className="text-neutral-600 font-medium">Support Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-accent-foreground mb-2">1000+</div>
                    <div className="text-neutral-600 font-medium">Help Articles</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">150+</div>
                    <div className="text-neutral-600 font-medium">Games Covered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">99.9%</div>
                    <div className="text-neutral-600 font-medium">Problem Resolved</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Help Categories */}
          <section className="py-20 bg-gradient-to-br from-secondary/10 to-accent/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
                  Browse by Category
                </h2>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                  Find help for specific game categories and common use cases
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {helpCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-left group ${
                      activeCategory === category.id ? 'ring-4 ring-secondary ring-opacity-50' : ''
                    }`}
                    data-testid={`button-category-${category.id}`}
                  >
                    <div className={`w-16 h-16 ${category.color.includes('secondary') ? 'bg-[#F59E0B]' : category.color.includes('green') ? 'bg-[#22C55E]' : category.color.includes('primary') ? 'bg-[#2563EB]' : category.color.includes('purple') ? 'bg-[#6B7280]' : category.color.includes('indigo') ? 'bg-[#6B7280]' : 'bg-[#F59E0B]'} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">{renderIcon(category.icon)}</div>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-800 mb-3">{category.name}</h3>
                    <p className="text-neutral-600 leading-relaxed">{category.description}</p>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Popular Topics */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-3 gap-16">
                {/* Popular Topics */}
                <div className="lg:col-span-1">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-neutral-800 mb-6 flex items-center">
                      <Flame className="text-[#F59E0B] mr-3" size={24} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                      Popular Topics
                    </h3>
                    <div className="space-y-4">
                      {popularTopics.map((topic, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveCategory(topic.category)}
                          className="w-full text-left p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200"
                          data-testid={`button-topic-${index}`}
                        >
                          <div className="flex justify-between items-center">
                            <h4 className="font-semibold text-neutral-800">{topic.title}</h4>
                            <span className="text-sm text-neutral-500">{topic.views}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="lg:col-span-2">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-3xl font-bold text-neutral-800">
                      {activeCategory === 'all' ? 'All Questions' : helpCategories.find(c => c.id === activeCategory)?.name || 'Questions'}
                    </h3>
                    <button
                      onClick={() => setActiveCategory('all')}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeCategory === 'all' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                      data-testid="button-show-all"
                    >
                      Show All
                    </button>
                  </div>

                  <div className="space-y-4">
                    {filteredFAQs.length > 0 ? (
                      filteredFAQs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 hover:shadow-md transition-shadow duration-200">
                          <h4 className="text-lg font-semibold text-neutral-800 mb-3 flex items-start">
                            <HelpCircle className="text-[#2563EB] mr-3 mt-1 flex-shrink-0" size={20} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                            {faq.question}
                          </h4>
                          <p className="text-neutral-600 leading-relaxed ml-8">
                            {faq.answer}
                          </p>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-12 text-neutral-500">
                        <Search className="mx-auto mb-4" size={48} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                        <p className="text-lg">No questions found matching your search.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Support */}
          <section className="py-20 bg-gradient-to-br from-blue-50 via-yellow-50 to-blue-100 text-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">Still need help?</h2>
                <p className="text-xl text-gray-700 mb-10">
                  Can't find what you're looking for? Our dedicated support team is here to help you learn and succeed with DapsiGames.
                </p>
                
                <div className="mb-12">
                  <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-md max-w-2xl mx-auto">
                    <Mail className="text-[#2563EB] mb-4 mx-auto" size={48} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Email Support</h3>
                    <p className="text-gray-600 mb-6">Get detailed help via email within 24 hours</p>
                    <a 
                      href="/contact" 
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
                      data-testid="button-email-support"
                    >
                      <Mail className="mr-2" size={16} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                      Send Message
                    </a>
                  </div>
                </div>

                <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-md">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Quick Tips</h3>
                  <div className="grid md:grid-cols-3 gap-6 text-left">
                    <div className="flex items-start space-x-3">
                      <Lightbulb className="text-[#F59E0B] mt-1 flex-shrink-0" size={20} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                      <div>
                        <h4 className="font-semibold text-gray-800">Try refreshing</h4>
                        <p className="text-sm text-gray-600">Most issues resolve with a simple page refresh</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Monitor className="text-[#2563EB] mt-1 flex-shrink-0" size={20} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                      <div>
                        <h4 className="font-semibold text-gray-800">Clear cache</h4>
                        <p className="text-sm text-gray-600">Clear browser cache if tools aren't loading</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Smartphone className="text-[#22C55E] mt-1 flex-shrink-0" size={20} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                      <div>
                        <h4 className="font-semibold text-gray-800">Try mobile</h4>
                        <p className="text-sm text-gray-600">All tools work great on mobile devices</p>
                      </div>
                    </div>
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

export default HelpCenter;
