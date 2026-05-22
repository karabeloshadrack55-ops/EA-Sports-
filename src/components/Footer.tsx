/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Facebook, Twitter, Instagram, Youtube, ArrowUp, Send } from 'lucide-react';

export default function Footer() {
  const socialIcons = [
    { icon: <Twitter className="w-4 h-4" />, href: '#', label: 'Twitter' },
    { icon: <Youtube className="w-4 h-4" />, href: '#', label: 'YouTube' },
    { icon: <Instagram className="w-4 h-4" />, href: '#', label: 'Instagram' },
    { icon: <Facebook className="w-4 h-4" />, href: '#', label: 'Facebook' }
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#040407] border-t-4 border-ea-neon w-full pt-16 pb-12 z-10">
      
      {/* Footer Content Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/5">
          
          {/* Brand/Logo Column */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <a href="#" className="flex items-center select-none" onClick={(e) => { e.preventDefault(); handleScrollToTop(); }}>
              <span className="font-bebas text-3xl sm:text-4xl tracking-wider text-white">
                EA <span className="text-ea-neon text-stroke-sm">SPORTS</span>
              </span>
              <span className="ml-[2px] inline-block w-2.5 h-2.5 rounded-full bg-ea-neon shadow-[0_0_10px_rgba(200,255,0,0.8)]" />
            </a>
            
            <p className="font-barlow text-sm text-gray-400 font-semibold tracking-wide leading-relaxed max-w-sm">
              EA SPORTS is a registered trademark of Electronic Arts Inc. Delivering immersive virtual athletic arenas, next-generation physics simulators, and competitive leagues worldwide.
            </p>

            {/* Newsletter simulated sign-up */}
            <div className="pt-2">
              <span className="text-xs uppercase font-mono tracking-widest text-gray-500 font-bold block mb-3">SUBSCRIBE TO SPORTSLETTER:</span>
              <form className="flex w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="ENTER ENTERPRISE MAIL..." 
                  className="bg-white/5 border border-white/10 text-xs font-mono px-4 py-3 text-white placeholder-gray-500 rounded-l-sm focus:outline-none focus:border-ea-neon focus:ring-1 focus:ring-ea-neon w-full"
                />
                <button 
                  type="submit" 
                  className="bg-ea-neon hover:bg-[#aeff00] text-black px-4 flex items-center justify-center rounded-r-sm transition-colors cursor-pointer"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Navigation link columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Column 1: Titles */}
            <div className="space-y-4 text-left">
              <h4 className="font-bebas text-lg tracking-wider text-white">ACTIVE FRANCHISES</h4>
              <ul className="space-y-2">
                <li><a href="#games-grid" className="text-xs font-mono font-bold tracking-wider text-gray-400 hover:text-ea-neon uppercase transition-colors">EA SPORTS FC™ 25</a></li>
                <li><a href="#games-grid" className="text-xs font-mono font-bold tracking-wider text-gray-400 hover:text-ea-neon uppercase transition-colors">MADDEN NFL 25</a></li>
                <li><a href="#games-grid" className="text-xs font-mono font-bold tracking-wider text-gray-400 hover:text-ea-neon uppercase transition-colors">UFC 5</a></li>
                <li><a href="#games-grid" className="text-xs font-mono font-bold tracking-wider text-gray-400 hover:text-ea-neon uppercase transition-colors">NHL 25</a></li>
                <li><a href="#games-grid" className="text-xs font-mono font-bold tracking-wider text-gray-400 hover:text-ea-neon uppercase transition-colors">F1® 24 CHAMPIONS</a></li>
              </ul>
            </div>

            {/* Column 2: Program channels */}
            <div className="space-y-4 text-left">
              <h4 className="font-bebas text-lg tracking-wider text-white">ECOSYSTEM CHANNELS</h4>
              <ul className="space-y-2">
                <li><a href="#ea-play-banner" className="text-xs font-mono font-bold tracking-wider text-gray-400 hover:text-ea-neon uppercase transition-colors">JOIN EA PLAY™</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()} className="text-xs font-mono font-bold tracking-wider text-gray-400 hover:text-ea-neon uppercase transition-colors">EA APP CLIENT</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()} className="text-xs font-mono font-bold tracking-wider text-gray-400 hover:text-ea-neon uppercase transition-colors">MEMBER PERKS</a></li>
                <li><a href="#news-strip" className="text-xs font-mono font-bold tracking-wider text-gray-400 hover:text-ea-neon uppercase transition-colors">MEDIA PRESSROOM</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()} className="text-xs font-mono font-bold tracking-wider text-gray-400 hover:text-ea-neon uppercase transition-colors">EA CAREERS</a></li>
              </ul>
            </div>

            {/* Column 3: Legal/Support */}
            <div className="space-y-4 text-left col-span-2 sm:col-span-1">
              <h4 className="font-bebas text-lg tracking-wider text-white">LEGAL ASSIST</h4>
              <ul className="space-y-2">
                <li><a href="#" onClick={(e) => e.preventDefault()} className="text-xs font-mono font-bold tracking-wider text-gray-400 hover:text-ea-neon uppercase transition-colors">ACCOUNT ASSISTANCE</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()} className="text-xs font-mono font-bold tracking-wider text-gray-400 hover:text-ea-neon uppercase transition-colors">ACCESSIBILITY CORE</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()} className="text-xs font-mono font-bold tracking-wider text-gray-400 hover:text-ea-neon uppercase transition-colors">ONLINE AGREEMENTS</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()} className="text-xs font-mono font-bold tracking-wider text-gray-400 hover:text-ea-neon uppercase transition-colors">DATA PRIVACY</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Lower Row: Social, Scroll, Legal Text */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Social Icons group */}
          <div className="flex gap-4 items-center">
            {socialIcons.map((soc) => (
              <a 
                key={soc.label}
                href={soc.href}
                onClick={(e) => e.preventDefault()}
                aria-label={soc.label}
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-ea-neon text-gray-400 hover:text-ea-neon flex items-center justify-center transition-all hover:scale-110"
              >
                {soc.icon}
              </a>
            ))}
          </div>

          {/* Legal Text */}
          <p className="text-[10px] font-mono font-semibold text-gray-600 tracking-wider text-center md:text-right uppercase">
            © 2026 ELECTRONIC ARTS INC. ALL TRADEMARKS BELONG TO THEIR RESPECTIVE ENTITIES. <br />
            SIMULATED INTERACTIVITY WORKSPACE FOR DEMONSTRATION PURPOSES.
          </p>

          {/* Scroll directly back to Top action */}
          <button 
            onClick={handleScrollToTop}
            className="p-3 bg-white/5 hover:bg-ea-neon text-gray-400 hover:text-black rounded-sm border border-white/10 text-xs font-mono tracking-widest uppercase transition-all flex items-center gap-2 cursor-pointer"
          >
            BACK TO FIELD
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

      </div>
    </footer>
  );
}
