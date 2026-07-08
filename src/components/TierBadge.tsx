// The honesty badge — shows how we know a spot belongs. Used everywhere.
import { TRUST_TIER_LABELS, TIER_BADGE_STYLE, type TrustTier } from "@/lib/types";

export default function TierBadge({ tier }: { tier: TrustTier }) {
  const style = TIER_BADGE_STYLE[tier];
  return (
    <span
      className="inline-block rounded-full px-3 py-1 text-xs font-medium"
      style={{ background: style.bg, color: style.color }}
    >
      {TRUST_TIER_LABELS[tier]}
    </span>
  );
}
