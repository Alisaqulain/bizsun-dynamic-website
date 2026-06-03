"use client";

type StepColor = "green" | "orange" | "white";
type StepSide = "left" | "right";

const steps: {
  num: string | null;
  color: StepColor;
  side: StepSide;
  title: string;
  description: string;
}[] = [
  {
    num: "01",
    color: "green",
    side: "right",
    title: "Find a Role That Fits You",
    description:
      "Explore our open positions and choose a role that matches your skills, interests, and career goals.",
  },
  {
    num: "02",
    color: "orange",
    side: "left",
    title: "Submit Your Application",
    description:
      "Fill out a short application form and share your basic details, resume, and portfolio (if applicable).",
  },
  {
    num: "03",
    color: "green",
    side: "right",
    title: "Application Review",
    description:
      "Our team carefully reviews each application to understand your experience, skills, and potential fit.",
  },
  {
    num: "04",
    color: "orange",
    side: "left",
    title: "Interview Discussion",
    description:
      "Have a friendly conversation with our team to discuss your background, work style, and expectations.",
  },
  {
    num: "04",
    color: "green",
    side: "right",
    title: "Skill Assessment (If Required)",
    description:
      "Depending on the role, you may be asked to complete a small task to help us understand your practical skills.",
  },
  {
    num: "05",
    color: "orange",
    side: "left",
    title: "Final Interaction",
    description:
      "Meet with leadership or team members to align on culture, values, and long-term growth opportunities.",
  },
  {
    num: null,
    color: "white",
    side: "right",
    title: "Start Your Journey",
    description:
      "Once selected, you'll officially join Bizsun Creative and begin an exciting new chapter of growth and learning.",
  },
];

function TimelineNode({ num, color }: { num: string | null; color: StepColor }) {
  const nodeClass =
    color === "white"
      ? "recruitment-node-white"
      : color === "green"
        ? "recruitment-node-green"
        : "recruitment-node-orange";

  return (
    <div
      className={`recruitment-timeline-node flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full sm:h-[88px] sm:w-[88px] ${nodeClass}`}
    >
      {num && <span className="font-syne text-xl font-bold text-white sm:text-2xl">{num}</span>}
    </div>
  );
}

function StepContent({
  title,
  description,
  align,
}: {
  title: string;
  description: string;
  align: "left" | "right" | "center";
}) {
  const alignClass =
    align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center";

  return (
    <div className={`max-w-[300px] sm:max-w-[340px] ${alignClass}`}>
      <h3 className="recruitment-step-title font-syne text-base font-bold leading-snug text-brand-green sm:text-lg md:text-xl">
        {title}
      </h3>
      <p className="recruitment-step-desc mt-2 text-sm leading-relaxed text-white/95 sm:text-[15px]">
        {description}
      </p>
    </div>
  );
}

function TimelineRow({ step }: { step: (typeof steps)[0] }) {
  const onLeft = step.side === "left";

  return (
    <div className="recruitment-timeline-row relative">
      {/* Desktop: alternating layout, no empty spacer text */}
      <div className="hidden md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center md:gap-x-10 md:py-10">
        <div className={`flex min-h-[1px] items-center ${onLeft ? "justify-end" : "justify-end"}`}>
          {onLeft ? (
            <StepContent title={step.title} description={step.description} align="right" />
          ) : null}
        </div>

        <div className="flex justify-center">
          <TimelineNode num={step.num} color={step.color} />
        </div>

        <div className={`flex min-h-[1px] items-center ${onLeft ? "justify-start" : "justify-start"}`}>
          {!onLeft ? (
            <StepContent title={step.title} description={step.description} align="left" />
          ) : null}
        </div>
      </div>

      {/* Mobile: node + text stacked */}
      <div className="flex flex-col items-center px-4 py-8 md:hidden">
        <TimelineNode num={step.num} color={step.color} />
        <div className="mt-5 w-full max-w-md">
          <StepContent title={step.title} description={step.description} align="center" />
        </div>
      </div>
    </div>
  );
}

export default function RecruitmentTimeline() {
  return (
    <div className="recruitment-timeline relative mx-auto w-full max-w-5xl overflow-hidden rounded-3xl px-2 py-6 sm:px-4 sm:py-10">
      <div className="recruitment-timeline-glow pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative z-[1]">
        <div
          className="recruitment-timeline-line pointer-events-none absolute left-1/2 top-4 bottom-4 hidden w-[2px] -translate-x-1/2 md:block"
          aria-hidden
        />

        {steps.map((step, index) => (
          <TimelineRow key={`${step.num ?? "final"}-${step.title}-${index}`} step={step} />
        ))}
      </div>
    </div>
  );
}
