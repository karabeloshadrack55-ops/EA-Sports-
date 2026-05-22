/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Game, NewsItem, StatItem } from './types';

export const FEATURED_GAMES: Game[] = [
  {
    id: 'fc-25',
    title: 'EA SPORTS FC 25',
    genre: 'Football / Sports Simulation',
    sportName: 'FOOTBALL',
    primaryColor: '#c8ff00', // Signature neon yellow-green
    accentColor: '#0052ff', // Royal Blue
    coverGradient: 'linear-gradient(135deg, #02091c 0%, #001f5c 50%, #c8ff00 100%)',
    iconText: 'FC 25'
  },
  {
    id: 'madden-25',
    title: 'MADDEN NFL 25',
    genre: 'American Football / Sports',
    sportName: 'NFL',
    primaryColor: '#00aaff', // Electric Blue
    accentColor: '#10b981', // Turf Green
    coverGradient: 'linear-gradient(135deg, #041026 0%, #004d99 60%, #00aaff 100%)',
    iconText: 'M 25'
  },
  {
    id: 'ufc-5',
    title: 'EA SPORTS UFC 5',
    genre: 'Mixed Martial Arts / Fighting',
    sportName: 'UFC',
    primaryColor: '#ff003c', // Crimson Red
    accentColor: '#1a1a24', // Metal Grey
    coverGradient: 'linear-gradient(135deg, #120105 0%, #3d0010 50%, #ff003c 100%)',
    iconText: 'UFC 5'
  },
  {
    id: 'f1-24',
    title: 'F1 24',
    genre: 'Racing / Formula 1 Simulation',
    sportName: 'FORMULA 1',
    primaryColor: '#ff3000', // Racing Red
    accentColor: '#0a0a0f', // Carbon Grey
    coverGradient: 'linear-gradient(135deg, #121216 0%, #3c0900 60%, #ff3000 100%)',
    iconText: 'F1 24'
  },
  {
    id: 'nhl-25',
    title: 'EA SPORTS NHL 25',
    genre: 'Ice Hockey / Sports',
    sportName: 'NHL',
    primaryColor: '#00f6ff', // Ice Cyan
    accentColor: '#051833', // Deep Sea Navy
    coverGradient: 'linear-gradient(135deg, #010a18 0%, #00427a 65%, #00f6ff 100%)',
    iconText: 'NHL 25'
  },
  {
    id: 'pga-tour',
    title: 'EA SPORTS PGA TOUR',
    genre: 'Golf / Pro Championship',
    sportName: 'GOLF',
    primaryColor: '#10b981', // Emerald Green
    accentColor: '#fbbf24', // Sunny Amber
    coverGradient: 'linear-gradient(135deg, #01140d 0%, #024731 55%, #10b981 100%)',
    iconText: 'PGA TOUR'
  }
];

export const LATEST_NEWS: NewsItem[] = [
  {
    id: 'news-1',
    category: 'UPDATES',
    headline: 'EA SPORTS FC 25 Team of the Season Starts Now',
    date: 'May 20, 2026',
    description: 'Experience the culmination of the football year with upgraded live player items, exclusive SBCs, and gameplay challenges reflecting the world’s elite leagues.',
    accentColor: '#c8ff00'
  },
  {
    id: 'news-2',
    category: 'TOURNAMENTS',
    headline: 'Madden NFL 25 Championship Series Registrations Open',
    date: 'May 18, 2026',
    description: 'The road to the Ultimate Bowl begins today. Build your dream roster, master the ground-and-pound, and compete with the world’s best on xbox, PlayStation, and PC.',
    accentColor: '#00aaff'
  },
  {
    id: 'news-3',
    category: 'EA PLAY VAULT',
    headline: 'UFC 5 and F1 24 Join the EA Play Vault This Month',
    date: 'May 15, 2026',
    description: 'EA Play Members can now jump into the octagon or hit the high-speed tracks with unlimited access. Benefit from exclusive recurrences and 10% member discounts.',
    accentColor: '#ff003c'
  }
];

export const SOCIAL_STATS: StatItem[] = [
  {
    id: 'stat-players',
    label: 'Active Global Players',
    endVal: 500,
    suffix: 'M+'
  },
  {
    id: 'stat-games',
    label: 'Championship Sports Titles',
    endVal: 30,
    suffix: '+'
  },
  {
    id: 'stat-years',
    label: 'Years of Sports Gaming Excellence',
    endVal: 25,
    suffix: ' Years'
  },
  {
    id: 'stat-countries',
    label: 'Nations Represented',
    endVal: 150,
    suffix: '+'
  }
];
