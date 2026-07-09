// The painterly food/farm art kit — one home for every motif.
// Each is a soft, layered SVG (base + highlight + shadow) so it reads as
// hand-painted rather than a flat shape. Used by VeggieBackdrop and empty states.

type MotifProps = { className?: string };

export function Tomato({ className }: MotifProps) {
  return (
    <svg className={className} viewBox="0 0 48 48">
      <ellipse cx="24" cy="29" rx="15" ry="14" fill="#C6543A" />
      <path d="M11 27 q3 11 13 14 q-11 0 -13 -14z" fill="#A8442F" opacity="0.55" />
      <ellipse cx="19" cy="24" rx="5.5" ry="4" fill="#E89A85" opacity="0.8" />
      <path d="M24 15 l-5 -4 M24 15 v-5 M24 15 l5 -4" stroke="#6f9159" strokeWidth="3" strokeLinecap="round" />
      <path d="M17 15 q7 -6 14 0 q-7 4 -14 0" fill="#7FA06A" />
    </svg>
  );
}

export function Herbs({ className }: MotifProps) {
  return (
    <svg className={className} viewBox="0 0 48 48">
      <path d="M24 42 V14" stroke="#6f9159" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 23 q-12 -2 -14 -12 q11 0 14 9z" fill="#8FB07A" />
      <path d="M24 31 q12 -2 14 -12 q-11 0 -14 9z" fill="#7FA06A" />
      <path d="M24 16 q-9 -3 -9 -12 q8 2 9 10z" fill="#9DB889" />
      <path d="M24 16 q9 -3 9 -12 q-8 2 -9 10z" fill="#6f9159" />
    </svg>
  );
}

export function Carrot({ className }: MotifProps) {
  return (
    <svg className={className} viewBox="0 0 48 48">
      <path d="M22 15 L30 40 q-6 4 -12 0z" fill="#E0975E" />
      <path d="M27 16 L30 39" stroke="#CF8348" strokeWidth="1.5" opacity="0.5" />
      <path d="M20 23 h9 M19 29 h11 M20 35 h8" stroke="#CF8348" strokeWidth="1" opacity="0.45" />
      <path d="M24 15 l-6 -6 M26 14 v-7 M27 15 l6 -5" stroke="#7FA06A" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Bread({ className }: MotifProps) {
  return (
    <svg className={className} viewBox="0 0 48 48">
      <path d="M9 27 q0 -15 15 -15 q15 0 15 15 l0 9 q0 3 -3 3 l-24 0 q-3 0 -3 -3z" fill="#E3C766" />
      <path d="M9 27 q0 -15 15 -15 q15 0 15 15" fill="none" stroke="#CBAF5C" strokeWidth="2.5" />
      <path d="M18 20 l4 6 M25 18 l4 7 M31 21 l3 6" stroke="#CBAF5C" strokeWidth="1.5" opacity="0.6" />
      <ellipse cx="17" cy="22" rx="3" ry="2" fill="#EED89A" opacity="0.7" />
    </svg>
  );
}

export function Barn({ className }: MotifProps) {
  return (
    <svg className={className} viewBox="0 0 48 48">
      <rect x="11" y="24" width="24" height="16" rx="1.5" fill="#E3A79A" />
      <path d="M11 24 L24 13 L37 24 Z" fill="#CF8C7E" />
      <rect x="20" y="30" width="7" height="10" fill="#F5EEDD" />
      <path d="M20 30 h7 M23.5 30 v10" stroke="#E3A79A" strokeWidth="1" />
      <rect x="31" y="19" width="6" height="21" rx="2" fill="#C9BBA0" />
      <path d="M31 19 a3 3 0 0 1 6 0z" fill="#B3A488" />
    </svg>
  );
}

export function Onion({ className }: MotifProps) {
  return (
    <svg className={className} viewBox="0 0 48 48">
      <path d="M24 40 q-11 0 -11 -12 q0 -10 11 -13 q11 3 11 13 q0 12 -11 12z" fill="#B5789E" />
      <path d="M18 20 q0 16 3 19 M30 20 q0 16 -3 19" stroke="#9C6488" strokeWidth="1" opacity="0.5" fill="none" />
      <ellipse cx="20" cy="24" rx="3" ry="5" fill="#C892B4" opacity="0.6" />
      <path d="M24 16 v-6 q3 1 3 5z" fill="#7FA06A" />
    </svg>
  );
}

export function Radish({ className }: MotifProps) {
  return (
    <svg className={className} viewBox="0 0 48 48">
      <path d="M24 40 q-8 0 -8 -9 q0 -7 8 -9 q8 2 8 9 q0 9 -8 9z" fill="#D96A7A" />
      <path d="M21 37 q3 4 6 4 q-4 2 -7 -1z" fill="#F5EEDD" opacity="0.9" />
      <ellipse cx="20" cy="26" rx="2.5" ry="4" fill="#E890A0" opacity="0.6" />
      <path d="M24 22 l-4 -8 M24 22 v-9 M24 22 l4 -8" stroke="#7FA06A" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Greens({ className }: MotifProps) {
  return (
    <svg className={className} viewBox="0 0 48 48">
      <ellipse cx="24" cy="31" rx="12" ry="9" fill="#8FB07A" />
      <path d="M24 31 q-11 -10 -7 -23 q9 6 7 23z" fill="#7FA06A" />
      <path d="M24 31 q11 -10 7 -23 q-9 6 -7 23z" fill="#9DB889" />
      <path d="M24 31 V9" stroke="#6f9159" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
