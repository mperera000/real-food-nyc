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
      <path d="M18 18 Q24 15 30 18 L24 40 Z" fill="#E0975E" />
      <path d="M20 23 h8 M21 28 h6 M22 33 h4" stroke="#CF8348" strokeWidth="1" opacity="0.45" />
      <path d="M24 18 l-5 -6 M24 17 v-8 M24 18 l5 -6" stroke="#7FA06A" strokeWidth="3" strokeLinecap="round" />
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
      <path d="M24 41 C16 34 12 24 13 15 C20 20 24 30 24 41z" fill="#8FB07A" />
      <path d="M24 41 C32 34 36 24 35 15 C28 20 24 30 24 41z" fill="#7FA06A" />
      <path d="M24 41 C21 30 22 18 24 10 C26 18 27 30 24 41z" fill="#9DB889" />
      <path d="M18 21 C22 26 23 33 24 41 M30 21 C26 26 25 33 24 41" stroke="#6f9159" strokeWidth="0.8" fill="none" opacity="0.5" />
    </svg>
  );
}

export function Milk({ className }: MotifProps) {
  return (
    <svg className={className} viewBox="0 0 48 48">
      <rect x="21" y="9" width="6" height="3" rx="1" fill="#93AEB8" />
      <rect x="22" y="12" width="4" height="5" fill="#E4EBED" />
      <path d="M18 23 q0 -6 6 -6 q6 0 6 6 l0 13 q0 2 -2 2 l-8 0 q-2 0 -2 -2z" fill="#E4EBED" stroke="#9FB6BE" strokeWidth="1.3" />
      <rect x="18.5" y="28" width="11" height="7" rx="1" fill="#C4D5DA" />
      <path d="M21 31 h6" stroke="#93AEB8" strokeWidth="1" />
    </svg>
  );
}

export function Asparagus({ className }: MotifProps) {
  return (
    <svg className={className} viewBox="0 0 48 48">
      <path d="M18 42 C18 30 18 18 20 13" stroke="#8FB07A" strokeWidth="3.2" strokeLinecap="round" fill="none" />
      <path d="M24 42 C24 28 24 16 24 11" stroke="#7FA06A" strokeWidth="3.6" strokeLinecap="round" fill="none" />
      <path d="M30 42 C30 30 30 18 28 13" stroke="#6f9159" strokeWidth="3.2" strokeLinecap="round" fill="none" />
      <ellipse cx="20" cy="12" rx="2" ry="3.5" fill="#5C7D49" />
      <ellipse cx="24" cy="10" rx="2.2" ry="4" fill="#5C7D49" />
      <ellipse cx="28" cy="12" rx="2" ry="3.5" fill="#5C7D49" />
      <rect x="15" y="28" width="18" height="4" rx="2" fill="#DBA13A" />
    </svg>
  );
}

export function Garlic({ className }: MotifProps) {
  return (
    <svg className={className} viewBox="0 0 48 48">
      <path d="M24 40 q-9 0 -9 -11 q0 -8 9 -14 q9 6 9 14 q0 11 -9 11z" fill="#EBE1C7" stroke="#C2AF83" strokeWidth="1.3" />
      <path d="M24 15 v-5" stroke="#A8935F" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 40 q-4 -1 -6 -11 M24 40 q4 -1 6 -11 M24 40 V16" stroke="#C2AF83" strokeWidth="1" fill="none" opacity="0.85" />
    </svg>
  );
}

export function Eggs({ className }: MotifProps) {
  return (
    <svg className={className} viewBox="0 0 48 48">
      <ellipse cx="20" cy="31" rx="7" ry="9" fill="#F3ECDC" stroke="#C9B78E" strokeWidth="1.3" />
      <ellipse cx="29" cy="28" rx="7" ry="9" fill="#F7F1E4" stroke="#C9B78E" strokeWidth="1.3" />
      <ellipse cx="27" cy="24" rx="2.4" ry="3.4" fill="#FDFAF2" opacity="0.7" />
    </svg>
  );
}
