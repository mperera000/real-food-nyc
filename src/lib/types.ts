// One home for what a restaurant "is" across the whole app.

export type TrustTier = "certified" | "names_farms" | "scratch";

export const TRUST_TIER_LABELS: Record<TrustTier, string> = {
  certified: "USDA Organic",
  names_farms: "Names its farms",
  scratch: "From scratch",
};

// One home for tier colors — the map pins and the badges read from these.
export const TIER_PIN_COLOR: Record<TrustTier, string> = {
  certified: "#DBA13A",
  names_farms: "#7FA06A",
  scratch: "#C6543A",
};

export const TIER_BADGE_STYLE: Record<TrustTier, { bg: string; color: string }> =
  {
    certified: { bg: "#F0E4C4", color: "#7a5a12" },
    names_farms: { bg: "#DCE7D3", color: "#3f5a45" },
    scratch: { bg: "#F3DED3", color: "#8a3a24" },
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
