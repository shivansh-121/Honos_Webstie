'use client';

import { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { EffectComposer, Vignette } from '@react-three/postprocessing';
import { ShieldGeometry } from './ShieldGeometry';
import { SecurityBackdrop } from '@/components/ui/SecurityBackdrop';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function SceneContent({
  mouse,
  scrollProgress,
}: {
  mouse: React.MutableRefObject<{ x: number; y: number }>;
  scrollProgress: React.MutableRefObject<number>;
}) {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(0.8, 0, 4.5);
  }, [camera]);

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[4, 6, 5]} intensity={0.9} color="#f2f0ec" />
      <directionalLight position={[-4, 2, -2]} intensity={0.4} color="#1B365D" />
      <pointLight position={[1, 0, 2]} intensity={0.5} color="#E31E24" distance={8} />
      <group position={[0.6, 0, 0]}>
        <ShieldGeometry mouse={mouse} scrollProgress={scrollProgress} />
      </group>
      <EffectComposer>
        <Vignette eskil={false} offset={0.12} darkness={0.65} />
      </EffectComposer>
    </>
  );
}

type HeroSceneProps = {
  className?: string;
};

export function HeroScene({ className = '' }: HeroSceneProps) {
  const mouse = useRef({ x: 0, y: 0 });
  const scrollProgress = useRef(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
    if (mobile) return;

    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMove);

    const st = ScrollTrigger.create({
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        scrollProgress.current = self.progress;
      },
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      st.kill();
    };
  }, []);

  return (
    <div className={`absolute inset-0 ${className}`}>
      <SecurityBackdrop variant="hero" />
      {!isMobile && (
        <div
          className="absolute inset-y-0 right-0 w-full opacity-70 lg:w-[58%]"
          data-cursor="canvas"
        >
          <Canvas
            dpr={[1, 1.25]}
            camera={{ position: [0.8, 0, 4.5], fov: 42 }}
            gl={{ antialias: true, alpha: true }}
            style={{ background: 'transparent' }}
          >
            <Suspense fallback={null}>
              <SceneContent mouse={mouse} scrollProgress={scrollProgress} />
            </Suspense>
          </Canvas>
        </div>
      )}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-void via-void/85 to-void/20 lg:from-void lg:via-void/70 lg:to-transparent"
        aria-hidden
      />
    </div>
  );
}
