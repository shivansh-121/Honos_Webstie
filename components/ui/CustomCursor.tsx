'use client';

import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const state = useRef({ hover: false, crosshair: false });

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const link = t.closest('a, button, [data-cursor="link"]');
      const canvas = t.closest('[data-cursor="canvas"], canvas');
      state.current = {
        hover: !!link,
        crosshair: !!canvas && !link,
      };
    };

    let raf = 0;
    const tick = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.1;
      ring.current.y += (pos.current.y - ring.current.y) * 0.1;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
        dotRef.current.style.opacity = state.current.hover ? '0' : '1';
      }
      if (ringRef.current) {
        const size = state.current.hover ? 60 : 40;
        ringRef.current.style.width = `${size}px`;
        ringRef.current.style.height = `${size}px`;
        ringRef.current.style.transform = `translate(${ring.current.x - size / 2}px, ${ring.current.y - size / 2}px)`;
        ringRef.current.style.borderRadius = state.current.crosshair ? '0' : '50%';
        ringRef.current.style.background = state.current.hover
          ? 'rgba(201, 168, 76, 0.3)'
          : 'transparent';
        ringRef.current.style.borderColor = 'var(--color-gold)';
        if (state.current.crosshair) {
          ringRef.current.style.clipPath =
            'polygon(0 45%, 100% 45%, 100% 55%, 0 55%, 45% 0, 55% 0, 55% 100%, 45% 100%)';
        } else {
          ringRef.current.style.clipPath = 'none';
        }
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[10000] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold"
        aria-hidden
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[10000] border border-gold transition-[width,height,background] duration-300"
        aria-hidden
      />
    </>
  );
}
