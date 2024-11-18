// 'use client';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {

  return (
    <nav
      className={`transition-all duration-1000 flex gap-3 justify-between items-center p-5`}
    >
      <div className="text-4xl font-bold">{`<LOGO/>`}</div>
      <div className="flex gap-4 items-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default NavBar;
