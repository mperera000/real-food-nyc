import Link from "next/link";
import VeggieBackdrop from "@/components/VeggieBackdrop";
import TierDot from "@/components/TierDot";
import { getRestaurants } from "@/lib/restaurants";

// Always render fresh so newly added restaurants show without a rebuild.
export const dynamic = "force-dynamic";

export default async function Home() {
  let count = 0;
  try {
    count = (await getRestaurants()).length;
  } catch {
    // Landing still renders if the DB is briefly unreachable.
  }

  return (
    <main className="relative overflow-hidden">
      <VeggieBackdrop />

      {/* Hero */}
      <section className="relative z-10 mx-auto flex min-h-[100dvh] max-w-3xl flex-col items-center justify-center px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-butter">
          Real Food NYC
        </p>
        <h1
          className="mt-4 text-5xl leading-[1.05] text-green sm:text-6xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Find NYC&apos;s
          <br /> Scratch Kitchens.
        </h1>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/75">
          A hand-picked map of restaurants that still cook real food and source
          honestly. No industrial sameness.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/map"
            className="rounded-xl bg-[#A8442F] px-6 py-3 text-sm font-medium text-white shadow-sm transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
          >
            Open the map
          </Link>
          <Link
            href="/lists"
            className="rounded-xl border border-line bg-paper px-6 py-3 text-sm font-medium text-green transition-colors hover:border-green/30"
          >
            Browse the list
          </Link>
        </div>
      </section>

      {/* How we verify */}
      <section className="relative z-10 mx-auto max-w-2xl px-6 pb-24">
        <div className="food-border rounded-2xl p-7 text-center">
          <p className="text-sm text-muted">
            {count} hand-picked spots, each shown with how we know:
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-ink">
            <span className="flex items-center gap-2">
              <TierDot tier="certified" /> USDA certified
            </span>
            <span className="flex items-center gap-2">
              <TierDot tier="names_farms" /> Names its farms
            </span>
            <span className="flex items-center gap-2">
              <TierDot tier="scratch" /> Cooks from scratch
            </span>
          </div>
          <Link
            href="/why"
            className="mt-5 inline-block text-sm font-medium text-green underline underline-offset-4 hover:text-tomato"
          >
            Why ingredients matter ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
