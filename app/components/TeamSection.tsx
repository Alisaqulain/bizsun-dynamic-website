import Image from "next/image";
import Link from "next/link";

type TeamMember = {
  name: string;
  role: string; // may include <br />
  image: string;
};

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Shreya Gupta",
    role: "Graphic Designer",
    image: "/WhatsApp Image 2026-01-17 at 10.52.06 AM.jpeg",
  },
  {
    name: "Praful Kumar",
    role: "A Video Editor and Graphic Designer",
    image: "/WhatsApp Image 2026-01-16 at 1.55.21 PM.jpeg",
  },
  {
    name: "Syed Ali Zaddi",
    role: "Web & App Developer",
    image: "/WhatsApp Image 2026-01-16 at 1.56.10 PM.jpeg",
  },
  {
    name: "Anas Ansari",
    role: "Web & App Developer <br /> SEO Expert",
    image: "/IMG-20241207-WA0010.jpg",
  },
];

export default function TeamSection() {
  // Duplicate list for seamless infinite scrolling
  const sliderMembers = [...TEAM_MEMBERS, ...TEAM_MEMBERS];

  return (
    <section
      className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6"
      style={{
        background:
          "linear-gradient(to bottom right, rgba(100, 203, 113, 0.1), rgba(255, 240, 150, 0.2))",
      }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 sm:mb-20 md:mb-28 pb-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 text-center mb-8 sm:mb-12 md:mb-14 px-4">
            Meet the creative minds <br className="hidden sm:block" />
            behind <span className="italic font-normal">our success</span>
          </h2>

          <div className="overflow-hidden mb-10 relative">
            <style
              dangerouslySetInnerHTML={{
                __html: `
      @keyframes scroll-right-to-left {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      .slider-infinite {
        animation: scroll-right-to-left 50s linear infinite;
        width: max-content;
      }
      .slider-infinite:hover {
        animation-play-state: paused;
      }
      @media (max-width: 640px) {
        .slider-infinite {
          animation: scroll-right-to-left 30s linear infinite;
        }
      }
    `,
              }}
            />

            <div className="flex slider-infinite">
              {sliderMembers.map((member, index) => (
                <div
                  key={`${member.name}-${index}`}
                  className="flex-shrink-0 w-screen sm:w-[400px] md:w-[350px] px-4"
                >
                  <div
                    className="rounded-3xl p-2 shadow-md bg-yellow-300 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                    style={{ border: "1px solid #DFF2E1" }}
                  >
                    <div className="relative w-full h-92 rounded-2xl overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[85%] bg-[#DFF2E1] rounded-3xl px-2 py-2 text-center">
                        <h3 className="text-lg font-bold text-gray-900">
                          {member.name}
                        </h3>
                        <p
                          className="text-sm text-gray-700"
                          dangerouslySetInnerHTML={{ __html: member.role }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Let&apos;s shape the future of your{" "}
            <span className="italic font-serif">brand</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            From strategy to execution, we help brands grow with clarity,
            consistency, and thoughtfully crafted digital solutions.
          </p>
          <Link
            href="/contact"
            className="text-white cursor-pointer px-6 sm:px-12 md:px-6 py-3 sm:py-4 md:py-5 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 shadow-lg hover:opacity-90 hover:scale-105 hover:shadow-xl animate-fadeInUp animation-delay-400"
            style={{ background: "linear-gradient(to right, #64CB71, #418F40)" }}
          >
            Let&apos;s Collaborate
            <img
              src="/Background (1).png"
              alt="Arrow"
              className="inline ml-3 mb-1"
              role="presentation"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

