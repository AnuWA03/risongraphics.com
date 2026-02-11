import { Zap, TrendingUp, Clock, Award, Target, Sparkles } from "lucide-react";
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
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

export default function About() {
  const features = [
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality",
    },
    {
      icon: TrendingUp,
      title: "High CTR",
      description: "Designs proven to increase click-through rates",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Professional designs that stand out",
    },
    {
      icon: Target,
      title: "Niche Expertise",
      description: "Specialized knowledge across 14+ categories",
    },
    {
      icon: Sparkles,
      title: "Unlimited Revisions",
      description: "Perfect your thumbnail until you're satisfied",
    },
    {
      icon: Zap,
      title: "Trend-Aware",
      description: "Stay ahead with current design trends",
    },
  ];

  const headerAnimation = useScrollAnimation(0.3);
  const lineAnimation = useScrollAnimation(0.2);
  const topRowAnimation = useScrollAnimation(0.2);
  const bottomRowAnimation = useScrollAnimation(0.2);

  return (
    <section id="about" className="py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div 
          ref={headerAnimation.ref}
          className={`text-center space-y-4 relative transition-all duration-700 ease-out ${
            headerAnimation.isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Why Choose <span className="text-[#A855F7] neon-glow">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Professional thumbnail design that drives results
          </p>
          
          {/* Connecting Line from Header - Animated */}
          <div 
            ref={lineAnimation.ref}
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full pt-8"
          >
            <div 
              className={`w-1 bg-gradient-to-b from-[#A855F7] to-[#A855F7]/50 mx-auto rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all duration-1000 ease-out ${
                lineAnimation.isVisible ? "h-16" : "h-0"
              }`}
            />
          </div>
        </div>

        {/* Features Grid with Connecting Lines */}
        <div className="relative pt-8">
          {/* Horizontal connecting line for top row - Animated */}
          <div 
            className={`hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-[#A855F7] to-transparent rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all duration-1000 ease-out ${
              topRowAnimation.isVisible ? "w-2/3" : "w-0"
            }`}
          />
          
          {/* Vertical lines connecting to top row cards */}
          <div className={`hidden lg:flex absolute top-0 left-1/2 -translate-x-1/2 w-2/3 justify-between px-[16.67%] transition-all duration-700 ${
            topRowAnimation.isVisible ? "opacity-100" : "opacity-0"
          }`}>
            <div className="w-1 h-8 bg-[#A855F7] rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
            <div className="w-1 h-8 bg-[#A855F7] rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
            <div className="w-1 h-8 bg-[#A855F7] rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
          </div>

          <div 
            ref={topRowAnimation.ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
          >
            {features.slice(0, 3).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`bg-[#1a1a1a] rounded-2xl p-8 border-2 border-gray-800 hover:border-[#A855F7] transition-all duration-500 group hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] relative hover:scale-[1.02] ${
                    topRowAnimation.isVisible 
                      ? "opacity-100 scale-100" 
                      : "opacity-0 scale-95"
                  }`}
                  style={{ transitionDelay: `${index * 150 + 300}ms` }}
                >
                  {/* Connecting dot at top */}
                  <div className={`hidden lg:block absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#A855F7] rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)] transition-all duration-500 ${
                    topRowAnimation.isVisible ? "scale-100" : "scale-0"
                  }`} style={{ transitionDelay: `${index * 150 + 500}ms` }} />
                  
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-full bg-[#A855F7]/10 flex items-center justify-center group-hover:bg-[#A855F7]/20 transition-colors group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                      <Icon className="w-7 h-7 text-[#A855F7]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Vertical connecting lines between rows - Animated */}
          <div className={`hidden lg:flex justify-center py-4 transition-all duration-700 ${
            topRowAnimation.isVisible ? "opacity-100" : "opacity-0"
          }`}>
            <div className="flex w-2/3 justify-between px-[16.67%]">
              <div className={`w-1 bg-gradient-to-b from-[#A855F7] to-[#A855F7]/50 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all duration-700 ${
                bottomRowAnimation.isVisible ? "h-12" : "h-0"
              }`} />
              <div className={`w-1 bg-gradient-to-b from-[#A855F7] to-[#A855F7]/50 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all duration-700 ${
                bottomRowAnimation.isVisible ? "h-12" : "h-0"
              }`} style={{ transitionDelay: "100ms" }} />
              <div className={`w-1 bg-gradient-to-b from-[#A855F7] to-[#A855F7]/50 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all duration-700 ${
                bottomRowAnimation.isVisible ? "h-12" : "h-0"
              }`} style={{ transitionDelay: "200ms" }} />
            </div>
          </div>

          {/* Horizontal connecting line for bottom row */}
          <div className="hidden lg:block relative">
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-[#A855F7] to-transparent rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all duration-1000 ease-out ${
              bottomRowAnimation.isVisible ? "w-2/3" : "w-0"
            }`} />
            
            {/* Vertical lines connecting to bottom row cards */}
            <div className={`hidden lg:flex absolute top-0 left-1/2 -translate-x-1/2 w-2/3 justify-between px-[16.67%] transition-all duration-700 ${
              bottomRowAnimation.isVisible ? "opacity-100" : "opacity-0"
            }`}>
              <div className="w-1 h-8 bg-[#A855F7] rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
              <div className="w-1 h-8 bg-[#A855F7] rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
              <div className="w-1 h-8 bg-[#A855F7] rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
            </div>
          </div>

          <div 
            ref={bottomRowAnimation.ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 relative"
          >
            {features.slice(3, 6).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index + 3}
                  className={`bg-[#1a1a1a] rounded-2xl p-8 border-2 border-gray-800 hover:border-[#A855F7] transition-all duration-500 group hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] relative hover:scale-[1.02] ${
                    bottomRowAnimation.isVisible 
                      ? "opacity-100 scale-100" 
                      : "opacity-0 scale-95"
                  }`}
                  style={{ transitionDelay: `${index * 150 + 300}ms` }}
                >
                  {/* Connecting dot at top */}
                  <div className={`hidden lg:block absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#A855F7] rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)] transition-all duration-500 ${
                    bottomRowAnimation.isVisible ? "scale-100" : "scale-0"
                  }`} style={{ transitionDelay: `${index * 150 + 500}ms` }} />
                  
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-full bg-[#A855F7]/10 flex items-center justify-center group-hover:bg-[#A855F7]/20 transition-colors group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                      <Icon className="w-7 h-7 text-[#A855F7]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
