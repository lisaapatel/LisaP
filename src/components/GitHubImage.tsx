import Image, { ImageProps } from 'next/image';
import { getBasePath } from '@/lib/utils';

interface GitHubImageProps extends Omit<ImageProps, 'src'> {
  src: string;
}

export default function GitHubImage({ src, alt, ...props }: GitHubImageProps) {
  const fullSrc = src.startsWith('/') ? getBasePath(src) : src;
  return <Image src={fullSrc} alt={alt} {...props} />;
} 