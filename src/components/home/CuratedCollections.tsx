'use client';

import React, { useState } from 'react';
import { HeritageItem, SupportedLanguage } from '@/types/heritage';
import { TRANSLATIONS } from '@/data/translations';
import {
  Sparkles,
  MapPin,
  Clock,
  Volume2,
  ChevronRight,
  Shield,
  Layers,
  Award,
} from 'lucide-react';

interface CuratedCollectionsProps {
  items: HeritageItem[];
  language: SupportedLanguage;
  onSelectItem: (item: HeritageItem) => void;
}

export const CuratedCollections: React.FC<CuratedCollectionsProps> = ({
  items,
  language,
  onSelectItem,
}) => {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: t.collections.all },
    { id: 'ancient', label: t.collections.ancient },
    { id: 'warriors', label: t.collections.warriors },
    { id: 'sacred', label: t.collections.sacred },
    { id: 'music', label: t.collections.music },
    { id: 'kingdoms', label: t.collections.kingdoms },
    { id: 'arts', label: t.collections.arts },
    { id: 'nature', label: t.collections.nature },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 my-10">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-bold text-heritage-maroon uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-heritage-goldDark" /> Curated Treasures of India
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-heritage-maroon mt-1">
            Explore Curated Collections
          </h2>
          <p className="text-xs sm:text-sm text-heritage-slate/75 mt-0.5">
            Discover verified architectural marvels, weapons of legendary rulers, instruments, and timeless crafts.
          </p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-8 scrollbar-thin">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-heritage-maroon text-heritage-gold shadow-md font-bold ring-2 ring-heritage-gold/30'
                  : 'bg-white text-heritage-slate/80 hover:bg-heritage-cream border border-heritage-sandstone/30'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Heritage Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectItem(item)}
            className="group bg-white rounded-3xl overflow-hidden border border-heritage-sandstone/30 shadow-md hover:shadow-2xl hover:border-heritage-gold/80 transition-all duration-300 flex flex-col cursor-pointer"
          >
            {/* Thumbnail Header */}
            <div className="relative h-56 overflow-hidden bg-neutral-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* Category Badge */}
              <span className="absolute top-3 left-3 bg-heritage-maroon/90 text-heritage-gold px-3 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase backdrop-blur-sm border border-heritage-gold/30 shadow">
                {item.categoryLabel}
              </span>

              {/* 3D / Audio Badge */}
              <div className="absolute top-3 right-3 flex items-center gap-1.5">
                {item.threeDModel && (
                  <span className="bg-black/60 text-amber-300 px-2 py-0.5 rounded-full text-[10px] font-bold backdrop-blur-sm border border-amber-300/30 flex items-center gap-1">
                    <Layers className="w-3 h-3" /> 3D
                  </span>
                )}
                {item.howItWorks.interactiveType && (
                  <span className="bg-emerald-600/90 text-white px-2 py-0.5 rounded-full text-[10px] font-bold backdrop-blur-sm shadow flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Playable
                  </span>
                )}
              </div>

              {/* Location Tag */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[11px] text-heritage-gold font-medium flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-heritage-gold" />
                  {item.location.state}
                </span>
                <h3 className="text-base font-serif font-bold text-white leading-tight mt-0.5 line-clamp-1">
                  {item.name}
                </h3>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-xs text-heritage-slate/80 leading-relaxed line-clamp-2 font-serif">
                  {item.tagline}
                </p>

                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-heritage-sandstoneDark">
                  <Clock className="w-3 h-3 text-heritage-goldDark" />
                  <span className="truncate">{item.period}</span>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="mt-4 pt-3 border-t border-heritage-sandstone/20 flex items-center justify-between">
                <span className="text-xs font-bold text-heritage-maroon group-hover:text-heritage-maroonDark flex items-center gap-1">
                  <span>Explore Story & 3D</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>

                <div className="flex items-center gap-1 text-[11px] text-heritage-slate/60">
                  <Volume2 className="w-3 h-3 text-heritage-goldDark" />
                  <span>Audio</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
