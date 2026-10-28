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
  name: "Budget" | "Comfort";
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
    duration: "5 nights / 6 days",
    tagline: "The classic winter summit above Sankri",
    summary:
      "A summit trek from Sankri through pine forest and the frozen Juda Ka Talab to a 12,500 ft peak, with snow from December to January.",
    season: "November–April; December–January for snow",
    packages: [
      {
        name: "Budget",
        price: 6500,
        transport: "Shared Dehradun–Sankri return transport",
        stay: "Sankri homestay and triple-sharing tents",
        meals: "Day 1 dinner to Day 6 breakfast",
        includes: ["Guide", "Cook", "Permit", "Sleeping bag", "Gaiters", "Microspikes"],
        group: "12–15 trekkers",
      },
      {
        name: "Comfort",
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
    duration: "3 nights / 4 days",
    tagline: "High meadows above Raithal",
    summary:
      "A short trek from Raithal village to the wide alpine meadows of Dayara and Bakaria Top — grassland in summer, snowfields in winter.",
    season: "Ask us for current conditions",
    packages: [
      {
        name: "Budget",
        price: 5500,
        transport: "Shared Dehradun–Raithal return",
        stay: "Homestay/tent, triple sharing",
        meals: "3 breakfasts, 3 dinners, 3 lunches from base camp",
        includes: ["Guide", "Forest permit", "Trek leader"],
        group: "10–15 trekkers",
      },
      {
        name: "Comfort",
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
    duration: "5 nights / 6 days",
    tagline: "Big-mountain views from Joshimath",
    summary:
      "From Joshimath through oak and rhododendron to Kuari Pass, with wide views of the Garhwal giants including Dunagiri.",
    season: "December–April snow; May–June green; September–November clearer views",
    packages: [
      {
        name: "Budget",
        price: 8500,
        transport: "Shared Dehradun–Joshimath return transport",
        stay: "Joshimath hotel and triple-sharing tents",
        meals: "Day 1 dinner to Day 6 breakfast",
        includes: ["Guide", "Cook", "Forest permit", "Sleeping bag", "Trek pole", "Gaiters"],
        note: "Group size for this package not confirmed — please ask.",
      },
      {
        name: "Comfort",
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
    duration: "6 nights / 7 days",
    tagline: "The valley of the gods",
    summary:
      "A valley trek from Sankri past old wooden villages along the Supin river to the cradle-shaped Har Ki Dun valley.",
    season: "March–June and September–November",
    packages: [
      {
        name: "Budget",
        price: 9500,
        transport: "Shared Bolero/Traveller (10–12 travellers)",
        stay: "Sankri homestay and triple-sharing tents",
        meals: "Vegetarian meals, Day 1 dinner to Day 7 breakfast",
        includes: ["Guide", "Cook", "Forest permit", "Sleeping bag", "Trek pole"],
        group: "12–15 trekkers",
      },
      {
        name: "Comfort",
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
    duration: "7 nights / 8 days",
    tagline: "A demanding high crossing to Yamunotri",
    summary:
      "A demanding high-altitude crossover from Sankri via Ruinsara Tal over Bali Pass, descending to Yamunotri. For experienced trekkers only.",
    season: "May–June and September–October",
    packages: [
      {
        name: "Budget",
        price: 22500,
        transport: "Shared Dehradun–Sankri return",
        stay: "Homestay and triple-sharing tents",
        meals: "All meals, Day 1 dinner to Day 8 breakfast",
        includes: ["Certified guide", "Cook", "Porter", "Forest permit", "Tent", "Sleeping bag"],
        group: "10–12 trekkers",
      },
      {
        name: "Comfort",
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
    duration: "7 nights / 8 days",
    tagline: "Dhaula to Sangla crossover",
    summary:
      "A crossover from Uttarakhand into Himachal: hanging villages, the three-tiered Rupin waterfall and a snow-wall climb to the pass before Sangla.",
    season: "May–June and September–October",
    packages: [
      {
        name: "Budget",
        price: 16500,
        includes: ["Package route: Dhaula to Sangla"],
        note: "Onward transport to Shimla or Chandigarh is not included. Other inclusions and group size to be confirmed — please ask.",
      },
      {
        name: "Comfort",
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

export type OtherTrek = {
  slug: string;
  name: string;
  altitude: string | null;
  difficulty: string;
  season: string;
  photo: Photo;
};

const RAW: [string, string, string | null, string, string, string][] = [
  ["gaumukh", "Gaumukh", "13,200 ft", "Moderate", "May–Jun, Sep–Oct", "The Gaumukh snout of the Gangotri glacier"],
  ["kedar-tal", "Kedar Tal", "15,580 ft", "Difficult", "May–Jun, Sep–Oct", "Thalay Sagar reflected in Kedar Tal"],
  ["bandarpunch-base-camp", "Bandarpunch Base Camp", "14,000 ft", "Difficult", "May–Jun, Sep–Oct", "Bandarpunch massif rising above forested ridges"],
  ["jandi-top", "Jandi Top", "12,000 ft", "Moderate", "Dec–Mar, Sep–Nov", "Sunset over the hills around Sankri, gateway to Jandi Top"],
  ["dodital", "Dodital", "10,800 ft", "Moderate", "Mar–Jun, Sep–Dec", "Dodital lake ringed by forest"],
  ["darwa-pass", "Darwa Pass", "13,600 ft", "Moderate", "May–Jun, Sep–Oct", "Camping area at Dodital, the base for Darwa Pass"],
  ["phulara-ridge", "Phulara Ridge", "12,345 ft", "Moderate", "May–Jun, Sep–Nov", "Phulara ridge with snow peaks beyond"],
  ["surya-top", "Surya Top", "12,950 ft", "Easy–Moderate", "Dec–Mar, Apr–Jun, Sep–Oct", "Himalayan view over the Sankri ranges near Surya Top"],
  ["ruinsara-tal", "Ruinsara Tal", "11,800 ft", "Moderate", "May–Jun, Sep–Oct", "Ruinsara Tal lake in its glacial valley"],
  ["borasu-pass", "Borasu Pass", "17,880 ft", "Difficult", "May–Jun, Sep–Oct", "Snowfields on the approach to Borasu Pass"],
  ["tapovan", "Tapovan", "14,203 ft", "Moderate–Difficult", "May–Jun, Sep–Oct", "Shivling peak above the Tapovan meadow"],
  ["nandanvan", "Nandanvan", "14,240 ft", "Moderate–Difficult", "May–Jun, Sep–Oct", "Bhagirathi II and III peaks above Nandanvan"],
  ["vasuki-tal", "Vasuki Tal", "15,750 ft", "Difficult", "May–Jun, Sep–Oct", "Tents at the Vasuki Tal campsite"],
  ["gangotri", "Gangotri", "10,200 ft", "Easy–Moderate", "Apr–Jun, Sep–Nov", "Gangotri temple and town in the Bhagirathi valley"],
  ["kalindi-khal", "Kalindi Khal", "19,520 ft", "Technical", "Jun, Aug–Sep", "Sunrise over the snow at Kalindi Khal"],
  ["lamkhaga-pass", "Lamkhaga Pass", "17,320 ft", "Technical", "Jun, Sep–Oct", "The valley at Chitkul, where Lamkhaga Pass ends"],
  ["black-peak-base-camp", "Black Peak Base Camp", "13,300 ft", "Difficult", "May–Jun, Sep–Oct", "Kalanag (Black Peak) seen from Debsu Bugyal"],
  ["kyarkoti-lake", "Kyarkoti Lake", "13,700 ft", "Difficult", "May–Jun, Sep–Oct", "Kyarkoti camping ground in the upper Har Ki Dun valley"],
  ["nachiketa-tal", "Nachiketa Tal", "8,050 ft", "Easy", "Mar–Jun, Sep–Dec", "Bhagirathi river valley in Uttarkashi district"],
  ["manjhi-forest-trek", "Manjhi Forest Trek", "10,000 ft", "Easy–Moderate", "Mar–Jun, Sep–Dec", "Forested Harsil valley in Uttarkashi district"],
  ["baradsar", "Baradsar", "15,100 ft", "Moderate–Difficult", "May–Jun, Sep–Oct", "Terraced fields at Datmir village on the Baradsar approach"],
  ["sadhara-pani", "Sadhara Pani", null, "Easy–Moderate", "Mar–Jun, Sep–Nov", "Hills near Mori in the Tons valley"],
];

export const OTHERS: OtherTrek[] = RAW.map(([slug, name, altitude, difficulty, season, caption]) => ({
  slug,
  name,
  altitude,
  difficulty,
  season,
  photo: pics(slug, [caption])[0]!,
}));

export const RENTALS = [
  { item: "Trekking jacket", price: 500 },
  { item: "Trekking shoes", price: 500 },
  { item: "Trekking pole", price: 500 },
  { item: "Head torch", price: 300 },
  { item: "Woollen cap", price: 300 },
  { item: "Woollen socks", price: 250 },
  { item: "Poncho", price: 250 },
];

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;
export const getFeatured = (slug: string) => FEATURED.find((t) => t.slug === slug);
export const ALL_TREK_NAMES = [...FEATURED.map((t) => t.name), ...OTHERS.map((t) => t.name)];
