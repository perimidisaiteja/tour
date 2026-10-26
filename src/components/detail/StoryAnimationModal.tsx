'use client';

import React, { useState, useEffect, useRef } from 'react';
import { HeritageItem, StoryScene, SupportedLanguage } from '@/types/heritage';
import { speakText, stopSpeaking, TRANSLATIONS } from '@/data/translations';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShieldAlert,
  BookOpen,
} from 'lucide-react';

interface StoryAnimationModalProps {
  item: HeritageItem;
  language: SupportedLanguage;
  onClose: () => void;
}

export const StoryAnimationModal: React.FC<StoryAnimationModalProps> = ({
  item,
  language,
  onClose,
}) => {
  const scenes = item.story.scenes;
  const [currentSceneIdx, setCurrentSceneIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(true);
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState<'story' | 'detailed'>('story');

  const scene = scenes[currentSceneIdx] || scenes[0];
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const SCENE_DURATION_MS = mode === 'story' ? 7000 : 11000;

  // Speak current scene narration
  useEffect(() => {
    if (isVoiceEnabled && scene) {
      speakText(scene.narration, language);
    } else {
      stopSpeaking();
    }

    return () => {
      stopSpeaking();
    };
  }, [currentSceneIdx, isVoiceEnabled, language, scene]);

  // Handle scene playback progress
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    setProgress(0);
    const stepTime = 100;
    const increment = (stepTime / SCENE_DURATION_MS) * 100;

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Advance to next scene
          if (currentSceneIdx < scenes.length - 1) {
            setCurrentSceneIdx((curr) => curr + 1);
            return 0;
          } else {
            setIsPlaying(false);
            return 100;
          }
        }
        return prev + increment;
      });
    }, stepTime);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentSceneIdx, isPlaying, SCENE_DURATION_MS, scenes.length]);

  const handleNext = () => {
    if (currentSceneIdx < scenes.length - 1) {
      setCurrentSceneIdx((prev) => prev + 1);
      setProgress(0);
    }
  };

  const handlePrev = () => {
    if (currentSceneIdx > 0) {
      setCurrentSceneIdx((prev) => prev - 1);
      setProgress(0);
    }
  };

  const handleReplay = () => {
    setCurrentSceneIdx(0);
    setProgress(0);
    setIsPlaying(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="bg-neutral-900 border-2 border-heritage-gold/40 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        {/* Top Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-neutral-950 via-heritage-maroonDark to-neutral-950 border-b border-heritage-gold/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-heritage-gold/20 border border-heritage-gold flex items-center justify-center text-heritage-gold">
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <span className="text-[11px] font-bold text-heritage-gold uppercase tracking-wider">
                Bring History to Life
              </span>
              <h2 className="text-lg font-serif font-bold text-white leading-tight">
                {item.story.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Short vs Detailed Mode Toggle */}
            <div className="hidden sm:flex bg-black/50 p-1 rounded-xl border border-white/10 text-xs">
              <button
                onClick={() => setMode('story')}
                className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                  mode === 'story'
                    ? 'bg-heritage-maroon text-white font-bold'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Story Mode
              </button>
              <button
                onClick={() => setMode('detailed')}
                className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                  mode === 'detailed'
                    ? 'bg-heritage-maroon text-white font-bold'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Detailed Mode
              </button>
            </div>

            <button
              onClick={() => {
                stopSpeaking();
                onClose();
              }}
              className="text-white/60 hover:text-white text-2xl font-bold w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-colors"
            >
              ×
            </button>
          </div>
        </div>

        {/* Story Progress Bars (Stories style) */}
        <div className="flex items-center gap-1.5 px-6 pt-3 bg-neutral-950">
          {scenes.map((sc, idx) => (
            <div
              key={idx}
              onClick={() => {
                setCurrentSceneIdx(idx);
                setProgress(0);
              }}
              className="flex-1 h-1.5 rounded-full bg-white/20 overflow-hidden cursor-pointer"
            >
              <div
                className="h-full bg-heritage-gold transition-all duration-100"
                style={{
                  width:
                    idx < currentSceneIdx
                      ? '100%'
                      : idx === currentSceneIdx
                      ? `${progress}%`
                      : '0%',
                }}
              />
            </div>
          ))}
        </div>

        {/* Scene Content Area */}
        <div className="relative flex-1 overflow-y-auto p-6 flex flex-col md:flex-row gap-6 items-center">
          {/* Illustrated Scene Image */}
          <div className="relative w-full md:w-1/2 aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 shadow-xl shrink-0 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={scene.image}
              alt={scene.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

            {/* Historical Status Badge */}
            <div className="absolute top-3 left-3">
              {scene.isArtisticReconstruction ? (
                <span className="flex items-center gap-1 bg-amber-500/90 backdrop-blur-md text-black px-2.5 py-1 rounded-full text-[10px] font-bold shadow">
                  <ShieldAlert className="w-3 h-3" /> Artistic Reconstruction
                </span>
              ) : (
                <span className="flex items-center gap-1 bg-emerald-600/90 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-[10px] font-bold shadow">
                  <BookOpen className="w-3 h-3" /> Documented Evidence
                </span>
              )}
            </div>

            <div className="absolute bottom-3 left-3 right-3 text-white">
              <span className="text-[11px] text-heritage-gold font-medium block">
                {scene.period} • Scene {currentSceneIdx + 1} of {scenes.length}
              </span>
              <h3 className="text-base font-serif font-bold text-white mt-0.5">{scene.title}</h3>
            </div>
          </div>

          {/* Scene Explanation & Narration Captions */}
          <div className="flex-1 text-white flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold text-heritage-gold tracking-widest uppercase">
                  Chapter {currentSceneIdx + 1}: {scene.title}
                </span>
              </div>

              {/* Spoken Narration Quote Card */}
              <div className="p-4 rounded-xl bg-white/5 border border-heritage-gold/20 mb-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-heritage-gold mb-1.5">
                  <Volume2 className="w-3.5 h-3.5" /> Spoken Narration
                </div>
                <p className="text-sm text-neutral-200 leading-relaxed font-serif italic">
                  &ldquo;{scene.narration}&rdquo;
                </p>
              </div>

              {/* Historical Context Caption */}
              <p className="text-xs text-neutral-300 leading-relaxed bg-black/40 p-3 rounded-lg border border-white/5">
                {scene.caption}
              </p>
            </div>

            {/* Historical Integrity Disclaimer */}
            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-neutral-400">
              {scene.isArtisticReconstruction
                ? 'Note: Visual composition represents a grounded artistic dramatization informed by archaeological literature and oral traditions.'
                : 'Verified Archaeological Context: Documented from excavation reports, inscriptions, and literary accounts.'}
            </div>
          </div>
        </div>

        {/* Bottom Playback Control Bar */}
        <div className="px-6 py-4 bg-neutral-950 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsVoiceEnabled(!isVoiceEnabled)}
              title={isVoiceEnabled ? 'Mute Voice Narration' : 'Enable Voice Narration'}
              className={`p-2.5 rounded-xl border transition-colors ${
                isVoiceEnabled
                  ? 'bg-heritage-gold/20 border-heritage-gold text-heritage-gold'
                  : 'bg-white/5 border-white/10 text-white/50 hover:text-white'
              }`}
            >
              {isVoiceEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={handleReplay}
              title="Replay from Scene 1"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* Center Play / Pause / Previous / Next */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={currentSceneIdx === 0}
              className="p-2.5 rounded-full bg-white/10 text-white disabled:opacity-30 hover:bg-white/20 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-4 rounded-full bg-heritage-gold text-neutral-950 font-bold hover:scale-105 transition-all shadow-lg shadow-heritage-gold/20"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
            </button>

            <button
              onClick={handleNext}
              disabled={currentSceneIdx === scenes.length - 1}
              className="p-2.5 rounded-full bg-white/10 text-white disabled:opacity-30 hover:bg-white/20 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Scene Indicator */}
          <span className="text-xs text-white/70 font-mono">
            {currentSceneIdx + 1} / {scenes.length}
          </span>
        </div>
      </div>
    </div>
  );
};
