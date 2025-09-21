import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PopularGamesSection from '@/components/PopularGamesSection';
import CategorySection from '@/components/CategorySection';
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

          {/* What is DapsiGames Section */}
          <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
                  What is DapsiGames Study Hub?
                </h2>
                <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed mb-8">
                  DapsiGames is your ultimate study games platform featuring 150+ engaging educational games completely free to play.
                  No registration required, no hidden fees, no software downloads - just fun study games that make learning effective
                  and enjoyable across all devices.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">Math Games</h3>
                    <p className="text-neutral-600 text-sm">Interactive games covering arithmetic, algebra, geometry, and advanced mathematics</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">Science Games</h3>
                    <p className="text-neutral-600 text-sm">Virtual labs and simulations for physics, chemistry, biology, and earth sciences</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">Language Games</h3>
                    <p className="text-neutral-600 text-sm">Vocabulary builders, grammar adventures, and reading comprehension challenges</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">Memory Games</h3>
                    <p className="text-neutral-600 text-sm">Brain training exercises to improve focus, attention, and cognitive abilities</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">Logic & Puzzles</h3>
                    <p className="text-neutral-600 text-sm">Critical thinking challenges, brain teasers, and problem-solving games</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <PopularGamesSection />
          <CategorySection />

          {/* About DapsiGames Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
                  Why Choose DapsiGames Study Hub?
                </h2>
                <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
                  We've created the most engaging collection of study games to help you learn smarter, not harder.
                  From interactive math challenges to virtual science labs and brain training exercises, we've got you covered with
                  study games that make learning fun and effective.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                <div>
                  <h3 className="text-3xl font-bold text-neutral-800 mb-6">
                    Study Games, Zero Cost
                  </h3>
                  <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                    Access high-quality study games designed by learning experts and game developers. Our platform offers engaging
                    learning experiences that rival expensive educational software, but completely free and accessible through your web browser.
                  </p>
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    Whether you're a student mastering math concepts, a teacher looking for classroom activities, or a parent supporting learning at home -
                    our study games deliver effective education without the expensive price tag.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-inner">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-4xl font-bold text-secondary mb-2">150+</div>
                      <div className="text-neutral-700 font-medium">Free Games</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary mb-2">0</div>
                      <div className="text-neutral-700 font-medium">Registration Required</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-purple-600 mb-2">5</div>
                      <div className="text-neutral-700 font-medium">Learning Categories</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                      <div className="text-neutral-700 font-medium">Always Available</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#F59E0B] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Zap className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-neutral-800 mb-4">Instant Play</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    Our games load instantly without waiting for downloads, installations, or lengthy setup times. Start learning
                    immediately with games optimized for speed and performance across all devices.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-[#6B7280] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Shield className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-neutral-800 mb-4">Safe & Private</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    Your learning progress stays private. We don't store your game data or personal information. All game progress
                    and learning analytics remain secure and private to your device.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-[#2563EB] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Smartphone className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-neutral-800 mb-4">Play Anywhere</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    Play our educational games on any device - desktop, laptop, tablet, or smartphone. Responsive design ensures
                    perfect gameplay experience across all screen sizes and browsers.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-[#22C55E] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Globe className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-neutral-800 mb-4">Learn Globally</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    Educational content designed for learners worldwide. Games support multiple learning styles and adapt to different
                    skill levels. Available 24/7 from anywhere with internet access.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Games Spotlight */}
          <section className="py-20 bg-gradient-to-br from-neutral-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
                  Featured Games Spotlight
                </h2>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                  Discover our most popular and engaging educational games that thousands of learners play daily
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-neutral-100">
                  <h3 className="text-xl font-bold text-neutral-800 mb-4">Addition Race</h3>
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    Race against time to solve addition problems and improve mental math speed. Features progressive
                    difficulty levels, speed tracking, and instant feedback for effective learning.
                  </p>
                  <ul className="text-sm text-neutral-500 space-y-1 mb-6">
                    <li>• Progressive difficulty levels</li>
                    <li>• Speed tracking and analytics</li>
                    <li>• Instant feedback system</li>
                    <li>• Achievement badges</li>
                  </ul>
                  <a
                    href="/games/addition-race"
                    className="inline-flex items-center text-secondary font-semibold hover:text-secondary/90 transition-colors group-hover:gap-2 gap-1"
                  >
                    Play Addition Race
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-neutral-100">
                  <h3 className="text-xl font-bold text-neutral-800 mb-4">Periodic Table Quest</h3>
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    Explore chemical elements through interactive adventures and virtual chemistry experiments.
                    Learn element properties, atomic structures, and chemical reactions in an engaging game format.
                  </p>
                  <ul className="text-sm text-neutral-500 space-y-1 mb-6">
                    <li>• Interactive element explorer</li>
                    <li>• Virtual chemistry experiments</li>
                    <li>• Atomic structure visualization</li>
                    <li>• Chemical reaction simulator</li>
                  </ul>
                  <a
                    href="/games/periodic-table-quest"
                    className="inline-flex items-center text-pink-600 font-semibold hover:text-pink-700 transition-colors group-hover:gap-2 gap-1"
                  >
                    Play Periodic Table Quest
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-neutral-100">
                  <h3 className="text-xl font-bold text-neutral-800 mb-4">Vocabulary Builder</h3>
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    Learn new words through interactive games, quizzes, and spaced repetition. Build your vocabulary
                    with engaging word challenges, contextual learning, and personalized difficulty adaptation.
                  </p>
                  <ul className="text-sm text-neutral-500 space-y-1 mb-6">
                    <li>• Spaced repetition algorithm</li>
                    <li>• Contextual word learning</li>
                    <li>• Adaptive difficulty system</li>
                    <li>• Progress tracking</li>
                  </ul>
                  <a
                    href="/games/vocabulary-builder"
                    className="inline-flex items-center text-accent font-semibold hover:text-accent/90 transition-colors group-hover:gap-2 gap-1"
                  >
                    Play Vocabulary Builder
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-neutral-100">
                  <h3 className="text-xl font-bold text-neutral-800 mb-4">Memory Palace Builder</h3>
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    Build memory palaces to enhance recall and memorization skills. Learn ancient memory techniques
                    through interactive construction and practice with immediate feedback and progress tracking.
                  </p>
                  <ul className="text-sm text-neutral-500 space-y-1 mb-6">
                    <li>• Interactive palace construction</li>
                    <li>• Memory technique tutorials</li>
                    <li>• Progress tracking dashboard</li>
                    <li>• Recall testing exercises</li>
                  </ul>
                  <a
                    href="/games/memory-palace"
                    className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors group-hover:gap-2 gap-1"
                  >
                    Play Memory Palace Builder
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-neutral-100">
                  <h3 className="text-xl font-bold text-neutral-800 mb-4">Sudoku Solver</h3>
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    Master sudoku puzzles with hints, solving techniques, and progressive difficulty levels.
                    Develop logical reasoning skills through strategic number placement and pattern recognition.
                  </p>
                  <ul className="text-sm text-neutral-500 space-y-1 mb-6">
                    <li>• Multiple difficulty levels</li>
                    <li>• Hint and solving techniques</li>
                    <li>• Strategy explanations</li>
                    <li>• Daily puzzle challenges</li>
                  </ul>
                  <a
                    href="/games/sudoku-solver"
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors group-hover:gap-2 gap-1"
                  >
                    Play Sudoku Solver
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-neutral-100">
                  <h3 className="text-xl font-bold text-neutral-800 mb-4">Business Loan Calculator</h3>
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    Calculate business loan payments with origination fees, processing costs, and
                    effective APR. Compare SBA loans, term loans, and equipment financing options.
                  </p>
                  <ul className="text-sm text-neutral-500 space-y-1 mb-6">
                    <li>• SBA loan calculations</li>
                    <li>• Fee structure analysis</li>
                    <li>• Payment schedule options</li>
                    <li>• Total cost comparisons</li>
                  </ul>
                  <a
                    href="/games/business-loan-calculator"
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors group-hover:gap-2 gap-1"
                  >
                    Play Business Math Game
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-neutral-100">
                  <h3 className="text-xl font-bold text-neutral-800 mb-4">Health Science Explorer</h3>
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    Learn about cardiovascular health through interactive science games. Explore how
                    lifestyle factors affect health through engaging educational gameplay.
                  </p>
                  <ul className="text-sm text-neutral-500 space-y-1 mb-6">
                    <li>• Interactive health lessons</li>
                    <li>• Lifestyle factor games</li>
                    <li>• Educational health content</li>
                    <li>• Science-based learning</li>
                  </ul>
                  <a
                    href="/games/cholesterol-risk-calculator"
                    className="inline-flex items-center text-primary font-semibold hover:text-primary/90 transition-colors group-hover:gap-2 gap-1"
                  >
                    Play Health Science Game
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>

              <div className="text-center mt-12">
                <p className="text-neutral-600 mb-6">
                  Discover more educational games in our complete collection
                </p>
                <a
                  href="/games"
                  className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 gap-2"
                >
                  View All 150+ Study Games
                  <Zap size={20} />
                </a>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
                  How DapsiGames Works
                </h2>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                  Getting started is simple. No complicated setup, no subscriptions, no hidden fees.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                <div className="text-center">
                  <div className="relative">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-white">1</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-800 mb-4">Choose Your Game</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Browse our categories or use the search bar to find exactly what you need.
                    From math games to logic puzzles, we have games for every subject.
                  </p>
                </div>

                <div className="text-center">
                  <div className="relative">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-white">2</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-800 mb-4">Start Playing</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Our games are designed to be user-friendly with clear instructions and interactive gameplay.
                    Just jump in and start learning!
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-800 mb-4">Learn & Improve</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Track your progress, master new skills, and achieve your learning goals with our engaging
                    educational games. Practice makes perfect!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Trust & Reliability Section */}
          <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" data-testid="section-trust">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
                  Trusted by Learners Worldwide
                </h2>
                <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
                  Join millions of students, educators, and lifelong learners who rely on DapsiGames'
                  collection of engaging educational games for fun and effective learning. Our platform delivers
                  consistent, enjoyable experiences that users trust for academic success.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
                <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 group" data-testid="stat-calculations">
                  <div className="w-16 h-16 bg-[#2563EB] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                    <Calculator className="text-white" size={24} />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">25M+</div>
                    <div className="text-neutral-800 font-semibold text-lg mb-1">Calculations Completed</div>
                    <div className="text-sm text-neutral-500">Accurate results delivered daily</div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 group" data-testid="stat-tools">
                  <div className="w-16 h-16 bg-[#22C55E] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                    <PenTool className="text-white" size={24} />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">180+</div>
                    <div className="text-neutral-800 font-semibold text-lg mb-1">Professional Tools</div>
                    <div className="text-sm text-neutral-500">Continuously expanding collection</div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 group" data-testid="stat-uptime">
                  <div className="w-16 h-16 bg-[#6B7280] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                    <Shield className="text-white" size={24} />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">99.9%</div>
                    <div className="text-neutral-800 font-semibold text-lg mb-1">Service Reliability</div>
                    <div className="text-sm text-neutral-500">Always available when you need it</div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 group" data-testid="stat-security">
                  <div className="w-16 h-16 bg-[#F59E0B] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                    <Globe className="text-white" size={24} />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">100%</div>
                    <div className="text-neutral-800 font-semibold text-lg mb-1">Free & Accessible</div>
                    <div className="text-sm text-neutral-500">No subscriptions or hidden fees</div>
                  </div>
                </div>
              </div>

              <div className="text-center mb-12">
                <h3 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-6">
                  Why Students Love DapsiGames
                </h3>
                <p className="text-lg text-neutral-600 max-w-4xl mx-auto leading-relaxed">
                  Our platform serves students of all ages who want to make learning fun and effective. Here's how different learners engage with DapsiGames:
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200" data-testid="use-case-financial">
                        <div className="w-12 h-12 bg-[#2563EB] rounded-xl flex items-center justify-center flex-shrink-0">
                          <BookOpen className="text-white" size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-neutral-800 mb-2">Math Enthusiasts</h4>
                          <p className="text-neutral-700 text-sm leading-relaxed">
                            Master arithmetic, algebra, geometry, and advanced math concepts through interactive games and challenges designed for all skill levels.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-pink-50 to-pink-100 border border-pink-200" data-testid="use-case-health">
                        <div className="w-12 h-12 bg-[#22C55E] rounded-xl flex items-center justify-center flex-shrink-0">
                          <FlaskConical className="text-white" size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-neutral-800 mb-2">Science Explorers</h4>
                          <p className="text-neutral-700 text-sm leading-relaxed">
                            Conduct virtual experiments, explore physics, chemistry, and biology concepts through engaging simulations and interactive learning games.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200" data-testid="use-case-content">
                        <div className="w-12 h-12 bg-[#F59E0B] rounded-xl flex items-center justify-center flex-shrink-0">
                          <Target className="text-white" size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-neutral-800 mb-2">Language Learners</h4>
                          <p className="text-neutral-700 text-sm leading-relaxed">
                            Build vocabulary, improve grammar, and enhance reading skills with fun word games, spelling challenges, and interactive storytelling.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-green-50 to-green-100 border border-green-200" data-testid="use-case-students">
                        <div className="w-12 h-12 bg-[#6B7280] rounded-xl flex items-center justify-center flex-shrink-0">
                          <Brain className="text-white" size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-neutral-800 mb-2">Memory & Logic Trainers</h4>
                          <p className="text-neutral-700 text-sm leading-relaxed">
                            Boost cognitive abilities with memory games, pattern recognition challenges, and logic puzzles designed to sharpen your mind.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-200">
                      <h4 className="text-2xl font-bold text-neutral-800 mb-4 text-center">
                        Start Learning Today
                      </h4>
                      <p className="text-neutral-700 mb-6 leading-relaxed text-center">
                        Join millions of learners who engage with DapsiGames for fun and effective education.
                        No registration required - just click and start playing any game instantly.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                        <a
                          href="/math-games"
                          className="inline-block bg-secondary text-white px-6 py-3 rounded-xl font-semibold hover:bg-secondary/90 transition-all duration-200 shadow-lg text-center hover:shadow-xl transform hover:-translate-y-0.5"
                          data-testid="link-finance-tools"
                        >
                          Explore Math Games
                        </a>
                        <a
                          href="/science-games"
                          className="inline-block bg-white text-secondary border-2 border-secondary px-6 py-3 rounded-xl font-semibold hover:bg-secondary/10 transition-all duration-200 text-center hover:shadow-lg transform hover:-translate-y-0.5"
                          data-testid="link-health-tools"
                        >
                          Try Science Games
                        </a>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-neutral-600">
                          Or explore all <a href="/games" className="text-secondary hover:text-secondary/90 underline font-semibold">150+ educational games</a>
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                        <h5 className="font-bold text-neutral-800 mb-3 text-center">Learning Features</h5>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div className="flex flex-col items-center space-y-2" data-testid="trust-indicator-security">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                              <Gamepad2 className="text-[#22C55E]" size={20} />
                            </div>
                            <span className="text-xs font-medium text-neutral-700">Engaging Games</span>
                          </div>
                          <div className="flex flex-col items-center space-y-2" data-testid="trust-indicator-speed">
                            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                              <Zap className="text-[#F59E0B]" size={20} />
                            </div>
                            <span className="text-xs font-medium text-neutral-700">Instant Play</span>
                          </div>
                          <div className="flex flex-col items-center space-y-2" data-testid="trust-indicator-devices">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <Smartphone className="text-[#2563EB]" size={20} />
                            </div>
                            <span className="text-xs font-medium text-neutral-700">All Devices</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Comprehensive FAQ Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                  Everything you need to know about DapsiGames' free educational games
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <div className="bg-white rounded-lg p-6 shadow-md" data-testid="faq-free-tools">
                    <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                      Are all 150+ study games really free to play?
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      Yes! Every single game on DapsiGames is completely free with no hidden costs, subscriptions, or premium upgrades.
                      This includes our advanced math games, science simulations, language learning games, memory training exercises, and logic puzzles.
                      We believe educational games should be accessible to all learners.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-md" data-testid="faq-loan-calculator">
                    <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                      How do the math games help improve learning?
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      Our <a href="/math-games" className="text-secondary hover:text-secondary/90 underline">math games</a> use proven educational techniques like spaced repetition, progressive difficulty, and immediate feedback to reinforce learning.
                      Games cover arithmetic, algebra, geometry, statistics, and calculus through interactive challenges that make math concepts engaging and memorable. Explore all <a href="/math-games" className="text-secondary hover:text-secondary/90 underline">math games</a>.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-md" data-testid="faq-mortgage-calculator">
                    <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                      What makes your science games engaging?
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      Our <a href="/science-games" className="text-secondary hover:text-secondary/90 underline">science games</a> cover physics experiments, chemistry lab simulations, biology explorations, astronomy adventures, earth science investigations, and environmental studies.
                      Students can safely conduct virtual experiments and explore scientific concepts through hands-on interactive gameplay. Find more <a href="/science-games" className="text-secondary hover:text-secondary/90 underline">science games</a>.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-md" data-testid="faq-bmi-health-tools">
                    <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                      Which language games improve vocabulary and reading skills?
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      We provide <a href="/language-games" className="text-secondary hover:text-secondary/90 underline">language games</a> that use storytelling, word association, spelling challenges, grammar adventures, and reading comprehension quests to build vocabulary, improve writing skills, and enhance reading fluency.
                      All <a href="/language-games" className="text-secondary hover:text-secondary/90 underline">language games</a> adapt to different skill levels and provide personalized learning paths.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-md" data-testid="faq-text-tools">
                    <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                      Can memory games improve cognitive abilities?
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      Our <a href="/memory-games" className="text-secondary hover:text-secondary/90 underline">memory games</a> are based on cognitive science research and include working memory exercises, spatial memory challenges, pattern recognition training, and mnemonic device practice.
                      Regular play can improve focus, attention span, and memory recall abilities. Explore our <a href="/memory-games" className="text-secondary hover:text-secondary/90 underline">memory games</a>.
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-white rounded-lg p-6 shadow-md" data-testid="faq-no-registration">
                    <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                      Do I need to sign up or download anything to play?
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      No registration, downloads, or installations required! Simply visit any game page and start playing immediately.
                      All games work directly in your web browser on any device. Your privacy is protected since we don't collect
                      personal information or require accounts.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-md" data-testid="faq-mobile-compatibility">
                    <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                      Do the games work on mobile phones and tablets?
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      Absolutely! All our study games are mobile-optimized and work seamlessly on smartphones, tablets, laptops, and desktops.
                      The responsive design ensures buttons are easy to tap, forms are simple to fill out, and results display perfectly
                      on any screen size.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-md" data-testid="faq-data-security">
                    <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                      Is my learning progress and game data secure?
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      Yes! All game progress and learning data remain completely private and secure. Games process locally in your browser - we don't store your scores, answers, or personal learning data on our servers.
                      Your educational journey remains private and protected. Read our <a href="/privacy-policy" className="text-secondary hover:text-secondary/90 underline">Privacy Policy</a> for details.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-md" data-testid="faq-commercial-use">
                    <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                      Can teachers use these games in classrooms?
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      Absolutely! Our educational games are perfect for classroom use, homeschooling, tutoring sessions, and educational institutions.
                      Teachers regularly use our games to supplement lessons, engage students, and provide interactive learning experiences that make studying fun and effective.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-md" data-testid="faq-support">
                    <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                      How can I request new games or report issues?
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      Contact us through our support page for help, game requests, or to report issues. We actively listen
                      to user feedback and regularly add new games based on demand. Our goal is to continuously improve and
                      expand our collection to meet your learning needs.
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