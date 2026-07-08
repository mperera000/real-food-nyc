import MapView from "@/features/map/MapView";
import { getRestaurants } from "@/lib/restaurants";
import type { Restaurant } from "@/lib/types";

export default async function Home() {
  let restaurants: Restaurant[] = [];
  try {
    restaurants = await getRestaurants();
  } catch {
    // Map still renders (empty) if the DB is briefly unreachable.
  }

  return <MapView restaurants={restaurants} />;
}
