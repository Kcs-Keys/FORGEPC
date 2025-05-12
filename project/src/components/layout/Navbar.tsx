import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Monitor, Cpu, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/builder', label: 'PC Builder' },
    { path: '/about', label: 'About' },
  ];

  return (
    <nav className="bg-slate-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
            <Cpu className="h-8 w-8" />
            <span className="text-xl font-bold">ForgePC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                  location.pathname === item.path ? 'text-cyan-400' : 'text-gray-300'
                }`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Get Started Button */}
          <div className="hidden md:block">
            <Link
              to="/builder"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent 
                        text-sm font-medium rounded-md text-white bg-cyan-700 hover:bg-cyan-600 
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors"
            >
              Start Building
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-slate-700 text-white'
                    : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                }`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/builder"
              className="block px-3 py-2 rounded-md text-base font-medium bg-cyan-700 text-white hover:bg-cyan-600 transition-colors"
              onClick={closeMenu}
            >
              Start Building
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;