// Milan Travel Planner - Vanilla JavaScript Implementation

// Data and Configuration
const PLACES = [
  // Icons / Classics
  {
    id: "duomo",
    title: "Дуомо di Milano (крыша)",
    area: "Centro",
    category: "icon",
    tags: ["виды", "архитектура", "must", "insta"],
    bestTime: "morning",
    hype: 5,
    price: "€€",
    bookingNeeded: true,
    hours: "9:00-19:00",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b0/View_west_along_Duomo_roof%2C_Milan.jpg",
    url: "https://www.duomomilano.it/",
    tiktokable: true,
    why: "Готический собор и прогулка по мраморным террасам — самые киногеничные виды Милана",
    desc: "Иконическая терраса кафедрала. Лифт экономит время, но очередь всё равно есть. Лайфхак: слот на 8:30–9:00, потом кофе в Galleria.",
  },
  {
    id: "galleria",
    title: "Galleria Vittorio Emanuele II",
    area: "Centro",
    category: "icon",
    tags: ["классика", "шопинг", "инста", "must"],
    bestTime: "morning",
    hype: 5,
    price: "€€",
    hours: "10:00-20:00",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/79/Galleria_Vittorio_Emanuele_II_%28Milan%29_-_Interior.jpg",
    tiktokable: true,
    why: "Исторический стеклянный пассаж, мозаики и классический кадр для рилс",
    desc: "От Prada до Marchesi 1824. Внутри свет красиво рисует купол — лучшее время утром.",
  },
  {
    id: "castello",
    title: "Castello Sforzesco",
    area: "Centro",
    category: "icon",
    tags: ["история", "парк", "музеи"],
    bestTime: "afternoon",
    hype: 3,
    price: "€",
    hours: "7:00-18:00",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Castello_sforzesco%2C_milano.JPG",
    why: "Замок Сфорца с музеями; ворота в парк Семпионе. Хороший тенистый маршрут",
    desc: "Крепость Висконти/Сфорца, внутренние дворы и музеи. Хорошо в связке с парком.",
  },
  {
    id: "lastsupper",
    title: "«Тайная вечеря» (Санта Мария делле Грацие)",
    area: "Magenta",
    category: "icon",
    tags: ["искусство", "билеты", "must"],
    bestTime: "morning",
    hype: 5,
    price: "€€",
    bookingNeeded: true,
    hours: "8:15-19:00",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Santa_Maria_delle_Grazie_%28Milan%29_-_52894269114.jpg/2560px-Santa_Maria_delle_Grazie_%28Milan%29_-_52894269114.jpg",
    url: "https://cenacolovinciano.org/en/",
    why: "Фреска Леонардо (вход по тайм‑слотам, билеты уходят заранее)",
    desc: "Бронируйте за 1–2 недели, но часто бывают возвраты накануне. Экспресс‑визит — 15 минут в зале.",
  },

  // Modern / Architecture
  {
    id: "gae-aulenti",
    title: "Piazza Gae Aulenti",
    area: "Porta Nuova",
    category: "architecture",
    tags: ["современное", "город", "инста"],
    bestTime: "afternoon",
    hype: 4,
    price: "€",
    hours: "24/7",
    img: "https://source.unsplash.com/1600x900/?milan,gae,aulenti",
    why: "Современная площадь с зеркальными фасадами и фонтанами — ворота в новый Милан",
    desc: "Икона нового skyline со спиральным шпилем; отражается в бассейнах площади.",
  },
  {
    id: "unicredit",
    title: "Unicredit Tower",
    area: "Porta Nuova",
    category: "architecture",
    tags: ["скульптура", "небоскрёб", "современное"],
    bestTime: "afternoon",
    hype: 4,
    price: "€",
    hours: "24/7 (внешний осмотр)",
    img: "https://source.unsplash.com/1600x900/?unicredit,milan",
    why: "Икона нового skyline со спиральным шпилем; отражается в бассейнах площади",
    desc: "Самый высокий небоскрёб Италии с характерным LED-освещением по вечерам.",
  },
  {
    id: "bosco",
    title: "Bosco Verticale",
    area: "Isola",
    category: "architecture",
    tags: ["инста", "экология", "современное"],
    bestTime: "afternoon",
    hype: 5,
    price: "€",
    hours: "24/7 (внешний осмотр)",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Bosco_verticale%2C_Milan%2C_Italy_%28Unsplash%29.jpg",
    tiktokable: true,
    why: "Вертикальный лес: две жилые башни, оплетённые сотнями деревьев — визитка Милана",
    desc: "Лучший ракурс — с поля BAM или с мостика у Piazza Gae Aulenti.",
  },
  {
    id: "citylife",
    title: "CityLife (Hadid/Isozaki/Libeskind)",
    area: "Tre Torri",
    category: "architecture",
    tags: ["современное", "панорамы", "архитектура"],
    bestTime: "afternoon",
    hype: 4,
    price: "€",
    hours: "24/7",
    img: "https://source.unsplash.com/1600x900/?milan,citylife",
    why: "Футуристический квартал с тремя башнями звёздных архитекторов и парком",
    desc: "Башни от мировых звёзд архитектуры с торговым центром и зелёными зонами.",
  },
  {
    id: "casa-rossi",
    title: "Casa Rossi, Corso Magenta 12",
    area: "Magenta",
    category: "architecture",
    tags: ["секретное", "фото", "дворик"],
    bestTime: "morning",
    hype: 3,
    price: "€",
    hours: "9:00-18:00",
    img: "https://source.unsplash.com/1600x900/?milan,courtyard,italy",
    why: "Тихий дворик‑октагон — нишевый фотоспот без толп",
    desc: "Скрытый архитектурный жемчужина в центре, идеальная для спокойных фото.",
  },

  // Museums / Design
  {
    id: "fondazione-prada",
    title: "Fondazione Prada (La Torre, Haunted House, Podium)",
    area: "Porta Romana",
    category: "museum",
    tags: ["современное искусство", "дизайн", "инста"],
    bestTime: "afternoon",
    hype: 5,
    price: "€€",
    hours: "10:00-19:00 (вт-вс)",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/51/Fondazione_PRADA%2C_Via_Ripamonti_-_Largo_Isarco_area%2C_Golden_Tower_Rem_Koolhass_design.jpg",
    url: "https://www.fondazioneprada.org/",
    tiktokable: true,
    why: "Главный центр современного искусства: башня, золотой дом и павильоны в бывшей дистиллерии",
    desc: "Лучшее современное искусство города. Комбо с Bar Luce на кофе/ланч.",
  },
  {
    id: "armani-silos",
    title: "Armani / Silos",
    area: "Tortona",
    category: "museum",
    tags: ["мода", "дизайн", "история"],
    bestTime: "afternoon",
    hype: 4,
    price: "€€",
    hours: "11:00-19:00",
    img: "https://source.unsplash.com/1600x900/?armani,museum,milan",
    why: "Музей истории Armani в бетонном силосе — мода как искусство",
    desc: "40 лет творчества Джорджо Армани в промышленном пространстве.",
  },
  {
    id: "mudec",
    title: "MUDEC",
    area: "Tortona",
    category: "museum",
    tags: ["музей", "культура", "выставки"],
    bestTime: "afternoon",
    hype: 3,
    price: "€€",
    hours: "9:30-19:30",
    img: "https://source.unsplash.com/1600x900/?mudec,milan,museum",
    why: "Музей мировых культур — интересные временные выставки",
    desc: "От древних цивилизаций до современного искусства в дизайнерском здании.",
  },
  {
    id: "pinacoteca",
    title: "Pinacoteca di Brera",
    area: "Brera",
    category: "museum",
    tags: ["искусство", "классика", "спокойно"],
    bestTime: "morning",
    hype: 3,
    price: "€€",
    hours: "8:30-19:15",
    img: "https://source.unsplash.com/1600x900/?pinacoteca,brera,milan",
    why: "Топ‑подборка итальянцев + тихая атмосфера",
    desc: "Мантенья, Караваджо, Беллини. Хороший баланс после хайпа центра.",
  },

  // Food & Restaurants
  {
    id: "trippa",
    title: "Trippa",
    area: "Porta Romana",
    category: "restaurant",
    tags: ["траттория", "сезонное", "шеф"],
    bestTime: "evening",
    hype: 5,
    price: "€€€",
    bookingNeeded: true,
    hours: "19:00-23:00",
    img: "https://source.unsplash.com/1600x900/?trippa,restaurant,italian",
    url: "https://www.trippamilano.it/",
    why: "Сезонная траттория Диего России; легендарная тропа фритта и паста‑дня. Бронирование строго заранее",
    desc: "Один из лучших ресторанов города. Меню меняется каждый день, акцент на субпродукты.",
  },
  {
    id: "spore",
    title: "Spore",
    area: "Porta Romana",
    category: "restaurant",
    tags: ["дегустация", "натуральные вина", "авторская кухня"],
    bestTime: "evening",
    hype: 4,
    price: "€€€",
    bookingNeeded: true,
    hours: "19:30-23:00",
    img: "https://source.unsplash.com/1600x900/?tasting,restaurant,italy",
    url: "https://www.sporeristorante.it/",
    why: "Меню из 5 курсов вокруг ферментаций: мисо‑томаты, котлетта с кодзи, натуралы",
    desc: "Инновационная кухня с акцентом на ферментацию и биодинамические вина.",
  },
  {
    id: "alba-pasta",
    title: "Alba Pasta Bar (Mercato Isola)",
    area: "Isola",
    category: "restaurant",
    tags: ["быстрый обед", "паста", "рынок"],
    bestTime: "afternoon",
    hype: 4,
    price: "€€",
    hours: "12:00-15:00",
    img: "https://source.unsplash.com/1600x900/?fresh,pasta,italy",
    why: "Свежая паста у стойки: cacio e pepe с лимоном/мятой, alla norma, равиоли — быстро и по делу",
    desc: "Лучшая свежая паста в городе в формате casual dining на рынке Isola.",
  },
  {
    id: "yamamoto",
    title: "Gastronomia Yamamoto",
    area: "Centro",
    category: "restaurant",
    tags: ["японская кухня", "домашнее", "аутентично"],
    bestTime: "afternoon",
    hype: 4,
    price: "€€",
    hours: "12:00-14:30, 19:00-22:00",
    img: "https://source.unsplash.com/1600x900/?japanese,food,donburi",
    why: "Японская «кантинка»: бенто, карри, баклажан мисо и идеальная простота",
    desc: "Семейный ресторан с аутентичной домашней японской кухней.",
  },
  {
    id: "silvano",
    title: "Silvano Vini & Cibi al Banco",
    area: "NoLo",
    category: "restaurant",
    tags: ["вино", "остерия", "локальное"],
    bestTime: "afternoon",
    hype: 3,
    price: "€€",
    hours: "12:00-15:00, 18:00-24:00",
    img: "https://source.unsplash.com/1600x900/?italian,bistro,wine",
    why: "Остерия без плиты: большой духовой шкаф, простые рецепты, отличные вина",
    desc: "Соседский винный бар с отличной винной картой и простой едой.",
  },
  {
    id: "creda",
    title: "Creda",
    area: "Crocetta",
    category: "restaurant",
    tags: ["современное", "уют", "веранда"],
    bestTime: "evening",
    hype: 4,
    price: "€€€",
    hours: "19:00-23:00",
    img: "https://source.unsplash.com/1600x900/?modern,italian,restaurant",
    why: "Комфорт‑фуд с миланским акцентом: паста, котолетта, сезонные овощи, летняя веранда",
    desc: "Стильный ресторан с современной интерпретацией миланской кухни.",
  },
  {
    id: "bar_luce",
    title: "Bar Luce (Wes Anderson)",
    area: "Porta Romana",
    category: "restaurant",
    tags: ["инста", "кофе", "дизайн"],
    bestTime: "afternoon",
    hype: 5,
    price: "€€",
    hours: "8:00-20:00",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Fondazione_PRADA%2C_Via_Ripamonti_-_Largo_Isarco_area%2C_Bar_Luce%2C_50s_lifestyle_Milano_design_by_Wes_Anderson.jpg",
    tiktokable: true,
    why: "Кафе Уэса Андерсона: пастельные тона, пинболы и эстетика 50‑х — топ для фото",
    desc: "Кафе/десерты после выставки. По выходным — очередь, но движется.",
  },

  // Bars & Nightlife
  {
    id: "bar-nico",
    title: "Bar Nico",
    area: "Porta Venezia",
    category: "bar",
    tags: ["нат‑вина", "спокойный вайб", "дизайн"],
    bestTime: "evening",
    hype: 4,
    price: "€€",
    hours: "18:00-1:00",
    img: "https://source.unsplash.com/1600x900/?wine,bar,italy",
    why: "Дизайн‑бар в бывшей паста‑лавке: малые тарелки, нат‑вина и мягкий свет",
    desc: "Уютный винный бар с отличной картой натуральных вин и небольшими закусками.",
  },
  {
    id: "bene-bene",
    title: "Bene Bene (listening bar)",
    area: "Porta Venezia",
    category: "bar",
    tags: ["listening bar", "коктейли", "винил"],
    bestTime: "night",
    hype: 4,
    price: "€€€",
    hours: "19:00-2:00",
    img: "https://source.unsplash.com/1600x900/?cocktail,bar,night",
    why: "Слушающий бар: аудиосистема, коктейли от Morris Maramaldi, публика — fashion/design crowd",
    desc: "Уникальный концепт listening bar с Hi-Fi системой и авторскими коктейлями.",
  },
  {
    id: "dexter",
    title: "Dexter Soundbites",
    area: "Isola",
    category: "bar",
    tags: ["винил", "кухня+бар", "музыка"],
    bestTime: "night",
    hype: 4,
    price: "€€€",
    hours: "19:00-2:00",
    img: "https://source.unsplash.com/1600x900/?vinyl,bar,italy",
    why: "Винил + авторские закуски (японо‑перуанско‑мексиканские мотивы), интимный зал",
    desc: "Музыкальный бар с виниловой коллекцией и фьюжн-кухней.",
  },
  {
    id: "nottingham",
    title: "Nottingham Forest",
    area: "Porta Venezia",
    category: "bar",
    tags: ["коктейли", "молекулярные", "шоу"],
    bestTime: "night",
    hype: 4,
    price: "€€€",
    hours: "19:00-2:00",
    img: "https://source.unsplash.com/1600x900/?molecular,cocktail,bar",
    why: "Молекулярные коктейли как перформанс",
    desc: "Без броней. Очередь, но фаст‑пейс. Стоит зайти хотя бы на один.",
  },
  {
    id: "bar_basso",
    title: "Bar Basso (Negroni Sbagliato)",
    area: "Porta Venezia",
    category: "bar",
    tags: ["классика", "коктейли", "история"],
    bestTime: "night",
    hype: 3,
    price: "€€",
    hours: "17:00-2:00",
    img: "https://source.unsplash.com/1600x900/?negroni,classic,bar",
    why: "Исторический sbagliato в гигантском бокале",
    desc: "Ретро‑бар 1967 года. Атмосферно и без пафоса.",
  },

  // Rooftops & Terraces
  {
    id: "the-roof",
    title: "The Roof Milano (руф)",
    area: "Duomo",
    category: "rooftop",
    tags: ["виды", "fine dining", "sunset"],
    bestTime: "evening",
    hype: 5,
    price: "€€€€",
    hours: "18:00-1:00",
    img: "https://source.unsplash.com/1600x900/?rooftop,milan,duomo",
    tiktokable: true,
    why: "Ресторан и коктейль‑бар с топ‑видами на Дуомо. Идеально для прощального аперитиво",
    desc: "Лучший руфтоп с видом на собор, высокая кухня и коктейли.",
  },
  {
    id: "sky-terrace",
    title: "Sky Terrace Bar Milano Scala (руф)",
    area: "Brera",
    category: "rooftop",
    tags: ["уют", "360°", "сад"],
    bestTime: "evening",
    hype: 4,
    price: "€€€",
    hours: "18:00-1:00",
    img: "https://source.unsplash.com/1600x900/?rooftop,garden,italy",
    why: "Камерная терраса‑сад с 360° видами и коктейлями на травах",
    desc: "Элегантная терраса рядом с театром Ла Скала с панорамными видами.",
  },
  {
    id: "aperol",
    title: "Terrazza Aperol (вид на Дуомо)",
    area: "Duomo",
    category: "rooftop",
    tags: ["инста", "классика", "аперитиво"],
    bestTime: "evening",
    hype: 5,
    price: "€€€",
    hours: "11:00-2:00",
    img: "https://source.unsplash.com/1600x900/?aperol,duomo",
    tiktokable: true,
    why: "Самый «инста» ракурс на фасад собора. Ожидайте очередь, приходите раньше",
    desc: "Туристично, но виды реально крутые. Живая очередь, но быстро рассаживают.",
  },
  {
    id: "palestro",
    title: "Terrazza Palestro",
    area: "Porta Venezia",
    category: "rooftop",
    tags: ["элегантно", "ужин", "сады"],
    bestTime: "evening",
    hype: 4,
    price: "€€€",
    hours: "19:00-1:00",
    img: "https://source.unsplash.com/1600x900/?terrace,italy,dinner",
    why: "Элегантный ужин с видом на сады; меньше толп, чем у Дуомо",
    desc: "Спокойная альтернатива центральным руфтопам с видом на парки.",
  },
  {
    id: "ceresio",
    title: "Ceresio 7 Pools & Restaurant",
    area: "Porta Volta",
    category: "rooftop",
    tags: ["гламур", "коктейли", "бассейны"],
    bestTime: "evening",
    hype: 5,
    price: "€€€€",
    bookingNeeded: true,
    hours: "12:00-2:00",
    img: "https://source.unsplash.com/1600x900/?rooftop,pool,italy",
    tiktokable: true,
    why: "Бассейны на крыше, коктейли и виды на северный Милан. Гламур и блеск",
    desc: "Stylish rooftop от Dsquared2. Строгий dress‑code + бронь.",
  },

  // Walks & Areas
  {
    id: "navigli",
    title: "Navigli (каналы)",
    area: "Navigli",
    category: "walk",
    tags: ["закат", "аперитиво", "каналы"],
    bestTime: "evening",
    hype: 5,
    price: "€€",
    hours: "Весь день",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Milan_Naviglio_Grande_at_sunset_HD_01.jpg/2560px-Milan_Naviglio_Grande_at_sunset_HD_01.jpg",
    tiktokable: true,
    why: "Закат, мостики, аперитив на набережной — одна из самых атмосферных сцен",
    desc: "Променад вдоль каналов, винные бары, аперитиво. Отлично в выходные.",
  },
  {
    id: "sempione",
    title: "Parco Sempione",
    area: "Centro",
    category: "walk",
    tags: ["прогулка", "зелень", "парк"],
    bestTime: "afternoon",
    hype: 3,
    price: "€",
    hours: "6:30-21:00",
    img: "https://source.unsplash.com/1600x900/?parco,sempione,milan",
    why: "Главный городской парк — путь от замка к арке делла Паче",
    desc: "Большой городской парк. Хорошо для пикника или просто прогулки к арке.",
  },
  {
    id: "bam-park",
    title: "BAM Park / Biblioteca degli Alberi",
    area: "Porta Nuova",
    category: "walk",
    tags: ["прогулка", "релакс", "современное"],
    bestTime: "afternoon",
    hype: 3,
    price: "€",
    hours: "6:00-24:00",
    img: "https://source.unsplash.com/1600x900/?milan,park,modern",
    why: "Сад‑лабиринт у Bosco Verticale: круги, дорожки, газоны для отдыха",
    desc: "Современный парк между Isola и Porta Nuova. Отлично для паузы и фото.",
  },
  {
    id: "monumentale",
    title: "Monumentale (кладбище‑музей)",
    area: "Monumentale",
    category: "walk",
    tags: ["скульптура", "тихо", "искусство"],
    bestTime: "morning",
    hype: 3,
    price: "€",
    hours: "8:00-18:00",
    img: "https://source.unsplash.com/1600x900/?milan,monumentale",
    why: "Скульптуры и мавзолеи под открытым небом — очень кинематографично",
    desc: "Удивительные надгробные памятники и скульптуры в парковой атмосфере.",
  },
  {
    id: "chinatown",
    title: "Chinatown / Via Paolo Sarpi",
    area: "Sarpi",
    category: "walk",
    tags: ["стрит‑фуд", "атмосфера", "еда"],
    bestTime: "evening",
    hype: 3,
    price: "€",
    hours: "Весь день",
    img: "https://source.unsplash.com/1600x900/?milan,chinatown",
    why: "Еда, азиатские лавки и вечерняя подсветка улиц",
    desc: "Аутентичный китайский квартал с ресторанами и продуктовыми магазинами.",
  },
  {
    id: "branca",
    title: "Torre Branca (смотровая)",
    area: "Parco Sempione",
    category: "architecture",
    tags: ["панорама", "быстрый визит", "виды"],
    bestTime: "afternoon",
    hype: 3,
    price: "€",
    hours: "10:30-12:30, 14:30-18:30",
    img: "https://source.unsplash.com/1600x900/?milan,view,tower",
    why: "Стальная башня Джио Понти — быстрая панорама на центр",
    desc: "108-метровая телевизионная башня с обзорной площадкой и лифтом.",
  },

  // Day Trips
  {
    id: "bergamo",
    title: "Бергамо (Città Alta)",
    area: "Bergamo",
    category: "daytrip",
    tags: ["панорамы", "история", "средневековье"],
    bestTime: "morning",
    hype: 4,
    price: "€€",
    hours: "Целый день",
    img: "https://source.unsplash.com/1600x900/?bergamo,italy",
    why: "Средневековый верхний город, крепостные стены и смотровые точки",
    desc: "45 минут на поезде. Фуникулёр в верхний город, крепостные стены и виды на Альпы.",
  },
  {
    id: "como",
    title: "Озеро Комо (Como + Brunate)",
    area: "Como",
    category: "daytrip",
    tags: ["вода", "виды", "озеро"],
    bestTime: "afternoon",
    hype: 4,
    price: "€€",
    hours: "Целый день",
    img: "https://source.unsplash.com/1600x900/?lake,como,italy",
    why: "Набережная, собор, фуникулёр на Брунате — быстрый побег к воде",
    desc: "Час на поезде. Прогулка по набережной, собор и подъём на фуникулёре для видов на озеро.",
  },
];

const CATEGORIES = [
  { id: "icon", label: "Иконы", icon: "star" },
  { id: "architecture", label: "Архитектура", icon: "building" },
  { id: "museum", label: "Музеи/арт", icon: "palette" },
  { id: "restaurant", label: "Рестораны", icon: "utensils" },
  { id: "bar", label: "Бары", icon: "wine" },
  { id: "rooftop", label: "Руфтопы", icon: "camera" },
  { id: "walk", label: "Прогулки", icon: "map-pin" },
  { id: "daytrip", label: "Выезды", icon: "map" },
];

const BEST_TIME_LABELS = {
  morning: "утро",
  afternoon: "день", 
  evening: "вечер",
  night: "ночь"
};

const DEFAULT_ITINERARY = {
  1: ["duomo", "galleria", "castello", "sempione", "navigli", "aperol"],
  2: ["gae-aulenti", "bosco", "bam-park", "fondazione-prada", "bar_luce", "the-roof"],
  3: ["lastsupper", "pinacoteca", "trippa", "ceresio", "bergamo"],
};

// Application State
let state = {
  query: "",
  categoryFilters: {},
  onlyInsta: false,
  onlyBooking: false,
  timeFilter: "",
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
    
    // TikTok/Instagram filter
    const tiktokMatch = !state.onlyInsta || place.tiktokable || place.tags.includes("insta");
    
    // Booking needed filter
    const bookingMatch = !state.onlyBooking || place.bookingNeeded;
    
    // Time filter
    const timeMatch = !state.timeFilter || place.bestTime === state.timeFilter;
    
    // Text search
    const textMatch = !query || [
      place.title,
      place.area,
      place.desc,
      place.why,
      ...place.tags,
      getCategoryLabel(place.category)
    ].join(" ").toLowerCase().includes(query);
    
    return categoryMatch && tiktokMatch && bookingMatch && timeMatch && textMatch;
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
      onlyInsta: state.onlyInsta,
      onlyBooking: state.onlyBooking,
      timeFilter: state.timeFilter
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
      state.onlyBooking = parsedState.onlyBooking || false;
      state.timeFilter = parsedState.timeFilter || "";
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
        <div class="absolute top-3 left-3 flex gap-1">
          ${place.tiktokable ? '<span class="px-2 py-1 bg-pink-500 text-white rounded-full text-xs font-medium">TikTok</span>' : ''}
          ${place.bookingNeeded ? '<span class="px-2 py-1 bg-red-500 text-white rounded-full text-xs font-medium">Бронь</span>' : ''}
        </div>
        <div class="absolute top-3 right-3 flex gap-1">
          <span class="hype-badge hype-${place.hype} text-xs px-2 py-1 rounded bg-black bg-opacity-75 text-white">
            ${getStars(place.hype)}
          </span>
          <span class="px-2 py-1 bg-white bg-opacity-90 rounded text-xs border ${getPriceClass(place.price)}">
            ${place.price || "€"}
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
      
      <div class="p-4 pt-0 space-y-2">
        <div class="flex justify-between items-center gap-2">
          <a href="${gmaps(place.title)}" target="_blank" rel="noreferrer" 
             class="flex-1 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-1 text-sm">
            <i data-lucide="map-pin" class="w-4 h-4"></i> Карты
          </a>
          ${place.url ? `
            <a href="${place.url}" target="_blank" rel="noreferrer" 
               class="flex-1 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center justify-center gap-1 text-sm">
              <i data-lucide="external-link" class="w-4 h-4"></i> Сайт
            </a>
          ` : ''}
        </div>
        <div class="flex gap-1 justify-center">
          <button class="add-to-day-btn px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm" 
                  data-place-id="${place.id}" data-day="1">День 1</button>
          <button class="add-to-day-btn px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm" 
                  data-place-id="${place.id}" data-day="2">День 2</button>
          <button class="add-to-day-btn px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm" 
                  data-place-id="${place.id}" data-day="3">День 3</button>
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
  const onlyBookingToggle = document.getElementById('onlyBookingToggle');
  const timeFilter = document.getElementById('timeFilter');
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
  
  // Update toggles
  onlyInstaToggle.checked = state.onlyInsta;
  onlyBookingToggle.checked = state.onlyBooking;
  
  // Update time filter
  timeFilter.value = state.timeFilter;
  
  // Update filter badge
  const hasActiveFilters = Object.values(state.categoryFilters).some(v => v) || 
                          state.onlyInsta || state.onlyBooking || state.timeFilter;
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
    state.onlyBooking = false;
    state.timeFilter = "";
    
    elements.searchInput.value = "";
    
    saveState();
    updateAll();
  }
}

function handleClearAllFilters() {
  state.query = "";
  state.categoryFilters = {};
  state.onlyInsta = false;
  state.onlyBooking = false;
  state.timeFilter = "";
  
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
  
  document.getElementById('onlyBookingToggle').addEventListener('change', (e) => {
    state.onlyBooking = e.target.checked;
    saveState();
    updateFiltersModal();
    updatePlacesGrid();
  });
  
  document.getElementById('timeFilter').addEventListener('change', (e) => {
    state.timeFilter = e.target.value;
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
  
  document.getElementById('resetTimeBtn').addEventListener('click', () => {
    state.timeFilter = "";
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