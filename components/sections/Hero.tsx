'use client';

import { company } from '@/lib/company-data';
import { Button } from '@/components/ui/Button';
import { SectionLabel } from '@/components/ui/SectionLabel';

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[90vh] items-center bg-void pt-20 pb-10 overflow-hidden">
      <div className="mx-auto w-full max-w-container px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="text-center lg:text-left z-10">
            <SectionLabel className="mb-6 lg:mx-0 text-brand-navy">
              <span>{company.yearsInBusiness} Years</span>
              <span className="hidden sm:inline">·</span>
              <span>Surat</span>
              <span className="hidden sm:inline">·</span>
              <span>Verified</span>
              <span className="hidden sm:inline">·</span>
              <span>Est. 2017</span>
            </SectionLabel>

            <h1 className="mb-6 font-display text-[clamp(2.75rem,8vw,5rem)] uppercase leading-[0.9] tracking-wider text-honos-white">
              <span className="block">RELIABLE.</span>
              <span className="block text-brand-navy">DISCIPLINED.</span>
              <span className="block">PROFESSIONAL.</span>
            </h1>

            <p className="mx-auto mb-4 max-w-xl font-body text-2xl italic text-brand-red lg:mx-0">
              {company.tagline}
            </p>
            <p className="mx-auto mb-8 max-w-xl font-body text-xl leading-relaxed text-honos-muted lg:mx-0">
              {company.description}
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Button href="/services">Our Services →</Button>
              <Button href="/contact">Request a Quote</Button>
            </div>
          </div>

          <div className="relative z-10 hidden lg:block">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-obsidian">
              <img 
                src="/images/bouncers_team.png" 
                alt="Security Guards" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1542614945-8473dc16a3a7?q=80&w=2000&auto=format&fit=crop';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
