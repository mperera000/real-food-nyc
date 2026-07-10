import Link from "next/link";
import VeggieBackdrop from "@/components/VeggieBackdrop";

export const metadata = {
  title: "Why ingredients matter | Real Food NYC",
  description:
    "Thousands of chemicals are allowed in US food with little review, and safety oversight is thinning. Here is why sourcing matters, and who tracks it.",
};

// One honest home for the "why it matters" content. We cite the people who
// do the deep research (EWG, ProPublica) rather than rebuild their work.
const SECTIONS = [
  {
    stat: "10,000+",
    heading: "chemicals are allowed in US food",
    body: "Nearly all food chemicals introduced since 2000 were greenlit by the companies that make them, not independently reviewed by the FDA. EWG keeps a running guide to the ones worth avoiding.",
    linkLabel: "EWG's Dirty Dozen food chemicals",
    href: "https://www.ewg.org/consumer-guides/ewgs-dirty-dozen-guide-food-chemicals-top-12-avoid",
  },
  {
    stat: "Dozens",
    heading: "of pesticides show up on everyday produce",
    body: "Which fruits and vegetables carry the most pesticide residue changes year to year. EWG tests and publishes the list so you can shop more intentionally.",
    linkLabel: "EWG's Shopper's Guide to Pesticides in Produce",
    href: "https://www.ewg.org/foodnews/",
  },
  {
    stat: "Record lows",
    heading: "in food-safety inspections",
    body: "Foreign food-facility inspections hit their lowest level in over a decade in 2025 amid budget and staffing cuts, leaving more of what reaches your plate unchecked.",
    linkLabel: "ProPublica: inspections at a historic low",
    href: "https://www.propublica.org/article/foreign-food-safety-inspections-historic-low-fda",
  },
];

// The effects of the federal cuts on food-safety oversight, 2025 through 2026.
const CUTS = [
  {
    stat: "~40%",
    heading: "more food-safety complaints in a year",
    body: "Complaints about meat, poultry, and egg products jumped from 1,443 to 2,016 after USDA cuts. In one case, FSIS oversaw a recall of 58 million pounds of corn dogs after foreign objects were found inside.",
    linkLabel: "Investigate Midwest: complaints spike (2026)",
    href: "https://investigatemidwest.org/2026/05/13/after-usda-cuts-complaints-over-food-safety-spike/",
  },
  {
    stat: "8 → 2",
    heading: "pathogens the CDC still tracks",
    body: "As of July 2026, FoodNet, the early-warning network that catches outbreaks before they spread, tracks only salmonella and E. coli. Listeria, Campylobacter, and four others are no longer actively watched.",
    linkLabel: "STAT: American food safety could break down",
    href: "https://www.statnews.com/2025/12/22/american-food-safety-funding-cuts-foodnet/",
  },
  {
    stat: "~20%",
    heading: "of the FDA's food inspectors, gone",
    body: "Across 2025 and 2026 the FDA, USDA, and CDC shed tens of thousands of staff, roughly a fifth of the FDA's human-food inspection workforce, including its Human Foods Program.",
    linkLabel: "Food Safety Magazine: staffing losses",
    href: "https://www.food-safety.com/articles/11133-fda-usda-cdc-continue-to-lose-staffers-in-fiscal-year-2026",
  },
  {
    stat: "To the states",
    heading: "routine inspections are being handed off",
    body: "The FDA is moving routine food-facility inspections to state agencies over five years, with state funding uncertain. States already handle about 90% of produce inspections and nearly all restaurants.",
    linkLabel: "CBS News: FDA to end routine inspections",
    href: "https://www.cbsnews.com/news/fda-food-safety-inspections-plans/",
  },
];

export default function WhyPage() {
  return (
    <main className="relative min-h-[100dvh]">
      <VeggieBackdrop />
      <div className="relative z-10 mx-auto max-w-2xl px-6 py-10">
        <Link
          href="/map"
          className="inline-block rounded-full bg-paper px-4 py-2 text-sm text-green hover:bg-cream"
        >
          ← Back to map
        </Link>

        <h1
          className="mt-8 text-4xl leading-tight text-green sm:text-5xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Why ingredients matter
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink/80">
          We can&apos;t inspect anyone&apos;s kitchen. What we can do is point
          you toward places that cook real food and source honestly, and be
          clear about why that choice adds up.
        </p>

        <div className="mt-10 flex flex-col gap-5">
          {SECTIONS.map((s, i) => (
            <div
              key={s.heading}
              className="rise-in rounded-2xl border border-line bg-paper/85 p-6"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="flex items-baseline gap-3">
                <span
                  className="text-3xl text-tomato"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.stat}
                </span>
                <span
                  className="text-lg text-green"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.heading}
                </span>
              </div>
              <p className="mt-3 text-ink/80">{s.body}</p>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-medium text-green underline underline-offset-4 hover:text-tomato"
              >
                {s.linkLabel} ↗
              </a>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <h2
            className="text-2xl text-green sm:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Deregulation of Food Safety
          </h2>
          <p className="mt-3 max-w-xl text-ink/80">
            Recent cuts to consumer product safety have strained
            a system that was already stretched thin. See what&apos;s at risk.
          </p>
          <div className="mt-6 flex flex-col gap-5">
            {CUTS.map((s, i) => (
              <div
                key={s.heading}
                className="rise-in rounded-2xl border border-line bg-paper/85 p-6"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <div className="flex items-baseline gap-3">
                  <span
                    className="text-3xl text-tomato"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.stat}
                  </span>
                  <span
                    className="text-lg text-green"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.heading}
                  </span>
                </div>
                <p className="mt-3 text-ink/80">{s.body}</p>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-green underline underline-offset-4 hover:text-tomato"
                >
                  {s.linkLabel} ↗
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-line bg-cream/60 p-6">
          <p className="text-ink/80">
            Discover restaurants making food from scratch, ingredient by ingredient.
          </p>
          <Link
            href="/lists"
            className="mt-4 inline-block rounded-xl bg-[#A8442F] px-5 py-2.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
          >
            Browse the list
          </Link>
        </div>

        <p className="mt-8 text-xs text-muted">
          Research and reporting by the Environmental Working Group, ProPublica,
          STAT, and Food Safety Magazine, linked above. We summarize and point;
          the deep work is theirs.
        </p>
      </div>
    </main>
  );
}
