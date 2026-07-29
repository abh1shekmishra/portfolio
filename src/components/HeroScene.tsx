"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import { useRef } from "react";
import * as THREE from "three";

function Blob({ reduced }: { reduced: boolean }) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current || reduced) return;
    // Gentle parallax: the blob turns toward the cursor.
    const { x, y } = state.pointer;
    mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, x * 0.6, 0.04);
    mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, -y * 0.5, 0.04);
  });

  return (
    <Float speed={reduced ? 0 : 1.3} rotationIntensity={reduced ? 0 : 0.5} floatIntensity={reduced ? 0 : 1.1}>
      <mesh ref={mesh} scale={1.75}>
        <sphereGeometry args={[1, 96, 96]} />
        <MeshDistortMaterial
          color="#3b3b5e"
          emissive="#0e3d38"
          emissiveIntensity={0.5}
          roughness={0.32}
          metalness={0.4}
          distort={reduced ? 0.18 : 0.42}
          speed={reduced ? 0 : 1.8}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  const reduced = useReducedMotion() ?? false;

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 3.6], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.85} />
      {/* Two coloured key lights give the blob a teal → indigo duotone. */}
      <directionalLight position={[3, 2, 2]} intensity={3.2} color="#2dd4bf" />
      <directionalLight position={[-3, -1.5, 1]} intensity={2.8} color="#6366f1" />
      <pointLight position={[1, 1, 3]} intensity={2.4} color="#ffffff" />
      <Blob reduced={reduced} />
    </Canvas>
  );
}
