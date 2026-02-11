import { MessageSquare, Palette, RefreshCw, CheckCircle } from "lucide-react";
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

export default function Process() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Consultation",
      description: "Share your vision, target audience, and content style. I'll understand your needs and goals.",
      slideFrom: "left"
    },
    {
      icon: Palette,
      title: "Design",
      description: "I create multiple thumbnail concepts based on your brand and proven CTR strategies.",
      slideFrom: "left"
    },
    {
      icon: RefreshCw,
      title: "Revisions",
      description: "Unlimited revisions to ensure the thumbnail perfectly matches your expectations.",
      slideFrom: "right"
    },
    {
      icon: CheckCircle,
      title: "Delivery",
      description: "Receive your final thumbnail in multiple formats, optimized for YouTube.",
      slideFrom: "right"
    }
  ];

  const headerAnimation = useScrollAnimation(0.3);
  const stepsAnimation = useScrollAnimation(0.2);

  return (
    <section id="process" className="py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div 
          ref={headerAnimation.ref}
          className={`text-center space-y-4 transition-all duration-700 ease-out ${
            headerAnimation.isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            My <span className="text-[#A855F7] neon-glow">Process</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A streamlined workflow designed for your success
          </p>
        </div>

        {/* Process Steps */}
        <div 
          ref={stepsAnimation.ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isFromLeft = step.slideFrom === "left";
            
            return (
              <div 
                key={index} 
                className={`relative transition-all duration-700 ease-out ${
                  stepsAnimation.isVisible 
                    ? "opacity-100 translate-x-0" 
                    : `opacity-0 ${isFromLeft ? "-translate-x-12" : "translate-x-12"}`
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Connector Line - Animated */}
                {index < steps.length - 1 && (
                  <div 
                    className={`hidden lg:block absolute top-16 left-[60%] h-0.5 bg-gradient-to-r from-[#A855F7] to-transparent transition-all duration-1000 ease-out ${
                      stepsAnimation.isVisible ? "w-full" : "w-0"
                    }`}
                    style={{ transitionDelay: `${index * 200 + 400}ms` }}
                  />
                )}
                
                <div className="relative bg-[#1a1a1a] rounded-2xl p-8 border-2 border-gray-800 hover:border-[#A855F7] transition-all duration-500 space-y-4 h-full hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                  {/* Step Number */}
                  <div 
                    className={`absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[#A855F7] flex items-center justify-center font-bold text-white text-lg shadow-lg transition-all duration-500 ${
                      stepsAnimation.isVisible ? "scale-100" : "scale-0"
                    }`}
                    style={{ transitionDelay: `${index * 150 + 300}ms` }}
                  >
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-[#A855F7]/10 flex items-center justify-center group-hover:bg-[#A855F7]/20 transition-colors">
                    <Icon className="w-8 h-8 text-[#A855F7]" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div 
          className={`text-center pt-8 transition-all duration-700 ease-out ${
            stepsAnimation.isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <p className="text-lg text-gray-400 mb-6">
            Ready to create thumbnails that convert?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-[#A855F7] text-white font-bold rounded-full hover:bg-[#9333ea] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] text-lg hover:scale-105"
          >
            Let's Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
