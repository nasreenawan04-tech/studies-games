
import { useState } from 'react';
import { Link } from 'wouter';
import { getCategoryStats, categories } from '@/data/tools';
import { Calculator, FlaskConical, BookOpen, Brain, Puzzle, ChevronRight } from 'lucide-react';

const CategorySection = () => {
  const stats = getCategoryStats();
  
  const categoryData = [
    {
      key: 'math',
      title: categories.math,
      description: 'Interactive math games covering arithmetic, algebra, geometry, and calculus',
      icon: Calculator,
      color: 'from-secondary to-secondary/90',
      bgColor: 'bg-secondary/10',
      textColor: 'text-secondary',
      count: stats.math,
      href: '/math-games'
    },
    {
      key: 'science',
      title: categories.science,
      description: 'Virtual labs and simulations for physics, chemistry, biology, and earth sciences',
      icon: FlaskConical,
      color: 'from-primary to-primary/90',
      bgColor: 'bg-primary/10',
      textColor: 'text-primary',
      count: stats.science,
      href: '/science-games'
    },
    {
      key: 'language',
      title: categories.language,
      description: 'Vocabulary builders, grammar adventures, and reading comprehension challenges',
      icon: BookOpen,
      color: 'from-accent to-yellow-500',
      bgColor: 'bg-accent/20',
      textColor: 'text-accent-foreground',
      count: stats.language,
      href: '/language-games'
    },
    {
      key: 'memory',
      title: categories.memory,
      description: 'Brain training exercises to improve focus, attention, and cognitive abilities',
      icon: Brain,
      color: 'from-secondary to-secondary/90',
      bgColor: 'bg-secondary/10',
      textColor: 'text-secondary',
      count: stats.memory,
      href: '/memory-games'
    },
    {
      key: 'logic',
      title: categories.logic,
      description: 'Critical thinking challenges, brain teasers, and problem-solving games',
      icon: Puzzle,
      color: 'from-primary to-primary/90',
      bgColor: 'bg-primary/10',
      textColor: 'text-primary',
      count: stats.logic,
      href: '/logic-games'
    }
  ];

  return (
    <section className="py-20 bg-neutral-50" data-testid="category-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6" data-testid="text-categories-title">
            Study Games by Category
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto" data-testid="text-categories-subtitle">
            Discover educational games organized by subject to enhance your learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categoryData.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link
                key={category.key}
                href={category.href}
                className="group"
                data-testid={`card-category-${category.key}`}
              >
                <div className={`${category.bgColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-transparent hover:border-gray-200 cursor-pointer`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-neutral-800" data-testid={`text-category-title-${category.key}`}>
                      {category.title}
                    </h3>
                    <div className={`text-sm font-semibold px-3 py-1 ${category.textColor} bg-white rounded-full shadow-sm`}>
                      {category.count} games
                    </div>
                  </div>
                  
                  <p className="text-neutral-600 mb-6 leading-relaxed" data-testid={`text-category-description-${category.key}`}>
                    {category.description}
                  </p>
                  
                  <div className="flex items-center text-neutral-700 group-hover:text-neutral-900 font-medium transition-colors">
                    <span>Explore {category.title}</span>
                    <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/games"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:from-primary/90 hover:to-secondary/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            data-testid="button-view-all-categories"
          >
            Browse All Study Games
            <ChevronRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
