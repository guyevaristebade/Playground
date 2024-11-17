'use client';

import { useTheme } from './hook/use-theme';

export default function Home() {
  const { theme } = useTheme();


  return (
    <div className={`min-h-screen transition-all duration-1000 ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'} p-4`}>
      <h1 className='text-4xl font-bold mb-7'>Page d&apos;accueil</h1>
      <p>Thème actuel : {theme}</p>
    </div>
  );
}