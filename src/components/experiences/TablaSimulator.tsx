'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Play, Square, Sparkles, Award } from 'lucide-react';
import { audioEngine } from '@/utils/audioEngine';

interface TablaSimulatorProps {
  onClose?: () => void;
}

const TEENTAAL_BOLS = [
  { beat: 1, bol: 'Dha', section: 'Sam (X)' },
  { beat: 2, bol: 'Dhin', section: 'Taali 1' },
  { beat: 3, bol: 'Dhin', section: 'Taali 1' },
  { beat: 4, bol: 'Dha', section: 'Taali 1' },
  { beat: 5, bol: 'Dha', section: 'Taali 2' },
  { beat: 6, bol: 'Dhin', section: 'Taali 2' },
  { beat: 7, bol: 'Dhin', section: 'Taali 2' },
  { beat: 8, bol: 'Dha', section: 'Taali 2' },
  { beat: 9, bol: 'Dha', section: 'Khaali (0)' },
  { beat: 10, bol: 'Tin', section: 'Khaali (0)' },
  { beat: 11, bol: 'Tin', section: 'Khaali (0)' },
  { beat: 12, bol: 'Ta', section: 'Khaali (0)' },
  { beat: 13, bol: 'Ta', section: 'Taali 3' },
  { beat: 14, bol: 'Dhin', section: 'Taali 3' },
  { beat: 15, bol: 'Dhin', section: 'Taali 3' },
  { beat: 16, bol: 'Dha', section: 'Taali 3' },
];

export const TablaSimulator: React.FC<TablaSimulatorProps> = ({ onClose }) => {
  const [activeBol, setActiveBol] = useState<string | null>(null);
  const [isLooping, setIsLooping] = useState(false);
  const [currentBeat, setCurrentBeat] = useState(1);
  const [tempoBpm, setTempoBpm] = useState(100);

  const loopTimerRef = useRef<NodeJS.Timeout | null>(null);
  const currentBeatRef = useRef(currentBeat);
  currentBeatRef.current = currentBeat;

  const triggerBol = (bol: 'Na' | 'Tin' | 'Ge' | 'Ke' | 'Dha' | 'Dhin') => {
    setActiveBol(bol);
    audioEngine.playTablaStroke(bol);
    setTimeout(() => {
      setActiveBol(null);
    }, 180);
  };

  const toggleTeentaalLoop = () => {
    if (isLooping) {
      if (loopTimerRef.current) clearInterval(loopTimerRef.current);
      setIsLooping(false);
      setCurrentBeat(1);
      return;
    }

    setIsLooping(true);
    const intervalMs = (60 / tempoBpm) * 1000;

    let beat = 1;
    setCurrentBeat(beat);
    const bolItem = TEENTAAL_BOLS[beat - 1];
    audioEngine.playTablaStroke(bolItem.bol === 'Ta' ? 'Na' : (bolItem.bol as 'Na' | 'Tin' | 'Ge' | 'Ke' | 'Dha' | 'Dhin'));

    loopTimerRef.current = setInterval(() => {
      beat = beat >= 16 ? 1 : beat + 1;
      setCurrentBeat(beat);
      const curBol = TEENTAAL_BOLS[beat - 1];
      const stroke = curBol.bol === 'Ta' ? 'Na' : (curBol.bol as 'Na' | 'Tin' | 'Ge' | 'Ke' | 'Dha' | 'Dhin');
      audioEngine.playTablaStroke(stroke);
    }, intervalMs);
  };

  useEffect(() => {
    return () => {
      if (loopTimerRef.current) clearInterval(loopTimerRef.current);
    };
  }, []);

  return (
    <div className="bg-heritage-ivory rounded-2xl border-2 border-heritage-sandstone/40 p-6 shadow-xl max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-heritage-sandstone/30 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-700 text-white tracking-wide">
              PERCUSSION LAB
            </span>
            <span className="text-xs text-heritage-sandstoneDark font-medium">Avanaddha Vadya</span>
          </div>
          <h3 className="text-2xl font-serif text-heritage-maroon font-bold mt-1">
            Tabla Acoustic Rhythm Studio
          </h3>
          <p className="text-sm text-heritage-slate/80">
            Play authentic spoken Bols (syllables) and explore the classical 16-beat Teentaal cycle.
          </p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-heritage-slate/60 hover:text-heritage-maroon transition-colors p-2 text-xl font-bold"
          >
            ×
          </button>
        )}
      </div>

      {/* Visual Drum Pads (Dayan & Bayan) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {/* Bayan (Left Bass Drum - Copper/Brass) */}
        <div className="bg-gradient-to-b from-amber-900/10 to-amber-700/20 rounded-2xl p-5 border border-amber-800/30 flex flex-col items-center">
          <div className="flex items-center justify-between w-full mb-3">
            <span className="text-xs font-bold text-amber-950 uppercase tracking-wider">
              Bayan (Dagga - Bass)
            </span>
            <span className="text-[11px] bg-amber-800 text-white px-2 py-0.5 rounded-full">
              Copper / Brass
            </span>
          </div>

          {/* Drum Skin Graphic */}
          <div className="relative w-40 h-40 rounded-full bg-[#E5D4C0] border-4 border-[#8B4513] shadow-lg flex items-center justify-center mb-4">
            {/* Outer Maidan ring */}
            <div className="absolute inset-2 rounded-full border border-amber-900/40 pointer-events-none" />
            {/* Off-center Syahi */}
            <button
              onClick={() => triggerBol('Ge')}
              className={`w-20 h-20 rounded-full bg-neutral-900 border-2 border-neutral-700 flex flex-col items-center justify-center text-heritage-gold shadow-md transition-transform active:scale-90 ${
                activeBol === 'Ge' ? 'ring-4 ring-amber-500 scale-95' : 'hover:scale-105'
              }`}
            >
              <span className="text-base font-bold">Ge / Ghe</span>
              <span className="text-[9px] text-amber-300">Bass Pitch Bend</span>
            </button>
          </div>

          {/* Individual Stroke Buttons */}
          <div className="flex gap-2 w-full">
            <button
              onClick={() => triggerBol('Ge')}
              className="flex-1 py-2 bg-neutral-800 text-amber-200 text-xs font-bold rounded-lg hover:bg-neutral-900 shadow transition-all active:scale-95"
            >
              Ge (Deep Bass)
            </button>
            <button
              onClick={() => triggerBol('Ke')}
              className="flex-1 py-2 bg-neutral-700 text-neutral-200 text-xs font-bold rounded-lg hover:bg-neutral-800 shadow transition-all active:scale-95"
            >
              Ke (Muted Flat)
            </button>
          </div>
        </div>

        {/* Dayan (Right Treble Drum - Seasoned Sheesham Wood) */}
        <div className="bg-gradient-to-b from-heritage-maroon/10 to-amber-900/15 rounded-2xl p-5 border border-heritage-maroon/30 flex flex-col items-center">
          <div className="flex items-center justify-between w-full mb-3">
            <span className="text-xs font-bold text-heritage-maroon uppercase tracking-wider">
              Dayan (Treble Drum)
            </span>
            <span className="text-[11px] bg-heritage-maroon text-heritage-gold px-2 py-0.5 rounded-full">
              Sheesham Wood (Sa)
            </span>
          </div>

          {/* Drum Skin Graphic */}
          <div className="relative w-36 h-36 rounded-full bg-[#FAF0E6] border-4 border-[#5C2C16] shadow-lg flex items-center justify-center mb-4">
            {/* Kinar rim */}
            <button
              onClick={() => triggerBol('Na')}
              className="absolute inset-0 rounded-full flex items-start justify-center pt-1 hover:bg-amber-200/20 active:scale-95 transition-all"
            >
              <span className="text-[10px] font-bold text-amber-900">Kinar (Rim)</span>
            </button>
            {/* Centered Syahi */}
            <button
              onClick={() => triggerBol('Tin')}
              className={`w-16 h-16 rounded-full bg-neutral-950 border-2 border-neutral-700 flex flex-col items-center justify-center text-heritage-gold shadow-md z-10 transition-transform active:scale-90 ${
                activeBol === 'Tin' ? 'ring-4 ring-rose-500 scale-95' : 'hover:scale-105'
              }`}
            >
              <span className="text-sm font-bold">Tin</span>
              <span className="text-[9px] text-amber-300">Sur Note</span>
            </button>
          </div>

          {/* Individual Stroke Buttons */}
          <div className="flex gap-2 w-full">
            <button
              onClick={() => triggerBol('Na')}
              className="flex-1 py-2 bg-heritage-maroon text-heritage-gold text-xs font-bold rounded-lg hover:bg-heritage-maroonDark shadow transition-all active:scale-95"
            >
              Na / Ta (Bell Ring)
            </button>
            <button
              onClick={() => triggerBol('Tin')}
              className="flex-1 py-2 bg-amber-800 text-amber-100 text-xs font-bold rounded-lg hover:bg-amber-900 shadow transition-all active:scale-95"
            >
              Tin (Sur Note)
            </button>
          </div>
        </div>
      </div>

      {/* Composite Strokes (Dha & Dhin) */}
      <div className="bg-white p-4 rounded-xl border border-heritage-sandstone/30 mb-6">
        <span className="text-xs font-bold uppercase tracking-wide text-heritage-slate/80 block mb-2">
          Combined Joint Strokes (Dayan + Bayan)
        </span>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => triggerBol('Dha')}
            className={`py-3 px-4 rounded-xl font-serif text-sm font-bold flex items-center justify-between border-2 transition-all ${
              activeBol === 'Dha'
                ? 'bg-amber-100 border-amber-600 shadow-inner'
                : 'bg-heritage-cream/50 border-amber-800/20 hover:bg-amber-50 hover:border-amber-700'
            }`}
          >
            <div className="text-left">
              <span className="text-lg text-heritage-maroon block font-bold">DHA</span>
              <span className="text-[10px] text-heritage-slate/70">Na (Dayan) + Ge (Bayan)</span>
            </div>
            <Volume2 className="w-5 h-5 text-heritage-goldDark" />
          </button>

          <button
            onClick={() => triggerBol('Dhin')}
            className={`py-3 px-4 rounded-xl font-serif text-sm font-bold flex items-center justify-between border-2 transition-all ${
              activeBol === 'Dhin'
                ? 'bg-amber-100 border-amber-600 shadow-inner'
                : 'bg-heritage-cream/50 border-amber-800/20 hover:bg-amber-50 hover:border-amber-700'
            }`}
          >
            <div className="text-left">
              <span className="text-lg text-heritage-maroon block font-bold">DHIN</span>
              <span className="text-[10px] text-heritage-slate/70">Tin (Dayan) + Ge (Bayan)</span>
            </div>
            <Volume2 className="w-5 h-5 text-heritage-goldDark" />
          </button>
        </div>
      </div>

      {/* Classical Teentaal Rhythmic Cycle Player */}
      <div className="bg-heritage-cream/60 rounded-xl p-5 border border-heritage-sandstone/30">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-heritage-maroon flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-heritage-gold" /> Classical Teentaal Loop (16 Beats)
              </span>
              <span className="text-[10px] text-heritage-slate/60 bg-white px-2 py-0.5 rounded border">
                4 Vibhags (4+4+4+4)
              </span>
            </div>
            <p className="text-xs text-heritage-slate/80 mt-0.5">
              Watch the beats illuminate on the cycle as you play.
            </p>
          </div>
          <button
            onClick={toggleTeentaalLoop}
            className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 shadow transition-all ${
              isLooping
                ? 'bg-rose-600 text-white hover:bg-rose-700'
                : 'bg-heritage-maroon text-heritage-gold hover:bg-heritage-maroonDark'
            }`}
          >
            {isLooping ? <Square className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {isLooping ? 'Stop Teentaal' : 'Play Teentaal Loop'}
          </button>
        </div>

        {/* 16 Beats Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-8 md:grid-cols-16 gap-1.5 mb-3">
          {TEENTAAL_BOLS.map((item) => (
            <div
              key={item.beat}
              className={`p-1.5 rounded-lg text-center border transition-all ${
                isLooping && currentBeat === item.beat
                  ? 'bg-heritage-maroon text-heritage-gold border-heritage-gold ring-2 ring-heritage-gold scale-105 font-bold shadow'
                  : item.beat === 1
                  ? 'bg-amber-100 border-amber-400 text-amber-900 font-bold'
                  : item.beat === 9
                  ? 'bg-slate-100 border-slate-300 text-slate-600'
                  : 'bg-white border-heritage-sandstone/20 text-heritage-slate'
              }`}
            >
              <span className="text-[9px] block text-inherit opacity-75">{item.beat}</span>
              <span className="text-xs font-serif font-bold block">{item.bol}</span>
            </div>
          ))}
        </div>

        {/* C.V. Raman Nobel Citation */}
        <div className="flex items-start gap-2 bg-white/80 p-2.5 rounded-lg border border-heritage-sandstone/20 text-[11px] text-heritage-slate/80">
          <Award className="w-4 h-4 text-heritage-gold shrink-0 mt-0.5" />
          <span>
            <strong>Did You Know:</strong> Sir C.V. Raman proved that unlike Western flat drums that generate disharmonious overtone noise, the Indian Tabla produces exact integer harmonic frequencies (1:2:3:4), creating a singing tone.
          </span>
        </div>
      </div>
    </div>
  );
};
