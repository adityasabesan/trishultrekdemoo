import { describe, expect, it } from "vitest";
import { HOME_CATALOGUE } from "@/data/catalogue";
import { FEATURED, OTHERS } from "@/data/treks";
import { HOME_STATS } from "@/data/site";
import { getYatra, YATRAS } from "@/data/yatras";

describe("complete homepage catalogue", () => {
  it("includes all 28 existing treks and both yatras as 30 unique offerings", () => {
    expect(HOME_CATALOGUE).toHaveLength(30);
    expect(new Set(HOME_CATALOGUE.map((t) => t.slug)).size).toBe(30);
    expect(HOME_CATALOGUE.filter((t) => t.kind === "trek").map((t) => t.slug)).toEqual([...FEATURED, ...OTHERS].map((t) => t.slug));
    expect(HOME_CATALOGUE.filter((t) => t.kind === "yatra").map((t) => t.name)).toEqual(["Kedarnath Yatra", "Vaishno Devi Yatra"]);
  });
  it("retains a distinct approved photograph for every offering", () => {
    expect(new Set(HOME_CATALOGUE.map((t) => t.photo.src)).size).toBe(30);
  });
  it("uses the client-confirmed company figures", () => {
    expect(HOME_STATS.find((s) => s.label === "Trekkers")?.value).toBe("5K+");
    expect(HOME_STATS.find((s) => s.label === "Trips Completed")?.value).toBe("100+");
  });
  it("does not invent new yatra prices or total durations", () => {
    expect(YATRAS.map((y) => y.price)).toEqual([null, null]);
    expect(YATRAS.map((y) => y.duration)).toEqual([null, null]);
  });
  it("keeps each new route outline separate from a confirmed company day-wise itinerary", () => {
    expect(getYatra("kedarnath-yatra")?.stages.map((s) => s.title)).toEqual(["Reach Gaurikund", "Gaurikund to Kedarnath Temple", "Temple visit and return to Gaurikund"]);
    expect(getYatra("vaishno-devi-yatra")?.route).toBe("Katra → Banganga → Charan Paduka → Adhkuwari → Bhawan → Katra");
  });
});