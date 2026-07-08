export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      {/* Painterly veggie backdrop — low opacity so text always stays readable */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-15">
        <svg className="absolute left-[4%] top-[12%] w-28" viewBox="0 0 48 48">
          <ellipse cx="24" cy="28" rx="14" ry="13" fill="#C6543A" />
          <path d="M18 15 q6 -5 12 0 q-6 3 -12 0" fill="#7FA06A" />
        </svg>
        <svg className="absolute right-[6%] top-[18%] w-32 rotate-[16deg]" viewBox="0 0 48 48">
          <path d="M24 40 L24 14" stroke="#7FA06A" strokeWidth="3" />
          <path d="M24 24 q-11 -2 -13 -11 q10 0 13 8" fill="#8FB07A" />
          <path d="M24 30 q11 -2 13 -11 q-10 0 -13 8" fill="#6f9159" />
        </svg>
        <svg className="absolute bottom-[12%] left-[10%] w-24 -rotate-[8deg]" viewBox="0 0 48 48">
          <path d="M22 16 L30 38 q-6 4 -12 0 z" fill="#E0975E" />
          <path d="M27 16 l6 -4" stroke="#7FA06A" strokeWidth="3" />
        </svg>
        <svg className="absolute bottom-[16%] right-[9%] w-28 -rotate-[14deg]" viewBox="0 0 48 48">
          <path
            d="M11 26 q0 -14 13 -14 q13 0 13 14 l0 9 q0 3 -3 3 l-20 0 q-3 0 -3 -3 z"
            fill="#DBA13A"
          />
        </svg>
      </div>

      <div className="relative z-10 flex max-w-xl flex-col items-center">
        <p className="text-xs font-semibold tracking-widest text-butter">
          REAL FOOD NYC · COMING SOON
        </p>
        <h1
          className="mt-4 text-4xl leading-tight text-green sm:text-5xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Find NYC restaurants that
          <br /> actually cook real food.
        </h1>
        <p className="mt-5 max-w-md text-base text-ink/70">
          As the supply chain consolidates and everything starts to taste the
          same, here&apos;s a map of the places that still cook from scratch and
          source honestly.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2 text-sm">
          <span className="rounded-full bg-[#F0E4C4] px-3 py-1 font-medium text-[#7a5a12]">
            ★ USDA Organic
          </span>
          <span className="rounded-full bg-[#DCE7D3] px-3 py-1 font-medium text-[#3f5a45]">
            Names its farms
          </span>
          <span className="rounded-full bg-[#F3DED3] px-3 py-1 font-medium text-[#8a3a24]">
            From scratch
          </span>
        </div>

        <p className="mt-10 text-sm text-muted">
          The map is being planted. 🌱
        </p>
      </div>
    </main>
  );
}
