'use client';

import { motion } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { industryCategories, company } from '@/lib/company-data';
import { Counter } from '@/components/ui/Counter';

export function Industries() {
  const totalClients = industryCategories.reduce((acc, cat) => acc + cat.clients.length, 0);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 12 }
    },
  };

  return (
    <section id="industries" className="relative bg-obsidian py-24 lg:py-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-brand-red/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-[-10%] w-1/2 h-1/2 bg-gold/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-container px-6 lg:px-10">
        
        {/* Animated Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-b border-honos-line/30 pb-16">
          <div className="text-center">
            <h3 className="text-5xl md:text-7xl font-display font-bold text-brand-red mb-3">
              <Counter end={104} suffix="+" />
            </h3>
            <p className="font-mono text-sm md:text-base uppercase tracking-widest text-honos-muted font-semibold">Trusted Clients</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl md:text-7xl font-display font-bold text-brand-red mb-3">
              <Counter end={22} suffix="+" />
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
              <Counter end={2000} suffix="+" />
            </h3>
            <p className="font-mono text-sm md:text-base uppercase tracking-widest text-honos-muted font-semibold">Verified Personnel</p>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel className="mb-4 justify-center">Sectors We Serve</SectionLabel>
          <h2 className="mb-6 font-display text-5xl uppercase tracking-wider text-honos-white md:text-6xl font-bold">
            Trusted Across India
          </h2>
          <p className="font-body text-xl text-honos-muted">
            We provide reliable, premium security and manpower solutions across 22+ major sectors, partnering with leading organizations and government bodies nationwide.
          </p>
        </div>

        {/* Animated Category Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 max-w-7xl mx-auto"
        >
          {industryCategories.map((cat, index) => (
            <motion.div 
              key={cat.name} 
              variants={cardVariants}
              whileHover={{ scale: 1.05, translateY: -5 }}
              className="group relative border border-honos-line/40 bg-void/50 backdrop-blur-sm p-4 sm:p-6 md:p-8 flex items-center justify-center text-center overflow-hidden transition-all duration-300 hover:border-gold hover:shadow-[0_0_30px_rgba(201,168,76,0.15)] rounded-xl min-h-[100px] sm:min-h-[120px] w-[calc(50%-0.375rem)] sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)] xl:w-[calc(20%-1.2rem)]"
            >
              {/* Animated gradient hover background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/0 via-brand-red/5 to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col items-center w-full">
                <div className="mb-2 sm:mb-4 h-1 w-8 sm:w-12 bg-brand-red rounded-full group-hover:bg-gold transition-colors duration-300" />
                <h3 className="font-display text-sm sm:text-base lg:text-lg uppercase text-honos-white font-bold leading-tight group-hover:text-gold transition-colors duration-300">
                  {cat.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 sm:mt-24 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
        >
          <div className="flex justify-center items-center gap-2 sm:gap-3 px-6 py-3 sm:py-4 bg-white/5 backdrop-blur-md rounded-2xl md:rounded-full border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-red animate-pulse shrink-0" />
            <p className="font-mono text-[9px] md:text-[11px] text-honos-white uppercase tracking-widest sm:tracking-[0.2em] leading-relaxed whitespace-nowrap">
              ISO 9001:2015 Certified
            </p>
          </div>

          <div className="flex justify-center items-center gap-2 sm:gap-3 px-6 py-3 sm:py-4 bg-white/5 backdrop-blur-md rounded-2xl md:rounded-full border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-red animate-pulse shrink-0" />
            <p className="font-mono text-[9px] md:text-[11px] text-honos-white uppercase tracking-widest sm:tracking-[0.2em] leading-relaxed whitespace-nowrap">
              PSARA Certified
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
