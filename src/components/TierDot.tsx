// A small colored dot matching the map pin color — ties list/pages back to the map.
import { TIER_PIN_COLOR, type TrustTier } from "@/lib/types";

export default function TierDot({
  tier,
  size = 10,
}: {
  tier: TrustTier;
  size?: number;
}) {
  return (
    <span
      aria-hidden
      className="inline-block shrink-0 rounded-full"
      style={{ width: size, height: size, background: TIER_PIN_COLOR[tier] }}
    />
  );
}
