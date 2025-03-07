import Link from 'next/link';
import React from 'react';
import Navigation from './components/Navigation';

export default function NotFound() {
  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">Page not found</p>
        <Link href="/" className="text-blue-500 hover:underline">
          Return to Home
        </Link>
      </div>
    </>
  );
} 