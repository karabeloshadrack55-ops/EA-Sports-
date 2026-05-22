/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Game {
  id: string;
  title: string;
  genre: string;
  primaryColor: string; // e.g. '#00FF87' for FC 25 green
  accentColor: string;  // e.g. '#0052FF' for FC 25 blue
  sportName: string;    // e.g. 'FOOTBALL'
  coverGradient: string; // Tailwind/CSS gradient format
  iconText: string;     // e.g. 'FC 25' or 'M25' for display placeholder art
}

export interface NewsItem {
  id: string;
  category: string;
  headline: string;
  date: string;
  description: string;
  accentColor: string;
}

export interface StatItem {
  id: string;
  label: string;
  endVal: number;
  suffix: string;
}
