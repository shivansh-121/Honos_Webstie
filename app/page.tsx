import { PageShell } from '@/components/PageShell';
import { Hero } from '@/components/sections/Hero';
import { Marquee } from '@/components/sections/Marquee';
import { About } from '@/components/sections/About';
import { Corporate } from '@/components/sections/Corporate';
import { Services } from '@/components/sections/Services';
import { Statement } from '@/components/sections/Statement';
import { Process } from '@/components/sections/Process';
import { Industries } from '@/components/sections/Industries';
import { Commitment } from '@/components/sections/Commitment';
import { Rates } from '@/components/sections/Rates';
import { Contact } from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <Marquee />
      <About />
      <Corporate />
      <Services />
      <Statement />
      <Process />
      <Industries />
      <Commitment />
      <Rates />
      <Contact />
    </PageShell>
  );
}
