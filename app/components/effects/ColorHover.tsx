"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";

export const THEME_COLORS = [
  { color: "#64CB71", glow: "rgba(100, 203, 113, 0.45)" },
  { color: "#FF9000", glow: "rgba(255, 144, 0, 0.45)" },
  { color: "#2D8CFF", glow: "rgba(45, 140, 255, 0.45)" },
  { color: "#E01E5A", glow: "rgba(224, 30, 90, 0.45)" },
  { color: "#FF9900", glow: "rgba(255, 153, 0, 0.45)" },
  { color: "#FF4A00", glow: "rgba(255, 74, 0, 0.45)" },
] as const;

export function getThemeColor(index: number) {
  return THEME_COLORS[index % THEME_COLORS.length];
}

type ColorHoverTag = "span" | "p" | "h3" | "div";

type ColorHoverProps = {
  children: ReactNode;
  color?: string;
  glow?: string;
  colorIndex?: number;
  className?: string;
  as?: ColorHoverTag;
  lift?: boolean;
  defaultColor?: string;
};

export function ColorHover({
  children,
  color,
  glow,
  colorIndex = 0,
  className = "",
  as: Tag = "span",
  lift = true,
  defaultColor = "rgb(161 161 170)",
}: ColorHoverProps) {
  const [hovered, setHovered] = useState(false);
  const theme = getThemeColor(colorIndex);
  const activeColor = color ?? theme.color;
  const activeGlow = glow ?? theme.glow;

  return (
    <Tag
      className={`color-hover inline-block transition-all duration-400 ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        textShadow: hovered ? `0 0 20px ${activeGlow}` : "none",
        transform: hovered && lift ? "translateY(-2px)" : "none",
      }}
    >
      <span
        className="transition-colors duration-400"
        style={{ color: hovered ? activeColor : defaultColor === "inherit" ? "inherit" : defaultColor }}
      >
        {children}
      </span>
    </Tag>
  );
}

type ColorHoverPillProps = {
  children: ReactNode;
  colorIndex?: number;
  className?: string;
};

export function ColorHoverPill({
  children,
  colorIndex = 0,
  className = "",
}: ColorHoverPillProps) {
  const [hovered, setHovered] = useState(false);
  const { color, glow } = getThemeColor(colorIndex);

  return (
    <span
      className={`color-hover-pill inline-flex items-center gap-2 flex-shrink-0 px-5 py-2.5 rounded-full border text-sm font-medium transition-all duration-400 cursor-default ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? color : "rgb(212 212 216)",
        borderColor: hovered ? `${color}80` : "rgba(255, 255, 255, 0.1)",
        background: hovered ? `${color}18` : "rgba(255, 255, 255, 0.03)",
        boxShadow: hovered ? `0 0 24px ${glow}, 0 4px 20px rgba(0,0,0,0.2)` : "none",
        transform: hovered ? "translateY(-2px) scale(1.03)" : "none",
      }}
    >
      {children}
    </span>
  );
}

type ColorHoverLinkProps = {
  children: ReactNode;
  colorIndex?: number;
  className?: string;
  href: string;
};

export function ColorHoverLink({
  children,
  colorIndex = 0,
  className = "",
  href,
}: ColorHoverLinkProps) {
  const [hovered, setHovered] = useState(false);
  const { color, glow } = getThemeColor(colorIndex);

  const style = {
    color: hovered ? color : "rgb(161 161 170)",
    textShadow: hovered ? `0 0 16px ${glow}` : "none",
    transform: hovered ? "translateX(4px)" : "none",
  };

  const cls = `color-hover-link block py-0.5 text-sm transition-all duration-400 ${className}`;

  if (href.startsWith("/") && !href.endsWith(".pptx")) {
    return (
      <Link
        href={href}
        className={cls}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={style}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={cls}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={style}
    >
      {children}
    </a>
  );
}
