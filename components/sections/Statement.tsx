'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SecurityBackdrop } from '@/components/ui/SecurityBackdrop';

gsap.registerPlugin(ScrollTrigger);

export function Statement() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const quote = quoteRef.current;
    const line = lineRef.current;
    if (!section || !quote || !line) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        quote,
        { opacity: 0, scale: 0.85 },
        {
          opacity: 1,
          scale: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            end: 'center center',
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        line,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top 50%',
            end: 'center center',
            scrub: 1,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-void py-32"
    >
      <div className="absolute inset-0">
        <SecurityBackdrop variant="section" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(27,54,93,0.25) 0%, transparent 50%, rgba(5,5,7,0.95) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <blockquote
          ref={quoteRef}
          className="font-body text-[clamp(1.5rem,3.5vw,3rem)] italic leading-snug text-honos-white"
        >
          &ldquo;We assure disciplined manpower, strict supervision, and zero
          compromise on security standards.&rdquo;
        </blockquote>
        <p className="mt-8 font-mono text-xs uppercase tracking-widest text-honos-muted">
          — Honos Protection Services Pvt. Ltd.
        </p>
        <div
          ref={lineRef}
          className="mx-auto mt-12 h-px w-full max-w-md origin-center bg-brand-red"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>
    </section>
  );
}
