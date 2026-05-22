/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { MouseEvent } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Gamepad2, ChevronRight, Activity } from 'lucide-react';

export default function Hero() {
  const headline = "IT'S IN THE GAME";
  const words = headline.split(" ");

  // Stagger animation variants for words & letters
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const floatingShapes = [
    { size: 'w-24 h-24', color: 'bg-ea-neon/10', blur: 'blur-xl', duration: 12, delay: 0, x: '10%', y: '20%' },
    { size: 'w-48 h-48', color: 'bg-ea-blue/10', blur: 'blur-3xl', duration: 18, delay: 2, x: '80%', y: '15%' },
    { size: 'w-36 h-36', color: 'bg-ea-neon/5', blur: 'blur-2xl', duration: 15, delay: 1, x: '75%', y: '60%' },
    { size: 'w-16 h-16', color: 'bg-ea-blue/15', blur: 'blur-lg', duration: 9, delay: 4, x: '25%', y: '70%' },
  ];

  const handleScrollToGames = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const gamesSec = document.getElementById('games-grid');
    if (gamesSec) {
      gamesSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollToEAPlay = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const playSec = document.getElementById('ea-play-banner');
    if (playSec) {
      playSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-ea-dark">
      
      {/* Mesh Diagonal Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-ea-dark via-[#07070c] to-[#011e0f] opacity-90" />
        {/* Glowing Stadium Lights Diagonal Strip */}
        <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-radial-gradient from-ea-neon/15 via-transparent to-transparent rotate-[-15deg] pointer-events-none transform scale-y-50" />
        <div className="absolute bottom-[-10%] right-[-15%] w-[80%] h-[80%] bg-radial-gradient from-ea-blue/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Floating Animated Geometric Shapes (CSS animation fallback of motion) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {floatingShapes.map((shape, idx) => (
          <motion.div
            key={idx}
            className={`absolute rounded-full ${shape.size} ${shape.color} ${shape.blur}`}
            style={{ left: shape.x, top: shape.y }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: shape.delay,
            }}
          />
        ))}

        {/* Diagonal decorative CSS accent strip */}
        <div className="absolute bottom-[-200px] left-0 right-0 h-[400px] bg-gradient-to-b from-transparent to-ea-dark/95 z-10 pointer-events-none" />
        
        {/* Grid dots visual styling */}
        <div className="absolute top-1/4 right-10 w-48 h-48 opacity-20 bg-[radial-gradient(var(--color-ea-neon)_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute bottom-1/4 left-10 w-48 h-48 opacity-20 bg-[radial-gradient(var(--color-ea-blue)_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Mini sports news pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-2"
        >
          <Activity className="w-4 h-4 text-ea-neon animate-pulse" />
          <span className="text-xs tracking-widest uppercase font-semibold text-gray-300">
            NEXT-GEN SPORTS HYBRID ENGINE ACTIVE
          </span>
        </motion.div>

        {/* Stagger-animated Headline */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="font-bebas text-6xl sm:text-8xl md:text-9xl tracking-tight leading-none text-white uppercase text-center flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6"
        >
          {words.map((word, wordIdx) => (
            <motion.span
              key={wordIdx}
              variants={wordVariants}
              className={`inline-block select-none ${
                word === "GAME" 
                  ? "text-ea-neon text-transparent bg-clip-text bg-gradient-to-r from-ea-neon to-[#aeff00] drop-shadow-[0_0_35px_rgba(200,255,0,0.5)]" 
                  : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Hero description subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="max-w-2xl text-lg sm:text-xl text-gray-300 font-barlow tracking-wide leading-relaxed mb-10 text-center"
        >
          EA SPORTS delivers the ultimate high-fidelity virtual athletic theater. Experience stadium pressure, tactical genius, and photorealistic physics.
        </motion.p>

        {/* Hero CTAs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.0, type: "spring" }}
          className="flex flex-col sm:flex-row gap-4 items-center w-full justify-center max-w-md sm:max-w-none px-4 sm:px-0"
        >
          <button
            onClick={handleScrollToGames}
            className="w-full sm:w-auto px-8 py-4 rounded-sm bg-ea-neon text-black font-bebas text-lg tracking-widest font-bold duration-300 shadow-[0_0_20px_rgba(200,255,0,0.4)] hover:shadow-[0_0_30px_rgba(200,255,0,0.8)] hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Gamepad2 className="w-5 h-5 fill-black" />
            EXPLORE TITLES
          </button>
          
          <button
            onClick={handleScrollToEAPlay}
            className="w-full sm:w-auto px-8 py-4 rounded-sm border border-white/20 text-white hover:text-ea-blue hover:border-ea-blue bg-white/5 hover:bg-ea-blue/10 font-bebas text-lg tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            JOIN EA PLAY
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

      </div>

      {/* Decorative Chevron Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <span className="text-xs text-gray-500 font-mono tracking-widest uppercase mb-2">SCROLL TO FIELD</span>
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="p-1.5 rounded-full border border-white/10 bg-ea-dark/60 text-ea-neon flex items-center justify-center"
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </div>

    </section>
  );
}
