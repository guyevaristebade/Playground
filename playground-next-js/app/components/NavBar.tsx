'use client';
import Link from 'next/link';
import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { useTheme } from '../hook/use-theme';

const NavBar = () => {
  const { theme } = useTheme();

  return (
    <nav
      className={`transition-all duration-1000 flex gap-3 justify-between items-center ${
        theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'
      } p-5`}
    >
      <div className="text-4xl font-bold">{`<LOGO/>`}</div>
      <div className="flex gap-4 items-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default NavBar;
