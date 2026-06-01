'use client';

import { company } from '@/lib/company-data';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center bg-void pb-10 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541888075865-985175945145?q=80&w=2000&auto=format&fit=crop" 
          alt="Corporate Security Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-container px-6 lg:px-10 pt-32">
        <div className="max-w-4xl">
          {/* Red Ribbon */}
          <div className="inline-block bg-[#cc0000] px-4 py-2 mb-8 shadow-lg">
            <h2 className="font-display text-white text-lg md:text-xl uppercase tracking-widest m-0 font-bold">
              INDIA&apos;S TRUSTED PARTNER FOR SECURITY, FACILITY & MANPOWER SOLUTIONS
            </h2>
          </div>

          <h1 className="mb-6 font-display text-[clamp(3.5rem,10vw,6.5rem)] uppercase leading-[0.95] tracking-wider text-white font-bold drop-shadow-xl">
            <span className="block">TOTAL PROTECTION</span>
            <span className="block">UNMATCHED TRUST</span>
          </h1>

          <p className="mb-12 max-w-2xl font-body text-xl leading-relaxed text-gray-200 font-medium drop-shadow-md">
            {company.legalNameFull} delivers PSARA-compliant security, integrated facility management, professional housekeeping, and verified manpower supply across India. Protecting what matters most — with discipline, technology, and trust.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/services" variant="primary">Our Services</Button>
            <Button href="/contact" variant="white">Contact Us</Button>
          </div>
        </div>
      </div>

      {/* Curved SVG Wave at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 translate-y-[1px]">
        <svg
          className="relative block w-full h-[60px] md:h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.83,115.11,192.39,101.44,236,91.88,279.79,77.3,321.39,56.44Z"
            style={{ fill: 'var(--color-void)' }}
          ></path>
        </svg>
      </div>
    </section>
  );
}
