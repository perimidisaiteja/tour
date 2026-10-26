'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, Play, Square, Info, Sparkles, Wind } from 'lucide-react';
import { audioEngine } from '@/utils/audioEngine';

interface BansuriSimulatorProps {
  onClose?: () => void;
}

// 7 Classical swaras mapped to finger holes
interface SwaraHole {
  swara: string;
  noteName: string;
  freq: number;
  covered: boolean;
}

export const BansuriSimulator: React.FC<BansuriSimulatorProps> = ({ onClose }) => {
  const [isMicActive, setIsMicActive] = useState(false);
  const [micLevel, setMicLevel] = useState(0);
  const [manualBreath, setManualBreath] = useState(0.7);
  const [useMic, setUseMic] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeNote, setActiveNote] = useState('Sa');
  const [currentFreq, setCurrentFreq] = useState(261.63);
  const [demoPlaying, setDemoPlaying] = useState(false);

  // 7 finger holes from blow hole to tail:
  // Ma, Pa, Dha (left hand) & Ni, Sa, Re, Ga (right hand)
  const [holes, setHoles] = useState<SwaraHole[]>([
    { swara: 'Ma', noteName: 'F#4 (Teevra)', freq: 369.99, covered: true },
    { swara: 'Pa', noteName: 'G4', freq: 392.00, covered: true },
    { swara: 'Dha', noteName: 'A4', freq: 440.00, covered: true },
    { swara: 'Ni', noteName: 'B4', freq: 493.88, covered: true },
    { swara: 'Sa', noteName: 'C5 (Tar)', freq: 523.25, covered: false },
    { swara: 'Re', noteName: 'D5', freq: 587.33, covered: false },
  ]);

  const micStreamRef = useRef<MediaStream | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const isPlayingRef = useRef(isPlaying);
  isPlayingRef.current = isPlaying;

  // Calculate pitch based on covered holes
  const calculateCurrentSwara = (currentHoles: SwaraHole[]) => {
    // In Hindustani bansuri, when top 3 holes covered = Pa (392Hz)
    // All 6 holes covered = Mandra Sa (261.63Hz)
    // Only 1 hole covered = Dha / Ni
    const coveredCount = currentHoles.filter((h) => h.covered).length;
    const swaraMap: { swara: string; freq: number }[] = [
      { swara: "Sa'", freq: 523.25 }, // 0 covered
      { swara: 'Ni', freq: 493.88 },  // 1 covered
      { swara: 'Dha', freq: 440.00 }, // 2 covered
      { swara: 'Pa', freq: 392.00 },  // 3 covered
      { swara: 'Ma', freq: 369.99 },  // 4 covered
      { swara: 'Ga', freq: 329.63 },  // 5 covered
      { swara: 'Re', freq: 293.66 },  // 6 covered
    ];
    const match = swaraMap[coveredCount] || { swara: 'Sa', freq: 261.63 };
    return match;
  };

  const toggleHole = (index: number) => {
    const updated = [...holes];
    updated[index].covered = !updated[index].covered;
    setHoles(updated);

    const swaraInfo = calculateCurrentSwara(updated);
    setActiveNote(swaraInfo.swara);
    setCurrentFreq(swaraInfo.freq);

    if (isPlaying) {
      const breath = useMic ? micLevel : manualBreath;
      audioEngine.updateBansuriPitch(swaraInfo.freq, breath);
    }
  };

  // Start / Stop blowing
  const handleToggleSound = () => {
    if (isPlaying) {
      audioEngine.stopBansuri();
      setIsPlaying(false);
    } else {
      const breath = useMic ? (micLevel > 0.05 ? micLevel : 0.4) : manualBreath;
      audioEngine.startBansuri(currentFreq, breath);
      setIsPlaying(true);
    }
  };

  // Toggle Microphone detection
  const toggleMicrophone = async () => {
    if (useMic) {
      // Disconnect mic
      if (micStreamRef.current) {
        micStreamRef.current.getTracks().forEach((track) => track.stop());
        micStreamRef.current = null;
      }
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      setUseMic(false);
      setIsMicActive(false);
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      micStreamRef.current = stream;

      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const audioCtx = new AudioCtx();
      const source = audioCtx.createMediaStreamSource(stream);
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 256;
      source.connect(analyser);
      analyserRef.current = analyser;

      setUseMic(true);
      setIsMicActive(true);

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const checkAirflow = () => {
        if (!analyserRef.current) return;
        analyserRef.current.getByteFrequencyData(dataArray);

        let sum = 0;
        for (let i = 0; i < bufferLength; i++) {
          sum += dataArray[i];
        }
        const average = sum / bufferLength;
        const normalized = Math.min(1.0, average / 45); // sensitivity scale
        setMicLevel(normalized);

        // If air blow detected above threshold, trigger / modulate bansuri sound
        if (normalized > 0.12) {
          if (!isPlayingRef.current) {
            audioEngine.startBansuri(currentFreq, normalized);
            setIsPlaying(true);
          } else {
            audioEngine.updateBansuriPitch(currentFreq, normalized);
          }
        } else if (normalized < 0.04 && isPlayingRef.current) {
          audioEngine.stopBansuri();
          setIsPlaying(false);
        }

        animFrameRef.current = requestAnimationFrame(checkAirflow);
      };

      checkAirflow();
    } catch (err) {
      console.warn('Microphone permission denied or unavailable', err);
      alert('Microphone permission was not granted. You can still use the manual Breath Slider!');
      setUseMic(false);
      setIsMicActive(false);
    }
  };

  // Play classical Raga Yaman demo phrase
  const playRagaDemo = async () => {
    if (demoPlaying) return;
    setDemoPlaying(true);

    const demoNotes = [
      { note: 'Ni', freq: 246.94, duration: 600 },
      { note: 'Re', freq: 293.66, duration: 700 },
      { note: 'Ga', freq: 329.63, duration: 900 },
      { note: 'Ma', freq: 369.99, duration: 650 },
      { note: 'Dha', freq: 440.00, duration: 750 },
      { note: 'Ni', freq: 493.88, duration: 800 },
      { note: "Sa'", freq: 523.25, duration: 1100 },
    ];

    audioEngine.startBansuri(demoNotes[0].freq, 0.7);
    setIsPlaying(true);

    for (const item of demoNotes) {
      setActiveNote(item.note);
      setCurrentFreq(item.freq);
      audioEngine.updateBansuriPitch(item.freq, 0.75);
      await new Promise((r) => setTimeout(r, item.duration));
    }

    audioEngine.stopBansuri();
    setIsPlaying(false);
    setDemoPlaying(false);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      audioEngine.stopBansuri();
      if (micStreamRef.current) {
        micStreamRef.current.getTracks().forEach((track) => track.stop());
      }
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-heritage-ivory rounded-2xl border-2 border-heritage-sandstone/40 p-6 shadow-xl max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-heritage-sandstone/30 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-heritage-maroon text-white tracking-wide">
              PRACTICAL EXPERIENCE
            </span>
            <span className="text-xs text-heritage-sandstoneDark font-medium">Sushira Vadya</span>
          </div>
          <h3 className="text-2xl font-serif text-heritage-maroon font-bold mt-1">
            Bansuri Acoustic Laboratory
          </h3>
          <p className="text-sm text-heritage-slate/80">
            Experiment with air column resonance, finger hole acoustical nodes, and classical Swaras.
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

      {/* Flute Visual Diagram & Interactive Finger Holes */}
      <div className="bg-gradient-to-r from-amber-900/10 via-amber-700/15 to-amber-900/10 rounded-2xl p-6 mb-6 border border-amber-800/20 relative">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-950 flex items-center gap-1.5">
            <Wind className="w-3.5 h-3.5 text-heritage-maroon" /> Virtual Bamboo Flute (Assam Bhaluka)
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-heritage-slate/80 font-medium">Active Swara:</span>
            <span className="px-3 py-1 bg-heritage-maroon text-heritage-gold font-bold text-sm rounded-lg shadow-sm">
              {activeNote} ({Math.round(currentFreq)} Hz)
            </span>
          </div>
        </div>

        {/* Bamboo Tube Graphic */}
        <div className="relative py-8">
          {/* Main Bamboo Cylinder */}
          <div className="h-16 w-full bg-gradient-to-r from-[#D4A373] via-[#E8D8C8] to-[#B58252] rounded-full shadow-inner border-2 border-[#8C6239] flex items-center justify-between px-6 relative overflow-hidden">
            {/* Natural Bamboo Nodes */}
            <div className="absolute left-[12%] top-0 bottom-0 w-2 bg-[#8C6239]/50 border-r border-[#614120]" />
            <div className="absolute left-[88%] top-0 bottom-0 w-2 bg-[#8C6239]/50 border-r border-[#614120]" />

            {/* Embouchure / Blow Hole */}
            <div className="relative flex flex-col items-center">
              <div
                className={`w-9 h-9 rounded-full border-2 border-heritage-maroon transition-all duration-300 ${
                  isPlaying
                    ? 'bg-gradient-to-br from-heritage-maroon to-amber-700 ring-4 ring-heritage-gold/40 animate-pulse'
                    : 'bg-heritage-charcoal/80'
                } flex items-center justify-center`}
              >
                <Wind className="w-4 h-4 text-heritage-gold" />
              </div>
              <span className="text-[10px] font-bold text-heritage-maroonDark absolute -bottom-6 whitespace-nowrap">
                Blow Hole
              </span>
            </div>

            {/* 6 Finger Holes */}
            <div className="flex items-center gap-4 sm:gap-6 pl-4">
              {holes.map((hole, idx) => (
                <div key={idx} className="flex flex-col items-center relative">
                  <button
                    onClick={() => toggleHole(idx)}
                    title={`Click to ${hole.covered ? 'open' : 'cover'} hole (${hole.swara})`}
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 transition-all duration-200 flex items-center justify-center font-bold text-xs shadow-md ${
                      hole.covered
                        ? 'bg-heritage-maroon text-heritage-gold border-heritage-goldDark scale-95 ring-2 ring-heritage-gold/30'
                        : 'bg-amber-100 text-heritage-slate/70 border-amber-700/60 hover:bg-amber-200'
                    }`}
                  >
                    {hole.covered ? '●' : '○'}
                  </button>
                  <span className="text-[10px] font-bold text-heritage-slate mt-1">
                    {hole.swara}
                  </span>
                </div>
              ))}
            </div>

            {/* Tuning vent hole at end */}
            <div className="w-5 h-5 rounded-full bg-heritage-charcoal/70 border border-amber-900/60" />
          </div>
        </div>

        <p className="text-xs text-center text-heritage-slate/70 mt-2">
          Tap individual finger holes to cover (●) or open (○) them. The note alters instantly!
        </p>
      </div>

      {/* Airflow / Breath Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Microphone Breath Detection */}
        <div
          className={`p-4 rounded-xl border transition-all ${
            useMic
              ? 'bg-emerald-50 border-emerald-400 ring-2 ring-emerald-300/40'
              : 'bg-white border-heritage-sandstone/30'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold text-heritage-slate flex items-center gap-2">
              {useMic ? <Mic className="w-4 h-4 text-emerald-600" /> : <MicOff className="w-4 h-4 text-heritage-slate/50" />}
              Microphone Airflow Detection
            </span>
            <button
              onClick={toggleMicrophone}
              className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-all ${
                useMic
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                  : 'bg-heritage-sandstone/20 text-heritage-slate hover:bg-heritage-sandstone/40'
              }`}
            >
              {useMic ? 'Stop Mic' : 'Enable Mic'}
            </button>
          </div>
          <p className="text-xs text-heritage-slate/75 mb-3">
            Blow gently toward your microphone. When airflow is detected, the bansuri sounds!
          </p>

          {/* Airflow Meter */}
          <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
            <div
              className="bg-emerald-500 h-full transition-all duration-75"
              style={{ width: `${Math.min(100, (useMic ? micLevel : 0) * 100)}%` }}
            />
          </div>
          <span className="text-[10px] text-heritage-slate/60 mt-1 block">
            {useMic
              ? micLevel > 0.12
                ? 'Airflow Detected: Playing!'
                : 'Blow gently toward mic...'
              : 'Microphone inactive.'}
          </span>
        </div>

        {/* Manual Breath Slider & Play Button */}
        <div className="p-4 rounded-xl bg-white border border-heritage-sandstone/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold text-heritage-slate flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-heritage-maroon" /> Manual Breath Flow
            </span>
            <button
              onClick={handleToggleSound}
              className={`text-xs px-3.5 py-1.5 rounded-lg font-bold flex items-center gap-1.5 shadow-sm transition-all ${
                isPlaying
                  ? 'bg-rose-600 text-white hover:bg-rose-700'
                  : 'bg-heritage-maroon text-heritage-gold hover:bg-heritage-maroonDark'
              }`}
            >
              {isPlaying ? <Square className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              {isPlaying ? 'Stop' : 'Breathe & Play'}
            </button>
          </div>

          <label className="text-xs text-heritage-slate/75 block mb-1">
            Breath Pressure: {Math.round(manualBreath * 100)}%
          </label>
          <input
            type="range"
            min="0.1"
            max="1.0"
            step="0.05"
            value={manualBreath}
            disabled={useMic}
            onChange={(e) => {
              const val = parseFloat(e.target.value);
              setManualBreath(val);
              if (isPlaying && !useMic) {
                audioEngine.updateBansuriPitch(currentFreq, val);
              }
            }}
            className="w-full accent-heritage-maroon cursor-pointer"
          />
          <span className="text-[10px] text-heritage-slate/60 mt-1 block">
            Higher breath creates brighter harmonic tone.
          </span>
        </div>
      </div>

      {/* Raga Yaman Demonstration & Recorded Reference */}
      <div className="bg-heritage-cream/60 rounded-xl p-4 border border-heritage-sandstone/30 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          <span className="text-xs font-bold text-heritage-maroon flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-heritage-gold" /> Classical Demonstration
          </span>
          <p className="text-xs text-heritage-slate/80">
            Hear Raga Yaman (Kalyan Thaat) melodic swara progression played through automated portamento.
          </p>
        </div>
        <button
          onClick={playRagaDemo}
          disabled={demoPlaying}
          className="px-4 py-2 bg-gradient-to-r from-heritage-maroon to-heritage-maroonDark text-heritage-gold text-xs font-bold rounded-lg shadow hover:opacity-90 transition-opacity whitespace-nowrap flex items-center gap-2"
        >
          {demoPlaying ? 'Playing Raga Yaman...' : 'Play Raga Yaman Demo'}
        </button>
      </div>

      {/* Educational & Safety Disclaimer */}
      <div className="mt-4 flex items-start gap-2 bg-amber-50 p-3 rounded-lg border border-amber-200/80 text-[11px] text-amber-900 leading-relaxed">
        <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <span>
          <strong>Acoustic Simulation Note:</strong> A smartphone or laptop microphone measures audio amplitude from breath turbulence rather than direct air displacement. This interactive feature is an educational simulation of bansuri acoustical mechanics and not a physical airflow measurement device.
        </span>
      </div>
    </div>
  );
};
