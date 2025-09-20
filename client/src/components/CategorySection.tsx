import { useLocation } from 'wouter';
import { getCategoryStats } from '@/data/tools';
import { Calculator, PenTool, HeartPulse, ArrowRight, Brain, FlaskConical, BookOpen, Target, Gamepad2 } from 'lucide-react';

const CategorySection = () => {
  const [, setLocation] = useLocation();
  const stats = getCategoryStats();

  const categories = [
    {
      key: 'math',
      name: '36+ Math Games',
      description: 'Addition Race, Multiplication Master, Fraction Frenzy, Algebra Adventure',
      icon: Calculator,
      color: 'from-blue-500 via-blue-600 to-indigo-700',
      textColor: 'text-blue-600 hover:bg-blue-50',
      count: stats.math,
      href: '/math-games'
    },
    {
      key: 'language',
      name: '32+ Language Games',
      description: 'Vocabulary Builder, Grammar Challenge, Spelling Bee, Reading Comprehension',
      icon: BookOpen,
      color: 'from-yellow-500 via-orange-500 to-red-600',
      textColor: 'text-orange-600 hover:bg-orange-50',
      count: stats.language,
      href: '/language-games'
    },
    {
      key: 'science',
      name: '25+ Science Games',
      description: 'Chemistry Lab, Physics Simulator, Biology Quiz, Astronomy Adventure',
      icon: FlaskConical,
      color: 'from-pink-500 via-rose-600 to-red-700',
      textColor: 'text-pink-600 hover:bg-pink-50',
      count: stats.science,
      href: '/science-games'
    },
    {
      key: 'memory',
      name: '25+ Memory Games',
      description: 'Brain training exercises to improve focus and cognitive abilities',
      icon: Brain,
      color: 'from-purple-500 to-purple-600',
      textColor: 'text-purple-600',
      count: stats.memory,
      href: '/memory-games'
    },
    {
      key: 'logic',
      name: '32+ Logic & Puzzles',
      description: 'Critical thinking challenges, brain teasers, and problem-solving',
      icon: Target,
      color: 'from-green-500 to-green-600',
      textColor: 'text-green-600',
      count: stats.logic,
      href: '/logic-games'
    }
  ];

  const handleCategoryClick = (href: string) => {
    setLocation(href);
  };

  return (
    <section className="py-20 bg-neutral-50" data-testid="category-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6" data-testid="text-category-title">
            Browse Study Games by Subject
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto" data-testid="text-category-subtitle">
            Explore our comprehensive collection of educational study games organized by learning categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.key}
              className={`bg-gradient-to-br ${category.color} rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer`}
              onClick={() => handleCategoryClick(category.href)}
              data-testid={`card-category-${category.key}`}
            >
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-6">
                <category.icon className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4" data-testid={`text-category-title-${category.key}`}>
                {category.name}
              </h3>
              <p className="text-white text-opacity-90 mb-6 text-lg leading-relaxed" data-testid={`text-category-description-${category.key}`}>
                {category.description}
              </p>
              <button
                className={`bg-white ${category.textColor} px-6 py-3 rounded-xl font-semibold transition-colors duration-200 inline-flex items-center`}
                data-testid={`button-explore-${category.key}`}
              >
                Explore {category.key.charAt(0).toUpperCase() + category.key.slice(1)} Games
                <ArrowRight className="ml-2" size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;