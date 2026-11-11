import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Mail, MessageCircle, MapPin, Ban } from "lucide-react";
import logo from "@/assets/Trishul_logo.jpeg";
import { SITE, telLink, mailLink, waLink } from "@/data/site";

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/treks", label: "Treks" },
  { to: "/rentals", label: "Rentals" },
  { to: "/contact", label: "Contact Us" },
] as const;

export const SAFETY_NOTICE = "Smoking, cigarettes, and alcohol are prohibited on treks.";

/** Deep forest-green navigation bar with ivory text. */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-forest text-forest-foreground shadow-[0_10px_28px_-16px_color-mix(in_oklab,var(--scrim)_80%,transparent)] backdrop-blur-md supports-[backdrop-filter]:bg-forest/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-10">
        <Link to="/" className="flex items-center gap-3" aria-label="Trishul Treks home" onClick={() => setOpen(false)}>
          <img src={logo} alt="Trishul Treks logo" className="h-11 w-11 rounded-full bg-ivory object-contain ring-2 ring-forest-foreground/20" />
          <span className="font-display text-xl tracking-tight">Trishul Treks</span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="eyebrow relative py-1 text-forest-foreground/75 transition hover:text-forest-foreground data-[status=active]:text-ochre after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-ochre after:transition data-[status=active]:after:scale-x-100 hover:after:scale-x-100"
            >
              {n.label}
            </Link>
          ))}
          <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-sm bg-ochre px-4 py-2.5 text-xs font-semibold text-forest transition hover:brightness-110">
            <MessageCircle size={14} /> Enquire
          </a>
        </nav>
        <button className="p-2 text-forest-foreground lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-forest-foreground/15 bg-forest/95 px-5 pb-6 pt-2 backdrop-blur-md lg:hidden" aria-label="Mobile">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              onClick={() => setOpen(false)}
              className="block border-b border-forest-foreground/15 py-3.5 font-display text-2xl transition hover:text-ochre data-[status=active]:text-ochre"
            >
              {n.label}
            </Link>
          ))}
          <a href={waLink()} target="_blank" rel="noreferrer" className="mt-5 flex items-center justify-center gap-2 rounded-sm bg-ochre py-3.5 text-sm font-semibold text-forest">
            <MessageCircle size={16} /> Enquire on WhatsApp
          </a>
        </nav>
      )}
      <div className="h-px bg-gradient-to-r from-transparent via-ochre/50 to-transparent" aria-hidden="true" />
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-forest text-forest-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-10">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-12 w-12 rounded-full bg-ivory object-contain" />
            <p className="font-display text-3xl">Trishul Treks</p>
          </div>
          <p className="mt-4 max-w-xs text-sm opacity-70">
            Guided Himalayan treks in Uttarakhand and beyond, run by a local team from Sankri.
          </p>
          <p className="mt-6 flex items-center gap-2 text-sm text-ochre"><Ban size={15} /> {SAFETY_NOTICE}</p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="eyebrow text-ochre">Reach us</p>
          <a href={telLink} className="flex items-center gap-2 hover:text-ochre"><Phone size={15} /> {SITE.phoneDisplay}</a>
          <a href={waLink()} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-ochre"><MessageCircle size={15} /> WhatsApp {SITE.whatsappDisplay}</a>
          <a href={mailLink()} className="flex items-center gap-2 hover:text-ochre"><Mail size={15} /> {SITE.email}</a>
          <p className="flex items-center gap-2 opacity-80"><MapPin size={15} /> {SITE.base}</p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="eyebrow text-ochre">Explore</p>
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="block hover:text-ochre">{n.label}</Link>
          ))}
        </div>
      </div>
      <div className="border-t border-forest-foreground/15">
        <p className="mx-auto max-w-7xl px-5 py-5 text-xs opacity-60 md:px-10">
          © {new Date().getFullYear()} Trishul Treks.
        </p>
      </div>
    </footer>
  );
}

/** Discreet floating WhatsApp button, shown on every page. */
export function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Trishul Treks on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-primary p-3.5 text-primary-foreground shadow-lg ring-4 ring-background/60 transition hover:scale-105 hover:bg-forest"
    >
      <MessageCircle size={22} />
    </a>
  );
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-10 pt-16 md:px-10 md:pt-24">
      <p className="eyebrow rise text-primary">{eyebrow}</p>
      <h1 className="rise mt-3 max-w-4xl text-5xl leading-[1.02] md:text-7xl">{title}</h1>
      {children && <div className="rise mt-5 max-w-2xl text-lg text-muted-foreground">{children}</div>}
    </section>
  );
}
