"use client";

import { useEffect, useRef } from "react";

/** Global + section mouse-follow spotlight */
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      if (glowRef.current) glowRef.current.style.transform = `translate(${x}px, ${y}px)`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${x}px, ${y}px)`;
      if (trailRef.current) trailRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        className="pointer-events-none fixed top-0 left-0 z-[2] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-40 mix-blend-screen hidden md:block"
        style={{
          background: "radial-gradient(circle, rgba(100,203,113,0.2) 0%, rgba(255,144,0,0.08) 35%, transparent 65%)",
        }}
      />
      <div
        ref={trailRef}
        className="pointer-events-none fixed top-0 left-0 z-[2] -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full opacity-20 mix-blend-screen hidden md:block"
        style={{
          background: "radial-gradient(circle, rgba(255,144,0,0.25) 0%, transparent 70%)",
        }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[3] -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-brand-green/40 opacity-0 md:opacity-70 hidden md:block"
        style={{ boxShadow: "0 0 20px rgba(100,203,113,0.3)" }}
      />
    </>
  );
}
