/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, useRef } from 'react';
import { SOCIAL_STATS } from '../data';
import { Users, Trophy, Milestone, Globe } from 'lucide-react';

export default function StatsSection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // States to keep track of counting-up values
  const [statValues, setStatValues] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    // Durations & intervals
    const duration = 1800; // 1.8 seconds animation
    const frameRate = 30; // 30 updates per second
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      // Easing function: ease-out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const nextValues = SOCIAL_STATS.map((stat) => {
        const value = Math.round(easedProgress * stat.endVal);
        return Math.min(value, stat.endVal);
      });

      setStatValues(nextValues);

      if (frame >= totalFrames) {
        clearInterval(timer);
        // Ensure accurate final states
        setStatValues(SOCIAL_STATS.map((s) => s.endVal));
      }
    }, 1000 / frameRate);

    return () => clearInterval(timer);
  }, [hasAnimated]);

  const getStatIcon = (id: string) => {
    switch (id) {
      case 'stat-players':
        return <Users className="w-5 h-5 text-ea-neon" />;
      case 'stat-games':
        return <Trophy className="w-5 h-5 text-ea-blue" />;
      case 'stat-years':
        return <Milestone className="w-5 h-5 text-ea-neon animate-pulse" />;
      case 'stat-countries':
        return <Globe className="w-5 h-5 text-ea-blue" />;
      default:
        return <Users className="w-5 h-5 text-ea-neon" />;
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="relative py-16 bg-[#06060a] border-y border-white/5 w-full flex items-center justify-center overflow-hidden"
    >
      
      {/* Visual background lines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,170,255,0.02)_0%,transparent_50%))] pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-r from-ea-neon/2 via-transparent to-ea-blue/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center divide-x-0 divide-y-0 lg:divide-x lg:divide-white/10">
          
          {SOCIAL_STATS.map((stat, idx) => (
            <div 
              key={stat.id} 
              className="flex flex-col items-center justify-center px-4 py-4 space-y-2 lg:first:pl-0 lg:last:pr-0"
            >
              
              {/* Icon badge */}
              <div className="p-2.5 rounded-full bg-white/5 border border-white/10 mb-2">
                {getStatIcon(stat.id)}
              </div>

              {/* Incremental Number */}
              <div className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-widest text-white leading-none drop-shadow-[0_0_12px_rgba(255,255,255,0.1)]">
                {statValues[idx]}
                <span className="text-ea-neon font-bebas text-3xl sm:text-4xl md:text-5xl ml-1">
                  {stat.suffix.trim()}
                </span>
              </div>

              {/* Stat Category label */}
              <span className="text-xs sm:text-sm font-mono text-gray-400 font-bold uppercase tracking-wider text-center max-w-[150px]">
                {stat.label}
              </span>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
}
