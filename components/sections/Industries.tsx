'use client';

import { useState } from 'react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { industryCategories } from '@/lib/company-data';

export function Industries() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = industryCategories[activeIndex];

  return (
    <section id="industries" className="bg-void py-24 lg:py-32">
      <div className="mx-auto max-w-container px-6 lg:px-10">
        <SectionLabel className="mb-4">Industries We Serve</SectionLabel>
        <h2 className="mb-4 font-display text-5xl uppercase tracking-wider text-honos-white md:text-7xl">
          Trusted Across Gujarat
        </h2>
        <p className="mb-12 max-w-2xl font-body text-lg text-honos-muted">
          Reputed organizations across cinema, malls, corporate offices, residential,
          construction, diamond & jewellery, hotels, institutional, factory, hospital,
          public infrastructure, and government sectors.
        </p>

        <div className="flex flex-col gap-8 lg:flex-row">
          <div
            className="flex flex-wrap gap-2 lg:w-80 lg:flex-col"
            role="tablist"
            aria-label="Industry categories"
          >
            {industryCategories.map((cat, i) => (
              <button
                key={cat.name}
                type="button"
                role="tab"
                aria-selected={i === activeIndex}
                onClick={() => setActiveIndex(i)}
                className={`border px-4 py-3 text-left font-mono text-[10px] uppercase tracking-widest transition-colors ${
                  i === activeIndex
                    ? 'border-gold bg-gold/10 text-gold'
                    : 'border-honos-line text-honos-muted hover:border-gold/50'
                }`}
                data-cursor="link"
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div
            className="flex-1 border border-honos-line bg-obsidian p-8"
            role="tabpanel"
          >
            <h3 className="mb-6 font-display text-2xl uppercase text-gold">
              {active.name}
            </h3>
              <ul className="grid gap-2 sm:grid-cols-2">
                {active.clients.slice(0, 5).map((client) => (
                  <li
                    key={client}
                    className="font-body text-base text-honos-white"
                  >
                    {client}
                  </li>
                ))}
              </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
