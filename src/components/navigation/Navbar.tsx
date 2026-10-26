'use client';

import React from 'react';
import { SupportedLanguage } from '@/types/heritage';
import { LANGUAGE_LABELS, TRANSLATIONS } from '@/data/translations';
import { audioEngine } from '@/utils/audioEngine';
import {
  Camera,
  Compass,
  Bookmark,
  User,
  Sparkles,
  Globe,
  Bell,
  Home,
} from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'explore' | 'discoveries' | 'profile';
  language: SupportedLanguage;
  onNavigate: (view: 'home' | 'explore' | 'discoveries' | 'profile') => void;
  onOpenScan: () => void;
  onSelectLanguage: (lang: SupportedLanguage) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  language,
  onNavigate,
  onOpenScan,
  onSelectLanguage,
}) => {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  const playTempleGreeting = () => {
    audioEngine.playTempleBell();
  };

  return (
    <header className="sticky top-0 z-40 bg-heritage-ivory/95 backdrop-blur-md border-b border-heritage-sandstone/30 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand Logo & Tagline */}
        <div
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          {/* Ornate Mandala / Sun Temple Emblem */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-heritage-maroon to-heritage-maroonDark border-2 border-heritage-gold flex items-center justify-center text-heritage-gold shadow-md group-hover:scale-105 transition-transform">
            <span className="font-serif text-xl sm:text-2xl font-bold">भ</span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-serif font-bold text-heritage-maroon tracking-wide">
                BharatDarshan
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-heritage-gold/20 text-heritage-maroonDark border border-heritage-gold/40">
                AI HERITAGE
              </span>
            </div>
            <p className="text-[11px] text-heritage-sandstoneDark font-medium hidden sm:block">
              {t.tagline}
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-heritage-cream/70 p-1.5 rounded-2xl border border-heritage-sandstone/30">
          <button
            onClick={() => onNavigate('home')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              currentView === 'home'
                ? 'bg-heritage-maroon text-heritage-gold shadow-sm font-bold'
                : 'text-heritage-slate/80 hover:text-heritage-maroon hover:bg-white/60'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>{t.navHome}</span>
          </button>

          <button
            onClick={() => onNavigate('explore')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              currentView === 'explore'
                ? 'bg-heritage-maroon text-heritage-gold shadow-sm font-bold'
                : 'text-heritage-slate/80 hover:text-heritage-maroon hover:bg-white/60'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>{t.navExplore}</span>
          </button>

          <button
            onClick={() => onNavigate('discoveries')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              currentView === 'discoveries'
                ? 'bg-heritage-maroon text-heritage-gold shadow-sm font-bold'
                : 'text-heritage-slate/80 hover:text-heritage-maroon hover:bg-white/60'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>{t.navDiscoveries}</span>
          </button>

          <button
            onClick={() => onNavigate('profile')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              currentView === 'profile'
                ? 'bg-heritage-maroon text-heritage-gold shadow-sm font-bold'
                : 'text-heritage-slate/80 hover:text-heritage-maroon hover:bg-white/60'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>{t.navProfile}</span>
          </button>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Temple Bell Acoustic Ring Button */}
          <button
            onClick={playTempleGreeting}
            title="Ring Sacred Temple Bell"
            className="p-2 sm:p-2.5 rounded-xl bg-white border border-heritage-sandstone/30 text-heritage-maroon hover:bg-heritage-cream transition-colors shadow-sm"
          >
            <Bell className="w-4 h-4" />
          </button>

          {/* Language Selector Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1.5 px-2.5 py-2 rounded-xl bg-white border border-heritage-sandstone/30 text-xs font-bold text-heritage-slate hover:border-heritage-gold transition-colors shadow-sm">
              <Globe className="w-3.5 h-3.5 text-heritage-maroon" />
              <span className="uppercase">{language}</span>
            </button>

            {/* Language Flyout Menu */}
            <div className="absolute right-0 top-full mt-1.5 w-48 bg-white rounded-2xl shadow-xl border border-heritage-sandstone/30 p-2 hidden group-hover:block z-50 animate-fade-in">
              <span className="text-[10px] font-bold text-heritage-slate/60 px-3 py-1 block uppercase">
                Select Language:
              </span>
              <div className="space-y-0.5">
                {LANGUAGE_LABELS.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => onSelectLanguage(item.code)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs flex items-center justify-between transition-colors ${
                      language === item.code
                        ? 'bg-heritage-maroon text-heritage-gold font-bold'
                        : 'text-heritage-slate hover:bg-heritage-cream'
                    }`}
                  >
                    <span>{item.native}</span>
                    <span className="text-[10px] opacity-75">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Prominent Scan With Camera CTA */}
          <button
            onClick={onOpenScan}
            className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-heritage-maroon via-rose-900 to-heritage-maroonDark text-heritage-gold border border-heritage-gold/50 font-bold text-xs sm:text-sm hover:scale-105 transition-all shadow-md flex items-center gap-2"
          >
            <Camera className="w-4 h-4 text-heritage-gold" />
            <span className="hidden sm:inline">{t.discoverWithCamera}</span>
            <span className="sm:hidden">Scan</span>
          </button>
        </div>
      </div>
    </header>
  );
};
