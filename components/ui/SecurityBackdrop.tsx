type SecurityBackdropProps = {
  variant?: 'hero' | 'section';
  className?: string;
};

export function SecurityBackdrop({
  variant = 'hero',
  className = '',
}: SecurityBackdropProps) {
  return (
    <div
      className={`security-backdrop security-backdrop--${variant} pointer-events-none absolute inset-0 ${className}`}
      aria-hidden
    />
  );
}
