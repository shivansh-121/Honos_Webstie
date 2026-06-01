'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from '@/components/ui/Button';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SecurityBackdrop } from '@/components/ui/SecurityBackdrop';
import { useLoading } from '@/context/LoadingContext';
import { company, whyChooseUs } from '@/lib/company-data';
import { HeroStats } from '@/components/sections/hero/HeroStats';
import { HeroPanel } from '@/components/sections/hero/HeroPanel';
import { HeroVisual } from '@/components/sections/hero/HeroVisual';

const headline = ['RELIABLE.', 'DISCIPLINED.', 'PROFESSIONAL.'];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { isLoaded } = useLoading();

  useEffect(() => {
    if (!isLoaded || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.hero-headline-word', {
        y: 48,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.15,
      });
      gsap.from('.hero-animate', {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.35,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isLoaded]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-screen flex-col overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0">
        <SecurityBackdrop variant="hero" />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-void via-void/95 to-void/40 lg:via-void/90 lg:to-void/60"
          aria-hidden
        />
      </div>

      <div className="relative z-20 flex flex-1 flex-col">
        <div className="mx-auto w-full max-w-container flex-1 px-6 py-10 lg:px-10 lg:py-14">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:items-center">
            <div className="text-center lg:text-left">
              <SectionLabel className="hero-animate mb-6 lg:mx-0">
                <span>{company.yearsInBusiness} Years</span>
                <span className="hidden sm:inline">·</span>
                <span>Surat</span>
                <span className="hidden sm:inline">·</span>
                <span>Verified</span>
                <span className="hidden sm:inline">·</span>
                <span>Est. 2017</span>
              </SectionLabel>

              <h1 className="mb-6 font-display uppercase leading-[0.9] tracking-wider text-honos-white">
                {headline.map((word) => (
                  <span
                    key={word}
                    className="hero-headline-word block text-[clamp(2.75rem,10vw,5.5rem)] lg:text-[clamp(3rem,5.5vw,4.75rem)]"
                  >
                    {word}
                  </span>
                ))}
              </h1>

              <p className="hero-animate mx-auto mb-4 max-w-xl font-body text-xl italic text-honos-white lg:mx-0">
                {company.tagline}
              </p>
              <p className="hero-animate mx-auto mb-8 max-w-xl font-body text-lg leading-relaxed text-honos-muted lg:mx-0">
                {company.description}
              </p>

              <ul className="hero-animate mb-8 hidden flex-wrap gap-x-6 gap-y-2 lg:flex">
                {whyChooseUs.slice(0, 4).map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-honos-muted"
                  >
                    <span className="text-brand-red">▸</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="hero-animate flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <Button href="/services">Our Services →</Button>
                <Button href="/contact">Request a Quote</Button>
              </div>

              <HeroStats className="mt-10 lg:max-w-2xl" />
            </div>

            <div className="hero-animate space-y-8">
              <HeroVisual />
              <div className="hidden lg:block">
                <HeroPanel />
              </div>
            </div>
          </div>

          <div className="mt-10 lg:hidden">
            <HeroPanel />
          </div>
        </div>

        <div className="hero-animate mx-auto mb-10 mt-6 flex flex-col items-center gap-3 pb-4">
          <span className="font-mono text-[10px] uppercase tracking-ultra text-honos-muted">
            Scroll
          </span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            className="animate-bounce-chevron text-brand-red"
            aria-hidden
          >
            <path d="M8 12L3 7h10L8 12z" fill="currentColor" />
          </svg>
        </div>
      </div>
    </section>
  );
}
