/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { LATEST_NEWS } from '../data';
import { ArrowUpRight, Calendar, Bookmark } from 'lucide-react';

export default function LatestNews() {
  return (
    <section id="news-strip" className="relative py-24 bg-ea-dark w-full overflow-hidden">
      
      {/* Decorative dot matrix textures */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-[radial-gradient(rgba(200,255,0,0.03)_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-ea-blue text-xs font-mono font-bold tracking-[0.25em] uppercase block mb-2">
            BROADCAST FEED
          </span>
          <h2 className="font-bebas text-5xl sm:text-6xl tracking-wider text-white">
            LATEST <span className="text-ea-neon text-stroke-sm">NEWS</span> & BLOG
          </h2>
          <div className="mt-4 h-1 w-20 bg-linear-to-r from-ea-neon to-ea-blue" />
        </div>

        {/* 
          Horizontal scrollable wrapper on mobile, strict 3-column grid on desktop!
          Uses mobile-first `flex overflow-x-auto pb-6 snap-x gap-6 lg:grid lg:grid-cols-3` 
        */}
        <div className="flex overflow-x-auto pb-6 -mx-4 px-4 snap-x snap-mandatory scrollbar-thin scrollbar-track-ea-dark scrollbar-thumb-ea-gray md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible gap-6 sm:gap-8">
          
          {LATEST_NEWS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex-shrink-0 w-[85vw] sm:w-[360px] md:w-auto snap-start bg-ea-gray/60 backdrop-blur-md rounded-sm p-6 sm:p-8 flex flex-col justify-between border-y border-r border-white/5 relative group transition-all duration-300"
              style={{
                // Left-border accent in responsive neon colors
                borderLeft: `4px solid ${item.accentColor}`,
                boxShadow: `inset 0 0 20px rgba(255, 255, 255, 0.01)`
              }}
            >
              
              {/* Dynamic subtle hover background glow */}
              <div 
                className="absolute inset-0 bg-[radial-gradient(circle_at_0px_50%,rgba(200,255,0,0.03)_0%,transparent_50%))] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle at 0px 50%, ${item.accentColor}10 0%, transparent 60%)`
                }}
              />

              <div>
                
                {/* Meta Row: Tag & Date */}
                <div className="flex items-center justify-between mb-4">
                  <span 
                    className="px-2.5 py-0.5 rounded-xs font-mono text-[10px] font-bold tracking-widest uppercase"
                    style={{
                      backgroundColor: `${item.accentColor}20`,
                      color: item.accentColor,
                      border: `1px solid ${item.accentColor}40`
                    }}
                  >
                    {item.category}
                  </span>
                  
                  <div className="flex items-center gap-1.5 text-xs font-mono text-gray-500 font-bold">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </div>
                </div>

                {/* News Headline */}
                <h3 className="font-bebas text-2xl sm:text-3xl tracking-wide text-white leading-tight mb-4 group-hover:text-white transition-colors">
                  {item.headline}
                </h3>

                {/* News Description brief */}
                <p className="font-barlow text-sm text-gray-400 font-semibold tracking-wide leading-relaxed line-clamp-3">
                  {item.description}
                </p>

              </div>

              {/* Action Read More */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-gray-500 font-bold group-hover:text-white transition-colors flex items-center gap-1 select-none">
                  <Bookmark className="w-3.5 h-3.5" />
                  FULL RELEASE ARX
                </span>
                
                <a 
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="p-1.5 rounded-full bg-white/5 text-gray-400 group-hover:text-black transition-all duration-300 transform group-hover:-translate-y-1"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = item.accentColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)';
                  }}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </motion.div>
          ))}

        </div>

        {/* Scroll feedback bar on mobile viewports */}
        <div className="mt-8 flex md:hidden items-center gap-1.5 justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-ea-neon/80" />
          <div className="w-6 h-1 rounded-sm bg-ea-neon/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-ea-neon/20" />
        </div>

      </div>
    </section>
  );
}
