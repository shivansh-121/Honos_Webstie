'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function SurveillanceGrid() {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((_, delta) => {
    if (gridRef.current) {
      gridRef.current.rotation.x = Math.sin(Date.now() * 0.0003) * 0.1;
      gridRef.current.rotation.z += delta * 0.05;
    }
  });

  return (
  <>
    <ambientLight intensity={0.15} />
    <directionalLight position={[0, 5, 2]} intensity={0.5} color="#C9A84C" />
    <gridHelper
      ref={gridRef}
      args={[20, 40, '#C9A84C', '#1E1E2E']}
      position={[0, 0, 0]}
    />
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
      <planeGeometry args={[20, 20]} />
      <meshBasicMaterial color="#050507" transparent opacity={0.5} />
    </mesh>
  </>
  );
}

export function GridScene() {
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return (
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
    );
  }

  return (
    <div className="absolute inset-0 opacity-40" data-cursor="canvas">
      <Canvas camera={{ position: [0, 8, 8], fov: 50 }}>
        <SurveillanceGrid />
      </Canvas>
    </div>
  );
}
