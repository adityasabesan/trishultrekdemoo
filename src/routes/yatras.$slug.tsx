import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site/Chrome";
import { BackToTreks } from "@/components/site/BackToTreks";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { getYatra } from "@/data/yatras";
import { pilgrimageMsg } from "@/data/treks";
import { waLink } from "@/data/site";

export const Route = createFileRoute("/yatras/$slug")({
  loader: ({ params }) => {
    const yatra = getYatra(params.slug);
    if (!yatra) throw notFound();
    return yatra;
  },
  head: ({ loaderData }) => {
    const title = `${loaderData?.name ?? "Yatra not found"} — Trishul Treks`;
    const description = loaderData?.summary ?? "Explore Himalayan pilgrimages with Trishul Treks.";
    const src = loaderData?.photo.src;
    return { meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" },
      ...(src?.startsWith("https://") ? [{ property: "og:image", content: src }, { name: "twitter:image", content: src }] : []),
    ] };
  },
  notFoundComponent: () => <div className="p-20 text-center"><p className="text-2xl">Yatra not found.</p><Link to="/" className="underline">All treks and yatras</Link></div>,
  component: YatraPage,
});

function YatraPage() {
  const y = Route.useLoaderData();
  return (
    <div>
      <section className="relative min-h-[70vh] overflow-hidden">
        <img src={y.photo.src} alt={y.photo.alt} className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-scrim absolute inset-0" />
        <SiteHeader />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-8 text-forest-foreground md:px-10">
          <BackToTreks />
          <h1 className="rise mt-4 text-5xl md:text-8xl">{y.name}</h1>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-3">
            <div><p className="eyebrow opacity-70">Walking route</p><p className="font-display text-xl">{y.distance}</p></div>
            <div><p className="eyebrow opacity-70">Duration & package price</p><p className="font-display text-xl">Awaiting team confirmation</p></div>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 md:grid-cols-2 md:px-10">
        <div>
          <p className="font-display text-2xl leading-snug md:text-3xl">{y.summary}</p>
          <p className="eyebrow mt-8 text-primary">Pilgrimage route</p>
          <p className="mt-3 leading-relaxed">{y.route}</p>
          <p className="mt-5 text-sm text-muted-foreground">Route guidance only, not a confirmed Trishul Treks operating itinerary. Day-wise timing, accommodation, meals, transport, inclusions and package price will be confirmed by our team before booking.</p>
          <a href={y.source.url} target="_blank" rel="noreferrer" className="mt-5 inline-block text-sm text-primary underline">{y.source.label}</a>
        </div>
        <div>
          <p className="eyebrow text-primary">Suggested pilgrimage outline</p>
          <ol className="mt-6">
            {y.stages.map((s, i) => <li key={s.title} className="grid grid-cols-[4rem_1fr] border-b py-4">
              <span className="font-display text-2xl text-ochre">0{i + 1}</span>
              <div><p className="font-semibold">{s.title}</p><p className="mt-1 text-sm text-muted-foreground">{s.detail}</p></div>
            </li>)}
          </ol>
          <a href={waLink(pilgrimageMsg(y.name))} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-forest">Enquire on WhatsApp</a>
        </div>
      </section>
      <section className="bg-forest text-forest-foreground">
        <div className="mx-auto max-w-3xl px-5 py-20 md:px-10">
          <h2 className="text-4xl md:text-5xl">Plan your {y.name}</h2>
          <div className="mt-10 rounded-sm bg-background p-6 text-foreground md:p-10"><EnquiryForm type="Pilgrimage Package" item={y.name} /></div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-6 text-[11px] text-muted-foreground md:px-10">
        Photo: <a href={y.photo.page} target="_blank" rel="noreferrer" className="underline">{y.photo.credit}</a> ({y.photo.license}), via Wikimedia Commons.
      </section>
      <SiteFooter />
    </div>
  );
}