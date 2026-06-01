type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <p
      className={`font-mono text-[11px] uppercase tracking-ultra text-gold text-balance flex flex-wrap items-center justify-center gap-x-2 gap-y-1 lg:justify-start ${className}`}
    >
      {children}
    </p>
  );
}
