'use client';

import React from 'react';
import { SupportedLanguage } from '@/types/heritage';
import { TRANSLATIONS } from '@/data/translations';
import { Home, Compass, Camera, Bookmark, User } from 'lucide-react';

interface BottomNavProps {
  currentView: 'home' | 'explore' | 'discoveries' | 'profile';
  language: SupportedLanguage;
  onNavigate: (view: 'home' | 'explore' | 'discoveries' | 'profile') => void;
  onOpenScan: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentView,
  language,
  onNavigate,
  onOpenScan,
}) => {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-heritage-sandstone/30 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-4 py-2">
      <div className="flex items-center justify-around relative">
        {/* Home */}
        <button
          onClick={() => onNavigate('home')}
          className={`flex flex-col items-center gap-1 py-1 transition-colors ${
            currentView === 'home'
              ? 'text-heritage-maroon font-bold'
              : 'text-heritage-slate/60 hover:text-heritage-maroon'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px]">{t.navHome}</span>
        </button>

        {/* Explore Map */}
        <button
          onClick={() => onNavigate('explore')}
          className={`flex flex-col items-center gap-1 py-1 transition-colors ${
            currentView === 'explore'
              ? 'text-heritage-maroon font-bold'
              : 'text-heritage-slate/60 hover:text-heritage-maroon'
          }`}
        >
          <Compass className="w-5 h-5" />
          <span className="text-[10px]">{t.navExplore}</span>
        </button>

        {/* Prominently elevated Camera Center Button */}
        <div className="relative -top-5 flex flex-col items-center">
          <button
            onClick={onOpenScan}
            title={t.discoverWithCamera}
            className="w-14 h-14 rounded-full bg-gradient-to-tr from-heritage-maroon to-heritage-terracotta border-4 border-heritage-ivory shadow-lg flex items-center justify-center text-heritage-gold hover:scale-105 active:scale-95 transition-transform"
          >
            <Camera className="w-6 h-6" />
          </button>
          <span className="text-[10px] font-bold text-heritage-maroon mt-0.5">
            Scan
          </span>
        </div>

        {/* My Discoveries */}
        <button
          onClick={() => onNavigate('discoveries')}
          className={`flex flex-col items-center gap-1 py-1 transition-colors ${
            currentView === 'discoveries'
              ? 'text-heritage-maroon font-bold'
              : 'text-heritage-slate/60 hover:text-heritage-maroon'
          }`}
        >
          <Bookmark className="w-5 h-5" />
          <span className="text-[10px]">{t.navDiscoveries}</span>
        </button>

        {/* Profile */}
        <button
          onClick={() => onNavigate('profile')}
          className={`flex flex-col items-center gap-1 py-1 transition-colors ${
            currentView === 'profile'
              ? 'text-heritage-maroon font-bold'
              : 'text-heritage-slate/60 hover:text-heritage-maroon'
          }`}
        >
          <User className="w-5 h-5" />
          <span className="text-[10px]">{t.navProfile}</span>
        </button>
      </div>
    </div>
  );
};
