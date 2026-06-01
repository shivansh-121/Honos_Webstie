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
        {/* Outer perimeter */}
        <motion.div
          className="pointer-events-none absolute inset-[8%] rounded-full border-[1.5px] border-brand-red/50 shadow-[0_0_30px_rgba(227,30,36,0.15)]"
          style={{ transform: 'translateZ(30px)' }}
        />
        <motion.div
          className="pointer-events-none absolute inset-[18%] rounded-full border-[1.5px] border-dashed border-brand-navy/70 shadow-[0_0_20px_rgba(27,54,93,0.1)]"
          style={{ transform: 'translateZ(60px)' }}
        />

        {/* Hex shield */}
        <motion.div
          className="pointer-events-none absolute inset-[22%] bg-brand-navy/5 shadow-[0_0_40px_rgba(27,54,93,0.15)]"
          style={{
            clipPath:
              'polygon(50% 0%, 95% 18%, 95% 65%, 50% 100%, 5% 65%, 5% 18%)',
            transform: 'translateZ(90px)',
          }}
        />

        {/* Inner mark */}
        <motion.div
          className="relative z-10 flex cursor-pointer flex-col items-center justify-center text-center"
          style={{ transform: 'translateZ(120px)' }}
          onClick={() => {
            setIsClicked(true);
            setTimeout(() => setIsClicked(false), 1000);
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.85 }}
          animate={isClicked ? { 
            scale: [1, 0.7, 1.4, 1], 
            rotateZ: [0, -25, 25, -10, 10, 0],
          } : {}}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <p className="relative font-display text-[clamp(4rem,12vw,7rem)] leading-none text-brand-red/90">
            H
            {/* Glitch text effect overlay when clicked */}
            <AnimatePresence>
              {isClicked && (
                <>
                  <motion.span
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    animate={{ opacity: [0, 1, 1, 0], x: [-15, 20, -10, 0], y: [5, -5, 5, 0] }}
                    transition={{ duration: 0.4, times: [0, 0.3, 0.6, 1] }}
                    className="absolute inset-0 text-cyan-400 mix-blend-screen"
                  >
                    H
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    animate={{ opacity: [0, 1, 1, 0], x: [15, -20, 10, 0], y: [-5, 5, -5, 0] }}
                    transition={{ duration: 0.4, times: [0, 0.3, 0.6, 1] }}
                    className="absolute inset-0 text-brand-red mix-blend-screen"
                  >
                    H
                  </motion.span>
                </>
              )}
            </AnimatePresence>
          </p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-ultra text-gold">
            Protection Unit
          </p>

          {/* Massive Shockwave ring */}
          <AnimatePresence>
            {isClicked && (
              <motion.div
                initial={{ scale: 0.2, opacity: 1 }}
                animate={{ scale: 6, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-brand-red shadow-[0_0_40px_rgba(255,0,0,0.8)]"
              />
            )}
          </AnimatePresence>
        </motion.div>

        {/* Corner ticks */}
        <motion.span
          className="absolute left-[6%] top-[6%] h-8 w-px bg-brand-red/50"
          style={{ transform: 'translateZ(30px)' }}
        />
        <motion.span
          className="absolute left-[6%] top-[6%] h-px w-8 bg-brand-red/50"
          style={{ transform: 'translateZ(30px)' }}
        />
        <motion.span
          className="absolute bottom-[6%] right-[6%] h-8 w-px bg-brand-red/50"
          style={{ transform: 'translateZ(30px)' }}
        />
        <motion.span
          className="absolute bottom-[6%] right-[6%] h-px w-8 bg-brand-red/50"
          style={{ transform: 'translateZ(30px)' }}
        />
      </motion.div>
    </div>
  );
}
