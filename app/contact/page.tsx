'use client';

import { PageShell } from '@/components/PageShell';
import { Contact } from '@/components/sections/Contact';

export default function ContactPage() {
  return (
    <PageShell>
      <div className="pt-20">
        <Contact />
      </div>
    </PageShell>
  );
}
