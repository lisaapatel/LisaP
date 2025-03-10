import type { FC, ReactNode } from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { cn, getBasePath } from '../../lib/utils';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const NAV_ITEMS = [
  { name: 'About Me', path: '/' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects + Explorations', path: '/projects' },
  { name: 'Travel Recommendations', path: '/travel' },
  { name: 'Contact', path: '/contact' },
];

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    console.log('Base Path:', process.env.NEXT_PUBLIC_BASE_PATH);
    console.log('Example path:', getBasePath('/styles/globals.css'));
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-8">
          <div className="flex items-center gap-8">
            <Link href="/" as={getBasePath('/')} className="text-2xl font-bold ml-4">
              Lisa Patel
            </Link>
            <nav className="hidden md:flex gap-8 ml-8">
              {NAV_ITEMS.map((item) => {
                const isActive = router.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    as={getBasePath(item.path)}
                    className={clsx(
                      'transition-colors hover:text-foreground/80',
                      isActive ? 'text-foreground' : 'text-foreground/60'
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
          <ThemeToggle className="mr-4" />
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-14">
        {children}
      </main>
    </div>
  );
}; 