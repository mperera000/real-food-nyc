// One home for reading restaurants from the database.
import { supabase } from "@/lib/supabase";
import { slugify } from "@/lib/slug";
import type { Restaurant } from "@/lib/types";

export async function getRestaurants(): Promise<Restaurant[]> {
  const { data, error } = await supabase
    .from("restaurants")
    .select("*")
    .eq("status", "live")
    .order("name");

  if (error) {
    // Leave a trail, then let the caller show a friendly message.
    console.error("[restaurants] failed to load:", error.message);
    throw error;
  }

  return (data ?? []) as Restaurant[];
}

// Find one restaurant by its name-slug (e.g. "blue-hill").
// Fine for our small list; when it grows we'll add a real slug column.
export async function getRestaurantBySlug(
  slug: string,
): Promise<Restaurant | null> {
  const all = await getRestaurants();
  return all.find((spot) => slugify(spot.name) === slug) ?? null;
}
