"use client";

import { usePathname } from "next/navigation";
import AnimatedBackground from "../effects/AnimatedBackground";
import CursorGlow from "../effects/CursorGlow";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/") return <>{children}</>;

  return (
    <div className="bizsun-site has-fixed-header relative min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <AnimatedBackground />
      <CursorGlow />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
