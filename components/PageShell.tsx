'use client';

import { useLoading } from '@/context/LoadingContext';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/sections/Footer';

export function PageShell({
  children,
  showFooter = true,
}: {
  children: React.ReactNode;
  showFooter?: boolean;
}) {
  const { isLoaded } = useLoading();

  return (
    <>
      <Navigation />
      <div
        className={`transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <main>{children}</main>
        {showFooter && <Footer />}
      </div>
    </>
  );
}
