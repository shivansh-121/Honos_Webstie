'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

type ShieldGeometryProps = {
  mouse: React.MutableRefObject<{ x: number; y: number }>;
  scrollProgress: React.MutableRefObject<number>;
};

export function ShieldGeometry({ mouse, scrollProgress }: ShieldGeometryProps) {
  const groupRef = useRef<THREE.Group>(null);
  const targetRot = useRef({ x: 0, y: 0 });

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    targetRot.current.x += (mouse.current.y * 0.08 - targetRot.current.x) * 0.04;
    targetRot.current.y += (mouse.current.x * 0.08 - targetRot.current.y) * 0.04;
    groupRef.current.rotation.x = targetRot.current.x;
    groupRef.current.rotation.y += delta * 0.08 + targetRot.current.y * 0.01;
    const s = 1 - scrollProgress.current * 0.5;
    groupRef.current.scale.setScalar(Math.max(0.35, s));
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Outer perimeter ring — command / secure zone */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.35, 0.02, 16, 64]} />
        <meshBasicMaterial color="#b91c1c" transparent opacity={0.55} />
      </mesh>

      {/* Shield body */}
      <mesh scale={[1, 1.15, 0.12]}>
        <cylinderGeometry args={[0.95, 0.75, 0.2, 6]} />
        <meshStandardMaterial
          color="#1B365D"
          metalness={0.85}
          roughness={0.35}
          emissive="#0A0A0F"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Inner wireframe */}
      <mesh scale={[1, 1.15, 0.12]}>
        <cylinderGeometry args={[0.95, 0.75, 0.21, 6]} />
        <meshBasicMaterial
          color="#b91c1c"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* Central monogram plane */}
      <mesh position={[0, 0, 0.14]}>
        <planeGeometry args={[0.5, 0.55]} />
        <meshStandardMaterial
          color="#0A0A0F"
          metalness={0.9}
          roughness={0.2}
          emissive="#1B365D"
          emissiveIntensity={0.15}
        />
      </mesh>
    </group>
  );
}
