import { useLocation } from 'wouter';
import { type Tool, categories } from '@/data/tools';
import FavoriteButton from '@/components/FavoriteButton';
import { useRecentTools } from '@/hooks/use-recent-tools';

interface ToolCardProps {
  tool: Tool;
  onClick?: () => void;
}

const categoryColors = {
  math: 'bg-secondary/10 text-secondary',
  science: 'bg-primary/10 text-primary',
  language: 'bg-accent/20 text-accent-foreground',
  memory: 'bg-purple-500/10 text-purple-600',
  logic: 'bg-green-500/10 text-green-600'
};

const iconColors = {
  math: 'from-secondary to-secondary/80',
  science: 'from-primary to-primary/80',
  language: 'from-accent to-yellow-500',
  memory: 'from-purple-500 to-indigo-600',
  logic: 'from-green-500 to-emerald-600'
};

const ToolCard = ({ tool, onClick }: ToolCardProps) => {
  const [, setLocation] = useLocation();
  const { addRecent } = useRecentTools();

  const handleClick = () => {
    const targetPath = tool.href || `/games/${tool.id}`;
    addRecent(tool); // Track game usage
    setLocation(targetPath);
    onClick?.();
  };

  return (
    <div 
      className="bg-white dark:bg-neutral-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-neutral-100 dark:border-neutral-700 cursor-pointer relative group"
      onClick={handleClick}
      data-testid={`card-tool-${tool.id}`}
    >
      {/* Favorite button in top-right corner */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <FavoriteButton tool={tool} size="sm" />
      </div>

      
      <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3 pr-8" data-testid={`text-tool-name-${tool.id}`}>
        {tool.name}
      </h3>
      
      <p className="text-neutral-600 dark:text-neutral-400 mb-4" data-testid={`text-tool-description-${tool.id}`}>
        {tool.description}
      </p>
      
      <div className="flex items-center justify-between">
        <span 
          className={`inline-block px-3 py-1 ${categoryColors[tool.category]} text-sm rounded-full font-medium`}
          data-testid={`text-tool-category-${tool.id}`}
        >
          {categories[tool.category]}
        </span>
        
        {tool.isPopular && (
          <div className="bg-accent/20 text-accent-foreground dark:bg-accent/20 dark:text-accent-foreground text-xs px-2 py-1 rounded-full flex items-center">
            Popular
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolCard;