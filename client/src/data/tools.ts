export interface Tool {
  id: string;
  name: string;
  description: string;
  category: 'math' | 'science' | 'language' | 'memory' | 'logic';
  icon: string;
  isPopular?: boolean;
  href: string;
}

export const categories = {
  math: 'Math Games',
  science: 'Science Games',
  language: 'Language Games',
  memory: 'Memory Games',
  logic: 'Logic & Puzzles'
};

const toolsData: Tool[] = [
  // Math Games
  {
    id: 'addition-race',
    name: 'Addition Race',
    description: 'Race against time to solve addition problems and improve mental math speed',
    category: 'math',
    icon: '➕',
    isPopular: true,
    href: '/games/addition-race'
  },
  {
    id: 'multiplication-master',
    name: 'Multiplication Master',
    description: 'Master multiplication tables through engaging gameplay and challenges',
    category: 'math',
    icon: '✖️',
    isPopular: true,
    href: '/games/multiplication-master'
  },
  {
    id: 'fraction-fun',
    name: 'Fraction Fun',
    description: 'Learn fractions through visual puzzles and interactive exercises',
    category: 'math',
    icon: '🧩',
    href: '/games/fraction-fun'
  },
  {
    id: 'geometry-quest',
    name: 'Geometry Quest',
    description: 'Explore shapes, angles, and spatial reasoning through adventure games',
    category: 'math',
    icon: '📐',
    href: '/games/geometry-quest'
  },

  // Science Games
  {
    id: 'periodic-table-quest',
    name: 'Periodic Table Quest',
    description: 'Explore chemical elements through interactive adventures and experiments',
    category: 'science',
    icon: '🧪',
    isPopular: true,
    href: '/games/periodic-table-quest'
  },
  {
    id: 'physics-playground',
    name: 'Physics Playground',
    description: 'Learn physics concepts through hands-on simulations and experiments',
    category: 'science',
    icon: '⚡',
    href: '/games/physics-playground'
  },
  {
    id: 'ecosystem-explorer',
    name: 'Ecosystem Explorer',
    description: 'Discover how organisms interact in different ecosystems and food chains',
    category: 'science',
    icon: '🌱',
    isPopular: true,
    href: '/games/ecosystem-explorer'
  },
  {
    id: 'space-mission',
    name: 'Space Mission',
    description: 'Learn about planets, stars, and space exploration through missions',
    category: 'science',
    icon: '🚀',
    href: '/games/space-mission'
  },

  // Language Games
  {
    id: 'vocabulary-builder',
    name: 'Vocabulary Builder',
    description: 'Build your vocabulary through word games, definitions, and context clues',
    category: 'language',
    icon: '📝',
    isPopular: true,
    href: '/games/vocabulary-builder'
  },
  {
    id: 'grammar-adventure',
    name: 'Grammar Adventure',
    description: 'Master grammar rules through story-based adventures and challenges',
    category: 'language',
    icon: '📖',
    href: '/games/grammar-adventure'
  },
  {
    id: 'spelling-champion',
    name: 'Spelling Champion',
    description: 'Improve spelling skills through progressive challenges and competitions',
    category: 'language',
    icon: '🏆',
    href: '/games/spelling-champion'
  },
  {
    id: 'reading-comprehension',
    name: 'Reading Comprehension',
    description: 'Enhance reading skills through interactive stories and questions',
    category: 'language',
    icon: '📚',
    href: '/games/reading-comprehension'
  },

  // Memory Games
  {
    id: 'memory-palace',
    name: 'Memory Palace',
    description: 'Train your memory using ancient techniques and spatial visualization',
    category: 'memory',
    icon: '🏛️',
    isPopular: true,
    href: '/games/memory-palace'
  },
  {
    id: 'pattern-recall',
    name: 'Pattern Recall',
    description: 'Improve working memory by remembering and reproducing patterns',
    category: 'memory',
    icon: '🎨',
    href: '/games/pattern-recall'
  },
  {
    id: 'number-sequence',
    name: 'Number Sequence',
    description: 'Challenge your memory with increasingly complex number sequences',
    category: 'memory',
    icon: '🔢',
    href: '/games/number-sequence'
  },
  {
    id: 'brain-training',
    name: 'Brain Training',
    description: 'Comprehensive brain exercises to improve focus and attention',
    category: 'memory',
    icon: '🧠',
    href: '/games/brain-training'
  },

  // Logic Games
  {
    id: 'logic-puzzles',
    name: 'Logic Puzzles',
    description: 'Solve challenging logic puzzles that develop critical thinking',
    category: 'logic',
    icon: '🧩',
    isPopular: true,
    href: '/games/logic-puzzles'
  },
  {
    id: 'sudoku-master',
    name: 'Sudoku Master',
    description: 'Master the classic number puzzle with varying difficulty levels',
    category: 'logic',
    icon: '🔢',
    href: '/games/sudoku-master'
  },
  {
    id: 'chess-tactics',
    name: 'Chess Tactics',
    description: 'Learn chess strategy and tactics through interactive lessons',
    category: 'logic',
    icon: '♟️',
    href: '/games/chess-tactics'
  },
  {
    id: 'code-breaker',
    name: 'Code Breaker',
    description: 'Develop logical reasoning by cracking codes and ciphers',
    category: 'logic',
    icon: '🔐',
    href: '/games/code-breaker'
  }
];

// Export tools directly since hrefs are now correctly set in the data
export const tools: Tool[] = toolsData;

export const popularTools = tools.filter(tool => tool.isPopular);

export const getToolsByCategory = (category: string) => {
  if (category === 'all') return tools;
  return tools.filter(tool => tool.category === category);
};

export const getCategoryStats = () => {
  const stats: Record<string, number> = {};
  Object.keys(categories).forEach(key => {
    stats[key] = tools.filter(tool => tool.category === key).length;
  });
  return stats;
};