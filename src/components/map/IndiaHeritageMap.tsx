'use client';

import React, { useState, useEffect, useRef } from 'react';
import { HeritageItem } from '@/types/heritage';
import { HERITAGE_ITEMS } from '@/data/heritageData';
import { HERITAGE_TRAILS, HeritageTrail } from '@/data/heritageTrails';
import { MapPin, Navigation, Compass, Search, Filter, Sparkles, Route, ChevronRight } from 'lucide-react';

interface IndiaHeritageMapProps {
  onSelectItem: (item: HeritageItem) => void;
}

export const IndiaHeritageMap: React.FC<IndiaHeritageMapProps> = ({ onSelectItem }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [activeTrail, setActiveTrail] = useState<HeritageTrail | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<HeritageItem | null>(null);
  const [locating, setLocating] = useState(false);

  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const leafletMapRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);

  // Calculate distance between two lat/lng points using Haversine formula
  const calculateDistanceKm = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Radius of earth in km
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

  // Filter items
  const filteredItems = HERITAGE_ITEMS.filter((item) => {
    const matchesQuery =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.name.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedRegion === 'All') return matchesQuery;
    // Map states to regions
    const southStates = ['Tamil Nadu', 'Karnataka', 'Kerala', 'Andhra Pradesh', 'Telangana'];
    const northStates = ['Uttar Pradesh', 'Delhi', 'Punjab', 'Rajasthan', 'Himachal', 'Jammu & Kashmir'];
    const westStates = ['Maharashtra', 'Gujarat', 'Goa'];
    const eastStates = ['Odisha', 'West Bengal', 'Bihar', 'Jharkhand'];
    const neStates = ['Meghalaya', 'Assam', 'Arunachal Pradesh', 'Nagaland', 'Manipur', 'Mizoram', 'Tripura', 'Sikkim'];

    if (selectedRegion === 'South') return matchesQuery && southStates.some((s) => item.location.state.includes(s));
    if (selectedRegion === 'North') return matchesQuery && northStates.some((s) => item.location.state.includes(s));
    if (selectedRegion === 'West') return matchesQuery && westStates.some((s) => item.location.state.includes(s));
    if (selectedRegion === 'East') return matchesQuery && eastStates.some((s) => item.location.state.includes(s));
    if (selectedRegion === 'North-East') return matchesQuery && neStates.some((s) => item.location.state.includes(s));

    return matchesQuery;
  });

  // Request browser geolocation
  const handleRequestLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setLocating(false);

        // Pan map to user location
        if (leafletMapRef.current) {
          leafletMapRef.current.flyTo([pos.coords.latitude, pos.coords.longitude], 7);
        }
      },
      (err) => {
        console.warn('Geolocation denied or timed out', err);
        setLocating(false);
        alert('Location access was denied. You can still explore the heritage map manually.');
      },
      { timeout: 10000 }
    );
  };

  // Initialize Leaflet Map
  useEffect(() => {
    if (typeof window === 'undefined' || !mapContainerRef.current) return;

    let isMounted = true;

    import('leaflet').then((L) => {
      if (!isMounted || !mapContainerRef.current) return;

      // Add Leaflet CSS if not already present
      if (!document.getElementById('leaflet-css')) {
        const link = document.createElement('link');
        link.id = 'leaflet-css';
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
      }

      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
      }

      // India center coordinates: 20.5937, 78.9629
      const map = L.map(mapContainerRef.current, {
        center: [21.5, 78.9],
        zoom: 5,
        minZoom: 4,
        maxZoom: 14,
      });
      leafletMapRef.current = map;

      // Warm antique cartographic / Voyager tiles
      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://carto.com/">CARTO</a> | BharatDarshan Explorer',
          subdomains: 'abcd',
          maxZoom: 19,
        }
      ).addTo(map);

      // Add Heritage Markers
      const customIcon = L.divIcon({
        className: 'custom-heritage-pin',
        html: `<div style="
          background-color: #7C1D24;
          color: #D4AF37;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #D4AF37;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          font-weight: bold;
          font-size: 14px;
        ">🏛</div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
      });

      filteredItems.forEach((item) => {
        const marker = L.marker([item.location.coordinates[0], item.location.coordinates[1]], {
          icon: customIcon,
        }).addTo(map);

        marker.on('click', () => {
          setSelectedMarker(item);
        });

        marker.bindTooltip(
          `<strong>${item.name}</strong><br/><span style="color:#7C1D24">${item.location.state}</span>`,
          { direction: 'top', offset: [0, -28] }
        );

        markersRef.current.push(marker);
      });
    });

    return () => {
      isMounted = false;
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
  }, [filteredItems]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      {/* Title & Filter Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-bold text-heritage-maroon uppercase tracking-wider flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-heritage-goldDark" /> Interactive Geographic Explorer
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-heritage-maroon mt-0.5">
            India Heritage Map & Cultural Trails
          </h2>
          <p className="text-xs sm:text-sm text-heritage-slate/80">
            Discover sacred temples, imperial forts, UNESCO treasures, and regional craft lineages across all Indian states.
          </p>
        </div>

        {/* Location & Trails Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleRequestLocation}
            disabled={locating}
            className="px-4 py-2.5 rounded-xl bg-heritage-maroon text-heritage-gold text-xs font-bold hover:bg-heritage-maroonDark transition-all shadow flex items-center gap-2 whitespace-nowrap"
          >
            <Navigation className={`w-3.5 h-3.5 ${locating ? 'animate-spin' : ''}`} />
            <span>{locating ? 'Finding Location...' : 'Find Heritage Near Me'}</span>
          </button>
        </div>
      </div>

      {/* Region & Search Filters */}
      <div className="bg-white p-4 rounded-2xl border border-heritage-sandstone/30 shadow-sm mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3 top-3 text-heritage-slate/50" />
          <input
            type="text"
            placeholder="Search state, monument, fort..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs pl-9 pr-3 py-2 rounded-xl border border-heritage-sandstone/30 bg-heritage-ivory focus:outline-none focus:ring-2 focus:ring-heritage-maroon"
          />
        </div>

        {/* Region Pills */}
        <div className="flex gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 scrollbar-thin">
          {['All', 'North', 'South', 'East', 'West', 'North-East'].map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors whitespace-nowrap ${
                selectedRegion === region
                  ? 'bg-heritage-maroon text-heritage-gold font-bold shadow-sm'
                  : 'bg-heritage-ivory text-heritage-slate/75 hover:bg-heritage-cream'
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      {/* Map & Detail Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Leaflet Map Canvas */}
        <div className="lg:col-span-2 relative h-[520px] rounded-3xl overflow-hidden border-2 border-heritage-sandstone/40 shadow-xl bg-heritage-ivory">
          <div ref={mapContainerRef} className="w-full h-full z-0" />

          {/* User Location Distance Hint Banner */}
          {userLocation && (
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-heritage-sandstone/40 shadow-md text-xs text-heritage-slate flex items-center gap-2 z-10">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span>
                GPS Located: Showing nearest Indian monuments sorted by distance.
              </span>
            </div>
          )}

          {/* Selected Marker Floating Card */}
          {selectedMarker && (
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border-2 border-heritage-gold shadow-2xl z-10 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in">
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedMarker.thumbnailUrl}
                  alt={selectedMarker.name}
                  className="w-16 h-16 rounded-xl object-cover border border-heritage-sandstone/40 shrink-0"
                />
                <div>
                  <span className="text-[10px] font-bold text-heritage-maroon uppercase tracking-wider block">
                    {selectedMarker.categoryLabel}
                  </span>
                  <h4 className="text-sm font-serif font-bold text-heritage-slate">
                    {selectedMarker.name}
                  </h4>
                  <p className="text-xs text-heritage-slate/75">
                    {selectedMarker.location.name}, {selectedMarker.location.state}
                  </p>
                  {userLocation && (
                    <span className="text-[10px] text-emerald-700 font-bold block mt-0.5">
                      Approx.{' '}
                      {calculateDistanceKm(
                        userLocation.lat,
                        userLocation.lng,
                        selectedMarker.location.coordinates[0],
                        selectedMarker.location.coordinates[1]
                      )}{' '}
                      km from your location
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedMarker(null)}
                  className="px-3 py-2 text-xs font-semibold text-heritage-slate hover:bg-slate-100 rounded-xl"
                >
                  Close
                </button>
                <button
                  onClick={() => onSelectItem(selectedMarker)}
                  className="flex-1 sm:flex-none px-4 py-2 bg-heritage-maroon text-heritage-gold text-xs font-bold rounded-xl hover:bg-heritage-maroonDark transition-all shadow flex items-center justify-center gap-1.5"
                >
                  <span>Explore Detail</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar: Nearby Monuments & Heritage Trails */}
        <div className="space-y-6">
          {/* Heritage Trails Carousel / List */}
          <div className="bg-white rounded-3xl p-5 border border-heritage-sandstone/30 shadow-md">
            <h3 className="text-base font-serif font-bold text-heritage-maroon mb-3 flex items-center gap-2">
              <Route className="w-4 h-4 text-heritage-goldDark" /> Curated Heritage Trails
            </h3>

            <div className="space-y-3">
              {HERITAGE_TRAILS.map((trail) => (
                <div
                  key={trail.id}
                  onClick={() => setActiveTrail(trail)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                    activeTrail?.id === trail.id
                      ? 'bg-heritage-cream border-heritage-gold ring-2 ring-heritage-gold/30'
                      : 'bg-heritage-ivory border-heritage-sandstone/20 hover:border-heritage-gold'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold text-heritage-maroon uppercase tracking-wider">
                      {trail.region} India • {trail.durationDays} Days
                    </span>
                    <span className="text-[10px] bg-white px-2 py-0.5 rounded font-medium text-heritage-slate border border-heritage-sandstone/20">
                      {trail.stops.length} Stops
                    </span>
                  </div>
                  <h4 className="text-xs font-serif font-bold text-heritage-slate">
                    {trail.name}
                  </h4>
                  <p className="text-[11px] text-heritage-slate/75 mt-1 line-clamp-2">
                    {trail.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* List of Monuments on Map */}
          <div className="bg-white rounded-3xl p-5 border border-heritage-sandstone/30 shadow-md">
            <h3 className="text-base font-serif font-bold text-heritage-maroon mb-3 flex items-center justify-between">
              <span>Historical Places ({filteredItems.length})</span>
              <span className="text-xs font-normal text-heritage-slate/60">Tap to locate</span>
            </h3>

            <div className="space-y-2.5 max-h-[300px] overflow-y-auto pr-1 scrollbar-thin">
              {filteredItems.map((item) => {
                const distance = userLocation
                  ? calculateDistanceKm(
                      userLocation.lat,
                      userLocation.lng,
                      item.location.coordinates[0],
                      item.location.coordinates[1]
                    )
                  : null;

                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      setSelectedMarker(item);
                      if (leafletMapRef.current) {
                        leafletMapRef.current.flyTo(
                          [item.location.coordinates[0], item.location.coordinates[1]],
                          9
                        );
                      }
                    }}
                    className="p-2.5 rounded-xl bg-heritage-ivory hover:bg-heritage-cream border border-heritage-sandstone/20 flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.thumbnailUrl}
                        alt={item.name}
                        className="w-10 h-10 rounded-lg object-cover shrink-0"
                      />
                      <div className="min-w-0">
                        <span className="text-xs font-serif font-bold text-heritage-slate block truncate">
                          {item.name}
                        </span>
                        <span className="text-[11px] text-heritage-sandstoneDark block truncate">
                          {item.location.state}
                        </span>
                      </div>
                    </div>

                    {distance !== null ? (
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md shrink-0">
                        {distance} km
                      </span>
                    ) : (
                      <ChevronRight className="w-4 h-4 text-heritage-slate/40 shrink-0" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
