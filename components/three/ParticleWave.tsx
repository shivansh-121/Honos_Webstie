'use client';

import { SecurityBackdrop } from '@/components/ui/SecurityBackdrop';

export function ParticleWave() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <SecurityBackdrop variant="section" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(27,54,93,0.2) 0%, transparent 45%, rgba(5,5,7,0.9) 100%)',
        }}
      />
    </div>
  );
}
