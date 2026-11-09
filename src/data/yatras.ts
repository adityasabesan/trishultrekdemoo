import vaishnoPhoto from "@/assets/vaishno-devi-bhawan.jpg";
import photos from "./photos.json";
import type { Photo } from "./treks";

export type Yatra = {
  slug: string;
  name: string;
  summary: string;
  route: string;
  distance: string;
  duration: null;
  price: null;
  photo: Photo;
  stages: { title: string; detail: string }[];
  source: { label: string; url: string };
};

const kedarnathPhoto = photos["pilgrimage-kedarnath"][0];
if (!kedarnathPhoto) throw new Error("The approved Kedarnath photograph is missing.");

export const YATRAS: Yatra[] = [
  {
    slug: "kedarnath-yatra",
    name: "Kedarnath Yatra",
    summary: "A pilgrimage to the Kedarnath temple in Uttarakhand’s Mandakini valley, approached on foot from Gaurikund.",
    route: "Gaurikund → Kedarnath Temple → Gaurikund",
    distance: "17 km one way from Gaurikund",
    duration: null,
    price: null,
    photo: {
      src: kedarnathPhoto.url,
      alt: "Kedarnath temple with mountains behind",
      credit: kedarnathPhoto.artist,
      license: kedarnathPhoto.license,
      page: kedarnathPhoto.page,
    },
    stages: [
      { title: "Reach Gaurikund", detail: "Gaurikund is the starting point for the walking route to Kedarnath. Confirm current access and pilgrimage registration requirements before travelling." },
      { title: "Gaurikund to Kedarnath Temple", detail: "Follow the designated pilgrimage trail to the temple. Rudraprayag district lists this approach as 17 km; access depends on current local conditions." },
      { title: "Temple visit and return to Gaurikund", detail: "Plan darshan and the return walk around your fitness, weather and the authorities’ current guidance. The team will confirm a suitable day-wise schedule on enquiry." },
    ],
    source: { label: "Rudraprayag district — Kedarnath Yatra", url: "https://rudraprayag.gov.in/kedarnath-yatra-2/" },
  },
  {
    slug: "vaishno-devi-yatra",
    name: "Vaishno Devi Yatra",
    summary: "A pilgrimage from Katra to the Shri Mata Vaishno Devi shrine in the Trikuta hills of Jammu and Kashmir.",
    route: "Katra → Banganga → Charan Paduka → Adhkuwari → Bhawan → Katra",
    distance: "About 13 km one way from Katra",
    duration: null,
    price: null,
    photo: {
      src: vaishnoPhoto,
      alt: "Shri Mata Vaishno Devi Bhawan nestled in the Trikuta hills",
      credit: "Sudeep Pramanik",
      license: "CC BY-SA 4.0",
      page: "https://commons.wikimedia.org/wiki/File:Mata_Vaishno_Devi_Bhawan,_Jammu._India.jpg",
    },
    stages: [
      { title: "Reach Katra and complete registration", detail: "Begin in Katra and complete the Shrine Board’s required registration. Confirm current access guidance before starting the pilgrimage." },
      { title: "Katra to Bhawan", detail: "The traditional route passes Banganga, Charan Paduka and Adhkuwari before Bhawan. The shrine is about 13 km from Katra; follow the official route and current local directions." },
      { title: "Darshan at Bhawan and return to Katra", detail: "Allow for darshan queues and the return journey. The team will confirm the day-wise schedule, total duration and any arrangements on enquiry." },
    ],
    source: { label: "Reasi district — Shri Mata Vaishno Devi Shrine", url: "https://reasi.nic.in/tourist-place/shri-mata-vaishno-devi-shrine/" },
  },
];

export const getYatra = (slug: string) => YATRAS.find((y) => y.slug === slug);