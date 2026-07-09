"use client";

import { useState } from "react";
import Link from "next/link";
import { slugify } from "@/lib/slug";
import TierBadge from "@/components/TierBadge";
import TierDot from "@/components/TierDot";
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
          {shown.map((spot, i) => (
            <li key={spot.id}>
              <Link
                href={`/restaurants/${slugify(spot.name)}`}
                style={{ animationDelay: `${i * 60}ms` }}
                className="rise-in block rounded-2xl border border-line bg-paper/85 px-5 py-4 transition-all duration-150 hover:-translate-y-0.5 hover:border-green/30 hover:bg-paper hover:shadow-[0_6px_20px_rgba(80,70,40,0.10)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2.5">
                    <TierDot tier={spot.trust_tier} />
                    <span
                      className="text-xl text-green"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {spot.name}
                    </span>
                  </span>
                  <TierBadge tier={spot.trust_tier} />
                </div>
                <p className="mt-1.5 pl-[22px] text-sm text-muted">
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
