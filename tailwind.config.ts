import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        void: 'var(--color-void)',
        obsidian: 'var(--color-obsidian)',
        steel: 'var(--color-steel)',
        gold: {
          DEFAULT: 'var(--color-gold)',
          bright: 'var(--color-gold-bright)',
        },
        brand: {
          navy: 'var(--color-brand-navy)',
          red: 'var(--color-brand-red)',
        },
        honos: {
          white: 'var(--color-white)',
          muted: 'var(--color-muted)',
          line: 'var(--color-line)',
        },
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        body: ['var(--font-cormorant)', 'serif'],
        mono: ['var(--font-fragment)', 'monospace'],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.35em',
      },
      maxWidth: {
        container: '1400px',
      },
    },
  },
  plugins: [],
};

export default config;
