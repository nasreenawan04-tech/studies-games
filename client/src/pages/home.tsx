import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PopularGamesSection from '@/components/PopularGamesSection';
import CategorySection from '@/components/CategorySection';
import WhyChooseSection from '@/components/WhyChooseSection';
import FeaturedGamesSection from '@/components/FeaturedGamesSection';
import Footer from '@/components/Footer';
import FavoritesSection from '@/components/FavoritesSection';
import { Calculator, PenTool, HeartPulse, Zap, Shield, Smartphone, Globe, BookOpen, Brain, FlaskConical, Target, Gamepad2 } from 'lucide-react';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>DapsiGames: 150+ Free Study Games for Learning</title>
        <meta name="description" content="Transform your studying with engaging educational games across math, science, language, memory, and logic. Play 150+ study games designed to make learning fun and effective. No registration required!" />
        <meta name="keywords" content="DapsiGames, study games, educational games, learning games, math games, science games, language games, memory games, logic puzzles, brain training, free study games, educational activities" />
        <meta property="og:title" content="DapsiGames: 150+ Free Study Games for Learning" />
        <meta property="og:description" content="Transform your studying with engaging educational games across math, science, language, memory, and logic. Play 150+ study games designed to make learning fun and effective." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dapsigames.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "DapsiGames",
            "description": "Educational gaming platform offering 150+ free study games across math, science, language, memory, and logic",
            "url": "https://dapsigames.com/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://dapsigames.com/games?search={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "mainEntity": {
              "@type": "ItemList",
              "name": "Study Game Categories",
              "description": "Complete collection of educational games organized by learning subject",
              "numberOfItems": 5,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "CollectionPage",
                    "@id": "https://dapsigames.com/math-games",
                    "name": "Math Games",
                    "description": "Interactive math games covering arithmetic, algebra, geometry, and advanced mathematics",
                    "url": "https://dapsigames.com/math-games"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "CollectionPage",
                    "@id": "https://dapsigames.com/science-games",
                    "name": "Science Games",
                    "description": "Educational science games exploring physics, chemistry, biology, and earth sciences",
                    "url": "https://dapsigames.com/science-games"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "CollectionPage",
                    "@id": "https://dapsigames.com/language-games",
                    "name": "Language Games",
                    "description": "Language learning games for vocabulary, grammar, reading, and writing skills",
                    "url": "https://dapsigames.com/language-games"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "CollectionPage",
                    "@id": "https://dapsigames.com/memory-games",
                    "name": "Memory Games",
                    "description": "Brain training games to improve memory, focus, and cognitive abilities",
                    "url": "https://dapsigames.com/memory-games"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "item": {
                    "@type": "CollectionPage",
                    "@id": "https://dapsigames.com/logic-games",
                    "name": "Logic & Puzzles",
                    "description": "Logic puzzles and brain teasers to develop critical thinking and problem-solving",
                    "url": "https://dapsigames.com/logic-games"
                  }
                }
              ]
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "DapsiGames",
            "url": "https://dapsigames.com/",
            "logo": "https://dapsigames.com/logo.svg",
            "description": "Educational gaming platform offering 150+ free study games across math, science, language, memory training, and logic puzzles designed to make learning engaging and effective.",
            "foundingDate": "2025",
            "slogan": "Learn Through Play - 150+ Free Educational Games",
            "knowsAbout": [
              "Educational Games",
              "Math Learning Games",
              "Science Educational Games",
              "Language Learning Games",
              "Memory Training Games",
              "Logic Puzzles",
              "Brain Training",
              "Study Activities"
            ],
            "sameAs": [
              "https://dapsigames.com/about",
              "https://dapsigames.com/contact"
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Are all 150+ study games really free to play?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Every single game on DapsiGames is completely free with no hidden costs, subscriptions, or premium upgrades. This includes our advanced math games, science simulations, language learning games, memory training exercises, and logic puzzles. We believe educational games should be accessible to all learners."
                }
              },
              {
                "@type": "Question",
                "name": "How do the math games help improve learning?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our math games use proven educational techniques like spaced repetition, progressive difficulty, and immediate feedback to reinforce learning. Games cover arithmetic, algebra, geometry, statistics, and calculus through interactive challenges that make math concepts engaging and memorable."
                }
              },
              {
                "@type": "Question",
                "name": "What science topics are covered in your games?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our science games cover physics experiments, chemistry lab simulations, biology explorations, astronomy adventures, earth science investigations, and environmental studies. Students can safely conduct virtual experiments and explore scientific concepts through hands-on interactive gameplay."
                }
              },
              {
                "@type": "Question",
                "name": "How do language games improve vocabulary and reading skills?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our language games use storytelling, word association, spelling challenges, grammar adventures, and reading comprehension quests to build vocabulary, improve writing skills, and enhance reading fluency. Games adapt to different skill levels and provide personalized learning paths."
                }
              },
              {
                "@type": "Question",
                "name": "Can memory games actually improve cognitive abilities?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Our memory games are based on cognitive science research and include working memory exercises, spatial memory challenges, pattern recognition training, and mnemonic device practice. Regular play can improve focus, attention span, and memory recall abilities."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need to sign up or download anything to play?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No registration, downloads, or installations required! Simply visit any game page and start playing immediately. All games work directly in your web browser on any device. Your progress and achievements remain private since we don't collect personal information or require accounts."
                }
              },
              {
                "@type": "Question",
                "name": "Do the games work on mobile phones and tablets?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! All our study games are mobile-optimized and work seamlessly on smartphones, tablets, laptops, and desktops. The responsive design ensures touch controls work perfectly, games load quickly, and the interface adapts beautifully to any screen size."
                }
              },
              {
                "@type": "Question",
                "name": "Is my learning progress and game data secure?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! All game progress and learning data remain completely private and secure. Games process locally in your browser - we don't store your scores, answers, or personal learning data on our servers. Your educational journey remains private and protected."
                }
              },
              {
                "@type": "Question",
                "name": "Can teachers use these games in classrooms?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! Our educational games are perfect for classroom use, homeschooling, tutoring sessions, and educational institutions. Teachers regularly use our games to supplement lessons, engage students, and provide interactive learning experiences that make studying fun and effective."
                }
              },
              {
                "@type": "Question",
                "name": "How can I request new games or report issues?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Contact us through our support page for help, game requests, or to report issues. We actively listen to educator and student feedback and regularly add new games based on curriculum needs and learning objectives. Our goal is to continuously expand our educational game collection."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col" data-testid="page-home">
        <Header />
        <main className="flex-1">
          <HeroSection />

          {/* User-specific sections - shown if user has favorites */}
          <FavoritesSection />

          {/* About DapsiGames Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Professional Educational Platform
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                  DapsiGames is a comprehensive educational platform offering 150+ interactive learning tools designed to enhance academic performance across multiple subjects. 
                  Our evidence-based approach combines pedagogical best practices with engaging digital experiences to deliver measurable learning outcomes.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Calculator className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Mathematics</h3>
                    <p className="text-gray-600">Comprehensive coverage of arithmetic, algebra, geometry, and advanced mathematical concepts through interactive exercises</p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <FlaskConical className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Science</h3>
                    <p className="text-gray-600">Virtual laboratories and simulations covering physics, chemistry, biology, and earth sciences</p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                      <BookOpen className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Language Arts</h3>
                    <p className="text-gray-600">Vocabulary development, grammar instruction, and reading comprehension exercises</p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Brain className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Cognitive Training</h3>
                    <p className="text-gray-600">Memory enhancement, attention training, and cognitive skill development programs</p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Critical Thinking</h3>
                    <p className="text-gray-600">Logic puzzles, problem-solving exercises, and analytical reasoning challenges</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <PopularGamesSection />
          <CategorySection />
          
          <WhyChooseSection />
          
          <FeaturedGamesSection />

          {/* How It Works Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  How Our Platform Works
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Get started with our comprehensive educational platform in three simple steps. No registration required, immediate access to all learning resources.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                <div className="text-center">
                  <div className="relative">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <span className="text-2xl font-bold text-white">1</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Choose Your Subject</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Browse our comprehensive library of educational content organized by subject area.
                    Select from mathematics, science, language arts, cognitive training, or critical thinking modules.
                  </p>
                </div>

                <div className="text-center">
                  <div className="relative">
                    <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <span className="text-2xl font-bold text-white">2</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Begin Learning</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Access interactive learning tools with intuitive interfaces designed for optimal user experience.
                    All resources load instantly in your browser with no downloads or installations required.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Track Progress</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Monitor your learning progress with built-in analytics and performance tracking.
                    Advance through difficulty levels and unlock new content as you master each concept.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Trust & Reliability Section - Gaming Style */}
          <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden" data-testid="section-trust">
            {/* Gaming background patterns */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 border-2 border-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute top-32 right-20 w-24 h-24 border-2 border-purple-400 rounded-lg rotate-45 animate-bounce"></div>
              <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-green-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-32 right-1/3 w-20 h-20 border-2 border-yellow-400 rounded-lg animate-spin"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-bold text-sm mb-4 animate-pulse">
                  🎮 ACHIEVEMENT UNLOCKED 🎮
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                  Trusted by Learners Worldwide
                </h2>
                <p className="text-xl text-cyan-100 max-w-4xl mx-auto leading-relaxed">
                  Join millions of study-gamers in the ultimate learning arena! Students, teachers, and knowledge hunters 
                  have unlocked epic achievements with our legendary educational game collection. Level up your brain, 
                  collect XP points, and dominate the leaderboards in the most addictive study games ever created! 🚀
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 lg:p-8 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 border-2 border-cyan-500/30 group hover:border-cyan-400 relative overflow-hidden" data-testid="stat-players">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/50">
                    <Gamepad2 className="text-white" size={24} />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent mb-2">2.5M+</div>
                    <div className="text-cyan-100 font-semibold text-lg mb-1">Active Players</div>
                    <div className="text-sm text-cyan-300">Gaming & learning daily</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 lg:p-8 shadow-2xl hover:shadow-green-500/25 transition-all duration-300 border-2 border-green-500/30 group hover:border-green-400 relative overflow-hidden" data-testid="stat-achievements">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/20 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/50">
                    <Target className="text-white" size={24} />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent mb-2">150M+</div>
                    <div className="text-green-100 font-semibold text-lg mb-1">XP Points Earned</div>
                    <div className="text-sm text-green-300">Knowledge achievements unlocked</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 lg:p-8 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 border-2 border-purple-500/30 group hover:border-purple-400 relative overflow-hidden" data-testid="stat-sessions">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/50">
                    <Brain className="text-white" size={24} />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent mb-2">50M+</div>
                    <div className="text-purple-100 font-semibold text-lg mb-1">Study Sessions</div>
                    <div className="text-sm text-purple-300">Epic learning adventures</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 lg:p-8 shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 border-2 border-yellow-500/30 group hover:border-yellow-400 relative overflow-hidden" data-testid="stat-highscores">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-500/50">
                    <Zap className="text-white" size={24} />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent mb-2">∞</div>
                    <div className="text-yellow-100 font-semibold text-lg mb-1">High Scores</div>
                    <div className="text-sm text-yellow-300">Beat your personal best!</div>
                  </div>
                </div>
              </div>

              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white font-bold text-sm mb-4">
                  ⭐ PLAYER CLASSES ⭐
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                  Choose Your Learning Class
                </h3>
                <p className="text-lg text-purple-100 max-w-4xl mx-auto leading-relaxed">
                  Our study gaming platform attracts players of all levels who want to turn boring lessons into epic adventures. 
                  Pick your player class and start your educational quest! 🎯
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-8 lg:p-12 shadow-2xl border-2 border-purple-500/30 backdrop-blur-sm">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-blue-600/20 to-blue-500/20 border-2 border-blue-400/40 hover:border-blue-400 transition-all duration-300 group" data-testid="use-case-math">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/50 group-hover:scale-110 transition-transform duration-300">
                          <BookOpen className="text-white" size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-blue-300 mb-2 flex items-center gap-2">
                            📊 Math Wizards
                            <span className="text-xs bg-blue-500/30 px-2 py-1 rounded-full">LVL 50+</span>
                          </h4>
                          <p className="text-blue-100 text-sm leading-relaxed">
                            Cast spells with numbers! Master arithmetic, algebra, geometry through epic mathematical quests and number-crunching adventures.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-pink-600/20 to-pink-500/20 border-2 border-pink-400/40 hover:border-pink-400 transition-all duration-300 group" data-testid="use-case-science">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-pink-500/50 group-hover:scale-110 transition-transform duration-300">
                          <FlaskConical className="text-white" size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-pink-300 mb-2 flex items-center gap-2">
                            🧪 Science Alchemists
                            <span className="text-xs bg-pink-500/30 px-2 py-1 rounded-full">LVL 40+</span>
                          </h4>
                          <p className="text-pink-100 text-sm leading-relaxed">
                            Brew knowledge potions! Conduct virtual experiments in physics, chemistry, and biology labs without the mess!
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-purple-600/20 to-purple-500/20 border-2 border-purple-400/40 hover:border-purple-400 transition-all duration-300 group" data-testid="use-case-language">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/50 group-hover:scale-110 transition-transform duration-300">
                          <PenTool className="text-white" size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
                            📝 Word Warriors
                            <span className="text-xs bg-purple-500/30 px-2 py-1 rounded-full">LVL 35+</span>
                          </h4>
                          <p className="text-purple-100 text-sm leading-relaxed">
                            Wield the power of language! Battle through vocabulary dungeons, grammar quests, and reading comprehension raids.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-green-600/20 to-green-500/20 border-2 border-green-400/40 hover:border-green-400 transition-all duration-300 group" data-testid="use-case-memory">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/50 group-hover:scale-110 transition-transform duration-300">
                          <Brain className="text-white" size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-green-300 mb-2 flex items-center gap-2">
                            🧠 Memory Ninjas
                            <span className="text-xs bg-green-500/30 px-2 py-1 rounded-full">LVL 60+</span>
                          </h4>
                          <p className="text-green-100 text-sm leading-relaxed">
                            Train your mental dojo! Level up focus, memory recall, and cognitive abilities through brain-training challenges.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-cyan-600/20 to-purple-600/20 rounded-2xl p-8 border-2 border-cyan-400/40 backdrop-blur-sm">
                      <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-bold text-xs mb-3 animate-pulse">
                          🚀 READY TO PLAY? 🚀
                        </div>
                        <h4 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent mb-4">
                          Start Your Quest Today!
                        </h4>
                        <p className="text-cyan-100 mb-6 leading-relaxed">
                          Join millions of study-gamers in the ultimate learning arena! 
                          No tutorials, no downloads, no subscriptions - just pure educational gaming!
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                        <a
                          href="/math-games"
                          className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-cyan-700 transition-all duration-200 shadow-lg shadow-cyan-500/50 text-center hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                          data-testid="link-math-games"
                        >
                          🧮 Math Wizard Quest
                        </a>
                        <a
                          href="/science-games"
                          className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-200 shadow-lg shadow-pink-500/50 text-center hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                          data-testid="link-science-games"
                        >
                          🧪 Science Alchemy
                        </a>
                        <a
                          href="/leaderboard"
                          className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 shadow-lg shadow-yellow-500/50 text-center hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                          data-testid="link-leaderboard"
                        >
                          🏆 View Leaderboard
                        </a>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-cyan-200">
                          Or explore all <a href="/games" className="text-yellow-300 hover:text-yellow-200 underline font-semibold glow">150+ epic educational adventures</a> ⚔️
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-4 shadow-lg border-2 border-yellow-400/30">
                        <h5 className="font-bold text-yellow-300 mb-3 text-center flex items-center justify-center gap-2">
                          ⚡ Gaming Features ⚡
                        </h5>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div className="flex flex-col items-center space-y-2" data-testid="gaming-feature-engaging">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/50">
                              <Gamepad2 className="text-white" size={20} />
                            </div>
                            <span className="text-xs font-medium text-green-300">Epic Games</span>
                          </div>
                          <div className="flex flex-col items-center space-y-2" data-testid="gaming-feature-instant">
                            <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg shadow-yellow-500/50">
                              <Zap className="text-white" size={20} />
                            </div>
                            <span className="text-xs font-medium text-yellow-300">Instant Quest</span>
                          </div>
                          <div className="flex flex-col items-center space-y-2" data-testid="gaming-feature-crossplatform">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/50">
                              <Smartphone className="text-white" size={20} />
                            </div>
                            <span className="text-xs font-medium text-purple-300">All Devices</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Comprehensive FAQ Section - Gaming Style */}
          <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 relative overflow-hidden">
            {/* Gaming background elements */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-20 left-16 w-40 h-40 border-2 border-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute top-40 right-32 w-28 h-28 border-2 border-purple-400 rounded-lg rotate-12 animate-bounce"></div>
              <div className="absolute bottom-32 left-1/3 w-20 h-20 border-2 border-green-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-48 right-1/4 w-24 h-24 border-2 border-yellow-400 rounded-lg animate-spin"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-bold text-sm mb-4 animate-pulse">
                  🎯 GAME GUIDE 🎯
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                  Player's Knowledge Base
                </h2>
                <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                  Level up your understanding! Everything you need to dominate DapsiGames' epic educational quests 🚀
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 shadow-2xl border-2 border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 group" data-testid="faq-free-games">
                    <h3 className="text-lg font-semibold text-cyan-300 mb-3 flex items-center gap-2">
                      💎 Are all 150+ study games really FREE to unlock?
                      <span className="text-xs bg-green-500/30 px-2 py-1 rounded-full text-green-300">FREE TIER</span>
                    </h3>
                    <p className="text-cyan-100 leading-relaxed">
                      Absolutely! Every single educational quest on DapsiGames is completely FREE with zero microtransactions, no premium DLC, or hidden paywalls.
                      This includes our legendary math wizardry, epic science experiments, word warrior adventures, brain-training challenges, and logic puzzle dungeons.
                      We believe all players deserve access to legendary learning content! 🎮
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 shadow-2xl border-2 border-blue-500/30 hover:border-blue-400 transition-all duration-300 group" data-testid="faq-math-power">
                    <h3 className="text-lg font-semibold text-blue-300 mb-3 flex items-center gap-2">
                      🧮 How do math games boost my learning XP?
                      <span className="text-xs bg-blue-500/30 px-2 py-1 rounded-full text-blue-300">SKILL TREE</span>
                    </h3>
                    <p className="text-blue-100 leading-relaxed">
                      Our <a href="/math-games" className="text-yellow-300 hover:text-yellow-200 underline font-semibold">math wizard quests</a> use proven leveling techniques like XP multipliers, progressive difficulty scaling, and instant feedback rewards to maximize learning gains.
                      Battle through arithmetic dungeons, algebra campaigns, geometry realms, and calculus boss fights that make number-crunching feel epic! Level up with <a href="/math-games" className="text-yellow-300 hover:text-yellow-200 underline font-semibold">math adventures</a>. ⚔️
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 shadow-2xl border-2 border-pink-500/30 hover:border-pink-400 transition-all duration-300 group" data-testid="faq-science-lab">
                    <h3 className="text-lg font-semibold text-pink-300 mb-3 flex items-center gap-2">
                      🧪 What makes science games so addictive?
                      <span className="text-xs bg-pink-500/30 px-2 py-1 rounded-full text-pink-300">LAB MODE</span>
                    </h3>
                    <p className="text-pink-100 leading-relaxed">
                      Our <a href="/science-games" className="text-yellow-300 hover:text-yellow-200 underline font-semibold">science laboratory adventures</a> feature explosive physics simulations, chemistry brewing minigames, biology exploration quests, space exploration campaigns, and environmental puzzle challenges.
                      Conduct virtual experiments safely without real-world consequences - perfect for mad scientist gameplay! Discover <a href="/science-games" className="text-yellow-300 hover:text-yellow-200 underline font-semibold">science quests</a>. 🔬
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 shadow-2xl border-2 border-purple-500/30 hover:border-purple-400 transition-all duration-300 group" data-testid="faq-word-warrior">
                    <h3 className="text-lg font-semibold text-purple-300 mb-3 flex items-center gap-2">
                      📝 How do word games level up my vocabulary?
                      <span className="text-xs bg-purple-500/30 px-2 py-1 rounded-full text-purple-300">WORD POWER</span>
                    </h3>
                    <p className="text-purple-100 leading-relaxed">
                      Master the <a href="/language-games" className="text-yellow-300 hover:text-yellow-200 underline font-semibold">word warrior arts</a> through storytelling RPGs, spell-checking battles, grammar boss fights, and reading comprehension raids that unlock vocabulary achievements and writing skill bonuses.
                      All <a href="/language-games" className="text-yellow-300 hover:text-yellow-200 underline font-semibold">language adventures</a> feature adaptive difficulty and personalized learning paths! 📚
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 shadow-2xl border-2 border-green-500/30 hover:border-green-400 transition-all duration-300 group" data-testid="faq-brain-training">
                    <h3 className="text-lg font-semibold text-green-300 mb-3 flex items-center gap-2">
                      🧠 Can memory games actually buff my brain stats?
                      <span className="text-xs bg-green-500/30 px-2 py-1 rounded-full text-green-300">BRAIN BOOST</span>
                    </h3>
                    <p className="text-green-100 leading-relaxed">
                      Our <a href="/memory-games" className="text-yellow-300 hover:text-yellow-200 underline font-semibold">memory ninja training</a> is based on cognitive science research featuring working memory challenges, spatial memory trials, pattern recognition tournaments, and mnemonic device mastery.
                      Regular gameplay sessions can permanently boost your focus stats, attention span buffs, and memory recall abilities! Train with <a href="/memory-games" className="text-yellow-300 hover:text-yellow-200 underline font-semibold">brain games</a>. 🥷
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 shadow-2xl border-2 border-orange-500/30 hover:border-orange-400 transition-all duration-300 group" data-testid="faq-instant-play">
                    <h3 className="text-lg font-semibold text-orange-300 mb-3 flex items-center gap-2">
                      🚀 Do I need to create an account or download game files?
                      <span className="text-xs bg-orange-500/30 px-2 py-1 rounded-full text-orange-300">INSTANT PLAY</span>
                    </h3>
                    <p className="text-orange-100 leading-relaxed">
                      Zero setup required! No account creation, no downloads, no installations - just hit "Play" and jump straight into the action!
                      All educational quests run directly in your browser on any device. Your anonymity is protected since we don't track personal data or require player profiles.
                      It's like arcade gaming - just pick up and play! 🎮
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 shadow-2xl border-2 border-teal-500/30 hover:border-teal-400 transition-all duration-300 group" data-testid="faq-cross-platform">
                    <h3 className="text-lg font-semibold text-teal-300 mb-3 flex items-center gap-2">
                      📱 Are the games compatible with mobile devices?
                      <span className="text-xs bg-teal-500/30 px-2 py-1 rounded-full text-teal-300">CROSS-PLATFORM</span>
                    </h3>
                    <p className="text-teal-100 leading-relaxed">
                      Full cross-platform compatibility! Our educational adventures work flawlessly on smartphones, tablets, laptops, and desktop PCs.
                      The responsive interface automatically adapts to your screen - touch controls feel natural, buttons are perfectly sized, and gameplay remains smooth across all devices.
                      Play at home, school, or on-the-go! 📲
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 shadow-2xl border-2 border-yellow-500/30 hover:border-yellow-400 transition-all duration-300 group" data-testid="faq-save-system">
                    <h3 className="text-lg font-semibold text-yellow-300 mb-3 flex items-center gap-2">
                      🛡️ Is my progress and game data secure?
                      <span className="text-xs bg-yellow-500/30 px-2 py-1 rounded-full text-yellow-300">SECURE SAVE</span>
                    </h3>
                    <p className="text-yellow-100 leading-relaxed">
                      Your game saves are completely secure! All progress, scores, and learning achievements are stored locally in your browser - we never upload your personal gameplay data to our servers.
                      Your educational journey stays 100% private and protected. Check our <a href="/privacy-policy" className="text-cyan-300 hover:text-cyan-200 underline font-semibold">Privacy Shield Policy</a> for technical details. 🔒
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 shadow-2xl border-2 border-indigo-500/30 hover:border-indigo-400 transition-all duration-300 group" data-testid="faq-classroom-guild">
                    <h3 className="text-lg font-semibold text-indigo-300 mb-3 flex items-center gap-2">
                      🎓 Can teachers use these games in classroom guilds?
                      <span className="text-xs bg-indigo-500/30 px-2 py-1 rounded-full text-indigo-300">GUILD MODE</span>
                    </h3>
                    <p className="text-indigo-100 leading-relaxed">
                      Perfect for educational guilds! Our learning adventures are ideal for classroom campaigns, homeschool quests, tutoring parties, and educational institutions.
                      Teachers regularly deploy our games as lesson supplements, student engagement missions, and interactive learning experiences that transform boring study sessions into epic adventures! 🏫
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 shadow-2xl border-2 border-red-500/30 hover:border-red-400 transition-all duration-300 group" data-testid="faq-game-requests">
                    <h3 className="text-lg font-semibold text-red-300 mb-3 flex items-center gap-2">
                      💬 How can I request new quests or report bugs?
                      <span className="text-xs bg-red-500/30 px-2 py-1 rounded-full text-red-300">SUPPORT GUILD</span>
                    </h3>
                    <p className="text-red-100 leading-relaxed">
                      Join our Support Guild through the help center for game requests, bug reports, or technical assistance! We actively monitor player feedback and regularly release new educational content based on community demand.
                      Our mission is to continuously expand and improve our learning game universe to meet every player's educational goals! 🎯
                    </p>
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

export default Home;