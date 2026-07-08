// Temporary internal check page — proves the app can read your database.
// We'll replace this with the real Lists screen in Phase 5.
import { getRestaurants } from "@/lib/restaurants";
import { TRUST_TIER_LABELS, type TrustTier } from "@/lib/types";

const TIER_STYLES: Record<TrustTier, { bg: string; color: string }> = {
  certified: { bg: "#F0E4C4", color: "#7a5a12" },
  names_farms: { bg: "#DCE7D3", color: "#3f5a45" },
  scratch: { bg: "#F3DED3", color: "#8a3a24" },
};

export default async function SpotsPage() {
  let spots;
  try {
    spots = await getRestaurants();
  } catch {
    return (
      <main className="mx-auto max-w-2xl px-6 py-20 text-center">
        <p className="text-tomato">
          Couldn&apos;t reach the database. Check your keys in{" "}
          <code>.env.local</code> and that you ran <code>schema.sql</code>, then
          restart the dev server.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <p className="text-xs font-semibold tracking-widest text-butter">
        DATABASE CHECK
      </p>
      <h1
        className="mt-3 text-3xl text-green"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Connected — {spots.length} scratch kitchens
      </h1>
      <ul className="mt-8 flex flex-col gap-3">
        {spots.map((spot) => {
          const tier = TIER_STYLES[spot.trust_tier];
          return (
            <li
              key={spot.id}
              className="rounded-xl border border-line bg-paper px-4 py-3"
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className="text-lg text-green"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {spot.name}
                </span>
                <span
                  className="rounded-full px-3 py-1 text-xs font-medium"
                  style={{ background: tier.bg, color: tier.color }}
                >
                  {TRUST_TIER_LABELS[spot.trust_tier]}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">
                {spot.neighborhood}
                {spot.farms?.length ? ` · ${spot.farms.join(", ")}` : ""}
              </p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
