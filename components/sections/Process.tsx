'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { training, supervision } from '@/lib/company-data';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: '01', title: 'Pre-Deployment Training', detail: training.intro },
  { num: '02', title: 'Fire Safety & First Aid', detail: training.items[0] + ' · ' + training.items[1] },
  { num: '03', title: 'Security Procedures', detail: training.items[2] + ' · ' + training.items[3] },
  { num: '04', title: 'Supervised Deployment', detail: training.items[4] },
  { num: '05', title: 'Field Supervision', detail: supervision.items[0] },
];

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<SVGLineElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;

    const length = 1000;
    line.style.strokeDasharray = `${length}`;
    line.style.strokeDashoffset = `${length}`;

    const ctx = gsap.context(() => {
      gsap.to(line, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          end: 'bottom 40%',
          scrub: 1,
        },
      });

      nodeRefs.current.forEach((node, i) => {
        if (!node) return;
        gsap.fromTo(
          node.querySelector('.step-label'),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: section,
              start: `top ${55 - i * 5}%`,
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-obsidian py-24 lg:py-32">
      <div className="mx-auto max-w-container px-6 lg:px-10">
        <SectionLabel className="mb-4">Training & Supervision</SectionLabel>
        <h2 className="mb-4 font-display text-5xl uppercase tracking-wider text-honos-white">
          How We Operate
        </h2>
        <p className="mb-20 max-w-2xl font-body text-lg text-honos-muted">
          {training.title}: {training.items.join(', ')}. {supervision.title}:{' '}
          {supervision.items.join('; ')}.
        </p>

        <div className="relative">
          <svg
            className="absolute left-0 right-0 top-6 hidden h-2 w-full md:block"
            preserveAspectRatio="none"
            viewBox="0 0 1000 4"
          >
            <line
              ref={lineRef}
              x1="0"
              y1="2"
              x2="1000"
              y2="2"
              stroke="#C9A84C"
              strokeWidth="1"
            />
          </svg>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-5 md:gap-4">
            {steps.map((step, i) => (
              <div
                key={step.num}
                ref={(el) => {
                  nodeRefs.current[i] = el;
                }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-void font-mono text-xs text-gold">
                  {step.num}
                </div>
                <p className="step-label mt-4 font-display text-lg uppercase text-honos-white opacity-0">
                  {step.title}
                </p>
                <p className="step-label mt-2 max-w-[180px] font-body text-sm text-honos-muted opacity-0">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
