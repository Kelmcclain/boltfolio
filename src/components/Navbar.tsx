import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="text-white text-lg font-bold">Portfolio</Link>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <nav className={`${
          isOpen ? 'flex' : 'hidden'
        } md:flex absolute md:relative top-14 md:top-0 left-0 w-full md:w-auto bg-black md:bg-transparent`}>
          <ul className="flex flex-col md:flex-row w-full md:w-auto">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className={`block px-3 py-2 text-sm ${
                    location.pathname === item.href
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  } transition-colors`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}