import { Link } from 'wouter';
import logoImage from '@assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 text-neutral-100 py-16" data-testid="footer-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Tagline */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img
                src={logoImage}
                alt="Dapsi Games Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="inline-flex items-center rounded-md bg-white px-3 py-1 text-xl font-bold">
                <span className="text-neutral-900">Dapsi</span>
                <span className="text-primary"> Games</span>
              </span>
            </div>
            <p className="text-neutral-300 leading-relaxed">
              Your go-to platform for study games. Learn through play - fast, free, and always available.
            </p>
          </div>

          {/* Popular Games */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Popular Games</h3>
            <ul className="space-y-3 text-neutral-300">
              <li><Link href="/games/addition-race" className="hover:text-accent transition-colors" data-testid="link-addition-race">Addition Race</Link></li>
              <li><Link href="/games/vocabulary-builder" className="hover:text-accent transition-colors" data-testid="link-vocabulary-builder">Vocabulary Builder</Link></li>
              <li><Link href="/games/periodic-table-quest" className="hover:text-accent transition-colors" data-testid="link-periodic-table-quest">Periodic Table Quest</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Game Categories</h3>
            <ul className="space-y-3 text-neutral-300">
              <li><Link href="/math-games" className="hover:text-accent transition-colors" data-testid="link-math-games">Math Games</Link></li>
              <li><Link href="/science-games" className="hover:text-accent transition-colors" data-testid="link-science-games">Science Games</Link></li>
              <li><Link href="/language-games" className="hover:text-accent transition-colors" data-testid="link-language-games">Language Games</Link></li>
              <li><Link href="/memory-games" className="hover:text-accent transition-colors" data-testid="link-memory-games">Memory Games</Link></li>
              <li><Link href="/logic-games" className="hover:text-accent transition-colors" data-testid="link-logic-games">Logic Games</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-neutral-300">
              <li><Link href="/about" className="hover:text-accent transition-colors" data-testid="link-about-us">About Us</Link></li>
              <li><Link href="/help" className="hover:text-accent transition-colors" data-testid="link-help-center">Help Center</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors" data-testid="link-contact-us">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-accent transition-colors" data-testid="link-privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-accent transition-colors" data-testid="link-terms-of-service">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-neutral-400 text-center md:text-left mb-4 md:mb-0">
              <p>© {currentYear} DapsiGames.com. All rights reserved. Made with ❤️ for learning.</p>
            </div>
            <div className="text-neutral-400 text-center md:text-right">
              <p className="flex items-center justify-center md:justify-end">
                <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
                <span className="font-semibold mx-1" data-testid="text-daily-game-count">8,247</span> games played today
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;