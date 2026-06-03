"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("../three/HeroScene"), { ssr: false });

/** Full-page background: 3D scene + orbs + particle network */
export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; o: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const count = window.innerWidth < 768 ? 35 : 60;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        o: Math.random() * 0.35 + 0.08,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 203, 113, ${p.o})`;
        ctx.fill();

        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(100, 203, 113, ${0.05 * (1 - dist / 120)})`;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* 3D scene — full viewport background */}
      <div className="absolute inset-0 opacity-50">
        <HeroScene />
      </div>

      {/* Gradient orbs */}
      <div className="orb orb-green animate-orb-1" />
      <div className="orb orb-orange animate-orb-2" />
      <div className="orb orb-blue animate-orb-3" />

      {/* Grid + particles */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <canvas ref={canvasRef} className="absolute inset-0 opacity-40" />

      {/* Readability overlays */}
      <div className="absolute inset-0 bg-[#050505]/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/30 via-transparent to-[#050505]/80" />
    </div>
  );
}
