import { whyChooseUs } from '@/lib/company-data';

const text = whyChooseUs.map((item) => `${item.toUpperCase()} ·`).join(' ');

export function Marquee() {
  return (
    <section
      className="relative overflow-hidden border-y border-brand-red/40 bg-brand-navy/30 py-4"
      aria-label="Why choose Honos"
    >
      <div className="flex whitespace-nowrap">
        <div className="animate-marquee flex shrink-0">
          {[text, text].map((t, idx) => (
            <span
              key={idx}
              className="px-4 font-mono text-[13px] uppercase tracking-widest text-honos-white/90"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
