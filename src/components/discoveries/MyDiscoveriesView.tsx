'use client';

import React, { useState, useEffect } from 'react';
import { HeritageItem, SavedDiscovery } from '@/types/heritage';
import {
  getSavedDiscoveries,
  toggleFavoriteDiscovery,
  updateDiscoveryNotes,
  removeDiscovery,
} from '@/utils/storage';
import {
  Bookmark,
  Heart,
  Trash2,
  Edit3,
  Search,
  Filter,
  Download,
  Calendar,
  Sparkles,
  Layers,
  ChevronRight,
  Info,
  Check,
} from 'lucide-react';

interface MyDiscoveriesViewProps {
  onSelectItem: (item: HeritageItem) => void;
  onOpenScan: () => void;
}

export const MyDiscoveriesView: React.FC<MyDiscoveriesViewProps> = ({
  onSelectItem,
  onOpenScan,
}) => {
  const [discoveries, setDiscoveries] = useState<SavedDiscovery[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCollection, setSelectedCollection] = useState<string>('All');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editNoteText, setEditNoteText] = useState('');

  // Load from localStorage on mount
  useEffect(() => {
    setDiscoveries(getSavedDiscoveries());
  }, []);

  const handleToggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = toggleFavoriteDiscovery(id);
    setDiscoveries(updated);
  };

  const handleRemove = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Are you sure you want to remove this item from your discoveries?')) {
      const updated = removeDiscovery(id);
      setDiscoveries(updated);
    }
  };

  const startEditNote = (d: SavedDiscovery, e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingId(d.id);
    setEditNoteText(d.userNotes);
  };

  const saveEditNote = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = updateDiscoveryNotes(id, editNoteText);
    setDiscoveries(updated);
    setEditingId(null);
  };

  // Export collection as JSON
  const handleExportJSON = () => {
    const dataStr =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(discoveries, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute(
      'download',
      `BharatDarshan_Discoveries_${new Date().toISOString().split('T')[0]}.json`
    );
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Filter items
  const filtered = discoveries.filter((d) => {
    const matchesQuery =
      d.item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.userNotes.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.item.location.state.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedCollection === 'All') return matchesQuery;
    if (selectedCollection === 'Favorites') return matchesQuery && d.isFavorite;
    return matchesQuery && d.collection === selectedCollection;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 pb-28">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-bold text-heritage-maroon uppercase tracking-wider flex items-center gap-1.5">
            <Bookmark className="w-4 h-4 text-heritage-goldDark" /> Personal Heritage Journal
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-heritage-maroon mt-0.5">
            My Discoveries
          </h2>
          <p className="text-xs sm:text-sm text-heritage-slate/80">
            Revisit your scanned monuments, personal notes, favorite artifacts, and audio guides.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {discoveries.length > 0 && (
            <button
              onClick={handleExportJSON}
              className="px-3.5 py-2 rounded-xl bg-white border border-heritage-sandstone/40 text-heritage-slate text-xs font-semibold hover:text-heritage-maroon transition-colors shadow-sm flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Journal</span>
            </button>
          )}
          <button
            onClick={onOpenScan}
            className="px-4 py-2 rounded-xl bg-heritage-maroon text-heritage-gold text-xs font-bold hover:bg-heritage-maroonDark transition-all shadow flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Scan New Heritage</span>
          </button>
        </div>
      </div>

      {/* Privacy Notice Banner */}
      <div className="bg-heritage-cream/60 border border-heritage-sandstone/30 rounded-2xl p-4 mb-6 flex items-start gap-3 text-xs text-heritage-slate/80">
        <Info className="w-4 h-4 text-heritage-maroon shrink-0 mt-0.5" />
        <div>
          <strong className="text-heritage-maroon">Guest Storage Notice:</strong> Your discoveries,
          custom photos, and reflections are securely stored in your browser&apos;s local memory
          (localStorage). No private tracking or forced account registration required.
        </div>
      </div>

      {/* Filter & Collection Tabs */}
      <div className="bg-white p-4 rounded-2xl border border-heritage-sandstone/30 shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3 top-3 text-heritage-slate/50" />
          <input
            type="text"
            placeholder="Search saved discoveries & notes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs pl-9 pr-3 py-2 rounded-xl border border-heritage-sandstone/30 bg-heritage-ivory focus:outline-none focus:ring-2 focus:ring-heritage-maroon"
          />
        </div>

        {/* Collections */}
        <div className="flex gap-1.5 overflow-x-auto w-full md:w-auto pb-1 scrollbar-thin">
          {['All', 'Favorites', 'Places', 'Artifacts', 'Instruments', 'Architecture'].map(
            (col) => (
              <button
                key={col}
                onClick={() => setSelectedCollection(col)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors whitespace-nowrap ${
                  selectedCollection === col
                    ? 'bg-heritage-maroon text-heritage-gold font-bold shadow-sm'
                    : 'bg-heritage-ivory text-heritage-slate/75 hover:bg-heritage-cream'
                }`}
              >
                {col}
              </button>
            )
          )}
        </div>
      </div>

      {/* Discoveries Grid */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-heritage-sandstone/30 shadow-md max-w-md mx-auto">
          <Bookmark className="w-12 h-12 text-heritage-sandstone mx-auto mb-3" />
          <h3 className="text-base font-serif font-bold text-heritage-slate mb-1">
            No Discoveries Found
          </h3>
          <p className="text-xs text-heritage-slate/70 mb-4">
            {searchQuery
              ? 'No saved items matched your search query.'
              : 'You haven’t saved any discoveries in this collection yet.'}
          </p>
          <button
            onClick={onOpenScan}
            className="px-4 py-2 bg-heritage-maroon text-heritage-gold text-xs font-bold rounded-xl hover:bg-heritage-maroonDark transition-all shadow"
          >
            Discover Your First Monument
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((discovery) => (
            <div
              key={discovery.id}
              onClick={() => onSelectItem(discovery.item)}
              className="bg-white rounded-3xl overflow-hidden border border-heritage-sandstone/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer group"
            >
              {/* Image Preview */}
              <div className="relative h-48 overflow-hidden bg-neutral-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={discovery.userPhoto || discovery.item.imageUrl}
                  alt={discovery.item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Collection Tag */}
                <span className="absolute top-3 left-3 bg-heritage-maroon/90 text-heritage-gold px-2.5 py-0.5 rounded-full text-[10px] font-bold backdrop-blur-sm shadow">
                  {discovery.collection}
                </span>

                {/* Favorite & Delete Buttons */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5">
                  <button
                    onClick={(e) => handleToggleFavorite(discovery.id, e)}
                    className="p-1.5 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 transition-colors"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        discovery.isFavorite ? 'fill-rose-500 text-rose-500' : 'text-white'
                      }`}
                    />
                  </button>
                  <button
                    onClick={(e) => handleRemove(discovery.id, e)}
                    className="p-1.5 rounded-full bg-black/50 text-white/80 backdrop-blur-sm hover:bg-rose-600 hover:text-white transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Saved Date */}
                <div className="absolute bottom-3 left-3 text-white text-[11px] flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-heritage-gold" />
                  <span>{new Date(discovery.savedAt).toLocaleDateString()}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-serif font-bold text-heritage-maroon group-hover:text-heritage-maroonDark transition-colors">
                    {discovery.item.name}
                  </h4>
                  <p className="text-xs text-heritage-slate/75 mb-3">
                    {discovery.item.location.name}, {discovery.item.location.state}
                  </p>

                  {/* Notes Area */}
                  {editingId === discovery.id ? (
                    <div className="mt-2" onClick={(e) => e.stopPropagation()}>
                      <textarea
                        value={editNoteText}
                        onChange={(e) => setEditNoteText(e.target.value)}
                        rows={2}
                        className="w-full text-xs p-2 rounded-lg border border-heritage-maroon bg-heritage-ivory"
                      />
                      <div className="flex justify-end gap-1.5 mt-1">
                        <button
                          onClick={(e) => saveEditNote(discovery.id, e)}
                          className="px-2.5 py-1 bg-heritage-maroon text-heritage-gold rounded text-[10px] font-bold"
                        >
                          Save Note
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setEditingId(null);
                          }}
                          className="px-2 py-1 bg-slate-200 text-slate-700 rounded text-[10px]"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="bg-heritage-ivory p-3 rounded-xl border border-heritage-sandstone/20 text-xs text-heritage-slate/85 relative group/note"
                      onClick={(e) => startEditNote(discovery, e)}
                    >
                      <p className="line-clamp-2 italic font-serif">
                        &ldquo;{discovery.userNotes}&rdquo;
                      </p>
                      <span className="text-[10px] text-heritage-maroon font-semibold block mt-1 flex items-center gap-1">
                        <Edit3 className="w-3 h-3" /> Tap to edit note
                      </span>
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-heritage-sandstone/20 flex items-center justify-between text-xs text-heritage-maroon font-bold">
                  <span>Explore Heritage & Sound</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
