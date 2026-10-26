import { SupportedLanguage } from '@/types/heritage';

export interface TranslationDictionary {
  appTitle: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  discoverWithCamera: string;
  exploreIndia: string;
  searchPlaceholder: string;
  navHome: string;
  navExplore: string;
  navCamera: string;
  navDiscoveries: string;
  navProfile: string;
  collections: {
    all: string;
    ancient: string;
    warriors: string;
    sacred: string;
    music: string;
    kingdoms: string;
    arts: string;
    nature: string;
  };
  nearbyHeritageTitle: string;
  nearbyHeritageSubtitle: string;
  locationPermissionPrompt: string;
  enableLocation: string;
  demoScansTitle: string;
  demoScansSubtitle: string;
  detailTabs: {
    overview: string;
    history: string;
    howItWorks: string;
    listen: string;
    story: string;
    threeD: string;
    didYouKnow: string;
  };
  playInteractiveExperience: string;
  saveDiscovery: string;
  saved: string;
  share: string;
  depthBeginner: string;
  depthScholarly: string;
  bringHistoryToLife: string;
  sourcesAndReferences: string;
  alternativeMatches: string;
  cameraTitle: string;
  cameraSubtitle: string;
  capturePhoto: string;
  uploadGallery: string;
  analyzingImage: string;
  confidenceMatch: string;
  noCameraFound: string;
  tryDemoScan: string;
}

export const TRANSLATIONS: Record<SupportedLanguage, TranslationDictionary> = {
  en: {
    appTitle: 'BharatDarshan',
    tagline: 'India’s Interactive AI Heritage Explorer',
    heroHeadline: 'Every Photo Holds a Story.',
    heroSubheadline: 'Photograph India’s living heritage, monuments, sacred temples, artifacts, warrior weaponry, and traditional instruments to instantly unlock their history.',
    discoverWithCamera: 'Discover with Camera',
    exploreIndia: 'Explore India Map',
    searchPlaceholder: 'Search monuments, warriors, bansuri, temples, artifacts...',
    navHome: 'Home',
    navExplore: 'Explore',
    navCamera: 'Scan Heritage',
    navDiscoveries: 'My Discoveries',
    navProfile: 'Profile & Settings',
    collections: {
      all: 'All Heritage',
      ancient: 'Ancient India',
      warriors: 'Legendary Warriors',
      sacred: 'Sacred Architecture',
      music: 'Musical Heritage',
      kingdoms: 'Royal Kingdoms',
      arts: 'Traditional Arts',
      nature: 'Natural Wonders',
    },
    nearbyHeritageTitle: 'Heritage Near You',
    nearbyHeritageSubtitle: 'Discover ancient wonders and cultural landmarks around your current location.',
    locationPermissionPrompt: 'Enable GPS location to discover sacred monuments, forts, and heritage sites near you.',
    enableLocation: 'Find Nearby Heritage',
    demoScansTitle: 'Try an Instant Scan',
    demoScansSubtitle: 'Explore sample cultural treasures to see AI recognition and interactive simulations in action.',
    detailTabs: {
      overview: 'Overview',
      history: 'History & Timeline',
      howItWorks: 'How It Works',
      listen: 'Listen & Sound',
      story: 'Watch Its Story',
      threeD: 'Explore in 3D',
      didYouKnow: 'Did You Know?',
    },
    playInteractiveExperience: 'Try Interactive Experience',
    saveDiscovery: 'Save to My Discoveries',
    saved: 'Saved in Discoveries',
    share: 'Share Discovery',
    depthBeginner: 'Beginner / Tourist',
    depthScholarly: 'Scholarly / Deep Dive',
    bringHistoryToLife: 'Bring History to Life',
    sourcesAndReferences: 'Verified Historical Sources',
    alternativeMatches: 'Alternative Possible Matches',
    cameraTitle: 'Scan Indian Heritage',
    cameraSubtitle: 'Point your camera at a monument, sculpture, instrument, or warrior relic.',
    capturePhoto: 'Capture Photo',
    uploadGallery: 'Upload from Gallery',
    analyzingImage: 'Analyzing heritage features with AI...',
    confidenceMatch: 'Match Confidence',
    noCameraFound: 'Camera unavailable. You can upload an image or select a sample heritage item below.',
    tryDemoScan: 'Test with Sample Photo',
  },
  hi: {
    appTitle: 'भारतदर्शन',
    tagline: 'भारत का इंटरैक्टिव एआई धरोहर अन्वेषक',
    heroHeadline: 'हर तस्वीर में एक कहानी है।',
    heroSubheadline: 'भारत की जीवंत धरोहर, प्राचीन स्मारकों, पवित्र मंदिरों, पारंपरिक वाद्यों और योद्धा इतिहास की तस्वीर लें और तुरंत उनके इतिहास को जानें।',
    discoverWithCamera: 'कैमरे से पहचानें',
    exploreIndia: 'भारत मानचित्र देखें',
    searchPlaceholder: 'स्मारक, योद्धा, बांसुरी, मंदिर, कलाकृतियां खोजें...',
    navHome: 'होम',
    navExplore: 'अन्वेषण',
    navCamera: 'धरोहर स्कैन',
    navDiscoveries: 'मेरी खोजें',
    navProfile: 'प्रोफ़ाइल व भाषा',
    collections: {
      all: 'सभी धरोहर',
      ancient: 'प्राचीन भारत',
      warriors: 'अमर योद्धा',
      sacred: 'पवित्र वास्तुकला',
      music: 'संगीत धरोहर',
      kingdoms: 'शाही साम्राज्य',
      arts: 'पारंपरिक कलाएं',
      nature: 'प्राकृतिक चमत्कार',
    },
    nearbyHeritageTitle: 'आपके निकटतम धरोहर',
    nearbyHeritageSubtitle: 'अपने वर्तमान स्थान के पास स्थित प्राचीन स्थलों और ऐतिहासिक धरोहरों को खोजें।',
    locationPermissionPrompt: 'अपने आस-पास के किलों, मंदिरों और स्मारकों को खोजने के लिए स्थान (GPS) चालू करें।',
    enableLocation: 'निकटतम धरोहर खोजें',
    demoScansTitle: 'त्वरित डेमो स्कैन',
    demoScansSubtitle: 'एआई पहचान और इंटरैक्टिव सिमुलेशन का अनुभव करने के लिए नमूना कलाकृतियां चुनें।',
    detailTabs: {
      overview: 'अवलोकन',
      history: 'इतिहास व कालक्रम',
      howItWorks: 'शिल्प व कार्यप्रणाली',
      listen: 'ध्वनि व संगीत',
      story: 'सचित्र कहानी',
      threeD: '3डी में देखें',
      didYouKnow: 'क्या आप जानते हैं?',
    },
    playInteractiveExperience: 'इंटरैक्टिव अनुभव खेलें',
    saveDiscovery: 'मेरी खोजों में सहेजें',
    saved: 'सहेजा गया',
    share: 'साझा करें',
    depthBeginner: 'सरल / पर्यटक',
    depthScholarly: 'गहन / विद्वान',
    bringHistoryToLife: 'इतिहास को जीवंत करें',
    sourcesAndReferences: 'प्रमाणित ऐतिहासिक स्रोत',
    alternativeMatches: 'अन्य संभावित परिणाम',
    cameraTitle: 'धरोहर स्कैन करें',
    cameraSubtitle: 'किसी स्मारक, मूर्ति, वाद्य या ऐतिहासिक अवशेष पर कैमरा केंद्रित करें।',
    capturePhoto: 'फोटो खींचें',
    uploadGallery: 'गैलरी से चुनें',
    analyzingImage: 'एआई द्वारा धरोहर का विश्लेषण हो रहा है...',
    confidenceMatch: 'सटीकता विश्वास',
    noCameraFound: 'कैमरा उपलब्ध नहीं है। आप फोटो अपलोड कर सकते हैं।',
    tryDemoScan: 'नमूना फोटो से जांचें',
  },
  te: {
    appTitle: 'భారతదర్శన్',
    tagline: 'భారతదేశ ఇంటరాక్టివ్ ఏఐ వారసత్వ అన్వేషి',
    heroHeadline: 'ప్రతి ఛాయాచిత్రంలో ఒక గాథ దాగుంది.',
    heroSubheadline: 'భారతదేశ జీవద్వారసత్వం, దేవాలయాలు, శాసనాలు, సాంప్రదాయ సంగీత వాయిద్యాలు, యోధుల ఖడ్గాల ఫోటో తీసి వాటి చరిత్రను తక్షణమే తెలుసుకోండి.',
    discoverWithCamera: 'కెమెరాతో కనుగొనండి',
    exploreIndia: 'భారతదేశ మ్యాప్',
    searchPlaceholder: 'స్మారకాలు, యోధులు, వేణువు, దేవాలయాలు వెతకండి...',
    navHome: 'హోమ్',
    navExplore: 'అన్వేషణ',
    navCamera: 'స్కాన్ చేయండి',
    navDiscoveries: 'నా ఆవిష్కరణలు',
    navProfile: 'ప్రొఫైల్ & సెట్టింగులు',
    collections: {
      all: 'అన్ని విశేషాలు',
      ancient: 'ప్రాచీన భారతదేశం',
      warriors: 'చారిత్రక యోధులు',
      sacred: 'పవిత్ర శిల్పకళ',
      music: 'సంగీత వారసత్వం',
      kingdoms: 'రాజ సామ్రాజ్యాలు',
      arts: 'సాంప్రదాయ కళలు',
      nature: 'ప్రకృతి వింతలు',
    },
    nearbyHeritageTitle: 'మీ సమీపంలో ఉన్న చారిత్రక ప్రదేశాలు',
    nearbyHeritageSubtitle: 'మీ ప్రస్తుత ప్రదేశం చుట్టూ ఉన్న ప్రాచీన ఆలయాలు, కోటలను కనుగొనండి.',
    locationPermissionPrompt: 'మీ సమీపంలోని దర్శనీయ స్థలాలను చూడటానికి లొకేషన్ అనుమతించండి.',
    enableLocation: 'సమీప ప్రదేశాలు కనుగొనండి',
    demoScansTitle: 'డెమో స్కానింగ్ ప్రయత్నించండి',
    demoScansSubtitle: 'ఏఐ గుర్తింపు మరియు ఇంటరాక్టివ్ అనుభవాన్ని పరీక్షించడానికి నమూనా ఫోటోను ఎంచుకోండి.',
    detailTabs: {
      overview: 'సమీక్ష',
      history: 'చరిత్ర & కాలక్రమం',
      howItWorks: 'నిర్మాణ విశేషాలు',
      listen: 'శ్రవణ అనుభవం',
      story: 'సచిత్ర కథనం',
      threeD: '3D లో తిలకించండి',
      didYouKnow: 'మీకు తెలుసా?',
    },
    playInteractiveExperience: 'స్వయంగా వాయించి చూడండి',
    saveDiscovery: 'భద్రపరచుకోండి',
    saved: 'భద్రపరచబడింది',
    share: 'స్నేహితులతో పంచుకోండి',
    depthBeginner: 'సులభ శైలి / యాత్రికులు',
    depthScholarly: 'సమగ్ర విశ్లేషణ / పరిశోధకులు',
    bringHistoryToLife: 'చరిత్రను సజీవం చేయండి',
    sourcesAndReferences: 'ధృవీకరించిన చారిత్రక ఆధారాలు',
    alternativeMatches: 'ఇతర సరిపోలే అవకాశాలు',
    cameraTitle: 'వారసత్వ సంపదను స్కాన్ చేయండి',
    cameraSubtitle: 'చారిత్రక కట్టడం, శిల్పం లేదా వాయిద్యం వైపు కెమెరా చూపించండి.',
    capturePhoto: 'ఫోటో తీయండి',
    uploadGallery: 'గ్యాలరీ నుండి ఎంచుకోండి',
    analyzingImage: 'ఏఐ ద్వారా విశ్లేషిస్తోంది...',
    confidenceMatch: 'గుర్తింపు విశ్వసనీయత',
    noCameraFound: 'కెమెరా అందుబాటులో లేదు. మీరు చిత్రాన్ని అప్‌లోడ్ చేయవచ్చు.',
    tryDemoScan: 'నమూనా చిత్రంతో పరీక్షించండి',
  },
  ta: {
    appTitle: 'பாரத தர்ஷன்',
    tagline: 'இந்தியாவின் ஊடாடும் வரலாற்று ஏஐ வழிகாட்டி',
    heroHeadline: 'ஒவ்வொரு புகைப்படமும் ஒரு வரலாறு பேசும்.',
    heroSubheadline: 'இந்தியாவின் வரலாற்று சின்னங்கள், சோழர் சிற்பங்கள், பாரம்பரிய இசைக் கருவிகளை படம்பிடித்து அவற்றின் பின்னணியை உடனே அறியுங்கள்.',
    discoverWithCamera: 'கேமரா மூலம் அறியுங்கள்',
    exploreIndia: 'வரைபடம் காண்க',
    searchPlaceholder: 'கோயில்கள், நடராஜர், புல்லாங்குழல், கோட்டைகள்...',
    navHome: 'முகப்பு',
    navExplore: 'ஆராய்வு',
    navCamera: 'ஸ்கேன் செய்',
    navDiscoveries: 'என் சேகரிப்புகள்',
    navProfile: 'சுயவிவரம்',
    collections: {
      all: 'அனைத்து மரபுகள்',
      ancient: 'பண்டைய இந்தியா',
      warriors: 'வீர வரலாறு',
      sacred: 'புனித கட்டிடக்கலை',
      music: 'இசை மரபு',
      kingdoms: 'அரச மரபுகள்',
      arts: 'பாரம்பரிய கலைகள்',
      nature: 'இயற்கை அதிசயங்கள்',
    },
    nearbyHeritageTitle: 'உங்கள் அருகிலுள்ள மரபு சின்னங்கள்',
    nearbyHeritageSubtitle: 'உங்கள் இருப்பிடத்திற்கு அருகிலுள்ள வரலாற்று இடங்களைக் கண்டறியவும்.',
    locationPermissionPrompt: 'அருகிலுள்ள இடங்களைக் கண்டறிய இருப்பிடத்தை (GPS) இயக்கவும்.',
    enableLocation: 'அருகிலுள்ள இடங்களைக் காண்க',
    demoScansTitle: 'மாதிரி ஸ்கேன் செய்து பார்க்கவும்',
    demoScansSubtitle: 'ஏஐ நுட்பத்தை உடனே சோதிக்க மாதிரி புகைப்படங்களைத் தேர்வுசெய்யவும்.',
    detailTabs: {
      overview: 'கண்ணோட்டம்',
      history: 'வரலாறு',
      howItWorks: 'அமைப்பு & நுட்பம்',
      listen: 'ஒலியைக் கேளுங்கள்',
      story: 'சித்திரக் கதை',
      threeD: '3D வடிவம்',
      didYouKnow: 'உங்களுக்குத் தெரியுமா?',
    },
    playInteractiveExperience: 'செயல்முறை அனுபவம்',
    saveDiscovery: 'சேமித்து வைக்கவும்',
    saved: 'சேமிக்கப்பட்டது',
    share: 'பகிர்க',
    depthBeginner: 'எளிய முறை',
    depthScholarly: 'ஆழ்ந்த ஆய்வு முறை',
    bringHistoryToLife: 'வரலாற்றுக்கு உயிரூட்டுங்கள்',
    sourcesAndReferences: 'சான்றளிக்கப்பட்ட வரலாற்று ஆதாரங்கள்',
    alternativeMatches: 'மாற்று பொருத்தங்கள்',
    cameraTitle: 'மரபுச் சின்னத்தை ஸ்கேன் செய்',
    cameraSubtitle: 'சிலை, இசைக்கருவி அல்லது கட்டிடம் மீது கேமராவை வைக்கவும்.',
    capturePhoto: 'படம் எடுக்கவும்',
    uploadGallery: 'படத்தை பதிவேற்றவும்',
    analyzingImage: 'ஏஐ பகுப்பாய்வு செய்கிறது...',
    confidenceMatch: 'துல்லிய அளவு',
    noCameraFound: 'கேமரா கிடைக்கவில்லை.',
    tryDemoScan: 'மாதிரி படம் மூலம் சோதிக்க',
  },
  kn: {
    appTitle: 'ಭಾರತ ದರ್ಶನ',
    tagline: 'ಭಾರತದ ಸಂವಾದಾತ್ಮಕ ಎಐ ಪರಂಪರೆ ಅನ್ವೇಷಕ',
    heroHeadline: 'ಪ್ರತಿಯೊಂದು ಚಿತ್ರದಲ್ಲೂ ಒಂದು ಇತಿಹಾಸವಿದೆ.',
    heroSubheadline: 'ಭಾರತದ ಜೀವಂತ ಪರಂಪರೆ, ಹಂಪಿ ಕಲ್ಲಿನ ರಥ, ದೇವಾಲಯಗಳು ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ವಾದ್ಯಗಳ ಫೋಟೋ ತೆಗೆದು ತಕ್ಷಣವೇ ಇತಿಹಾಸ ತಿಳಿಯಿರಿ.',
    discoverWithCamera: 'ಕ್ಯಾಮೆರಾದಿಂದ ಅನ್ವೇಷಿಸಿ',
    exploreIndia: 'ಭಾರತ ನಕ್ಷೆ',
    searchPlaceholder: 'ಹಂಪಿ, ಕೊಳಲು, ಶಿವಾಜಿ ಖಡ್ಗ, ದೇವಾಲಯಗಳು...',
    navHome: 'ಮುಖಪುಟ',
    navExplore: 'ಅನ್ವೇಷಿಸಿ',
    navCamera: 'ಸ್ಕ್ಯಾನ್ ಮಾಡಿ',
    navDiscoveries: 'ನನ್ನ ಸಂಗ್ರಹಗಳು',
    navProfile: 'ಪ್ರೊಫೈಲ್',
    collections: {
      all: 'ಎಲ್ಲ ಪರಂಪರೆ',
      ancient: 'ಪ್ರಾಚೀನ ಭಾರತ',
      warriors: 'ಯೋಧ ಪರಂಪರೆ',
      sacred: 'ಪವಿತ್ರ ವಾಸ್ತುಶಿಲ್ಪ',
      music: 'ಸಂಗೀತ ಪರಂಪರೆ',
      kingdoms: 'ರಾಜ ಸಾಮ್ರಾಜ್ಯಗಳು',
      arts: 'ಸಾಂಪ್ರದಾಯಿಕ ಕಲೆಗಳು',
      nature: 'ನೈಸರ್ಗಿಕ ವಿಸ್ಮಯಗಳು',
    },
    nearbyHeritageTitle: 'ನಿಮ್ಮ ಹತ್ತಿರದ ಐತಿಹಾಸಿಕ ತಾಣಗಳು',
    nearbyHeritageSubtitle: 'ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಸ್ಥಳದ ಸುತ್ತಲಿನ ಕೋಟೆಗಳು ಮತ್ತು ದೇವಾಲಯಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.',
    locationPermissionPrompt: 'ಹತ್ತಿರದ ತಾಣಗಳನ್ನು ವೀಕ್ಷಿಸಲು ಲೊಕೇಶನ್ ಆನ್ ಮಾಡಿ.',
    enableLocation: 'ಹತ್ತಿರದ ತಾಣಗಳ ಶೋಧನೆ',
    demoScansTitle: 'ಡೆಮೊ ಸ್ಕ್ಯಾನ್ ಪ್ರಯತ್ನಿಸಿ',
    demoScansSubtitle: 'ಎಐ ಗುರುತಿಸುವಿಕೆ ಪರೀಕ್ಷಿಸಲು ಮಾದರಿ ಫೋಟೋಗಳನ್ನು ಆರಿಸಿ.',
    detailTabs: {
      overview: 'ಅವಲೋಕನ',
      history: 'ಇತಿಹಾಸ',
      howItWorks: 'ಕಾರ್ಯವಿಧಾನ',
      listen: 'ಧ್ವನಿ ಆಲಿಸಿ',
      story: 'ಚಿತ್ರ ಕಥೆ',
      threeD: '3D ಯಲ್ಲಿ ನೋಡಿ',
      didYouKnow: 'ನಿಮಗೆ ತಿಳಿದಿದೆಯೇ?',
    },
    playInteractiveExperience: 'ಸಂವಾದಾತ್ಮಕ ಅನುಭವ',
    saveDiscovery: 'ಸಂಗ್ರಹದಲ್ಲಿ ಇರಿಸಿ',
    saved: 'ಉಳಿಸಲಾಗಿದೆ',
    share: 'ಹಂಚಿಕೊಳ್ಳಿ',
    depthBeginner: 'ಸರಳ / ಪ್ರವಾಸಿಗರಿಗೆ',
    depthScholarly: 'ಸಮಗ್ರ / ಅಧ್ಯಯನಕಾರರಿಗೆ',
    bringHistoryToLife: 'ಇತಿಹಾಸಕ್ಕೆ ಜೀವ ತುಂಬಿ',
    sourcesAndReferences: 'ಪ್ರಾಮಾಣಿಕ ಐತಿಹಾಸಿಕ ಮೂಲಗಳು',
    alternativeMatches: 'ಇತರ ಸಂಭವನೀಯ ಫಲಿತಾಂಶಗಳು',
    cameraTitle: 'ಪರಂಪರೆ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ',
    cameraSubtitle: 'ಐತಿಹಾಸಿಕ ವಸ್ತು ಅಥವಾ ಸ್ಮಾರಕದತ್ತ ಕ್ಯಾಮೆರಾ ತಿರುಗಿಸಿ.',
    capturePhoto: 'ಫೋಟೋ ತೆಗೆಯಿರಿ',
    uploadGallery: 'ಗ್ಯಾಲರಿಯಿಂದ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',
    analyzingImage: 'ಎಐ ಮೂಲಕ ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...',
    confidenceMatch: 'ಖಚಿತತೆ ಶೇಕಡಾವಾರು',
    noCameraFound: 'ಕ್ಯಾಮೆರಾ ಲಭ್ಯವಿಲ್ಲ.',
    tryDemoScan: 'ಮಾದರಿ ಫೋಟೋ ಬಳಸಿ',
  },
  ml: {
    appTitle: 'ഭാരതദർശൻ',
    tagline: 'ഭാരതത്തിന്റെ ഇന്ററാക്ടീവ് എഐ പൈതൃക പര്യവേക്ഷണം',
    heroHeadline: 'ഓരോ ചിത്രത്തിലും ഒരു ചരിത്രമുണ്ട്.',
    heroSubheadline: 'ഇന്ത്യയുടെ പൈതൃക സ്മാരകങ്ങളും പരമ്പരാഗത സംഗീതോപകരണങ്ങളും ഫോട്ടോ എടുത്ത് തത്സമയം അറിയൂ.',
    discoverWithCamera: 'ക്യാമറ വഴി കണ്ടെത്തൂ',
    exploreIndia: 'ഇന്ത്യൻ ഭൂപടം',
    searchPlaceholder: 'ക്ഷേത്രങ്ങൾ, പുല്ലാങ്കുഴൽ, സ്മാരകങ്ങൾ...',
    navHome: 'ഹോം',
    navExplore: 'അന്വേഷണം',
    navCamera: 'സ്കാൻ ചെയ്യുക',
    navDiscoveries: 'എന്റെ കണ്ടെത്തലുകൾ',
    navProfile: 'പ്രൊഫൈൽ',
    collections: {
      all: 'എല്ലാ പൈതൃകങ്ങളും',
      ancient: 'പുരാതന ഭാരതം',
      warriors: 'യോദ്ധാക്കൾ',
      sacred: 'ക്ഷേത്ര വാസ്തുവിദ്യ',
      music: 'സംഗീത പാരമ്പര്യം',
      kingdoms: 'രാജവംശങ്ങൾ',
      arts: 'പരമ്പരാഗത കലകൾ',
      nature: 'പ്രകൃതി വിസ്മയങ്ങൾ',
    },
    nearbyHeritageTitle: 'അടുത്തുള്ള ചരിത്ര സ്മാരകങ്ങൾ',
    nearbyHeritageSubtitle: 'നിങ്ങൾ നിൽക്കുന്ന സ്ഥലത്തിന് അടുത്തുള്ള പ്രധാന ഇടങ്ങൾ കണ്ടെത്തുക.',
    locationPermissionPrompt: 'അടുത്തുള്ള സ്മാരകങ്ങൾ അറിയാൻ ലൊക്കേഷൻ അനുവദിക്കുക.',
    enableLocation: 'സമീപസ്ഥലങ്ങൾ കണ്ടെത്തുക',
    demoScansTitle: 'ഡെമോ സ്കാൻ പരീക്ഷിക്കുക',
    demoScansSubtitle: 'എഐ സ്കാനിംഗ് വേഗത്തിൽ പരിശോധിക്കാൻ മാതൃക തിരഞ്ഞെടുക്കുക.',
    detailTabs: {
      overview: 'അവലോകനം',
      history: 'ചരിത്രം',
      howItWorks: 'പ്രവർത്തനരീതി',
      listen: 'ശബ്ദം കേൾക്കൂ',
      story: 'ചിത്രകഥ',
      threeD: '3D രൂപം',
      didYouKnow: 'അറിയാമോ?',
    },
    playInteractiveExperience: 'സ്വയം പരീക്ഷിക്കൂ',
    saveDiscovery: 'സൂക്ഷിക്കുക',
    saved: 'സൂക്ഷിച്ചു',
    share: 'പങ്കുവെക്കുക',
    depthBeginner: 'ലളിതം / സഞ്ചാരികൾക്ക്',
    depthScholarly: 'ആഴത്തിലുള്ള പഠനം',
    bringHistoryToLife: 'ചരിത്രത്തെ പുനരുജ്ജീവിപ്പിക്കുക',
    sourcesAndReferences: 'ചരിത്രപരമായ തെളിവുകൾ',
    alternativeMatches: 'മറ്റ് സാധ്യതകൾ',
    cameraTitle: 'പൈതൃകം സ്കാൻ ചെയ്യുക',
    cameraSubtitle: 'സ്മാരകത്തിന് നേരെ ക്യാമറ പിടിക്കുക.',
    capturePhoto: 'ഫോട്ടോ എടുക്കുക',
    uploadGallery: 'ചിത്രം അപ്‌ലോഡ് ചെയ്യുക',
    analyzingImage: 'എഐ വിശകലനം ചെയ്യുന്നു...',
    confidenceMatch: 'കൃത്യത',
    noCameraFound: 'ക്യാമറ ലഭ്യമല്ല.',
    tryDemoScan: 'മാതൃകാ ചിത്രം ഉപയോഗിക്കുക',
  },
  bn: {
    appTitle: 'ভারতদর্শন',
    tagline: 'ভারতের ইন্টারেক্টিভ এআই ঐতিহ্য অন্বেষণকারী',
    heroHeadline: 'প্রতিটি ছবির পেছনে একটি ইতিহাস রয়েছে।',
    heroSubheadline: 'ভারতের জীবন্ত ঐতিহ্য, প্রাচীন স্মৃতিস্তম্ভ, ঐতিহ্যবাহী বাদ্যযন্ত্র ও বীরত্বগাথার ছবি তুলুন এবং সঙ্গে সঙ্গে ইতিহাস জানুন।',
    discoverWithCamera: 'ক্যামেরা দিয়ে খুঁজুন',
    exploreIndia: 'ভারতের মানচিত্র',
    searchPlaceholder: 'স্মৃতিস্তম্ভ, বাঁশি, শিবাজীর তলোয়ার, মন্দির...',
    navHome: 'হোম',
    navExplore: 'অন্বেষণ',
    navCamera: 'স্ক্যান করুন',
    navDiscoveries: 'আমার আবিষ্কার',
    navProfile: 'প্রোফাইল',
    collections: {
      all: 'সমস্ত ঐতিহ্য',
      ancient: 'প্রাচীন ভারত',
      warriors: 'কিংবদন্তি যোদ্ধা',
      sacred: 'পবিত্র স্থাপত্য',
      music: 'সঙ্গীত ঐতিহ্য',
      kingdoms: 'রাজকীয় সাম্রাজ্য',
      arts: 'ঐতিহ্যবাহী শিল্প',
      nature: 'প্রাকৃতিক বিস্ময়',
    },
    nearbyHeritageTitle: 'আপনার আশেপাশের ঐতিহ্য',
    nearbyHeritageSubtitle: 'আপনার বর্তমান অবস্থানের কাছাকাছি প্রাচীন নিদর্শনগুলো আবিষ্কার করুন।',
    locationPermissionPrompt: 'কাছের ঐতিহ্যবাহী স্থান দেখতে জিপিএস অন করুন।',
    enableLocation: 'নিকটবর্তী স্থান খুঁজুন',
    demoScansTitle: 'ডেমো স্ক্যান পরীক্ষা করুন',
    demoScansSubtitle: 'এআই বিশ্লেষণ দেখতে নমুনা ছবি বেছে নিন।',
    detailTabs: {
      overview: 'সংক্ষিপ্ত বিবরণ',
      history: 'ইতিহাস ও সময়রেখা',
      howItWorks: 'নির্মাণ শৈলী ও কৌশল',
      listen: 'শব্দ শুনুন',
      story: 'সচিত্র গল্প',
      threeD: '3D দর্শন',
      didYouKnow: 'আপনি কি জানেন?',
    },
    playInteractiveExperience: 'ইন্টারেক্টিভ অভিজ্ঞতা',
    saveDiscovery: 'সংরক্ষণ করুন',
    saved: 'সংরক্ষিত',
    share: 'শেয়ার করুন',
    depthBeginner: 'সহজ / পর্যটক',
    depthScholarly: 'গবেষণামূলক',
    bringHistoryToLife: 'ইতিহাসকে জীবন্ত করুন',
    sourcesAndReferences: 'প্রামাণিক ঐতিহাসিক উৎস',
    alternativeMatches: 'অন্যান্য সম্ভাব্য মিল',
    cameraTitle: 'ঐতিহ্য স্ক্যান করুন',
    cameraSubtitle: 'স্মৃতিস্তম্ভ বা বাদ্যযন্ত্রের দিকে ক্যামেরা ধরুন।',
    capturePhoto: 'ছবি তুলুন',
    uploadGallery: 'গ্যালারি থেকে আপলোড করুন',
    analyzingImage: 'এআই দ্বারা বিশ্লেষণ করা হচ্ছে...',
    confidenceMatch: 'সঠিকতার হার',
    noCameraFound: 'ক্যামেরা পাওয়া যায়নি।',
    tryDemoScan: 'নমুনা ছবি দিয়ে যাচাই করুন',
  },
  mr: {
    appTitle: 'भारतदर्शन',
    tagline: 'भारताचा परस्परसंवादी एआय वारसा संशोधक',
    heroHeadline: 'प्रत्येक चित्रात एक इतिहास दडलेला आहे.',
    heroSubheadline: 'भारताचा जिवंत वारसा, ऐतिहासिक किल्ले, छत्रपतींची शस्त्रे, मंदिरे आणि पारंपरिक वाद्यांचे फोटो काढून त्वरित इतिहास जाणून घ्या.',
    discoverWithCamera: 'कॅमेऱ्याने शोधा',
    exploreIndia: 'भारत नकाशा पाहा',
    searchPlaceholder: 'रायगड, जगदंबा तलवार, बासरी, मंदिरे शोधा...',
    navHome: 'मुख्यपृष्ठ',
    navExplore: 'अन्वेषण',
    navCamera: 'वारसा स्कॅन',
    navDiscoveries: 'माझे शोध',
    navProfile: 'प्रोफाइल व भाषा',
    collections: {
      all: 'सर्व वारसा',
      ancient: 'प्राचीन भारत',
      warriors: 'अमर योद्धे',
      sacred: 'पवित्र वास्तुकला',
      music: 'संगीत वारसा',
      kingdoms: 'शाही राज्ये',
      arts: 'पारंपरिक कला',
      nature: 'नैसर्गिक चमत्कार',
    },
    nearbyHeritageTitle: 'तुमच्या जवळील वारसा स्थळे',
    nearbyHeritageSubtitle: 'तुमच्या सभोवतालचे प्राचीन किल्ले आणि ऐतिहासिक स्मारके शोधा.',
    locationPermissionPrompt: 'जवळपासची स्थळे शोधण्यासाठी जीपीएस (लोकेशन) चालू करा.',
    enableLocation: 'जवळची स्थळे शोधा',
    demoScansTitle: 'डेमो स्कॅन करून पाहा',
    demoScansSubtitle: 'एआय ओळख आणि अनुभव घेण्यासाठी नमुना फोटो निवडा.',
    detailTabs: {
      overview: 'आढावा',
      history: 'इतिहास व कालरेषा',
      howItWorks: 'शिल्प व तंत्रज्ञान',
      listen: 'ऐका व अनुभवा',
      story: 'सचित्र कथा',
      threeD: '3D मध्ये पाहा',
      didYouKnow: 'तुम्हाला ठाऊक आहे का?',
    },
    playInteractiveExperience: 'प्रत्यक्ष अनुभव घ्या',
    saveDiscovery: 'माझ्या शोधांमध्ये जतन करा',
    saved: 'जतन केले',
    share: 'शेअर करा',
    depthBeginner: 'सोपे / पर्यटकांसाठी',
    depthScholarly: 'सखोल / अभ्यासकांसाठी',
    bringHistoryToLife: 'इतिहास सजीव करा',
    sourcesAndReferences: 'प्रमाणित ऐतिहासिक संदर्भ',
    alternativeMatches: 'इतर संभाव्य पर्याय',
    cameraTitle: 'वारसा स्कॅन करा',
    cameraSubtitle: 'ऐतिहासिक वस्तू, मूर्ती किंवा किल्ल्यावर कॅमेरा रोखा.',
    capturePhoto: 'फोटो काढा',
    uploadGallery: 'गॅलरीतून निवडा',
    analyzingImage: 'एआय द्वारे विश्लेषण सुरू आहे...',
    confidenceMatch: 'अचूकता विश्वास',
    noCameraFound: 'कॅमेरा उपलब्ध नाही. फोटो अपलोड करू शकता.',
    tryDemoScan: 'नमुना फोटोने तपासा',
  },
};

export const LANGUAGE_LABELS: { code: SupportedLanguage; label: string; native: string }[] = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
  { code: 'te', label: 'Telugu', native: 'తెలుగు' },
  { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
  { code: 'kn', label: 'Kannada', native: 'ಕನ್ನಡ' },
  { code: 'ml', label: 'Malayalam', native: 'മലയാളം' },
  { code: 'bn', label: 'Bengali', native: 'বাংলা' },
  { code: 'mr', label: 'Marathi', native: 'मराठी' },
];

export function speakText(text: string, language: SupportedLanguage, speed = 1.0) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = speed;

  const langCodeMap: Record<SupportedLanguage, string> = {
    en: 'en-IN',
    hi: 'hi-IN',
    te: 'te-IN',
    ta: 'ta-IN',
    kn: 'kn-IN',
    ml: 'ml-IN',
    bn: 'bn-IN',
    mr: 'mr-IN',
  };

  utterance.lang = langCodeMap[language] || 'en-IN';

  // Try to find an Indian English or specific regional voice
  const voices = window.speechSynthesis.getVoices();
  const regionalVoice = voices.find(
    (v) => v.lang.startsWith(utterance.lang) || v.name.includes('India')
  );
  if (regionalVoice) {
    utterance.voice = regionalVoice;
  }

  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}
