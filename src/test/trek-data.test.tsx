import { describe, expect, it } from "vitest";
import { FEATURED, OTHERS, RENTALS, getFeatured } from "@/data/treks";

describe("trek catalogue", () => {
  it("lists 28 unique treks", () => {
    const slugs = [...FEATURED, ...OTHERS].map((t) => t.slug);
    expect(slugs.length).toBe(28);
    expect(new Set(slugs).size).toBe(28);
  });
  it("gives each featured trek at least three distinct photos", () => {
    for (const t of FEATURED) expect(new Set(t.photos.map((p) => p.src)).size).toBeGreaterThanOrEqual(3);
  });
  it("uses a distinct photo for every trek card", () => {
    const srcs = [...FEATURED.map((t) => t.photos[0]!.src), ...OTHERS.map((t) => t.photo.src)];
    expect(new Set(srcs).size).toBe(28);
  });
  it("keeps supplied package prices", () => {
    expect(getFeatured("kedarkantha")!.packages.map((p) => p.price)).toEqual([6500, 9500]);
    expect(getFeatured("rupin-pass")!.packages.map((p) => p.price)).toEqual([16500, 25500]);
    expect(getFeatured("bali-pass")!.packages.map((p) => p.price)).toEqual([22500, 32500]);
  });
  it("keeps rental prices", () => {
    expect(RENTALS.find((r) => r.item === "Head Torch")!.price).toBe(300);
    expect(RENTALS.find((r) => r.item === "Poncho")!.price).toBe(250);
  });
  it("does not invent an altitude for Sadhara Pani", () => {
    expect(OTHERS.find((t) => t.slug === "sadhara-pani")!.altitude).toBeNull();
  });
});
