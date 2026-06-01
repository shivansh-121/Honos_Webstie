import { PageShell } from '@/components/PageShell';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { Corporate } from '@/components/sections/Corporate';
import {
  company,
  contact,
  directors,
  whyChooseUs,
  training,
  supervision,
  compliance,
  terms,
  conclusion,
} from '@/lib/company-data';
import { ContactDetails } from '@/components/ui/ContactDetails';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Honos Protection Services Pvt. Ltd.',
  description:
    'Incorporated 2017 in Surat. CIN U74999GJ2017PTC095095. Security & manpower services across India — company profile, directors, compliance, and training.',
};

export default function AboutPage() {
  return (
    <PageShell>
      <div className="min-h-screen pt-32">
        <div className="mx-auto max-w-container px-6 pb-24 lg:px-10">
          <SectionLabel className="mb-4">Company Profile</SectionLabel>
          <h1 className="mb-4 font-display text-[clamp(2.5rem,8vw,5rem)] uppercase leading-none tracking-wider text-honos-white">
            About Honos
          </h1>
          <p className="mb-10 font-mono text-xs uppercase tracking-widest text-brand-red">
            {company.status} · {company.yearsInBusiness} Years in Business ·{' '}
            {company.companyClass}
          </p>
          <div className="section-divider mb-16" />

          <div className="max-w-3xl space-y-8">
            <p className="font-body text-xl leading-relaxed text-honos-muted">
              {company.description}
            </p>
            <p className="font-body text-xl italic text-honos-white">
              {company.tagline}
            </p>
            <p className="font-body text-xl leading-relaxed text-honos-muted">
              {company.presence}
            </p>
            <p className="font-body text-xl leading-relaxed text-honos-muted">
              {company.sectors}
            </p>
            <p className="font-body text-xl leading-relaxed text-honos-muted">
              We look forward to building a long-term association with your
              organization.
            </p>
          </div>
        </div>
      </div>

      <Corporate />

      <div className="mx-auto max-w-container px-6 pb-24 lg:px-10">
        <section className="py-16">
          <h2 className="mb-8 font-display text-4xl uppercase text-honos-white">
            Leadership
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {directors.map((d) => (
              <article
                key={d.din}
                className="border border-honos-line bg-obsidian p-8"
              >
                <h3 className="font-display text-2xl uppercase text-honos-white">
                  {d.name}
                </h3>
                <p className="mt-2 font-mono text-xs uppercase tracking-widest text-gold">
                  {d.role}
                </p>
                <dl className="mt-4 space-y-2 font-mono text-xs text-honos-muted">
                  <div>
                    <dt className="inline text-honos-muted">DIN: </dt>
                    <dd className="inline text-honos-white">{d.din}</dd>
                  </div>
                  <div>
                    <dt className="inline text-honos-muted">Appointed: </dt>
                    <dd className="inline text-honos-white">{d.appointed}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="py-8">
          <h2 className="mb-8 font-display text-4xl uppercase text-honos-white">
            Why Choose Us
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {whyChooseUs.map((item) => (
              <li
                key={item}
                className="flex gap-3 font-body text-lg text-honos-white"
              >
                <span className="text-brand-red">✔</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="py-8">
          <h2 className="mb-4 font-display text-4xl uppercase text-honos-white">
            {training.title}
          </h2>
          <p className="mb-6 font-body text-lg text-honos-muted">{training.intro}</p>
          <p className="font-body text-lg text-honos-muted">
            Training includes: {training.items.join('; ')}.
          </p>
        </section>

        <section className="py-8">
          <h2 className="mb-8 font-display text-4xl uppercase text-honos-white">
            {supervision.title}
          </h2>
          <ul className="space-y-3">
            {supervision.items.map((item) => (
              <li key={item} className="font-body text-lg text-honos-muted">
                — {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="py-8">
          <h2 className="mb-8 font-display text-4xl uppercase text-honos-white">
            Compliance & Registration
          </h2>
          <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {compliance.map((item) => (
              <div key={item.label}>
                <dt className="font-mono text-[10px] uppercase tracking-widest text-honos-muted">
                  {item.label}
                </dt>
                <dd className="mt-1 font-mono text-sm text-gold">{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="py-8">
          <h2 className="mb-8 font-display text-4xl uppercase text-honos-white">
            Terms & Conditions
          </h2>
          <ul className="space-y-3">
            {terms.map((t) => (
              <li key={t} className="font-body text-lg text-honos-muted">
                — {t}
              </li>
            ))}
          </ul>
        </section>

        <section className="border-l-2 border-brand-red py-8 pl-6">
          <h2 className="mb-6 font-display text-3xl uppercase text-honos-white">
            Our Assurance
          </h2>
          {conclusion.map((p) => (
            <p key={p} className="mb-4 font-body text-lg italic text-honos-muted">
              {p}
            </p>
          ))}
        </section>

        <section className="mt-8 border border-honos-line bg-obsidian p-8">
          <h2 className="mb-8 font-display text-3xl uppercase text-honos-white">
            Visit Us
          </h2>
          <ContactDetails />
        </section>

        <div className="mt-16 flex flex-wrap gap-6">
          <Button href="/contact">Send Enquiry →</Button>
          <a
            href={`https://wa.me/${contact.phoneTel.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-outline inline-flex items-center border border-gold px-8 py-4 font-mono text-xs uppercase tracking-widest text-gold"
          >
            WhatsApp
          </a>
          <a
            href={`tel:${contact.phoneTel}`}
            className="inline-flex items-center font-mono text-xs uppercase tracking-widest text-gold"
          >
            Call {contact.phoneDisplay}
          </a>
        </div>
      </div>
    </PageShell>
  );
}
