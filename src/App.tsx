/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedGames from './components/FeaturedGames';
import EAPlayBanner from './components/EAPlayBanner';
import LatestNews from './components/LatestNews';
import StatsSection from './components/StatsSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-ea-dark text-white selection:bg-ea-neon selection:text-black">
      
      {/* Visual static overlay scanlines and pixel dots */}
      <div className="noise-overlay" />

      {/* Persistent global Navigation Bar */}
      <Navbar />

      {/* Immersive cinematic introductory block */}
      <Hero />

      {/* Incremental Social Performance stats */}
      <StatsSection />

      {/* Grid displaying the 6 Core Featured Sports game cards */}
      <FeaturedGames />

      {/* EA Play Diagonal Membership section */}
      <EAPlayBanner />

      {/* Horizontal news sliders and articles */}
      <LatestNews />

      {/* Global deep Brand footer & back to field scroll anchors */}
      <Footer />

    </div>
  );
}
