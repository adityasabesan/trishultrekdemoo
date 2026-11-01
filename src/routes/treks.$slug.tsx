import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import { Check, AlertTriangle } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site/Chrome";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { getFeatured, getOther, inr, type OtherTrek } from "@/data/treks";
import { waLink } from "@/data/site";
import { BackToTreks } from "@/components/site/BackToTreks";

export const Route = createFileRoute("/treks/$slug")({
  loader: ({ params }) => {
    const trek = getFeatured(params.slug);
    if (trek) return { trek, other: null };
    const other = getOther(params.slug);
    if (!other) throw notFound();
    return { trek: null, other };
  },
  head: ({ loaderData }) => {
    const o = loaderData?.other;
    if (o) {
      const title = `${o.name} Trek (${o.duration}) — Trishul Treks`;
      return { meta: [
        { title }, { name: "description", content: o.summary },
        { property: "og:title", content: title }, { property: "og:description", content: o.summary },
        { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" },
        { property: "og:image", content: o.photo.src }, { name: "twitter:image", content: o.photo.src },
      ] };
    }
    const t = loaderData?.trek;
    if (!t) return { meta: [{ title: "Trek not found — Trishul Treks" }, { name: "robots", content: "noindex" }] };
    const title = `${t.name} Trek (${t.altitude}, ${t.duration}) — Trishul Treks`;
    return {
      meta: [
        { title },
        { name: "description", content: t.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: t.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:image", content: t.photos[0].src },
        { name: "twitter:image", content: t.photos[0].src },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="p-20 text-center">
      <p className="text-2xl">Trek not found.</p>
      <Link to="/treks" className="underline">All treks</Link>
    </div>
  ),
  component: TrekPage,
});

function TrekPage() {
  const { trek, other } = Route.useLoaderData();
  const slug = trek?.slug ?? other?.slug;
  // Always open a trek page at the top, even when arriving from a scrolled list.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  if (other) return <OtherPage t={other} />;
  return <FeaturedPage t={trek!} />;
}

function OtherPage({ t }: { t: OtherTrek }) {
  return (
    <div>
      <section className="relative min-h-[70vh] overflow-hidden">
        <img src={t.photo.src} alt={t.photo.alt} className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-scrim absolute inset-0" />
        <SiteHeader />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-8 text-forest-foreground md:px-10">
          <BackToTreks />
          <h1 className="rise mt-4 text-6xl md:text-8xl">{t.name}</h1>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-3">
            {[["Altitude", t.altitude ?? "Ask us"], ["Duration", t.duration], ["Difficulty", t.difficulty], ["Best time", t.season]].map(([k, v]) => (
              <div key={k}><p className="eyebrow opacity-70">{k}</p><p className="font-display text-xl">{v}</p></div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 md:grid-cols-2 md:px-10">
        <p className="font-display text-2xl leading-snug md:text-3xl">{t.summary}</p>
        <div>
          <p className="eyebrow text-primary">Itinerary</p>
          <ol className="mt-6">
            {t.itinerary.map((d) => (
              <li key={d.day} className="grid grid-cols-[4rem_1fr] border-b py-4">
                <span className="font-display text-2xl text-ochre">D{d.day}</span>
                <p className="font-semibold">{d.title}</p>
              </li>
            ))}
          </ol>
          <a href={waLink(`Hello Trishul Treks, I'm interested in the ${t.name} Trek. Please share the available dates, package details, and booking information.`)} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-forest">
            Enquire on WhatsApp
          </a>
        </div>
      </section>
      <section className="bg-forest text-forest-foreground">
        <div className="mx-auto max-w-3xl px-5 py-20 md:px-10">
          <h2 className="text-4xl md:text-5xl">Plan your {t.name} trek</h2>
          <div className="mt-10 rounded-sm bg-background p-6 text-foreground md:p-10">
            <EnquiryForm type="Trek" item={t.name} />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-6 text-[11px] text-muted-foreground md:px-10">
        Photo: <a href={t.photo.page} target="_blank" rel="noreferrer" className="underline">{t.photo.credit}</a> ({t.photo.license}), via Wikimedia Commons.
      </section>
      <SiteFooter />
    </div>
  );
}

function FeaturedPage({ t }: { t: NonNullable<ReturnType<typeof getFeatured>> }) {
  const [hero, ...rest] = t.photos;
  return (
    <div>
      <section className="relative min-h-[80vh] overflow-hidden">
        <img src={hero.src} alt={hero.alt} className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-scrim absolute inset-0" />
        <SiteHeader />
        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-8 text-forest-foreground md:px-10">
          <BackToTreks />
          <h1 className="rise mt-4 text-6xl md:text-8xl">{t.name}</h1>
          <p className="rise mt-3 text-xl opacity-85">{t.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-3">
            {[["Altitude", t.altitude], ["Duration", t.duration], ["Best time", t.season]].map(([k, v]) => (
              <div key={k}><p className="eyebrow opacity-70">{k}</p><p className="font-display text-xl">{v}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.2fr_1fr] md:px-10">
        <p className="font-display text-2xl leading-snug md:text-3xl">{t.summary}</p>
        <div className="space-y-4">
          {t.requirements && (
            <div className="border-l-2 border-ochre pl-4">
              <p className="eyebrow text-primary">Requirements</p>
              <p className="mt-1">{t.requirements}</p>
            </div>
          )}
          {t.notes?.map((n) => (
            <p key={n} className="flex gap-2 text-sm text-muted-foreground"><AlertTriangle size={16} className="mt-0.5 shrink-0 text-ochre" />{n}</p>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="border-y bg-card">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10">
          <p className="eyebrow text-primary">Packages · prices per person</p>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            {t.packages.map((p) => (
              <div key={p.name} className="border-t-2 border-primary pt-6">
                <div className="flex items-baseline justify-between">
                  <h2 className="text-4xl">{p.name}</h2>
                  <p className="font-display text-4xl text-primary">{inr(p.price)}</p>
                </div>
                <dl className="mt-6 space-y-3 text-sm">
                  {p.transport && <Row k="Transport" v={p.transport} />}
                  {p.stay && <Row k="Stay" v={p.stay} />}
                  {p.meals && <Row k="Meals" v={p.meals} />}
                  {p.group && <Row k="Group size" v={p.group} />}
                </dl>
                <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                  {p.includes.map((i) => (
                    <li key={i} className="flex items-center gap-1.5"><Check size={14} className="text-primary" />{i}</li>
                  ))}
                </ul>
                {p.note && <p className="mt-4 text-sm text-muted-foreground">{p.note}</p>}
                <a
                  href={waLink(`Hello Trishul Treks, I'm interested in the ${t.name} Trek (${p.name} package). Please share the available dates, package details, and booking information.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-forest"
                >
                  Enquire about {p.name}
                </a>
              </div>
            ))}
          </div>
          {t.excludes && (
            <p className="mt-10 text-sm text-muted-foreground"><span className="eyebrow mr-2 text-foreground">Not included</span>{t.excludes.join(" · ")}</p>
          )}
        </div>
      </section>

      {/* Itinerary + gallery */}
      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 md:grid-cols-[1fr_1fr] md:px-10">
        <div>
          <p className="eyebrow text-primary">Itinerary</p>
          <ol className="mt-6">
            {t.itinerary.map((d) => (
              <li key={d.day} className="grid grid-cols-[4rem_1fr] border-b py-4">
                <span className="font-display text-2xl text-ochre">D{d.day}</span>
                <div>
                  <p className="font-semibold">{d.title}</p>
                  {d.detail && <p className="mt-1 text-sm text-muted-foreground">{d.detail}</p>}
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="space-y-6">
          {rest.map((p) => (
            <figure key={p.src}>
              <img src={p.src} alt={p.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="mt-2 text-xs text-muted-foreground">{p.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-forest text-forest-foreground">
        <div className="mx-auto max-w-3xl px-5 py-20 md:px-10">
          <h2 className="text-4xl md:text-5xl">Plan your {t.name} trek</h2>
          <p className="mt-3 opacity-75">Fill this in and we'll continue on WhatsApp.</p>
          <div className="mt-10 rounded-sm bg-background p-6 text-foreground md:p-10">
            <EnquiryForm type="Trek" item={t.name} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-6 text-[11px] text-muted-foreground md:px-10">
        Photos:{" "}
        {t.photos.map((p, i) => (
          <span key={p.src}>
            {i > 0 && " · "}
            <a href={p.page} target="_blank" rel="noreferrer" className="underline">{p.credit}</a> ({p.license})
          </span>
        ))}
        , via Wikimedia Commons.
      </section>
      <SiteFooter />
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid grid-cols-[7rem_1fr]">
      <dt className="text-muted-foreground">{k}</dt>
      <dd>{v}</dd>
    </div>
  );
}
