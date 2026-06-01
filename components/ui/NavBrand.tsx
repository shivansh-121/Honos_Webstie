import Link from 'next/link';

export function NavBrand() {
  return (
    <Link href="/" className="group shrink-0" data-cursor="link">
      <span className="font-display text-2xl tracking-wider text-honos-white">
        HONOS
      </span>
      <span className="mt-0.5 block font-mono text-[9px] uppercase tracking-ultra text-honos-muted">
        Protection Services · Surat
      </span>
    </Link>
  );
}
