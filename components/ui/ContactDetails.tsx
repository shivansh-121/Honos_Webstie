import { contact, company } from '@/lib/company-data';

type ContactDetailsProps = {
  variant?: 'full' | 'compact';
  className?: string;
};

export function ContactDetails({
  variant = 'full',
  className = '',
}: ContactDetailsProps) {
  const { google, justdial } = contact.ratings;

  return (
    <address
      className={`not-italic ${className}`}
      itemScope
      itemType="https://schema.org/SecurityService"
    >
      <meta itemProp="name" content={company.legalName} />

      {variant === 'full' && (
        <div className="mb-4 space-y-1">
          <p className="font-mono text-[11px] uppercase tracking-widest text-brand-red">
            {contact.category} · Verified · {company.yearsInBusiness} Years
          </p>
          <p className="font-mono text-[10px] text-honos-muted">
            Google {google.score}★ ({google.count}) · Justdial {justdial.score}★ (
            {justdial.count})
          </p>
        </div>
      )}

      <div className="space-y-1 font-body text-lg text-honos-white">
        {contact.addressLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
        <p className="text-honos-muted">Located in {contact.locatedIn}</p>
        {variant === 'full' && (
          <>
            <p className="mt-4 font-mono text-xs text-honos-muted">
              Registered: {contact.registeredAddress}
            </p>
            <p className="font-mono text-xs text-honos-muted">
              Plus Code: {contact.plusCode}
            </p>
            <p className="font-mono text-xs text-honos-muted">{contact.hours}</p>
          </>
        )}
      </div>

      <div className="mt-6 space-y-2">
        {contact.phones.map((p) => (
          <a
            key={p.tel}
            href={`tel:${p.tel}`}
            className="block font-mono text-sm uppercase tracking-widest text-gold transition-colors hover:text-brand-red"
            data-cursor="link"
          >
            {p.display}
            {variant === 'full' && (
              <span className="ml-2 text-[10px] text-honos-muted">({p.label})</span>
            )}
          </a>
        ))}
      </div>

      {variant === 'full' && (
        <div className="mt-4 space-y-2">
          <a
            href={`mailto:${contact.email}`}
            className="block font-mono text-xs text-honos-muted transition-colors hover:text-gold"
            data-cursor="link"
          >
            {contact.email}
          </a>
          <a
            href={`mailto:${contact.emailAlt}`}
            className="block font-mono text-xs text-honos-muted transition-colors hover:text-gold"
            data-cursor="link"
          >
            {contact.emailAlt}
          </a>
          <a
            href={contact.website}
            target="_blank"
            rel="noopener noreferrer"
            className="block font-mono text-xs text-honos-muted transition-colors hover:text-gold"
            data-cursor="link"
          >
            honossecurities.com
          </a>
          <a
            href={`https://wa.me/${contact.phoneTel.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block font-mono text-[11px] uppercase tracking-widest text-brand-red"
            data-cursor="link"
          >
            WhatsApp Enquiry →
          </a>
        </div>
      )}

      <a
        href={contact.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 block font-mono text-[11px] uppercase tracking-widest text-honos-muted transition-colors hover:text-gold"
        data-cursor="link"
      >
        Open in Google Maps →
      </a>
    </address>
  );
}
