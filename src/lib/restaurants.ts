// One home for reading restaurants from the database.
import { supabase } from "@/lib/supabase";
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
