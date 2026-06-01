'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { services } from '@/lib/company-data';

gsap.registerPlugin(ScrollTrigger);

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.service-card');
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-obsidian py-24 lg:py-32"
    >
      <div className="mx-auto max-w-container px-6 lg:px-10">
        <SectionLabel className="mb-4">Services Offered</SectionLabel>
        <h2 className="mb-4 font-display text-5xl uppercase tracking-wider text-honos-white md:text-7xl">
          Our Services
        </h2>
        <p className="mb-16 max-w-2xl font-body text-lg text-honos-muted">
          Professional security and manpower solutions for industrial, commercial,
          residential, and government establishments across India.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.num}
              href="/services"
              className="service-card group border-l border-gold bg-void/50 p-6 opacity-0 transition-all duration-400 hover:-translate-y-2 hover:border hover:border-gold hover:shadow-[0_0_30px_rgba(201,168,76,0.15)]"
              data-cursor="link"
            >
              <span className="font-mono text-sm text-gold">{s.num}</span>
              <h3 className="mt-3 font-display text-2xl uppercase leading-tight text-honos-white">
                {s.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-honos-muted">
                {s.points[0]}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
