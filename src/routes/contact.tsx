import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { z } from "zod";
import { SiteHeader, SiteFooter } from "@/components/site/Chrome";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { SITE, telLink, mailLink, waLink } from "@/data/site";

export const Route = createFileRoute("/contact")({
  validateSearch: z.object({ trek: z.string().optional(), pkg: z.string().optional() }),
  head: () => ({
    meta: [
      { title: "Contact Trishul Treks — Call, WhatsApp or Email" },
      { name: "description", content: "Plan your Himalayan trek with Trishul Treks in Sankri, Uttarakhand. Call, WhatsApp or email us." },
      { property: "og:title", content: "Contact Trishul Treks" },
      { property: "og:description", content: "Call, WhatsApp or email to plan your trek." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { trek, pkg } = Route.useSearch();
  const items = [
    { icon: Phone, label: "Call", value: SITE.phoneDisplay, href: telLink },
    { icon: MessageCircle, label: "WhatsApp", value: SITE.phoneDisplay, href: waLink(), ext: true },
    { icon: Mail, label: "Email", value: SITE.email, href: mailLink() },
    { icon: MapPin, label: "Base", value: SITE.base },
  ];
  return (
    <div>
      <SiteHeader />
      <section className="mx-auto grid max-w-7xl gap-16 px-5 py-16 md:grid-cols-[1fr_1.3fr] md:px-10 md:py-24">
        <div>
          <p className="eyebrow text-primary">Contact us</p>
          <h1 className="mt-3 text-5xl md:text-7xl">Let's plan your trek.</h1>
          <ul className="mt-12 divide-y border-y">
            {items.map(({ icon: Icon, label, value, href, ext }) => (
              <li key={label} className="py-5">
                <p className="eyebrow text-muted-foreground">{label}</p>
                {href ? (
                  <a href={href} {...(ext ? { target: "_blank", rel: "noreferrer" } : {})} className="mt-1 flex items-center gap-3 font-display text-2xl hover:text-primary">
                    <Icon size={20} className="text-ochre" /> {value}
                  </a>
                ) : (
                  <p className="mt-1 flex items-center gap-3 font-display text-2xl"><Icon size={20} className="text-ochre" /> {value}</p>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">Trek pickups are from {SITE.pickup}.</p>
        </div>
        <div className="bg-card p-6 md:p-10">
          <h2 className="text-3xl">Send an enquiry</h2>
          <p className="mt-2 text-sm text-muted-foreground">Your message opens in WhatsApp (or email) so it reaches our team directly.</p>
          <div className="mt-8">
            <EnquiryForm trek={trek} pkg={pkg} />
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
