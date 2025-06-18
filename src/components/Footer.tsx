'use client';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="mb-4 text-sm text-gray-500 dark:text-gray-400 md:mb-0">
            &copy; {currentYear} Astrid Lapinski. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/alexlapinski/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-colors duration-200 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
              aria-label="LinkedIn Profile"
            >
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/distractdiverge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-colors duration-200 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              aria-label="GitHub Profile"
            >
              <span className="sr-only">GitHub</span>
              <FaGithub className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-200 pt-6 dark:border-gray-700">
          <p className="text-center text-xs text-gray-500 dark:text-gray-400">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
