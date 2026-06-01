import { company, services } from '@/lib/company-data';

const stats = [
  { value: `${company.yearsInBusiness}+`, label: 'Years in Gujarat' },
  { value: '24/7', label: 'Field Supervision' },
  { value: String(services.length), label: 'Service Lines' },
  { value: '24h', label: 'Guard Replacement' },
];

export function HeroStats({ className = '' }: { className?: string }) {
  return (
    <div
      className={`hero-animate grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4 ${className}`}
    >
      {stats.map((s) => (
        <div
          key={s.label}
          className="hero-stat-card border border-honos-line bg-obsidian/90 px-4 py-4 backdrop-blur-sm"
        >
          <p className="font-display text-3xl leading-none text-brand-red lg:text-4xl">
            {s.value}
          </p>
          <p className="mt-2 font-mono text-[9px] uppercase tracking-widest text-honos-muted">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}
