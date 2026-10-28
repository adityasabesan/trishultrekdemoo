import { useState } from "react";
import { z } from "zod";
import { ALL_TREK_NAMES } from "@/data/treks";
import { mailLink, waLink } from "@/data/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d][\d\s-]{7,16}$/, "Enter a valid phone number"),
  trek: z.string().min(1, "Choose a trek or option"),
  pkg: z.string().max(40),
  people: z.coerce.number().int().min(1, "At least 1").max(50),
  month: z.string().trim().max(40),
  message: z.string().trim().max(800),
});

const OPTIONS = [...ALL_TREK_NAMES, "Village experience", "Equipment rental", "Something else"];

export function EnquiryForm({ trek = "", pkg = "" }: { trek?: string; pkg?: string }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState<null | { wa: string; mail: string }>(null);

  function build(fd: FormData) {
    const raw = Object.fromEntries(fd.entries());
    const r = schema.safeParse(raw);
    if (!r.success) {
      const e: Record<string, string> = {};
      r.error.issues.forEach((i) => (e[String(i.path[0])] = i.message));
      setErrors(e);
      return null;
    }
    setErrors({});
    const d = r.data;
    const text = [
      `Hello Trishul Treks, I'd like to enquire.`,
      `Name: ${d.name}`,
      `Phone: ${d.phone}`,
      `Trek: ${d.trek}${d.pkg ? ` (${d.pkg} package)` : ""}`,
      `Trekkers: ${d.people}`,
      d.month && `Preferred month: ${d.month}`,
      d.message && `Message: ${d.message}`,
    ]
      .filter(Boolean)
      .join("\n");
    return { wa: waLink(text), mail: mailLink(`Enquiry: ${d.trek}`, text) };
  }

  const field = "w-full border-b border-input bg-transparent py-2.5 outline-none focus:border-primary";
  const label = "eyebrow text-muted-foreground";
  const err = (k: string) => errors[k] && <p className="mt-1 text-xs text-destructive">{errors[k]}</p>;

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        const links = build(new FormData(e.currentTarget));
        if (!links) return;
        setSent(links);
        window.open(links.wa, "_blank", "noopener");
      }}
      className="grid gap-6 sm:grid-cols-2"
    >
      <label className="block">
        <span className={label}>Your name</span>
        <input name="name" className={field} autoComplete="name" />
        {err("name")}
      </label>
      <label className="block">
        <span className={label}>Phone / WhatsApp</span>
        <input name="phone" type="tel" className={field} autoComplete="tel" />
        {err("phone")}
      </label>
      <label className="block">
        <span className={label}>Trek</span>
        <select name="trek" defaultValue={trek} className={field}>
          <option value="">Select…</option>
          {OPTIONS.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
        {err("trek")}
      </label>
      <label className="block">
        <span className={label}>Package</span>
        <select name="pkg" defaultValue={pkg} className={field}>
          <option value="">Not sure yet</option>
          <option>Budget</option>
          <option>Comfort</option>
        </select>
      </label>
      <label className="block">
        <span className={label}>Number of trekkers</span>
        <input name="people" type="number" min={1} defaultValue={1} className={field} />
        {err("people")}
      </label>
      <label className="block">
        <span className={label}>Preferred month</span>
        <input name="month" className={field} placeholder="e.g. December" />
      </label>
      <label className="block sm:col-span-2">
        <span className={label}>Message</span>
        <textarea name="message" rows={3} className={field} />
      </label>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button type="submit" className="rounded-sm bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-forest">
          Send enquiry on WhatsApp
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
      {sent && (
        <p className="text-sm text-muted-foreground sm:col-span-2" role="status">
          WhatsApp should have opened with your enquiry. If not,{" "}
          <a href={sent.wa} target="_blank" rel="noreferrer" className="underline">open it here</a> or{" "}
          <a href={sent.mail} className="underline">email it</a>.
        </p>
      )}
    </form>
  );
}
