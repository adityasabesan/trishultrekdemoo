import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site/Chrome";
import { FEATURED, RENTALS, inr } from "@/data/treks";
import { waLink, mailLink } from "@/data/site";
import shishpal from "@/assets/Shishpal_Rana.jpeg.asset.json";
import sildar from "@/assets/Singh_Rawat.jpeg.asset.json";
import vivesh from "@/assets/Vivesh_Rawat.jpg.asset.json";
import summitGroup from "@/assets/Trek_everyone_image.jpeg.asset.json";
import trailGroup from "@/assets/trek_ppl.jpeg.asset.json";
import sunrise from "@/assets/summit-sunrise.jpeg.asset.json";

const HERO = FEATURED[0].photos[0];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trishul Treks — Guided Himalayan Treks from Sankri, Uttarakhand" },
      { name: "description", content: "Kedarkantha, Har Ki Dun, Kuari Pass, Rupin Pass and 24 more Himalayan treks led by a local team from Sankri." },
      { property: "og:title", content: "Trishul Treks — Guided Himalayan Treks" },
      { property: "og:description", content: "28 Himalayan treks, equipment rentals and village stays, led by a local team from Sankri." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: HERO.src },
      { name: "twitter:image", content: HERO.src },
    ],
  }),
  component: Home,
});

function Section({ id, eyebrow, title, children, className = "" }: { id?: string; eyebrow: string; title: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28 ${className}`}>
      <p className="eyebrow text-primary">{eyebrow}</p>
      <h2 className="mt-3 max-w-3xl text-4xl leading-[1.05] md:text-6xl">{title}</h2>
      <div className="mt-12">{children}</div>
    </section>
  );
}

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[92vh] overflow-hidden">
        <img src={HERO.src} alt={HERO.alt} className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
        <div className="hero-scrim absolute inset-0" />
        <SiteHeader overlay />
        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-5 pb-20 text-forest-foreground md:px-10">
          <p className="eyebrow rise text-ochre">Sankri · Uttarakhand Himalaya</p>
          <h1 className="rise mt-4 max-w-4xl text-5xl leading-[0.98] md:text-8xl">Walk the high Himalaya with people who live here.</h1>
          <p className="rise mt-6 max-w-xl text-lg opacity-85">
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

      {/* About */}
      <Section eyebrow="About us" title="A small local team, based in Sankri.">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <p className="text-lg leading-relaxed text-muted-foreground">
            We are a Himalayan trekking company based in Sankri, Uttarakhand — the trailhead village for Kedarkantha, Har Ki Dun and many of the treks we run. We lead groups across the Garhwal Himalaya and into Himachal, with Budget and Comfort options on our main routes.
          </p>
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {[
              { img: shishpal.url, name: "Shishpal Rana", role: "Founder" },
              { img: sildar.url, name: "Sildar Singh Rawat", role: "Co-founder" },
              { img: vivesh.url, name: "Vivesh Rawat", role: "Co-founder" },
            ].map((f) => (
              <figure key={f.name}>
                <img src={f.img} alt={`${f.name}, ${f.role} of Trishul Treks`} loading="lazy" className="aspect-[3/4] w-full object-cover" />
                <figcaption className="mt-3">
                  <p className="font-display text-lg leading-tight md:text-xl">{f.name}</p>
                  <p className="eyebrow mt-1 text-muted-foreground">{f.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Section>

      {/* Moments */}
      <section className="bg-forest text-forest-foreground">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <p className="eyebrow text-ochre">Moments from the trails</p>
          <h2 className="mt-3 text-4xl md:text-6xl">Our groups, on the mountain.</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3 md:grid-rows-2">
            <img src={trailGroup.url} alt="A Trishul Treks group at the Sankri–Kedarkantha trailhead sign" loading="lazy" className="h-full w-full object-cover md:col-span-2 md:row-span-2" />
            <img src={summitGroup.url} alt="Trishul Treks trekkers on a snowy summit under a clear blue sky" loading="lazy" className="aspect-[4/3] h-full w-full object-cover" />
            <img src={sunrise.url} alt="Two trekkers on a snowy ridge at sunrise above Himalayan ranges" loading="lazy" className="aspect-[4/3] h-full w-full object-cover object-[50%_60%]" />
          </div>
        </div>
      </section>

      {/* Featured */}
      <Section eyebrow="Featured treks" title="Six routes we know by heart.">
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED.map((t) => (
            <Link key={t.slug} to="/treks/$slug" params={{ slug: t.slug }} className="group block">
              <div className="overflow-hidden">
                <img src={t.photos[0].src} alt={t.photos[0].alt} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-4 flex gap-4 text-xs text-muted-foreground">
                <span className="eyebrow">{t.altitude}</span>
                <span className="eyebrow">{t.duration}</span>
              </div>
              <h3 className="mt-2 text-3xl">{t.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.summary}</p>
              <p className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                From {inr(Math.min(...t.packages.map((p) => p.price)))} per person <ArrowRight size={14} className="transition group-hover:translate-x-1" />
              </p>
            </Link>
          ))}
        </div>
        <Link to="/treks" className="mt-14 inline-flex items-center gap-2 border-b border-foreground pb-1 font-semibold">
          See all 28 treks <ArrowRight size={16} />
        </Link>
      </Section>

      {/* Rentals + Village */}
      <section className="border-y bg-card">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 py-20 md:grid-cols-2 md:px-10 md:py-28">
          <div>
            <p className="eyebrow text-primary">Equipment rentals</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Rent the gear, skip the shopping.</h2>
            <dl className="mt-10 divide-y border-y">
              {RENTALS.map((r) => (
                <div key={r.item} className="flex justify-between py-3.5">
                  <dt>{r.item}</dt>
                  <dd className="font-display text-xl">{inr(r.price)}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm text-muted-foreground">Ask us about rental duration and availability.</p>
            <a href={waLink("Hello Trishul Treks, I'd like to rent trekking equipment.")} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-forest">
              Enquire about rentals
            </a>
          </div>
          <div>
            <p className="eyebrow text-primary">Village experience</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Four days of Pahadi village life.</h2>
            <p className="mt-6 font-display text-3xl">
              {inr(5999)} <span className="font-sans text-base text-muted-foreground">per person · 4 days / 3 nights</span>
            </p>
            <ul className="mt-8 space-y-3 text-lg">
              {["Village-to-village travel", "Local food and clothing, with a Pahadi cap", "Riverside camping", "Music and bonfire"].map((x) => (
                <li key={x} className="flex gap-3"><span className="mt-3 h-px w-6 shrink-0 bg-ochre" />{x}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">The exact route and inclusions are shared on enquiry.</p>
            <a href={waLink("Hello Trishul Treks, I'd like details of the 4-day village experience.")} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-sm border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground">
              Ask about the route
            </a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <Section eyebrow="Reviews" title="Trekked with us? Tell others how it went.">
        <div className="max-w-2xl">
          <p className="text-lg text-muted-foreground">
            We'd rather show real words from real trekkers than fill this space ourselves. If you've been on a trek with Trishul Treks, send us your honest feedback and a photo — with your permission, we'll publish it here.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={waLink("Hello Trishul Treks, here is my feedback from my trek:")} target="_blank" rel="noreferrer" className="rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-forest">Share feedback on WhatsApp</a>
            <a href={mailLink("My trek feedback")} className="rounded-sm border border-primary px-6 py-3 text-sm font-semibold text-primary">Email your review</a>
          </div>
        </div>
      </Section>

      {/* Guidelines */}
      <section className="bg-forest text-forest-foreground">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10">
          <p className="eyebrow text-ochre">Responsible trekking</p>
          <div className="mt-8 grid gap-10 md:grid-cols-4">
            {[
              ["No smoking or alcohol", "Cigarettes and alcohol are not allowed during treks."],
              ["Respect local culture", "We walk through villages and sacred places — behave as a guest."],
              ["Leave no litter", "Carry back everything you bring up the mountain."],
              ["Follow your trek leader", "Their instructions keep the whole group safe."],
            ].map(([t, d], i) => (
              <div key={t}>
                <p className="font-display text-5xl text-ochre">0{i + 1}</p>
                <h3 className="mt-3 text-2xl">{t}</h3>
                <p className="mt-2 text-sm opacity-75">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
