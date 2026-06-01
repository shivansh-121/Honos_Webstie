'use client';

import { SectionLabel } from '@/components/ui/SectionLabel';
import { industryCategories, company } from '@/lib/company-data';
import { Counter } from '@/components/ui/Counter';

// Filter down to the most impressive/important categories
const KEY_CATEGORIES = [
  'Central Government / PSU',
  'State Government Departments',
  'Commercial & Corporate Offices',
  'Diamond & Jewellery Industry',
  'Cinema & Multiplex',
  'Factory & Treatment Plants',
  'Malls & Textile Market',
  'Construction'
];

export function Industries() {
  const filteredCategories = industryCategories.filter(c => KEY_CATEGORIES.includes(c.name));
  // Sum up all clients dynamically from the data
  const totalClients = industryCategories.reduce((acc, cat) => acc + cat.clients.length, 0);

  return (
    <section id="industries" className="bg-steel/30 py-24 lg:py-32">
      <div className="mx-auto max-w-container px-6 lg:px-10">
        
        {/* Animated Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-b border-honos-line pb-16">
          <div className="text-center">
            <h3 className="text-5xl md:text-7xl font-display font-bold text-brand-red mb-3">
              <Counter end={totalClients} suffix="+" />
            </h3>
            <p className="font-mono text-sm md:text-base uppercase tracking-widest text-honos-muted font-semibold">Trusted Clients</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl md:text-7xl font-display font-bold text-brand-red mb-3">
              <Counter end={industryCategories.length} />
            </h3>
            <p className="font-mono text-sm md:text-base uppercase tracking-widest text-honos-muted font-semibold">Sectors Served</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl md:text-7xl font-display font-bold text-brand-red mb-3">
              <Counter end={company.yearsInBusiness} suffix="+" />
            </h3>
            <p className="font-mono text-sm md:text-base uppercase tracking-widest text-honos-muted font-semibold">Years Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl md:text-7xl font-display font-bold text-brand-red mb-3">
              <Counter end={500} suffix="+" />
            </h3>
            <p className="font-mono text-sm md:text-base uppercase tracking-widest text-honos-muted font-semibold">Verified Personnel</p>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel className="mb-4 justify-center">Industries We Serve</SectionLabel>
          <h2 className="mb-6 font-display text-5xl uppercase tracking-wider text-honos-white md:text-6xl font-bold">
            Trusted Across India
          </h2>
          <p className="font-body text-xl text-honos-muted">
            We provide reliable security solutions across major sectors, partnering with leading organizations and government bodies.
          </p>
        </div>

        {/* 2-Column Grid with condensed client lists */}
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {filteredCategories.map((cat) => {
            const displayedClients = cat.clients.slice(0, 2);
            const remainingCount = cat.clients.length - 2;

            return (
              <div key={cat.name} className="border-2 border-honos-line bg-white p-8 shadow-sm hover:shadow-xl transition-shadow rounded-xl">
                <h3 className="mb-5 font-display text-2xl uppercase text-brand-navy border-b-2 border-honos-line pb-4 font-bold">
                  {cat.name}
                </h3>
                <ul className="space-y-4">
                  {displayedClients.map((client) => (
                    <li key={client} className="flex items-start gap-4 font-body text-lg leading-tight text-honos-white font-medium">
                      <span className="mt-2 block h-2.5 w-2.5 shrink-0 rounded-full bg-brand-red" />
                      {client}
                    </li>
                  ))}
                  {remainingCount > 0 && (
                    <li className="flex items-center gap-4 font-body text-lg leading-tight text-honos-muted italic">
                      <span className="block h-2.5 w-2.5 shrink-0 rounded-full bg-gray-300" />
                      + {remainingCount} more sites
                    </li>
                  )}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
