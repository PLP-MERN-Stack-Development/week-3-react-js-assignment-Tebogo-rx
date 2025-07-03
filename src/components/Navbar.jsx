import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">PLP Task Manager</h1>
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-gray-700 dark:text-gray-300 hover:underline">Home</Link>
          <Link to="/api" className="text-gray-700 dark:text-gray-300 hover:underline">API</Link>
          <button
            onClick={toggleTheme}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-gray-800 dark:text-gray-200 transition-colors duration-300"
          >
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
