// The painterly food/farm art that sits, low-opacity, behind a screen's content.
// One home for the backdrop so every page feels the same.
import {
  Tomato,
  Herbs,
  Carrot,
  Bread,
  Barn,
  Onion,
  Radish,
  Greens,
} from "@/components/veggies";

export default function VeggieBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.14]"
    >
      <Tomato className="absolute left-[2%] top-[5%] w-28 -rotate-6" />
      <Herbs className="absolute right-[4%] top-[10%] w-32 rotate-[14deg]" />
      <Onion className="absolute left-[26%] top-[20%] w-20 rotate-[8deg]" />
      <Bread className="absolute right-[22%] top-[26%] w-28 -rotate-[10deg]" />
      <Carrot className="absolute left-[6%] top-[46%] w-24 -rotate-[8deg]" />
      <Greens className="absolute right-[8%] top-[48%] w-28 rotate-[6deg]" />
      <Radish className="absolute left-[40%] top-[64%] w-20 rotate-[12deg]" />
      <Barn className="absolute right-[10%] bottom-[8%] w-28 -rotate-3" />
      <Tomato className="absolute left-[12%] bottom-[10%] w-20 rotate-[10deg]" />
      <Carrot className="absolute right-[38%] bottom-[16%] w-16 rotate-[20deg]" />
    </div>
  );
}
