import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Add a helper function to prefix paths with the basePath
export function getBasePath(path: string): string {
  // Remove leading slash if it exists to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Use the NEXT_PUBLIC environment variable if available, or default to the repository name
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/LisaP';
  
  return `${basePath}/${cleanPath}`;
} 