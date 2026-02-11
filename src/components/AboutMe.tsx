import { Image, Users, Clock } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Count-up animation hook
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  return { count, ref };
}

export default function AboutMe() {
  const stat1 = useCountUp(100, 2000);
  const stat2 = useCountUp(14, 1500);
  const stat3 = useCountUp(24, 1800);

  return (
    <section id="about-me" className="py-20 px-6 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Text Content + Stats */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              About <span className="text-[#A855F7] neon-glow">My Work</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm Rison, a YouTube Thumbnail Designer who focuses on turning
              ideas into eye-catching visuals. I combine color psychology, bold
              layouts, and audience research to create thumbnails that stand out
              instantly.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I love designing clean, high-impact visuals that help creators get
              more clicks and grow their channels. Every project I take is
              crafted with attention to detail and a clear understanding of what
              truly grabs viewers.
            </p>

            {/* Stats Section - Smaller, under paragraph */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {/* Stat 1 */}
              <div
                ref={stat1.ref}
                className="relative group bg-[#1a1a1a] rounded-xl p-4 border border-gray-800 hover:border-[#A855F7] transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#A855F7]/0 via-[#A855F7]/10 to-[#A855F7]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                <div className="absolute -inset-1 bg-[#A855F7]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative flex flex-col items-center text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#A855F7]/10 flex items-center justify-center group-hover:bg-[#A855F7]/20 transition-colors group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                    <Image className="w-5 h-5 text-[#A855F7]" />
                  </div>
                  <p className="text-2xl font-bold text-[#A855F7]">
                    {stat1.count}+
                  </p>
                  <p className="text-gray-400 text-sm font-medium">Thumbnails Created</p>
                </div>
              </div>

              {/* Stat 2 */}
              <div
                ref={stat2.ref}
                className="relative group bg-[#1a1a1a] rounded-xl p-4 border border-gray-800 hover:border-[#A855F7] transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#A855F7]/0 via-[#A855F7]/10 to-[#A855F7]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                <div className="absolute -inset-1 bg-[#A855F7]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative flex flex-col items-center text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#A855F7]/10 flex items-center justify-center group-hover:bg-[#A855F7]/20 transition-colors group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                    <Users className="w-5 h-5 text-[#A855F7]" />
                  </div>
                  <p className="text-2xl font-bold text-[#A855F7]">
                    {stat2.count}+
                  </p>
                  <p className="text-gray-400 text-sm font-medium">Happy Clients</p>
                </div>
              </div>

              {/* Stat 3 */}
              <div
                ref={stat3.ref}
                className="relative group bg-[#1a1a1a] rounded-xl p-4 border border-gray-800 hover:border-[#A855F7] transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#A855F7]/0 via-[#A855F7]/10 to-[#A855F7]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                <div className="absolute -inset-1 bg-[#A855F7]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative flex flex-col items-center text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#A855F7]/10 flex items-center justify-center group-hover:bg-[#A855F7]/20 transition-colors group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                    <Clock className="w-5 h-5 text-[#A855F7]" />
                  </div>
                  <p className="text-2xl font-bold text-[#A855F7]">
                    {stat3.count}h
                  </p>
                  <p className="text-gray-400 text-sm font-medium">Average Delivery</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Large Photo */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border-4 border-[#A855F7]/30 neon-border aspect-[3/4] shadow-[0_0_40px_rgba(168,85,247,0.3)]">
              <img
                src="/images/about-photo.jpg"
                alt="Rison - Professional Thumbnail Designer"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#A855F7]/5 via-transparent to-[#A855F7]/5" />
            </div>
            <div className="absolute -inset-4 bg-[#A855F7]/10 rounded-3xl blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
