'use client';

import React from 'react';
import { SupportedLanguage } from '@/types/heritage';
import { TRANSLATIONS } from '@/data/translations';
import { Camera, Compass, Search, Sparkles, MapPin } from 'lucide-react';

interface HeroSectionProps {
  language: SupportedLanguage;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onOpenScan: () => void;
  onExploreMap: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  searchQuery,
  onSearchChange,
  onOpenScan,
  onExploreMap,
}) => {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  return (
    <div className="relative overflow-hidden bg-neutral-950 text-white rounded-3xl mx-4 sm:mx-6 my-4 shadow-2xl border-2 border-heritage-sandstone/30">
      {/* Background Indian Landscape Hero Image */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=2000&q=85"
          alt="Ancient Indian Temple Sunset"
          className="w-full h-full object-cover object-center filter brightness-[0.42] scale-105 transform hover:scale-100 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/70" />
      </div>

      {/* Decorative Jali / Mandala overlay */}
      <div className="absolute inset-0 bg-jali-pattern opacity-10 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 sm:py-24 text-center flex flex-col items-center">
        {/* Sanskrit Inscription Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-heritage-maroon/80 border border-heritage-gold/50 backdrop-blur-md mb-6 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-heritage-gold" />
          <span className="text-xs font-serif font-bold text-heritage-gold tracking-widest uppercase">
            अतिथि देवो भव • Welcome to India&apos;s Living Heritage
          </span>
        </div>

        {/* Mandatory Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold tracking-tight text-white leading-tight">
          Every Photo Holds a <span className="text-heritage-gold italic">Story.</span>
        </h1>

        {/* Supporting Text */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-neutral-200 max-w-2xl leading-relaxed font-sans">
          {t.heroSubheadline}
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Prominent Primary CTA */}
          <button
            onClick={onOpenScan}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-heritage-maroon via-rose-800 to-heritage-terracotta text-heritage-gold font-bold text-base hover:scale-105 active:scale-95 transition-all shadow-xl shadow-heritage-maroon/30 flex items-center justify-center gap-3 border border-heritage-gold/60"
          >
            <Camera className="w-5 h-5 text-heritage-gold" />
            <span>{t.discoverWithCamera}</span>
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onExploreMap}
            className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base transition-all backdrop-blur-md border border-white/20 flex items-center justify-center gap-2.5"
          >
            <Compass className="w-5 h-5 text-heritage-gold" />
            <span>{t.exploreIndia}</span>
          </button>
        </div>

        {/* Interactive Search Bar */}
        <div className="mt-10 w-full max-w-2xl">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-3.5 text-heritage-slate/60" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-neutral-900 placeholder:text-neutral-500 text-sm shadow-xl focus:outline-none focus:ring-4 focus:ring-heritage-gold/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-4 top-3.5 text-xs text-neutral-400 hover:text-neutral-700 font-bold"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-[11px] text-neutral-300">
            <span className="font-semibold text-heritage-gold">Popular:</span>
            {['Bansuri', 'Konark Wheel', 'Shivaji Talwar', 'Chola Nataraja', 'Hampi Chariot'].map(
              (term) => (
                <button
                  key={term}
                  onClick={() => onSearchChange(term)}
                  className="bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-full text-white/90 border border-white/10 transition-colors"
                >
                  {term}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
