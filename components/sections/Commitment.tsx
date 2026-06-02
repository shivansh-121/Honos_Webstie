'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { conclusion } from '@/lib/company-data';

export function Commitment() {
  const [index, setIndex] = useState(0);

  return (
    <section className="border-t border-honos-line bg-obsidian py-24 lg:py-32">
      <div className="mx-auto max-w-container px-6 lg:px-10">
        <SectionLabel className="mb-4">Our Assurance</SectionLabel>
        <h2 className="mb-16 font-display text-5xl uppercase tracking-wider text-honos-white">
          What We Promise
        </h2>

        <div className="relative min-h-[200px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
              className="max-w-3xl"
            >
              <blockquote className="font-body text-2xl italic leading-relaxed text-honos-white md:text-3xl">
                &ldquo;{conclusion[index]}&rdquo;
              </blockquote>
              <cite className="mt-8 block font-mono text-xs not-italic uppercase tracking-widest text-honos-muted">
                — Honos Protection Services Pvt. Ltd.
              </cite>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {conclusion.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-px transition-all duration-300 ${
                i === index ? 'w-12 bg-gold' : 'w-6 bg-honos-line hover:bg-gold/50'
              }`}
              aria-label={`View assurance ${i + 1}`}
              data-cursor="link"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
