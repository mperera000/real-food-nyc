// The painterly food/farm art that sits, low-opacity, behind a screen's content.
// One home for the backdrop. Placed on a jittered grid: even coverage but no
// visible rows or columns, spaced out so motifs breathe. Low-opacity so it
// never fights the text. Only the fuller-color motifs are used here — the pale
// ones (milk, garlic, eggs) disappear on cream, so they stay out of the backdrop.
import type { ComponentType } from "react";
import {
  Tomato,
  Herbs,
  Carrot,
  Bread,
  Barn,
  Onion,
  Radish,
  Greens,
  Asparagus,
} from "@/components/veggies";

type Placement = {
  C: ComponentType<{ className?: string }>;
  l: number; // left %
  t: number; // top %
  w: number; // width px
  r: number; // rotation deg
};

// Scattered so no two motifs share a similar height (no visible rows) and lefts
// stay varied (no visible columns). Hand-tuned to feel randomly placed.
const PLACEMENTS: Placement[] = [
  { C: Tomato, l: 8, t: 7, w: 96, r: -8 },
  { C: Bread, l: 54, t: 4, w: 104, r: -7 },
  { C: Onion, l: 82, t: 15, w: 84, r: 6 },
  { C: Asparagus, l: 32, t: 18, w: 80, r: 9 },
  { C: Greens, l: 66, t: 27, w: 92, r: 5 },
  { C: Carrot, l: 19, t: 31, w: 72, r: 14 },
  { C: Radish, l: 45, t: 39, w: 80, r: 12 },
  { C: Herbs, l: 86, t: 41, w: 84, r: 11 },
  { C: Bread, l: 24, t: 49, w: 100, r: -6 },
  { C: Tomato, l: 60, t: 55, w: 92, r: 8 },
  { C: Onion, l: 88, t: 61, w: 84, r: -5 },
  { C: Asparagus, l: 22, t: 65, w: 80, r: 10 },
  { C: Greens, l: 48, t: 73, w: 92, r: 6 },
  { C: Carrot, l: 76, t: 79, w: 72, r: -8 },
  { C: Herbs, l: 6, t: 89, w: 84, r: 11 },
  { C: Radish, l: 30, t: 85, w: 80, r: 13 },
  { C: Barn, l: 60, t: 91, w: 104, r: -3 },
  { C: Onion, l: 3, t: 25, w: 80, r: 7 },
  { C: Carrot, l: 5, t: 50, w: 72, r: -9 },
  { C: Radish, l: 2, t: 72, w: 76, r: 12 },
];

export default function VeggieBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.12]"
    >
      {PLACEMENTS.map((p, i) => {
        const C = p.C;
        return (
          <span
            key={i}
            className="absolute block"
            style={{
              left: `${p.l}%`,
              top: `${p.t}%`,
              width: `${p.w}px`,
              transform: `rotate(${p.r}deg)`,
            }}
          >
            <C className="block w-full" />
          </span>
        );
      })}
    </div>
  );
}
