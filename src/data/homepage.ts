import { FEATURED, type Photo } from "./treks";
import { SITE } from "./site";
import summitGroup from "@/assets/Trek_everyone_image.jpeg";
import trailGroup from "@/assets/trek_ppl.jpeg";
import sunrise from "@/assets/summit-sunrise.jpeg";

type TrailPhoto = { src: string; alt: string; credit?: string; license?: string; page?: string };

const existingDestinations = [FEATURED[0]?.photos[2], FEATURED[2]?.photos[2], FEATURED[5]?.photos[2]];
const additionalDestinations = [FEATURED[0]?.photos[1], FEATURED[1]?.photos[1], FEATURED[3]?.photos[1]];
const isPhoto = (photo: Photo | undefined): photo is Photo => Boolean(photo);

export const TRAIL_GALLERY: TrailPhoto[] = [
  { src: trailGroup, alt: "A Trishul Treks group at the Sankri–Kedarkantha trailhead sign" },
  { src: summitGroup, alt: "Trishul Treks trekkers on a snowy summit under a clear blue sky" },
  { src: sunrise, alt: "Two trekkers on a snowy ridge at sunrise above Himalayan ranges" },
  ...existingDestinations.filter(isPhoto),
  ...additionalDestinations.filter(isPhoto),
];

export const SANKRI_FAQ = [
  {
    question: "How do I plan my journey to Sankri?",
    answer: `For our Kedarkantha itinerary, the journey starts in Dehradun with pickup at ${SITE.pickup}. Check your chosen package for transport inclusions, and confirm your meeting time with us before booking onward travel. Other treks may use a different base village.`,
  },
  {
    question: "What should I prepare before leaving Dehradun?",
    answer: "Carry some cash, save your booking details and maps offline, and share your travel plan with someone at home. Ask us about current road conditions, mobile connectivity and cash access before departure rather than relying on these along the way.",
  },
  {
    question: "Can I rent trekking equipment in Sankri?",
    answer: "Jackets, trekking shoes, poles and other listed equipment are available to rent in Sankri. Contact us ahead of your trek to confirm sizes and availability; check your package for equipment already included.",
  },
  {
    question: "What should I tell the team before my trek?",
    answer: "Share your dates, group size, trekking experience and any health or dietary needs. If you have a medical condition or concerns about altitude, seek medical advice before travelling and discuss your needs with the trek team.",
  },
] as const;