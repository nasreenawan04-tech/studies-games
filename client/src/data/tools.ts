
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
    description: 'Master multiplication tables through engaging challenges and timed exercises',
    category: 'math',
    icon: '✖️',
    isPopular: true,
    href: '/games/multiplication-master'
  },
  {
    id: 'fraction-frenzy',
    name: 'Fraction Frenzy',
    description: 'Learn fractions through interactive games and visual representations',
    category: 'math',
    icon: '⅓',
    href: '/games/fraction-frenzy'
  },
  {
    id: 'algebra-adventure',
    name: 'Algebra Adventure',
    description: 'Solve algebraic equations in an exciting adventure-based learning environment',
    category: 'math',
    icon: '📐',
    href: '/games/algebra-adventure'
  },
  {
    id: 'geometry-genius',
    name: 'Geometry Genius',
    description: 'Explore shapes, angles, and spatial relationships through interactive puzzles',
    category: 'math',
    icon: '📏',
    href: '/games/geometry-genius'
  },
  {
    id: 'percentage-puzzle',
    name: 'Percentage Puzzle',
    description: 'Master percentages through fun problem-solving challenges',
    category: 'math',
    icon: '%',
    href: '/games/percentage-puzzle'
  },
  {
    id: 'math-speed-challenge',
    name: 'Math Speed Challenge',
    description: 'Test your mental math skills in this fast-paced arithmetic challenge game',
    category: 'math',
    icon: '⚡',
    isPopular: true,
    href: '/games/math-speed-challenge'
  },

  // Science Games
  {
    id: 'periodic-table-quest',
    name: 'Periodic Table Quest',
    description: 'Explore chemical elements through interactive adventures and virtual experiments',
    category: 'science',
    icon: '⚛️',
    isPopular: true,
    href: '/games/periodic-table-quest'
  },
  {
    id: 'physics-playground',
    name: 'Physics Playground',
    description: 'Experiment with physics concepts through interactive simulations and games',
    category: 'science',
    icon: '🔬',
    href: '/games/physics-playground'
  },
  {
    id: 'biology-explorer',
    name: 'Biology Explorer',
    description: 'Discover life sciences through virtual dissections and ecosystem simulations',
    category: 'science',
    icon: '🧬',
    href: '/games/biology-explorer'
  },
  {
    id: 'astronomy-adventure',
    name: 'Astronomy Adventure',
    description: 'Explore the solar system and universe through interactive space missions',
    category: 'science',
    icon: '🌌',
    href: '/games/astronomy-adventure'
  },
  {
    id: 'earth-science-lab',
    name: 'Earth Science Lab',
    description: 'Study geology, weather, and environmental science through virtual experiments',
    category: 'science',
    icon: '🌍',
    href: '/games/earth-science-lab'
  },
  {
    id: 'chemistry-lab',
    name: 'Chemistry Lab',
    description: 'Learn about chemical reactions and compounds through safe virtual experiments',
    category: 'science',
    icon: '🧪',
    href: '/games/chemistry-lab'
  },

  // Language Games
  {
    id: 'vocabulary-builder',
    name: 'Vocabulary Builder',
    description: 'Build your vocabulary through interactive games, quizzes, and spaced repetition',
    category: 'language',
    icon: '📚',
    isPopular: true,
    href: '/games/vocabulary-builder'
  },
  {
    id: 'grammar-challenge',
    name: 'Grammar Challenge',
    description: 'Master grammar rules through engaging exercises and interactive challenges',
    category: 'language',
    icon: '✏️',
    href: '/games/grammar-challenge'
  },
  {
    id: 'spelling-bee',
    name: 'Spelling Bee',
    description: 'Improve spelling skills through competitive and progressive spelling challenges',
    category: 'language',
    icon: '🐝',
    href: '/games/spelling-bee'
  },
  {
    id: 'reading-comprehension',
    name: 'Reading Comprehension',
    description: 'Enhance reading skills through interactive stories and comprehension exercises',
    category: 'language',
    icon: '📖',
    href: '/games/reading-comprehension'
  },
  {
    id: 'creative-writing',
    name: 'Creative Writing',
    description: 'Develop writing skills through guided prompts and interactive storytelling',
    category: 'language',
    icon: '✍️',
    href: '/games/creative-writing'
  },
  {
    id: 'word-analysis',
    name: 'Word Analysis',
    description: 'Learn about word structure and text analysis through interactive games',
    category: 'language',
    icon: '🔢',
    href: '/games/word-analysis'
  },

  // Memory Games
  {
    id: 'memory-palace',
    name: 'Memory Palace Builder',
    description: 'Build memory palaces to enhance recall and memorization skills',
    category: 'memory',
    icon: '🏰',
    isPopular: true,
    href: '/games/memory-palace'
  },
  {
    id: 'sequence-master',
    name: 'Sequence Master',
    description: 'Remember and repeat increasingly complex sequences of colors, sounds, and patterns',
    category: 'memory',
    icon: '🎯',
    href: '/games/sequence-master'
  },
  {
    id: 'pattern-recall',
    name: 'Pattern Recall',
    description: 'Train visual memory through pattern recognition and recall exercises',
    category: 'memory',
    icon: '🧩',
    href: '/games/pattern-recall'
  },
  {
    id: 'dual-n-back',
    name: 'Dual N-Back Training',
    description: 'Improve working memory and cognitive flexibility through dual n-back exercises',
    category: 'memory',
    icon: '🧠',
    href: '/games/dual-n-back'
  },
  {
    id: 'number-memory',
    name: 'Number Memory',
    description: 'Enhance numerical memory through progressive digit span exercises',
    category: 'memory',
    icon: '🔢',
    href: '/games/number-memory'
  },
  {
    id: 'spatial-memory',
    name: 'Spatial Memory',
    description: 'Develop spatial working memory through grid-based recall challenges',
    category: 'memory',
    icon: '📍',
    href: '/games/spatial-memory'
  },

  // Logic Games
  {
    id: 'sudoku-solver',
    name: 'Sudoku Solver',
    description: 'Master sudoku puzzles with hints, solving techniques, and progressive difficulty',
    category: 'logic',
    icon: '🧮',
    isPopular: true,
    href: '/games/sudoku-solver'
  },
  {
    id: 'chess-tactics',
    name: 'Chess Tactics',
    description: 'Improve chess strategy through tactical puzzles and position analysis',
    category: 'logic',
    icon: '♟️',
    href: '/games/chess-tactics'
  },
  {
    id: 'brain-teasers',
    name: 'Brain Teasers',
    description: 'Challenge your mind with classic logic puzzles and riddles',
    category: 'logic',
    icon: '🤔',
    href: '/games/brain-teasers'
  },
  {
    id: 'logic-grid-puzzles',
    name: 'Logic Grid Puzzles',
    description: 'Solve complex logic grid puzzles using deductive reasoning',
    category: 'logic',
    icon: '📊',
    href: '/games/logic-grid-puzzles'
  },
  {
    id: 'tower-of-hanoi',
    name: 'Tower of Hanoi',
    description: 'Master the classic Tower of Hanoi puzzle with varying difficulty levels',
    category: 'logic',
    icon: '🗼',
    href: '/games/tower-of-hanoi'
  },
  {
    id: 'code-breaker',
    name: 'Code Breaker',
    description: 'Crack codes and ciphers using logical deduction and pattern recognition',
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
