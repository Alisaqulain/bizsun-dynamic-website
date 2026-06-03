type ArrowIconProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClass = {
  sm: "w-5 h-5",
  md: "w-8 h-8",
  lg: "w-12 h-12",
} as const;

/** Green circle + NE arrow — visible on dark backgrounds */
export default function ArrowIcon({ className = "", size = "sm" }: ArrowIconProps) {
  return (
    <span
      className={`arrow-icon inline-flex flex-shrink-0 items-center justify-center ${sizeClass[size]} ${className}`.trim()}
      aria-hidden
    >
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="24"
          cy="24"
          r="21"
          stroke="#64CB71"
          strokeWidth="1.75"
          className="arrow-icon-ring"
        />
        <path
          d="M17 29L29 17M29 17H22M29 17V24"
          stroke="#64CB71"
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="arrow-icon-stroke"
        />
        <path
          d="M17.5 28.5L28.5 17.5M28.5 17.5H22.5M28.5 17.5V23.5"
          stroke="#ffffff"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.35"
        />
      </svg>
    </span>
  );
}

/** Inline arrow for buttons (Let's Collaborate, header) */
export function ButtonArrowIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`inline-block flex-shrink-0 ${className}`}
      aria-hidden
    >
      <path
        d="M7 17L17 7M17 7H10M17 7V14"
        stroke="#64CB71"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 16.5L16.5 7.5M16.5 7.5H10.5M16.5 7.5V13.5"
        stroke="#ffffff"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
    </svg>
  );
}
