export type HeritageCategory = 
  | 'ancient' 
  | 'warriors' 
  | 'sacred' 
  | 'music' 
  | 'kingdoms' 
  | 'arts' 
  | 'nature';

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface StoryScene {
  id: number;
  title: string;
  period: string;
  image: string;
  caption: string;
  narration: string;
  isArtisticReconstruction: boolean;
}

export interface ModelAnnotation {
  title: string;
  description: string;
  position: [number, number, number];
}

export interface SourceReference {
  title: string;
  institution: string;
  url?: string;
}

export interface AlternativeMatch {
  id: string;
  name: string;
  category: string;
  similarity: number;
  reason: string;
}

export interface HeritageItem {
  id: string;
  name: string;
  nativeNames: {
    en?: string;
    hi?: string;
    te?: string;
    ta?: string;
    kn?: string;
    ml?: string;
    bn?: string;
    mr?: string;
  };
  category: HeritageCategory;
  categoryLabel: string;
  tagline: string;
  period: string;
  estimatedDate: string;
  location: {
    name: string;
    state: string;
    coordinates: [number, number]; // [lat, lng]
    unescoStatus?: boolean;
    nearestCity?: string;
  };
  imageUrl: string;
  thumbnailUrl: string;
  additionalImages?: string[];
  confidenceScore?: number; // e.g. 96
  overview: {
    beginner: string;
    scholarly: string;
  };
  history: {
    origin: string;
    creatorOrDynasty: string;
    timeline: TimelineEvent[];
    evolution: string;
  };
  howItWorks: {
    title: string;
    craftsmanshipOrArchitecture: string;
    materials: string[];
    mechanismOrTechnique: string;
    interactiveType?: 'bansuri' | 'tabla' | 'architecture' | 'talwar' | 'generic';
  };
  listen: {
    audioUrl?: string;
    audioTitle: string;
    narrationText: string;
    instrumentType?: 'bansuri' | 'veena' | 'tabla' | 'shehnai' | 'bell';
  };
  story: {
    title: string;
    summary: string;
    scenes: StoryScene[];
  };
  threeDModel?: {
    type: 'bansuri' | 'temple' | 'sword' | 'wheel' | 'nataraja' | 'stupa';
    description: string;
    annotations: ModelAnnotation[];
  };
  didYouKnow: string[];
  relatedFigures: string[];
  sources: SourceReference[];
  alternativeMatches?: AlternativeMatch[];
}

export interface SavedDiscovery {
  id: string;
  itemId: string;
  item: HeritageItem;
  savedAt: string;
  userNotes: string;
  isFavorite: boolean;
  userPhoto?: string;
  collection: 'Places' | 'Artifacts' | 'Instruments' | 'Architecture' | 'Stories';
}

export type SupportedLanguage = 'en' | 'hi' | 'te' | 'ta' | 'kn' | 'ml' | 'bn' | 'mr';

export type LearningDepth = 'beginner' | 'scholarly';

export interface UserPreferences {
  language: SupportedLanguage;
  learningDepth: LearningDepth;
  textSize: 'normal' | 'large' | 'xlarge';
  highContrast: boolean;
  voiceSpeed: number; // 0.8 to 1.2
}
