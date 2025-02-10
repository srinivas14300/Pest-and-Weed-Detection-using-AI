import { useState } from 'react';
import { Menu, X, Sprout } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import React from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`fixed w-full ${theme.background} backdrop-blur-md z-50 shadow-sm transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Sprout className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">CropGuard AI</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={({ isActive }) => 
                `px-4 py-2 ${isActive ? 'text-blue-600' : 'text-gray-600'}`
              }>
                Home
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => 
                `px-4 py-2 ${isActive ? 'text-blue-600' : 'text-gray-600'}`
              }>
                About
              </NavLink>
              <NavLink to="/how-it-works" className={({ isActive }) => 
                `px-4 py-2 ${isActive ? 'text-blue-600' : 'text-gray-600'}`
              }>
                How It Works
              </NavLink>
              <NavLink to="/try-it" className={({ isActive }) => 
                `px-4 py-2 ${isActive ? 'text-blue-600' : 'text-gray-600'}`
              }>
                Try It Now
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => 
                `px-4 py-2 ${isActive ? 'text-blue-600' : 'text-gray-600'}`
              }>
                Contact
              </NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-lg ${theme.button} text-white transition-colors`}
          >
            Toggle Theme
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <NavLink to="/" className={({ isActive }) => 
              `block px-3 py-2 ${isActive ? 'text-blue-600' : 'text-gray-600'}`
            }>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => 
              `block px-3 py-2 ${isActive ? 'text-blue-600' : 'text-gray-600'}`
            }>
              About
            </NavLink>
            <NavLink to="/how-it-works" className={({ isActive }) => 
              `block px-3 py-2 ${isActive ? 'text-blue-600' : 'text-gray-600'}`
            }>
              How It Works
            </NavLink>
            <NavLink to="/try-it" className={({ isActive }) => 
              `block px-3 py-2 ${isActive ? 'text-blue-600' : 'text-gray-600'}`
            }>
              Try It Now
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => 
              `block px-3 py-2 ${isActive ? 'text-blue-600' : 'text-gray-600'}`
            }>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;