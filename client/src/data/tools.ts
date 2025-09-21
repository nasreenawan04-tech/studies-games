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
  // All games have been removed
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