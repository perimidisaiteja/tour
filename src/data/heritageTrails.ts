export interface HeritageTrail {
  id: string;
  name: string;
  region: 'North' | 'South' | 'West' | 'East' | 'Central' | 'North-East';
  durationDays: number;
  description: string;
  theme: string;
  stops: {
    name: string;
    city: string;
    state: string;
    coordinates: [number, number];
    heritageItemId?: string;
    highlights: string;
  }[];
}

export const HERITAGE_TRAILS: HeritageTrail[] = [
  {
    id: 'sacred-chola-trail',
    name: 'The Great Living Chola Temples & Bronze Trail',
    region: 'South',
    durationDays: 4,
    description: 'Explore the architectural zenith of imperial Tamil Nadu, from the colossal granite vimana of Thanjavur to the lost-wax bronze ateliers of Swamimalai.',
    theme: 'Imperial Dravidian Architecture & Sacred Bronzes',
    stops: [
      {
        name: 'Brihadisvara Temple (Big Temple)',
        city: 'Thanjavur',
        state: 'Tamil Nadu',
        coordinates: [10.7828, 79.1318],
        heritageItemId: 'chola-bronze-nataraja',
        highlights: 'Monolithic 80-tonne granite dome and vibrant Chola fresco murals.',
      },
      {
        name: 'Swamimalai Bronze Guilds',
        city: 'Swamimalai',
        state: 'Tamil Nadu',
        coordinates: [10.9575, 79.3275],
        heritageItemId: 'chola-bronze-nataraja',
        highlights: 'Witness hereditary Sthapathis casting Panchaloha icons with ancient wax techniques.',
      },
      {
        name: 'Airavatesvara Temple',
        city: 'Dharasuram',
        state: 'Tamil Nadu',
        coordinates: [10.9489, 79.3564],
        highlights: 'Exquisite musical stone steps and miniature filigree-like stone carvings.',
      },
      {
        name: 'Gangaikonda Cholapuram',
        city: 'Jayankondam',
        state: 'Tamil Nadu',
        coordinates: [11.2056, 79.4533],
        highlights: 'The grand capital of Emperor Rajendra Chola I commemorating his naval and northern triumphs.',
      },
    ],
  },
  {
    id: 'maratha-fort-circuit',
    name: 'Maratha Sovereign Citadels: The Forts of Shivaji Maharaj',
    region: 'West',
    durationDays: 5,
    description: 'Traverse the rugged Sahyadri mountain ramparts where Chhatrapati Shivaji Maharaj forged Hindavi Swarajya with guerrilla warfare mastery.',
    theme: 'Warrior Heritage & Mountain Fortifications',
    stops: [
      {
        name: 'Raigad Fort (The Capital of Swarajya)',
        city: 'Mahad',
        state: 'Maharashtra',
        coordinates: [18.2346, 73.4414],
        heritageItemId: 'jagdamba-talwar',
        highlights: 'The coronation throne, Maha Darwaja, and the dizzying Takmak Tok cliff.',
      },
      {
        name: 'Shivneri Fort (Birthplace of the Chhatrapati)',
        city: 'Junnar',
        state: 'Maharashtra',
        coordinates: [19.1983, 73.8569],
        highlights: 'The historic hill-fort where Shivaji Maharaj spent his earliest childhood with mother Jijabai.',
      },
      {
        name: 'Pratapgad Fort (Scene of the Epic Battle)',
        city: 'Mahabaleshwar',
        state: 'Maharashtra',
        coordinates: [17.9317, 73.5786],
        highlights: 'Site of the historic strategic clash with Afzal Khan in 1659.',
      },
      {
        name: 'Sinhagad Fort (Lion’s Fort)',
        city: 'Pune',
        state: 'Maharashtra',
        coordinates: [18.3663, 73.7558],
        highlights: 'The precipitous ridge scaled by Tanaji Malusare in the legendary night assault of 1670.',
      },
    ],
  },
  {
    id: 'buddhist-heritage-trail',
    name: 'The Sacred Path of Buddha & Emperor Ashoka',
    region: 'Central',
    durationDays: 6,
    description: 'Follow the life of Gautama Buddha and Emperor Ashoka’s transformation from conqueror to moral reformer across the Gangetic plains.',
    theme: 'Ancient Philosophy, Monolithic Edicts & Caves',
    stops: [
      {
        name: 'Sarnath Deer Park & Ashoka Pillar',
        city: 'Sarnath',
        state: 'Uttar Pradesh',
        coordinates: [25.3813, 83.0232],
        heritageItemId: 'ashoka-lion-capital',
        highlights: 'Dhamek Stupa and the original Sarnath Lion Capital in the archaeological museum.',
      },
      {
        name: 'Mahabodhi Temple',
        city: 'Bodh Gaya',
        state: 'Bihar',
        coordinates: [24.6961, 84.9913],
        highlights: 'The sacred Bodhi tree where Gautama Buddha attained enlightenment in 528 BCE.',
      },
      {
        name: 'Nalanda Mahavihara University',
        city: 'Nalanda',
        state: 'Bihar',
        coordinates: [25.1357, 85.4450],
        highlights: 'Ancient world university ruins where 10,000 scholars once studied Buddhist philosophy.',
      },
    ],
  },
  {
    id: 'kalinga-golden-triangle',
    name: 'Kalinga Sun & Temple Architecture Circuit',
    region: 'East',
    durationDays: 3,
    description: 'Experience the world-renowned stone craftsmanship of ancient Kalinga along the shores of the Bay of Bengal.',
    theme: 'Astronomical Sundials & Rekha Deula Architecture',
    stops: [
      {
        name: 'Konark Sun Temple',
        city: 'Konark',
        state: 'Odisha',
        coordinates: [19.8876, 86.0945],
        heritageItemId: 'konark-sun-temple-wheel',
        highlights: 'The 24 stone sundial wheels and dynamic dancing sculptures of the Natyamandapa.',
      },
      {
        name: 'Jagannath Temple',
        city: 'Puri',
        state: 'Odisha',
        coordinates: [19.8049, 85.8179],
        highlights: 'One of the Char Dham pilgrimage sites, home to the world-famous Ratha Yatra.',
      },
      {
        name: 'Lingaraj Temple',
        city: 'Bhubaneswar',
        state: 'Odisha',
        coordinates: [20.2382, 85.8336],
        highlights: 'Towering 180-foot deula spire exemplifying mature Kalinga architectural geometry.',
      },
    ],
  },
  {
    id: 'deccan-vijayanagara-wonders',
    name: 'The Golden Empire of Vijayanagara & Deccan Fortresses',
    region: 'South',
    durationDays: 4,
    description: 'Immerse yourself in the boulder-strewn wonderland of Hampi where medieval palaces and musical pillars meet the sacred river.',
    theme: 'Imperial Citadels, Rock Architecture & Classical Music',
    stops: [
      {
        name: 'Vittala Temple & Stone Chariot',
        city: 'Hampi',
        state: 'Karnataka',
        coordinates: [15.3350, 76.4600],
        heritageItemId: 'hampi-stone-chariot',
        highlights: 'Granite chariot shrine, musical sa-re-ga-ma pillars, and majestic pillared halls.',
      },
      {
        name: 'Virupaksha Temple',
        city: 'Hampi',
        state: 'Karnataka',
        coordinates: [15.3358, 76.4594],
        highlights: 'One of India’s oldest continuously active temples, with an inverted pinhole camera effect.',
      },
      {
        name: 'Badami Rock-Cut Cave Temples',
        city: 'Badami',
        state: 'Karnataka',
        coordinates: [15.9189, 75.6828],
        highlights: '6th-century Chalukyan red sandstone caves overlooking the Agastya Lake.',
      },
    ],
  },
];
