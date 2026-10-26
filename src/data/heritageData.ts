import { HeritageItem } from '@/types/heritage';

export const HERITAGE_ITEMS: HeritageItem[] = [
  // 1. Bansuri (Musical Heritage)
  {
    id: 'bansuri-flute',
    name: 'Bansuri (North Indian Bamboo Flute)',
    nativeNames: {
      hi: 'बांसुरी',
      te: 'వేణువు / బాన్సురి',
      ta: 'புல்லாங்குழல்',
      kn: 'ಕೊಳಲು',
      ml: 'ഓടക്കുഴൽ',
      bn: 'বাঁশি',
      mr: 'बासरी',
    },
    category: 'music',
    categoryLabel: 'Musical Heritage',
    tagline: 'The ancient divine wind instrument sculpted from a single stalk of seasoned bamboo.',
    period: 'Vedic to Classical Era (Earliest mention in Natya Shastra, c. 200 BCE - 200 CE)',
    estimatedDate: 'Documented over 2,500 years; roots in ancient Vedic texts',
    location: {
      name: 'Vrindavan & Pan-Indian Classical Centers',
      state: 'Uttar Pradesh / Pan-India',
      coordinates: [27.5806, 77.7006],
      nearestCity: 'Mathura',
    },
    imageUrl: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1200&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=400&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80',
    ],
    confidenceScore: 98,
    overview: {
      beginner: 'The Bansuri is a traditional Indian transverse side-blown flute made entirely of seamless bamboo without any mechanical keys. It is revered in Indian mythology as the instrument of Lord Krishna and produces deep, resonant, meditative acoustic melodies.',
      scholarly: 'The Bansuri (derived from "bans" meaning bamboo and "sur" meaning melody) is an aerophone classified under the Sushira Vadya family in Bharata Muni\'s Natya Shastra. Championed in modern classical Hindustani music by masters like Pandit Pannalal Ghosh and Pandit Hariprasad Chaurasia, it relies entirely on microtonal finger hole half-covering (meend and andolan) to create continuous sliding intervals.',
    },
    history: {
      origin: 'Mentioned in Rigveda as the Nadi or Venu, the Bansuri is one of the world\'s oldest musical instruments.',
      creatorOrDynasty: 'Vedic Rishis & Traditional Craft Guilds; later refined by Pandit Pannalal Ghosh (who introduced the longer 32-inch bass bansuri in the 1930s).',
      timeline: [
        { year: 'c. 1500 BCE', title: 'Vedic Mentions', description: 'Revered in Vedic scriptures as the Venu and Murali accompanying pastoral chants.' },
        { year: 'c. 200 BCE', title: 'Bharata Muni\'s Natya Shastra', description: 'Formally codified under the Sushira Vadya (wind instrument) category.' },
        { year: 'c. 1936 CE', title: 'Hindustani Classical Evolution', description: 'Pandit Pannalal Ghosh lengthened the instrument to reach lower pitch octaves suitable for classical Khayal raga renditions.' },
      ],
      evolution: 'Originally an intimate pastoral and devotional folk instrument, structural innovations in bamboo diameter and finger placement during the early 20th century transformed it into a premier concert solo instrument on international stages.',
    },
    howItWorks: {
      title: 'Acoustic Science of the Indian Bamboo Flute',
      craftsmanshipOrArchitecture: 'Crafted from a specialized species of bamboo called Dendrocalamus strictus (or Manas bamboo from Assam/Kerala) seasoned for over a year to achieve zero ovality and optimal wall thickness.',
      materials: ['Specialized Seasoned Assam Bamboo', 'Natural Beeswax (for cork sealing)', 'Silk or Nylon Binding Threads to prevent splitting'],
      mechanismOrTechnique: 'A stream of air directed across the embouchure (blow hole) splits against the opposite sharp edge, setting the air column inside the tube into resonant standing wave oscillation. Notes are modulated by closing and half-covering 6 or 7 finger holes with flat finger pads rather than fingertips.',
      interactiveType: 'bansuri',
    },
    listen: {
      audioTitle: 'Bansuri Raga Yaman Meditative Alap',
      narrationText: 'Listen to the soothing resonance of the bamboo flute. Notice the smooth gliding between notes, known as Meend, which mimics the human voice.',
      instrumentType: 'bansuri',
    },
    story: {
      title: 'The Breath of the Sacred Forest: Story of the Bansuri',
      summary: 'From an ordinary bamboo shoot in the misty valleys of Assam to the divine music of Lord Krishna and world concert halls.',
      scenes: [
        {
          id: 1,
          title: 'The Sacred Bamboo Harvest',
          period: 'Seasonal Autumn',
          image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1000&q=80',
          caption: 'Master artisans search dense bamboo groves in Assam for hollow stalks with straight grain, unbroken nodes, and uniform 2-3mm wall thickness.',
          narration: 'Long before a bansuri sings, an artisan wanders the hills of Northeast India. Only one bamboo stalk in hundreds possesses the straightness, internal diameter, and resonant density worthy of becoming a flute.',
          isArtisticReconstruction: false,
        },
        {
          id: 2,
          title: 'Seasoning and Burning the Tone Holes',
          period: 'Curing Period',
          image: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1000&q=80',
          caption: 'The bamboo is air-cured for over a year, oil-treated, and pierced with red-hot iron rods to create precise tonal openings without splitting the grain.',
          narration: 'Rather than drilling, which can splinter delicate bamboo fibers, master craftsmen use glowing red iron rods to burn each tone hole. Every millimeter difference shifts the pitch by microtones.',
          isArtisticReconstruction: false,
        },
        {
          id: 3,
          title: 'The Flute of Krishna by the Yamuna River',
          period: 'Ancient Devotional Heritage',
          image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
          caption: 'Illustrated historical depiction of the Venu accompanying ancient poetry and Indian classical ragas on the banks of the sacred Yamuna.',
          narration: 'In Indian cultural memory, the bansuri represents the breath of the divine animating hollow human nature. It is depicted in thousand-year-old temple sculptures from Khajuraho to Belur.',
          isArtisticReconstruction: true,
        },
        {
          id: 4,
          title: 'From Folk Meadow to Global Concert Stage',
          period: '20th Century to Present',
          image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1000&q=80',
          caption: 'Pandit Pannalal Ghosh and Pandit Hariprasad Chaurasia elevated the simple folk flute into one of world music\'s most expressive instruments.',
          narration: 'By extending the length to 32 inches and mastering breath control, 20th-century virtuosos proved that seven holes in a simple bamboo tube could express the entire emotional depth of Indian classical ragas.',
          isArtisticReconstruction: false,
        },
      ],
    },
    threeDModel: {
      type: 'bansuri',
      description: 'Interactive 3D model of a Hindustani Concert Bansuri with blow hole and 7 pitch tone holes.',
      annotations: [
        { title: 'Blow Hole (Phook Chhidra)', description: 'Beveled embouchure hole where the musician splits their breath across the bamboo edge.', position: [-2.2, 0.2, 0] },
        { title: 'Cork Stopper (Datt)', description: 'A natural cork sealed with beeswax placed exactly one diameter width from the blow hole.', position: [-2.8, 0.2, 0] },
        { title: 'Upper Finger Holes (Ma, Pa, Dha)', description: 'Controlled by the index, middle, and ring fingers of the upper hand.', position: [-0.5, 0.2, 0] },
        { title: 'Lower Finger Holes (Ni, Sa, Re)', description: 'Controlled by the lower hand to produce fundamental swaras and microtones.', position: [1.2, 0.2, 0] },
        { title: 'Tuning / Vent Hole', description: 'Additional hole at the open end that sets the acoustic boundary of the air column.', position: [2.5, 0.2, 0] },
      ],
    },
    didYouKnow: [
      'Unlike Western orchestral flutes with complex metal key mechanisms, the Bansuri has zero moving parts; every pitch inflection is achieved entirely through the player’s fingers and breath angle.',
      'A true master bansuri player can produce over 22 microtones (shrutis) in a single octave by half-covering the finger holes.',
      'The bamboo used must mature for at least 3 years before harvest, then dry in the shade for another full year to avoid cracking.',
    ],
    relatedFigures: ['Pandit Hariprasad Chaurasia', 'Pandit Pannalal Ghosh', 'Lord Krishna', 'Bharata Muni'],
    sources: [
      { title: 'Natya Shastra (Chapter on Sushira Vadya)', institution: 'Indira Gandhi National Centre for the Arts (IGNCA)' },
      { title: 'Acoustics of the Bamboo Flute', institution: 'Acoustical Society of India / Sangeet Natak Akademi' },
    ],
    alternativeMatches: [
      { id: 'shehnai', name: 'Shehnai (Double-reed Quadruple Pipe)', category: 'Musical Heritage', similarity: 64, reason: 'Both are traditional wind instruments, but Shehnai is a double-reed conical pipe rather than a side-blown bamboo flute.' },
      { id: 'venu', name: 'South Indian Carnatic Venu', category: 'Musical Heritage', similarity: 88, reason: 'The Carnatic Venu is shorter (around 12-18 inches) with 8 finger holes, compared to the longer Hindustani Bansuri.' },
    ],
  },

  // 2. Konark Sun Temple Wheel (Sacred Architecture)
  {
    id: 'konark-sun-temple-wheel',
    name: 'Konark Sun Temple Chariot Wheel',
    nativeNames: {
      hi: 'कोणार्क सूर्य मंदिर का चक्र',
      te: 'కోణార్క్ సూర్య దేవాలయ చక్రం',
      ta: 'கோனார்க் சூரியக் கோயில் சக்கரம்',
      kn: 'ಕೊನಾರ್ಕ್ ಸೂರ್ಯ ದೇವಾಲಯ ಚಕ್ರ',
      ml: 'കൊണാർക്ക് സൂര്യക്ഷേത്ര ചക്രം',
      bn: 'কোনার্ক সূর্য মন্দিরের চাকা',
      mr: 'कोणार्क सूर्य मंदिर चक्र',
    },
    category: 'sacred',
    categoryLabel: 'Sacred Architecture',
    tagline: 'The 13th-century astronomical sundial carved in stone that calculates precise time from sun shadows.',
    period: 'Eastern Ganga Dynasty (c. 1250 CE)',
    estimatedDate: 'Completed circa 1250 CE under King Narasimhadeva I',
    location: {
      name: 'Konark Sun Temple',
      state: 'Odisha',
      coordinates: [19.8876, 86.0945],
      unescoStatus: true,
      nearestCity: 'Puri / Bhubaneswar',
    },
    imageUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=400&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1627993060268-b35e23630603?auto=format&fit=crop&w=1000&q=80',
    ],
    confidenceScore: 97,
    overview: {
      beginner: 'The Konark Sun Temple is designed as a colossal 24-wheeled chariot pulled by 7 stone horses, representing Surya the Sun God. Its 24 elaborately carved stone wheels are not just ornamental—they act as astonishingly accurate astronomical sundials!',
      scholarly: 'Constructed in the Kalinga architectural idiom during the reign of Eastern Ganga King Narasimhadeva I, the temple was oriented so that the first rays of the dawn sun would pass through the main entrance into the sanctum. The wheels serve as horological devices where the central axle casting shadows on 8 major spokes and 8 minor spokes calculates local solar time down to minutes.',
    },
    history: {
      origin: 'Conceived as a tribute to Surya the Sun God, celebrating military triumphs and celestial order.',
      creatorOrDynasty: 'King Narasimhadeva I of the Eastern Ganga Dynasty; Chief Architect: Bisu Maharana.',
      timeline: [
        { year: '1244 CE', title: 'Construction Begins', description: 'Over 1,200 master sculptors and masons mobilized along the Chandrabhaga riverbank.' },
        { year: '1250 CE', title: 'Temple Consecration', description: 'The colossal 229-foot Vimana and Jagamohana chariot consecrated with great solar festivities.' },
        { year: '1984 CE', title: 'UNESCO World Heritage Status', description: 'Inscribed as a World Heritage monument for its supreme sculptural mastery and astronomical genius.' },
      ],
      evolution: 'Though the central Vimana tower collapsed in the 17th century due to foundation subsidence and coastal storms, the surviving Jagamohana (assembly hall) and its 24 sundial wheels remain one of the crown jewels of world heritage.',
    },
    howItWorks: {
      title: 'How the 8-Spoke Sundial Calculates Solar Time',
      craftsmanshipOrArchitecture: 'Carved from Khondalite and chlorite stone with interlocking iron dowels. Each wheel measures 9 feet 9 inches in diameter with an ornate axle and 16 spokes (8 major, 8 minor).',
      materials: ['Khondalite Stone (weathered sandstone)', 'Green Chlorite Stone (for fine relief carvings)', 'Iron clamps and lead joints'],
      mechanismOrTechnique: 'The 8 major spokes divide the 24 hours of a day into 8 "Prahars" (3-hour periods). The shadow cast by the central hub axle onto the bead carvings on the wheel\'s outer rim indicates the exact minute. Each bead between spokes represents a specific subdivision of a prahar (sub-ghatikas).',
      interactiveType: 'architecture',
    },
    listen: {
      audioTitle: 'Chants of the Rigvedic Surya Sukta & Temple Chimes',
      narrationText: 'Listen to the ancient Sanskrit hymns dedicated to Surya, the cosmic timekeeper, chanted at sunrise across ancient Odisha.',
      instrumentType: 'bell',
    },
    story: {
      title: 'The Legend of Dharmapada and the Sun God\'s Chariot',
      summary: 'How 1,200 sculptors worked for 12 years to raise the colossal magnet and crown stone on the shore of the Bay of Bengal.',
      scenes: [
        {
          id: 1,
          title: 'The Vision of King Narasimhadeva',
          period: '13th Century CE',
          image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80',
          caption: 'King Narasimhadeva orders the construction of a monument that would outshine all temples of the subcontinent.',
          narration: 'Flush with victory after repelling northern invaders, the Eastern Ganga monarch envisioned a grand stone chariot that would freeze the chariot of the Sun God upon the ocean shore.',
          isArtisticReconstruction: true,
        },
        {
          id: 2,
          title: 'The 1,200 Sculptors and the Keystone Dilemma',
          period: 'c. 1250 CE',
          image: 'https://images.unsplash.com/photo-1627993060268-b35e23630603?auto=format&fit=crop&w=1000&q=80',
          caption: 'Chief architect Bisu Maharana and his guild struggled to align the massive magnetic crown stone (Kalasa) atop the 200-foot tower.',
          narration: 'For twelve years, the finest stone carvers of Odisha laboured. Yet, as the completion deadline approached, the final pinnacle stone defied stabilization.',
          isArtisticReconstruction: true,
        },
        {
          id: 3,
          title: 'Dharmapada\'s Sacrifice',
          period: 'Odisha Oral Tradition',
          image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
          caption: 'The 12-year-old boy Dharmapada climbed the spire, engineered the missing counter-balance, and saved the artisans.',
          narration: 'According to revered Odia folklore, young Dharmapada, son of the master builder, scaled the immense structure and solved the architectural puzzle, leaping into the sea to ensure the King spared his father\'s artisans.',
          isArtisticReconstruction: true,
        },
      ],
    },
    threeDModel: {
      type: 'wheel',
      description: 'Interactive 3D model of the Konark Sundial Chariot Wheel showing spokes, central axle, and perimeter medallions.',
      annotations: [
        { title: 'Central Axle Hub', description: 'Projects outwards to cast the shadow used for solar time calculation.', position: [0, 0, 0.4] },
        { title: 'Major Spoke (Prahar Marker)', description: 'One of eight wide spokes dividing the day into three-hour prahars.', position: [0, 1.2, 0.1] },
        { title: 'Minor Spoke (Inter-Prahar)', description: 'One of eight thin spokes subdividing each prahar into 90-minute intervals.', position: [0.9, 0.9, 0.1] },
        { title: 'Perimeter Rim Beads', description: 'Sixty circular beads between spokes, each calculating 3 minutes of elapsed solar time.', position: [1.8, 0, 0] },
      ],
    },
    didYouKnow: [
      'The 24 wheels of the chariot represent the 24 fortnights (Pakshas) in a year, or the 24 hours of the day.',
      'The 7 horses pulling the chariot symbolize the 7 days of the week, or the 7 colors of the solar spectrum.',
      'A depiction of the Konark Wheel is featured on the reverse side of the Indian ₹10 currency banknote!',
    ],
    relatedFigures: ['King Narasimhadeva I', 'Bisu Maharana', 'Dharmapada', 'Abul Fazl (Akbar’s courtier who praised it)'],
    sources: [
      { title: 'The Sun Temple of Konark: Architecture and Symbolism', institution: 'Archaeological Survey of India (ASI)' },
      { title: 'UNESCO World Heritage Nomination Dossier #246', institution: 'UNESCO World Heritage Centre' },
    ],
    alternativeMatches: [
      { id: 'hampi-chariot', name: 'Hampi Stone Chariot (Vittala Temple)', category: 'Royal Kingdoms', similarity: 72, reason: 'Both are iconic stone chariots with carved wheels, but Hampi is Vijayanagara granite architecture, while Konark is Kalinga sandstone.' },
    ],
  },

  // 3. Shivaji Maharaj's Jagdamba Talwar (Legendary Warriors)
  {
    id: 'jagdamba-talwar',
    name: 'Chhatrapati Shivaji Maharaj’s Jagdamba Talwar',
    nativeNames: {
      hi: 'छत्रपति शिवाजी महाराज की जगदंबा तलवार',
      te: 'ఛత్రపతి శివాజీ మహారాజ్ జగదాంబ తల్వార్',
      ta: 'சத்ரபதி சிவாஜி மகாராஜின் ஜெகதாம்பா வாள்',
      kn: 'ಛತ್ರಪತಿ ಶಿವಾಜಿ ಮಹಾರಾಜರ ಜಗದಂಬಾ ಖಡ್ಗ',
      ml: 'ഛത്രപതി ശിവാജി മഹാരാജിന്റെ ജഗദംബ വാൾ',
      bn: 'ছত্রপতি শিবাজী মহারাজের জগদম্বা তরবারি',
      mr: 'छत्रपती शिवाजी महाराजांची जगदंबा तलवार',
    },
    category: 'warriors',
    categoryLabel: 'Legendary Warriors',
    tagline: 'The historic curved blade of the Maratha founder, forged from legendary Wootz high-carbon crucible steel.',
    period: 'Maratha Empire (17th Century CE, c. 1650s-1674)',
    estimatedDate: 'Mid-17th Century (documented in Maratha Bakhars and Royal Collection inventories)',
    location: {
      name: 'Raigad Fort & Historic Maratha Citadels',
      state: 'Maharashtra',
      coordinates: [18.2346, 73.4414],
      nearestCity: 'Mahad / Pune',
    },
    imageUrl: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=1200&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=400&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80',
    ],
    confidenceScore: 94,
    overview: {
      beginner: 'The Jagdamba Talwar is one of the revered personal swords of Chhatrapati Shivaji Maharaj, the visionary founder of the Maratha Empire. Revered as an emblem of Swarajya (self-rule), righteous governance, and fearless defense of Indian culture.',
      scholarly: 'The Jagdamba is a ceremonial and martial single-edged curved talwar featuring an Indo-Muslim disc hilt, knuckle guard, and high-carbon Wootz steel (Damascus steel) blade known for its characteristic undulating watering pattern (jauhar). In 1875, it was presented to Albert Edward, Prince of Wales, during his visit to India by the Maharaja of Kolhapur, and currently resides in the Royal Collection at Saint James\'s Palace.',
    },
    history: {
      origin: 'Forged during the formative years of Hindavi Swarajya, celebrated in 17th-century contemporary Maratha chronicles (Sabhasad Bakhar).',
      creatorOrDynasty: 'Master Maratha & Spanish/Genoese armourers in service of the Bhosale Royal House; Chhatrapati Shivaji Maharaj.',
      timeline: [
        { year: '1674 CE', title: 'Coronation at Raigad', description: 'Consecrated as an insignia of sovereign authority during Shivaji Maharaj\'s royal coronation (Rajyabhisheka).' },
        { year: '1875 CE', title: 'Presented to the Prince of Wales', description: 'Given by the 14-year-old Maharaja Shivaji IV of Kolhapur as a diplomatic gift to future King Edward VII.' },
        { year: 'Present Day', title: 'Repatriation Efforts', description: 'Active diplomatic and cultural dialogue between the Government of Maharashtra, Government of India, and the UK Royal Collection for its display in India.' },
      ],
      evolution: 'Beyond a martial weapon, the sword acquired sacred significance in Maratha civic memory as a symbol of justice, religious tolerance, and guerrilla warfare resilience (Ganimi Kava).',
    },
    howItWorks: {
      title: 'Metallurgy & Ergonomics of the Maratha Talwar',
      craftsmanshipOrArchitecture: 'Manufactured through Wootz crucible steel technology pioneered in ancient South India, which infused ultra-high carbon with iron and trace vanadium/molybdenum to produce microscopic carbon nanotubes.',
      materials: ['Wootz Crucible Damascus Steel', 'Forged Iron Hilt with Gold Damascene (Koftgari) Inlay', 'Velvet-wrapped wood scabbard with brass chape'],
      mechanismOrTechnique: 'The blade curve shifts the center of percussion toward the tip, maximizing slicing velocity on horseback while the disc pommel firmly locks the wrist into an aligned thrusting angle.',
      interactiveType: 'talwar',
    },
    listen: {
      audioTitle: 'Maratha Powada Ballad & War Horn (Tutari)',
      narrationText: 'Listen to the stirring sound of the Tutari, the curved Maratha war horn that echoed across the Sahyadri mountains summoning Shivaji’s Mavala warriors.',
      instrumentType: 'shehnai',
    },
    story: {
      title: 'The Steel of Swarajya: Shivaji Maharaj and His Swords',
      summary: 'How a modest chieftain\'s son transformed jagged Sahyadri hill forts into an indomitable sovereign realm.',
      scenes: [
        {
          id: 1,
          title: 'The Oath at Raireshwar Temple',
          period: '1645 CE',
          image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=1000&q=80',
          caption: 'At age 16, Shivaji Maharaj and his youth comrades took a sacred pledge for Hindavi Swarajya.',
          narration: 'Deep inside the rain-swept forest of Raireshwar, a young Shivaji stood before the Shiva lingam. Holding his blade, he swore to build a kingdom founded on justice, religious liberty, and dignity for all farmers.',
          isArtisticReconstruction: true,
        },
        {
          id: 2,
          title: 'Mastery of Hill Forts (Ganimi Kava)',
          period: '1650s-1670s CE',
          image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80',
          caption: 'The Sahyadri mountain forts of Torna, Rajgad, and Raigad served as natural fortresses.',
          narration: 'Using terrain to outwit much larger imperial armies, the Marathas pioneered mountain mobility. Weapons were lightweight, durable, and engineered for rapid horse-mounted maneuvers.',
          isArtisticReconstruction: false,
        },
        {
          id: 3,
          title: 'The Sacred Blade of Governance',
          period: '1674 CE',
          image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=1000&q=80',
          caption: 'At the grand coronation atop Raigad, the sword was blessed as a protector of dharma and the weak.',
          narration: 'Unlike conquering tyrants, Shivaji Maharaj strictly forbade harming women, children, and holy books of any faith during campaigns. The sword was an instrument of protection, never oppression.',
          isArtisticReconstruction: true,
        },
      ],
    },
    threeDModel: {
      type: 'sword',
      description: 'Interactive 3D model of the historic curved Talwar with disc pommel and knuckle guard.',
      annotations: [
        { title: 'Wootz Steel Blade', description: 'Curved single-edged steel with distinctive watering grain pattern.', position: [0, 1.5, 0] },
        { title: 'Disc Pommel (Katora)', description: 'Circular disc with needle spike that locks the hand and wrist into the stroke.', position: [0, -1.2, 0] },
        { title: 'Knuckle Bow Guard', description: 'Protective curved steel strap protecting the fingers during close combat.', position: [0.2, -0.8, 0] },
        { title: 'Gold Koftgari Calligraphy', description: 'Fine floral gold inlay applied to the iron hilt depicting protective emblems.', position: [0, -0.6, 0.1] },
      ],
    },
    didYouKnow: [
      'Shivaji Maharaj possessed three famous named swords: the Bhavani, the Jagdamba, and the Tulja.',
      'Indian Wootz steel was so renowned in the ancient world that Roman legions imported iron ingots from Southern and Central India to forge supreme armor-piercing blades.',
      'Maratha military code strictly penalised any soldier who touched civilian crops or damaged places of worship, irrespective of religion.',
    ],
    relatedFigures: ['Chhatrapati Shivaji Maharaj', 'Tanaji Malusare', 'Baji Prabhu Deshpande', 'Jijabai Bhosale'],
    sources: [
      { title: 'Sabhasad Bakhar (17th Century Maratha Chronicle)', institution: 'State Archives of Maharashtra' },
      { title: 'Swords and Daggers of the Royal Collection: Catalogue #RCIN 67200', institution: 'Royal Collection Trust UK' },
    ],
    alternativeMatches: [
      { id: 'rajput-khanda', name: 'Rajput Khanda (Straight Broadsword)', category: 'Legendary Warriors', similarity: 68, reason: 'Khanda is a straight, heavy double-edged broadsword with reinforced back spine, whereas the Talwar is curved for slicing.' },
    ],
  },

  // 4. Chola Bronze Nataraja (Traditional Arts & Crafts)
  {
    id: 'chola-bronze-nataraja',
    name: 'Chola Bronze Nataraja (Lord of the Dance)',
    nativeNames: {
      hi: 'चोल कांस्य नटराज',
      te: 'చోళ కాంస్య నటరాజ',
      ta: 'சோழர் வெண்கல நடராஜர்',
      kn: 'ಚೋಳ ಕಂಚಿನ ನಟರಾಜ',
      ml: 'ചോള വെങ്കല നടരാജ',
      bn: 'চোল ব্রোঞ্জ নটরাজ',
      mr: 'चोल ब्राँझ नटराज',
    },
    category: 'arts',
    categoryLabel: 'Traditional Arts',
    tagline: 'The supreme pinnacle of lost-wax bronze casting depicting the cosmic rhythm of creation and destruction.',
    period: 'Chola Dynasty (10th - 11th Century CE, reign of Rajaraja I and Queen Sembiyan Mahadevi)',
    estimatedDate: 'Circa 1000 CE',
    location: {
      name: 'Thanjavur & Chidambaram',
      state: 'Tamil Nadu',
      coordinates: [10.7870, 79.1378],
      unescoStatus: true,
      nearestCity: 'Thanjavur / Kumbakonam',
    },
    imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=400&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1000&q=80',
    ],
    confidenceScore: 99,
    overview: {
      beginner: 'This iconic sculpture depicts Shiva dancing in a halo of cosmic flames (Ananda Tandava). In his upper hands he holds the drum of creation and the fire of dissolution, while his lower hands offer protection and point to his raised foot offering salvation.',
      scholarly: 'Masterminded by the hereditary Sthapathis of the Kaveri delta during the golden age of the Imperial Cholas, this Panchaloha bronze statue represents one of humanity\'s greatest syntheses of metaphysics, astronomy, and kinetic metallurgy. World-renowned astrophysicist Carl Sagan celebrated it as the ultimate metaphor for the cosmic dance of subatomic particles.',
    },
    history: {
      origin: 'Conceived in the temple city of Thillai Nataraja at Chidambaram and patrons like Queen Sembiyan Mahadevi.',
      creatorOrDynasty: 'Imperial Chola Guilds of Sthapathis (Swamimalai bronze artisans).',
      timeline: [
        { year: 'c. 950 CE', title: 'Queen Sembiyan Mahadevi Patronage', description: 'The devout Chola queen commissions enduring bronze icons for stone temples across the Kaveri basin.' },
        { year: 'c. 1010 CE', title: 'Brihadisvara Temple Grandeur', description: 'Emperor Rajaraja I inaugurates mammoth bronzes carried in majestic temple processions.' },
        { year: '2004 CE', title: 'CERN Geneva Installation', description: 'A two-meter statue of the Chola Nataraja unveiled at the CERN European Particle Physics Laboratory.' },
      ],
      evolution: 'Designed originally as Utsava Murti (mobile procession deities taken out into the streets so every common citizen could see them), the bronze Nataraja has become a universal symbol of Indian philosophy worldwide.',
    },
    howItWorks: {
      title: 'Lost-Wax Casting (Cire Perdue) & Panchaloha Alchemy',
      craftsmanshipOrArchitecture: 'Hand-sculpted first from a wax mixture of pure beeswax, dammar gum, and castor oil. The wax model is layered with alluvial silt from the Kaveri River, dried, heated so the wax drains out, and molten five-metal alloy is poured into the hollow cavity.',
      materials: ['Panchaloha (sacred alloy of Copper, Tin, Zinc, Gold, and Silver)', 'Fine alluvial clay from River Kaveri', 'Natural beeswax & wild dammar resin'],
      mechanismOrTechnique: 'Dynamic counterbalance: Shiva balances on his bent right leg upon the demon Apasmara (symbolizing cosmic ignorance and ego), with four arms radiating within a circular Prabhamandala (aureole of fire).',
      interactiveType: 'generic',
    },
    listen: {
      audioTitle: 'Chidambaram Temple Bells & Nataraja Stotram',
      narrationText: 'Listen to the ringing of ancient bronze temple bells and the rhythmic chanting of the Nataraja Ashtakam.',
      instrumentType: 'bell',
    },
    story: {
      title: 'The Cosmic Rhythm: Dance of the Five Elements',
      summary: 'Understanding the five divine activities (Pancha-kritya) frozen into timeless bronze.',
      scenes: [
        {
          id: 1,
          title: 'Creation and Destruction in Balance',
          period: 'Metaphysical Representation',
          image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80',
          caption: 'The Damaru hourglass drum vibrates the sound of primal creation, while the flame in the left palm represents cyclical dissolution.',
          narration: 'In the right hand rests the drum from which time and space emanate; in the left, the fire that returns all matter back into pure potential. Creation and dissolution are not opposing forces, but rhythmic heartbeats of one cosmos.',
          isArtisticReconstruction: false,
        },
        {
          id: 2,
          title: 'Fear Not: The Gesture of Protection',
          period: 'Sacred Symbolism',
          image: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1000&q=80',
          caption: 'The Abhaya Mudra reassures seekers, while the uplifted left foot signifies liberation from worldly delusion.',
          narration: 'The lower right palm raised outward proclaims "Do not fear." The diagonal left arm sweeps gracefully across the chest, pointing like an elephant trunk to the lifted foot of liberation.',
          isArtisticReconstruction: false,
        },
        {
          id: 3,
          title: 'The Altar of Modern Physics at CERN',
          period: 'Contemporary Era',
          image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
          caption: 'At the world’s foremost particle accelerator in Switzerland, a plaque honors the Chola bronze as a vision of modern quantum mechanics.',
          narration: 'Physicist Fritjof Capra observed: "Every subatomic particle not only does an energy dance, but is also an energy dance. The dance of Shiva is the dance of subatomic matter."',
          isArtisticReconstruction: false,
        },
      ],
    },
    threeDModel: {
      type: 'nataraja',
      description: 'Interactive 3D model of the Chola Nataraja with aureole of fire and four cosmic arms.',
      annotations: [
        { title: 'Damaru (Hourglass Drum)', description: 'Upper right hand holding the instrument of sound, rhythm, and cosmic genesis.', position: [-1.2, 1.4, 0.2] },
        { title: 'Agni (Primal Flame)', description: 'Upper left hand cradling the fire of transformation and cosmic destruction.', position: [1.2, 1.4, 0.2] },
        { title: 'Abhaya Mudra (Hand of Fearlessness)', description: 'Lower right hand gesture reassuring living beings that they are safe in the universe.', position: [-0.6, 0.5, 0.3] },
        { title: 'Apasmara Purusha (Demon of Ignorance)', description: 'Dwarf trampled beneath the right foot, embodying forgetfulness, pride, and illusion.', position: [0, -1.5, 0] },
      ],
    },
    didYouKnow: [
      'The hereditary bronze casters of Swamimalai, Tamil Nadu, still follow the exact Shilpa Shastra proportions written down over 1,200 years ago.',
      'A true Chola bronze is cast solid (Ghana) rather than hollow, giving it immense weight, metallic resonance, and centuries of structural durability.',
      'The ring of fire (Prabhamandala) contains exactly 108 flames in classical sculptures, mirroring the 108 Karanas (fundamental dance poses) of Indian classical dance.',
    ],
    relatedFigures: ['Rajaraja Chola I', 'Queen Sembiyan Mahadevi', 'Carl Sagan', 'Fritjof Capra'],
    sources: [
      { title: 'Chola Bronzes of South India', institution: 'Government Museum Chennai & ASI' },
      { title: 'The Tao of Physics & Cosmos: Cosmic Dance Metaphor', institution: 'CERN Cultural Archives' },
    ],
    alternativeMatches: [
      { id: 'harappan-dancing-girl', name: 'Harappan Dancing Girl', category: 'Ancient India', similarity: 61, reason: 'Both are bronze sculptures depicting dance, but the Harappan figurine is prehistoric Indus Valley (lost-wax 2300 BCE), while Nataraja is Chola devotional bronze.' },
    ],
  },

  // 5. Ashoka Lion Capital (Ancient India)
  {
    id: 'ashoka-lion-capital',
    name: 'Lion Capital of Ashoka (Sarnath)',
    nativeNames: {
      hi: 'अशोक सिंह स्तम्भ शीर्ष',
      te: 'అశోక సింహ స్థూప శిఖరం',
      ta: 'அசோக சிம்மத் தூண் தலைப்பகுதி',
      kn: 'ಅಶೋಕ ಸಿಂಹ ಲಾಂಛನ',
      ml: 'അശോക സിംഹസ്തംഭ ശീർഷം',
      bn: 'অশোক সিংহ রাজধানী',
      mr: 'अशोक सिंहस्तंभ राजधानी',
    },
    category: 'ancient',
    categoryLabel: 'Ancient India',
    tagline: 'The magnificent Mauryan polished sandstone capital that became the National Emblem of India.',
    period: 'Mauryan Empire (c. 250 BCE)',
    estimatedDate: 'Erected around 250 BCE by Emperor Ashoka the Great',
    location: {
      name: 'Sarnath Deer Park Archaeological Site',
      state: 'Uttar Pradesh',
      coordinates: [25.3813, 83.0232],
      nearestCity: 'Varanasi',
    },
    imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=400&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80',
    ],
    confidenceScore: 98,
    overview: {
      beginner: 'The Lion Capital features four majestic Asiatic lions standing back-to-back atop an inverted lotus base. Adopted as India\'s official National Emblem in 1950, it incorporates the Ashoka Chakra (Dharma wheel) that sits at the center of the Indian national flag.',
      scholarly: 'Erected by the Mauryan Emperor Ashoka at the Deer Park in Sarnath where Gautama Buddha delivered his first sermon (Dharmachakrapravartana), this 7-foot sculpture is carved from a single block of yellow-buff Chunar sandstone. It is celebrated for its glassy, mirror-like "Mauryan polish", a secret metallurgical and abrasive technique that has resisted two millennia of atmospheric decay.',
    },
    history: {
      origin: 'Commemorates Emperor Ashoka\'s conversion to Buddhism and his policy of Dhamma (righteous civic conduct) following the devastating Kalinga War.',
      creatorOrDynasty: 'Mauryan Imperial Guilds under Emperor Ashoka (Priyadarshi).',
      timeline: [
        { year: 'c. 261 BCE', title: 'The Kalinga Transformation', description: 'Grieved by wartime slaughter, Ashoka renounces aggressive warfare in favor of Dhamma Vijaya (victory through moral law).' },
        { year: 'c. 250 BCE', title: 'Erection at Sarnath', description: 'Carved and erected atop a 50-foot monolithic pillar at the site of Buddha\'s first sermon.' },
        { year: '1905 CE', title: 'Archaeological Excavation', description: 'Excavated in near-pristine condition by British archaeologist F.O. Oertel.' },
        { year: '1950 CE', title: 'Adopted as National Emblem', description: 'Adopted by the Constituent Assembly on 26 January 1950, with the motto "Satyameva Jayate" (Truth Alone Triumphs).' },
      ],
      evolution: 'It transformed from an imperial Buddhist proclamation into the supreme symbol of sovereign Indian democracy, truth, and peace.',
    },
    howItWorks: {
      title: 'Mauryan Stonework & Mirror Polishing',
      craftsmanshipOrArchitecture: 'Hewn from a single monolithic boulder of fine-grained Chunar sandstone quarried near Mirzapur, transported 50 miles along the Ganges, and finished with agate rubbing abrasives.',
      materials: ['Chunar Buff Sandstone', 'Agate and lead polishing abrasives'],
      mechanismOrTechnique: 'Four lions stand back-to-back facing the four cardinal directions. Below them, an abacus depicts four energetic animals: an elephant (east), a galloping horse (south), a bull (west), and a lion (north), interspersed with 24-spoke Dharma Chakras.',
      interactiveType: 'generic',
    },
    listen: {
      audioTitle: 'Chanting of Satyameva Jayate from Mundaka Upanishad',
      narrationText: 'Listen to the timeless Sanskrit motto inscribed below the emblem: Satyameva Jayate Nanritam—Truth alone triumphs, not untruth.',
      instrumentType: 'bell',
    },
    story: {
      title: 'From Conquest to Conscience: The Path of Ashoka',
      summary: 'The remorse of an emperor that birthed the world\'s most progressive early welfare state.',
      scenes: [
        {
          id: 1,
          title: 'The Carnage of Kalinga',
          period: 'c. 261 BCE',
          image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80',
          caption: 'Over 100,000 soldiers perished on the Daya riverbank in Odisha, turning its waters crimson.',
          narration: 'Surveying the battlefield of Kalinga, Emperor Ashoka was stricken with profound sorrow. In his Rock Edicts, he recorded: "Even a fraction of the dead, wounded, or displaced weighs heavily on the Beloved of the Gods."',
          isArtisticReconstruction: true,
        },
        {
          id: 2,
          title: 'Proclamation of Dhamma Across the Realm',
          period: 'c. 250 BCE',
          image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
          caption: 'Pillars and rock edicts were raised from Afghanistan to Karnataka preaching nonviolence, free hospitals for humans and animals, and religious harmony.',
          narration: 'Ashoka pioneered universal healthcare, planted banyan shade trees along roads, dug wells, and protected wildlife—inscribing laws in everyday Prakrit and Greek dialects.',
          isArtisticReconstruction: false,
        },
        {
          id: 3,
          title: 'The Emblem of Modern India',
          period: '26 January 1950',
          image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80',
          caption: 'India chose four lions of moral strength and the wheel of lawful progress for its democratic insignia.',
          narration: 'When independent India drafted its Constitution, leaders chose not a crown or a weapon, but Ashoka\'s lions—a declaration that power in India is legitimate only when guided by truth and moral courage.',
          isArtisticReconstruction: false,
        },
      ],
    },
    threeDModel: {
      type: 'stupa',
      description: 'Interactive 3D model of the Sarnath Capital with four lions, abacus reliefs, and inverted lotus bell.',
      annotations: [
        { title: 'Asiatic Lions', description: 'Four lions symbolizing roar of the law (Simhanada) proclaiming Dhamma to the four winds.', position: [0, 1.2, 0] },
        { title: 'Dharma Chakra (24 Spokes)', description: 'The cosmic wheel of life and law, each spoke signifying a virtue.', position: [0.6, 0.1, 0.4] },
        { title: 'Galloping Horse & Bull', description: 'High-relief animal friezes carved with anatomical vigor around the circular abacus.', position: [-0.6, 0.1, 0.4] },
        { title: 'Inverted Bell Lotus', description: 'The base motif evoking purity blooming pristine out of murky waters.', position: [0, -0.8, 0] },
      ],
    },
    didYouKnow: [
      'The fourth lion is situated at the back and cannot be seen from a direct frontal angle, which is why the 2D Indian emblem shows only three lions.',
      'The mirror polish of Mauryan sandstone was so smooth that early British travelers believed the pillars were cast in brass rather than carved stone.',
      'The 24 spokes of the Ashoka Chakra on the Indian flag symbolize 24 hourly principles of life, including courage, patience, kindness, and self-sacrifice.',
    ],
    relatedFigures: ['Emperor Ashoka', 'Gautama Buddha', 'B.R. Ambedkar (who championed its adoption)', 'F.O. Oertel'],
    sources: [
      { title: 'Mauryan Art and Architecture: Sarnath Capital Monograph', institution: 'Archaeological Survey of India (ASI)' },
      { title: 'National Portal of India: State Emblem of India', institution: 'Ministry of Home Affairs, Government of India' },
    ],
  },

  // 6. Hampi Stone Chariot (Royal Kingdoms)
  {
    id: 'hampi-stone-chariot',
    name: 'Hampi Stone Chariot (Vijayanagara)',
    nativeNames: {
      hi: 'हम्पी का प्रस्तर रथ',
      te: 'హంపి రాతి రథం',
      ta: 'ஹம்பி கல் தேர்',
      kn: 'ಹಂಪಿ ಕಲ್ಲಿನ ರಥ',
      ml: 'ഹംപിയിലെ കല്ല് രഥം',
      bn: 'হাম্পির পাথরের রথ',
      mr: 'हम्पीचा दगडी रथ',
    },
    category: 'kingdoms',
    categoryLabel: 'Royal Kingdoms',
    tagline: 'The magnificent monolithic granite chariot shrine of the Vijayanagara Empire.',
    period: 'Vijayanagara Empire (16th Century CE, reign of King Krishnadevaraya)',
    estimatedDate: 'Circa 1513 CE',
    location: {
      name: 'Vittala Temple Complex, Hampi',
      state: 'Karnataka',
      coordinates: [15.3350, 76.4600],
      unescoStatus: true,
      nearestCity: 'Hosapete / Ballari',
    },
    imageUrl: 'https://images.unsplash.com/photo-1600100397608-f010f444f499?auto=format&fit=crop&w=1200&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1600100397608-f010f444f499?auto=format&fit=crop&w=400&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80',
    ],
    confidenceScore: 96,
    overview: {
      beginner: 'Located inside the spectacular Vittala Temple complex at Hampi, this stone chariot is actually a dedicated shrine to Garuda, the eagle mount of Lord Vishnu. Though it appears to be carved from a single boulder, its granite slabs are interlocked with hidden mortise and tenon joints!',
      scholarly: 'Erected under the patronage of the greatest Vijayanagara ruler, Emperor Krishnadevaraya, after his triumphant military expedition to Udayagiri (Odisha) where he was inspired by the Konark Sun Temple. Unlike the sandstone chariot of Konark, Hampi\'s chariot was engineered from ultra-hard crystalline Deccan granite. Its stone wheels once freely rotated on their axles until modern conservation locked them to prevent wear.',
    },
    history: {
      origin: 'Built as a Garuda shrine facing the sanctum of the Vittala Temple during the golden age of Vijayanagara.',
      creatorOrDynasty: 'Emperor Krishnadevaraya of the Tuluva Dynasty (Vijayanagara Empire).',
      timeline: [
        { year: '1513 CE', title: 'Commissioned by Krishnadevaraya', description: 'Following his Kalinga campaign, the emperor commissioned the chariot and dedicated golden ornaments.' },
        { year: '1565 CE', title: 'Battle of Talikota', description: 'The grand metropolis of Vijayanagara sacked, yet the sturdy granite chariot survived largely intact.' },
        { year: '1986 CE', title: 'UNESCO Inscription', description: 'Recognized as part of the Group of Monuments at Hampi World Heritage Site.' },
      ],
      evolution: 'It originally featured a painted brick-and-mortar Shikhara dome atop the granite pavilion, which was dismantled in the late 19th century by colonial conservators to preserve structural balance.',
    },
    howItWorks: {
      title: 'Deccan Granite Jointing & Rotating Wheels',
      craftsmanshipOrArchitecture: 'Built with interlocking granite blocks disguised so masterfully that the entire structure appears monolithic. Two stone elephants stand guard at the front ramp.',
      materials: ['Grey Deccan Granite', 'Lime plaster stucco remnants', 'Hardwood axle pins (historic)'],
      mechanismOrTechnique: 'The four circular wheels feature concentric lotus petals and hub caps. Historically, pilgrims could gently rotate the heavy granite wheels during festival processions.',
      interactiveType: 'architecture',
    },
    listen: {
      audioTitle: 'Hampi Vittala Musical Pillars Acoustic Resonance',
      narrationText: 'Listen to the ringing acoustic notes produced by the famous nearby musical granite pillars of the Vittala Temple.',
      instrumentType: 'bell',
    },
    story: {
      title: 'City of Victory: The Grandeur of Vijayanagara',
      summary: 'The jewel of the Tungabhadra River where ruby and diamond markets once operated openly on the avenues.',
      scenes: [
        {
          id: 1,
          title: 'The Empire of Gemstones',
          period: '16th Century CE',
          image: 'https://images.unsplash.com/photo-1600100397608-f010f444f499?auto=format&fit=crop&w=1000&q=80',
          caption: 'Portuguese chronicler Domingo Paes documented that pearls, rubies, and emeralds were sold by the bushel in Hampi’s bazaar.',
          narration: 'Vijayanagara was one of the largest and wealthiest cities in the Renaissance world. Travelers from Persia, Venice, and Portugal marveled at its stone aqueducts, fragrant bazaars, and vibrant temple festivals.',
          isArtisticReconstruction: true,
        },
        {
          id: 2,
          title: 'The Chariot that Survived an Empire',
          period: '1565 CE to Present',
          image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80',
          caption: 'Surrounded by the boulder-strewn Tungabhadra landscape, the chariot stands as an eternal sentinel.',
          narration: 'Though time and invasions brought down the golden towers of the capital, the granite chariot remains unbroken. Today, it graces the Indian ₹50 banknote as an immortal symbol of South Indian stone architecture.',
          isArtisticReconstruction: false,
        },
      ],
    },
    threeDModel: {
      type: 'wheel',
      description: 'Interactive 3D model of the Hampi Stone Chariot showing wheels, elephant ramp, and Garuda shrine pavilion.',
      annotations: [
        { title: 'Granite Wheel', description: 'Carved with delicate floral spokes; formerly rotated around central stone axles.', position: [1.2, -0.6, 0.4] },
        { title: 'Guardian Elephants', description: 'Two stone elephants flanking the front access stairs leading up to the shrine.', position: [-1.4, -0.7, 0] },
        { title: 'Garuda Shrine Sanctum', description: 'The inner sanctum that originally housed an icon of Garuda facing Lord Vishnu.', position: [0, 0.5, 0] },
      ],
    },
    didYouKnow: [
      'The Hampi Stone Chariot is one of only three famous stone chariots in India (the other two being Konark in Odisha and Mahabalipuram in Tamil Nadu).',
      'The stone elephants at the entrance were actually moved here in recent centuries; two stone horses originally stood before the chariot shafts.',
      'The chariot is featured on the cyan-colored ₹50 Indian currency banknote.',
    ],
    relatedFigures: ['Emperor Krishnadevaraya', 'Tenali Rama', 'Domingo Paes', 'Abdur Razzaq'],
    sources: [
      { title: 'Hampi Vijayanagara: Archaeological Survey Guide', institution: 'Archaeological Survey of India (ASI)' },
      { title: 'Vijayanagara: Courtly and Sacred Splendour', institution: 'UNESCO World Heritage Centre' },
    ],
  },

  // 7. Living Root Bridges of Meghalaya (Natural Wonders & Indigenous Engineering)
  {
    id: 'living-root-bridges',
    name: 'Living Root Bridges of Meghalaya (Jingkieng Jri)',
    nativeNames: {
      hi: 'मेघालय के जीवित जड़ पुल',
      te: 'మేఘాలయ జీవ వేర్ల వంతెనలు',
      ta: 'மேகாலயா உயிருள்ள வேர் பாலங்கள்',
      kn: 'ಮೇಘಾಲಯದ ಜೀವಂತ ಬೇರುಗಳ ಸೇತುವೆ',
      ml: 'മേഘാലയയിലെ ജീവനുള്ള വേരുകൾ കൊണ്ടുള്ള പാലങ്ങൾ',
      bn: 'মেঘালয়ের জীবন্ত শিকড় সেতু',
      mr: 'मेघालयातील जिवंत मुळांचे पूल',
    },
    category: 'nature',
    categoryLabel: 'Natural Wonders',
    tagline: 'Living architectural bridges hand-woven across rainforest rivers over generations from tree roots.',
    period: 'Centuries-old Indigenous Living Tradition (Documented since 1844)',
    estimatedDate: 'Evolving continuously over 100 to 500+ years',
    location: {
      name: 'Nongriat & Cherrapunji (Sohra)',
      state: 'Meghalaya',
      coordinates: [25.2750, 91.6700],
      unescoStatus: false, // On Tentative List
      nearestCity: 'Shillong',
    },
    imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1000&q=80',
    ],
    confidenceScore: 97,
    overview: {
      beginner: 'Deep in the rainy subtropical valleys of Meghalaya, indigenous Khasi and Jaintia villagers guide the pliable aerial roots of Indian rubber trees across roaring rivers. Unlike steel or concrete bridges that rust and deteriorate, these living bridges grow stronger with every passing decade!',
      scholarly: 'Known as Jingkieng Jri in the Khasi tongue, these botanical structures represent a premier global paradigm of regenerative bio-engineering. Using hollowed areca palm (betel nut) trunks to direct the aerial roots of Ficus elastica across gorge chasms, multiple generations weave the roots together, allowing natural inosculation (grafting) to fuse them into high-tensile living pedestrian crossings supporting 50+ people simultaneously.',
    },
    history: {
      origin: 'Developed out of ecological necessity to navigate torrential monsoon flash floods in the wettest region on Earth.',
      creatorOrDynasty: 'Indigenous Khasi and Jaintia Tribal Communities of the Khasi Hills.',
      timeline: [
        { year: 'c. 1500 CE', title: 'Indigenous Oral Traditions', description: 'Ancestors formulate sustainable forestry practices to traverse swollen river valleys during heavy monsoons.' },
        { year: '1844 CE', title: 'First Western Scientific Account', description: 'Lieutenant Henry Yule publishes the first detailed sketches and descriptions in the Journal of the Asiatic Society of Bengal.' },
        { year: '2022 CE', title: 'UNESCO Tentative List', description: 'Included on India\'s UNESCO World Heritage tentative list for remarkable socio-ecological ingenuity.' },
      ],
      evolution: 'From ancient survival routes to an internationally acclaimed model for climate-resilient organic architecture.',
    },
    howItWorks: {
      title: 'The Bio-Engineering of Inosculation',
      craftsmanshipOrArchitecture: 'Guided across river gorges using hollowed Areca catechu palm trunks as temporary scaffolding. The living roots latch onto soil and rocks on the opposite bank, thickening and knotting together over 15 to 30 years.',
      materials: ['Living Ficus elastica (Indian Rubber Fig tree roots)', 'Areca palm directional conduits', 'River boulders & living vegetation bedding'],
      mechanismOrTechnique: 'Natural Inosculation: when two roots press firmly against each other under tension, their bark rubs away and the vascular cambiums merge, permanently fusing into a single living truss structure.',
      interactiveType: 'generic',
    },
    listen: {
      audioTitle: 'Rainforest Sounds & Khasi Folk Melody',
      narrationText: 'Listen to the roaring monsoon streams and birdsong echoing through the pristine cloud forests of Meghalaya.',
      instrumentType: 'bansuri',
    },
    story: {
      title: 'A Bridge Grown with Love Across Generations',
      summary: 'How a bridge is planted by a grandparent so that their great-grandchildren may cross safely.',
      scenes: [
        {
          id: 1,
          title: 'Planting the Foundation',
          period: 'Year 0 to 15',
          image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80',
          caption: 'Young roots are guided through hollow palm trunks across raging mountain streams.',
          narration: 'No one who starts a root bridge ever lives to see it fully completed. It is a profound act of intergenerational trust: building not for oneself, but for children unborn.',
          isArtisticReconstruction: false,
        },
        {
          id: 2,
          title: 'The Living Double-Decker Wonder',
          period: 'Century of Growth',
          image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1000&q=80',
          caption: 'At Nongriat, when extreme monsoon rains submerged the lower bridge, villagers grew a second upper deck above it!',
          narration: 'The world-famous Umshiang Double-Decker Bridge stands testimony to human adaptation. While modern concrete bridges in the region wash away during heavy floods, the living root bridge anchors ever deeper into the bedrock.',
          isArtisticReconstruction: false,
        },
      ],
    },
    threeDModel: {
      type: 'temple',
      description: 'Interactive 3D model of the natural bridge span showing intertwined roots, handrails, and stone pathways.',
      annotations: [
        { title: 'Main Living Root Cable', description: 'Massive primary root cables anchored deep into rocky riverbanks.', position: [0, 0, 0] },
        { title: 'Living Handrail', description: 'Intertwined secondary roots woven into safe waist-high safety railings.', position: [0, 0.8, 0.5] },
        { title: 'Stone Stepping Bed', description: 'Flat river pebbles pressed into root crevices providing a non-slip walking surface.', position: [0, -0.2, 0] },
      ],
    },
    didYouKnow: [
      'Some root bridges in Meghalaya are estimated to be over 500 years old, carrying villagers across monsoons year after year.',
      'Unlike artificial materials that weaken with age and moisture, high humidity and rain make the living roots healthier, thicker, and stronger.',
      'A single living bridge can withstand the weight of more than 50 people at once without shaking.',
    ],
    relatedFigures: ['Khasi Village Elders', 'Lieutenant Henry Yule', 'Living Root Bridge Conservation Guilds'],
    sources: [
      { title: 'Living Root Bridges: State of the Art Report', institution: 'UNESCO Tentative List Dossier #6607' },
      { title: 'Botanical Architecture of the Khasi Hills', institution: 'Journal of the Asiatic Society of Bengal' },
    ],
  },

  // 8. Tabla (Musical Heritage)
  {
    id: 'tabla-percussion',
    name: 'Classical Indian Tabla (Dayan & Bayan)',
    nativeNames: {
      hi: 'तबला',
      te: 'తబలా',
      ta: 'தபலா',
      kn: 'ತಬಲಾ',
      ml: 'തബല',
      bn: 'তবলা',
      mr: 'तबला',
    },
    category: 'music',
    categoryLabel: 'Musical Heritage',
    tagline: 'The supreme percussion duo of Indian classical music capable of melodic tonality and lightning rhythms.',
    period: 'Medieval to Modern Classical Era (Developed from ancient Pushkara drums & Pakhawaj)',
    estimatedDate: 'Documented 13th - 18th Century CE; attributed to Amir Khusrau and Delhi Gharana masters',
    location: {
      name: 'Delhi, Lucknow, Benares, Punjab & Farrukhabad Gharanas',
      state: 'Delhi / Uttar Pradesh / Punjab',
      coordinates: [28.6139, 77.2090],
      nearestCity: 'New Delhi / Varanasi',
    },
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
    confidenceScore: 97,
    overview: {
      beginner: 'The Tabla consists of a pair of hand drums: the smaller wooden treble drum played with the right hand (Dayan), and the larger rounded metal bass drum played with the left hand (Bayan). Together, they produce an astonishing vocabulary of spoken syllables called "Bols" (Ta, Tin, Dhin, Dha, Ge, Ke).',
      scholarly: 'The acoustic miracle of the tabla lies in its central black paste circle called the Syahi (or Gab). Made of iron filings, soot, and starch, the Syahi adds calibrated mass to the goat skin membrane, suppressing non-harmonic overtones and enabling a membrane drum to produce pure harmonic pitches and sustained bell-like resonance.',
    },
    history: {
      origin: 'Evolved from ancient Indian barrel drums (Pushkara and Mridangam) and Persian rhythms during the Delhi Sultanate era.',
      creatorOrDynasty: 'Traditionally associated with Amir Khusrau; codified into distinct artistic lineages (Gharanas) such as Delhi, Lucknow, Farrukhabad, and Benares.',
      timeline: [
        { year: 'c. 1300 CE', title: 'Musical Synthesis', description: 'Amir Khusrau experiments with splitting the traditional Pakhawaj drum into two complementary components.' },
        { year: 'c. 1750 CE', title: 'Delhi Gharana Codification', description: 'Ustad Sidhar Khan Dadhi formalizes the classical two-finger (Do-ungli) technique and Peshkar compositions.' },
        { year: '20th Century', title: 'Global Renaissance', description: 'Ustad Alla Rakha and Ustad Zakir Hussain popularize Indian rhythmic mastery on global festival stages.' },
      ],
      evolution: 'Once confined to intimate royal court mehfils, the tabla is today recognized universally as one of the most sophisticated percussion instruments in global music.',
    },
    howItWorks: {
      title: 'Acoustic Science of the Multi-Layered Syahi Membrane',
      craftsmanshipOrArchitecture: 'The Dayan is turned from dense seasoned sheesham or mahogany wood, while the Bayan is hammered from copper or brass. Leather straps (Baddhi) tension the triple-layered goat skin head (Puri).',
      materials: ['Seasoned Rosewood / Sheesham (Dayan body)', 'Hammered Copper / Brass (Bayan bowl)', 'Goat Skin, Camel Leather straps, Iron paste (Syahi)'],
      mechanismOrTechnique: 'Modulating heel pressure: On the bass Bayan, sliding the wrist heel across the skin while striking creates continuous vocal pitch bends (Meend), while crisp finger strikes on the Dayan rim generate sharp harmonic rings.',
      interactiveType: 'tabla',
    },
    listen: {
      audioTitle: 'Teentaal Classical Tabla Solo (16 Beats)',
      narrationText: 'Listen to the foundational 16-beat rhythmic cycle of Hindustani music: Dha Dhin Dhin Dha / Dha Dhin Dhin Dha / Dha Tin Tin Ta / Ta Dhin Dhin Dha.',
      instrumentType: 'tabla',
    },
    story: {
      title: 'The Talking Drums: The Spoken Language of Rhythm',
      summary: 'How rhythmic poetry transforms into blistering finger speed on stretched leather.',
      scenes: [
        {
          id: 1,
          title: 'The Black Miracle: Crafting the Syahi',
          period: 'Traditional Craftsmanship',
          image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80',
          caption: 'Artisans apply micro-layers of magnetic iron dust and cooked rice glue, burnishing each coat with a smooth river agate stone.',
          narration: 'A drumhead typically vibrates chaotically. But by applying the circular black Syahi layer by layer, Indian craftsmen solved a complex acoustic equation hundreds of years before European physicists.',
          isArtisticReconstruction: false,
        },
        {
          id: 2,
          title: 'Padhant: Reciting the Rhythm in Words',
          period: 'Rhythmic Education',
          image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80',
          caption: 'Before striking a note, a tabla player must articulate the lightning poetry of rhythm with the voice.',
          narration: 'In the Guru-Shishya parampara, a student spends years reciting bols: "Dha-tere-kete-tak...". If you cannot pronounce the cadence with your tongue, your fingers will never play it with clarity.',
          isArtisticReconstruction: false,
        },
      ],
    },
    threeDModel: {
      type: 'bansuri',
      description: 'Interactive 3D model of Dayan and Bayan with tuning blocks, straps, and syahi heads.',
      annotations: [
        { title: 'Dayan (Treble Drum)', description: 'Tuned to the precise tonic keynote (Sa) of the soloist.', position: [-0.6, 0, 0] },
        { title: 'Bayan (Bass Drum)', description: 'Produces warm resonant bass tones with palm heel pitch modulation.', position: [0.6, 0, 0] },
        { title: 'Syahi (Tuning Spot)', description: 'The composite iron paste center that produces musical harmonics.', position: [0, 0.5, 0] },
      ],
    },
    didYouKnow: [
      'Nobel laureate physicist C.V. Raman published pioneering acoustic research in 1934 proving that the Indian tabla and mridangam are the only drums in the world that produce exact harmonic overtones like stringed instruments!',
      'Wooden cylindrical pegs (Gattas) wedged under the leather straps are hammered up or down to tune the drum to microtonal precision.',
      'The word Tabla originates from the Arabic word "tabl", meaning drum, reflecting the rich synthesis of medieval cultural exchanges.',
    ],
    relatedFigures: ['Ustad Zakir Hussain', 'Ustad Alla Rakha', 'Pandit Kishan Maharaj', 'C.V. Raman'],
    sources: [
      { title: 'The Indian Musical Drums (Proceedings of Indian Academy of Sciences)', institution: 'Prof. C.V. Raman (1934)' },
      { title: 'Gharanas of Indian Percussion', institution: 'Sangeet Natak Akademi' },
    ],
  },
];

// Helper to look up items
export function getHeritageItemById(id: string): HeritageItem | undefined {
  return HERITAGE_ITEMS.find((item) => item.id === id);
}

export function getHeritageItemsByCategory(category: string): HeritageItem[] {
  if (category === 'all') return HERITAGE_ITEMS;
  return HERITAGE_ITEMS.filter((item) => item.category === category);
}

export function searchHeritageItems(query: string): HeritageItem[] {
  const q = query.toLowerCase().trim();
  if (!q) return HERITAGE_ITEMS;
  return HERITAGE_ITEMS.filter((item) => {
    return (
      item.name.toLowerCase().includes(q) ||
      item.tagline.toLowerCase().includes(q) ||
      item.location.name.toLowerCase().includes(q) ||
      item.location.state.toLowerCase().includes(q) ||
      item.period.toLowerCase().includes(q) ||
      item.relatedFigures.some((f) => f.toLowerCase().includes(q)) ||
      Object.values(item.nativeNames).some((val) => val?.toLowerCase().includes(q))
    );
  });
}
