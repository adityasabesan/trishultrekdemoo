import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { SiteHeader, SiteFooter, PageIntro } from "@/components/site/Chrome";
import { Reveal, SafeImg } from "@/components/site/Interactive";
import { RENTALS, inr, rentalMsg } from "@/data/treks";
import { waLink } from "@/data/site";

export const Route = createFileRoute("/rentals")({
  head: () => ({
    meta: [
      { title: "Trekking Equipment Rentals in Sankri — Trishul Treks" },
      { name: "description", content: "Rent trekking jackets, shoes, poles, head torches, woollen caps, socks and ponchos from Trishul Treks." },
      { property: "og:title", content: "Trekking Equipment Rentals — Trishul Treks" },
      { property: "og:description", content: "Seven essential trekking items to rent, with clear prices." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Rentals,
});

function Rentals() {
  return (
    <div>
      <SiteHeader />
      <PageIntro eyebrow="Equipment rentals" title="Rent the gear, skip the shopping.">
        Seven essentials for the trail. Message us about any item to check availability and rental details.
      </PageIntro>
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-6 md:px-10">
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {RENTALS.map((r) => (
            <Reveal key={r.slug}>
              <article className="group flex h-full flex-col">
                <div className="overflow-hidden bg-muted">
                  <SafeImg src={r.photo.src} alt={r.photo.alt} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4 border-b pb-3">
                  <h2 className="text-3xl">{r.item}</h2>
                  <p className="font-display text-3xl text-primary">{inr(r.price)}</p>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{r.description}</p>
                <a href={waLink(rentalMsg(r.item))} target="_blank" rel="noreferrer" className="mt-5 inline-flex w-fit items-center gap-2 rounded-sm border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground">
                  <MessageCircle size={15} /> Enquire on WhatsApp
                </a>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-16 max-w-2xl text-sm text-muted-foreground">Ask us about rental duration and availability.</p>
      </section>
      <SiteFooter />
    </div>
  );
}
