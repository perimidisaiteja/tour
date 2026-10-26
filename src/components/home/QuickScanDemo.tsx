'use client';

import React from 'react';
import { HeritageItem, SupportedLanguage } from '@/types/heritage';
import { TRANSLATIONS } from '@/data/translations';
import { Zap, Sparkles, Camera, ArrowRight, Play } from 'lucide-react';

interface QuickScanDemoProps {
  items: HeritageItem[];
  language: SupportedLanguage;
  onSelectItem: (item: HeritageItem) => void;
  onOpenScan: () => void;
}

export const QuickScanDemo: React.FC<QuickScanDemoProps> = ({
  items,
  language,
  onSelectItem,
  onOpenScan,
}) => {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  // Selected sample showcase items
  const demoItems = items.slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 my-10">
      <div className="bg-neutral-900 rounded-3xl p-6 sm:p-8 border-2 border-heritage-gold/40 text-white shadow-xl relative overflow-hidden">
        {/* Background Subtle Gradient */}
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-heritage-maroon/30 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-heritage-gold/20 flex items-center justify-center text-heritage-gold">
                <Zap className="w-3.5 h-3.5 fill-heritage-gold" />
              </span>
              <span className="text-xs font-bold text-heritage-gold uppercase tracking-wider">
                Instant Interactive Demo
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
              {t.demoScansTitle}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300">
              {t.demoScansSubtitle}
            </p>
          </div>

          <button
            onClick={onOpenScan}
            className="self-start md:self-auto px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold transition-all flex items-center gap-2"
          >
            <Camera className="w-4 h-4 text-heritage-gold" />
            <span>Open Custom Scanner</span>
          </button>
        </div>

        {/* Demo Cards */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {demoItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectItem(item)}
              className="bg-neutral-800/80 hover:bg-neutral-800 border border-white/10 hover:border-heritage-gold/70 rounded-2xl p-4 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative h-32 rounded-xl overflow-hidden mb-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.thumbnailUrl}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2 left-2 bg-black/70 text-heritage-gold px-2 py-0.5 rounded text-[10px] font-bold backdrop-blur-sm">
                  {item.categoryLabel}
                </span>
              </div>

              <div>
                <h4 className="text-sm font-serif font-bold text-white group-hover:text-heritage-gold transition-colors line-clamp-1">
                  {item.name}
                </h4>
                <p className="text-[11px] text-neutral-400 mt-1 line-clamp-2 font-serif">
                  {item.tagline}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs text-heritage-gold font-bold">
                <span className="flex items-center gap-1">
                  <Play className="w-3 h-3 fill-heritage-gold" /> Try Experience
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
