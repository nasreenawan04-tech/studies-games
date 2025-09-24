import { Play, Star, Trophy, Target, Gamepad2, Sparkles, ChevronRight, Zap } from 'lucide-react';
import { Link } from 'wouter';

const FeaturedGamesSection = () => {
  const featuredGames = [
    {
      id: 'addition-race',
      title: 'Addition Race',
      description: 'Race against time to solve addition problems and improve mental math speed. Master arithmetic through exciting challenges with progressive difficulty levels.',
      category: 'Math',
      difficulty: 'Beginner',
      features: [
        'Progressive difficulty levels',
        'Speed tracking and analytics', 
        'Instant feedback system',
        'Achievement badges'
      ],
      gradient: 'from-blue-500 to-green-500',
      bgGradient: 'from-blue-50 to-green-50 dark:from-blue-950/30 dark:to-green-900/30',
      emoji: '🧮',
      icon: Target,
      href: '/games/addition-race',
      rating: 4.8,
      players: '12K+'
    },
    {
      id: 'periodic-table-quest',
      title: 'Periodic Table Quest',
      description: 'Explore chemical elements through interactive adventures and virtual chemistry experiments. Discover atomic structures and chemical reactions in an engaging format.',
      category: 'Science',
      difficulty: 'Intermediate',
      features: [
        'Interactive element explorer',
        'Virtual chemistry experiments',
        'Atomic structure visualization',
        'Chemical reaction simulator'
      ],
      gradient: 'from-green-500 to-blue-500',
      bgGradient: 'from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-900/30',
      emoji: '⚗️',
      icon: Sparkles,
      href: '/games/periodic-table-quest',
      rating: 4.9,
      players: '8K+'
    },
    {
      id: 'vocabulary-builder',
      title: 'Vocabulary Builder',
      description: 'Build your vocabulary with engaging word challenges, contextual learning, and spaced repetition. Master new words through interactive gameplay and adaptive difficulty.',
      category: 'Language',
      difficulty: 'All Levels',
      features: [
        'Spaced repetition algorithm',
        'Contextual word learning',
        'Adaptive difficulty system',
        'Progress tracking'
      ],
      gradient: 'from-yellow-500 to-green-500',
      bgGradient: 'from-yellow-50 to-green-50 dark:from-yellow-950/30 dark:to-green-900/30',
      emoji: '📚',
      icon: Trophy,
      href: '/games/vocabulary-builder',
      rating: 4.7,
      players: '15K+'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100 dark:bg-green-900/30';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30';
      case 'Advanced': return 'text-blue-600 bg-blue-100 dark:bg-blue-900/30';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-800';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden" data-testid="featured-games-section">
      {/* Gaming decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true" role="presentation">
        <div className="absolute top-20 left-16 text-blue-200/10 text-6xl motion-safe:animate-bounce motion-safe:delay-1000">🎮</div>
        <div className="absolute bottom-20 right-20 text-yellow-200/10 text-5xl motion-safe:animate-pulse motion-safe:delay-500">🏆</div>
        <div className="absolute top-40 right-32 text-green-200/10 text-4xl motion-safe:animate-bounce motion-safe:delay-700">⭐</div>
        <div className="absolute bottom-40 left-24 text-blue-200/10 text-3xl motion-safe:animate-pulse motion-safe:delay-300">🎯</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-gray-200/50">
              <Star className="w-8 h-8 text-yellow-500 fill-current" />
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent" data-testid="text-featured-games-title">
                Featured Games Spotlight
              </h2>
              <Gamepad2 className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          
          <p className="text-xl text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto" data-testid="text-featured-games-subtitle">
            Discover our most popular and engaging educational games that thousands of learners play daily! 
            <span className="text-green-600 font-semibold"> Start your learning adventure</span> today.
          </p>
        </div>

        {/* Featured Games Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {featuredGames.map((game) => {
            const IconComponent = game.icon;
            
            return (
              <Link
                key={game.id}
                href={game.href}
                className="group"
                data-testid={`featured-game-card-${game.id}`}
              >
                <div className={`bg-gradient-to-br ${game.bgGradient} rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 border-2 border-gray-200/50 hover:border-gray-300/50 cursor-pointer relative overflow-hidden`}>
                  {/* Gaming decorative elements */}
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <IconComponent className="w-8 h-8 text-gray-600" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-3xl opacity-20 group-hover:opacity-40 transition-opacity">
                    {game.emoji}
                  </div>
                  
                  {/* Header with category and difficulty */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-white/80 dark:bg-gray-700/80 rounded-xl flex items-center justify-center">
                        <Gamepad2 className="w-5 h-5 text-blue-500" />
                      </div>
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">{game.category}</span>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-bold ${getDifficultyColor(game.difficulty)}`}>
                      {game.difficulty}
                    </div>
                  </div>

                  {/* Game Icon & Rating */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-r ${game.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl relative`}>
                      <span className="text-3xl">{game.emoji}</span>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Star className="w-3 h-3 text-yellow-800 fill-current" />
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-lg font-bold text-gray-800 dark:text-gray-200">{game.rating}</span>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{game.players} players</div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4" data-testid={`text-game-title-${game.id}`}>
                    {game.title}
                  </h3>
                  
                  <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed" data-testid={`text-game-description-${game.id}`}>
                    {game.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                      <Trophy className="w-4 h-4" />
                      Game Features
                    </h4>
                    <ul className="space-y-2">
                      {game.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 font-bold transition-colors">
                      <Play className="w-5 h-5" />
                      <span>Play Now</span>
                    </div>
                    <div className="flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
                      <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50">
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-2 text-4xl">
                <span>🎮</span>
                <span>🏆</span>
                <span>⭐</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
              Ready to Explore More Games?
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-md mx-auto">
              Browse our complete collection of 150+ educational games and find your perfect learning adventure!
            </p>
            <Link
              href="/all-games"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-400 hover:to-green-400 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
              data-testid="button-view-all-games"
              aria-label="View all 150+ educational games"
            >
              <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              View All 150+ Games
              <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGamesSection;