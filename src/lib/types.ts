// One home for what a restaurant "is" across the whole app.

export type TrustTier = "certified" | "names_farms" | "scratch";

export const TRUST_TIER_LABELS: Record<TrustTier, string> = {
  certified: "USDA Organic",
  names_farms: "Names its farms",
  scratch: "From scratch",
};

export type Restaurant = {
  id: string;
  name: string;
  neighborhood: string | null;
  borough: string | null;
  latitude: number | null;
  longitude: number | null;
  address: string | null;
  trust_tier: TrustTier;
  evidence_note: string | null;
  source_url: string | null;
  farms: string[] | null;
  tags: string[] | null;
  website: string | null;
  price_range: string | null;
  cuisine: string | null;
  status: string;
  created_at: string;
};
