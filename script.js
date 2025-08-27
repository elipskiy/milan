// Milan Travel Planner - Vanilla JavaScript Implementation

// Data and Configuration
const PLACES = [
  {
    id: "duomo_rooftop",
    title: "Крыши Дуомо",
    area: "Centro",
    category: "classic",
    tags: ["insta", "iconic", "view"],
    bestTime: "morning",
    hype: 5,
    price: "€€",
    bookingNeeded: true,
    hours: "9:00-19:00",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b0/View_west_along_Duomo_roof%2C_Milan.jpg",
    why: "Мраморные шпили + фото без людей утром",
    desc: "Иконическая терраса кафедрала. Лифт экономит время, но очередь всё равно есть. Лайфхак: слот на 8:30–9:00, потом кофе в Galleria.",
  },
  {
    id: "galleria",
    title: "Galleria Vittorio Emanuele II",
    area: "Centro",
    category: "classic",
    tags: ["insta", "iconic", "shopping"],
    bestTime: "morning",
    hype: 5,
    price: "€€",
    hours: "10:00-20:00",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/79/Galleria_Vittorio_Emanuele_II_%28Milan%29_-_Interior.jpg",
    why: "Стеклянный купол, мозаики и Marchesi — тот самый кадр из рилс",
    desc: "От Prada до Marchesi 1824. Внутри свет красиво рисует купол — лучшее время утром.",
  },
  {
    id: "marchesi",
    title: "Marchesi 1824 (в Галерее)",
    area: "Centro",
    category: "food",
    tags: ["coffee", "pastry", "insta"],
    bestTime: "morning",
    hype: 4,
    price: "€€",
    hours: "7:30-20:00",
    img: "https://picsum.photos/seed/marchesi-1824/1000/700",
    why: "Пастелевые тона, витрины и панеттоне — каноничный миланский завтрак",
    desc: "Кафе-кондитерская от Prada Group. Брони нет, очереди двигаются быстро.",
  },
  {
    id: "luini",
    title: "Luini Panzerotti",
    area: "Centro",
    category: "food",
    tags: ["streetfood", "classic"],
    bestTime: "day",
    hype: 4,
    price: "€",
    hours: "10:00-20:00",
    img: "https://picsum.photos/seed/luini-panzerotti/1000/700",
    why: "Тёплый панцеротти в руку между спотами",
    desc: "Легендарная закусочная с 1949 года. Быстро, вкусно, дешево.",
  },
  {
    id: "castello",
    title: "Castello Sforzesco",
    area: "Sempione",
    category: "classic",
    tags: ["history", "park"],
    bestTime: "day",
    hype: 3,
    price: "€",
    hours: "7:00-18:00",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Castello_sforzesco%2C_milano.JPG",
    why: "Переход к Парко Семпионе и Арке Мира",
    desc: "Крепость Висконти/Сфорца, внутренние дворы и музеи. Хорошо в связке с парком.",
  },
  {
    id: "arco_pace",
    title: "Arco della Pace",
    area: "Sempione",
    category: "classic",
    tags: ["sunset", "insta"],
    bestTime: "sunset",
    hype: 4,
    price: "€",
    hours: "24/7",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Milan_-_Arco_della_Pace.jpg",
    why: "Силуэт на закате + бары вокруг",
    desc: "Неоклассическая арка у северного выхода из парка. Рядом уютные бары на Corso Sempione.",
  },
  {
    id: "navigli",
    title: "Navigli / Darsena",
    area: "Navigli",
    category: "modern",
    tags: ["sunset", "insta", "aperitivo"],
    bestTime: "sunset",
    hype: 5,
    price: "€€",
    hours: "Весь день",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Milan_Naviglio_Grande_at_sunset_HD_01.jpg/2560px-Milan_Naviglio_Grande_at_sunset_HD_01.jpg",
    why: "Самый тиктоковый закат с рефлексами в воде",
    desc: "Променад вдоль каналов, винные бары, аперитиво. Отлично в выходные.",
  },
  {
    id: "mag",
    title: "MAG Cafè",
    area: "Navigli",
    category: "bar",
    tags: ["cocktails", "speakeasy"],
    bestTime: "night",
    hype: 4,
    price: "€€€",
    hours: "18:00-2:00",
    img: "https://picsum.photos/seed/mag-cafe/1000/700",
    why: "Авторские коктейли у воды",
    desc: "Знаковый бар Navigli. Часто очередь, но оборот быстрый.",
  },
  {
    id: "rita",
    title: "Rita & Cocktails",
    area: "Navigli",
    category: "bar",
    tags: ["cocktails", "craft"],
    bestTime: "night",
    hype: 4,
    price: "€€€",
    hours: "19:00-2:00",
    img: "https://picsum.photos/seed/rita-cocktails/1000/700",
    why: "Фанаты миксологии — сюда",
    desc: "Классика миланской коктейльной сцены. Резерв полезен на пт/сб.",
  },
  {
    id: "backdoor43",
    title: "Backdoor 43 (мини-бар)",
    area: "Navigli",
    category: "bar",
    tags: ["microbar", "quirky"],
    bestTime: "night",
    hype: 4,
    price: "€€€",
    hours: "20:00-1:00",
    img: "https://picsum.photos/seed/backdoor-43/1000/700",
    why: "Самый маленький бар (4 места) — мемовый опыт",
    desc: "Слоты с предоплатой. Если получится — будет история для сториз.",
  },
  {
    id: "bosco",
    title: "Bosco Verticale",
    area: "Isola/Porta Nuova",
    category: "modern",
    tags: ["insta", "architecture", "green"],
    bestTime: "day",
    hype: 5,
    price: "€",
    hours: "24/7 (внешний осмотр)",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Bosco_verticale%2C_Milan%2C_Italy_%28Unsplash%29.jpg",
    why: "Вертикальный лес Стефано Боэри — символ нового Милана",
    desc: "Лучший ракурс — с поля BAM или с мостика у Piazza Gae Aulenti.",
  },
  {
    id: "bam",
    title: "BAM — Biblioteca degli Alberi",
    area: "Isola/Porta Nuova",
    category: "park",
    tags: ["chill", "green"],
    bestTime: "day",
    hype: 3,
    price: "€",
    hours: "6:00-24:00",
    img: "https://picsum.photos/seed/bam-park/1000/700",
    why: "Круговые газоны, вид на skyline",
    desc: "Современный парк между Isola и Porta Nuova. Отлично для паузы и фото.",
  },
  {
    id: "ratanà",
    title: "Ratanà",
    area: "Isola/Porta Nuova",
    category: "food",
    tags: ["risotto", "milanese", "chef"],
    bestTime: "day",
    hype: 4,
    price: "€€€",
    hours: "12:00-15:00, 19:00-23:00",
    img: "https://picsum.photos/seed/ratana/1000/700",
    why: "Лучший ризотто миланезе в современном сеттинге",
    desc: "Ресторан в бывшем депо. Бронируйте заранее на обед/ранний ужин.",
  },
  {
    id: "fondazione_prada",
    title: "Fondazione Prada",
    area: "Porta Romana / Largo Isarco",
    category: "museum",
    tags: ["modern", "architecture", "insta"],
    bestTime: "day",
    hype: 5,
    price: "€€",
    hours: "10:00-19:00 (вт-вс)",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/51/Fondazione_PRADA%2C_Via_Ripamonti_-_Largo_Isarco_area%2C_Golden_Tower_Rem_Koolhass_design.jpg",
    why: "OMA, золотой дом, выставки и башня Torre",
    desc: "Лучшее современное искусство города. Комбо с Bar Luce на кофе/ланч.",
  },
  {
    id: "bar_luce",
    title: "Bar Luce (Wes Anderson)",
    area: "Porta Romana / Largo Isarco",
    category: "food",
    tags: ["coffee", "insta", "design"],
    bestTime: "day",
    hype: 5,
    price: "€€",
    hours: "8:00-20:00",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Fondazione_PRADA%2C_Via_Ripamonti_-_Largo_Isarco_area%2C_Bar_Luce%2C_50s_lifestyle_Milano_design_by_Wes_Anderson.jpg",
    why: "Пастель, пинбол и вайб 60‑х",
    desc: "Кофе/десерты после выставки. По выходным — очередь, но движется.",
  },
  {
    id: "ceresio7",
    title: "Ceresio 7 (руфтоп)",
    area: "Porta Garibaldi",
    category: "rooftop",
    tags: ["view", "pool", "sunset"],
    bestTime: "sunset",
    hype: 4,
    price: "€€€",
    bookingNeeded: true,
    hours: "12:00-2:00",
    img: "https://picsum.photos/seed/ceresio7-rooftop/1000/700",
    why: "Две бассейн‑чанки и вид на skyline",
    desc: "Stylish rooftop от Dsquared2. Строгий dress‑code + бронь.",
  },
  {
    id: "the_roof",
    title: "The Roof Milano",
    area: "Centro",
    category: "rooftop",
    tags: ["view", "duomo"],
    bestTime: "sunset",
    hype: 4,
    price: "€€€",
    bookingNeeded: true,
    hours: "18:00-1:00",
    img: "https://picsum.photos/seed/the-roof-milano/1000/700",
    why: "Вид на шпили Дуомо с коктейлем",
    desc: "Лучше бронь на golden hour. Альтернатива Terrazza Aperol (менее людно).",
  },
  {
    id: "nottingham",
    title: "Nottingham Forest",
    area: "Porta Venezia",
    category: "bar",
    tags: ["cocktails", "molecular"],
    bestTime: "night",
    hype: 4,
    price: "€€€",
    hours: "19:00-2:00",
    img: "https://picsum.photos/seed/nottingham-forest/1000/700",
    why: "Молекулярные коктейли как перформанс",
    desc: "Без броней. Очередь, но фаст‑пейс. Стоит зайти хотя бы на один.",
  },
  {
    id: "bar_basso",
    title: "Bar Basso (Negroni Sbagliato)",
    area: "Loreto/Porta Venezia",
    category: "bar",
    tags: ["classic", "cocktails"],
    bestTime: "night",
    hype: 3,
    price: "€€",
    hours: "17:00-2:00",
    img: "https://picsum.photos/seed/bar-basso/1000/700",
    why: "Исторический sbagliato в гигантском бокале",
    desc: "Ретро‑бар 1967 года. Атмосферно и без пафоса.",
  },
  {
    id: "grazie",
    title: "Santa Maria delle Grazie (Да Винчи)",
    area: "Conciliazione",
    category: "classic",
    tags: ["must", "unesco"],
    bestTime: "day",
    hype: 5,
    price: "€€",
    bookingNeeded: true,
    hours: "8:15-19:00",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Santa_Maria_delle_Grazie_%28Milan%29_-_52894269114.jpg/2560px-Santa_Maria_delle_Grazie_%28Milan%29_-_52894269114.jpg",
    why: "Тут висит «Тайная вечеря» (слоты улетают)",
    desc: "Бронируйте за 1–2 недели, но часто бывают возвраты накануне. Экспресс‑визит — 15 минут в зале.",
  },
  {
    id: "pinacoteca",
    title: "Pinacoteca di Brera",
    area: "Brera",
    category: "museum",
    tags: ["art", "calm"],
    bestTime: "day",
    hype: 3,
    price: "€€",
    hours: "8:30-19:15",
    img: "https://picsum.photos/seed/pinacoteca-brera-courtyard/1000/700",
    why: "Топ‑подборка итальянцев + тихая атмосфера",
    desc: "Мантенья, Караваджо, Беллини. Хороший баланс после хайпа центра.",
  },
  {
    id: "lubar",
    title: "LùBar (у GAM)",
    area: "Porta Venezia",
    category: "food",
    tags: ["brunch", "garden", "insta"],
    bestTime: "day",
    hype: 4,
    price: "€€€",
    hours: "8:00-24:00",
    img: "https://picsum.photos/seed/lubar-gam/1000/700",
    why: "Оранжерея, лимоны, сицилийская кухня",
    desc: "Красиво и вкусно, но не дешево. Бронь на выходные обязательна.",
  },
  {
    id: "citylife",
    title: "CityLife / Tre Torri",
    area: "CityLife",
    category: "modern",
    tags: ["architecture", "insta"],
    bestTime: "day",
    hype: 4,
    price: "€",
    hours: "24/7",
    img: "https://picsum.photos/seed/citylife-zaha-hadid/1000/700",
    why: "Площадь с башнями Hadid/Libeskind/Isozaki",
    desc: "Футуристично, с газонами и лавочками. Быстрый фотостоп.",
  },
  {
    id: "terrazza_aperol",
    title: "Terrazza Aperol",
    area: "Centro",
    category: "rooftop",
    tags: ["aperitivo", "view", "iconic"],
    bestTime: "sunset",
    hype: 5,
    price: "€€€",
    hours: "11:00-2:00",
    img: "https://picsum.photos/seed/terrazza-aperol/1000/700",
    why: "Классический аперитиво с видом на Дуомо",
    desc: "Туристично, но виды реально крутые. Живая очередь, но быстро рассаживают.",
  },
  {
    id: "sempione_park",
    title: "Parco Sempione",
    area: "Sempione",
    category: "park",
    tags: ["chill", "green", "sunset"],
    bestTime: "day",
    hype: 3,
    price: "€",
    hours: "6:30-21:00",
    img: "https://picsum.photos/seed/sempione-park/1000/700",
    why: "Зелёная пауза между Castello и Arco",
    desc: "Большой городской парк. Хорошо для пикника или просто прогулки к арке.",
  },
];

const CATEGORIES = [
  { id: "classic", label: "Классика", icon: "star" },
  { id: "modern", label: "Современное", icon: "camera" },
  { id: "museum", label: "Музеи/арт", icon: "star" },
  { id: "food", label: "Еда/кофе", icon: "utensils" },
  { id: "bar", label: "Бары", icon: "wine" },
  { id: "rooftop", label: "Руфты", icon: "camera" },
  { id: "park", label: "Парки", icon: "map-pin" },
];

const BEST_TIME_LABELS = {
  morning: "утро",
  day: "день", 
  sunset: "закат",
  night: "ночь"
};

const DEFAULT_ITINERARY = {
  1: ["duomo_rooftop", "galleria", "marchesi", "castello", "arco_pace", "navigli", "mag"],
  2: ["bosco", "bam", "ratanà", "ceresio7", "the_roof"],
  3: ["fondazione_prada", "bar_luce", "grazie", "pinacoteca", "lubar", "nottingham", "bar_basso"],
};

// Application State
let state = {
  query: "",
  categoryFilters: {},
  onlyInsta: false,
  favorites: [],
  compare: [],
  itinerary: structuredClone(DEFAULT_ITINERARY),
  currentTab: "browse"
};

// DOM Elements
const elements = {
  searchInput: null,
  filtersBtn: null,
  filtersModal: null,
  closeFiltersBtn: null,
  placesGrid: null,
  favoritesGrid: null,
  noResults: null,
  noFavorites: null,
  placesCount: null,
  favoritesCount: null,
  itineraryCount: null,
  totalPlaces: null,
  estimatedBudget: null,
  shareBtn: null,
  shareToast: null,
  tabs: {
    browse: null,
    plan: null,
    favorites: null
  },
  tabContents: {
    browse: null,
    plan: null, 
    favorites: null
  }
};

// Utility Functions
function fallbackImg(seed) {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/1000/700`;
}

function gmaps(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query + ", Milan")}`;
}

function getStars(hype) {
  return "★".repeat(hype);
}

function getPriceClass(price) {
  if (price === "€") return "price-1";
  if (price === "€€") return "price-2";
  return "price-3";
}

function getCategoryIcon(categoryId) {
  const category = CATEGORIES.find(c => c.id === categoryId);
  return category ? category.icon : "map-pin";
}

function getCategoryLabel(categoryId) {
  const category = CATEGORIES.find(c => c.id === categoryId);
  return category ? category.label : categoryId;
}

// Data Functions
function getFilteredPlaces() {
  const query = state.query.toLowerCase().trim();
  
  return PLACES.filter(place => {
    // Category filter
    const activeCategoryFilters = Object.entries(state.categoryFilters)
      .filter(([_, active]) => active)
      .map(([category, _]) => category);
    
    const categoryMatch = activeCategoryFilters.length === 0 || 
                         activeCategoryFilters.includes(place.category);
    
    // Instagram filter
    const instaMatch = !state.onlyInsta || place.tags.includes("insta");
    
    // Text search
    const textMatch = !query || [
      place.title,
      place.area,
      place.desc,
      place.why,
      ...place.tags,
      getCategoryLabel(place.category)
    ].join(" ").toLowerCase().includes(query);
    
    return categoryMatch && instaMatch && textMatch;
  }).sort((a, b) => b.hype - a.hype);
}

function getFavoritePlaces() {
  return PLACES.filter(place => state.favorites.includes(place.id))
                .sort((a, b) => b.hype - a.hype);
}

function getItineraryStats() {
  const totalPlaces = Object.values(state.itinerary).flat().length;
  const estimatedBudget = Math.round(totalPlaces * 25);
  return { totalPlaces, estimatedBudget };
}

// Storage Functions
function saveState() {
  try {
    localStorage.setItem('milan-planner-state', JSON.stringify({
      favorites: state.favorites,
      itinerary: state.itinerary,
      categoryFilters: state.categoryFilters,
      onlyInsta: state.onlyInsta
    }));
  } catch (e) {
    console.warn('Could not save to localStorage:', e);
  }
}

function loadState() {
  try {
    const saved = localStorage.getItem('milan-planner-state');
    if (saved) {
      const parsedState = JSON.parse(saved);
      state.favorites = parsedState.favorites || [];
      state.itinerary = parsedState.itinerary || structuredClone(DEFAULT_ITINERARY);
      state.categoryFilters = parsedState.categoryFilters || {};
      state.onlyInsta = parsedState.onlyInsta || false;
    }
  } catch (e) {
    console.warn('Could not load from localStorage:', e);
  }
}

function loadStateFromURL() {
  try {
    const hash = window.location.hash;
    if (hash.startsWith('#state=')) {
      const encoded = hash.substring(7);
      const decoded = JSON.parse(decodeURIComponent(atob(encoded)));
      
      if (decoded.favorites) state.favorites = decoded.favorites;
      if (decoded.itinerary) state.itinerary = decoded.itinerary;
      
      // Remove the hash after loading
      window.history.replaceState(null, null, window.location.pathname);
    }
  } catch (e) {
    console.warn('Could not load state from URL:', e);
  }
}

// UI Creation Functions
function createPlaceCard(place) {
  const isFavorite = state.favorites.includes(place.id);
  const inCompare = state.compare.includes(place.id);
  
  return `
    <div class="place-card bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl group hover:-translate-y-1" data-place-id="${place.id}">
      <div class="aspect-[16/10] overflow-hidden relative">
        <div class="place-image w-full h-full">
          <img
            src="${place.img || fallbackImg(place.id)}"
            alt="${place.title}"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            onerror="this.src='${fallbackImg(place.id)}'"
          />
        </div>
        <div class="absolute top-3 right-3 flex gap-1">
          <span class="hype-badge hype-${place.hype} text-xs px-2 py-1 rounded bg-black bg-opacity-75 text-white">
            ${getStars(place.hype)}
          </span>
          <span class="px-2 py-1 bg-white bg-opacity-90 rounded text-xs border ${getPriceClass(place.price)}">
            ${place.price}
          </span>
        </div>
      </div>
      
      <div class="p-4 pb-2">
        <div class="flex items-start justify-between gap-3 mb-3">
          <div class="flex-1 min-w-0">
            <h3 class="text-lg font-semibold leading-tight mb-2">${place.title}</h3>
            <div class="text-xs opacity-70 mb-1 flex items-center gap-2">
              <i data-lucide="map-pin" class="w-3 h-3"></i> ${place.area}
              <span class="mx-1">•</span>
              <i data-lucide="clock" class="w-3 h-3"></i> ${BEST_TIME_LABELS[place.bestTime]}
              <span class="mx-1">•</span>
              <i data-lucide="${getCategoryIcon(place.category)}" class="w-3 h-3"></i> ${getCategoryLabel(place.category)}
            </div>
            ${place.hours ? `
              <div class="text-xs opacity-60 mt-1 flex items-center gap-1">
                <i data-lucide="clock" class="w-3 h-3"></i> ${place.hours}
              </div>
            ` : ''}
          </div>
          <div class="flex gap-1">
            <button class="favorite-btn btn-icon w-9 h-9 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center ${isFavorite ? 'bg-red-50 border-red-300' : ''}" 
                    data-place-id="${place.id}" aria-label="В избранное">
              <i data-lucide="heart" class="w-4 h-4 heart-icon ${isFavorite ? 'favorited text-red-500' : ''}"></i>
            </button>
            <button class="compare-btn btn-icon w-9 h-9 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center ${inCompare ? 'bg-blue-50 border-blue-300' : ''}" 
                    data-place-id="${place.id}" aria-label="Сравнить">
              <i data-lucide="git-compare" class="w-4 h-4"></i>
            </button>
          </div>
        </div>
        
        <div class="flex flex-wrap gap-1 mb-3">
          <span class="px-2 py-1 bg-gray-100 rounded text-xs">${getCategoryLabel(place.category)}</span>
          ${place.tags.slice(0, 3).map(tag => `<span class="tag-pill">${tag}</span>`).join('')}
          ${place.bookingNeeded ? '<span class="booking-warning">Нужна бронь</span>' : ''}
        </div>
        
        <p class="text-sm opacity-90 mb-2 font-medium">
          <b>Почему в рилс:</b> ${place.why}
        </p>
        <p class="text-sm opacity-80 leading-relaxed">${place.desc}</p>
      </div>
      
      <div class="p-4 pt-0 flex justify-between items-center gap-2">
        <a href="${gmaps(place.title)}" target="_blank" rel="noreferrer" 
           class="flex-1 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-1 text-sm">
          <i data-lucide="map-pin" class="w-4 h-4"></i> Карты
        </a>
        <div class="flex gap-1">
          <button class="add-to-day-btn px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm" 
                  data-place-id="${place.id}" data-day="1">1</button>
          <button class="add-to-day-btn px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm" 
                  data-place-id="${place.id}" data-day="2">2</button>
          <button class="add-to-day-btn px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm" 
                  data-place-id="${place.id}" data-day="3">3</button>
        </div>
      </div>
    </div>
  `;
}

function createItineraryPlaceCard(place, dayIndex, placeIndex) {
  return `
    <div class="place-item border rounded-xl p-3 hover:shadow-sm transition-shadow" data-place-id="${place.id}">
      <div class="flex items-center gap-3">
        <img 
          src="${place.img || fallbackImg(place.id)}" 
          alt="" 
          class="w-16 h-12 object-cover rounded-lg flex-shrink-0"
          onerror="this.src='${fallbackImg(place.id)}'"
        />
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium truncate">${place.title}</p>
          <p class="text-xs opacity-60 truncate flex items-center gap-1">
            ${getCategoryLabel(place.category)} • ${place.area}
            ${place.bookingNeeded ? '<span class="text-red-600">• бронь!</span>' : ''}
          </p>
          ${place.hours ? `<p class="text-xs opacity-50 mt-1">${place.hours}</p>` : ''}
        </div>
        <div class="flex items-center gap-1">
          <button class="move-up-btn h-7 w-7 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center justify-center ${placeIndex === 0 ? 'opacity-50' : ''}" 
                  data-place-id="${place.id}" data-day="${dayIndex}" data-index="${placeIndex}" ${placeIndex === 0 ? 'disabled' : ''}>
            <i data-lucide="chevron-up" class="w-3 h-3"></i>
          </button>
          <button class="move-down-btn h-7 w-7 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center justify-center" 
                  data-place-id="${place.id}" data-day="${dayIndex}" data-index="${placeIndex}">
            <i data-lucide="chevron-down" class="w-3 h-3"></i>
          </button>
          <button class="remove-from-day-btn h-7 w-7 bg-red-500 hover:bg-red-600 rounded-md flex items-center justify-center text-white" 
                  data-place-id="${place.id}" data-day="${dayIndex}">
            <i data-lucide="trash-2" class="w-3 h-3"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

// UI Update Functions
function updatePlacesGrid() {
  const filteredPlaces = getFilteredPlaces();
  const placesGrid = elements.placesGrid;
  const noResults = elements.noResults;
  
  if (filteredPlaces.length === 0) {
    placesGrid.style.display = 'none';
    noResults.style.display = 'block';
  } else {
    placesGrid.style.display = 'grid';
    noResults.style.display = 'none';
    placesGrid.innerHTML = filteredPlaces.map(createPlaceCard).join('');
    
    // Re-initialize Lucide icons for new content
    lucide.createIcons();
  }
  
  elements.placesCount.textContent = filteredPlaces.length;
}

function updateFavoritesGrid() {
  const favoritePlaces = getFavoritePlaces();
  const favoritesGrid = elements.favoritesGrid;
  const noFavorites = elements.noFavorites;
  
  if (favoritePlaces.length === 0) {
    favoritesGrid.style.display = 'none';
    noFavorites.style.display = 'block';
  } else {
    favoritesGrid.style.display = 'grid';
    noFavorites.style.display = 'none';
    favoritesGrid.innerHTML = favoritePlaces.map(createPlaceCard).join('');
    
    // Re-initialize Lucide icons for new content
    lucide.createIcons();
  }
  
  elements.favoritesCount.textContent = favoritePlaces.length;
}

function updateItinerary() {
  const { totalPlaces, estimatedBudget } = getItineraryStats();
  elements.totalPlaces.textContent = totalPlaces;
  elements.estimatedBudget.textContent = estimatedBudget;
  elements.itineraryCount.textContent = totalPlaces;
  
  // Update each day
  [1, 2, 3].forEach(day => {
    const dayCard = document.querySelector(`.day-card[data-day="${day}"]`);
    const dayEmpty = dayCard.querySelector('.day-empty');
    const dayPlaces = dayCard.querySelector('.day-places');
    const dayCount = dayCard.querySelector('.day-count');
    const clearBtn = dayCard.querySelector('.clear-day-btn');
    
    const dayPlaceIds = state.itinerary[day] || [];
    const dayPlacesData = dayPlaceIds.map(id => PLACES.find(p => p.id === id)).filter(Boolean);
    
    dayCount.textContent = `${dayPlacesData.length} точек`;
    
    if (dayPlacesData.length === 0) {
      dayEmpty.style.display = 'block';
      dayPlaces.style.display = 'none';
      clearBtn.style.display = 'none';
    } else {
      dayEmpty.style.display = 'none';
      dayPlaces.style.display = 'block';
      clearBtn.style.display = 'flex';
      
      dayPlaces.innerHTML = dayPlacesData.map((place, index) => 
        createItineraryPlaceCard(place, day, index)
      ).join('');
      
      // Update move down button states
      const moveDownBtns = dayPlaces.querySelectorAll('.move-down-btn');
      moveDownBtns.forEach((btn, index) => {
        if (index === dayPlacesData.length - 1) {
          btn.disabled = true;
          btn.classList.add('opacity-50');
        }
      });
    }
  });
  
  // Re-initialize Lucide icons
  lucide.createIcons();
}

function updateFiltersModal() {
  const categoryFilters = document.getElementById('categoryFilters');
  const onlyInstaToggle = document.getElementById('onlyInstaToggle');
  const filterBadge = document.getElementById('filterBadge');
  
  // Update category filters
  categoryFilters.innerHTML = CATEGORIES.map(category => `
    <label class="flex items-center gap-2 border rounded-xl px-3 py-2 hover:bg-gray-50 cursor-pointer transition-colors">
      <input type="checkbox" class="category-filter-checkbox rounded" data-category="${category.id}" 
             ${state.categoryFilters[category.id] ? 'checked' : ''}>
      <i data-lucide="${category.icon}" class="w-4 h-4 opacity-70"></i>
      <span class="text-sm">${category.label}</span>
    </label>
  `).join('');
  
  // Update insta toggle
  onlyInstaToggle.checked = state.onlyInsta;
  
  // Update filter badge
  const hasActiveFilters = Object.values(state.categoryFilters).some(v => v) || state.onlyInsta;
  filterBadge.style.display = hasActiveFilters ? 'grid' : 'none';
  
  // Re-initialize Lucide icons
  lucide.createIcons();
}

function updateCounts() {
  const filteredPlaces = getFilteredPlaces();
  const { totalPlaces } = getItineraryStats();
  
  elements.placesCount.textContent = filteredPlaces.length;
  elements.favoritesCount.textContent = state.favorites.length;
  elements.itineraryCount.textContent = totalPlaces;
}

// Event Handlers
function handleSearch() {
  state.query = elements.searchInput.value;
  updatePlacesGrid();
}

function handleFavoriteToggle(placeId) {
  if (state.favorites.includes(placeId)) {
    state.favorites = state.favorites.filter(id => id !== placeId);
  } else {
    state.favorites.push(placeId);
  }
  
  saveState();
  updatePlacesGrid();
  updateFavoritesGrid();
  updateCounts();
}

function handleCompareToggle(placeId) {
  if (state.compare.includes(placeId)) {
    state.compare = state.compare.filter(id => id !== placeId);
  } else if (state.compare.length < 4) {
    state.compare.push(placeId);
  }
  
  updatePlacesGrid();
  updateFavoritesGrid();
}

function handleAddToDay(placeId, day) {
  if (!state.itinerary[day].includes(placeId)) {
    state.itinerary[day].push(placeId);
    saveState();
    updateItinerary();
    updateCounts();
  }
}

function handleRemoveFromDay(placeId, day) {
  state.itinerary[day] = state.itinerary[day].filter(id => id !== placeId);
  saveState();
  updateItinerary();
  updateCounts();
}

function handleMoveInDay(placeId, day, direction) {
  const dayPlaces = state.itinerary[day];
  const currentIndex = dayPlaces.indexOf(placeId);
  const newIndex = currentIndex + direction;
  
  if (newIndex >= 0 && newIndex < dayPlaces.length) {
    [dayPlaces[currentIndex], dayPlaces[newIndex]] = [dayPlaces[newIndex], dayPlaces[currentIndex]];
    saveState();
    updateItinerary();
  }
}

function handleClearDay(day) {
  state.itinerary[day] = [];
  saveState();
  updateItinerary();
  updateCounts();
}

function handleTabSwitch(tabName) {
  // Update tab buttons
  document.querySelectorAll('.tab-button').forEach(btn => {
    btn.classList.remove('active');
  });
  document.getElementById(tabName + 'Tab').classList.add('active');
  
  // Update tab contents
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.add('hidden');
  });
  document.getElementById(tabName + 'Content').classList.remove('hidden');
  
  state.currentTab = tabName;
  
  // Update data for active tab
  if (tabName === 'browse') {
    updatePlacesGrid();
  } else if (tabName === 'favorites') {
    updateFavoritesGrid();
  } else if (tabName === 'plan') {
    updateItinerary();
  }
}

function handleCategoryFilterChange(category, checked) {
  state.categoryFilters[category] = checked;
  saveState();
  updateFiltersModal();
  updatePlacesGrid();
}

function handleShare() {
  const stateToShare = {
    itinerary: state.itinerary,
    favorites: state.favorites
  };
  
  const encoded = btoa(encodeURIComponent(JSON.stringify(stateToShare)));
  const url = `${window.location.origin}${window.location.pathname}#state=${encoded}`;
  
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(url).then(() => {
      showShareToast();
    }).catch(() => {
      // Fallback for older browsers
      fallbackCopyToClipboard(url);
    });
  } else {
    fallbackCopyToClipboard(url);
  }
}

function fallbackCopyToClipboard(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    document.execCommand('copy');
    showShareToast();
  } catch (err) {
    console.error('Could not copy text: ', err);
    alert('Не удалось скопировать ссылку. Попробуйте еще раз.');
  } finally {
    document.body.removeChild(textArea);
  }
}

function showShareToast() {
  elements.shareToast.classList.remove('translate-y-full', 'opacity-0');
  elements.shareToast.classList.add('toast-enter');
  
  setTimeout(() => {
    elements.shareToast.classList.add('translate-y-full', 'opacity-0');
    elements.shareToast.classList.remove('toast-enter');
  }, 3000);
}

function handleResetAll() {
  if (confirm('Сбросить всё к начальным настройкам?')) {
    state.itinerary = structuredClone(DEFAULT_ITINERARY);
    state.favorites = [];
    state.compare = [];
    state.query = "";
    state.categoryFilters = {};
    state.onlyInsta = false;
    
    elements.searchInput.value = "";
    
    saveState();
    updateAll();
  }
}

function handleClearAllFilters() {
  state.query = "";
  state.categoryFilters = {};
  state.onlyInsta = false;
  
  elements.searchInput.value = "";
  
  saveState();
  updateFiltersModal();
  updatePlacesGrid();
}

// Event Listeners Setup
function setupEventListeners() {
  // Search
  elements.searchInput.addEventListener('input', handleSearch);
  
  // Tabs
  elements.tabs.browse.addEventListener('click', () => handleTabSwitch('browse'));
  elements.tabs.plan.addEventListener('click', () => handleTabSwitch('plan'));
  elements.tabs.favorites.addEventListener('click', () => handleTabSwitch('favorites'));
  
  // Filters Modal
  elements.filtersBtn.addEventListener('click', () => {
    elements.filtersModal.classList.remove('hidden');
  });
  
  elements.closeFiltersBtn.addEventListener('click', () => {
    elements.filtersModal.classList.add('hidden');
  });
  
  elements.filtersModal.addEventListener('click', (e) => {
    if (e.target === elements.filtersModal) {
      elements.filtersModal.classList.add('hidden');
    }
  });
  
  // Filter controls
  document.getElementById('onlyInstaToggle').addEventListener('change', (e) => {
    state.onlyInsta = e.target.checked;
    saveState();
    updateFiltersModal();
    updatePlacesGrid();
  });
  
  document.getElementById('resetCategoriesBtn').addEventListener('click', () => {
    state.categoryFilters = {};
    saveState();
    updateFiltersModal();
    updatePlacesGrid();
  });
  
  document.getElementById('clearAllFiltersBtn').addEventListener('click', handleClearAllFilters);
  document.getElementById('clearFiltersBtn').addEventListener('click', handleClearAllFilters);
  document.getElementById('resetAllBtn').addEventListener('click', handleResetAll);
  
  // Share and restore
  elements.shareBtn.addEventListener('click', handleShare);
  document.getElementById('restoreDefaultBtn').addEventListener('click', () => {
    if (confirm('Восстановить стандартный маршрут?')) {
      state.itinerary = structuredClone(DEFAULT_ITINERARY);
      saveState();
      updateItinerary();
      updateCounts();
    }
  });
  
  // Delegated event listeners for dynamic content
  document.body.addEventListener('click', (e) => {
    // Favorite buttons
    if (e.target.closest('.favorite-btn')) {
      e.preventDefault();
      const btn = e.target.closest('.favorite-btn');
      const placeId = btn.dataset.placeId;
      handleFavoriteToggle(placeId);
    }
    
    // Compare buttons  
    if (e.target.closest('.compare-btn')) {
      e.preventDefault();
      const btn = e.target.closest('.compare-btn');
      const placeId = btn.dataset.placeId;
      handleCompareToggle(placeId);
    }
    
    // Add to day buttons
    if (e.target.closest('.add-to-day-btn')) {
      e.preventDefault();
      const btn = e.target.closest('.add-to-day-btn');
      const placeId = btn.dataset.placeId;
      const day = parseInt(btn.dataset.day);
      handleAddToDay(placeId, day);
    }
    
    // Remove from day buttons
    if (e.target.closest('.remove-from-day-btn')) {
      e.preventDefault();
      const btn = e.target.closest('.remove-from-day-btn');
      const placeId = btn.dataset.placeId;
      const day = parseInt(btn.dataset.day);
      handleRemoveFromDay(placeId, day);
    }
    
    // Move up/down buttons
    if (e.target.closest('.move-up-btn')) {
      e.preventDefault();
      const btn = e.target.closest('.move-up-btn');
      const placeId = btn.dataset.placeId;
      const day = parseInt(btn.dataset.day);
      handleMoveInDay(placeId, day, -1);
    }
    
    if (e.target.closest('.move-down-btn')) {
      e.preventDefault();
      const btn = e.target.closest('.move-down-btn');
      const placeId = btn.dataset.placeId;
      const day = parseInt(btn.dataset.day);
      handleMoveInDay(placeId, day, 1);
    }
    
    // Clear day buttons
    if (e.target.closest('.clear-day-btn')) {
      e.preventDefault();
      const btn = e.target.closest('.clear-day-btn');
      const dayCard = btn.closest('.day-card');
      const day = parseInt(dayCard.dataset.day);
      handleClearDay(day);
    }
    
    // Category filter checkboxes
    if (e.target.matches('.category-filter-checkbox')) {
      const checkbox = e.target;
      const category = checkbox.dataset.category;
      handleCategoryFilterChange(category, checkbox.checked);
    }
  });
  
  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      elements.filtersModal.classList.add('hidden');
    }
    
    if (e.key === '/' && !e.target.matches('input, textarea')) {
      e.preventDefault();
      elements.searchInput.focus();
    }
  });
}

// Initialize DOM Elements
function initializeElements() {
  elements.searchInput = document.getElementById('searchInput');
  elements.filtersBtn = document.getElementById('filtersBtn');
  elements.filtersModal = document.getElementById('filtersModal');
  elements.closeFiltersBtn = document.getElementById('closeFiltersBtn');
  elements.placesGrid = document.getElementById('placesGrid');
  elements.favoritesGrid = document.getElementById('favoritesGrid');
  elements.noResults = document.getElementById('noResults');
  elements.noFavorites = document.getElementById('noFavorites');
  elements.placesCount = document.getElementById('placesCount');
  elements.favoritesCount = document.getElementById('favoritesCount');
  elements.itineraryCount = document.getElementById('itineraryCount');
  elements.totalPlaces = document.getElementById('totalPlaces');
  elements.estimatedBudget = document.getElementById('estimatedBudget');
  elements.shareBtn = document.getElementById('shareBtn');
  elements.shareToast = document.getElementById('shareToast');
  
  elements.tabs.browse = document.getElementById('browseTab');
  elements.tabs.plan = document.getElementById('planTab');
  elements.tabs.favorites = document.getElementById('favoritesTab');
  
  elements.tabContents.browse = document.getElementById('browseContent');
  elements.tabContents.plan = document.getElementById('planContent');
  elements.tabContents.favorites = document.getElementById('favoritesContent');
}

// Update All UI
function updateAll() {
  updatePlacesGrid();
  updateFavoritesGrid();
  updateItinerary();
  updateFiltersModal();
  updateCounts();
}

// Initialize Application
function initializeApp() {
  initializeElements();
  loadStateFromURL();
  loadState();
  setupEventListeners();
  updateAll();
  
  // Initialize Lucide icons
  lucide.createIcons();
  
  console.log('Milan Travel Planner initialized');
}

// Start the application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}