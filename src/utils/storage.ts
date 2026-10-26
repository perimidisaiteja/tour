import { HeritageItem, SavedDiscovery, UserPreferences } from '@/types/heritage';
import { HERITAGE_ITEMS } from '@/data/heritageData';

const DISCOVERIES_KEY = 'bharat_darshan_saved_discoveries_v1';
const PREFERENCES_KEY = 'bharat_darshan_user_preferences_v1';

export const DEFAULT_PREFERENCES: UserPreferences = {
  language: 'en',
  learningDepth: 'beginner',
  textSize: 'normal',
  highContrast: false,
  voiceSpeed: 1.0,
};

export function getSavedDiscoveries(): SavedDiscovery[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(DISCOVERIES_KEY);
    if (!raw) {
      // Seed initial sample guest discovery if empty
      const initial: SavedDiscovery[] = [
        {
          id: 'initial-bansuri',
          itemId: 'bansuri-flute',
          item: HERITAGE_ITEMS[0],
          savedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
          userNotes: 'Discovered the beautiful microtones of the bamboo bansuri. Practiced Raga Yaman fingerings!',
          isFavorite: true,
          collection: 'Instruments',
        },
        {
          id: 'initial-konark',
          itemId: 'konark-sun-temple-wheel',
          item: HERITAGE_ITEMS[1],
          savedAt: new Date(Date.now() - 86400000).toISOString(),
          userNotes: 'Fascinated by the sundial spoke math—calculating time using sun shadows down to the minute.',
          isFavorite: false,
          collection: 'Architecture',
        },
      ];
      localStorage.setItem(DISCOVERIES_KEY, JSON.stringify(initial));
      return initial;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error loading discoveries from localStorage', err);
    return [];
  }
}

export function saveDiscoveryItem(
  item: HeritageItem,
  userNotes = '',
  customPhoto?: string
): SavedDiscovery {
  const existing = getSavedDiscoveries();
  const alreadySaved = existing.find((d) => d.itemId === item.id);

  if (alreadySaved) {
    // Update notes if provided
    if (userNotes) {
      alreadySaved.userNotes = userNotes;
    }
    if (customPhoto) {
      alreadySaved.userPhoto = customPhoto;
    }
    localStorage.setItem(DISCOVERIES_KEY, JSON.stringify(existing));
    return alreadySaved;
  }

  // Determine collection category
  let collection: SavedDiscovery['collection'] = 'Artifacts';
  if (item.category === 'sacred' || item.category === 'kingdoms') {
    collection = 'Places';
  } else if (item.category === 'music') {
    collection = 'Instruments';
  } else if (item.category === 'warriors') {
    collection = 'Artifacts';
  }

  const newDiscovery: SavedDiscovery = {
    id: `disc_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    itemId: item.id,
    item,
    savedAt: new Date().toISOString(),
    userNotes: userNotes || `Discovered with BharatDarshan AI Explorer.`,
    isFavorite: false,
    userPhoto: customPhoto,
    collection,
  };

  const updated = [newDiscovery, ...existing];
  localStorage.setItem(DISCOVERIES_KEY, JSON.stringify(updated));
  return newDiscovery;
}

export function toggleFavoriteDiscovery(discoveryId: string): SavedDiscovery[] {
  const existing = getSavedDiscoveries();
  const updated = existing.map((d) =>
    d.id === discoveryId ? { ...d, isFavorite: !d.isFavorite } : d
  );
  localStorage.setItem(DISCOVERIES_KEY, JSON.stringify(updated));
  return updated;
}

export function updateDiscoveryNotes(discoveryId: string, notes: string): SavedDiscovery[] {
  const existing = getSavedDiscoveries();
  const updated = existing.map((d) =>
    d.id === discoveryId ? { ...d, userNotes: notes } : d
  );
  localStorage.setItem(DISCOVERIES_KEY, JSON.stringify(updated));
  return updated;
}

export function removeDiscovery(discoveryId: string): SavedDiscovery[] {
  const existing = getSavedDiscoveries();
  const updated = existing.filter((d) => d.id !== discoveryId);
  localStorage.setItem(DISCOVERIES_KEY, JSON.stringify(updated));
  return updated;
}

export function getUserPreferences(): UserPreferences {
  if (typeof window === 'undefined') return DEFAULT_PREFERENCES;
  try {
    const raw = localStorage.getItem(PREFERENCES_KEY);
    if (!raw) return DEFAULT_PREFERENCES;
    return { ...DEFAULT_PREFERENCES, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_PREFERENCES;
  }
}

export function saveUserPreferences(prefs: Partial<UserPreferences>): UserPreferences {
  const current = getUserPreferences();
  const updated = { ...current, ...prefs };
  if (typeof window !== 'undefined') {
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify(updated));
  }
  return updated;
}
