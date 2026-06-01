import { contact } from '@/lib/company-data';

type ContactDetailsProps = {
  className?: string;
};

export function ContactDetails({
  className = '',
}: ContactDetailsProps) {
  return (
    <address className={`not-italic space-y-10 ${className}`}>
      
      {/* Office Address */}
      <div>
        <h4 className="font-mono text-[11px] uppercase tracking-widest text-brand-red mb-4 font-bold">Head Office</h4>
        <div className="space-y-1 font-body text-xl text-[#111827] font-medium">
          {contact.addressLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>

      {/* Phone Numbers */}
      <div>
        <h4 className="font-mono text-[11px] uppercase tracking-widest text-brand-red mb-4 font-bold">Call Us</h4>
        <div className="space-y-3">
          {contact.phones.map((p) => (
            <a
              key={p.tel}
              href={`tel:${p.tel}`}
              className="block font-display text-3xl text-[#111827] font-bold transition-colors hover:text-[#cc0000]"
            >
              {p.display}
              <span className="ml-3 font-mono text-[10px] text-gray-500 tracking-widest uppercase">({p.label})</span>
            </a>
          ))}
        </div>
      </div>

      {/* Email Addresses */}
      <div>
        <h4 className="font-mono text-[11px] uppercase tracking-widest text-brand-red mb-4 font-bold">Email Us</h4>
        <div className="space-y-2">
          <a
            href={`mailto:${contact.email}`}
            className="block font-body text-lg text-[#111827] font-medium transition-colors hover:text-[#cc0000]"
          >
            {contact.email}
          </a>
          <a
            href={`mailto:${contact.emailAlt}`}
            className="block font-body text-lg text-[#111827] font-medium transition-colors hover:text-[#cc0000]"
          >
            {contact.emailAlt}
          </a>
        </div>
      </div>

    </address>
  );
}
