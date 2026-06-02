import { SectionLabel } from '@/components/ui/SectionLabel';
import { company, directors } from '@/lib/company-data';
import { motion } from 'framer-motion';

const facts = [
  { label: 'Incorporated', value: company.incorporated },
  { label: 'Experience', value: `${company.yearsInBusiness} Years` },
  { label: 'Workforce', value: '2000+ Personnel' },
  { label: 'Presence', value: '6 States' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Corporate() {
  return (
    <section className="relative border-y border-honos-line bg-void/90 py-24 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <SectionLabel className="mb-4 mx-auto justify-center">Corporate Information</SectionLabel>
          <h2 className="font-display text-4xl uppercase tracking-wider text-honos-white md:text-5xl lg:text-6xl">
            {company.legalNameFull}
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 mb-20"
        >
          {facts.map((f) => (
            <motion.div 
              key={f.label}
              variants={itemVariants}
              className="group relative border border-honos-line/40 bg-void/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gold/50 hover:shadow-[0_0_30px_rgba(201,168,76,0.1)]"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-gold mb-3">
                {f.label}
              </p>
              <p className="font-display text-xl sm:text-2xl text-honos-white font-bold tracking-wide group-hover:text-gold transition-colors duration-300">
                {f.value}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Elegant Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-honos-line to-transparent opacity-60 mb-20" />

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3"
          >
            <h3 className="font-display text-3xl uppercase text-honos-white mb-4 flex items-center gap-4">
              <span className="w-8 h-1 bg-brand-red inline-block" />
              Leadership
            </h3>
            <p className="font-body text-honos-muted text-lg">
              Guided by experienced professionals committed to operational excellence and unyielding integrity.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-2/3 grid gap-6 sm:grid-cols-2 w-full"
          >
            {directors.map((d) => (
              <motion.div
                key={d.din}
                variants={itemVariants}
                className="group relative border border-honos-line/30 bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-brand-red/50"
              >
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-brand-red rounded-r-full group-hover:h-3/4 group-hover:bg-gold transition-all duration-500" />
                <div className="pl-4">
                  <p className="font-display text-2xl uppercase text-honos-white mb-2 group-hover:text-white transition-colors">
                    {d.name}
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-gold mb-4">
                    {d.role} <span className="mx-2 text-honos-muted">|</span> DIN {d.din}
                  </p>
                  <div className="inline-block px-3 py-1 bg-void/80 border border-honos-line/50 rounded-full font-mono text-[9px] uppercase tracking-wider text-honos-muted">
                    Appointed {d.appointed}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 pt-8 border-t border-honos-line/30 flex justify-center"
        >
          <div className="inline-flex flex-wrap justify-center items-center gap-2 sm:gap-4 px-6 py-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            <p className="font-mono text-[9px] sm:text-[11px] text-honos-white uppercase tracking-[0.2em]">
              ISO 9001:2015 Certified <span className="mx-2 text-gold">·</span> PSARA Certified <span className="mx-2 text-gold">·</span> {company.nicCode}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

