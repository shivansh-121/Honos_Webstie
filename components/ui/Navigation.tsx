'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { contact } from '@/lib/company-data';
import { NavBrand } from '@/components/ui/NavBrand';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const links = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 h-20 transition-all duration-500 ${
          scrolled
            ? 'border-b border-honos-line/50 bg-void/95 backdrop-blur-xl'
            : 'bg-void/40 backdrop-blur-sm'
        }`}
      >
        <nav
          className="mx-auto flex h-full max-w-container items-center justify-between gap-6 px-6 lg:px-10"
          aria-label="Main navigation"
        >
          <NavBrand />

          <ul className="hidden list-none items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`group relative whitespace-nowrap font-mono text-[11px] uppercase tracking-widest transition-colors ${
                    pathname === link.href
                      ? 'text-gold'
                      : 'text-honos-muted hover:text-gold'
                  }`}
                  data-cursor="link"
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                      pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>

          <div className="ml-auto flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="relative z-[60] flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              data-cursor="link"
            >
              <span
                className={`block h-px w-6 bg-gold transition-transform ${
                  menuOpen ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`block h-px w-6 bg-gold transition-opacity ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-px w-6 bg-gold transition-transform ${
                  menuOpen ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-[55] flex flex-col bg-void pt-28 md:hidden"
          >
            <div className="mx-6 mb-8 h-px origin-left bg-gold" />
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                <Link
                  href={link.href}
                  className="block border-b border-honos-line px-6 py-6 font-display text-4xl uppercase text-honos-white"
                  data-cursor="link"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
