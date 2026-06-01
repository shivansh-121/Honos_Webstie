import { PageShell } from '@/components/PageShell';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { services } from '@/lib/company-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Honos Protection Services Pvt. Ltd.',
  description:
    'Security Supervisor, Security Guard, Lady Guard, Gunman, Housekeeping, Manpower Outsourcing, Event Security, and Bouncer / Bodyguard services in Gujarat.',
};

export default function ServicesPage() {
  return (
    <PageShell>
      <div className="min-h-screen pt-32">
        <div className="mx-auto max-w-container px-6 pb-24 lg:px-10">
          <SectionLabel className="mb-6">Services Offered</SectionLabel>
          <h1 className="mb-6 font-display text-[clamp(3rem,10vw,7rem)] uppercase leading-none tracking-wider text-honos-white">
            Our Services
          </h1>
          <p className="mb-16 max-w-3xl font-body text-xl text-honos-muted">
            Honos Protection Services Pvt. Ltd. delivers trained personnel for
            industrial, commercial, residential, and government establishments
            across Gujarat.
          </p>
          <div className="section-divider mb-16" />

          <div className="space-y-16">
            {services.map((s) => (
              <article
                key={s.num}
                className="border-l border-gold pl-8"
                id={s.title.toLowerCase().replace(/\s+/g, '-')}
              >
                <span className="font-mono text-sm text-gold">{s.num}</span>
                <h2 className="mt-2 font-display text-4xl uppercase tracking-wider text-honos-white">
                  {s.title}
                </h2>
                <ul className="mt-6 space-y-2">
                  {s.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 font-body text-lg text-honos-muted"
                    >
                      <span className="text-gold">—</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <Button href="/contact">Request a Proposal →</Button>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
