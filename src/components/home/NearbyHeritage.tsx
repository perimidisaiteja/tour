'use client';

import React, { useState } from 'react';
import { HeritageItem, SupportedLanguage } from '@/types/heritage';
import { TRANSLATIONS } from '@/data/translations';
import { Navigation, MapPin, Sparkles, ChevronRight, Compass } from 'lucide-react';

interface NearbyHeritageProps {
  items: HeritageItem[];
  language: SupportedLanguage;
  onSelectItem: (item: HeritageItem) => void;
  onExploreMap: () => void;
}

export const NearbyHeritage: React.FC<NearbyHeritageProps> = ({
  items,
  language,
  onSelectItem,
  onExploreMap,
}) => {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLocating, setIsLocating] = useState(false);

  // Haversine formula
  const calculateDistanceKm = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c);
  };

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLocating(false);
      },
      (err) => {
        console.warn('Geolocation error', err);
        setIsLocating(false);
        alert('Location access was denied. You can browse heritage destinations manually.');
      },
      { timeout: 8000 }
    );
  };

  // Sort items by distance if location available, otherwise take first 4
  const sortedItems = userLocation
    ? [...items]
        .map((it) => ({
          ...it,
          distanceKm: calculateDistanceKm(
            userLocation.lat,
            userLocation.lng,
            it.location.coordinates[0],
            it.location.coordinates[1]
          ),
        }))
        .sort((a, b) => a.distanceKm - b.distanceKm)
        .slice(0, 4)
    : items.slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 my-10">
      <div className="bg-gradient-to-br from-heritage-cream/70 via-heritage-ivory to-white rounded-3xl p-6 sm:p-8 border border-heritage-sandstone/30 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-bold text-heritage-maroon uppercase tracking-wider flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-heritage-goldDark" /> Geo-Discovery
            </span>
            <h2 className="text-2xl font-serif font-bold text-heritage-maroon mt-1">
              {t.nearbyHeritageTitle}
            </h2>
            <p className="text-xs sm:text-sm text-heritage-slate/80 mt-0.5">
              {t.nearbyHeritageSubtitle}
            </p>
          </div>

          {!userLocation ? (
            <button
              onClick={handleGetLocation}
              disabled={isLocating}
              className="px-4 py-2.5 rounded-xl bg-heritage-maroon text-heritage-gold font-bold text-xs hover:bg-heritage-maroonDark transition-all shadow flex items-center gap-2 self-start sm:self-auto"
            >
              <Navigation className={`w-3.5 h-3.5 ${isLocating ? 'animate-spin' : ''}`} />
              <span>{isLocating ? 'Determining GPS...' : t.enableLocation}</span>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Sorted by Distance
              </span>
              <button
                onClick={onExploreMap}
                className="text-xs text-heritage-maroon hover:underline font-bold"
              >
                View on Map →
              </button>
            </div>
          )}
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sortedItems.map((item) => {
            const distance = (item as any).distanceKm;
            return (
              <div
                key={item.id}
                onClick={() => onSelectItem(item)}
                className="bg-white p-3.5 rounded-2xl border border-heritage-sandstone/25 shadow-sm hover:shadow-md hover:border-heritage-gold transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div className="relative h-32 rounded-xl overflow-hidden mb-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.thumbnailUrl}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {distance !== undefined && (
                    <span className="absolute top-2 right-2 bg-black/75 text-emerald-300 px-2 py-0.5 rounded-md text-[10px] font-bold backdrop-blur-sm">
                      {distance} km away
                    </span>
                  )}
                </div>

                <div>
                  <h4 className="text-sm font-serif font-bold text-heritage-slate group-hover:text-heritage-maroon transition-colors line-clamp-1">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-heritage-sandstoneDark flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-heritage-goldDark" />
                    {item.location.name}, {item.location.state}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-heritage-sandstone/15 flex items-center justify-between text-[11px] text-heritage-maroon font-bold">
                  <span>Explore Monument</span>
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
