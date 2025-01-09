import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Resume', href: '/resume' }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md'
        : 'bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="relative group flex items-center space-x-2"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Portfolio
            </span>
            <div className="hidden md:block absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 group-hover:w-full" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
                      ${location.pathname === item.href
                        ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20'
                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50'
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`
          md:hidden fixed inset-0 top-16 bg-white/100 dark:bg-gray-900/100 transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}
        `}>
          <nav className="h-full">
            <ul className="px-4 py-6 space-y-2 bg-white dark:bg-gray-900">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className={`group flex items-center justify-between p-3 rounded-xl transition-all duration-200
                      ${location.pathname === item.href
                        ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                      }
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-base font-medium">{item.label}</span>
                    <ChevronRight className={`h-4 w-4 transition-transform duration-200 
                      ${location.pathname === item.href
                        ? 'text-purple-600 dark:text-purple-400 translate-x-0'
                        : 'text-gray-400 group-hover:translate-x-1'
                      }
                    `} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;