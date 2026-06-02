import { PageShell } from '@/components/PageShell';
import { CareerForm } from '@/components/sections/CareerForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | Honos Protection Services',
  description: 'Join our team at Honos Protection Services. Apply online for various roles including Security Guard, Supervisor, Accounts, Compliance, and Sales.',
};

export default function CareersPage() {
  return (
    <PageShell>
      <div className="pt-24 md:pt-32">
        <CareerForm />
      </div>
    </PageShell>
  );
}
