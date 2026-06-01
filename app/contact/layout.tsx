import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Honos Protection Services Pvt. Ltd.',
  description:
    'For any queries or clarification regarding security and manpower services in India, contact Honos Protection Services Pvt. Ltd.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
