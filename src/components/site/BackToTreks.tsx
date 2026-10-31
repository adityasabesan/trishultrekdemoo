import { Link, useCanGoBack, useRouter } from "@tanstack/react-router";

const KEY = "trishul:fromTreks";
/** Called when a trek is opened from the Treks list, so Back can return to the same spot. */
export const markFromTreks = () => sessionStorage.setItem(KEY, "1");

export function BackToTreks() {
  const router = useRouter();
  const canGoBack = useCanGoBack();
  return (
    <Link
      to="/treks"
      onClick={(e) => {
        const fromList = sessionStorage.getItem(KEY) === "1";
        sessionStorage.removeItem(KEY);
        if (fromList && canGoBack) {
          e.preventDefault();
          router.history.back();
        }
      }}
      className="mb-auto inline-flex w-fit items-center gap-2 rounded-sm border border-forest-foreground/40 bg-forest/70 px-4 py-2.5 text-sm font-semibold text-forest-foreground backdrop-blur transition hover:bg-forest"
    >
      ← Back to Treks
    </Link>
  );
}
