import photos from "./photos.json";

export type Photo = { src: string; alt: string; credit: string; license: string; page: string };

type RawPhoto = { url: string; page: string; license: string; artist: string };
const P = photos as Record<string, RawPhoto[]>;

function pics(slug: string, captions: string[]): [Photo, ...Photo[]] {
  return (P[slug] ?? []).map((p, i) => ({
    src: p.url,
    alt: captions[i] ?? captions[0],
    credit: p.artist || "Wikimedia Commons contributor",
    license: p.license,
    page: p.page,
  })) as [Photo, ...Photo[]];
}

export type Pkg = {
  name: "Standard" | "Comfort";
  price: number;
  transport?: string;
  stay?: string;
  meals?: string;
  includes: string[];
  group?: string;
  note?: string;
};

export type Day = { day: number; title: string; detail?: string };

export type FeaturedTrek = {
  slug: string;
  name: string;
  altitude: string;
  duration: string;
  tagline: string;
  difficulty: string;
  highlights: string[];
  summary: string;
  season: string;
  packages: Pkg[];
  itinerary: Day[];
  excludes?: string[];
  requirements?: string;
  notes?: string[];
  photos: [Photo, ...Photo[]];
};

export const FEATURED: FeaturedTrek[] = [
  {
    slug: "kedarkantha",
    name: "Kedarkantha",
    altitude: "12,500 ft",
    duration: "6 days / 5 nights",
    tagline: "The classic winter summit above Sankri",
    difficulty: "Easy–Moderate",
    highlights: ["Summit at 12,500 ft with a 360° Himalayan view", "Frozen Juda Ka Talab lake", "Pine and oak forest above Sankri", "Snow from December to January"],
    summary:
      "A summit trek from Sankri through pine forest and the frozen Juda Ka Talab to a 12,500 ft peak, with snow from December to January.",
    season: "November–April; December–January for snow",
    packages: [
      {
        name: "Standard",
        price: 6500,
        transport: "Shared Dehradun–Sankri return transport",
        stay: "Sankri homestay and triple-sharing tents",
        meals: "Day 1 dinner to Day 6 breakfast",
        includes: ["Guide", "Cook", "Permit", "Sleeping bag", "Gaiters", "Microspikes"],
        group: "12–15 trekkers",
      },
      {
        name: "Premium",
        price: 9500,
        transport: "Innova/Bolero return transport",
        stay: "Hotel and double-sharing tents",
        meals: "All meals, tea, snacks and bonfire",
        includes: ["Guide", "Permit", "Porter for bag up to 10 kg", "All equipment"],
        group: "6–8 trekkers",
      },
    ],
    itinerary: [
      { day: 1, title: "Dehradun to Sankri", detail: "200 km drive. Pickup at Prince Chowk, 7 AM." },
      { day: 2, title: "Sankri to Juda Ka Talab", detail: "4 km, about 4 hours. Camp at 9,100 ft." },
      { day: 3, title: "Juda Ka Talab to Base Camp", detail: "4 km. Camp at 11,200 ft." },
      { day: 4, title: "Summit (12,500 ft) and descent to Hargaon", detail: "Camp at 9,000 ft." },
      { day: 5, title: "Hargaon to Sankri", detail: "Overnight in hotel." },
      { day: 6, title: "Sankri to Dehradun", detail: "Drop around 6–7 PM." },
    ],
    photos: pics("kedarkantha", [
      "Kedarkantha peak under snow, framed by red rhododendron",
      "Himalayan ranges seen from the Kedarkantha summit",
      "Frozen Juda Ka Talab lake among snow-covered pines",
      "Sunrise from the Kedarkantha summit",
    ]),
  },
  {
    slug: "dayara-bugyal",
    name: "Dayara Bugyal",
    altitude: "12,000 ft",
    duration: "4 days / 3 nights",
    tagline: "High meadows above Raithal",
    difficulty: "Easy–Moderate",
    highlights: ["Wide alpine meadows of Dayara", "Bakaria Top ridge", "Starts from Raithal village", "A short trek for first-timers"],
    summary:
      "A short trek from Raithal village to the wide alpine meadows of Dayara and Bakaria Top — grassland in summer, snowfields in winter.",
    season: "Ask us for current conditions",
    packages: [
      {
        name: "Standard",
        price: 5500,
        transport: "Shared Dehradun–Raithal return",
        stay: "Homestay/tent, triple sharing",
        meals: "3 breakfasts, 3 dinners, 3 lunches from base camp",
        includes: ["Guide", "Forest permit", "Trek leader"],
        group: "10–15 trekkers",
      },
      {
        name: "Premium",
        price: 8500,
        transport: "Private car/Innova",
        stay: "Raithal hotel and Swiss tent, double sharing",
        meals: "All meals, evening snacks and bonfire",
        includes: ["Guide", "Permit", "Trek leader", "Sleeping bag", "Gaiters", "Winter microspikes"],
        group: "6–8 trekkers",
      },
    ],
    itinerary: [
      { day: 1, title: "Dehradun to Raithal", detail: "About 8 hours. Pickup at Prince Chowk, 7 AM." },
      { day: 2, title: "Raithal to Dayara Bugyal", detail: "5 km." },
      { day: 3, title: "Dayara – Bakaria Top – Raithal" },
      { day: 4, title: "Raithal to Dehradun" },
    ],
    excludes: ["Personal porter", "Day 1 lunch", "Day 4 lunch", "Travel insurance"],
    notes: ["Altitude listed as 12,000 ft per the latest information (older listings showed 11,830 ft)."],
    photos: pics("dayara-bugyal", [
      "Snow-covered Dayara Bugyal meadow with Himalayan peaks",
      "Snowy ridge on the Dayara Bugyal trail",
      "Horse grazing on the trail to Dayara Bugyal",
    ]),
  },
  {
    slug: "kuari-pass",
    name: "Kuari Pass",
    altitude: "12,516 ft",
    duration: "6 days / 5 nights",
    tagline: "Big-mountain views from Joshimath",
    difficulty: "Moderate",
    highlights: ["Views of Dunagiri and the Garhwal giants", "Oak and rhododendron forest", "Tali forest camp", "Starts from Joshimath"],
    summary:
      "From Joshimath through oak and rhododendron to Kuari Pass, with wide views of the Garhwal giants including Dunagiri.",
    season: "December–April snow; May–June green; September–November clearer views",
    packages: [
      {
        name: "Standard",
        price: 8500,
        transport: "Shared Dehradun–Joshimath return transport",
        stay: "Joshimath hotel and triple-sharing tents",
        meals: "Day 1 dinner to Day 6 breakfast",
        includes: ["Guide", "Cook", "Forest permit", "Sleeping bag", "Trek pole", "Gaiters"],
        note: "Group size for this package not confirmed — please ask.",
      },
      {
        name: "Premium",
        price: 13500,
        transport: "Private Innova return transport",
        stay: "Hotels in Joshimath and Auli plus double-sharing tents",
        meals: "All meals, bonfire and evening snacks",
        includes: ["Guide", "Permit", "Porter up to 10 kg", "All equipment"],
        group: "6–8 trekkers",
      },
    ],
    itinerary: [
      { day: 1, title: "Dehradun/Haridwar to Joshimath", detail: "270 km, about 10 hours." },
      { day: 2, title: "Joshimath to Dhak, trek to Gulling/Tugasi", detail: "4 km trek. Camp at 9,500 ft." },
      { day: 3, title: "Gulling to Tali Forest Camp", detail: "6 km, about 5 hours. 11,000 ft." },
      { day: 4, title: "Tali – Kuari Pass (12,516 ft) – Khullara", detail: "12 km, 8–9 hours." },
      { day: 5, title: "Khullara – Dhak – Joshimath" },
      { day: 6, title: "Joshimath to Dehradun", detail: "Drop around 6–7 PM." },
    ],
    photos: pics("kuari-pass", [
      "Sheep grazing on the Kuari Pass meadows below snow peaks",
      "Kuari Pass bugyal with Himalayan panorama",
      "Dunagiri peak seen from Kuari Pass at dawn",
    ]),
  },
  {
    slug: "har-ki-dun",
    name: "Har Ki Dun",
    altitude: "11,700 ft",
    duration: "7 days / 6 nights",
    tagline: "The valley of the gods",
    difficulty: "Easy–Moderate",
    highlights: ["Old wooden villages along the Supin river", "The cradle-shaped Har Ki Dun valley", "Snow peaks of the Sankri range", "Valley walk without a high summit push"],
    summary:
      "A valley trek from Sankri past old wooden villages along the Supin river to the cradle-shaped Har Ki Dun valley.",
    season: "March–June and September–November",
    packages: [
      {
        name: "Standard",
        price: 9500,
        transport: "Shared Bolero/Traveller (10–12 travellers)",
        stay: "Sankri homestay and triple-sharing tents",
        meals: "Vegetarian meals, Day 1 dinner to Day 7 breakfast",
        includes: ["Guide", "Cook", "Forest permit", "Sleeping bag", "Trek pole"],
        group: "12–15 trekkers",
      },
      {
        name: "Premium",
        price: 14500,
        transport: "Innova/Bolero return transport",
        stay: "Sankri hotel and double-sharing tents",
        meals: "All meals, evening tea/snacks and bonfire",
        includes: ["Guide", "Permit", "Porter up to 10 kg", "All equipment"],
        group: "6–8 trekkers",
      },
    ],
    itinerary: [
      { day: 1, title: "Dehradun to Sankri", detail: "200 km, 8–9 hours. Pickup at Prince Chowk, 7 AM." },
      { day: 2, title: "Sankri – Taluka – Pauni Garaat", detail: "12 km drive, then 8 km trek." },
      { day: 3, title: "Pauni Garaat to Kalkattiyadhaar", detail: "6 km." },
      { day: 4, title: "Kalkattiyadhaar to Har Ki Dun and back", detail: "11 km, return to Kalkattiyadhaar." },
      { day: 5, title: "Return to Pauni Garaat" },
      { day: 6, title: "Return to Sankri", detail: "Overnight in hotel." },
      { day: 7, title: "Sankri to Dehradun", detail: "Drop by about 7 PM." },
    ],
    excludes: ["Day 1 breakfast and lunch", "Day 7 lunch and dinner", "Personal insurance"],
    photos: pics("har-ki-dun", [
      "Snow peaks above the Har Ki Dun valley",
      "Stream and meadow entering Har Ki Dun",
      "Har Ki Dun valley in the Sankri range",
    ]),
  },
  {
    slug: "bali-pass",
    name: "Bali Pass",
    altitude: "16,207 ft",
    duration: "8 days / 7 nights",
    tagline: "A demanding high crossing to Yamunotri",
    difficulty: "Difficult",
    highlights: ["High crossing at 16,207 ft", "Ruinsara Tal lake", "Descent to Yamunotri", "For experienced trekkers only"],
    summary:
      "A demanding high-altitude crossover from Sankri via Ruinsara Tal over Bali Pass, descending to Yamunotri. For experienced trekkers only.",
    season: "May–June and September–October",
    packages: [
      {
        name: "Standard",
        price: 22500,
        transport: "Shared Dehradun–Sankri return",
        stay: "Homestay and triple-sharing tents",
        meals: "All meals, Day 1 dinner to Day 8 breakfast",
        includes: ["Certified guide", "Cook", "Porter", "Forest permit", "Tent", "Sleeping bag"],
        group: "10–12 trekkers",
      },
      {
        name: "Premium",
        price: 32500,
        transport: "Innova/Bolero return",
        stay: "Sankri hotel and higher-quality double-sharing tents",
        meals: "All meals, ration and bonfire",
        includes: ["Guide", "Porter up to 10 kg", "Gaiters", "Crampons", "Rope", "Permit", "Insurance"],
        group: "6–8 trekkers",
      },
    ],
    itinerary: [
      { day: 1, title: "Dehradun to Sankri" },
      { day: 2, title: "Sankri to Seema" },
      { day: 3, title: "Seema to Rainbasera" },
      { day: 4, title: "Rainbasera to Ruinsara Tal" },
      { day: 5, title: "Ruinsara Tal to Odari" },
      { day: 6, title: "Odari – Bali Pass – Upper Dhamni", detail: "Summit day, about 12 hours." },
      { day: 7, title: "Upper Dhamni – Yamunotri – Janki Chatti" },
      { day: 8, title: "Janki Chatti to Dehradun" },
    ],
    requirements: "Fitness certificate and previous trekking experience above 12,000 ft.",
    notes: ["Weather, access and summit conditions are never guaranteed. The trek leader may turn the group around for safety."],
    photos: pics("bali-pass", [
      "Ruinsara Gad stream and meadow on the Bali Pass route",
      "The Yamuna river at Yamunotri, where the trek descends",
      "Bandarpunch massif, which the Bali Pass route skirts",
    ]),
  },
  {
    slug: "rupin-pass",
    name: "Rupin Pass",
    altitude: "15,380 ft",
    duration: "8 days / 7 nights",
    tagline: "Dhaula to Sangla crossover",
    difficulty: "Difficult",
    highlights: ["Hanging villages of the Rupin valley", "Three-tiered Rupin waterfall", "Snow-wall climb to the pass", "Crossover from Uttarakhand into Himachal"],
    summary:
      "A crossover from Uttarakhand into Himachal: hanging villages, the three-tiered Rupin waterfall and a snow-wall climb to the pass before Sangla.",
    season: "May–June and September–October",
    packages: [
      {
        name: "Standard",
        price: 16500,
        includes: ["Package route: Dhaula to Sangla"],
        note: "Onward transport to Shimla or Chandigarh is not included. Other inclusions and group size to be confirmed — please ask.",
      },
      {
        name: "Premium",
        price: 25500,
        includes: ["Dehradun pickup to Shimla drop"],
        note: "Other inclusions and group size to be confirmed — please ask.",
      },
    ],
    itinerary: [
      { day: 1, title: "Dehradun to Dhaula", detail: "230 km, 9–10 hours. Prince Chowk pickup 6:30 AM. Homestay at 5,100 ft." },
      { day: 2, title: "Dhaula to Sewa", detail: "6 km, about 4 hours. 6,300 ft." },
      { day: 3, title: "Sewa to Jiskun", detail: "7 km, about 5 hours. 7,700 ft." },
      { day: 4, title: "Jiskun to Udaknal/Saruwas Thatch via Dhanteras Thatch", detail: "8 km, about 6 hours. 10,100 ft." },
      { day: 5, title: "Udaknal to Dhanderas Lower Waterfall Camp", detail: "6 km. 11,700 ft." },
      { day: 6, title: "Upper Waterfall Camp", detail: "3 km, acclimatisation. 13,100 ft." },
      { day: 7, title: "Upper Waterfall – Rupin Pass (15,380 ft) – Ronti Gad", detail: "12 km, 10–12 hours, starts around 3 AM. Possible snow-wall/rope sections. Overnight at 13,300 ft." },
      { day: 8, title: "Ronti Gad to Sangla", detail: "About 8 km trekking, then onward travel as per your package." },
    ],
    requirements: "At least two previous treks.",
    notes: ["Altitude listed as 15,380 ft per the latest information."],
    photos: pics("rupin-pass", [
      "View from Rupin Pass towards the Sangla valley",
      "Stone cairns on the snowy Rupin Pass",
      "Rupin waterfall and Ratipheri campsite",
    ]),
  },
];

