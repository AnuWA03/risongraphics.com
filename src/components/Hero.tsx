import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about-me")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 py-20 relative"
    >
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Profile Image */}
        <div
          className={`relative inline-block transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-[#A855F7] neon-border shadow-[0_0_30px_rgba(168,85,247,0.4)]">
            <img
              src="/images/final output2.jpg"
              alt="Rison - Thumbnail Designer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name & Title */}
        <div
          className={`space-y-4 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
            <span className="text-white">Hi;I'm Rison,</span>
            <br />
            <span className="text-[#A855F7] neon-glow">Thumbnail Designer</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Creating eye-catching YouTube thumbnails that drive clicks and boost
            your channel's growth. Specialized in high-CTR designs across
            multiple niches.
          </p>
        </div>

        {/* Brand Logos Grid */}
        <div className="pt-8"></div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className={`absolute -translate-x-1/2 animate-bounce left-1/2 bottom-12 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "500ms" }}
          aria-label="Scroll to about"
        >
          <ArrowDown className="w-8 h-8 text-[#A855F7]" />
        </button>
      </div>
    </section>
  );
}
