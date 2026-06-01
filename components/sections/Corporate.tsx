import { SectionLabel } from '@/components/ui/SectionLabel';
import { company, directors } from '@/lib/company-data';

const facts = [
  { label: 'Incorporated', value: company.incorporated },
  { label: 'CIN', value: company.cin },
  { label: 'Status', value: company.status },
  { label: 'Experience', value: `${company.yearsInBusiness} Years` },
  { label: 'Registrar', value: company.registrar },
  { label: 'Paid-up Capital', value: company.paidUpCapital },
];

export function Corporate() {
  return (
    <section className="border-y border-honos-line bg-steel/30 py-20">
      <div className="mx-auto max-w-container px-6 lg:px-10">
        <SectionLabel className="mb-4">Corporate Information</SectionLabel>
        <h2 className="mb-12 font-display text-4xl uppercase tracking-wider text-honos-white md:text-5xl">
          {company.legalNameFull}
        </h2>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {facts.map((f) => (
            <div key={f.label}>
              <p className="font-mono text-[9px] uppercase tracking-widest text-honos-muted">
                {f.label}
              </p>
              <p className="mt-2 font-body text-sm text-honos-white">{f.value}</p>
            </div>
          ))}
        </div>

        <div className="section-divider my-12" />

        <h3 className="mb-6 font-display text-2xl uppercase text-honos-white">
          Directors
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          {directors.map((d) => (
            <div
              key={d.din}
              className="border-l-2 border-brand-red pl-6"
            >
              <p className="font-display text-xl uppercase text-honos-white">
                {d.name}
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-gold">
                {d.role} · DIN {d.din}
              </p>
              <p className="mt-2 font-body text-sm text-honos-muted">
                Appointed {d.appointed}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 font-mono text-[10px] text-honos-muted">
          Last AGM: {company.lastAgm} · Last balance sheet: {company.lastBalanceSheet} ·{' '}
          {company.nicCode}
        </p>
      </div>
    </section>
  );
}
