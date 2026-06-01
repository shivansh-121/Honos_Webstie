import type { Metadata } from 'next';
import {
  Bebas_Neue,
  Cormorant_Garamond,
  IBM_Plex_Mono,
} from 'next/font/google';
import './globals.css';
import { LoadingProvider } from '@/context/LoadingContext';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Preloader } from '@/components/ui/Preloader';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { BackToTop } from '@/components/ui/BackToTop';
import { company } from '@/lib/company-data';

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});

const fragment = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-fragment',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${company.legalName} | Security & Manpower Services Surat`,
  description: `${company.description} CIN ${company.cin}. Established ${company.incorporated}.`,
  keywords: [
    'security services Gujarat',
    'security guard Surat',
    'manpower outsourcing',
    'housekeeping services',
    'event security',
    'armed guard',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${cormorant.variable} ${fragment.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingProvider>
            <SmoothScrollProvider>
              <Preloader />
              <CustomCursor />
              {children}
              <BackToTop />
            </SmoothScrollProvider>
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
