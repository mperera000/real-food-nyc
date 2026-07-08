import MapView from "@/features/map/MapView";
import { getRestaurants } from "@/lib/restaurants";
import type { Restaurant } from "@/lib/types";

export const metadata = {
  title: "The map | Real Food NYC",
  description:
    "A map of NYC restaurants that cook from scratch and source good ingredients.",
};

export default async function MapPage() {
  let restaurants: Restaurant[] = [];
  try {
    restaurants = await getRestaurants();
  } catch {
    // Map still renders (empty) if the DB is briefly unreachable.
  }

  return <MapView restaurants={restaurants} />;
}
