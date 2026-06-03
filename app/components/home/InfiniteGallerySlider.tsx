"use client";

import Image from "next/image";
import { galleryImages } from "@/lib/home-data";

const CARD_COLORS = [
  "#64CB71", "#FF9000", "#2D8CFF", "#E01E5A",
  "#FF9900", "#FF4A00", "#64CB71", "#FF9000",
  "#2D8CFF", "#E01E5A", "#FF9900", "#FF4A00",
];

export default function InfiniteGallerySlider() {
  const slides = [...galleryImages, ...galleryImages];

  return (
    <div className="gallery-slider-wrap relative w-full overflow-hidden py-3 px-3">
      <div className="gallery-slider-track flex items-center gap-3">
        {slides.map((src, i) => {
          const index = i % galleryImages.length;
          const color = CARD_COLORS[index];

          return (
            <div
              key={`${src}-${i}`}
              className="gallery-slider-card relative flex-shrink-0 w-[180px] sm:w-[200px] aspect-[4/3] rounded-xl overflow-hidden border border-white/15 bg-black/40"
            >
              <Image
                src={src}
                alt={`Project ${index + 1}`}
                fill
                className="object-cover"
                sizes="200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 px-3 py-2">
                <span
                  className="font-syne text-xs sm:text-sm font-bold tracking-wide"
                  style={{ color }}
                >
                  Project {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
