import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import logo from "@/assets/Trishul_logo.jpeg.asset.json";
import { SITE, telLink, mailLink, waLink } from "@/data/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/treks", label: "Treks" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const tone = overlay ? "text-forest-foreground" : "text-foreground";
  return (
    <header className={`${overlay ? "absolute inset-x-0 top-0 z-30" : "border-b bg-background"} `}>
      <div className={`mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10 ${tone}`}>
        <Link to="/" className="flex items-center gap-3" aria-label="Trishul Treks home">
          <img src={logo.url} alt="Trishul Treks logo" className="h-11 w-11 rounded-full bg-ivory object-cover" />
          <span className="font-display text-xl tracking-tight">Trishul Treks</span>
        </Link>
        <nav className="hidden items-center gap-9 md:flex" aria-label="Main">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="eyebrow opacity-80 transition hover:opacity-100 data-[status=active]:opacity-100 data-[status=active]:text-ochre"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="mx-5 mb-4 flex flex-col gap-1 rounded-md bg-forest p-4 text-forest-foreground md:hidden">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 font-display text-2xl">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-forest text-forest-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3 md:px-10">
        <div>
          <p className="font-display text-3xl">Trishul Treks</p>
          <p className="mt-3 max-w-xs text-sm opacity-70">
            Guided Himalayan treks in Uttarakhand and beyond, run by a local team from Sankri.
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="eyebrow text-ochre">Reach us</p>
          <a href={telLink} className="flex items-center gap-2 hover:text-ochre"><Phone size={15} /> {SITE.phoneDisplay}</a>
          <a href={waLink()} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-ochre"><MessageCircle size={15} /> WhatsApp</a>
          <a href={mailLink()} className="flex items-center gap-2 hover:text-ochre"><Mail size={15} /> {SITE.email}</a>
          <p className="flex items-center gap-2 opacity-80"><MapPin size={15} /> {SITE.base}</p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="eyebrow text-ochre">Explore</p>
          <Link to="/" className="block hover:text-ochre">Home</Link>
          <Link to="/treks" className="block hover:text-ochre">All treks</Link>
          <Link to="/contact" className="block hover:text-ochre">Contact Us</Link>
        </div>
      </div>
      <div className="border-t border-forest-foreground/15">
        <p className="mx-auto max-w-7xl px-5 py-5 text-xs opacity-60 md:px-10">
          © {new Date().getFullYear()} Trishul Treks. Destination photographs from Wikimedia Commons, credited on each trek page.
        </p>
      </div>
    </footer>
  );
}
