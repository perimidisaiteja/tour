# BharatDarshan — India's Interactive AI Heritage Explorer

> **Capture it. Understand it. Experience it. Remember it.**

BharatDarshan is a full-stack, responsive tourism web application built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Three.js**, **Web Audio API**, and **Leaflet**. It connects Indian and international travelers to India's monuments, sacred architecture, warrior weaponry, musical traditions, and indigenous arts through interactive AI recognition, 3D exploration, authentic sound simulations, and illustrated storytelling.

---

## 🏛 Key Features

### 1. Camera & AI-Powered Heritage Recognition
- **Real-Time Camera Stream**: Viewfinder with front/back camera toggle, rule-of-thirds grid, and still capture.
- **Gallery Upload**: Upload photos directly from phone/desktop.
- **Dual Engine Recognition**:
  - **Verified Heritage Vision Engine**: Intelligent offline/local pattern matcher with verified confidence scoring, alternative candidates, and zero token consumption.
  - **Gemini Vision API (Optional)**: If `GEMINI_API_KEY` is provided, queries free-tier vision models with prompt-grounded historical references.
- **Match Breakdown**: Top match with confidence %, historical period, geographical coordinates, materials, related figures, and attributable sources (ASI, UNESCO, Sangeet Natak Akademi).

### 2. Interactive Discovery Detail Hub
Every identified object or place has a structured tabbed detail page:
- **Overview**: Toggle between *Beginner / Tourist Level* and *Scholarly / Deep Dive* historiographical depth.
- **History & Timeline**: Origin, dynasty, milestone timeline, and centuries-long evolution.
- **How It Works**: Structural science, materials, and traditional techniques.
- **Listen**: Spoken voice narration in 8 Indian languages (Web Speech API) + authentic synthesized acoustic tones.
- **Explore in 3D**: Full Three.js WebGL canvas with orbit rotation, zoom, wireframe toggle, and clickable feature annotations.
- **Did You Know?**: Verified historical facts and trivia.
- **Save & Share**: Save to personal journal with custom reflections, tags, and Web Share API support.

### 3. Practical Instrument & Craft Experiences
- **Bansuri Acoustic Laboratory**:
  - Live **microphone airflow breath detection** (blow gently into phone/computer mic to trigger airflow!).
  - 6 interactive finger holes to change classical Indian swaras (*Sa, Re, Ga, Ma, Pa, Dha, Ni*).
  - Web Audio oscillator + breath noise synthesis with portamento *meend* glides.
  - Automated Raga Yaman classical demonstration.
- **Tabla Rhythm Studio**:
  - Playable *Dayan* (treble drum tuned to Sa) and *Bayan* (copper bass drum with pitch bend modulations).
  - Play spoken bols: *Na, Tin, Ge, Ke, Dha, Dhin*.
  - 16-beat *Teentaal* loop player with real-time beat pulse counter.
- **Sacred Architecture & Weapons**:
  - Konark 16-spoke sundial time calculation breakdowns.
  - Shivaji Maharaj's *Jagdamba Talwar* Wootz Damascus steel metallurgy and defensive martial discipline.

### 4. "Bring History to Life" Animated Story Mode
- Story-based visual journey with step-by-step illustrated historical scenes.
- Spoken voice narration with auto-advancing progress bar.
- Clearly distinguishes between **verified archaeological evidence** and **grounded artistic reconstruction**.

### 5. India Exploration Map
- Interactive Leaflet map with antique cartographic voyager styling.
- Pins across North, South, East, West, Central, and North-East India.
- **Browser GPS Integration**: "Find Heritage Near Me" calculates live distance (in km) using the Haversine formula.
- **Curated Trails**:
  - *The Great Living Chola Temples & Bronze Trail*
  - *Maratha Sovereign Citadels: The Forts of Shivaji Maharaj*
  - *The Sacred Path of Buddha & Emperor Ashoka*
  - *Kalinga Sun & Temple Architecture Circuit*
  - *The Golden Empire of Vijayanagara & Deccan Fortresses*

### 6. Personal Discovery Journal ("My Discoveries")
- Client-side storage via `localStorage` with zero forced account registration.
- Filter by *Places*, *Artifacts*, *Instruments*, *Architecture*, and *Favorites*.
- Editable personal travel reflections and notes.
- One-click JSON export for travel diaries.

### 7. Multi-Language & Accessibility
- 8 Indian Languages: **English**, **Hindi (हिन्दी)**, **Telugu (తెలుగు)**, **Tamil (தமிழ்)**, **Kannada (ಕನ್ನಡ)**, **Malayalam (മലയാളം)**, **Bengali (বাংলা)**, and **Marathi (मराठी)**.
- Spoken voice narration speed customization (0.8x to 1.2x).
- Text sizing: Standard, Large (+20%), and Extra Large (+40%).
- High-contrast toggle.

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js v18+ and npm.

### 2. Installation
```bash
npm install
```

### 3. Run Locally
```bash
# Start development server
npm run dev

# Or build and run production server
npm run build
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎨 Heritage Design System
- **Colors**:
  - Warm Sandstone: `#D4A373` / `#E8D8C8`
  - Ivory / Cream: `#FAF7F2` / `#F4EFE6`
  - Royal Crimson / Maroon: `#7C1D24` / `#541217`
  - Antique Gold & Brass: `#D4AF37` / `#C69214`
  - Terracotta: `#C86446`
- **Typography**: Cinzel, Cinzel Decorative, and Outfit.
