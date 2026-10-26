'use client';

import React, { useState, useEffect } from 'react';
import { HeritageItem, SupportedLanguage, UserPreferences } from '@/types/heritage';
import { HERITAGE_ITEMS, searchHeritageItems } from '@/data/heritageData';
import { getUserPreferences, saveUserPreferences } from '@/utils/storage';
import { Navbar } from '@/components/navigation/Navbar';
import { BottomNav } from '@/components/navigation/BottomNav';
import { HeroSection } from '@/components/home/HeroSection';
import { CuratedCollections } from '@/components/home/CuratedCollections';
import { NearbyHeritage } from '@/components/home/NearbyHeritage';
import { QuickScanDemo } from '@/components/home/QuickScanDemo';
import { CameraModal } from '@/components/camera/CameraModal';
import { DiscoveryDetail } from '@/components/detail/DiscoveryDetail';
import { IndiaHeritageMap } from '@/components/map/IndiaHeritageMap';
import { MyDiscoveriesView } from '@/components/discoveries/MyDiscoveriesView';
import { ProfileSettings } from '@/components/profile/ProfileSettings';

export default function HomePage() {
  const [currentView, setCurrentView] = useState<
    'home' | 'explore' | 'discoveries' | 'profile' | 'detail'
  >('home');
  const [selectedItem, setSelectedItem] = useState<HeritageItem | null>(null);
  const [userCapturedPhoto, setUserCapturedPhoto] = useState<string | undefined>(undefined);
  const [isScanModalOpen, setIsScanModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [preferences, setPreferences] = useState<UserPreferences>({
    language: 'en',
    learningDepth: 'beginner',
    textSize: 'normal',
    highContrast: false,
    voiceSpeed: 1.0,
  });

  // Load user preferences on mount
  useEffect(() => {
    setPreferences(getUserPreferences());
  }, []);

  const handleUpdatePreferences = (newPrefs: Partial<UserPreferences>) => {
    const updated = saveUserPreferences(newPrefs);
    setPreferences(updated);
  };

  const handleClearHistory = () => {
    if (typeof window !== 'undefined') {
      localStorage.clear();
      setPreferences(getUserPreferences());
      setCurrentView('home');
      alert('Local history and cache cleared successfully.');
    }
  };

  // Open Discovery Detail
  const handleSelectItem = (item: HeritageItem, photo?: string) => {
    setSelectedItem(item);
    setUserCapturedPhoto(photo);
    setCurrentView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigation handlers
  const handleNavigate = (view: 'home' | 'explore' | 'discoveries' | 'profile') => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Search filtered items for home view
  const searchResults = searchQuery ? searchHeritageItems(searchQuery) : HERITAGE_ITEMS;

  return (
    <div
      className={`min-h-screen bg-heritage-ivory flex flex-col justify-between ${
        preferences.highContrast ? 'high-contrast' : ''
      } ${
        preferences.textSize === 'large'
          ? 'text-lg'
          : preferences.textSize === 'xlarge'
          ? 'text-xl'
          : 'text-base'
      }`}
    >
      {/* Top Navbar */}
      <Navbar
        currentView={currentView === 'detail' ? 'home' : currentView}
        language={preferences.language}
        onNavigate={handleNavigate}
        onOpenScan={() => setIsScanModalOpen(true)}
        onSelectLanguage={(lang: SupportedLanguage) =>
          handleUpdatePreferences({ language: lang })
        }
      />

      {/* Main View Router */}
      <main className="flex-1">
        {/* 1. DISCOVERY DETAIL VIEW */}
        {currentView === 'detail' && selectedItem && (
          <DiscoveryDetail
            item={selectedItem}
            language={preferences.language}
            learningDepth={preferences.learningDepth}
            userPhoto={userCapturedPhoto}
            onBack={() => setCurrentView('home')}
            onSelectRelated={(related) => handleSelectItem(related)}
          />
        )}

        {/* 2. EXPLORE MAP VIEW */}
        {currentView === 'explore' && (
          <IndiaHeritageMap onSelectItem={(item) => handleSelectItem(item)} />
        )}

        {/* 3. MY DISCOVERIES PERSONAL JOURNAL VIEW */}
        {currentView === 'discoveries' && (
          <MyDiscoveriesView
            onSelectItem={(item) => handleSelectItem(item)}
            onOpenScan={() => setIsScanModalOpen(true)}
          />
        )}

        {/* 4. PROFILE & SETTINGS VIEW */}
        {currentView === 'profile' && (
          <ProfileSettings
            preferences={preferences}
            onUpdatePreferences={handleUpdatePreferences}
            onClearHistory={handleClearHistory}
          />
        )}

        {/* 5. HOME VIEW */}
        {currentView === 'home' && (
          <div className="animate-fade-in pb-20">
            {/* Hero Section */}
            <HeroSection
              language={preferences.language}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onOpenScan={() => setIsScanModalOpen(true)}
              onExploreMap={() => handleNavigate('explore')}
            />

            {/* Quick Instant Scan Demo Row */}
            <QuickScanDemo
              items={HERITAGE_ITEMS}
              language={preferences.language}
              onSelectItem={(item) => handleSelectItem(item)}
              onOpenScan={() => setIsScanModalOpen(true)}
            />

            {/* Nearby Heritage based on GPS */}
            <NearbyHeritage
              items={HERITAGE_ITEMS}
              language={preferences.language}
              onSelectItem={(item) => handleSelectItem(item)}
              onExploreMap={() => handleNavigate('explore')}
            />

            {/* Curated Collections with 7 Categories */}
            <CuratedCollections
              items={searchResults}
              language={preferences.language}
              onSelectItem={(item) => handleSelectItem(item)}
            />
          </div>
        )}
      </main>

      {/* Global AI Camera Modal */}
      {isScanModalOpen && (
        <CameraModal
          language={preferences.language}
          onSelectDiscovery={(item, photo) => handleSelectItem(item, photo)}
          onClose={() => setIsScanModalOpen(false)}
        />
      )}

      {/* Mobile Bottom Navigation */}
      <BottomNav
        currentView={currentView === 'detail' ? 'home' : currentView}
        language={preferences.language}
        onNavigate={handleNavigate}
        onOpenScan={() => setIsScanModalOpen(true)}
      />

      {/* Footer */}
      <footer className="hidden md:block bg-neutral-950 text-white/80 border-t border-heritage-sandstone/30 py-8 px-6 text-center text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg font-bold text-heritage-gold">
              BharatDarshan
            </span>
            <span className="text-white/40">•</span>
            <span className="text-neutral-400">
              India’s Interactive AI Heritage Explorer
            </span>
          </div>

          <p className="text-neutral-400">
            Conceived as a tribute to India&apos;s architecture, instruments, warriors, and indigenous wisdom.
          </p>

          <div className="flex items-center gap-4 text-heritage-gold">
            <button onClick={() => handleNavigate('explore')} className="hover:underline">
              India Map
            </button>
            <button onClick={() => handleNavigate('discoveries')} className="hover:underline">
              My Discoveries
            </button>
            <button onClick={() => handleNavigate('profile')} className="hover:underline">
              Language Settings
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
