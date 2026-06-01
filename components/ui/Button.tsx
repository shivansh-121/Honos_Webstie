import Link from 'next/link';
import { type ReactNode } from 'react';

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: 'outline' | 'filled' | 'primary' | 'white';
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
    'inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 font-display text-lg uppercase tracking-widest transition-colors duration-300 font-bold shadow-md';

  let styles = '';
  if (variant === 'outline') {
    styles = `btn-gold-outline border ${className}`;
  } else if (variant === 'filled') {
    styles = `bg-brand-red text-white hover:bg-brand-navy hover:scale-[1.02] ${className}`;
  } else if (variant === 'primary') {
    styles = `bg-[#cc0000] text-white hover:bg-red-800 ${className}`;
  } else if (variant === 'white') {
    styles = `bg-white text-black hover:bg-gray-200 ${className}`;
  }

  const combined = `${base} ${styles}`;

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
