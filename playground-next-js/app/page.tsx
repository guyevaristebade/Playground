import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className='text-4xl font-bold'>Page d&apos;accueil</h1>
      <Link className='rounded-md mt-5 p-2.5  bg-purple-400 text-black' href="/about">À propos</Link>
    </div>
  );
}
