import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

/** Fades children in when scrolled into view. Content is visible without JS. */
export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "hidden" | "shown">("idle");
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight) return;
    setState("hidden");
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setState("shown");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`${state === "hidden" ? "translate-y-5 opacity-0" : "opacity-100"} transition duration-700 ease-out ${className}`}>
      {children}
    </div>
  );
}

/** Rotating quotations with a soft cross-fade. Fixed height so layout never shifts. */
export function QuoteRotator({ quotes, interval = 4500 }: { quotes: string[]; interval?: number }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((x) => (x + 1) % quotes.length), interval);
    return () => clearInterval(t);
  }, [paused, interval, quotes.length]);
  return (
    <div className="relative h-16 md:h-10" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} aria-live="polite">
      {quotes.map((q, n) => (
        <p
          key={q}
          aria-hidden={n !== i}
          className={`absolute inset-0 font-display text-xl italic transition-opacity duration-1000 md:text-2xl ${n === i ? "opacity-100" : "opacity-0"}`}
        >
          “{q}”
        </p>
      ))}
    </div>
  );
}

export type GalleryImage = { src: string; alt: string };

/** Accessible lightbox: arrows, Escape, keyboard navigation. */
export function Lightbox({ images, index, onClose, onIndex }: { images: GalleryImage[]; index: number | null; onClose: () => void; onIndex: (i: number) => void }) {
  const go = useCallback((d: number) => index !== null && onIndex((index + d + images.length) % images.length), [index, images.length, onIndex]);
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (index === null) return;
    closeRef.current?.focus();
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", k);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", k);
      document.body.style.overflow = prev;
    };
  }, [index, go, onClose]);
  if (index === null) return null;
  const img = images[index]!;
  const btn = "absolute flex h-11 w-11 items-center justify-center rounded-full bg-background/10 text-forest-foreground transition hover:bg-background/25";
  return (
    <div role="dialog" aria-modal="true" aria-label="Photo viewer" className="fixed inset-0 z-50 flex items-center justify-center bg-scrim/95 p-4" onClick={onClose}>
      <figure className="max-h-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
        <img src={img.src} alt={img.alt} className="max-h-[82vh] w-auto object-contain" />
        <figcaption className="mt-3 text-center text-sm text-forest-foreground/80">
          {img.alt} · {index + 1} / {images.length}
        </figcaption>
      </figure>
      <button ref={closeRef} className={`${btn} right-4 top-4`} onClick={onClose} aria-label="Close photo viewer"><X /></button>
      {images.length > 1 && (
        <>
          <button className={`${btn} left-4 top-1/2 -translate-y-1/2`} onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="Previous photo"><ChevronLeft /></button>
          <button className={`${btn} right-4 top-1/2 -translate-y-1/2`} onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="Next photo"><ChevronRight /></button>
        </>
      )}
    </div>
  );
}

/** Image that hides itself gracefully if the source fails to load. */
export function SafeImg(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className={`${props.className ?? ""} bg-muted`} role="img" aria-label={props.alt} />;
  return <img {...props} onError={() => setFailed(true)} />;
}
