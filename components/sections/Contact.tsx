'use client';

import { useState, FormEvent } from 'react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';

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
      className="relative flex min-h-screen flex-col lg:justify-center overflow-hidden pt-32 pb-24 lg:py-32 bg-[#f9f9fb]"
    >
      {/* Background Dots */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{ backgroundImage: 'radial-gradient(#1b365d 2px, transparent 2px)', backgroundSize: '40px 40px' }}
      ></div>

      <div className="relative z-10 mx-auto w-full max-w-3xl px-6 lg:px-10">
        
        <div className="bg-white p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-3xl">
            <SectionLabel className="mb-4">Send an Enquiry</SectionLabel>
            <h2 className="mb-10 font-display text-[clamp(2.5rem,5vw,4rem)] uppercase leading-[0.9] tracking-tight text-[#111827] font-bold">
              Get In Touch.
            </h2>
            
            {submitted ? (
              <p className="font-mono text-sm uppercase tracking-widest text-green-700 font-bold p-6 border border-green-500/20 bg-green-500/10 rounded-xl">
                ✓ Thank you. We will respond to your enquiry at the earliest.
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
                    className="font-mono text-[11px] uppercase tracking-widest text-gray-500 font-semibold"
                  >
                    Service Required
                  </label>
                  <select
                    id="enquiry"
                    name="enquiry"
                    className="mt-2 w-full border-b-2 border-gray-200 bg-transparent py-3 font-body text-xl text-[#111827] font-medium focus:border-[#cc0000] focus:outline-none transition-colors"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select...
                    </option>
                    {enquiryTypes.map((t) => (
                      <option key={t} value={t} className="text-[#111827]">
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.enquiry && <ErrorMsg>{errors.enquiry}</ErrorMsg>}
                </div>
                <Field label="Message" name="message" error={errors.message} multiline />
                <Button type="submit" variant="primary" className="mt-4 w-full rounded-xl">
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
    'mt-2 w-full border-b-2 border-gray-200 bg-transparent py-3 font-body text-xl text-[#111827] font-medium transition-colors focus:border-[#cc0000] focus:outline-none';
  return (
    <div>
      <label
        htmlFor={name}
        className="font-mono text-[11px] uppercase tracking-widest text-gray-500 font-semibold"
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
    <p className="mt-2 font-mono text-[10px] text-[#cc0000] font-bold">{children}</p>
  );
}
