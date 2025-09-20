
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

const toolsData = [
  // Math Games (36) - Transformed from finance tools
  { id: 'addition-race', name: 'Addition Race', description: 'Race against time to solve addition problems and improve mental math speed', category: 'math' as const, icon: 'fas fa-plus', isPopular: true, href: '/games/addition-race' },
  { id: 'multiplication-master', name: 'Multiplication Master', description: 'Master multiplication tables with interactive practice and challenges', category: 'math' as const, icon: 'fas fa-times', href: '/games/multiplication-master' },
  { id: 'fraction-frenzy', name: 'Fraction Frenzy', description: 'Learn fractions through fun games and visual representations', category: 'math' as const, icon: 'fas fa-divide', href: '/games/fraction-frenzy' },
  { id: 'algebra-adventure', name: 'Algebra Adventure', description: 'Solve algebraic equations in an exciting adventure setting', category: 'math' as const, icon: 'fas fa-square-root-alt', href: '/games/algebra-adventure' },
  { id: 'geometry-quest', name: 'Geometry Quest', description: 'Explore shapes, angles, and spatial reasoning through interactive puzzles', category: 'math' as const, icon: 'fas fa-shapes', href: '/games/geometry-quest' },
  { id: 'number-ninja', name: 'Number Ninja', description: 'Slice through math problems with lightning-fast calculations', category: 'math' as const, icon: 'fas fa-bolt', href: '/games/number-ninja' },
  { id: 'decimal-detective', name: 'Decimal Detective', description: 'Investigate decimal mysteries and master decimal operations', category: 'math' as const, icon: 'fas fa-search', href: '/games/decimal-detective' },
  { id: 'percentage-puzzle', name: 'Percentage Puzzle', description: 'Solve percentage problems through engaging puzzle challenges', category: 'math' as const, icon: 'fas fa-percentage', isPopular: true, href: '/games/percentage-calculator' },
  { id: 'statistics-showdown', name: 'Statistics Showdown', description: 'Battle with mean, median, mode, and probability concepts', category: 'math' as const, icon: 'fas fa-chart-bar', href: '/games/statistics-showdown' },
  { id: 'calculus-challenge', name: 'Calculus Challenge', description: 'Advanced calculus problems presented as interactive challenges', category: 'math' as const, icon: 'fas fa-integral', href: '/games/calculus-challenge' },
  { id: 'mental-math-marathon', name: 'Mental Math Marathon', description: 'Build mental calculation speed with timed exercises', category: 'math' as const, icon: 'fas fa-running', href: '/games/mental-math-marathon' },
  { id: 'prime-number-hunt', name: 'Prime Number Hunt', description: 'Hunt for prime numbers while learning number theory', category: 'math' as const, icon: 'fas fa-target', href: '/games/prime-number-hunt' },
  { id: 'equation-builder', name: 'Equation Builder', description: 'Build and solve equations using drag-and-drop mechanics', category: 'math' as const, icon: 'fas fa-equals', href: '/games/equation-builder' },
  { id: 'graph-explorer', name: 'Graph Explorer', description: 'Explore coordinate planes and graph functions interactively', category: 'math' as const, icon: 'fas fa-project-diagram', href: '/games/graph-explorer' },
  { id: 'logic-puzzles', name: 'Math Logic Puzzles', description: 'Solve complex mathematical logic problems and brain teasers', category: 'math' as const, icon: 'fas fa-puzzle-piece', href: '/games/logic-puzzles' },
  { id: 'pattern-master', name: 'Pattern Master', description: 'Identify and complete mathematical patterns and sequences', category: 'math' as const, icon: 'fas fa-sync', href: '/games/pattern-master' },
  { id: 'measurement-mayhem', name: 'Measurement Mayhem', description: 'Convert units and solve measurement problems in chaos', category: 'math' as const, icon: 'fas fa-ruler', href: '/games/measurement-mayhem' },
  { id: 'money-math', name: 'Money Math Mastery', description: 'Learn financial math through real-world money scenarios', category: 'math' as const, icon: 'fas fa-coins', href: '/games/loan-calculator' },
  { id: 'time-calculator', name: 'Time Calculator Game', description: 'Master time calculations and duration problems', category: 'math' as const, icon: 'fas fa-clock', href: '/games/time-calculator' },
  { id: 'ratio-race', name: 'Ratio Race', description: 'Speed through ratio and proportion challenges', category: 'math' as const, icon: 'fas fa-balance-scale', href: '/games/ratio-race' },
  { id: 'exponent-explorer', name: 'Exponent Explorer', description: 'Discover the power of exponents through interactive learning', category: 'math' as const, icon: 'fas fa-superscript', href: '/games/compound-interest-calculator' },
  { id: 'coordinate-conquest', name: 'Coordinate Conquest', description: 'Navigate coordinate planes and plot points strategically', category: 'math' as const, icon: 'fas fa-map-marker-alt', href: '/games/coordinate-conquest' },
  { id: 'symmetry-studio', name: 'Symmetry Studio', description: 'Create and identify symmetrical patterns and transformations', category: 'math' as const, icon: 'fas fa-reflect', href: '/games/symmetry-studio' },
  { id: 'volume-visualizer', name: 'Volume Visualizer', description: 'Calculate and visualize 3D shapes and their volumes', category: 'math' as const, icon: 'fas fa-cube', href: '/games/volume-visualizer' },
  { id: 'area-architect', name: 'Area Architect', description: 'Design shapes while calculating areas and perimeters', category: 'math' as const, icon: 'fas fa-drafting-compass', href: '/games/area-architect' },
  { id: 'number-line-jump', name: 'Number Line Jump', description: 'Navigate number lines while solving mathematical operations', category: 'math' as const, icon: 'fas fa-arrows-alt-h', href: '/games/number-line-jump' },
  { id: 'factorial-factory', name: 'Factorial Factory', description: 'Build factorials and explore combinatorics concepts', category: 'math' as const, icon: 'fas fa-industry', href: '/games/factorial-factory' },
  { id: 'matrix-mission', name: 'Matrix Mission', description: 'Solve matrix operations and linear algebra problems', category: 'math' as const, icon: 'fas fa-th', href: '/games/matrix-mission' },
  { id: 'trigonometry-tower', name: 'Trigonometry Tower', description: 'Climb towers using sine, cosine, and tangent functions', category: 'math' as const, icon: 'fas fa-triangle', href: '/games/trigonometry-tower' },
  { id: 'word-problem-warrior', name: 'Word Problem Warrior', description: 'Conquer real-world math problems presented as word challenges', category: 'math' as const, icon: 'fas fa-book-open', href: '/games/word-problem-warrior' },
  { id: 'calculator-challenge', name: 'Calculator Challenge', description: 'Solve complex calculations faster than a calculator', category: 'math' as const, icon: 'fas fa-calculator', href: '/games/calculator-challenge' },
  { id: 'math-bingo', name: 'Math Bingo', description: 'Play bingo while solving mathematical equations', category: 'math' as const, icon: 'fas fa-th-large', href: '/games/math-bingo' },
  { id: 'shopping-spree-math', name: 'Shopping Spree Math', description: 'Practice real-world math through virtual shopping scenarios', category: 'math' as const, icon: 'fas fa-shopping-cart', href: '/games/discount-calculator' },
  { id: 'estimation-expert', name: 'Estimation Expert', description: 'Develop number sense through estimation challenges', category: 'math' as const, icon: 'fas fa-eye', href: '/games/estimation-expert' },
  { id: 'math-memory-match', name: 'Math Memory Match', description: 'Match equations with answers in this memory card game', category: 'math' as const, icon: 'fas fa-cards', href: '/games/math-memory-match' },
  { id: 'speed-math-duel', name: 'Speed Math Duel', description: 'Challenge friends in fast-paced math competitions', category: 'math' as const, icon: 'fas fa-stopwatch', href: '/games/speed-math-duel' },

  // Language Games (32) - Transformed from text tools
  { id: 'vocabulary-builder', name: 'Vocabulary Builder', description: 'Learn new words through interactive games and quizzes', category: 'language' as const, icon: 'fas fa-book', isPopular: true, href: '/games/vocabulary-builder' },
  { id: 'spelling-bee-champion', name: 'Spelling Bee Champion', description: 'Master spelling through progressive difficulty challenges', category: 'language' as const, icon: 'fas fa-spell-check', href: '/games/spelling-bee-champion' },
  { id: 'grammar-guardian', name: 'Grammar Guardian', description: 'Learn grammar rules through interactive story adventures', category: 'language' as const, icon: 'fas fa-pen-fancy', href: '/games/grammar-guardian' },
  { id: 'sentence-scramble', name: 'Sentence Scramble', description: 'Unscramble words and sentences to improve reading comprehension', category: 'language' as const, icon: 'fas fa-random', href: '/games/sentence-scramble' },
  { id: 'word-association', name: 'Word Association Challenge', description: 'Connect words through associations and build vocabulary networks', category: 'language' as const, icon: 'fas fa-link', href: '/games/word-association' },
  { id: 'reading-comprehension', name: 'Reading Comprehension Quest', description: 'Improve reading skills through engaging story-based challenges', category: 'language' as const, icon: 'fas fa-book-reader', href: '/games/reading-comprehension' },
  { id: 'rhyme-time', name: 'Rhyme Time', description: 'Learn rhyming patterns and phonics through musical games', category: 'language' as const, icon: 'fas fa-music', href: '/games/rhyme-time' },
  { id: 'synonym-detective', name: 'Synonym Detective', description: 'Hunt for synonyms and antonyms in word mystery adventures', category: 'language' as const, icon: 'fas fa-search', href: '/games/synonym-detective' },
  { id: 'poetry-playground', name: 'Poetry Playground', description: 'Create and analyze poetry while learning literary devices', category: 'language' as const, icon: 'fas fa-feather-alt', href: '/games/poetry-playground' },
  { id: 'story-builder', name: 'Story Builder', description: 'Construct stories using narrative elements and creative writing tools', category: 'language' as const, icon: 'fas fa-pencil-alt', href: '/games/story-builder' },
  { id: 'language-translator', name: 'Language Translator Game', description: 'Learn foreign languages through translation challenges', category: 'language' as const, icon: 'fas fa-language', href: '/games/language-translator' },
  { id: 'word-roots-explorer', name: 'Word Roots Explorer', description: 'Discover etymology and word origins through exploration games', category: 'language' as const, icon: 'fas fa-tree', href: '/games/word-roots-explorer' },
  { id: 'punctuation-pro', name: 'Punctuation Pro', description: 'Master punctuation rules through interactive exercises', category: 'language' as const, icon: 'fas fa-exclamation', href: '/games/punctuation-pro' },
  { id: 'debate-master', name: 'Debate Master', description: 'Develop argumentation and persuasion skills through debates', category: 'language' as const, icon: 'fas fa-gavel', href: '/games/debate-master' },
  { id: 'crossword-creator', name: 'Crossword Creator', description: 'Create and solve crossword puzzles to enhance vocabulary', category: 'language' as const, icon: 'fas fa-th', href: '/games/crossword-creator' },
  { id: 'idiom-island', name: 'Idiom Island', description: 'Explore idiomatic expressions through adventure gameplay', category: 'language' as const, icon: 'fas fa-island-tropical', href: '/games/idiom-island' },
  { id: 'phonics-fun', name: 'Phonics Fun', description: 'Learn letter sounds and reading fundamentals through games', category: 'language' as const, icon: 'fas fa-volume-up', href: '/games/phonics-fun' },
  { id: 'creative-writing-workshop', name: 'Creative Writing Workshop', description: 'Develop creative writing skills through guided prompts', category: 'language' as const, icon: 'fas fa-edit', href: '/games/creative-writing-workshop' },
  { id: 'word-ladder-challenge', name: 'Word Ladder Challenge', description: 'Transform words one letter at a time in puzzle challenges', category: 'language' as const, icon: 'fas fa-ladder', href: '/games/word-ladder-challenge' },
  { id: 'literary-analysis', name: 'Literary Analysis Academy', description: 'Analyze literature and develop critical thinking skills', category: 'language' as const, icon: 'fas fa-microscope', href: '/games/literary-analysis' },
  { id: 'public-speaking-simulator', name: 'Public Speaking Simulator', description: 'Practice presentation skills in virtual environments', category: 'language' as const, icon: 'fas fa-microphone', href: '/games/public-speaking-simulator' },
  { id: 'word-formation', name: 'Word Formation Factory', description: 'Learn prefixes, suffixes, and word building techniques', category: 'language' as const, icon: 'fas fa-industry', href: '/games/word-formation' },
  { id: 'dialogue-director', name: 'Dialogue Director', description: 'Write and direct conversations to learn dialogue techniques', category: 'language' as const, icon: 'fas fa-comments', href: '/games/dialogue-director' },
  { id: 'proofreading-pro', name: 'Proofreading Pro', description: 'Find and fix errors in text through editing challenges', category: 'language' as const, icon: 'fas fa-check-double', href: '/games/proofreading-pro' },
  { id: 'speed-reading-trainer', name: 'Speed Reading Trainer', description: 'Improve reading speed and comprehension through exercises', category: 'language' as const, icon: 'fas fa-tachometer-alt', href: '/games/speed-reading-trainer' },
  { id: 'character-analysis', name: 'Character Analysis Game', description: 'Analyze literary characters and their development arcs', category: 'language' as const, icon: 'fas fa-user-friends', href: '/games/character-analysis' },
  { id: 'metaphor-master', name: 'Metaphor Master', description: 'Learn figurative language through creative comparisons', category: 'language' as const, icon: 'fas fa-magic', href: '/games/metaphor-master' },
  { id: 'journalism-journey', name: 'Journalism Journey', description: 'Learn news writing and reporting through simulated scenarios', category: 'language' as const, icon: 'fas fa-newspaper', href: '/games/journalism-journey' },
  { id: 'language-pattern-game', name: 'Language Pattern Game', description: 'Identify patterns in language structure and grammar', category: 'language' as const, icon: 'fas fa-pattern', href: '/games/language-pattern-game' },
  { id: 'etymology-explorer', name: 'Etymology Explorer', description: 'Trace word histories and linguistic evolution through time', category: 'language' as const, icon: 'fas fa-history', href: '/games/etymology-explorer' },
  { id: 'word-counter-game', name: 'Word Counter Challenge', description: 'Practice text analysis and word counting skills', category: 'language' as const, icon: 'fas fa-calculator', isPopular: true, href: '/games/word-counter' },
  { id: 'case-converter-game', name: 'Case Converter Challenge', description: 'Master text formatting and case conversion skills', category: 'language' as const, icon: 'fas fa-font', href: '/games/case-converter' },

  // Science Games (25) - Transformed from health tools
  { id: 'periodic-table-quest', name: 'Periodic Table Quest', description: 'Explore chemical elements through interactive adventures', category: 'science' as const, icon: 'fas fa-atom', isPopular: true, href: '/games/periodic-table-quest' },
  { id: 'physics-playground', name: 'Physics Playground', description: 'Learn physics principles through hands-on experiments', category: 'science' as const, icon: 'fas fa-apple-alt', href: '/games/physics-playground' },
  { id: 'biology-explorer', name: 'Biology Explorer', description: 'Discover life sciences through virtual laboratory experiences', category: 'science' as const, icon: 'fas fa-dna', href: '/games/biology-explorer' },
  { id: 'chemistry-lab', name: 'Chemistry Lab Simulator', description: 'Conduct safe virtual chemistry experiments and reactions', category: 'science' as const, icon: 'fas fa-flask', href: '/games/chemistry-lab' },
  { id: 'astronomy-adventure', name: 'Astronomy Adventure', description: 'Journey through space and learn about celestial bodies', category: 'science' as const, icon: 'fas fa-rocket', href: '/games/astronomy-adventure' },
  { id: 'earth-science-expedition', name: 'Earth Science Expedition', description: 'Explore geology, weather, and environmental science', category: 'science' as const, icon: 'fas fa-globe-americas', href: '/games/earth-science-expedition' },
  { id: 'human-body-voyage', name: 'Human Body Voyage', description: 'Travel through body systems and learn anatomy', category: 'science' as const, icon: 'fas fa-user-md', href: '/games/bmi-calculator' },
  { id: 'ecosystem-builder', name: 'Ecosystem Builder', description: 'Create and balance natural ecosystems and food chains', category: 'science' as const, icon: 'fas fa-leaf', href: '/games/ecosystem-builder' },
  { id: 'molecular-architect', name: 'Molecular Architect', description: 'Build molecules and understand chemical bonding', category: 'science' as const, icon: 'fas fa-project-diagram', href: '/games/molecular-architect' },
  { id: 'energy-engineer', name: 'Energy Engineer', description: 'Learn about different energy sources and conservation', category: 'science' as const, icon: 'fas fa-bolt', href: '/games/energy-engineer' },
  { id: 'microscope-detective', name: 'Microscope Detective', description: 'Investigate the microscopic world and cell biology', category: 'science' as const, icon: 'fas fa-microscope', href: '/games/microscope-detective' },
  { id: 'weather-wizard', name: 'Weather Wizard', description: 'Predict weather patterns and understand meteorology', category: 'science' as const, icon: 'fas fa-cloud-rain', href: '/games/weather-wizard' },
  { id: 'genetics-genius', name: 'Genetics Genius', description: 'Explore heredity, DNA, and genetic engineering concepts', category: 'science' as const, icon: 'fas fa-dna', href: '/games/genetics-genius' },
  { id: 'simple-machines-master', name: 'Simple Machines Master', description: 'Learn about levers, pulleys, and mechanical advantage', category: 'science' as const, icon: 'fas fa-cogs', href: '/games/simple-machines-master' },
  { id: 'plant-biologist', name: 'Plant Biologist', description: 'Study plant growth, photosynthesis, and botany', category: 'science' as const, icon: 'fas fa-seedling', href: '/games/plant-biologist' },
  { id: 'fossil-hunter', name: 'Fossil Hunter', description: 'Discover paleontology and evolution through fossil exploration', category: 'science' as const, icon: 'fas fa-bone', href: '/games/fossil-hunter' },
  { id: 'ocean-explorer', name: 'Ocean Explorer', description: 'Dive into marine biology and oceanography', category: 'science' as const, icon: 'fas fa-water', href: '/games/ocean-explorer' },
  { id: 'space-mission-planner', name: 'Space Mission Planner', description: 'Design space missions and learn rocket science', category: 'science' as const, icon: 'fas fa-space-shuttle', href: '/games/space-mission-planner' },
  { id: 'environmental-scientist', name: 'Environmental Scientist', description: 'Study environmental issues and sustainability solutions', category: 'science' as const, icon: 'fas fa-recycle', href: '/games/environmental-scientist' },
  { id: 'science-method-detective', name: 'Science Method Detective', description: 'Learn scientific method through investigation scenarios', category: 'science' as const, icon: 'fas fa-search', href: '/games/science-method-detective' },
  { id: 'inventor-workshop', name: 'Inventor Workshop', description: 'Design inventions and learn engineering principles', category: 'science' as const, icon: 'fas fa-tools', href: '/games/inventor-workshop' },
  { id: 'particle-physics-lab', name: 'Particle Physics Lab', description: 'Explore subatomic particles and quantum physics', category: 'science' as const, icon: 'fas fa-atom', href: '/games/particle-physics-lab' },
  { id: 'medicine-maker', name: 'Medicine Maker', description: 'Learn pharmacology and drug development processes', category: 'science' as const, icon: 'fas fa-pills', href: '/games/medicine-maker' },
  { id: 'robotics-engineer', name: 'Robotics Engineer', description: 'Build and program robots while learning engineering', category: 'science' as const, icon: 'fas fa-robot', href: '/games/robotics-engineer' },
  { id: 'volcano-investigator', name: 'Volcano Investigator', description: 'Study volcanoes, tectonic plates, and geological forces', category: 'science' as const, icon: 'fas fa-mountain', href: '/games/volcano-investigator' },

  // Memory Games (25)
  { id: 'memory-palace', name: 'Memory Palace Builder', description: 'Build memory palaces to enhance recall and memorization', category: 'memory' as const, icon: 'fas fa-castle', isPopular: true, href: '/games/memory-palace' },
  { id: 'sequence-master', name: 'Sequence Master', description: 'Remember and repeat increasingly complex sequences', category: 'memory' as const, icon: 'fas fa-list-ol', href: '/games/sequence-master' },
  { id: 'face-name-champion', name: 'Face-Name Champion', description: 'Master the art of remembering names and faces', category: 'memory' as const, icon: 'fas fa-user-friends', href: '/games/face-name-champion' },
  { id: 'number-memorizer', name: 'Number Memorizer', description: 'Develop techniques to memorize long sequences of numbers', category: 'memory' as const, icon: 'fas fa-sort-numeric-down', href: '/games/number-memorizer' },
  { id: 'dual-n-back', name: 'Dual N-Back Training', description: 'Improve working memory through dual n-back exercises', category: 'memory' as const, icon: 'fas fa-brain', href: '/games/dual-n-back' },
  { id: 'spatial-memory-grid', name: 'Spatial Memory Grid', description: 'Enhance spatial memory through grid-based challenges', category: 'memory' as const, icon: 'fas fa-th', href: '/games/spatial-memory-grid' },
  { id: 'word-chain-memory', name: 'Word Chain Memory', description: 'Build memory chains using word associations', category: 'memory' as const, icon: 'fas fa-link', href: '/games/word-chain-memory' },
  { id: 'shopping-list-game', name: 'Shopping List Memory Game', description: 'Memorize shopping lists using memory techniques', category: 'memory' as const, icon: 'fas fa-shopping-basket', href: '/games/shopping-list-game' },
  { id: 'pattern-recall', name: 'Pattern Recall Challenge', description: 'Memorize and recreate visual patterns accurately', category: 'memory' as const, icon: 'fas fa-pattern', href: '/games/pattern-recall' },
  { id: 'memory-cards-pro', name: 'Memory Cards Pro', description: 'Advanced memory card matching with multiple difficulty levels', category: 'memory' as const, icon: 'fas fa-cards', href: '/games/memory-cards-pro' },
  { id: 'story-memorization', name: 'Story Memorization', description: 'Memorize stories and improve narrative memory skills', category: 'memory' as const, icon: 'fas fa-book-open', href: '/games/story-memorization' },
  { id: 'color-sequence', name: 'Color Sequence Memory', description: 'Remember complex color patterns and sequences', category: 'memory' as const, icon: 'fas fa-palette', href: '/games/color-sequence' },
  { id: 'audio-memory-trainer', name: 'Audio Memory Trainer', description: 'Enhance auditory memory through sound sequences', category: 'memory' as const, icon: 'fas fa-volume-up', href: '/games/audio-memory-trainer' },
  { id: 'visual-memory-matrix', name: 'Visual Memory Matrix', description: 'Memorize positions in increasingly complex matrices', category: 'memory' as const, icon: 'fas fa-border-all', href: '/games/visual-memory-matrix' },
  { id: 'memory-sports-training', name: 'Memory Sports Training', description: 'Train for memory competitions with specialized exercises', category: 'memory' as const, icon: 'fas fa-trophy', href: '/games/memory-sports-training' },
  { id: 'vocabulary-memorizer', name: 'Vocabulary Memorizer', description: 'Memorize vocabulary words using spaced repetition', category: 'memory' as const, icon: 'fas fa-language', href: '/games/vocabulary-memorizer' },
  { id: 'historical-dates', name: 'Historical Dates Memory', description: 'Memorize important historical dates and events', category: 'memory' as const, icon: 'fas fa-history', href: '/games/historical-dates' },
  { id: 'phone-number-master', name: 'Phone Number Master', description: 'Learn to quickly memorize phone numbers and codes', category: 'memory' as const, icon: 'fas fa-phone', href: '/games/phone-number-master' },
  { id: 'memory-improvement-gym', name: 'Memory Improvement Gym', description: 'Comprehensive memory workout with various exercises', category: 'memory' as const, icon: 'fas fa-dumbbell', href: '/games/memory-improvement-gym' },
  { id: 'chunking-trainer', name: 'Chunking Trainer', description: 'Learn to break information into memorable chunks', category: 'memory' as const, icon: 'fas fa-layer-group', href: '/games/chunking-trainer' },
  { id: 'mnemonic-device-maker', name: 'Mnemonic Device Maker', description: 'Create and practice mnemonic devices for better recall', category: 'memory' as const, icon: 'fas fa-lightbulb', href: '/games/mnemonic-device-maker' },
  { id: 'concentration-camp', name: 'Concentration Camp', description: 'Improve focus and concentration through targeted exercises', category: 'memory' as const, icon: 'fas fa-bullseye', href: '/games/concentration-camp' },
  { id: 'memory-speed-test', name: 'Memory Speed Test', description: 'Test and improve memory recall speed with time limits', category: 'memory' as const, icon: 'fas fa-stopwatch', href: '/games/memory-speed-test' },
  { id: 'associative-memory', name: 'Associative Memory Builder', description: 'Strengthen memory through association techniques', category: 'memory' as const, icon: 'fas fa-handshake', href: '/games/associative-memory' },
  { id: 'memory-maze', name: 'Memory Maze Navigator', description: 'Navigate mazes using memory and spatial awareness', category: 'memory' as const, icon: 'fas fa-route', href: '/games/memory-maze' },

  // Logic & Puzzles (32)
  { id: 'sudoku-solver', name: 'Sudoku Solver', description: 'Master sudoku puzzles with hints and solving techniques', category: 'logic' as const, icon: 'fas fa-th', isPopular: true, href: '/games/sudoku-solver' },
  { id: 'chess-tactics-trainer', name: 'Chess Tactics Trainer', description: 'Improve chess strategy through tactical puzzles', category: 'logic' as const, icon: 'fas fa-chess', href: '/games/chess-tactics-trainer' },
  { id: 'logic-grid-puzzles', name: 'Logic Grid Puzzles', description: 'Solve deductive reasoning puzzles using logic grids', category: 'logic' as const, icon: 'fas fa-border-all', href: '/games/logic-grid-puzzles' },
  { id: 'brain-teasers', name: 'Brain Teasers Collection', description: 'Challenge yourself with mind-bending brain teasers', category: 'logic' as const, icon: 'fas fa-brain', href: '/games/brain-teasers' },
  { id: 'riddle-master', name: 'Riddle Master', description: 'Solve riddles and develop lateral thinking skills', category: 'logic' as const, icon: 'fas fa-question-circle', href: '/games/riddle-master' },
  { id: 'crossword-puzzle-pro', name: 'Crossword Puzzle Pro', description: 'Advanced crossword puzzles for vocabulary building', category: 'logic' as const, icon: 'fas fa-th-large', href: '/games/crossword-puzzle-pro' },
  { id: 'tower-of-hanoi', name: 'Tower of Hanoi Challenge', description: 'Master the classic recursive puzzle with multiple levels', category: 'logic' as const, icon: 'fas fa-layer-group', href: '/games/tower-of-hanoi' },
  { id: 'logic-circuits', name: 'Logic Circuits Builder', description: 'Learn boolean logic through interactive circuit building', category: 'logic' as const, icon: 'fas fa-microchip', href: '/games/logic-circuits' },
  { id: 'nonogram-painter', name: 'Nonogram Painter', description: 'Solve picture logic puzzles by painting grids', category: 'logic' as const, icon: 'fas fa-paint-brush', href: '/games/nonogram-painter' },
  { id: 'bridge-builder', name: 'Bridge Builder Logic', description: 'Apply engineering logic to build stable structures', category: 'logic' as const, icon: 'fas fa-bridge', href: '/games/bridge-builder' },
  { id: 'pattern-detective', name: 'Pattern Detective', description: 'Identify and complete complex logical patterns', category: 'logic' as const, icon: 'fas fa-search', href: '/games/pattern-detective' },
  { id: 'syllogism-solver', name: 'Syllogism Solver', description: 'Master logical reasoning through syllogistic arguments', category: 'logic' as const, icon: 'fas fa-balance-scale', href: '/games/syllogism-solver' },
  { id: 'kakuro-master', name: 'Kakuro Master', description: 'Solve mathematical crossword puzzles with number clues', category: 'logic' as const, icon: 'fas fa-plus', href: '/games/kakuro-master' },
  { id: 'logic-maze-runner', name: 'Logic Maze Runner', description: 'Navigate mazes using logical deduction and rules', category: 'logic' as const, icon: 'fas fa-route', href: '/games/logic-maze-runner' },
  { id: 'truth-table-builder', name: 'Truth Table Builder', description: 'Build and analyze logical truth tables', category: 'logic' as const, icon: 'fas fa-table', href: '/games/truth-table-builder' },
  { id: 'cryptogram-decoder', name: 'Cryptogram Decoder', description: 'Decode encrypted messages using logical analysis', category: 'logic' as const, icon: 'fas fa-key', href: '/games/cryptogram-decoder' },
  { id: 'sliding-puzzle-pro', name: 'Sliding Puzzle Pro', description: 'Master sliding tile puzzles with optimal solutions', category: 'logic' as const, icon: 'fas fa-puzzle-piece', href: '/games/sliding-puzzle-pro' },
  { id: 'logic-bomb-defuser', name: 'Logic Bomb Defuser', description: 'Defuse bombs using logical reasoning under pressure', category: 'logic' as const, icon: 'fas fa-bomb', href: '/games/logic-bomb-defuser' },
  { id: 'set-theory-explorer', name: 'Set Theory Explorer', description: 'Learn set operations through interactive puzzles', category: 'logic' as const, icon: 'fas fa-circle', href: '/games/set-theory-explorer' },
  { id: 'rubiks-cube-solver', name: 'Rubiks Cube Solver', description: 'Learn algorithms to solve the classic cube puzzle', category: 'logic' as const, icon: 'fas fa-cube', href: '/games/rubiks-cube-solver' },
  { id: 'number-logic-puzzles', name: 'Number Logic Puzzles', description: 'Solve puzzles combining numbers with logical reasoning', category: 'logic' as const, icon: 'fas fa-calculator', href: '/games/number-logic-puzzles' },
  { id: 'deductive-detective', name: 'Deductive Detective', description: 'Solve mysteries using deductive reasoning skills', category: 'logic' as const, icon: 'fas fa-user-secret', href: '/games/deductive-detective' },
  { id: 'propositional-logic', name: 'Propositional Logic Trainer', description: 'Master formal logic and propositional reasoning', category: 'logic' as const, icon: 'fas fa-project-diagram', href: '/games/propositional-logic' },
  { id: 'word-logic-puzzles', name: 'Word Logic Puzzles', description: 'Combine word skills with logical reasoning challenges', category: 'logic' as const, icon: 'fas fa-spell-check', href: '/games/word-logic-puzzles' },
  { id: 'jigsaw-logic', name: 'Jigsaw Logic Puzzles', description: 'Solve jigsaw puzzles using spatial and logical reasoning', category: 'logic' as const, icon: 'fas fa-puzzle-piece', href: '/games/jigsaw-logic' },
  { id: 'flowchart-logic', name: 'Flowchart Logic Builder', description: 'Create and follow logical flowcharts and algorithms', category: 'logic' as const, icon: 'fas fa-sitemap', href: '/games/flowchart-logic' },
  { id: 'lateral-thinking', name: 'Lateral Thinking Puzzles', description: 'Develop creative problem-solving through lateral thinking', category: 'logic' as const, icon: 'fas fa-lightbulb', href: '/games/lateral-thinking' },
  { id: 'logic-gates-simulator', name: 'Logic Gates Simulator', description: 'Build and test digital logic circuits and gates', category: 'logic' as const, icon: 'fas fa-wifi', href: '/games/logic-gates-simulator' },
  { id: 'inductive-reasoning', name: 'Inductive Reasoning Trainer', description: 'Strengthen pattern recognition and inductive logic', category: 'logic' as const, icon: 'fas fa-chart-line', href: '/games/inductive-reasoning' },
  { id: 'probability-puzzles', name: 'Probability Puzzles', description: 'Solve puzzles involving probability and statistics', category: 'logic' as const, icon: 'fas fa-dice', href: '/games/probability-puzzles' },
  { id: 'critical-thinking-gym', name: 'Critical Thinking Gym', description: 'Comprehensive critical thinking skill development', category: 'logic' as const, icon: 'fas fa-dumbbell', href: '/games/critical-thinking-gym' },
  { id: 'paradox-explorer', name: 'Paradox Explorer', description: 'Explore logical paradoxes and philosophical puzzles', category: 'logic' as const, icon: 'fas fa-infinity', href: '/games/paradox-explorer' }
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
