import Link from 'next/link';
import React from 'react';

export default function Navigation() {
  return (
    <nav className="p-4 bg-gray-100">
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="text-xl hover:underline">Home</Link>
        </li>
        <li>
          <Link href="/travel" className="text-xl hover:underline">Travel</Link>
        </li>
        <li>
          <Link href="/contact" className="text-xl hover:underline">Contact</Link>
        </li>
      </ul>
    </nav>
  );
} 