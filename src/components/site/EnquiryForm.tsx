import { useState } from "react";
import { z } from "zod";
import { ALL_TREK_NAMES, PILGRIMAGES, RENTALS } from "@/data/treks";
import { mailLink, waLink } from "@/data/site";

export const ENQUIRY_TYPES = ["Trek", "Rental", "Pilgrimage Package", "General Enquiry"] as const;
export type EnquiryType = (typeof ENQUIRY_TYPES)[number];

const ITEMS: Record<EnquiryType, string[]> = {
  Trek: ALL_TREK_NAMES,
  Rental: RENTALS.map((r) => r.item),
  "Pilgrimage Package": PILGRIMAGES.map((p) => p.name),
  "General Enquiry": [],
};

export const enquirySchema = z
  .object({
    name: z.string().trim().min(2, "Please enter your full name").max(80),
    phone: z.string().trim().regex(/^[+\d][\d\s-]{7,16}$/, "Enter a valid phone number"),
    type: z.enum(ENQUIRY_TYPES, { message: "Choose an enquiry type" }),
    item: z.string().max(80).default(""),
    date: z.string().trim().max(40).default(""),
    people: z.coerce.number({ message: "Enter a number" }).int().min(1, "At least 1").max(50, "Maximum 50"),
    message: z.string().trim().max(800).default(""),
  })
  .refine((d) => d.type === "General Enquiry" || d.item.length > 0, { path: ["item"], message: "Please choose one" });

export type Enquiry = z.infer<typeof enquirySchema>;

export function buildEnquiryText(d: Enquiry) {
  const itemLabel = d.type === "Rental" ? "Rental item" : d.type === "Pilgrimage Package" ? "Package" : "Trek";
  return [
    `Hello Trishul Treks, I would like to make an enquiry.`,
    ``,
    `Name: ${d.name}`,
    `Phone: ${d.phone}`,
    `Enquiry type: ${d.type}`,
    d.item && `${itemLabel}: ${d.item}`,
    d.date && `Preferred date: ${d.date}`,
    `Number of people: ${d.people}`,
    d.message && `Message: ${d.message}`,
  ]
    .filter((x) => x !== false && x !== undefined && x !== "" || x === "")
    .filter((x, i, a) => !(x === "" && a[i - 1] === ""))
    .join("\n");
}

export function EnquiryForm({ type: initialType = "Trek", item = "" }: { type?: EnquiryType; item?: string }) {
  const [type, setType] = useState<EnquiryType>(initialType);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [ready, setReady] = useState<null | { wa: string; mail: string }>(null);

  function build(fd: FormData) {
    const r = enquirySchema.safeParse(Object.fromEntries(fd.entries()));
    if (!r.success) {
      const e: Record<string, string> = {};
      r.error.issues.forEach((i) => (e[String(i.path[0])] ??= i.message));
      setErrors(e);
      return null;
    }
    setErrors({});
    const text = buildEnquiryText(r.data);
    return { wa: waLink(text), mail: mailLink(`Enquiry: ${r.data.item || r.data.type}`, text) };
  }

  const field = "mt-1 w-full rounded-none border-0 border-b border-input bg-transparent py-2.5 text-base outline-none transition focus:border-primary";
  const label = "eyebrow text-muted-foreground";
  const err = (k: string) => errors[k] && <p className="mt-1 text-xs text-destructive" role="alert">{errors[k]}</p>;
  const items = ITEMS[type];

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        const links = build(new FormData(e.currentTarget));
        if (!links) return;
        setReady(links);
        window.open(links.wa, "_blank", "noopener");
      }}
      className="grid gap-6 sm:grid-cols-2"
    >
      <label className="block">
        <span className={label}>Full name *</span>
        <input name="name" className={field} autoComplete="name" />
        {err("name")}
      </label>
      <label className="block">
        <span className={label}>Phone number *</span>
        <input name="phone" type="tel" inputMode="tel" className={field} autoComplete="tel" />
        {err("phone")}
      </label>
      <label className="block">
        <span className={label}>Enquiry type *</span>
        <select name="type" value={type} onChange={(e) => setType(e.target.value as EnquiryType)} className={field}>
          {ENQUIRY_TYPES.map((t) => <option key={t}>{t}</option>)}
        </select>
      </label>
      {items.length > 0 ? (
        <label className="block">
          <span className={label}>{type === "Rental" ? "Rental item" : type === "Trek" ? "Trek" : "Package"} *</span>
          <select key={type} name="item" defaultValue={items.includes(item) ? item : ""} className={field}>
            <option value="">Select…</option>
            {items.map((o) => <option key={o}>{o}</option>)}
          </select>
          {err("item")}
        </label>
      ) : (
        <input type="hidden" name="item" value="" />
      )}
      {type !== "General Enquiry" && type !== "Rental" ? (
        <label className="block">
          <span className={label}>Preferred travel date</span>
          <input name="date" type="date" className={field} />
        </label>
      ) : (
        <input type="hidden" name="date" value="" />
      )}
      <label className="block">
        <span className={label}>Number of people *</span>
        <input name="people" type="number" min={1} max={50} defaultValue={1} className={field} />
        {err("people")}
      </label>
      <label className="block sm:col-span-2">
        <span className={label}>Additional message</span>
        <textarea name="message" rows={3} className={field} />
      </label>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button type="submit" className="rounded-sm bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-forest">
          Continue on WhatsApp
        </button>
        <button
          type="button"
          onClick={(e) => {
            const links = build(new FormData(e.currentTarget.form!));
            if (links) window.location.href = links.mail;
          }}
          className="text-sm font-semibold underline underline-offset-4"
        >
          or send by email
        </button>
      </div>
      <p className="text-xs text-muted-foreground sm:col-span-2">
        WhatsApp opens with your message filled in. Check it, then press Send — nothing is sent until you do.
      </p>
      {ready && (
        <p className="text-sm sm:col-span-2" role="status">
          Your message is ready in WhatsApp. If it didn't open,{" "}
          <a href={ready.wa} target="_blank" rel="noreferrer" className="underline">open it here</a> or{" "}
          <a href={ready.mail} className="underline">email it instead</a>.
        </p>
      )}
    </form>
  );
}
