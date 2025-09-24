import { Link } from 'wouter';
import { getCategoryStats, categories } from '@/data/tools';
import { Calculator, FlaskConical, BookOpen, Brain, Puzzle, ChevronRight, Gamepad2, Trophy, Star, Target } from 'lucide-react';

const CategorySection = () => {
  const stats = getCategoryStats();

  const categoryData = [
    {
      key: 'math',
      title: categories.math,
      description: 'Master numbers through interactive games, puzzles, and challenges that make math fun and engaging',
      icon: Calculator,
      gradient: 'from-blue-500 to-blue-700',
      bgGradient: 'from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30',
      borderColor: 'border-blue-200 hover:border-blue-400',
      textColor: 'text-blue-700 dark:text-blue-300',
      count: stats.math,
      href: '/math-games',
      emoji: '🧮',
      gamingIcon: Target
    },
    {
      key: 'science',
      title: categories.science,
      description: 'Explore the universe through virtual labs, experiments, and scientific discoveries',
      icon: FlaskConical,
      gradient: 'from-green-500 to-green-700',
      bgGradient: 'from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30',
      borderColor: 'border-green-200 hover:border-green-400',
      textColor: 'text-green-700 dark:text-green-300',
      count: stats.science,
      href: '/science-games',
      emoji: '⚗️',
      gamingIcon: Star
    },
    {
      key: 'language',
      title: categories.language,
      description: 'Build vocabulary, improve grammar, and enhance reading skills through word adventures',
      icon: BookOpen,
      gradient: 'from-yellow-500 to-yellow-700',
      bgGradient: 'from-yellow-50 to-yellow-100 dark:from-yellow-950/30 dark:to-yellow-900/30',
      borderColor: 'border-yellow-200 hover:border-yellow-400',
      textColor: 'text-yellow-700 dark:text-yellow-300',
      count: stats.language,
      href: '/language-games',
      emoji: '📚',
      gamingIcon: Trophy
    },
    {
      key: 'memory',
      title: categories.memory,
      description: 'Train your brain with memory challenges, pattern recognition, and cognitive exercises',
      icon: Brain,
      gradient: 'from-green-500 to-blue-600',
      bgGradient: 'from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-900/30',
      borderColor: 'border-green-200 hover:border-blue-400',
      textColor: 'text-green-700 dark:text-blue-300',
      count: stats.memory,
      href: '/memory-games',
      emoji: '🧠',
      gamingIcon: Gamepad2
    },
    {
      key: 'logic',
      title: categories.logic,
      description: 'Solve puzzles, crack codes, and develop critical thinking through logic challenges',
      icon: Puzzle,
      gradient: 'from-blue-500 to-green-600',
      bgGradient: 'from-blue-50 to-green-50 dark:from-blue-950/30 dark:to-green-900/30',
      borderColor: 'border-blue-200 hover:border-green-400',
      textColor: 'text-blue-700 dark:text-green-300',
      count: stats.logic,
      href: '/logic-games',
      emoji: '🧩',
      gamingIcon: Target
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden" data-testid="category-section">
      {/* Gaming decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true" role="presentation">
        <div className="absolute top-40 left-16 text-blue-200/10 text-5xl motion-safe:animate-bounce motion-safe:delay-1000">🎮</div>
        <div className="absolute bottom-32 right-20 text-green-200/10 text-4xl motion-safe:animate-pulse motion-safe:delay-500">🏆</div>
        <div className="absolute top-20 right-32 text-yellow-200/10 text-3xl motion-safe:animate-bounce motion-safe:delay-700">⭐</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Gaming-themed header */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-gray-200/50">
              <Gamepad2 className="w-8 h-8 text-blue-500" />
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent" data-testid="text-categories-title">
                Study Game Categories
              </h2>
              <Trophy className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
          
          <p className="text-xl text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto" data-testid="text-categories-subtitle">
            Choose your adventure! Each category offers unique challenges designed to level up your skills while having fun.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categoryData.map((category) => {
            const IconComponent = category.icon;
            const GamingIcon = category.gamingIcon;
            return (
              <Link
                key={category.key}
                href={category.href}
                className="group"
                data-testid={`card-category-${category.key}`}
              >
                <div className={`bg-gradient-to-br ${category.bgGradient} rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 border-2 ${category.borderColor} cursor-pointer relative overflow-hidden`}>
                  {/* Gaming decorative elements */}
                  <div className="absolute top-3 right-3 opacity-20 group-hover:opacity-30 transition-opacity">
                    <GamingIcon className="w-6 h-6" />
                  </div>
                  <div className="absolute bottom-3 left-3 text-2xl opacity-20 group-hover:opacity-40 transition-opacity">
                    {category.emoji}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl relative`}>
                    <IconComponent className="text-white" size={28} />
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Star className="w-3 h-3 text-yellow-800 fill-current" />
                    </div>
                  </div>

                  {/* Title and Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100" data-testid={`text-category-title-${category.key}`}>
                      {category.title}
                    </h3>
                    <div className={`text-sm font-bold px-3 py-1.5 ${category.textColor} bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-md border border-gray-200/50 flex items-center gap-1`}>
                      <Trophy className="w-3 h-3" />
                      {category.count}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed" data-testid={`text-category-description-${category.key}`}>
                    {category.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 font-bold transition-colors">
                      <Gamepad2 className="w-4 h-4 mr-2" />
                      <span>Start Playing</span>
                    </div>
                    <div className="flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
                      <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Gaming-styled CTA */}
        <div className="text-center">
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50">
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-2 text-3xl">
                <span>🎯</span>
                <span>🎮</span>
                <span>🏆</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
              Ready to Explore All Categories?
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-md mx-auto">
              Browse our complete collection of educational games and find your perfect learning adventure!
            </p>
            <Link
              href="/games"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-400 hover:to-green-400 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 group"
              data-testid="button-view-all-categories"
            >
              <Trophy className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Browse All Study Games
              <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;