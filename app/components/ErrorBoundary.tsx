'use client';

import { useEffect, useState } from 'react';

export default function ErrorBoundary({ children }: { children: React.ReactNode }) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.error('Runtime error caught by ErrorBoundary:', error);
      setHasError(true);
      setError(error.error);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return (
      <div className="p-4 bg-red-50 text-red-800 rounded-md">
        <h2 className="text-lg font-bold">Something went wrong</h2>
        <p className="mt-2">{error?.message || 'Unknown error'}</p>
        <button
          className="mt-4 px-4 py-2 bg-red-100 hover:bg-red-200 rounded"
          onClick={() => window.location.reload()}
        >
          Reload page
        </button>
      </div>
    );
  }

  return <>{children}</>;
} 