"use client";

import { useEffect, useRef, useState } from "react";
import type { Map as MlMap } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { TRUST_TIER_LABELS, type Restaurant, type TrustTier } from "@/lib/types";

// Pin + badge colors, one home, keyed by trust tier.
const TIER_COLOR: Record<TrustTier, string> = {
  certified: "#DBA13A",
  names_farms: "#7FA06A",
  scratch: "#C6543A",
};
const TIER_BADGE: Record<TrustTier, { bg: string; color: string }> = {
  certified: { bg: "#F0E4C4", color: "#7a5a12" },
  names_farms: { bg: "#DCE7D3", color: "#3f5a45" },
  scratch: { bg: "#F3DED3", color: "#8a3a24" },
};

// NYC, roughly Manhattan.
const NYC_CENTER: [number, number] = [-73.98, 40.75];

export default function MapView({ restaurants }: { restaurants: Restaurant[] }) {
  const container = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MlMap | null>(null);
  const [selected, setSelected] = useState<Restaurant | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      // Load MapLibre only in the browser (it needs `window`).
      const maplibregl = (await import("maplibre-gl")).default;
      if (cancelled || !container.current || mapRef.current) return;

      const map = new maplibregl.Map({
        container: container.current,
        style: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
        center: NYC_CENTER,
        zoom: 12,
      });
      mapRef.current = map;
      map.addControl(new maplibregl.NavigationControl(), "top-right");
      map.on("click", () => setSelected(null));
      // Make sure the map fills its container once layout settles.
      map.on("load", () => map.resize());

      for (const spot of restaurants) {
        if (spot.latitude == null || spot.longitude == null) continue;

        const pin = document.createElement("button");
        pin.className = "rf-pin";
        pin.style.setProperty("--pin", TIER_COLOR[spot.trust_tier]);
        pin.setAttribute("aria-label", spot.name);
        pin.addEventListener("click", (e) => {
          e.stopPropagation();
          setSelected(spot);
          map.flyTo({ center: [spot.longitude!, spot.latitude!], zoom: 14 });
        });

        new maplibregl.Marker({ element: pin })
          .setLngLat([spot.longitude, spot.latitude])
          .addTo(map);
      }
    })();

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [restaurants]);

  return (
    <div className="relative w-full">
      <div ref={container} style={{ height: "100dvh", width: "100%" }} />

      {/* Header + legend */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between px-4 py-3">
        <span
          className="rounded-full bg-cream/90 px-3 py-1 text-sm text-green shadow-sm"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Real Food NYC
        </span>
        <div className="flex gap-2 rounded-full bg-cream/90 px-3 py-1 text-[11px] text-ink shadow-sm">
          <Legend color={TIER_COLOR.certified} label="Certified" />
          <Legend color={TIER_COLOR.names_farms} label="Farms" />
          <Legend color={TIER_COLOR.scratch} label="Scratch" />
        </div>
      </div>

      {selected && (
        <DetailBox spot={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-1">
      <span
        className="inline-block h-2.5 w-2.5 rounded-full"
        style={{ background: color }}
      />
      {label}
    </span>
  );
}

function DetailBox({
  spot,
  onClose,
}: {
  spot: Restaurant;
  onClose: () => void;
}) {
  const badge = TIER_BADGE[spot.trust_tier];
  const directions =
    spot.latitude != null && spot.longitude != null
      ? `https://www.google.com/maps/dir/?api=1&destination=${spot.latitude},${spot.longitude}`
      : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.name + " NYC")}`;

  return (
    <div className="absolute inset-x-0 bottom-0 z-10 p-3">
      <div className="mx-auto max-w-md rounded-2xl bg-paper p-4 shadow-lg">
        <div className="mx-auto mb-2 h-1 w-9 rounded-full bg-line" />
        <div className="flex items-start justify-between gap-2">
          <div>
            <h2
              className="text-xl text-green"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {spot.name}
            </h2>
            <p className="text-xs text-muted">
              {spot.neighborhood}
              {spot.borough ? ` · ${spot.borough}` : ""}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-full px-2 py-1 text-muted hover:bg-cream"
          >
            ✕
          </button>
        </div>

        <span
          className="mt-2 inline-block rounded-full px-3 py-1 text-xs font-medium"
          style={{ background: badge.bg, color: badge.color }}
        >
          {TRUST_TIER_LABELS[spot.trust_tier]}
        </span>

        {spot.evidence_note && (
          <p className="mt-3 text-sm text-ink/80">{spot.evidence_note}</p>
        )}
        {spot.farms?.length ? (
          <p className="mt-2 text-xs text-muted">
            Sources from {spot.farms.join(", ")}
          </p>
        ) : null}

        <div className="mt-4 flex gap-2">
          <a
            href={directions}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-xl bg-tomato py-2 text-center text-sm font-medium text-white"
          >
            Directions
          </a>
          {spot.source_url && (
            <a
              href={spot.source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-xl bg-cream py-2 text-center text-sm font-medium text-green"
            >
              Learn more
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
