import Link from 'next/link';
import { company, contact } from '@/lib/company-data';
import { NavBrand } from '@/components/ui/NavBrand';

const nav = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-steel bg-void pt-20 pb-10">
      <div className="mx-auto max-w-container px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 border-b border-steel pb-16">
          
          {/* Col 1: Brand & Company Info */}
          <div className="lg:pr-8">
            <NavBrand />
            <p className="mt-6 font-body text-sm text-honos-muted leading-relaxed">
              Leading provider of comprehensive security and facility management solutions across India.
            </p>
            <div className="mt-8 space-y-2">
              <p className="font-mono text-[10px] uppercase tracking-widest text-honos-muted">
                CIN {company.cin}
              </p>
              <p className="font-mono text-[10px] text-honos-muted uppercase tracking-widest">
                Incorporated {company.incorporated}
              </p>
            </div>
          </div>

          {/* Col 2: Head Office */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-brand-red mb-6 font-bold">Head Office</h4>
            <address className="not-italic space-y-1 font-body text-sm text-honos-white font-medium leading-relaxed">
              {contact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
            <a
              href={contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block font-mono text-[10px] uppercase tracking-widest text-gold hover:text-brand-navy transition-colors font-bold"
            >
              Open in Google Maps →
            </a>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-brand-red mb-6 font-bold">Get in Touch</h4>
            <div className="space-y-6">
              <div className="space-y-2">
                {contact.phones.map((p) => (
                  <a
                    key={p.tel}
                    href={`tel:${p.tel}`}
                    className="flex items-center font-body text-sm text-honos-white font-medium transition-colors hover:text-brand-red"
                  >
                    {p.display}
                    <span className="ml-2 font-mono text-[9px] text-honos-muted tracking-widest uppercase">({p.label})</span>
                  </a>
                ))}
              </div>
              <div className="space-y-2">
                <a href={`mailto:${contact.email}`} className="block font-body text-sm text-honos-white font-medium transition-colors hover:text-brand-red">
                  {contact.email}
                </a>
                <a href={`mailto:${contact.emailAlt}`} className="block font-body text-sm text-honos-white font-medium transition-colors hover:text-brand-red">
                  {contact.emailAlt}
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Quick Links */}
          <div className="lg:pl-8">
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-brand-red mb-6 font-bold">Quick Links</h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {nav.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="font-body text-sm text-honos-white font-medium transition-colors hover:text-brand-red"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-honos-muted">
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] uppercase tracking-widest text-honos-muted hover:text-brand-red transition-colors cursor-pointer">Privacy Policy</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-honos-muted hover:text-brand-red transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
