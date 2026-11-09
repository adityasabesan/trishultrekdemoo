import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, MessageCircle, ShieldCheck, MapPin, Users, Leaf, Expand, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader, SiteFooter } from "@/components/site/Chrome";
import { Reveal, QuoteRotator, Lightbox } from "@/components/site/Interactive";
import { FEATURED, RENTALS, inr } from "@/data/treks";
import { HOME_CATALOGUE } from "@/data/catalogue";
import { HOME_STATS, waLink, mailLink } from "@/data/site";
import { TRAIL_GALLERY as GALLERY, SANKRI_FAQ } from "@/data/homepage";
import shishpal from "@/assets/Shishpal_Rana.jpeg.asset.json";
import sildar from "@/assets/Singh_Rawat.jpeg.asset.json";
import vivesh from "@/assets/Vivesh_Rawat.jpg.asset.json";
import sunrise from "@/assets/summit-sunrise.jpeg.asset.json";

const firstTrek = FEATURED[0];
if (!firstTrek) throw new Error("The homepage requires the approved hero trek.");
const HERO = firstTrek.photos[0];

const QUOTES = [
  "The mountains are calling, and your next journey begins here.",
  "Beyond the ordinary, closer to the extraordinary.",
  "Find your path among the peaks.",
  "Every mountain journey leaves a story worth remembering.",
  "Adventure begins where the road ends.",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trishul Treks — Guided Himalayan Treks from Sankri, Uttarakhand" },
      { name: "description", content: "Explore Himalayan treks, winter summit expeditions and sacred yatras with the local Trishul Treks team from Sankri." },
      { property: "og:title", content: "Trishul Treks — Guided Himalayan Treks" },
      { property: "og:description", content: "Himalayan treks, sacred yatras and equipment rentals, led by a local team from Sankri." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: HERO.src },
      { name: "twitter:image", content: HERO.src },
    ],
  }),
  component: Home,
});

function SectionHead({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <>
      <p className={`eyebrow ${light ? "text-ochre" : "text-primary"}`}>{eyebrow}</p>
      <h2 className="mt-3 max-w-3xl text-4xl leading-[1.05] md:text-6xl">{title}</h2>
    </>
  );
}

function Home() {
  const [lb, setLb] = useState<number | null>(null);
  return (
    <div>
      <SiteHeader />
      {/* Hero */}
      <section className="relative min-h-[calc(100svh-4.3rem)] overflow-hidden">
        <img src={HERO.src} alt={HERO.alt} className="absolute inset-0 h-full w-full object-cover object-[50%_40%]" fetchPriority="high" />
        <div className="hero-scrim absolute inset-0" />
        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4.3rem)] max-w-7xl flex-col justify-end px-5 pb-16 pt-40 text-forest-foreground md:px-10 md:pb-20 md:pt-0">
          <p className="eyebrow rise text-ochre">Sankri · Uttarakhand Himalaya</p>
          <h1 className="rise mt-4 max-w-4xl text-5xl leading-[0.98] md:mt-4 md:text-8xl">Rooted in the Mountains. Driven by Adventure.</h1>
          <div className="rise mt-6 max-w-2xl opacity-90">
            <QuoteRotator quotes={QUOTES} />
          </div>
          <p className="rise mt-4 max-w-xl text-lg opacity-85">
            We bring you closer to the Himalayas through unforgettable mountain treks, winter summit expeditions and sacred Himalayan pilgrimages, guided by people who call these mountains home.
          </p>
          <dl className="rise mt-6 flex flex-wrap gap-x-10 gap-y-4">
            {HOME_STATS.map((s) => <div key={s.label}><dt className="eyebrow text-ochre">{s.label}</dt><dd className="mt-1 font-display text-3xl">{s.value}</dd></div>)}
          </dl>
          <div className="rise mt-9 flex flex-wrap gap-4">
            <Link to="/treks" className="inline-flex items-center gap-2 rounded-sm bg-ochre px-7 py-4 text-sm font-semibold text-accent-foreground transition hover:brightness-105">
              Explore treks <ArrowRight size={16} />
            </Link>
            <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-sm border border-forest-foreground/60 px-7 py-4 text-sm font-semibold transition hover:bg-forest-foreground/10">
              <MessageCircle size={16} /> Plan your trek on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[1fr_1.2fr] md:px-10 md:py-28">
        <Reveal>
          <SectionHead eyebrow="Who we are" title="Himalayan journeys, rooted in Sankri." />
        </Reveal>
        <Reveal className="self-end">
          <p className="text-lg leading-relaxed text-muted-foreground">
            We are a Himalayan trekking company based in Sankri, Uttarakhand — the trailhead village for Kedarkantha, Har Ki Dun and many of the treks we run. We lead groups across the Garhwal Himalaya and into Himachal, with Standard and Premium options on our main routes.
          </p>
          <Link to="/about" className="mt-6 inline-flex items-center gap-2 border-b border-foreground pb-1 font-semibold transition hover:gap-3">
            Our story and team <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

      {/* Featured */}
      <section className="border-t bg-card">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <Reveal>
            <SectionHead eyebrow="Treks & yatras" title="Explore Our Treks & Yatras" />
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">From beautiful Himalayan valleys and alpine meadows to challenging mountain crossings and sacred pilgrimages, discover journeys across the Himalayas.</p>
            <Button asChild variant="link" className="mt-6 h-auto rounded-none border-b border-foreground px-0 pb-1 text-base font-semibold text-foreground hover:no-underline">
              <Link to="/treks">Browse trek details <ArrowRight size={16} /></Link>
            </Button>
          </Reveal>
          <div data-testid="home-catalogue" className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {HOME_CATALOGUE.map((t, i) => (
              <Reveal key={t.slug} className={i % 3 === 1 ? "lg:mt-16" : ""}>
                <Link to={t.kind === "trek" ? "/treks/$slug" : "/yatras/$slug"} params={{ slug: t.slug }} className="group block">
                  <div className="overflow-hidden">
                    <img src={t.photo.src} alt={t.photo.alt} loading="lazy" className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <h3 className="mt-4 text-3xl">{t.name}</h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <Reveal><SectionHead eyebrow="Why trek with us" title="Mountain knowledge. Thoughtful guidance." /></Reveal>
        <div className="mt-14 grid gap-10 border-t pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: MapPin, t: "Based at the trailhead", d: "We live and work in Sankri, the starting village for many of our routes." },
            { icon: Users, t: "Two ways to go", d: "Standard and Premium packages on our six main treks, with clear prices per person." },
            { icon: ShieldCheck, t: "Led by a trek leader", d: "Every group follows its trek leader, whose call on weather and safety comes first." },
            { icon: Leaf, t: "Respect for the mountains", d: "No smoking or alcohol on treks, and everything we carry up comes back down." },
          ].map(({ icon: Icon, t, d }) => (
            <Reveal key={t}>
              <Icon className="text-ochre" size={26} strokeWidth={1.5} />
              <h3 className="mt-4 text-2xl">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-forest text-forest-foreground">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <Reveal>
            <SectionHead light eyebrow="Our expeditions" title="Moments From The Trails" />
            <p className="mt-6 max-w-2xl text-lg opacity-85">Moments from our trekkers, alongside genuine photographs of Himalayan trails and landscapes.</p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2 md:gap-4">
            {GALLERY.map((g, i) => (
              <figure
                key={g.src}
                className={i === 0 ? "col-span-2 row-span-2" : ""}
              >
                <Button variant="ghost" onClick={() => setLb(i)} aria-label={`View photo: ${g.alt}`} className={`group relative block h-auto w-full overflow-hidden rounded-none p-0 hover:bg-transparent ${i === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
                <img src={g.src} alt={g.alt} loading="lazy" className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${i === 0 ? "aspect-square" : "aspect-[4/3]"} ${g.src === sunrise.url ? "object-[50%_60%]" : ""}`} />
                <span className="absolute right-3 top-3 rounded-full bg-scrim/50 p-2 opacity-0 transition group-hover:opacity-100"><Expand size={14} /></span>
                </Button>
                {g.credit && g.page && <figcaption className="mt-2 text-xs text-forest-foreground/75">Photo: <a href={g.page} target="_blank" rel="noreferrer" className="underline">{g.credit}</a> · {g.license}</figcaption>}
              </figure>
            ))}
          </div>
        </div>
        <Lightbox images={GALLERY} index={lb} onClose={() => setLb(null)} onIndex={setLb} />
      </section>

      {/* Rentals preview */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1fr_1.3fr] md:px-10 md:py-28">
        <Reveal>
          <SectionHead eyebrow="Equipment rentals" title="Rent the gear, skip the shopping." />
          <p className="mt-6 text-muted-foreground">Jackets, shoes, poles and more — available to rent in Sankri.</p>
          <Link to="/rentals" className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-forest">
            View all rentals <ArrowRight size={16} />
          </Link>
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {RENTALS.slice(0, 4).map((r) => (
              <Link key={r.slug} to="/rentals" className="group block">
                <div className="overflow-hidden bg-muted">
                  <img src={r.photo.src} alt={r.photo.alt} loading="lazy" className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <p className="mt-3 text-sm">{r.item}</p>
                <p className="font-display text-xl">{inr(r.price)}</p>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Team preview */}
      <section className="border-y bg-card">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1fr_1.4fr] md:px-10 md:py-28">
          <Reveal>
            <SectionHead eyebrow="The people behind it" title="Meet the team." />
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 border-b border-foreground pb-1 font-semibold transition hover:gap-3">
              About us <ArrowRight size={16} />
            </Link>
          </Reveal>
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {[
              { img: shishpal.url, name: "Shishpal Rana", role: "Founder" },
              { img: sildar.url, name: "Sildar Singh Rawat", role: "Founder" },
              { img: vivesh.url, name: "Vivesh Rawat", role: "Co-founder" },
            ].map((f) => (
              <Reveal key={f.name}>
                <figure>
                  <div className="overflow-hidden"><img src={f.img} alt={`${f.name}, ${f.role} of Trishul Treks`} loading="lazy" className="aspect-[3/4] w-full object-cover" /></div>
                  <figcaption className="mt-3">
                    <p className="font-display text-lg leading-tight md:text-xl">{f.name}</p>
                    <p className="eyebrow mt-1 text-muted-foreground">{f.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <Reveal>
          <SectionHead eyebrow="Reviews" title="Trekked with us? Tell others how it went." />
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            We'd rather show real words from real trekkers than fill this space ourselves. If you've been on a trek with Trishul Treks, send us your honest feedback and a photo — with your permission, we'll publish it here.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={waLink("Hello Trishul Treks, here is my feedback from my trek:")} target="_blank" rel="noreferrer" className="rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-forest">Share feedback on WhatsApp</a>
            <a href={mailLink("My trek feedback")} className="rounded-sm border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground">Email your review</a>
          </div>
        </Reveal>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <img src={FEATURED[3]!.photos[0].src} alt={FEATURED[3]!.photos[0].alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-scrim/60" />
        <div className="relative mx-auto max-w-4xl px-5 py-28 text-center text-forest-foreground md:py-36">
          <p className="eyebrow text-ochre">Your next trek</p>
          <h2 className="mt-4 text-4xl md:text-6xl">Tell us where you'd like to walk.</h2>
          <p className="mx-auto mt-5 max-w-xl opacity-85">Message us with your dates and group size and we'll help you choose a route.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-sm bg-ochre px-7 py-4 text-sm font-semibold text-accent-foreground transition hover:brightness-105">
              <MessageCircle size={16} /> Enquire on WhatsApp
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm border border-forest-foreground/60 px-7 py-4 text-sm font-semibold transition hover:bg-forest-foreground/10">
              Enquiry form <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
