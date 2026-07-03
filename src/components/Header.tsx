import { Link, useLocation } from 'react-router-dom';
import { Home as HomeIcon, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { clsx } from 'clsx';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Главная', path: '/' },
    { name: 'Каталог', path: '/catalog' },
    { name: 'О компании', path: '/about' },
    { name: 'Контакты', path: '/contacts' },
  ];

  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-neutral-900 text-white p-2 rounded-lg group-hover:bg-neutral-800 transition-colors">
              <HomeIcon size={24} />
            </div>
            <span className="font-serif text-xl font-bold text-neutral-900">СтройДом</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={clsx(
                  "text-sm font-medium transition-colors hover:text-neutral-900",
                  location.pathname === link.path ? "text-neutral-900" : "text-neutral-500"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <Link to="/contacts" className="bg-neutral-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors">
              Оставить заявку
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-neutral-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-neutral-100 bg-white overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={clsx(
                    "block px-3 py-3 rounded-md text-base font-medium",
                    location.pathname === link.path 
                      ? "bg-neutral-50 text-neutral-900" 
                      : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link 
                  to="/contacts" 
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-neutral-900 text-white px-5 py-3 rounded-xl font-medium"
                >
                  Оставить заявку
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
