import Link from "next/link";
import ListView from "@/features/lists/ListView";
import VeggieBackdrop from "@/components/VeggieBackdrop";
import { getRestaurants } from "@/lib/restaurants";
import type { Restaurant } from "@/lib/types";

export const metadata = {
  title: "The list of NYC scratch kitchens | Real Food NYC",
  description:
    "Browse every hand-picked NYC restaurant that cooks from scratch and sources honestly, filterable by how it's verified.",
};

export default async function ListsPage() {
  let restaurants: Restaurant[] = [];
  try {
    restaurants = await getRestaurants();
  } catch {
    // Show an empty, friendly list rather than crashing.
  }

  return (
    <main className="relative min-h-[100dvh]">
      <VeggieBackdrop />
      <div className="relative z-10 mx-auto max-w-2xl px-6 py-12">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1
              className="text-3xl text-green"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The list
            </h1>
            <p className="text-sm text-muted">
              {restaurants.length} hand-picked spots
            </p>
          </div>
          <Link
            href="/"
            className="rounded-full bg-paper px-4 py-2 text-sm text-green hover:bg-cream"
          >
            ← Map
          </Link>
        </div>
        <ListView restaurants={restaurants} />
      </div>
    </main>
  );
}
