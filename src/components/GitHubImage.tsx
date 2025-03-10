import Image from 'next/image';
import { getBasePath } from '@/lib/utils';

export default function GitHubImage({ src, ...props }) {
  const fullSrc = src.startsWith('/') ? getBasePath(src) : src;
  return <Image src={fullSrc} {...props} />;
} 