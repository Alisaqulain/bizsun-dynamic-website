"use client";

import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Environment, Sparkles, Torus, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

function BackgroundSceneContent() {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.x * 0.08, 0.03);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -pointer.y * 0.05, 0.03);
  });

  return (
    <group ref={group}>
      <Float speed={1.2} floatIntensity={0.5}>
        <mesh position={[2.5, 0.5, -1]}>
          <sphereGeometry args={[0.9, 48, 48]} />
          <MeshTransmissionMaterial transmission={0.92} thickness={0.35} color="#64CB71" roughness={0.05} />
        </mesh>
      </Float>
      <Float speed={1.5} floatIntensity={0.4}>
        <mesh position={[-2.8, -0.8, -0.5]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <MeshTransmissionMaterial transmission={0.9} thickness={0.3} color="#E8F5E9" roughness={0.08} />
        </mesh>
      </Float>
      <Float speed={2} floatIntensity={0.35}>
        <Torus args={[1.4, 0.025, 16, 80]} position={[-1.5, 1.2, -2]} rotation={[Math.PI / 3, 0.5, 0]}>
          <meshStandardMaterial color="#FF9000" metalness={0.9} roughness={0.15} />
        </Torus>
      </Float>
      <Float speed={1.8} floatIntensity={0.3}>
        <Torus args={[0.8, 0.02, 16, 60]} position={[3, -1, -1.5]} rotation={[0, Math.PI / 4, Math.PI / 6]}>
          <meshStandardMaterial color="#C0C0C0" metalness={0.85} roughness={0.2} />
        </Torus>
      </Float>
      <Float speed={1} floatIntensity={0.25}>
        <group position={[1, -1.5, -0.8]}>
          {[0, 1, 2, 3].map((i) => (
            <RoundedBox key={i} args={[1.2 - i * 0.2, 0.1, 1.2 - i * 0.2]} radius={0.02} position={[0, i * 0.15, 0]}>
              <meshStandardMaterial color={i % 2 ? "#64CB71" : "#FAFAF8"} metalness={0.3} roughness={0.4} transparent opacity={0.7} />
            </RoundedBox>
          ))}
        </group>
      </Float>
      <Sparkles count={100} scale={12} size={1.2} speed={0.15} color="#64CB71" opacity={0.35} />
      <Sparkles count={40} scale={10} size={2} speed={0.1} color="#FF9000" opacity={0.2} />
      <Environment preset="city" />
    </group>
  );
}

export default function HeroScene() {
  const [dpr, setDpr] = useState(1);

  useEffect(() => {
    setDpr(window.innerWidth < 768 ? 1 : Math.min(window.devicePixelRatio, 1.5));
  }, []);

  return (
    <Canvas
      dpr={dpr}
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 5, 5]} intensity={0.9} color="#FF9000" />
      <pointLight position={[-4, 2, 3]} intensity={0.5} color="#64CB71" />
      <pointLight position={[4, -2, 2]} intensity={0.3} color="#0054A6" />
      <Suspense fallback={null}>
        <BackgroundSceneContent />
      </Suspense>
    </Canvas>
  );
}
