import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Join Our Team",
  description:
    "Join Bizsun Creative. We're hiring for design, development, and marketing. Friendly culture, work-life balance, and meaningful projects. View open roles and apply.",
  keywords: ["careers Bizsun Creative", "jobs", "join our team", "digital agency jobs", "hire"],
  openGraph: { title: "Careers at Bizsun Creative | Join Our Team", url: "/join-our-team" },
};

export default function JoinOurTeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
