import { useState, useEffect, useRef } from "react";
import { Plus, X } from "lucide-react";

const niches = {
  Educational: [
    "/thumbnails/educational/study plan.jpg",
    "/thumbnails/educational/focus mode.jpg",
    "/thumbnails/educational/freelancing.jpg",
  ],
  Podcast: [
    "/thumbnails/podcast/bill gates.jpg",
    "/thumbnails/podcast/ali2.jpg",
    "/thumbnails/podcast/ali1.jpg",
  ],
  Tech: [
    "/thumbnails/tech/worth it.jpg",
    "/thumbnails/tech/future phones.jpg",
    "/thumbnails/tech/insane thin.jpg",
  ],
  Documentary: [
    "/thumbnails/documentary/putin.jpg",
    "/thumbnails/documentary/ww1 case.jpg",
    "/thumbnails/documentary/germany.jpg",
  ],
  Finance: [
    "/thumbnails/finance/you received.jpg",
    "/thumbnails/finance/canva tutorial.jpg",
    "/thumbnails/finance/TOP 5 FREE WEBSITES.jpg",
  ],
  Gaming: [
    "/thumbnails/gaming/fortnite unlock.jpg",
    "/thumbnails/gaming/minecraft.jpg",
    "/thumbnails/gaming/horror.jpg",
  ],

  Others: [
    "/thumbnails/others/france vlog.jpg",
    "/thumbnails/others/iman(1st one).jpg",
    "/thumbnails/others/stop wasting your life.jpg",
  ],
};

// Animation hook for fade-in on scroll
function useFadeInOnScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function CategorySection({
  category,
  images,
  categoryIndex,
}: {
  category: string;
  images: string[];
  categoryIndex: number;
}) {
  const animation = useFadeInOnScroll();
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <>
      <div
        ref={animation.ref}
        className={`mb-16 transition-all duration-700 ease-out ${
          animation.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: `${categoryIndex * 50}ms` }}
      >
        {/* Category Title */}
        <div className="mb-6">
          <span className="inline-block px-5 py-2 bg-transparent border-2 border-[#A855F7] rounded-full text-white font-semibold text-lg shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            {category}
          </span>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => {
            const isPlaceholder = src.includes("question mark");

            return (
              <button
                key={index}
                onClick={() => !isPlaceholder && setLightboxSrc(src)}
                className={`group relative aspect-video rounded-xl overflow-hidden border-2 border-[#A855F7]/40 bg-[#1a1a1a] transition-all duration-500 ease-out hover:scale-[1.03] hover:border-[#A855F7] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] focus:outline-none ${
                  isPlaceholder ? "cursor-default" : "cursor-pointer"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {isPlaceholder ? (
                  <div className="w-full h-full flex flex-col items-center justify-center text-gray-500">
                    <div className="w-12 h-12 rounded-full border-2 border-dashed border-gray-600 flex items-center justify-center mb-2 group-hover:border-[#A855F7]/50 transition-colors">
                      <Plus className="w-6 h-6" />
                    </div>
                    <span className="text-sm">Thumbnail Slot</span>
                  </div>
                ) : (
                  <img
                    src={src}
                    alt={`${category} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#A855F7]/0 group-hover:bg-[#A855F7]/10 transition-colors duration-300" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal - Rectangle aspect ratio */}
      {lightboxSrc && (
        <div
          onClick={() => setLightboxSrc(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-[#A855F7] transition-colors z-10"
            onClick={() => setLightboxSrc(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="w-full max-w-4xl aspect-video">
            <img
              src={lightboxSrc}
              alt="Enlarged thumbnail"
              className="w-full h-full object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default function PortfolioGrid() {
  const headerAnimation = useFadeInOnScroll();

  return (
    <section id="portfolio" className="py-20 px-6 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Main Header */}
        <div
          ref={headerAnimation.ref}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headerAnimation.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            My <span className="text-[#A855F7] neon-glow">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore my work across different YouTube niches and content styles
          </p>
        </div>

        {/* Category Sections */}
        {Object.entries(niches).map(([category, images], categoryIndex) => (
          <CategorySection
            key={category}
            category={category}
            images={images}
            categoryIndex={categoryIndex}
          />
        ))}
      </div>
    </section>
  );
}
