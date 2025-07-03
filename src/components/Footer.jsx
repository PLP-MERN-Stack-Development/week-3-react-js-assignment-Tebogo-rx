import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow mt-10">
        <div className="text-gray-500 dark:text-gray-400 text-center">
            <div className="max-w-7xl mx-auto py-6 px-4 text-center text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
            </div>
        </div>
    </footer>
  );
};

export default Footer;
