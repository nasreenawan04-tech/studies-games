import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useIsMobile } from '@/hooks/use-mobile';
import { searchTools } from '@/lib/search';
import { tools } from '@/data/tools';
import Logo from './Logo';
import { Menu, X, Search } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(tools);
  const [location, setLocation] = useLocation();
  const isMobile = useIsMobile();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const results = searchTools(query);
    setSearchResults(results);
  };

  const handleToolClick = (toolHref: string) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setLocation(toolHref);
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '/math-games', label: 'Math Games' },
    { href: '/science-games', label: 'Science Games' },
    { href: '/language-games', label: 'Language Games' },
    { href: '/memory-games', label: 'Memory Games' },
    { href: '/logic-games', label: 'Logic Games' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-neutral-900 shadow-sm border-b border-gray-200 dark:border-neutral-700 transition-colors duration-200" data-testid="header-main">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center flex-shrink-0" data-testid="link-home" onClick={handleLinkClick}>
            <Logo className="h-7 w-7 sm:h-8 sm:w-8 mr-2 sm:mr-3" />
            <span className="text-lg sm:text-xl font-bold truncate" data-testid="text-site-name">
              <span className="text-neutral-800 dark:text-neutral-100">Dapsi</span>
              <span className="text-primary"> Games</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-neutral-600 dark:text-neutral-300 hover:text-secondary dark:hover:text-secondary transition-colors duration-200 font-medium whitespace-nowrap ${
                  location === link.href ? 'text-primary dark:text-primary' : ''
                }`}
                data-testid={`link-${link.label.toLowerCase().replace(' ', '-')}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            {/* Search */}
            <button
              className="p-2 text-neutral-600 dark:text-neutral-300 hover:text-secondary dark:hover:text-secondary transition-colors rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"
              onClick={() => setIsSearchOpen(true)}
              data-testid="button-search"
              aria-label="Search tools"
              title="Search tools"
            >
              <Search size={isMobile ? 16 : 18} />
            </button>

            {/* Mobile Menu */}
            <button
              className="lg:hidden p-2 text-neutral-600 dark:text-neutral-300 hover:text-secondary dark:hover:text-secondary transition-colors rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
              aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={isMobile ? 16 : 18} /> : <Menu size={isMobile ? 16 : 18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-14 sm:top-16 z-40">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <nav
            className="relative bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-700 shadow-lg max-h-screen overflow-y-auto"
            data-testid="mobile-menu"
            aria-label="Mobile navigation"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 text-base font-medium transition-colors rounded-lg ${
                    location === link.href 
                      ? 'text-primary dark:text-primary bg-red-50 dark:bg-red-900/20' 
                      : 'text-neutral-600 dark:text-neutral-300 hover:text-secondary dark:hover:text-secondary hover:bg-neutral-50 dark:hover:bg-neutral-800'
                  }`}
                  onClick={handleLinkClick}
                  data-testid={`mobile-link-${link.label.toLowerCase().replace(' ', '-')}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-4 sm:pt-20 px-4">
          <div
            className="bg-white dark:bg-neutral-900 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] sm:max-h-96 overflow-hidden"
            role="dialog"
            aria-label="Search tools"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3 sm:p-4 border-b border-gray-200 dark:border-neutral-700">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for study games..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full py-2 sm:py-3 px-3 sm:px-4 pr-10 sm:pr-12 text-base sm:text-lg border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary dark:focus:ring-secondary"
                  autoFocus
                  data-testid="search-modal-input"
                  aria-label="Search for tools"
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-2 sm:right-3 top-2 sm:top-3 text-gray-400 dark:text-neutral-500 hover:text-gray-600 dark:hover:text-neutral-300 p-1 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors"
                  data-testid="search-modal-close"
                  aria-label="Close search"
                >
                  <X size={isMobile ? 16 : 18} />
                </button>
              </div>
            </div>
            <div className="max-h-[60vh] sm:max-h-80 overflow-y-auto">
              {searchResults.length > 0 ? (
                searchResults.slice(0, 10).map((tool) => (
                  <button
                    key={tool.id}
                    onClick={() => handleToolClick(tool.href)}
                    className="w-full p-3 sm:p-4 text-left hover:bg-gray-50 dark:hover:bg-neutral-800 border-b border-gray-100 dark:border-neutral-700 transition-colors"
                    data-testid={`search-result-${tool.id}`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-900 dark:text-neutral-100 truncate text-sm sm:text-base">{tool.name}</div>
                        <div className="text-xs sm:text-sm text-gray-500 dark:text-neutral-400 truncate">{tool.description}</div>
                      </div>
                      {tool.isPopular && (
                        <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full flex-shrink-0">
                          Popular
                        </div>
                      )}
                    </div>
                  </button>
                ))
              ) : (
                <div className="p-6 sm:p-8 text-center text-gray-500 dark:text-neutral-400">
                  <p className="text-sm sm:text-base">No tools found matching "{searchQuery}"</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;