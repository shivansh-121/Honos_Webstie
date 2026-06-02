'use client';

import { motion } from 'framer-motion';
import { company } from '@/lib/company-data';
import { Button } from '@/components/ui/Button';
import { Counter } from '@/components/ui/Counter';

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center bg-[#f9f9fb] pt-32 pb-20 overflow-hidden">
      {/* Subtle Animated Background Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{ backgroundImage: 'radial-gradient(#1b365d 2px, transparent 2px)', backgroundSize: '40px 40px' }}
      ></div>

      <div className="relative z-10 mx-auto w-full max-w-container px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Content Area (Spans 7 columns) */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block bg-[#cc0000] px-4 py-2 mb-8 shadow-lg"
            >
              <h2 className="font-display text-white text-sm md:text-lg uppercase tracking-widest m-0 font-bold">
                INDIA&apos;S TRUSTED PARTNER FOR SECURITY & MANPOWER
              </h2>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 font-display text-[clamp(3rem,6vw,5.5rem)] uppercase leading-[0.9] tracking-tight text-[#111827] font-bold"
            >
              TOTAL <span className="text-brand-navy">MANPOWER.</span><br/>
              UNMATCHED <span className="text-[#cc0000]">TRUST.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10 max-w-2xl font-body text-xl leading-relaxed text-[#4b5563]"
            >
              {company.legalNameFull} delivers PSARA-compliant security, integrated facility management, and verified manpower supply across India. Protecting what matters most with absolute discipline.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button href="/services" variant="primary">Our Services</Button>
              <Button href="/contact" variant="outline" className="!border-[#1b365d] !text-[#1b365d] bg-transparent">Contact Us</Button>
            </motion.div>
          </div>

          {/* Right Image Area (Spans 5 columns) */}
          <div className="relative lg:col-span-5 mt-16 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl overflow-hidden shadow-2xl h-[600px] border border-gray-200"
            >
              <img 
                src="/images/hero_guard.png" 
                alt="Professional Security" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent mix-blend-multiply"></div>
            </motion.div>

            {/* Glassmorphic Floating Badge 1 */}
            <motion.div 
              initial={{ opacity: 0, y: -20, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -left-12 top-24 z-20 backdrop-blur-md bg-white/70 border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 rounded-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#cc0000] text-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-brand-navy leading-none mb-1"><Counter end={2000} suffix="+" /></p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-gray-600">Strong Workforce</p>
                </div>
              </div>
            </motion.div>

            {/* Glassmorphic Floating Badge 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20, rotate: 5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -right-8 top-1/2 -translate-y-1/2 z-20 backdrop-blur-md bg-white/70 border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 rounded-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy text-white font-display text-xl font-bold">
                  <Counter end={company.yearsInBusiness} suffix="+" />
                </div>
                <div>
                  <p className="font-display text-xl font-bold text-brand-navy leading-none mb-1">Years of Experience</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-gray-600">In the Industry</p>
                </div>
              </div>
            </motion.div>

            {/* Glassmorphic Floating Badge 3 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -left-6 bottom-16 z-20 backdrop-blur-md bg-white/70 border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-4 md:p-6 rounded-2xl"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-gold text-white">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-display text-xl md:text-2xl font-bold text-brand-navy leading-none mb-1"><Counter end={100} suffix="+" /></p>
                  <p className="font-mono text-[8px] md:text-[10px] uppercase tracking-widest text-gray-600">Active Clients</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
