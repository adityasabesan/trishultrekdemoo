<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Trek, package, rental and photo data live in `src/data/` (treks.ts, photos.json); contact details in `src/data/site.ts` — pages read only from these so content can be updated in one place.
- Enquiries are sent by opening WhatsApp/email with a pre-filled message (no backend) — keeps the site static-hostable.
