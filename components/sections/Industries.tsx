import { SectionLabel } from '@/components/ui/SectionLabel';
import { industryCategories } from '@/lib/company-data';

export function Industries() {
  return (
    <section id="industries" className="bg-steel/30 py-24 lg:py-32">
      <div className="mx-auto max-w-container px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel className="mb-4 justify-center">Industries We Serve</SectionLabel>
          <h2 className="mb-6 font-display text-5xl uppercase tracking-wider text-honos-white md:text-6xl">
            Trusted Across Gujarat
          </h2>
          <p className="font-body text-xl text-honos-muted">
            We provide reliable security solutions across various sectors including cinema, corporate offices, residential, hospitality, and government.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industryCategories.map((cat) => (
            <div key={cat.name} className="border border-honos-line bg-obsidian p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="mb-4 font-display text-xl uppercase text-brand-navy border-b border-honos-line pb-3">
                {cat.name}
              </h3>
              <ul className="space-y-3">
                {cat.clients.slice(0, 3).map((client) => (
                  <li key={client} className="flex items-start gap-3 font-body text-[15px] leading-tight text-honos-white">
                    <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                    {client}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
