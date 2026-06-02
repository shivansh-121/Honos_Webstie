'use client';

import { useState, FormEvent } from 'react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import jsPDF from 'jspdf';

const DEPARTMENTS = [
  'Accounts Dept',
  'Compliance',
  'Sales and Marketing',
  'Field Officer',
  'Security Guard',
  'Supervisor',
];

const ADMIN_WHATSAPP = '918469922888';

export function CareerForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (form: FormData) => {
    const next: Record<string, string> = {};
    if (!form.get('name')?.toString().trim()) next.name = 'Name is required';
    if (!form.get('phone')?.toString().trim()) next.phone = 'Phone Number is required';
    if (!form.get('dob')?.toString().trim()) next.dob = 'Date of Birth is required';
    if (!form.get('department')?.toString()) next.department = 'Please select a department';
    if (!form.get('address')?.toString().trim()) next.address = 'Address is required';
    return next;
  };

  const generatePDF = (data: Record<string, string>) => {
    const doc = new jsPDF();
    
    // Header
    doc.setFontSize(22);
    doc.setTextColor(204, 0, 0); // Brand Red
    doc.text('HONOS PROTECTION SERVICES', 20, 20);
    
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text('Job Application Form', 20, 30);
    
    doc.setLineWidth(0.5);
    doc.line(20, 35, 190, 35);
    
    // Details
    doc.setFontSize(12);
    let y = 50;
    const lineHeight = 10;
    
    const fields = [
      { label: 'Position Applied For:', value: data.department },
      { label: 'Full Name:', value: data.name },
      { label: 'Phone Number:', value: data.phone },
      { label: 'Email Address:', value: data.email || 'N/A' },
      { label: 'Date of Birth:', value: data.dob },
      { label: 'Gender:', value: data.gender },
      { label: 'Address:', value: data.address },
    ];
    
    fields.forEach(field => {
      doc.setFont('helvetica', 'bold');
      doc.text(field.label, 20, y);
      doc.setFont('helvetica', 'normal');
      
      // Handle multi-line address
      if (field.label === 'Address:') {
        const splitAddress = doc.splitTextToSize(field.value, 100);
        doc.text(splitAddress, 70, y);
        y += (splitAddress.length * lineHeight);
      } else {
        doc.text(field.value, 70, y);
        y += lineHeight;
      }
    });
    
    y += 10;
    doc.setFont('helvetica', 'bold');
    doc.text('Why should we hire you?', 20, y);
    y += 8;
    doc.setFont('helvetica', 'normal');
    
    const splitReason = doc.splitTextToSize(data.reason || 'No response provided.', 170);
    doc.text(splitReason, 20, y);
    
    // Download PDF
    doc.save(`Honos_Application_${data.name.replace(/\s+/g, '_')}.pdf`);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const next = validate(form);
    setErrors(next);
    
    if (Object.keys(next).length > 0) return;

    const data = {
      name: form.get('name') as string,
      phone: form.get('phone') as string,
      email: form.get('email') as string,
      dob: form.get('dob') as string,
      gender: form.get('gender') as string,
      address: form.get('address') as string,
      department: form.get('department') as string,
      reason: form.get('reason') as string,
    };

    // 1. Generate and download PDF
    generatePDF(data);

    // 2. Open WhatsApp Prompt
    const waMessage = [
      `🔔 *NEW JOB APPLICATION*`,
      `━━━━━━━━━━━━━━━━━━━`,
      `👤 *Name:* ${data.name}`,
      `💼 *Position:* ${data.department}`,
      `📱 *Phone:* ${data.phone}`,
      `━━━━━━━━━━━━━━━━━━━`,
      `_I have downloaded my application PDF and will attach it to this message._`
    ].join('\n');

    const waUrl = `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(waMessage)}`;
    
    // Adding a slight delay to ensure PDF download starts before navigating away
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      setSubmitted(true);
    }, 500);
  };

  return (
    <section className="relative py-24 lg:py-32 bg-void">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="text-center mb-16">
          <SectionLabel className="mb-4 justify-center">Join Our Team</SectionLabel>
          <h2 className="font-display text-4xl uppercase tracking-wider text-brand-navy md:text-5xl font-bold">
            Careers at Honos
          </h2>
          <p className="mt-4 font-body text-xl text-honos-muted">
            Apply below to become a part of our growing family. Your application will be downloaded as a PDF, and you can send it directly to our recruitment team via WhatsApp.
          </p>
        </div>

        <div className="bg-obsidian p-8 md:p-12 rounded-2xl border border-steel shadow-xl">
          {submitted ? (
            <div className="text-center py-12">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-brand-navy mb-2 uppercase tracking-widest">Application Ready</h3>
              <p className="font-body text-honos-muted text-lg max-w-md mx-auto">
                Your application PDF has been downloaded. Please attach it in the WhatsApp chat that just opened to complete your application.
              </p>
              <Button onClick={() => setSubmitted(false)} className="mt-8">
                Submit Another Application
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-8" noValidate>
              
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block font-mono text-xs uppercase tracking-widest text-honos-white font-bold">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-2 w-full border-b border-steel bg-transparent py-3 font-body text-lg text-honos-white outline-none focus:border-brand-red transition-colors"
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="mt-2 font-mono text-xs text-brand-red">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block font-mono text-xs uppercase tracking-widest text-honos-white font-bold">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-2 w-full border-b border-steel bg-transparent py-3 font-body text-lg text-honos-white outline-none focus:border-brand-red transition-colors"
                    placeholder="+91"
                  />
                  {errors.phone && <p className="mt-2 font-mono text-xs text-brand-red">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block font-mono text-xs uppercase tracking-widest text-honos-white font-bold">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-2 w-full border-b border-steel bg-transparent py-3 font-body text-lg text-honos-white outline-none focus:border-brand-red transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="dob" className="block font-mono text-xs uppercase tracking-widest text-honos-white font-bold">Date of Birth *</label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    className="mt-2 w-full border-b border-steel bg-transparent py-3 font-body text-lg text-honos-white outline-none focus:border-brand-red transition-colors"
                  />
                  {errors.dob && <p className="mt-2 font-mono text-xs text-brand-red">{errors.dob}</p>}
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <label htmlFor="department" className="block font-mono text-xs uppercase tracking-widest text-honos-white font-bold">Department *</label>
                  <div className="relative mt-2">
                    <select
                      id="department"
                      name="department"
                      className="w-full appearance-none border-b border-steel bg-transparent py-3 font-body text-lg text-honos-white outline-none focus:border-brand-red transition-colors"
                      defaultValue=""
                    >
                      <option value="" disabled>Select a position</option>
                      {DEPARTMENTS.map(dept => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-honos-white">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                  {errors.department && <p className="mt-2 font-mono text-xs text-brand-red">{errors.department}</p>}
                </div>

                <div>
                  <label htmlFor="gender" className="block font-mono text-xs uppercase tracking-widest text-honos-white font-bold">Gender</label>
                  <div className="relative mt-2">
                    <select
                      id="gender"
                      name="gender"
                      className="w-full appearance-none border-b border-steel bg-transparent py-3 font-body text-lg text-honos-white outline-none focus:border-brand-red transition-colors"
                      defaultValue="Male"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-honos-white">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block font-mono text-xs uppercase tracking-widest text-honos-white font-bold">Full Address *</label>
                <textarea
                  id="address"
                  name="address"
                  rows={2}
                  className="mt-2 w-full resize-none border-b border-steel bg-transparent py-3 font-body text-lg text-honos-white outline-none focus:border-brand-red transition-colors"
                  placeholder="Enter your complete address"
                />
                {errors.address && <p className="mt-2 font-mono text-xs text-brand-red">{errors.address}</p>}
              </div>

              <div>
                <label htmlFor="reason" className="block font-mono text-xs uppercase tracking-widest text-honos-white font-bold">Why should we hire you?</label>
                <textarea
                  id="reason"
                  name="reason"
                  rows={4}
                  className="mt-2 w-full resize-none border-b border-steel bg-transparent py-3 font-body text-lg text-honos-white outline-none focus:border-brand-red transition-colors"
                  placeholder="Briefly explain your experience and why you are a good fit for this role."
                />
              </div>

              <div className="pt-6">
                <Button type="submit" className="w-full sm:w-auto">
                  Submit Application
                </Button>
                <p className="mt-4 font-mono text-xs text-honos-muted max-w-sm">
                  Clicking submit will download your application as a PDF and open WhatsApp so you can send it to us.
                </p>
              </div>

            </form>
          )}
        </div>
      </div>
    </section>
  );
}
