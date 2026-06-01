import Link from 'next/link';
import { type ReactNode } from 'react';

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: 'outline' | 'filled';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
};

export function Button({
  href,
  children,
  variant = 'outline',
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 font-mono text-xs uppercase tracking-widest transition-colors duration-300';

  const styles =
    variant === 'outline'
      ? `btn-gold-outline border ${className}`
      : `bg-brand-red text-white hover:bg-brand-navy hover:scale-[1.02] ${className} ${base}`;

  const combined = variant === 'outline' ? `${base} ${styles}` : styles;

  if (href) {
    return (
      <Link href={href} className={combined} data-cursor="link">
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combined}
      data-cursor="link"
    >
      {children}
    </button>
  );
}
