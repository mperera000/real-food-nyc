import Link from "next/link";
import { notFound } from "next/navigation";
import { getRestaurantBySlug } from "@/lib/restaurants";
import VeggieBackdrop from "@/components/VeggieBackdrop";
import TierBadge from "@/components/TierBadge";
import type { Metadata } from "next";

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const spot = await getRestaurantBySlug(slug).catch(() => null);
  if (!spot) return { title: "Not found | Real Food NYC" };

  const where = spot.neighborhood ?? "NYC";
  return {
    title: `${spot.name} — ${where} scratch kitchen | Real Food NYC`,
    description:
      spot.evidence_note ??
      `${spot.name} is a real-food spot in ${where} that cooks from scratch and sources honestly.`,
  };
}

export default async function RestaurantPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  let spot;
  try {
    spot = await getRestaurantBySlug(slug);
  } catch {
    spot = null;
  }
  if (!spot) notFound();

  const directions =
    spot.latitude != null && spot.longitude != null
      ? `https://www.google.com/maps/dir/?api=1&destination=${spot.latitude},${spot.longitude}`
      : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.name + " NYC")}`;

  return (
    <main className="relative min-h-[100dvh]">
      <VeggieBackdrop />
      <div className="relative z-10 mx-auto max-w-2xl px-6 py-10">
        <Link
          href="/"
          className="inline-block rounded-full bg-paper px-4 py-2 text-sm text-green hover:bg-cream"
        >
          ← Back to map
        </Link>

        <div className="mt-6 rounded-2xl border border-line bg-paper/90 p-6">
          <h1
            className="text-4xl text-green"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {spot.name}
          </h1>
          <p className="mt-1 text-sm text-muted">
            {spot.neighborhood}
            {spot.borough ? ` · ${spot.borough}` : ""}
          </p>

          <div className="mt-4">
            <TierBadge tier={spot.trust_tier} />
          </div>

          {spot.evidence_note && (
            <div className="mt-6">
              <h2
                className="text-sm text-green"
                style={{ fontFamily: "var(--font-display)" }}
              >
                How we know
              </h2>
              <p className="mt-1 text-ink/80">{spot.evidence_note}</p>
            </div>
          )}

          {spot.farms?.length ? (
            <div className="mt-5">
              <h2
                className="text-sm text-green"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Sources from
              </h2>
              <p className="mt-1 text-ink/80">{spot.farms.join(", ")}</p>
            </div>
          ) : null}

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={directions}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-tomato px-5 py-2 text-sm font-medium text-white"
            >
              Directions
            </a>
            {spot.source_url && (
              <a
                href={spot.source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-cream px-5 py-2 text-sm font-medium text-green"
              >
                Check the source
              </a>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
