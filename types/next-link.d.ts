import 'next/link';

declare module 'next/link' {
  export default function Link(props: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    as?: string;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    prefetch?: boolean;
    locale?: string | false;
    legacyBehavior?: boolean;
    onMouseEnter?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    onTouchStart?: (e: React.TouchEvent<HTMLAnchorElement>) => void;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  }): JSX.Element;
} 