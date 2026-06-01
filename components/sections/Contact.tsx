'use client';

import { useState, FormEvent } from 'react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { ContactDetails } from '@/components/ui/ContactDetails';
import { SecurityBackdrop } from '@/components/ui/SecurityBackdrop';
import { enquiryTypes, contact } from '@/lib/company-data';

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (form: FormData) => {
    const next: Record<string, string> = {};
    if (!form.get('name')?.toString().trim()) next.name = 'Name is required';
    if (!form.get('organisation')?.toString().trim())
      next.organisation = 'Organisation is required';
    if (!form.get('enquiry')?.toString()) next.enquiry = 'Please select a service';
    if (!form.get('message')?.toString().trim()) next.message = 'Message is required';
    return next;
  };

  const ADMIN_WHATSAPP = '918469922888'; // Test number — change to production when ready

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const next = validate(form);
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const name         = form.get('name') as string;
    const organisation = form.get('organisation') as string;
    const enquiry      = form.get('enquiry') as string;
    const message      = form.get('message') as string;

    const now = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    const waMessage = [
      `🔔 *NEW ENQUIRY — Honos Website*`,
      `━━━━━━━━━━━━━━━━━━━`,
      `👤 *Name:* ${name}`,
      `🏢 *Organisation:* ${organisation}`,
      `🛡️ *Service Required:* ${enquiry}`,
      `📅 *Received:* ${now}`,
      `━━━━━━━━━━━━━━━━━━━`,
      `📝 *Message:*`,
      message,
      `━━━━━━━━━━━━━━━━━━━`,
      `_Sent via honossecurities.com_`,
    ].join('\n');

    const waUrl = `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(waMessage)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden py-32"
    >
      <div className="absolute inset-0">
        <SecurityBackdrop variant="section" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-container px-6 lg:px-10">
        <SectionLabel className="mb-6">Contact</SectionLabel>
        <h2 className="font-display text-[clamp(3rem,10vw,6.25rem)] uppercase leading-none tracking-wider text-honos-white">
          Get In
          <br />
          Touch.
        </h2>
        <p className="mt-6 max-w-lg font-body text-lg text-honos-muted">
          For any queries or clarification, please feel free to contact us. We
          look forward to building a long-term association with your organization.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`https://wa.me/${contact.phoneTel.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-brand-red bg-brand-red/10 px-6 py-3 font-mono text-xs uppercase tracking-widest text-brand-red transition-colors hover:bg-brand-red hover:text-white"
            data-cursor="link"
          >
            WhatsApp Enquiry
          </a>
          <a
            href={contact.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-honos-line px-6 py-3 font-mono text-xs uppercase tracking-widest text-honos-muted transition-colors hover:border-gold hover:text-gold"
            data-cursor="link"
          >
            honossecurities.com
          </a>
        </div>

        <div className="mt-12 grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <ContactDetails variant="full" />
            <div
              className="mt-10 overflow-hidden border border-honos-line group relative cursor-pointer"
              onClick={() => {
                const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
                const url = isIOS ? contact.appleMapUrl : contact.mapsUrl;
                window.open(url, '_blank', 'noopener,noreferrer');
              }}
              title="Click to open in Maps"
              role="link"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
                  window.open(isIOS ? contact.appleMapUrl : contact.mapsUrl, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              {/* Clickable overlay */}
              <div className="absolute inset-0 z-10 flex flex-col items-start justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 to-transparent pointer-events-none">
                <span className="flex items-center gap-2 bg-gold text-obsidian px-4 py-2 font-mono text-[11px] uppercase tracking-widest font-bold">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  Open in Maps ↗
                </span>
              </div>
              <iframe
                title="Honos Protection Services location on Google Maps"
                src={contact.mapsEmbedUrl}
                className="h-64 w-full grayscale contrast-125 lg:h-80 pointer-events-none"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            {submitted ? (
              <p className="font-mono text-sm uppercase tracking-widest text-gold">
                Thank you. We will respond to your enquiry at the earliest.
              </p>
            ) : (
              <form
                onSubmit={onSubmit}
                className="grid w-full gap-8"
                noValidate
              >
                <Field label="Name" name="name" error={errors.name} />
                <Field
                  label="Organisation / Premises"
                  name="organisation"
                  error={errors.organisation}
                />
                <div>
                  <label
                    htmlFor="enquiry"
                    className="font-mono text-[11px] uppercase tracking-widest text-honos-muted"
                  >
                    Service Required
                  </label>
                  <select
                    id="enquiry"
                    name="enquiry"
                    className="mt-2 w-full border-b border-honos-line bg-transparent py-3 font-body text-lg text-honos-white focus:border-gold focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select...
                    </option>
                    {enquiryTypes.map((t) => (
                      <option key={t} value={t} className="bg-void">
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.enquiry && <ErrorMsg>{errors.enquiry}</ErrorMsg>}
                </div>
                <Field label="Message" name="message" error={errors.message} multiline />
                <Button type="submit" variant="filled">
                  Send via WhatsApp
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  error,
  multiline,
}: {
  label: string;
  name: string;
  error?: string;
  multiline?: boolean;
}) {
  const shared =
    'mt-2 w-full border-b border-honos-line bg-transparent py-3 font-body text-lg text-honos-white transition-colors focus:border-gold focus:outline-none';
  return (
    <div>
      <label
        htmlFor={name}
        className="font-mono text-[11px] uppercase tracking-widest text-honos-muted"
      >
        {label}
      </label>
      {multiline ? (
        <textarea id={name} name={name} rows={4} className={shared} />
      ) : (
        <input id={name} name={name} type="text" className={shared} />
      )}
      {error && <ErrorMsg>{error}</ErrorMsg>}
    </div>
  );
}

function ErrorMsg({ children }: { children: string }) {
  return (
    <p className="mt-1 font-mono text-[10px] text-gold-bright">{children}</p>
  );
}
