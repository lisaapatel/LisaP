import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { cn } from '../../lib/utils';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'About Me', href: '/' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects + Explorations', href: '/projects' },
  { label: 'Travel Recommendations', href: '/travel' },
  { label: 'Contact', href: '/contact' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center justify-between h-14">
            <Link 
              href="/" 
              className="brand-text text-lg sm:text-xl text-foreground hover:text-foreground/80 transition-colors"
            >
              Lisa Patel
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map(({ label, href }) => (
                <Link 
                  key={href} 
                  href={href}
                  className={cn(
                    "nav-link text-base hover:text-foreground/80 transition-colors",
                    router.pathname === href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {label}
                </Link>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Navigation */}
            <div className="flex items-center gap-4 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 -mr-2 text-muted-foreground hover:text-foreground"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border/50">
              <div className="flex flex-col gap-4">
                {NAV_ITEMS.map(({ label, href }) => (
                  <Link 
                    key={href} 
                    href={href}
                    className={cn(
                      "px-2 py-2 text-base hover:text-foreground/80 transition-colors",
                      router.pathname === href
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-14">
        {children}
      </main>
    </div>
  );
} 