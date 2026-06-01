import Link from 'next/link';
import { company, contact, compliance, services } from '@/lib/company-data';

const featured = services.slice(0, 5);

export function HeroPanel() {
  const { google, justdial } = contact.ratings;

  return (
    <aside className="hero-animate hero-panel relative">
      <div className="relative border border-honos-line bg-obsidian/95 p-6 backdrop-blur-md lg:p-8 shadow-xl">
        <div className="mb-6 flex items-center justify-between border-b border-honos-line pb-4">
          <p className="font-display text-xl uppercase tracking-wider text-brand-red">
            Company Overview
          </p>
        </div>

        <div className="mb-6 grid grid-cols-2 gap-3">
          <div className="border border-honos-line/80 bg-void/60 p-3">
            <p className="font-display text-2xl text-gold">{google.score}</p>
            <p className="font-mono text-[9px] uppercase text-honos-muted">
              Google ({google.count})
            </p>
          </div>
          <div className="border border-honos-line/80 bg-void/60 p-3">
            <p className="font-display text-2xl text-gold">{justdial.score}</p>
            <p className="font-mono text-[9px] uppercase text-honos-muted">
              Justdial ({justdial.count})
            </p>
          </div>
        </div>

        <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-honos-muted">
          Core Capabilities
        </p>
        <ul className="mb-6 space-y-2">
          {featured.map((s) => (
            <li
              key={s.num}
              className="flex items-start gap-3 border-l border-brand-red/50 pl-3"
            >
              <span className="font-mono text-[10px] text-gold">{s.num}</span>
              <span className="font-body text-sm leading-snug text-honos-white">
                {s.title}
              </span>
            </li>
          ))}
        </ul>

        <div className="space-y-2 border-t border-honos-line pt-4">
          {compliance.slice(1, 4).map((c) => (
            <div key={c.label} className="flex justify-between gap-4">
              <span className="font-mono text-[9px] uppercase text-honos-muted">
                {c.label}
              </span>
              <span className="truncate font-mono text-[9px] text-gold">{c.value}</span>
            </div>
          ))}
        </div>

        <Link
          href="/services"
          className="mt-6 inline-block font-mono text-[10px] uppercase tracking-widest text-brand-red transition-colors hover:text-gold"
          data-cursor="link"
        >
          View all {services.length} services →
        </Link>
      </div>

      <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-widest text-honos-muted lg:text-left">
        {company.location} · Est. {company.incorporated.split(' ').pop()}
      </p>
    </aside>
  );
}
