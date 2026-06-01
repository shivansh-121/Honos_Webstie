'use client';

import { useEffect, useRef, useState } from 'react';
import { useLoading } from '@/context/LoadingContext';
import { company } from '@/lib/company-data';

const FULL_TEXT = company.legalName.toUpperCase();

export function Preloader() {
  const { isLoaded, setLoaded } = useLoading();
  const [typed, setTyped] = useState('');
  const [exiting, setExiting] = useState(false);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoaded) return;

    let charIndex = 0;
    const typeInterval = setInterval(() => {
      charIndex += 1;
      setTyped(FULL_TEXT.slice(0, charIndex));
      if (charIndex >= FULL_TEXT.length) clearInterval(typeInterval);
    }, 40);

    const exitTimer = setTimeout(() => {
      setExiting(true);
      setTimeout(setLoaded, 800);
    }, 2500);

    return () => {
      clearInterval(typeInterval);
      clearTimeout(exitTimer);
    };
  }, [isLoaded, setLoaded]);

  useEffect(() => {
    if (!lineRef.current || isLoaded) return;
    lineRef.current.animate(
      [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }],
      {
        duration: 800,
        delay: 400,
        fill: 'forwards',
        easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
      }
    );
  }, [isLoaded]);

  if (isLoaded) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-void transition-opacity duration-700 ${
        exiting ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      aria-live="polite"
      aria-label="Loading"
    >
      <svg viewBox="0 0 120 120" className="preloader-h mb-8 h-24 w-24" aria-hidden>
        <text
          x="60"
          y="72"
          textAnchor="middle"
          fontSize="96"
          fontFamily="var(--font-bebas), sans-serif"
          fill="none"
          stroke="#E31E24"
          strokeWidth="2"
          strokeDasharray="400"
          strokeDashoffset="400"
        >
          H
        </text>
      </svg>
      <p className="max-w-md px-4 text-center font-mono text-[10px] uppercase tracking-ultra text-honos-muted sm:text-xs">
        {typed}
        <span className="animate-pulse">|</span>
      </p>
      <div
        ref={lineRef}
        className="mt-6 h-px w-48 origin-left bg-brand-red"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}
