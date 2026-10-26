'use client';

import React, { useState } from 'react';
import { HeritageItem, SupportedLanguage, LearningDepth } from '@/types/heritage';
import { TRANSLATIONS, speakText, stopSpeaking } from '@/data/translations';
import { saveDiscoveryItem } from '@/utils/storage';
import { audioEngine } from '@/utils/audioEngine';
import { ThreeDViewer } from './ThreeDViewer';
import { StoryAnimationModal } from './StoryAnimationModal';
import { BansuriSimulator } from '../experiences/BansuriSimulator';
import { TablaSimulator } from '../experiences/TablaSimulator';
import confetti from 'canvas-confetti';
import {
  MapPin,
  Clock,
  Sparkles,
  BookOpen,
  Volume2,
  VolumeX,
  Share2,
  Bookmark,
  Check,
  PlayCircle,
  Gamepad2,
  ExternalLink,
  ChevronRight,
  Layers,
  Award,
  Shield,
  Lightbulb,
} from 'lucide-react';

interface DiscoveryDetailProps {
  item: HeritageItem;
  language: SupportedLanguage;
  learningDepth: LearningDepth;
  userPhoto?: string;
  onBack: () => void;
  onSelectRelated?: (relatedItem: HeritageItem) => void;
}

export const DiscoveryDetail: React.FC<DiscoveryDetailProps> = ({
  item,
  language,
  learningDepth: initialDepth,
  userPhoto,
  onBack,
}) => {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  const [activeTab, setActiveTab] = useState<
    'overview' | 'history' | 'howItWorks' | 'listen' | 'story' | 'threeD' | 'didYouKnow'
  >('overview');
  const [learningDepth, setLearningDepth] = useState<LearningDepth>(initialDepth);
  const [isSaved, setIsSaved] = useState(false);
  const [userNotes, setUserNotes] = useState('');
  const [showStoryModal, setShowStoryModal] = useState(false);
  const [showSimulatorModal, setShowSimulatorModal] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);

  // Native name in selected language if available
  const localizedNativeName = item.nativeNames[language] || item.name;

  // Handle Save
  const handleSave = () => {
    saveDiscoveryItem(item, userNotes, userPhoto);
    setIsSaved(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#D4AF37', '#7C1D24', '#C86446'],
    });
    setTimeout(() => setIsSaved(false), 3000);
  };

  // Handle Speech Narration
  const toggleNarration = () => {
    if (isSpeaking) {
      stopSpeaking();
      setIsSpeaking(false);
    } else {
      const textToSpeak =
        learningDepth === 'beginner' ? item.overview.beginner : item.overview.scholarly;
      speakText(`${item.name}. ${textToSpeak}`, language);
      setIsSpeaking(true);
    }
  };

  // Handle Share
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `BharatDarshan — ${item.name}`,
          text: item.tagline,
          url: window.location.href,
        });
      } catch {}
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShareSuccess(true);
      setTimeout(() => setShareSuccess(false), 2500);
    }
  };

  // Play authentic acoustic tone
  const playAcousticSample = () => {
    if (item.howItWorks.interactiveType === 'bansuri') {
      audioEngine.startBansuri(392, 0.7);
      setTimeout(() => audioEngine.stopBansuri(), 2500);
    } else if (item.howItWorks.interactiveType === 'tabla') {
      audioEngine.playTablaStroke('Dha');
      setTimeout(() => audioEngine.playTablaStroke('Dhin'), 400);
      setTimeout(() => audioEngine.playTablaStroke('Ge'), 800);
    } else {
      audioEngine.playTempleBell();
    }
  };

  return (
    <div className="min-h-screen bg-heritage-ivory pb-28 pt-4">
      {/* Top Breadcrumb & Action Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-4">
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-heritage-slate/80 hover:text-heritage-maroon transition-colors bg-white px-3 py-1.5 rounded-full border border-heritage-sandstone/30 shadow-sm"
          >
            ← Back to Explorations
          </button>

          <div className="flex items-center gap-2">
            {/* Depth Mode Switcher */}
            <div className="bg-heritage-cream border border-heritage-sandstone/30 p-1 rounded-xl flex text-xs">
              <button
                onClick={() => setLearningDepth('beginner')}
                className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                  learningDepth === 'beginner'
                    ? 'bg-heritage-maroon text-white font-bold shadow-sm'
                    : 'text-heritage-slate/70 hover:text-heritage-maroon'
                }`}
              >
                {t.depthBeginner}
              </button>
              <button
                onClick={() => setLearningDepth('scholarly')}
                className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                  learningDepth === 'scholarly'
                    ? 'bg-heritage-maroon text-white font-bold shadow-sm'
                    : 'text-heritage-slate/70 hover:text-heritage-maroon'
                }`}
              >
                {t.depthScholarly}
              </button>
            </div>

            {/* Save Button */}
            <button
              onClick={handleSave}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow transition-all ${
                isSaved
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-heritage-maroon border border-heritage-sandstone/40 hover:bg-heritage-maroon hover:text-white'
              }`}
            >
              {isSaved ? <Check className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
              <span>{isSaved ? t.saved : t.saveDiscovery}</span>
            </button>

            {/* Share Button */}
            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-white border border-heritage-sandstone/40 text-heritage-slate hover:text-heritage-maroon shadow-sm transition-colors"
              title={t.share}
            >
              {shareSuccess ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Banner Hero */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8">
        <div className="relative rounded-3xl overflow-hidden border-2 border-heritage-sandstone/40 shadow-xl bg-neutral-900 min-h-[380px] sm:min-h-[460px] flex items-end">
          {/* Main Photo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={userPhoto || item.imageUrl}
            alt={item.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

          {/* User Photo badge if captured */}
          {userPhoto && (
            <div className="absolute top-4 left-4 bg-heritage-maroon/90 text-heritage-gold px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm border border-heritage-gold/40 flex items-center gap-1.5 shadow">
              <Sparkles className="w-3.5 h-3.5" /> Your Captured Photo
            </div>
          )}

          {/* Confidence Badge */}
          {item.confidenceScore && (
            <div className="absolute top-4 right-4 bg-black/60 text-emerald-400 px-3.5 py-1.5 rounded-full text-xs font-bold backdrop-blur-md border border-white/20 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {item.confidenceScore}% AI Confidence Match
            </div>
          )}

          {/* Banner Text Details */}
          <div className="relative p-6 sm:p-10 w-full text-white">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-heritage-maroon text-heritage-gold uppercase tracking-wider">
                {item.categoryLabel}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white/90">
                {item.period}
              </span>
              {item.location.unescoStatus && (
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/90 text-neutral-950 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" /> UNESCO World Heritage
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
              {item.name}
            </h1>
            {localizedNativeName !== item.name && (
              <h2 className="text-xl sm:text-2xl font-serif text-heritage-gold mt-1 font-medium">
                {localizedNativeName}
              </h2>
            )}

            <p className="text-sm sm:text-base text-neutral-200 mt-2 max-w-3xl leading-relaxed">
              {item.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-6 mt-4 text-xs text-neutral-300">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-heritage-gold" />
                {item.location.name}, {item.location.state}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-heritage-gold" />
                {item.estimatedDate}
              </span>
            </div>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 mt-6">
              {/* Bring History to Life Button */}
              <button
                onClick={() => setShowStoryModal(true)}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-heritage-gold to-heritage-brass text-neutral-950 font-bold text-xs sm:text-sm hover:scale-105 transition-all shadow-lg flex items-center gap-2"
              >
                <PlayCircle className="w-4 h-4 fill-neutral-950 text-heritage-gold" />
                {t.bringHistoryToLife}
              </button>

              {/* Practical Simulator Button */}
              {item.howItWorks.interactiveType && item.howItWorks.interactiveType !== 'generic' && (
                <button
                  onClick={() => setShowSimulatorModal(true)}
                  className="px-5 py-2.5 rounded-xl bg-heritage-maroon text-white font-bold text-xs sm:text-sm hover:bg-heritage-maroonDark transition-all shadow-lg flex items-center gap-2 border border-heritage-gold/30"
                >
                  <Gamepad2 className="w-4 h-4 text-heritage-gold" />
                  {t.playInteractiveExperience}
                </button>
              )}

              {/* Speech Narration Toggle */}
              <button
                onClick={toggleNarration}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-colors backdrop-blur-sm flex items-center gap-2"
              >
                {isSpeaking ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-heritage-gold" />}
                <span>{isSpeaking ? 'Pause Audio Guide' : 'Listen to Spoken Guide'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin border-b border-heritage-sandstone/30">
          {(
            [
              { id: 'overview', label: t.detailTabs.overview, icon: BookOpen },
              { id: 'history', label: t.detailTabs.history, icon: Clock },
              { id: 'howItWorks', label: t.detailTabs.howItWorks, icon: Layers },
              { id: 'listen', label: t.detailTabs.listen, icon: Volume2 },
              { id: 'threeD', label: t.detailTabs.threeD, icon: Sparkles },
              { id: 'didYouKnow', label: t.detailTabs.didYouKnow, icon: Lightbulb },
            ] as const
          ).map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-heritage-maroon text-heritage-gold shadow-md font-bold'
                    : 'bg-white text-heritage-slate/75 hover:bg-heritage-cream border border-heritage-sandstone/20'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-heritage-gold' : 'text-heritage-maroon'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Contents */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* 1. OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            <div className="md:col-span-2 bg-white rounded-2xl p-6 sm:p-8 border border-heritage-sandstone/30 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-serif font-bold text-heritage-maroon">
                  Introduction & Significance
                </h3>
                <span className="text-xs bg-heritage-cream px-3 py-1 rounded-full text-heritage-slate font-medium border border-heritage-sandstone/20">
                  {learningDepth === 'beginner' ? 'Beginner / Tourist Level' : 'Scholarly Analysis'}
                </span>
              </div>

              <p className="text-base sm:text-lg text-heritage-slate/90 leading-relaxed font-serif">
                {learningDepth === 'beginner' ? item.overview.beginner : item.overview.scholarly}
              </p>

              {/* Quick Details Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-heritage-sandstone/20 text-xs">
                <div className="bg-heritage-ivory p-3.5 rounded-xl border border-heritage-sandstone/20">
                  <span className="text-heritage-slate/60 block font-medium">Era & Period</span>
                  <span className="font-serif font-bold text-heritage-maroon text-sm mt-0.5 block">
                    {item.period}
                  </span>
                </div>
                <div className="bg-heritage-ivory p-3.5 rounded-xl border border-heritage-sandstone/20">
                  <span className="text-heritage-slate/60 block font-medium">Historical Date</span>
                  <span className="font-serif font-bold text-heritage-maroon text-sm mt-0.5 block">
                    {item.estimatedDate}
                  </span>
                </div>
                <div className="bg-heritage-ivory p-3.5 rounded-xl border border-heritage-sandstone/20 col-span-2 sm:col-span-1">
                  <span className="text-heritage-slate/60 block font-medium">Location</span>
                  <span className="font-serif font-bold text-heritage-maroon text-sm mt-0.5 block">
                    {item.location.name}, {item.location.state}
                  </span>
                </div>
              </div>

              {/* User Notes Section */}
              <div className="mt-6 pt-6 border-t border-heritage-sandstone/20">
                <label className="text-xs font-bold text-heritage-slate block mb-2">
                  Personal Travel Notes for this Discovery:
                </label>
                <textarea
                  value={userNotes}
                  onChange={(e) => setUserNotes(e.target.value)}
                  placeholder="Record your thoughts, impressions, questions, or visit memories..."
                  rows={3}
                  className="w-full text-xs p-3 rounded-xl border border-heritage-sandstone/40 bg-heritage-ivory focus:outline-none focus:ring-2 focus:ring-heritage-maroon"
                />
                <button
                  onClick={handleSave}
                  className="mt-2 text-xs px-4 py-2 bg-heritage-maroon text-heritage-gold font-bold rounded-lg hover:bg-heritage-maroonDark transition-colors shadow-sm"
                >
                  Save Notes to My Discoveries
                </button>
              </div>
            </div>

            {/* Sidebar with Related Figures & Sources */}
            <div className="space-y-6">
              {/* Related Figures Card */}
              <div className="bg-white rounded-2xl p-6 border border-heritage-sandstone/30 shadow-md">
                <h4 className="text-sm font-serif font-bold text-heritage-maroon mb-3 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-heritage-goldDark" /> Associated Figures & Patrons
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.relatedFigures.map((fig, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-heritage-cream text-heritage-maroon px-3 py-1.5 rounded-lg border border-heritage-sandstone/30 font-medium"
                    >
                      {fig}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Sources Card */}
              <div className="bg-white rounded-2xl p-6 border border-heritage-sandstone/30 shadow-md">
                <h4 className="text-sm font-serif font-bold text-heritage-maroon mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-heritage-goldDark" /> {t.sourcesAndReferences}
                </h4>
                <ul className="space-y-3">
                  {item.sources.map((src, idx) => (
                    <li key={idx} className="text-xs border-b border-heritage-sandstone/15 pb-2 last:border-0 last:pb-0">
                      <span className="font-bold text-heritage-slate block">{src.title}</span>
                      <span className="text-[11px] text-heritage-sandstoneDark block mt-0.5">
                        {src.institution}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* 2. HISTORY & TIMELINE TAB */}
        {activeTab === 'history' && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-heritage-sandstone/30 shadow-md animate-fade-in">
            <h3 className="text-xl font-serif font-bold text-heritage-maroon mb-2">
              Historical Origin & Lineage
            </h3>
            <p className="text-sm text-heritage-slate/85 leading-relaxed mb-4">
              <strong>Origin:</strong> {item.history.origin}
            </p>
            <p className="text-sm text-heritage-slate/85 leading-relaxed mb-8">
              <strong>Creator / Dynasty:</strong> {item.history.creatorOrDynasty}
            </p>

            <h4 className="text-base font-serif font-bold text-heritage-maroon mb-6 flex items-center gap-2">
              <Clock className="w-4 h-4 text-heritage-goldDark" /> Key Timeline Milestones
            </h4>

            {/* Vertical Milestone Timeline */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-heritage-gold/50 space-y-8 ml-2">
              {item.history.timeline.map((event, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Node Ring */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-5 h-5 rounded-full bg-heritage-ivory border-4 border-heritage-maroon group-hover:border-heritage-gold transition-colors" />

                  <span className="text-xs font-bold text-heritage-maroon bg-heritage-cream px-2.5 py-0.5 rounded-full border border-heritage-sandstone/30 inline-block mb-1">
                    {event.year}
                  </span>
                  <h5 className="text-base font-serif font-bold text-heritage-slate">
                    {event.title}
                  </h5>
                  <p className="text-xs sm:text-sm text-heritage-slate/80 mt-1 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-heritage-sandstone/20">
              <h4 className="text-sm font-serif font-bold text-heritage-maroon mb-2">
                Evolution Over Centuries
              </h4>
              <p className="text-xs sm:text-sm text-heritage-slate/85 leading-relaxed">
                {item.history.evolution}
              </p>
            </div>
          </div>
        )}

        {/* 3. HOW IT WORKS / ARCHITECTURE & CRAFTSMANSHIP TAB */}
        {activeTab === 'howItWorks' && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-heritage-sandstone/30 shadow-md animate-fade-in space-y-6">
            <div>
              <span className="text-xs font-bold text-heritage-goldDark uppercase tracking-wider block">
                Craftsmanship & Architecture
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-heritage-maroon mt-1">
                {item.howItWorks.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-heritage-slate/90 leading-relaxed font-serif">
              {item.howItWorks.craftsmanshipOrArchitecture}
            </p>

            {/* Materials Used */}
            <div className="bg-heritage-cream/60 p-5 rounded-2xl border border-heritage-sandstone/30">
              <h4 className="text-xs font-bold text-heritage-maroon uppercase tracking-wider mb-3">
                Authentic Historical Materials
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.howItWorks.materials.map((mat, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-white text-heritage-slate font-medium px-3.5 py-1.5 rounded-xl border border-heritage-sandstone/30 shadow-sm"
                  >
                    ✓ {mat}
                  </span>
                ))}
              </div>
            </div>

            {/* Mechanism & Technique */}
            <div>
              <h4 className="text-sm font-serif font-bold text-heritage-maroon mb-2">
                Engineering Mechanism / Playing Technique
              </h4>
              <p className="text-xs sm:text-sm text-heritage-slate/85 leading-relaxed bg-heritage-ivory p-4 rounded-xl border border-heritage-sandstone/20">
                {item.howItWorks.mechanismOrTechnique}
              </p>
            </div>

            {/* Practical Simulator CTA */}
            {item.howItWorks.interactiveType && item.howItWorks.interactiveType !== 'generic' && (
              <div className="bg-gradient-to-r from-heritage-maroon to-heritage-maroonDark p-6 rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                <div>
                  <span className="text-xs font-bold text-heritage-gold uppercase tracking-wider flex items-center gap-1.5">
                    <Gamepad2 className="w-4 h-4 text-heritage-gold" /> Hands-On Exploration
                  </span>
                  <h4 className="text-lg font-serif font-bold mt-1">
                    Try the {item.name} Interactive Simulator
                  </h4>
                  <p className="text-xs text-neutral-200 mt-1">
                    Experience airflow breath resonance, finger holes, and classical rhythms.
                  </p>
                </div>
                <button
                  onClick={() => setShowSimulatorModal(true)}
                  className="px-5 py-2.5 rounded-xl bg-heritage-gold text-neutral-950 font-bold text-xs sm:text-sm hover:scale-105 transition-transform shadow-md whitespace-nowrap"
                >
                  Launch Simulator
                </button>
              </div>
            )}
          </div>
        )}

        {/* 4. LISTEN & SOUND TAB */}
        {activeTab === 'listen' && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-heritage-sandstone/30 shadow-md animate-fade-in space-y-6">
            <div>
              <span className="text-xs font-bold text-heritage-goldDark uppercase tracking-wider block">
                Acoustic Heritage
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-heritage-maroon mt-1">
                {item.listen.audioTitle}
              </h3>
            </div>

            {/* Audio Synthesis & Spoken Narration Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-heritage-cream/70 border border-heritage-sandstone/30 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-heritage-maroon flex items-center gap-1.5">
                    <Volume2 className="w-4 h-4 text-heritage-goldDark" /> Authentic Instrument Acoustics
                  </span>
                  <p className="text-xs text-heritage-slate/80 mt-1">
                    Synthesized through Web Audio API reproducing the natural acoustics and resonant harmonics.
                  </p>
                </div>
                <button
                  onClick={playAcousticSample}
                  className="mt-4 px-4 py-2.5 bg-heritage-maroon text-heritage-gold text-xs font-bold rounded-xl hover:bg-heritage-maroonDark transition-colors flex items-center justify-center gap-2 shadow"
                >
                  <PlayCircle className="w-4 h-4" /> Play Acoustic Sample
                </button>
              </div>

              <div className="p-5 rounded-2xl bg-heritage-ivory border border-heritage-sandstone/30 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-heritage-maroon flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-heritage-goldDark" /> Spoken Narration Guide
                  </span>
                  <p className="text-xs text-heritage-slate/80 mt-1">
                    Listen to spoken historical explanation in your chosen language ({language.toUpperCase()}).
                  </p>
                </div>
                <button
                  onClick={toggleNarration}
                  className="mt-4 px-4 py-2.5 bg-white border border-heritage-sandstone/40 text-heritage-maroon text-xs font-bold rounded-xl hover:bg-heritage-cream transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  {isSpeaking ? <VolumeX className="w-4 h-4 text-rose-500" /> : <Volume2 className="w-4 h-4 text-heritage-goldDark" />}
                  <span>{isSpeaking ? 'Stop Narration' : 'Play Narration'}</span>
                </button>
              </div>
            </div>

            <div className="bg-heritage-ivory p-4 rounded-xl border border-heritage-sandstone/20 text-xs text-heritage-slate/80 leading-relaxed font-serif italic">
              &ldquo;{item.listen.narrationText}&rdquo;
            </div>
          </div>
        )}

        {/* 5. 3D EXPLORATION TAB */}
        {activeTab === 'threeD' && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-heritage-sandstone/30 shadow-md animate-fade-in">
            <div className="mb-4">
              <span className="text-xs font-bold text-heritage-goldDark uppercase tracking-wider block">
                Interactive 3D Asset
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-heritage-maroon mt-1">
                Explore in 3D WebGL
              </h3>
              <p className="text-xs sm:text-sm text-heritage-slate/80 mt-1">
                Rotate, zoom, toggle wireframe, and click on annotation pills to inspect specific structural features.
              </p>
            </div>

            {item.threeDModel ? (
              <ThreeDViewer
                modelType={item.threeDModel.type}
                description={item.threeDModel.description}
                annotations={item.threeDModel.annotations}
              />
            ) : (
              <ThreeDViewer
                modelType="temple"
                description="3D architectural visualization of heritage elements."
              />
            )}
          </div>
        )}

        {/* 6. DID YOU KNOW? TAB */}
        {activeTab === 'didYouKnow' && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-heritage-sandstone/30 shadow-md animate-fade-in">
            <h3 className="text-xl font-serif font-bold text-heritage-maroon mb-6 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-heritage-goldDark" /> Fascinating Verified Historical Facts
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {item.didYouKnow.map((fact, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-heritage-cream/50 border border-heritage-sandstone/30 flex items-start gap-3 shadow-sm hover:border-heritage-gold transition-colors"
                >
                  <span className="w-6 h-6 rounded-full bg-heritage-maroon text-heritage-gold flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-heritage-slate/90 leading-relaxed font-serif">
                    {fact}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* "Bring History to Life" Story Modal */}
      {showStoryModal && (
        <StoryAnimationModal
          item={item}
          language={language}
          onClose={() => setShowStoryModal(false)}
        />
      )}

      {/* Practical Simulator Modal */}
      {showSimulatorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="max-w-2xl w-full">
            {item.howItWorks.interactiveType === 'bansuri' ? (
              <BansuriSimulator onClose={() => setShowSimulatorModal(false)} />
            ) : item.howItWorks.interactiveType === 'tabla' ? (
              <TablaSimulator onClose={() => setShowSimulatorModal(false)} />
            ) : (
              <div className="bg-white p-6 rounded-2xl text-center">
                <h4 className="text-lg font-bold text-heritage-maroon mb-2">
                  Interactive Architectural Explorer
                </h4>
                <p className="text-xs text-heritage-slate/80 mb-4">
                  Explore the 3D model in the &ldquo;Explore in 3D&rdquo; tab to inspect components in detail.
                </p>
                <button
                  onClick={() => setShowSimulatorModal(false)}
                  className="px-4 py-2 bg-heritage-maroon text-white text-xs font-bold rounded-lg"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
