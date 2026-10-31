import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SiteHeader, SiteFooter, PageIntro, SAFETY_NOTICE } from "@/components/site/Chrome";
import { Reveal } from "@/components/site/Interactive";
import { waLink } from "@/data/site";
import shishpal from "@/assets/Shishpal_Rana.jpeg.asset.json";
import sildar from "@/assets/Singh_Rawat.jpeg.asset.json";
import vivesh from "@/assets/Vivesh_Rawat.jpg.asset.json";
import trailGroup from "@/assets/trek_ppl.jpeg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Trishul Treks — Our Story and Team in Sankri" },
      { name: "description", content: "Meet the Sankri-based team behind Trishul Treks: founders Shishpal Rana and Sildar Singh Rawat, and co-founder Vivesh Rawat." },
      { property: "og:title", content: "About Trishul Treks" },
      { property: "og:description", content: "The local team behind Trishul Treks, based in Sankri, Uttarakhand." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <SiteHeader />
      <PageIntro eyebrow="About us" title="A trekking company from the trailhead village.">
        Trishul Treks is run by a small team from Sankri, Uttarakhand — the village where many Garhwal Himalaya treks begin.
      </PageIntro>

      {/* Story */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:grid-cols-[1.2fr_1fr] md:px-10">
        <Reveal>
          <img src={trailGroup.url} alt="A Trishul Treks group at the Sankri–Kedarkantha trailhead sign" className="aspect-[4/3] w-full object-cover" />
        </Reveal>
        <Reveal className="space-y-5 self-center text-lg leading-relaxed text-muted-foreground">
          <p className="eyebrow text-primary">Our story</p>
          <p>
            We organise guided treks across the Garhwal Himalaya and into Himachal — 28 routes in all, from first-timer favourites like Kedarkantha and Dayara Bugyal to demanding high crossings like Bali Pass and Rupin Pass.
          </p>
          <p>
            Alongside treks we arrange pilgrimage journeys to the Char Dham shrines, Kedarnath, Badrinath and Hemkund Sahib, and rent out trekking equipment so you don't need to buy everything before you come.
          </p>
          <p>
            Our groups are picked up from {"Prince Chowk, Dehradun"} for most routes. On the trail, the trek leader's instructions come first, and we ask every guest to behave as a guest in the villages and sacred places we pass through.
          </p>
        </Reveal>
      </section>

      {/* Founder */}
      <section className="border-y bg-card">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1fr_1.2fr] md:px-10 md:py-28">
          <Reveal>
            <img src={sildar.url} alt="Sildar Singh Rawat, Founder of Trishul Treks" className="aspect-[4/5] w-full object-cover" />
          </Reveal>
          <Reveal className="self-center">
            <p className="eyebrow text-primary">Founder</p>
            <h2 className="mt-3 text-5xl md:text-6xl">Sildar Singh Rawat</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Sildar Singh Rawat founded Trishul Treks in Sankri, the village at the foot of Kedarkantha and the gateway to the Har Ki Dun and Ruinsara valleys.
              </p>
              <p>
                He works alongside founder Shishpal Rana and co-founder Vivesh Rawat to plan routes, organise groups and look after guests from the first message to the drive home.
              </p>
            </div>
            <a href={waLink()} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-forest">
              <MessageCircle size={16} /> Talk to our team
            </a>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <Reveal>
          <p className="eyebrow text-primary">The team</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Running the trails together.</h2>
        </Reveal>
        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {[
            { img: shishpal.url, name: "Shishpal Rana", role: "Founder", text: "Founder of Trishul Treks, part of the Sankri team that plans and runs our treks." },
            { img: vivesh.url, name: "Vivesh Rawat", role: "Co-founder", text: "Co-founder of Trishul Treks, part of the Sankri team that plans and runs our treks." },
          ].map((f) => (
            <Reveal key={f.name}>
              <figure className="grid grid-cols-[0.8fr_1fr] gap-6">
                <img src={f.img} alt={`${f.name}, ${f.role} of Trishul Treks`} loading="lazy" className="aspect-[3/4] w-full object-cover" />
                <figcaption className="self-end">
                  <p className="eyebrow text-muted-foreground">{f.role}</p>
                  <p className="mt-2 font-display text-3xl">{f.name}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-forest text-forest-foreground">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <p className="eyebrow text-ochre">What we stand for</p>
          <h2 className="mt-3 text-4xl md:text-5xl">How we trek.</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-4">
            {[
              ["Safety first", "The trek leader may turn a group around for weather or conditions. Summits are never guaranteed."],
              ["Preparation", "Our harder routes ask for previous trekking experience and, for Bali Pass, a fitness certificate."],
              ["Respect local culture", "We walk through villages and sacred places — we ask every guest to behave as a guest."],
              ["Leave no litter", SAFETY_NOTICE + " Everything carried up the mountain comes back down."],
            ].map(([t, d], i) => (
              <Reveal key={t}>
                <p className="font-display text-5xl text-ochre">0{i + 1}</p>
                <h3 className="mt-3 text-2xl">{t}</h3>
                <p className="mt-2 text-sm opacity-75">{d}</p>
              </Reveal>
            ))}
          </div>
          <Link to="/treks" className="mt-14 inline-flex items-center gap-2 border-b border-forest-foreground pb-1 font-semibold transition hover:gap-3">
            Browse our treks <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
