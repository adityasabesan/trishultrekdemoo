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
  name: "Standard" | "Premium";
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
    highlights: ["Wide alpine meadows of Dayara", "Bakaria Top ridge", "Starts from Raithal village", "A short four-day trek"],
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

export type OtherTrek = {
  slug: string;
  name: string;
  altitude: string | null;
  difficulty: string;
  season: string;
  summary: string;
  /** Indicative duration derived from the outline itinerary; final plan confirmed on enquiry. */
  duration: string;
  itinerary: Day[];
  photo: Photo;
};

type RawOther = [slug: string, name: string, altitude: string | null, difficulty: string, season: string, caption: string, summary: string, days: string[]];

// Itineraries for these treks are indicative route outlines, not the company's
// confirmed operating plan. Pages label them as such.
const RAW: RawOther[] = [
  ["gaumukh", "Gaumukh", "13,200 ft", "Moderate", "May–Jun, Sep–Oct", "The Gaumukh snout of the Gangotri glacier",
    "A walk up the Bhagirathi valley from Gangotri to Gaumukh, the ice snout of the Gangotri glacier and source of the Ganga.",
    ["Dehradun to Gangotri by road", "Gangotri to Chirbasa", "Chirbasa to Bhojbasa", "Bhojbasa to Gaumukh and back to Bhojbasa", "Bhojbasa to Gangotri", "Gangotri to Dehradun"]],
  ["kedar-tal", "Kedar Tal", "15,580 ft", "Difficult", "May–Jun, Sep–Oct", "Thalay Sagar reflected in Kedar Tal",
    "A steep climb from Gangotri along the Kedar Ganga to a glacial lake beneath Thalay Sagar peak.",
    ["Dehradun to Gangotri by road", "Acclimatisation day at Gangotri", "Gangotri to Bhoj Kharak", "Bhoj Kharak to Kedar Kharak", "Kedar Kharak to Kedar Tal", "Kedar Tal to Bhoj Kharak", "Bhoj Kharak to Gangotri", "Gangotri to Dehradun"]],
  ["bandarpunch-base-camp", "Bandarpunch Base Camp", "14,000 ft", "Difficult", "May–Jun, Sep–Oct", "Bandarpunch massif rising above forested ridges",
    "A high trek through the Ruinsara valley from Sankri to the foot of the Bandarpunch massif.",
    ["Dehradun to Sankri", "Sankri to Taluka by road, trek to Seema", "Seema to Rainbasera", "Rainbasera to Ruinsara Tal", "Ruinsara Tal to Bandarpunch Base Camp", "Base camp to Ruinsara Tal", "Ruinsara Tal to Seema", "Seema to Taluka, drive to Sankri", "Sankri to Dehradun"]],
  ["jandi-top", "Jandi Top", "12,000 ft", "Moderate", "Dec–Mar, Sep–Nov", "Sunset over the hills around Sankri, gateway to Jandi Top",
    "A short summit trek in the hills around Sankri with open views of the surrounding ranges.",
    ["Dehradun to Sankri", "Sankri to the trail camp", "Summit Jandi Top and descend to camp", "Return to Sankri", "Sankri to Dehradun"]],
  ["dodital", "Dodital", "10,800 ft", "Moderate", "Mar–Jun, Sep–Dec", "Dodital lake ringed by forest",
    "A forest trek from Sangamchatti near Uttarkashi to Dodital, a lake ringed by oak, pine and deodar.",
    ["Dehradun to Uttarkashi and Sangamchatti, trek to Agoda", "Agoda to Dodital", "Rest and explore around Dodital", "Dodital to Agoda and Sangamchatti", "Sangamchatti to Dehradun"]],
  ["darwa-pass", "Darwa Pass", "13,600 ft", "Moderate", "May–Jun, Sep–Oct", "Camping area at Dodital, the base for Darwa Pass",
    "An extension of the Dodital trek that climbs above the lake to Darwa Pass, with views towards Bandarpunch.",
    ["Dehradun to Uttarkashi and Sangamchatti, trek to Agoda", "Agoda to Dodital", "Dodital to Darwa Pass and back to Dodital", "Dodital to Agoda", "Agoda to Sangamchatti, drive to Dehradun"]],
  ["phulara-ridge", "Phulara Ridge", "12,345 ft", "Moderate", "May–Jun, Sep–Nov", "Phulara ridge with snow peaks beyond",
    "A ridge walk above Sankri with long views across the Har Ki Dun and Ruinsara valleys.",
    ["Dehradun to Sankri", "Sankri to Pushtara meadows", "Pushtara along Phulara Ridge to camp", "Descend towards Taluka", "Return to Sankri", "Sankri to Dehradun"]],
  ["surya-top", "Surya Top", "12,950 ft", "Easy–Moderate", "Dec–Mar, Apr–Jun, Sep–Oct", "Himalayan view over the Sankri ranges near Surya Top",
    "A summit trek in the Sankri ranges, known for wide sunrise views over the surrounding peaks.",
    ["Dehradun to Sankri", "Sankri to the trail camp", "Summit Surya Top and descend to camp", "Return to Sankri", "Sankri to Dehradun"]],
  ["ruinsara-tal", "Ruinsara Tal", "11,800 ft", "Moderate", "May–Jun, Sep–Oct", "Ruinsara Tal lake in its glacial valley",
    "A valley trek from Sankri along the Supin and Ruinsara Gad to a lake below the Bandarpunch and Kalanag peaks.",
    ["Dehradun to Sankri", "Sankri to Taluka by road, trek to Seema", "Seema to Rainbasera", "Rainbasera to Ruinsara Tal", "Ruinsara Tal to Seema", "Seema to Taluka, drive to Sankri", "Sankri to Dehradun"]],
  ["borasu-pass", "Borasu Pass", "17,880 ft", "Difficult", "May–Jun, Sep–Oct", "Snowfields on the approach to Borasu Pass",
    "A high crossover from Har Ki Dun over Borasu Pass into the Baspa valley of Himachal, ending at Chitkul.",
    ["Dehradun to Sankri", "Sankri to Taluka by road, trek to Seema", "Seema to Har Ki Dun", "Rest and acclimatise at Har Ki Dun", "Har Ki Dun to Borasu Pass base", "Cross Borasu Pass, descend to camp", "Descend to Chitkul", "Chitkul to onward travel"]],
  ["tapovan", "Tapovan", "14,203 ft", "Moderate–Difficult", "May–Jun, Sep–Oct", "Shivling peak above the Tapovan meadow",
    "Beyond Gaumukh, across the Gangotri glacier moraine to the high meadow of Tapovan beneath Shivling.",
    ["Dehradun to Gangotri by road", "Acclimatisation day at Gangotri", "Gangotri to Chirbasa", "Chirbasa to Bhojbasa", "Bhojbasa via Gaumukh to Tapovan", "Explore Tapovan", "Tapovan to Bhojbasa", "Bhojbasa to Gangotri", "Gangotri to Dehradun"]],
  ["nandanvan", "Nandanvan", "14,240 ft", "Moderate–Difficult", "May–Jun, Sep–Oct", "Bhagirathi II and III peaks above Nandanvan",
    "A glacier trek beyond Gaumukh to Nandanvan meadow, facing the Bhagirathi peaks.",
    ["Dehradun to Gangotri by road", "Acclimatisation day at Gangotri", "Gangotri to Bhojbasa", "Bhojbasa via Gaumukh to Nandanvan", "Explore Nandanvan", "Nandanvan via Gaumukh to Bhojbasa", "Bhojbasa to Gangotri", "Gangotri to Dehradun"]],
  ["vasuki-tal", "Vasuki Tal", "15,750 ft", "Difficult", "May–Jun, Sep–Oct", "Tents at the Vasuki Tal campsite",
    "A high-altitude lake above Kedarnath, reached by a steep climb past the Kedarnath shrine.",
    ["Dehradun to Sonprayag by road", "Gaurikund to Kedarnath", "Kedarnath to Vasuki Tal", "Vasuki Tal to Kedarnath", "Kedarnath to Gaurikund", "Sonprayag to Dehradun"]],
  ["gangotri", "Gangotri", "10,200 ft", "Easy–Moderate", "Apr–Jun, Sep–Nov", "Gangotri temple and town in the Bhagirathi valley",
    "A gentle trip to the Gangotri temple town in the Bhagirathi valley, with short walks around the shrine.",
    ["Dehradun to Uttarkashi", "Uttarkashi to Gangotri, visit the temple", "Short walks around Gangotri", "Gangotri to Dehradun"]],
  ["kalindi-khal", "Kalindi Khal", "19,520 ft", "Technical", "Jun, Aug–Sep", "Sunrise over the snow at Kalindi Khal",
    "One of the highest trekking passes in the Garhwal Himalaya, crossing from Gangotri to Badrinath over glacier terrain.",
    ["Dehradun to Gangotri by road", "Acclimatisation day at Gangotri", "Gangotri to Bhojbasa", "Bhojbasa via Gaumukh to Tapovan", "Rest and acclimatise at Tapovan", "Tapovan to Nandanvan", "Nandanvan to Vasuki Tal", "Vasuki Tal to Khara Pathar", "Khara Pathar to Sweta Glacier", "Sweta Glacier to Kalindi Base", "Cross Kalindi Khal, descend to Rajparav", "Rajparav to Arwa Tal", "Arwa Tal to Ghastoli, drive to Badrinath", "Badrinath to Dehradun"]],
  ["lamkhaga-pass", "Lamkhaga Pass", "17,320 ft", "Technical", "Jun, Sep–Oct", "The valley at Chitkul, where Lamkhaga Pass ends",
    "A remote high crossover from Harsil in Uttarakhand to Chitkul in Himachal's Baspa valley.",
    ["Dehradun to Harsil by road", "Harsil into the Jalandhari Gad valley", "Up the valley to the upper camp", "Upper camp to Lamkhaga base", "Cross Lamkhaga Pass, descend to camp", "Descend towards the Baspa valley", "Reach Chitkul", "Chitkul to onward travel"]],
  ["black-peak-base-camp", "Black Peak Base Camp", "13,300 ft", "Difficult", "May–Jun, Sep–Oct", "Kalanag (Black Peak) seen from Debsu Bugyal",
    "A trek from Sankri through the Ruinsara valley to the base of Kalanag, the 'Black Peak'.",
    ["Dehradun to Sankri", "Sankri to Taluka by road, trek to Seema", "Seema to Rainbasera", "Rainbasera to Ruinsara Tal", "Ruinsara Tal to Black Peak Base Camp", "Base camp to Ruinsara Tal", "Ruinsara Tal to Seema", "Seema to Taluka, drive to Sankri", "Sankri to Dehradun"]],
  ["kyarkoti-lake", "Kyarkoti Lake", "13,700 ft", "Difficult", "May–Jun, Sep–Oct", "Kyarkoti camping ground in the upper Har Ki Dun valley",
    "Beyond Har Ki Dun to the remote Kyarkoti lake in the upper valley.",
    ["Dehradun to Sankri", "Sankri to Taluka by road, trek to Seema", "Seema to Har Ki Dun", "Har Ki Dun to Kyarkoti", "Kyarkoti to Har Ki Dun", "Har Ki Dun to Seema", "Seema to Taluka, drive to Sankri", "Sankri to Dehradun"]],
  ["nachiketa-tal", "Nachiketa Tal", "8,050 ft", "Easy", "Mar–Jun, Sep–Dec", "Bhagirathi river valley in Uttarkashi district",
    "An easy forest walk near Uttarkashi to a quiet lake surrounded by oak and pine — good for families and beginners.",
    ["Dehradun to Uttarkashi", "Drive to Chaurangi Khal, walk to Nachiketa Tal and back", "Uttarkashi to Dehradun"]],
  ["manjhi-forest-trek", "Manjhi Forest Trek", "10,000 ft", "Easy–Moderate", "Mar–Jun, Sep–Dec", "Forested Harsil valley in Uttarkashi district",
    "A forest trek in Uttarkashi district through dense woodland and clearings.",
    ["Dehradun to the trek base", "Trek through the forest to camp", "Explore and return to the base", "Return to Dehradun"]],
  ["baradsar", "Baradsar", "15,100 ft", "Moderate–Difficult", "May–Jun, Sep–Oct", "Terraced fields at Datmir village on the Baradsar approach",
    "A high lake trek approached from Datmir village near Sankri, through forest and alpine meadow.",
    ["Dehradun to Sankri", "Sankri to Datmir, trek to forest camp", "Forest camp to meadow camp", "Meadow camp to Baradsar lake and back", "Return to Datmir, drive to Sankri", "Sankri to Dehradun"]],
  ["sadhara-pani", "Sadhara Pani", null, "Easy–Moderate", "Mar–Jun, Sep–Nov", "Hills near Mori in the Tons valley",
    "A short trek in the hills of the Tons valley near Mori.",
    ["Dehradun to the trek base near Mori", "Trek to Sadhara Pani", "Return to the base", "Return to Dehradun"]],
];

export const OTHERS: OtherTrek[] = RAW.map(([slug, name, altitude, difficulty, season, caption, summary, days]) => ({
  slug,
  name,
  altitude,
  difficulty,
  season,
  summary,
  duration: `About ${days.length} days`,
  itinerary: days.map((title, i) => ({ day: i + 1, title })),
  photo: pics(slug, [caption])[0]!,
}));

export type Pilgrimage = { slug: string; name: string; duration: string | null; price: number | null; summary: string; photo: Photo };

export const PILGRIMAGES: Pilgrimage[] = [
  { slug: "char-dham", name: "Char Dham Yatra Expedition", duration: "11 days / 10 nights", price: 24500,
    summary: "Yamunotri, Gangotri, Kedarnath and Badrinath in one journey.",
    photo: pics("pilgrimage-char-dham", ["Yamunotri temple beneath snow-capped peaks"])[0]! },
  { slug: "kedarnath-heli", name: "Kedarnath Temple Trek & Helicopter Package", duration: "5 days / 4 nights", price: 14999,
    summary: "A visit to the Kedarnath shrine in the Mandakini valley.",
    photo: pics("pilgrimage-kedarnath", ["Kedarnath temple with mountains behind"])[0]! },
  { slug: "hemkund-badrinath", name: "Hemkund Sahib & Badrinath Tour", duration: "6 days / 5 nights", price: 10500,
    summary: "The Hemkund Sahib gurdwara beside Lokpal lake, and the Badrinath temple.",
    photo: pics("pilgrimage-hemkund", ["Hemkund Sahib gurdwara beside Lokpal lake"])[0]! },
  { slug: "do-dham", name: "Do Dham Yatra — Kedarnath & Badrinath", duration: null, price: null,
    summary: "Kedarnath and Badrinath together. Duration and price to be confirmed.",
    photo: pics("pilgrimage-do-dham", ["Badrinath temple facade in the early morning"])[0]! },
];

export type Rental = { slug: string; item: string; price: number; description: string; photo: Photo };

const R = (slug: string, item: string, price: number, description: string, caption: string): Rental => ({
  slug, item, price, description, photo: pics(`rental-${slug}`, [caption])[0]!,
});

export const RENTALS: Rental[] = [
  R("jacket", "Trekking Jacket", 500, "A warm outer layer for cold mornings, camps and summit pushes.", "A dark softshell trekking jacket with zipped chest pocket"),
  R("shoes", "Trekking Shoes", 500, "Ankle-support trekking footwear for rocky, muddy and snowy trails.", "A pair of high-ankle trekking boots"),
  R("pole", "Trekking Pole", 500, "Adds balance on steep climbs and takes load off your knees on descents.", "A pair of collapsible trekking poles"),
  R("torch", "Head Torch", 300, "Hands-free light for early summit starts and evenings at camp.", "An LED head torch"),
  R("cap", "Woollen Cap", 300, "Keeps your head and ears warm at altitude.", "A trekker in a woollen cap facing snowy mountains"),
  R("socks", "Woollen Socks", 250, "Warm socks for cold nights and snow days.", "Hand-knitted woollen socks"),
  R("poncho", "Poncho", 250, "A light rain cover that fits over you and your backpack.", "A person wearing a rain poncho in a forest"),
];

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;
export const getFeatured = (slug: string) => FEATURED.find((t) => t.slug === slug);
export const getOther = (slug: string) => OTHERS.find((t) => t.slug === slug);
export const ALL_TREK_NAMES = [...FEATURED.map((t) => t.name), ...OTHERS.map((t) => t.name)];

export const trekMsg = (name: string, pkg?: string) =>
  `Hello, I am interested in the ${name} Trek${pkg ? ` (${pkg} package)` : ""}. Please share the available dates, package details, and booking information.`;
export const pilgrimageMsg = (name: string) =>
  `Hello, I am interested in the ${name}. Please share the available dates, package details, and booking information.`;
export const rentalMsg = (item: string) =>
  `Hello, I am interested in renting ${item.toLowerCase()}. Please share the availability and rental details.`;
