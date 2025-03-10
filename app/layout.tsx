import ErrorBoundary from './components/ErrorBoundary';
import { ThemeProvider } from './providers';
import Navigation from './components/Navigation';
import '../src/styles/globals.css';

// Use a different name for the imported type or remove it if not needed
// import type { Metadata } from 'next';

// Rename the local interface to avoid conflict
interface PageMetadata {
  title: string;
  description: string;
}

export const metadata: PageMetadata = {
  title: 'Lisa Patel',
  description: 'Personal portfolio and blog',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <ErrorBoundary>
          <ThemeProvider>
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-1 w-full">
                {children}
              </main>
              <footer className="py-8 border-t border-border/10 bg-secondary/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      © 2025 Lisa Patel. All rights reserved.
                    </p>
                  </div>
                </div>
              </footer>
            </div>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
} 