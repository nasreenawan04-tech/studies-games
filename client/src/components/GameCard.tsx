
import { useLocation } from 'wouter';
import { type Tool, categories } from '@/data/tools';
import FavoriteButton from '@/components/FavoriteButton';
import { useRecentTools } from '@/hooks/use-recent-tools';
import { 
  Sigma, 
  FlaskConical, 
  BookOpen, 
  Brain, 
  Puzzle, 
  Play, 
  Star,
  Gamepad2,
  GraduationCap,
  Trophy
} from 'lucide-react';

interface GameCardProps {
  tool: Tool;
  onClick?: () => void;
}

// Category icons mapping
const categoryIcons = {
  math: Sigma,
  science: FlaskConical,
  language: BookOpen,
  memory: Brain,
  logic: Puzzle
};

// Enhanced color schemes with Study + Gaming aesthetics
const categoryThemes = {
  math: {
    gradient: 'from-blue-500 to-purple-600',
    accent: 'from-blue-400 to-indigo-500',
    background: 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30',
    text: 'text-blue-700 dark:text-blue-300',
    badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200'
  },
  science: {
    gradient: 'from-pink-500 to-red-600',
    accent: 'from-pink-400 to-rose-500', 
    background: 'bg-gradient-to-br from-pink-50 to-red-50 dark:from-pink-950/30 dark:to-red-950/30',
    text: 'text-pink-700 dark:text-pink-300',
    badge: 'bg-pink-100 text-pink-800 dark:bg-pink-900/50 dark:text-pink-200'
  },
  language: {
    gradient: 'from-yellow-500 to-orange-600',
    accent: 'from-amber-400 to-yellow-500',
    background: 'bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30',
    text: 'text-yellow-700 dark:text-yellow-300',
    badge: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200'
  },
  memory: {
    gradient: 'from-purple-500 to-indigo-600',
    accent: 'from-violet-400 to-purple-500',
    background: 'bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30',
    text: 'text-purple-700 dark:text-purple-300',
    badge: 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200'
  },
  logic: {
    gradient: 'from-green-500 to-emerald-600',
    accent: 'from-green-400 to-teal-500',
    background: 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30',
    text: 'text-green-700 dark:text-green-300',
    badge: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200'
  }
};

const GameCard = ({ tool, onClick }: GameCardProps) => {
  const [, setLocation] = useLocation();
  const { addRecent } = useRecentTools();
  
  const theme = categoryThemes[tool.category];
  const CategoryIcon = categoryIcons[tool.category];

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const targetPath = tool.href || `/games/${tool.id}`;
    addRecent(tool); // Track game usage
    setLocation(targetPath);
    onClick?.();
  };

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleClick(e);
  };

  return (
    <div 
      className={`relative bg-white dark:bg-neutral-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-neutral-200 dark:border-neutral-700 cursor-pointer group overflow-hidden ${theme.background}`}
      onClick={handleClick}
      data-testid={`card-tool-${tool.id}`}
    >
      {/* Gaming-style decorative elements */}
      <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
        <div className="absolute top-2 right-2">
          <Gamepad2 className="w-6 h-6 text-current" />
        </div>
        <div className="absolute top-6 right-6">
          <GraduationCap className="w-4 h-4 text-current" />
        </div>
      </div>
      
      {/* Favorite button */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
        <FavoriteButton tool={tool} size="sm" />
      </div>

      {/* Main content */}
      <div className="p-6">
        {/* Icon and Category Badge */}
        <div className="flex items-start justify-between mb-4">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${theme.gradient} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200`}>
            <CategoryIcon className="w-7 h-7 text-white" />
          </div>
          
          <div className="flex flex-col items-end gap-2">
            {tool.isPopular && (
              <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-sm">
                <Star className="w-3 h-3 fill-current" />
                Popular
              </div>
            )}
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${theme.badge}`} data-testid={`text-tool-category-${tool.id}`}>
              {categories[tool.category]}
            </span>
          </div>
        </div>
        
        {/* Title and Description */}
        <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-3 leading-tight" data-testid={`text-tool-name-${tool.id}`}>
          {tool.name}
        </h3>
        
        <p className="text-neutral-600 dark:text-neutral-400 mb-6 text-sm leading-relaxed" data-testid={`text-tool-description-${tool.id}`}>
          {tool.description}
        </p>
        
        {/* Play Now Button */}
        <button
          onClick={handlePlayClick}
          className={`w-full bg-gradient-to-r ${theme.accent} hover:${theme.gradient} text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 group/button`}
          data-testid={`button-play-${tool.id}`}
        >
          <Play className="w-4 h-4 group-hover/button:scale-110 transition-transform" fill="currentColor" />
          <span>Play Now</span>
          <Trophy className="w-4 h-4 group-hover/button:scale-110 transition-transform" />
        </button>
      </div>
      
      {/* Subtle gaming pattern overlay */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute top-4 left-4 w-2 h-2 bg-current rounded-full"></div>
        <div className="absolute top-8 left-8 w-1 h-1 bg-current rounded-full"></div>
        <div className="absolute bottom-8 right-8 w-2 h-2 bg-current rounded-full"></div>
        <div className="absolute bottom-4 right-12 w-1 h-1 bg-current rounded-full"></div>
      </div>
    </div>
  );
};

export default GameCard;
