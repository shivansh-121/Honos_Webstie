import Link from 'next/link';
import { company, contact } from '@/lib/company-data';
import { ContactDetails } from '@/components/ui/ContactDetails';
import { NavBrand } from '@/components/ui/NavBrand';

const nav = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-honos-line bg-void py-16">
      <div className="mx-auto max-w-container px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <NavBrand />
            <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-honos-muted">
              CIN {company.cin}
            </p>
            <p className="mt-1 font-mono text-[10px] text-honos-muted">
              Incorporated {company.incorporated}
            </p>
          </div>

          <ContactDetails className="lg:col-span-1" />

          <nav aria-label="Footer navigation" className="lg:text-right">
            <ul className="flex flex-wrap gap-6 lg:justify-end">
              {nav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-mono text-[11px] uppercase tracking-widest text-honos-muted transition-colors hover:text-gold"
                    data-cursor="link"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block font-mono text-[11px] uppercase tracking-widest text-gold lg:float-right"
              data-cursor="link"
            >
              Google Maps →
            </a>
          </nav>
        </div>



        <p className="font-mono text-[10px] text-honos-muted">
          © {new Date().getFullYear()} {company.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
