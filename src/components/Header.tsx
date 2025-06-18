'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import rainbowFernLogo from '../../public/assets/fern-colors-web.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navigationLinks = [
    {
      title: 'About',
      href: '/',
    },
    {
      title: 'Projects',
      href: '/projects',
    },
    {
      title: 'Experience',
      href: '/experience',
    },
    {
      title: 'Education',
      href: '/education',
    },
  ];

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    return path !== '/' && pathname.startsWith(path);
  };

  const NavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <Link
      href={href}
      className={`block mx-auto px-4 py-4 text-lg hover:text-gray-400 hover:underline md:px-2 md:py-2 md:text-base ${
        isActive(href)
          ? 'font-extrabold text-gray-900 underline decoration-2 underline-offset-4 dark:text-white'
          : 'text-gray-800 dark:text-gray-200'
      }`}
    >
      {children}
    </Link>
  );

  const ContactButton = () => (
    <Link
      href="/contact"
      className="m-3 mx-auto mt-2 block rounded-md bg-black p-1 px-2 text-lg text-white transition-colors duration-200 hover:bg-gray-700 hover:text-white md:text-base"
    >
      Contact
    </Link>
  );

  const DesktopNav = () => (
    <nav className="hidden items-center md:flex">
      {navigationLinks.map(({ title, href }) => (
        <NavLink key={href} href={href}>
          {title}
        </NavLink>
      ))}
      <ContactButton />
    </nav>
  );

  const MobileNav = () => (
    <div className="relative">
      <button
        className="relative z-50 mr-2 mt-2 mb-2 flex h-6 w-6 flex-col justify-between focus:outline-none md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <span
          className={`h-1 w-full origin-center transform bg-gray-800 transition-all duration-300 dark:bg-white ${
            isOpen ? 'translate-y-2.5 rotate-45' : ''
          }`}
        ></span>
        <span
          className={`h-1 w-full transform bg-gray-800 transition-all duration-300 dark:bg-white ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`h-1 w-full origin-center transform bg-gray-800 transition-all duration-300 dark:bg-white ${
            isOpen ? '-translate-y-2.5 -rotate-45' : ''
          }`}
        ></span>
      </button>
      <div
        className={`fixed right-0 top-0 z-40 h-screen w-full max-w-md transform bg-white bg-opacity-95 backdrop-blur-md transition-transform duration-300 ease-in-out dark:bg-gray-900 dark:bg-opacity-95 ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col items-start justify-start pt-20 pl-8 space-y-4 shadow-2xl md:hidden`}
      >
        {navigationLinks.map(({ title, href }) => (
          <NavLink key={href} href={href}>
            {title}
          </NavLink>
        ))}
        <ContactButton />
      </div>
    </div>
  );

  return (
    <header
      ref={menuRef}
      className="sticky top-0 z-30 flex justify-between border-b border-gray-200 bg-white bg-opacity-80 p-1 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900 dark:bg-opacity-80 md:p-4"
    >
      <Link
        href="/"
        className="flex items-center transition-opacity hover:opacity-80"
      >
        <div className="relative mr-2 h-5 w-5 md:h-8 md:w-8">
          <Image
            src={rainbowFernLogo}
            alt="Rainbowfern logo"
            fill
            sizes="(max-width: 768px) 20px, 32px"
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-sm font-medium text-gray-900 dark:text-white md:text-lg">
          Rainbowfern.com
        </h1>
      </Link>
      <MobileNav />
      <DesktopNav />
    </header>
  );
};

export default Header;
