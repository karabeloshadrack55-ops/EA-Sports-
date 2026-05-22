/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, MouseEvent } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Games', href: '#games-grid' },
    { name: 'Madden', href: '#games-grid' },
    { name: 'FC Series', href: '#games-grid' },
    { name: 'UFC', href: '#games-grid' },
    { name: 'News', href: '#news-strip' },
    { name: 'EA Play', href: '#ea-play-banner' }
  ];

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav
        id="main-navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-ea-dark/95 backdrop-blur-md border-b border-white/5 py-4 shadow-2xl'
            : 'bg-gradient-to-b from-ea-dark/80 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2 select-none">
            <a href="#" className="flex items-center" onClick={(e) => handleLinkClick(e, '#root')}>
              <span className="font-bebas text-2xl sm:text-3xl tracking-wider text-white">
                EA <span className="text-ea-neon text-stroke-sm">SPORTS</span>
              </span>
              <span className="ml-[2px] inline-block w-2 h-2 rounded-full bg-ea-neon animate-pulse" />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center lg:gap-8 gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative text-sm tracking-widest text-gray-300 hover:text-white uppercase font-barlow font-semibold transition-colors duration-200 group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-ea-neon transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#ea-play-banner"
              onClick={(e) => handleLinkClick(e, '#ea-play-banner')}
              className="px-5 py-2 rounded-sm bg-linear-to-r from-ea-neon to-[#aeff00] text-black text-sm tracking-widest font-bebas font-bold transition-all duration-300 shadow-[0_0_15px_rgba(200,255,0,0.3)] hover:shadow-[0_0_25px_rgba(200,255,0,0.6)] hover:scale-105 active:scale-95 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 fill-black" />
              EA PLAY
            </a>
          </div>

          {/* Hamburger Menu Trigger */}
          <div className="flex md:hidden items-center gap-4">
            <a
              href="#ea-play-banner"
              onClick={(e) => handleLinkClick(e, '#ea-play-banner')}
              className="px-3 py-1.5 rounded-sm bg-ea-neon text-black text-xs tracking-widest font-bebas font-bold scale-90"
            >
              EA PLAY
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 text-gray-400 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed top-0 left-0 w-full h-screen bg-ea-dark/98 backdrop-blur-xl z-40 flex flex-col justify-center px-8 border-b border-ea-neon/10"
          >
            <div className="flex flex-col gap-6 text-center">
              <span className="font-bebas text-4xl tracking-wider text-white mb-4">
                EA <span className="text-ea-neon">SPORTS</span>
              </span>
              
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-2xl font-bebas tracking-widest text-gray-300 hover:text-ea-neon uppercase transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-8 flex flex-col items-center gap-4"
              >
                <a
                  href="#ea-play-banner"
                  onClick={(e) => handleLinkClick(e, '#ea-play-banner')}
                  className="w-full max-w-xs px-6 py-3 bg-ea-neon text-black text-lg tracking-widest font-bebas font-bold flex items-center justify-center gap-2 rounded-sm"
                >
                  JOIN EA PLAY NOW
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-300 text-sm tracking-widest uppercase font-barlow font-bold"
                >
                  CLOSE MENU
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
