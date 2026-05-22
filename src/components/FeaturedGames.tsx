/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { FEATURED_GAMES } from '../data';
import { Game } from '../types';
import { Play, Flame, Swords, Compass, Trophy } from 'lucide-react';

export default function FeaturedGames() {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  // Match corresponding icon with the sports category
  const getSportIcon = (sport: string) => {
    switch (sport) {
      case 'FOOTBALL':
        return <Trophy className="w-4 h-4 text-ea-neon" />;
      case 'NFL':
        return <Flame className="w-4 h-4 text-ea-blue" />;
      case 'UFC':
        return <Swords className="w-4 h-4 text-[#ff003c]" />;
      case 'FORMULA 1':
        return <Compass className="w-4 h-4 text-[#ff3000]" />;
      case 'NHL':
        return <Trophy className="w-4 h-4 text-[#00f6ff]" />;
      default:
        return <Trophy className="w-4 h-4 text-ea-neon" />;
    }
  };

  return (
    <section id="games-grid" className="relative py-24 bg-ea-dark/95 w-full">
      
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-ea-neon/5 blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-ea-blue/5 blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="mb-14 flex flex-col sm:flex-row items-start sm:items-end justify-between border-b border-white/5 pb-6">
          <div>
            <span className="text-ea-neon text-xs font-mono font-bold tracking-[0.25em] uppercase block mb-2">
              ACTIVE SELECTION
            </span>
            <h2 className="font-bebas text-5xl sm:text-6xl tracking-wider text-white">
              FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400">TITLES</span>
            </h2>
          </div>
          <p className="text-sm font-barlow text-gray-400 mt-4 sm:mt-0 font-medium tracking-wider max-w-xs text-left sm:text-right uppercase">
            EXPERIENCE NEW TACTICAL REVOLUTIONS AND GAMEPLAY PHYSICS WITH THE LATEST RELEASES.
          </p>
        </div>

        {/* Responsive Grid System: 3 columns desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {FEATURED_GAMES.map((game: Game) => {
            const isHovered = hoveredCardId === game.id;

            return (
              <motion.div
                key={game.id}
                onMouseEnter={() => setHoveredCardId(game.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                className="group relative flex flex-col bg-ea-gray rounded-sm overflow-hidden border border-white/5 transition-all duration-300"
                style={{
                  boxShadow: isHovered 
                    ? `0 10px 40px -10px ${game.primaryColor}30, 0 0 25px ${game.primaryColor}20` 
                    : 'none',
                  borderColor: isHovered ? game.primaryColor : 'rgba(255,255,255,0.05)',
                  borderBottom: `3px solid ${isHovered ? game.primaryColor : 'transparent'}`
                }}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
              >
                
                {/* Simulated Game Cover Image via rich CSS gradients and stadium elements */}
                <div 
                  className="relative h-64 sm:h-72 w-full flex items-center justify-center overflow-hidden"
                  style={{ background: game.coverGradient }}
                >
                  
                  {/* Absolute Stadium Atmosphere lights grid overlays */}
                  <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:12px_12px] opacity-40 mix-blend-overlay" />
                  
                  {/* Bottom dark shadow fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ea-gray via-transparent to-black/20" />
                  
                  {/* Sports Neon Glowing Badge/Initial Overlay in the center */}
                  <div 
                    className="font-bebas text-7xl sm:text-8xl select-none tracking-widest text-transparent bg-clip-text font-extrabold stroke-2 transform group-hover:scale-110 transition-transform duration-500 flex flex-col items-center justify-center opacity-90"
                    style={{
                      WebkitTextStrokeClass: '1px',
                      WebkitTextStrokeColor: game.primaryColor,
                      backgroundImage: `linear-gradient(to bottom, #ffffff, ${game.primaryColor}60)`,
                      textShadow: `0 0 40px ${game.primaryColor}60`
                    }}
                  >
                    {game.iconText}
                  </div>

                  {/* Top bar indicators inside the mockup cover */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-xs bg-black/80 text-white font-mono text-[10px] tracking-widest border border-white/10 uppercase">
                      OFFICIAL LICENSED
                    </span>
                    <span 
                      className="w-2 h-2 rounded-full"
                      style={{ 
                        backgroundColor: game.primaryColor,
                        boxShadow: `0 0 10px ${game.primaryColor}`
                      }}
                    />
                  </div>

                  {/* Play now button slide-up banner on cover */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-black/40 backdrop-blur-xs flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
                    <button 
                      className="font-bebas tracking-widest text-[#0a0a0f] text-sm font-bold flex items-center gap-2 px-6 py-2 rounded-xs"
                      style={{ backgroundColor: game.primaryColor }}
                    >
                      <Play className="w-4 h-4 fill-[#0a0a0f]" />
                      PLAY NOW
                    </button>
                  </div>
                </div>

                {/* Card Info Section */}
                <div className="p-6 flex flex-col flex-grow relative z-10 bg-ea-gray">
                  
                  {/* Genre / Sport Header row */}
                  <div className="flex items-center gap-2 mb-3">
                    {getSportIcon(game.sportName)}
                    <span className="text-xs font-mono font-semibold text-gray-400 tracking-wider">
                      {game.sportName}
                    </span>
                    <span className="text-[10px] text-gray-600 font-mono">•</span>
                    <span className="text-xs font-mono font-semibold text-gray-400 tracking-wider">
                      PS5 / XBOX / PC
                    </span>
                  </div>

                  {/* Game Title */}
                  <h3 className="font-bebas text-2xl sm:text-3xl tracking-wide text-white mb-2 leading-none group-hover:text-ea-neon transition-colors duration-200">
                    {game.title}
                  </h3>

                  {/* UI Text Badge and interactive elements */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <span className="text-xs uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-white/5 border border-white/5 text-gray-400">
                      {game.genre}
                    </span>
                    <span className="text-xs font-mono text-gray-500 font-bold group-hover:text-white transition-colors">
                      SEE DETAILS →
                    </span>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
