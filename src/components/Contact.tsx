import {
  Mail,
  ExternalLink,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
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

export default function Contact() {
  const animation = useScrollAnimation(0.2);

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          ref={animation.ref}
          className={`bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-3xl p-12 md:p-16 border-2 border-[#A855F7] neon-border relative overflow-hidden transition-all duration-700 ease-out ${
            animation.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#A855F7]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#A855F7]/5 rounded-full blur-3xl" />

          <div className="relative space-y-8 text-center">
            {/* Header */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Ready to{" "}
                <span className="text-[#A855F7] neon-glow">
                  Boost Your CTR?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Let's create thumbnails that make your content impossible to
                ignore. Get in touch today and start growing your channel.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
              <div className="space-y-2">
                <p className="text-4xl font-bold text-[#A855F7]">100+</p>
                <p className="text-gray-400">Thumbnails Created</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-bold text-[#A855F7]">14+</p>
                <p className="text-gray-400">Happy Clients</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-bold text-[#A855F7]">24H</p>
                <p className="text-gray-400">Average Delivery</p>
              </div>
            </div>

            {/* Main CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                size="lg"
                className="bg-[#A855F7] text-black hover:bg-[#9333ea] font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300 hover:scale-105"
                onClick={() =>
                  window.open("https://www.fiverr.com/s/5rqEqL6", "_blank")
                }
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Hire Me on Fiverr
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#A855F7] text-[#A855F7] hover:bg-[#A855F7] hover:text-black font-bold text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
                onClick={() =>
                  (window.location.href =
                    "https://mail.google.com/mail/?view=cm&fs=1&to=risongraphics01@gmail.com")
                }
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </Button>
            </div>

            {/* Social Icons - Below buttons, balanced layout */}
            <div className="flex flex-wrap justify-center items-center gap-4 pt-6">
              {/* Left side icons */}
              <a
                href="https://www.instagram.com/risongraphics/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#1a1a1a] border border-gray-700 hover:border-[#A855F7] text-gray-300 hover:text-[#A855F7] transition-all duration-300 hover:scale-105"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm font-medium">Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/@rison_graphics?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#1a1a1a] border border-gray-700 hover:border-[#A855F7] text-gray-300 hover:text-[#A855F7] transition-all duration-300 hover:scale-105"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                <span className="text-sm font-medium">TikTok</span>
              </a>

              {/* Right side icons */}
              <a
                href="https://web.facebook.com/profile.php?id=61584373547792"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#1a1a1a] border border-gray-700 hover:border-[#A855F7] text-gray-300 hover:text-[#A855F7] transition-all duration-300 hover:scale-105"
              >
                <Facebook className="w-5 h-5" />
                <span className="text-sm font-medium">Facebook</span>
              </a>
              <a
                href="https://www.linkedin.com/in/risongraphics/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#1a1a1a] border border-gray-700 hover:border-[#A855F7] text-gray-300 hover:text-[#A855F7] transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>

            {/* Additional Info */}
            <p className="text-sm text-gray-500 pt-4">
              Response time: Usually within 2-5 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
