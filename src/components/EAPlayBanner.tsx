/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Check, Sparkles, Monitor, Gamepad } from 'lucide-react';

export default function EAPlayBanner() {
  const benefits = [
    "Unlocks exclusive in-game challenges, recurring reward drops & early access trials",
    "Gain instant, unrestricted access to a massive library of top EA franchises",
    "Save 10% on all EA digital purchases, including full games, expansions, and points systems"
  ];

  return (
    <section 
      id="ea-play-banner" 
      className="relative py-28 w-full bg-[#050508] overflow-hidden"
      style={{
        clipPath: 'polygon(0 4%, 100% 0, 100% 96%, 0 100%)'
      }}
    >
      
      {/* Slow Moving Animated Mesh Background inside EA Play */}
      <div className="absolute inset-0 z-0 opacity-80">
        <motion.div 
          className="absolute -inset-[50%] bg-radial-gradient from-ea-neon/15 via-[#032e18]/20 to-transparent"
          animate={{
            x: ['-10%', '10%', '-10%'],
            y: ['-5%', '15%', '-5%'],
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -inset-[50%] bg-radial-gradient from-ea-blue/15 via-[#011e3c]/20 to-transparent"
          animate={{
            x: ['10%', '-10%', '10%'],
            y: ['10%', '-10%', '10%'],
            scale: [1.1, 1, 1.1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Grid Pattern overlays */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* Giant watermarked background text from Elegant Dark design theme */}
      <div className="absolute font-bebas text-[120px] sm:text-[220px] font-black leading-none text-white/[0.02] select-none right-[-20px] top-[-30px] pointer-events-none z-0">
        EA PLAY
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Badge, Price & Platforms */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* EA Play Badge Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-ea-neon/10 border border-ea-neon/40 text-ea-neon rounded-xs text-xs font-mono font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              MONTHLY MEMBERSHIP PROGRAM
            </div>

            <h2 className="font-bebas text-5xl sm:text-7xl tracking-wide text-white leading-tight">
              MORE GAMES. <br />
              MORE REWARDS. <span className="text-ea-neon">JOIN EA PLAY.</span>
            </h2>

            <p className="font-barlow text-lg sm:text-xl text-gray-300 tracking-wide font-normal max-w-xl">
              Get more from the games you love with access to member-only challenges, in-game rewards, and a curated library of awesome titles.
            </p>

            {/* Price Badge indicator */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <div className="px-5 py-3 rounded-sm bg-white/5 border border-white/10 backdrop-blur-md flex flex-col">
                <span className="text-[10px] font-mono text-gray-400 tracking-widest uppercase font-bold">STARTING FROM ONLY</span>
                <span className="font-bebas text-3xl text-ea-neon tracking-wide">$4.99<span className="text-sm text-gray-300 font-barlow font-bold"> / MONTH</span></span>
              </div>
              
              <div className="text-gray-400 text-xs font-mono tracking-wide">
                Cancel anytime. Extended trials <br />
                included with EA FC 25 & Madden NFL 25.
              </div>
            </div>

            {/* Platform Badges with custom SVG look */}
            <div className="pt-6 space-y-2">
              <span className="text-xs uppercase font-mono tracking-widest text-gray-500 font-bold block">SUPPORTED SYSTEM CHANNELS:</span>
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-sm bg-white/5 border border-white/10 text-xs font-mono text-gray-300 uppercase font-semibold">
                  <Gamepad className="w-3.5 h-3.5 text-ea-blue" />
                  PLAYSTATION® 5
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-sm bg-white/5 border border-white/10 text-xs font-mono text-gray-300 uppercase font-semibold">
                  <Gamepad className="w-3.5 h-3.5 text-[#107c10]" />
                  XBOX SERIES X|S
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-sm bg-white/5 border border-white/10 text-xs font-mono text-gray-300 uppercase font-semibold">
                  <Monitor className="w-3.5 h-3.5 text-ea-neon" />
                  EA APP FOR PC
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Benefit Card Box */}
          <div className="lg:col-span-5 relative">
            
            {/* Soft decorative glow background behind card */}
            <div className="absolute inset-0 bg-ea-neon/10 blur-3xl rounded-full scale-75 pointer-events-none" />

            <div className="relative p-8 sm:p-10 rounded-sm bg-linear-to-b from-[#11111d] to-[#0d0d15] border border-white/5 shadow-2xl">
              <div className="absolute top-0 right-0 p-3 h-1 bg-ea-neon w-1/3" />
              
              <div className="pb-6 mb-6 border-b border-white/5">
                <span className="text-xs font-mono font-bold text-ea-neon uppercase tracking-[0.2em] block mb-1">MEMBERSHIP PRIVILEGES</span>
                <h3 className="font-bebas text-3xl tracking-wide text-white">BENEFITS AT A GLANCE</h3>
              </div>

              {/* Benefits list */}
              <div className="space-y-6">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-ea-neon/20 border border-ea-neon/50 text-ea-neon flex items-center justify-center">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </div>
                    <p className="text-sm font-barlow text-gray-300 line-clamp-3 leading-relaxed tracking-wide font-medium">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              {/* Glow Action button */}
              <div className="mt-10 pt-4">
                <button className="w-full py-4 rounded-sm bg-ea-neon text-[#0a0a0f] text-center font-bebas text-lg tracking-widest font-bold shadow-[0_5px_20px_rgba(200,255,0,0.3)] hover:shadow-[0_8px_30px_rgba(200,255,0,0.6)] duration-300 hover:scale-[1.02] cursor-pointer">
                  SIGN UP NOW — $4.99/MO
                </button>
                <span className="text-[10px] text-gray-500 font-mono tracking-widest text-center block mt-3 uppercase">
                  recurring charges apply • cancel at any time
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
