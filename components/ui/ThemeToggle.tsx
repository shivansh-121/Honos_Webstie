'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-steel bg-obsidian/50 opacity-0 transition-opacity">
        <div className="h-5 w-5" />
      </div>
    );
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;

  const toggleTheme = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-steel bg-obsidian/50 transition-colors hover:border-brand-red/50 hover:bg-obsidian focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
      aria-label="Toggle theme"
      title={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="relative flex h-full w-full items-center justify-center transition-transform duration-500 ease-in-out">
        <Sun 
          className={`absolute h-5 w-5 text-gold transition-all duration-500 ${currentTheme === 'dark' ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} 
        />
        <Moon 
          className={`absolute h-5 w-5 text-honos-white transition-all duration-500 ${currentTheme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`} 
        />
      </div>
    </button>
  );
}
