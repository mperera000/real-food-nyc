// The painterly food/farm art that sits, low-opacity, behind a screen's content.
// One home for the backdrop so every page feels the same.
export default function VeggieBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.13]"
    >
      <svg className="absolute left-[2%] top-[6%] w-28" viewBox="0 0 48 48">
        <ellipse cx="24" cy="28" rx="14" ry="13" fill="#C6543A" />
        <path d="M18 15 q6 -5 12 0 q-6 3 -12 0" fill="#7FA06A" />
      </svg>
      <svg className="absolute right-[4%] top-[14%] w-32 rotate-[16deg]" viewBox="0 0 48 48">
        <path d="M24 40 L24 14" stroke="#7FA06A" strokeWidth="3" />
        <path d="M24 24 q-11 -2 -13 -11 q10 0 13 8" fill="#8FB07A" />
        <path d="M24 30 q11 -2 13 -11 q-10 0 -13 8" fill="#6f9159" />
      </svg>
      <svg className="absolute left-[8%] top-[52%] w-24 -rotate-[8deg]" viewBox="0 0 48 48">
        <path d="M22 16 L30 38 q-6 4 -12 0 z" fill="#E0975E" />
        <path d="M27 16 l6 -4" stroke="#7FA06A" strokeWidth="3" />
      </svg>
      <svg className="absolute right-[8%] bottom-[10%] w-28 -rotate-[14deg]" viewBox="0 0 48 48">
        <path
          d="M11 26 q0 -14 13 -14 q13 0 13 14 l0 9 q0 3 -3 3 l-20 0 q-3 0 -3 -3 z"
          fill="#DBA13A"
        />
      </svg>
      <svg className="absolute left-[42%] top-[42%] w-24" viewBox="0 0 48 48">
        <rect x="12" y="24" width="24" height="15" rx="1.5" fill="#C6543A" />
        <path d="M12 24 L24 14 L36 24 Z" fill="#a8442f" />
      </svg>
    </div>
  );
}
