import { ArrowUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Animation hook for scroll-triggered animations
function useScrollAnimation(threshold: number = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const animation = useScrollAnimation(0.2);

  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-6">
      <div
        ref={animation.ref}
        className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${
          animation.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold text-white mb-2">
              <span className="text-[#A855F7]">Thumbnail</span>Designer
            </p>
            <p className="text-gray-400 text-sm">
              © 2026 All rights reserved. Creating thumbnails that convert.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <a
              href="https://www.fiverr.com/s/qDYgEEp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#A855F7] transition-colors text-sm font-medium"
            >
              Fiverr
            </a>

            <a
              href="https://www.instagram.com/risongraphics/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#A855F7] transition-colors text-sm font-medium"
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@rison_graphics?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#A855F7] transition-colors text-sm font-medium"
            >
              TikTok
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=61584373547792"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#A855F7] transition-colors text-sm font-medium"
            >
              Facebook
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=risongraphics01@gmail.com"
              className="text-gray-400 hover:text-[#A855F7] transition-colors text-sm font-medium"
            >
              Gmail
            </a>
            <a
              href="https://x.com/RisonGraphics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#A855F7] transition-colors text-sm font-medium"
            >
              Twitter
            </a>
            <a
              href="www.linkedin.com/in/risongraphics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#A855F7] transition-colors text-sm font-medium"
            >
              LinkedIn
            </a>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-[#A855F7] text-black hover:bg-[#9333ea] transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
