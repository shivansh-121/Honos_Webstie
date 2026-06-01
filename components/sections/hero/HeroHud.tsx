export function HeroHud() {
  return (
  <>
    <div className="hero-hud hero-hud--tl hidden md:block" aria-hidden>
      <span className="font-mono text-[9px] uppercase tracking-ultra text-brand-red">
        Secure Zone
      </span>
      <span className="mt-1 block font-mono text-[9px] text-honos-muted">GJ / SURAT</span>
    </div>
    <div className="hero-hud hero-hud--tr hidden md:block" aria-hidden>
      <span className="font-mono text-[9px] uppercase tracking-ultra text-honos-muted">
        Status
      </span>
      <span className="mt-1 flex items-center gap-2 font-mono text-[9px] text-honos-white">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-red" />
        Operational
      </span>
    </div>
    <div className="hero-hud hero-hud--bl hidden lg:block" aria-hidden>
      <span className="font-mono text-[9px] uppercase tracking-ultra text-honos-muted">
        ISO Certified
      </span>
    </div>
    <div className="hero-hud hero-hud--br hidden lg:block" aria-hidden>
      <span className="font-mono text-[9px] uppercase tracking-ultra text-honos-muted">
        Govt &amp; Corporate
      </span>
    </div>
  </>
  );
}
