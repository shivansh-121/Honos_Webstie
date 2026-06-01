import { SectionLabel } from '@/components/ui/SectionLabel';
import { rates, terms } from '@/lib/company-data';

function formatInr(amount: number) {
  return `₹ ${amount.toLocaleString('en-IN')}`;
}

export function Rates() {
  return (
    <section className="bg-obsidian py-24 lg:py-32">
      <div className="mx-auto max-w-container px-6 lg:px-10">
        <SectionLabel className="mb-4">Commercial Proposal</SectionLabel>
        <h2 className="mb-4 font-display text-5xl uppercase tracking-wider text-honos-white">
          Security Services Rates
        </h2>
        <p className="mb-8 font-mono text-xs uppercase tracking-widest text-honos-muted">
          Without compliances · GST @ 18% will be charged extra as applicable
        </p>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-left">
            <thead>
              <tr className="border-b border-gold font-mono text-[11px] uppercase tracking-widest text-gold">
                <th className="py-4 pr-4">Position</th>
                <th className="py-4 pr-4">Wage (₹)</th>
                <th className="py-4 pr-4">Service Charge (₹)</th>
                <th className="py-4">Total (₹)</th>
              </tr>
            </thead>
            <tbody>
              {rates.map((row) => (
                <tr
                  key={row.position}
                  className="border-b border-honos-line font-body text-lg text-honos-white"
                >
                  <td className="py-4 pr-4">{row.position}</td>
                  <td className="py-4 pr-4 text-honos-muted">
                    {formatInr(row.wage)}
                  </td>
                  <td className="py-4 pr-4 text-honos-muted">
                    {formatInr(row.serviceCharge)}
                  </td>
                  <td className="py-4 font-mono text-gold">
                    {formatInr(row.total)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16">
          <h3 className="mb-6 font-display text-2xl uppercase text-honos-white">
            Terms & Conditions
          </h3>
          <ul className="space-y-3">
            {terms.map((t) => (
              <li
                key={t}
                className="flex gap-3 font-body text-lg text-honos-muted"
              >
                <span className="text-gold">—</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
