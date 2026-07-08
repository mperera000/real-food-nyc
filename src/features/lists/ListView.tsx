"use client";

import { useState } from "react";
import Link from "next/link";
import { slugify } from "@/lib/slug";
import TierBadge from "@/components/TierBadge";
import type { Restaurant, TrustTier } from "@/lib/types";

type FilterKey = "all" | TrustTier;

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "certified", label: "Certified" },
  { key: "names_farms", label: "Names farms" },
  { key: "scratch", label: "From scratch" },
];

export default function ListView({
  restaurants,
}: {
  restaurants: Restaurant[];
}) {
  const [filter, setFilter] = useState<FilterKey>("all");
  const shown =
    filter === "all"
      ? restaurants
      : restaurants.filter((spot) => spot.trust_tier === filter);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const active = filter === f.key;
          return (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                active
                  ? "bg-green text-white"
                  : "bg-paper text-ink hover:bg-cream"
              }`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {shown.length === 0 ? (
        <p className="text-muted">No spots in this filter yet.</p>
      ) : (
        <ul className="flex flex-col gap-3">
          {shown.map((spot) => (
            <li key={spot.id}>
              <Link
                href={`/restaurants/${slugify(spot.name)}`}
                className="block rounded-2xl border border-line bg-paper px-4 py-3 transition-colors hover:bg-cream"
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className="text-lg text-green"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {spot.name}
                  </span>
                  <TierBadge tier={spot.trust_tier} />
                </div>
                <p className="mt-1 text-sm text-muted">
                  {spot.neighborhood}
                  {spot.farms?.length ? ` · ${spot.farms.join(", ")}` : ""}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
