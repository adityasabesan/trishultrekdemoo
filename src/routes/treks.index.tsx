import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site/Chrome";
import { FEATURED, OTHERS, inr } from "@/data/treks";
import { waLink } from "@/data/site";
import { markFromTreks } from "@/components/site/BackToTreks";

export const Route = createFileRoute("/treks/")({
  head: () => ({
    meta: [
      { title: "All 28 Himalayan Treks — Trishul Treks" },
      { name: "description", content: "Kedarkantha, Dayara Bugyal, Kuari Pass, Har Ki Dun, Bali Pass, Rupin Pass and 22 more treks in the Garhwal Himalaya." },
      { property: "og:title", content: "All 28 Himalayan Treks — Trishul Treks" },
      { property: "og:description", content: "Browse every trek we run, with altitude, difficulty and season." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Treks,
});

function Treks() {
  return (
    <div>
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-16 md:px-10 md:pt-24">
        <p className="eyebrow text-primary">The catalogue</p>
        <h1 className="mt-3 text-5xl md:text-7xl">28 treks across the Himalaya.</h1>
        <p className="mt-5 max-w-xl text-muted-foreground">Six signature routes with Standard and Premium packages, plus 22 more classic Garhwal treks — each with its own itinerary.</p>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-10">
        <h2 className="text-3xl">Signature treks</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED.map((t) => (
            <Link key={t.slug} onClick={markFromTreks} to="/treks/$slug" params={{ slug: t.slug }} className="group relative block aspect-[4/5] overflow-hidden">
              <img src={t.photos[0].src} alt={t.photos[0].alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="card-scrim absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-forest-foreground">
                <p className="eyebrow text-ochre">{t.altitude} · {t.duration}</p>
                <h3 className="mt-2 text-4xl">{t.name}</h3>
                <p className="mt-2 flex items-center gap-1 text-sm">From {inr(Math.min(...t.packages.map((p) => p.price)))} / person <ArrowRight size={14} /></p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10">
        <h2 className="text-3xl">More Himalayan treks</h2>
        
        <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {OTHERS.map((t) => (
            <article key={t.slug}>
              <Link to="/treks/$slug" onClick={markFromTreks} params={{ slug: t.slug }} className="group block">
                <div className="overflow-hidden">
                  <img src={t.photo.src} alt={t.photo.alt} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <h3 className="mt-4 text-2xl">{t.name}</h3>
              </Link>
              <dl className="mt-2 grid grid-cols-2 gap-y-1 text-sm">
                <dt className="text-muted-foreground">Altitude</dt><dd>{t.altitude ?? "Ask us"}</dd>
                <dt className="text-muted-foreground">Difficulty</dt><dd>{t.difficulty}</dd>
                <dt className="text-muted-foreground">Duration</dt><dd>{t.duration}</dd>
                <dt className="text-muted-foreground">Season</dt><dd>{t.season}</dd>
              </dl>
              <a href={waLink(`Hello Trishul Treks, I'd like details for the ${t.name} trek.`)} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Enquire <ArrowRight size={14} />
              </a>
              <p className="mt-2 text-[11px] text-muted-foreground">
                Photo: <a href={t.photo.page} target="_blank" rel="noreferrer" className="underline">{t.photo.credit}</a>, {t.photo.license}
              </p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
