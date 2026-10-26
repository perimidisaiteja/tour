'use client';

import React from 'react';
import { SupportedLanguage, LearningDepth, UserPreferences } from '@/types/heritage';
import { LANGUAGE_LABELS, TRANSLATIONS } from '@/data/translations';
import {
  Globe,
  BookOpen,
  Type,
  Eye,
  Volume2,
  Trash2,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from 'lucide-react';

interface ProfileSettingsProps {
  preferences: UserPreferences;
  onUpdatePreferences: (prefs: Partial<UserPreferences>) => void;
  onClearHistory: () => void;
}

export const ProfileSettings: React.FC<ProfileSettingsProps> = ({
  preferences,
  onUpdatePreferences,
  onClearHistory,
}) => {
  const t = TRANSLATIONS[preferences.language] || TRANSLATIONS.en;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 pb-28">
      {/* Title */}
      <div className="mb-6">
        <span className="text-xs font-bold text-heritage-maroon uppercase tracking-wider flex items-center gap-1.5">
          <Globe className="w-4 h-4 text-heritage-goldDark" /> Accessibility & Regional Preferences
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-heritage-maroon mt-0.5">
          Language & App Settings
        </h2>
        <p className="text-xs sm:text-sm text-heritage-slate/80">
          Personalize your exploration experience across 8 Indian languages, voice speeds, and accessibility modes.
        </p>
      </div>

      <div className="space-y-6">
        {/* 1. Indian Language Selector */}
        <div className="bg-white rounded-3xl p-6 border border-heritage-sandstone/30 shadow-md">
          <h3 className="text-base font-serif font-bold text-heritage-maroon mb-1 flex items-center gap-2">
            <Globe className="w-4 h-4 text-heritage-goldDark" /> Preferred Indian Language
          </h3>
          <p className="text-xs text-heritage-slate/75 mb-4">
            Select your language for interface labels, captions, and speech synthesizer narration:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {LANGUAGE_LABELS.map((lang) => (
              <button
                key={lang.code}
                onClick={() => onUpdatePreferences({ language: lang.code })}
                className={`p-3.5 rounded-2xl border text-left transition-all ${
                  preferences.language === lang.code
                    ? 'bg-heritage-maroon text-heritage-gold border-heritage-gold ring-2 ring-heritage-gold/30 shadow-md'
                    : 'bg-heritage-ivory text-heritage-slate border-heritage-sandstone/20 hover:border-heritage-gold hover:bg-heritage-cream'
                }`}
              >
                <span className="text-sm font-bold block">{lang.native}</span>
                <span className="text-[11px] opacity-75 block">{lang.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 2. Learning Depth (Beginner vs Scholarly) */}
        <div className="bg-white rounded-3xl p-6 border border-heritage-sandstone/30 shadow-md">
          <h3 className="text-base font-serif font-bold text-heritage-maroon mb-1 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-heritage-goldDark" /> Exploration Depth
          </h3>
          <p className="text-xs text-heritage-slate/75 mb-4">
            Adjust the narrative complexity of historical overviews and architectural insights:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => onUpdatePreferences({ learningDepth: 'beginner' })}
              className={`p-4 rounded-2xl border text-left transition-all ${
                preferences.learningDepth === 'beginner'
                  ? 'bg-heritage-cream border-heritage-maroon ring-2 ring-heritage-maroon/20'
                  : 'bg-heritage-ivory border-heritage-sandstone/20 hover:bg-heritage-cream'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold text-heritage-maroon">
                  Beginner / Tourist Level
                </span>
                {preferences.learningDepth === 'beginner' && (
                  <span className="w-2 h-2 rounded-full bg-heritage-maroon" />
                )}
              </div>
              <p className="text-xs text-heritage-slate/75 leading-relaxed">
                Clear, simple, culturally rich overviews suitable for tourists, young explorers, and casual discovery.
              </p>
            </button>

            <button
              onClick={() => onUpdatePreferences({ learningDepth: 'scholarly' })}
              className={`p-4 rounded-2xl border text-left transition-all ${
                preferences.learningDepth === 'scholarly'
                  ? 'bg-heritage-cream border-heritage-maroon ring-2 ring-heritage-maroon/20'
                  : 'bg-heritage-ivory border-heritage-sandstone/20 hover:bg-heritage-cream'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold text-heritage-maroon">
                  Scholarly / Deep Dive
                </span>
                {preferences.learningDepth === 'scholarly' && (
                  <span className="w-2 h-2 rounded-full bg-heritage-maroon" />
                )}
              </div>
              <p className="text-xs text-heritage-slate/75 leading-relaxed">
                Detailed historiographical analysis, archaeological citations, inscriptional translations, and architectural terms.
              </p>
            </button>
          </div>
        </div>

        {/* 3. Text Size & Accessibility */}
        <div className="bg-white rounded-3xl p-6 border border-heritage-sandstone/30 shadow-md">
          <h3 className="text-base font-serif font-bold text-heritage-maroon mb-1 flex items-center gap-2">
            <Type className="w-4 h-4 text-heritage-goldDark" /> Reading Comfort & Text Size
          </h3>
          <p className="text-xs text-heritage-slate/75 mb-4">
            Adjust readability for easy viewing under sunlight or on small mobile screens:
          </p>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {(
              [
                { id: 'normal', label: 'Standard' },
                { id: 'large', label: 'Large (+20%)' },
                { id: 'xlarge', label: 'Extra Large (+40%)' },
              ] as const
            ).map((size) => (
              <button
                key={size.id}
                onClick={() => onUpdatePreferences({ textSize: size.id })}
                className={`py-3 px-4 rounded-2xl border text-center transition-all ${
                  preferences.textSize === size.id
                    ? 'bg-heritage-maroon text-heritage-gold font-bold border-heritage-gold'
                    : 'bg-heritage-ivory text-heritage-slate border-heritage-sandstone/20'
                }`}
              >
                <span className="text-xs block">{size.label}</span>
              </button>
            ))}
          </div>

          {/* Voice Narration Speed */}
          <div className="pt-4 border-t border-heritage-sandstone/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-heritage-slate flex items-center gap-1.5">
                <Volume2 className="w-4 h-4 text-heritage-maroon" /> Audio Narration Speed
              </span>
              <span className="text-xs font-bold text-heritage-maroon">
                {preferences.voiceSpeed.toFixed(1)}x
              </span>
            </div>
            <input
              type="range"
              min="0.8"
              max="1.2"
              step="0.1"
              value={preferences.voiceSpeed}
              onChange={(e) =>
                onUpdatePreferences({ voiceSpeed: parseFloat(e.target.value) })
              }
              className="w-full accent-heritage-maroon cursor-pointer"
            />
          </div>
        </div>

        {/* 4. Privacy & Local Storage Reset */}
        <div className="bg-white rounded-3xl p-6 border border-heritage-sandstone/30 shadow-md">
          <h3 className="text-base font-serif font-bold text-heritage-maroon mb-1 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-heritage-goldDark" /> Privacy & Local Data Management
          </h3>
          <p className="text-xs text-heritage-slate/75 mb-4">
            BharatDarshan operates with respectful client-side storage by default. You can wipe all cached discoveries and personal notes anytime.
          </p>

          <button
            onClick={() => {
              if (confirm('Clear all saved discoveries, notes, and preferences from this device?')) {
                onClearHistory();
              }
            }}
            className="px-4 py-2.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold rounded-xl hover:bg-rose-100 transition-colors flex items-center gap-2 shadow-sm"
          >
            <Trash2 className="w-4 h-4 text-rose-600" />
            <span>Reset Local History & Saved Items</span>
          </button>
        </div>
      </div>
    </div>
  );
};
