export default function imageLoader({ src, width, quality }) {
  const baseURL = process.env.NEXT_PUBLIC_BASE_PATH || '/LisaP';
  if (src.startsWith('/')) {
    return `${baseURL}${src}?w=${width}&q=${quality || 75}`
  }
  return src;
} 