'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';

export function HeroVisual() {
  const [isClicked, setIsClicked] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null && e.beta !== null) {
        // gamma is left/right (-90 to 90), normalize based on 45 deg max
        const x = Math.min(Math.max(e.gamma / 45, -1), 1);
        // beta is front/back (-180 to 180), assume resting is ~45 deg
        const y = Math.min(Math.max((e.beta - 45) / 45, -1), 1);
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('deviceorientation', handleDeviceOrientation, true);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('deviceorientation', handleDeviceOrientation, true);
    };
  }, [mouseX, mouseY]);

  // Smooth out the motion
  const smoothX = useSpring(mouseX, { damping: 15, stiffness: 80, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 15, stiffness: 80, mass: 0.5 });

  // Rotate based on mouse/tilt position. Increased range for more dynamism.
  const rotateX = useTransform(smoothY, [-1, 1], [25, -25]);
  const rotateY = useTransform(smoothX, [-1, 1], [-25, 25]);

  // Add more pronounced translate/parallax
  const translateX = useTransform(smoothX, [-1, 1], [-40, 40]);
  const translateY = useTransform(smoothY, [-1, 1], [-40, 40]);

  return (
    <div
      className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center lg:max-w-none"
      aria-hidden
      style={{ perspective: 1200 }}
    >
      <motion.div
        className="relative flex h-full w-full items-center justify-center"
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Outer professional border */}
        <motion.div
          className="pointer-events-none absolute inset-[10%] rounded-full border-2 border-brand-navy/60 shadow-[0_0_20px_rgba(27,54,93,0.2)]"
          style={{ transform: 'translateZ(30px)' }}
        />

        {/* Solid Shield Background */}
        <motion.div
          className="pointer-events-none absolute inset-[15%] bg-gradient-to-br from-brand-navy/80 to-void border border-gold/40 shadow-xl"
          style={{
            clipPath: 'polygon(50% 0%, 90% 20%, 90% 75%, 50% 100%, 10% 75%, 10% 20%)',
            transform: 'translateZ(60px)',
          }}
        />

        {/* Inner mark */}
        <motion.div
          className="relative z-10 flex cursor-pointer flex-col items-center justify-center text-center"
          style={{ transform: 'translateZ(90px)' }}
          onClick={() => {
            setIsClicked(true);
            setTimeout(() => setIsClicked(false), 1000);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={isClicked ? { 
            scale: [1, 0.9, 1.1, 1], 
          } : {}}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <p className="font-display text-[clamp(4rem,12vw,7rem)] leading-none text-gold drop-shadow-md">
            H
          </p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-ultra text-white/90">
            Protection Services
          </p>

          {/* Simple subtle ring on click */}
          <AnimatePresence>
            {isClicked && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0.8 }}
                animate={{ scale: 2, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gold/50"
              />
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}
