import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, MessageCircle, ShieldCheck, MapPin, Users, Leaf, Expand } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site/Chrome";
import { Reveal, QuoteRotator, Lightbox, type GalleryImage } from "@/components/site/Interactive";
import { FEATURED, RENTALS, inr, trekMsg } from "@/data/treks";
import { waLink, mailLink } from "@/data/site";
import shishpal from "@/assets/Shishpal_Rana.jpeg.asset.json";
import sildar from "@/assets/Singh_Rawat.jpeg.asset.json";
import vivesh from "@/assets/Vivesh_Rawat.jpg.asset.json";
import summitGroup from "@/assets/Trek_everyone_image.jpeg.asset.json";
import trailGroup from "@/assets/trek_ppl.jpeg.asset.json";
import sunrise from "@/assets/summit-sunrise.jpeg.asset.json";

const HERO = FEATURED[0]!.photos[0];

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
      { name: "description", content: "Kedarkantha, Har Ki Dun, Kuari Pass, Rupin Pass and 24 more Himalayan treks led by a local team from Sankri." },
      { property: "og:title", content: "Trishul Treks — Guided Himalayan Treks" },
      { property: "og:description", content: "28 Himalayan treks, pilgrimage packages and equipment rentals, led by a local team from Sankri." },
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

const GALLERY: GalleryImage[] = [
  { src: trailGroup.url, alt: "A Trishul Treks group at the Sankri–Kedarkantha trailhead sign" },
  { src: summitGroup.url, alt: "Trishul Treks trekkers on a snowy summit under a clear blue sky" },
  { src: sunrise.url, alt: "Two trekkers on a snowy ridge at sunrise above Himalayan ranges" },
  FEATURED[0]!.photos[2]!,
  FEATURED[2]!.photos[2]!,
  FEATURED[5]!.photos[2]!,
];

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
          <h1 className="rise mt-4 max-w-4xl text-5xl leading-[0.98] md:mt-4 md:text-8xl">Walk the high Himalaya with people who live here.</h1>
          <div className="rise mt-6 max-w-2xl opacity-90">
            <QuoteRotator quotes={QUOTES} />
          </div>
          <p className="rise mt-4 max-w-xl text-lg opacity-85">
            Trishul Treks runs guided treks from Sankri — from snowy Kedarkantha to the high crossings of Rupin and Bali Pass.
          </p>
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
          <SectionHead eyebrow="Who we are" title="A small local team, based in Sankri." />
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
          <Reveal><SectionHead eyebrow="Featured treks" title="Six routes we know by heart." /></Reveal>
          <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {FEATURED.map((t, i) => (
              <Reveal key={t.slug} className={i % 3 === 1 ? "lg:mt-16" : ""}>
                <Link to="/treks/$slug" params={{ slug: t.slug }} className="group block">
                  <div className="overflow-hidden">
                    <img src={t.photos[0].src} alt={t.photos[0].alt} loading="lazy" className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <div className="mt-4 flex gap-4 text-muted-foreground">
                    <span className="eyebrow">{t.altitude}</span>
                    <span className="eyebrow">{t.duration}</span>
                  </div>
                  <h3 className="mt-2 text-3xl">{t.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.summary}</p>
                  <p className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    From {inr(Math.min(...t.packages.map((p) => p.price)))} per person <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                  </p>
                </Link>
                <a href={waLink(trekMsg(t.name))} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary">
                  <MessageCircle size={13} /> Enquire on WhatsApp
                </a>
              </Reveal>
            ))}
          </div>
          <Link to="/treks" className="mt-16 inline-flex items-center gap-2 border-b border-foreground pb-1 font-semibold transition hover:gap-3">
            See all 28 treks and pilgrimage packages <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <Reveal><SectionHead eyebrow="Why trek with us" title="Local, small and straightforward." /></Reveal>
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
          <Reveal><SectionHead light eyebrow="Moments from the trails" title="Our groups, on the mountain." /></Reveal>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2 md:gap-4">
            {GALLERY.map((g, i) => (
              <button
                key={g.src}
                onClick={() => setLb(i)}
                aria-label={`View photo: ${g.alt}`}
                className={`group relative overflow-hidden ${i === 0 ? "col-span-2 row-span-2" : ""}`}
              >
                <img src={g.src} alt={g.alt} loading="lazy" className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${i === 0 ? "aspect-square" : "aspect-[4/3]"} ${g.src === sunrise.url ? "object-[50%_60%]" : ""}`} />
                <span className="absolute right-3 top-3 rounded-full bg-scrim/50 p-2 opacity-0 transition group-hover:opacity-100"><Expand size={14} /></span>
              </button>
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
              { img: sildar.url, name: "Sildar Singh Rawat", role: "Founder" },
              { img: shishpal.url, name: "Shishpal Rana", role: "Founder" },
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
