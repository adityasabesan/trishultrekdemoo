import { FEATURED, OTHERS, type Photo } from "./treks";
import { YATRAS } from "./yatras";

export type CatalogueOffering = {
  slug: string;
  name: string;
  photo: Photo;
  kind: "trek" | "yatra";
};

export const HOME_CATALOGUE: CatalogueOffering[] = [
  ...FEATURED.map((t) => ({ slug: t.slug, name: t.name, photo: t.photos[0], kind: "trek" as const })),
  ...OTHERS.map((t) => ({ slug: t.slug, name: t.name, photo: t.photo, kind: "trek" as const })),
  ...YATRAS.map((y) => ({ slug: y.slug, name: y.name, photo: y.photo, kind: "yatra" as const })),
];