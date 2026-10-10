// Minimal line icons. All inherit colour and size from their container.
const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
};

const Svg = ({ children, ...props }) => (
  <svg {...base} {...props}>
    {children}
  </svg>
);

/** Apex mark — an angular "apex" chevron with an accent rule. */
export const Mark = (props) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinejoin="round"
    aria-hidden
    focusable="false"
    {...props}
  >
    <path d="M16 4.5 28 27.5H4L16 4.5Z" />
    <path d="M11.4 20.6h9.2" />
  </svg>
);

export const Phone = (props) => (
  <Svg {...props}>
    <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
  </Svg>
);

export const Mail = (props) => (
  <Svg {...props}>
    <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
    <path d="m3.8 7 8.2 6 8.2-6" />
  </Svg>
);

export const MapPin = (props) => (
  <Svg {...props}>
    <path d="M12 21s6.5-6 6.5-11a6.5 6.5 0 1 0-13 0C5.5 15 12 21 12 21Z" />
    <circle cx="12" cy="10" r="2.4" />
  </Svg>
);

export const Clock = (props) => (
  <Svg {...props}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.4V12l3.2 2" />
  </Svg>
);

export const Heart = ({ filled = false, ...props }) => (
  <svg {...base} {...props} fill={filled ? 'currentColor' : 'none'}>
    <path d="M12 20s-7.5-4.6-7.5-9.6A4.4 4.4 0 0 1 12 7.6a4.4 4.4 0 0 1 7.5 2.8C19.5 15.4 12 20 12 20Z" />
  </svg>
);

/* ---------- Automotive specification icons ---------- */

export const Gauge = (props) => (
  <Svg {...props}>
    <path d="M4 17a8 8 0 1 1 16 0" />
    <path d="m12 17 4-5" />
    <circle cx="12" cy="17" r="1.2" fill="currentColor" stroke="none" />
  </Svg>
);

export const Engine = (props) => (
  <Svg {...props}>
    <path d="M3 15.5v-4h2.5V9h5V7h3.5v2h2l2.5 2.5H21v4h-1.5" />
    <path d="M3 15.5h13.5V17H6.5v-1.5" />
    <path d="M16.5 17v2.5h3V15" />
  </Svg>
);

export const Seat = (props) => (
  <Svg {...props}>
    <path d="M8 4.5h3.2A2.3 2.3 0 0 1 13.5 7l.4 6.4" />
    <path d="M13.9 13.4H8.6a2 2 0 0 0-2 2v4.1" />
    <path d="M6.6 19.5h8.8" />
    <path d="M18.4 8.5v8" />
  </Svg>
);

export const Gearbox = (props) => (
  <Svg {...props}>
    <path d="M7 5v14M12 5v9M17 5v14" />
    <circle cx="7" cy="19" r="1.6" />
    <circle cx="12" cy="14" r="1.6" />
    <circle cx="17" cy="19" r="1.6" />
    <path d="M12 5.5a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Z" />
    <path d="M12 5.5V7M7 7h10" />
  </Svg>
);

export const Fuel = (props) => (
  <Svg {...props}>
    <path d="M12 3.5c2.6 3 4.2 5.4 4.2 7.6a4.2 4.2 0 1 1-8.4 0C7.8 8.9 9.4 6.5 12 3.5Z" />
  </Svg>
);

export const Bolt = (props) => (
  <Svg {...props}>
    <path d="M13.5 3 6.5 13.5H12l-1.5 7.5 7-10.5H12l1.5-7.5Z" />
  </Svg>
);

export const Route = (props) => (
  <Svg {...props}>
    <circle cx="6.5" cy="6" r="2.5" />
    <circle cx="17.5" cy="18" r="2.5" />
    <path d="M9 6h5.5A3.5 3.5 0 0 1 18 9.5v0a3.5 3.5 0 0 1-3.5 3.5h-5A3.5 3.5 0 0 0 6 16.5v0" />
  </Svg>
);

export const Calendar = (props) => (
  <Svg {...props}>
    <rect x="3.5" y="5" width="17" height="15" rx="1.6" />
    <path d="M3.5 10h17M8 3.5v3M16 3.5v3" />
  </Svg>
);

export const Palette = (props) => (
  <Svg {...props}>
    <path d="M12 3.8a8.2 8.2 0 0 0 0 16.4c1.3 0 2-.8 2-1.8 0-1.3-1-1.6-1-2.6 0-.8.7-1.4 1.7-1.4h1.6A3.9 3.9 0 0 0 20.2 10c0-3.5-3.4-6.2-8.2-6.2Z" />
    <circle cx="8.6" cy="9.4" r="1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="7.8" r="1" fill="currentColor" stroke="none" />
    <circle cx="8.2" cy="13.6" r="1" fill="currentColor" stroke="none" />
  </Svg>
);

export const Tag = (props) => (
  <Svg {...props}>
    <path d="M4 11V5.2A1.2 1.2 0 0 1 5.2 4H11l8.5 8.5a1.6 1.6 0 0 1 0 2.3l-4.7 4.7a1.6 1.6 0 0 1-2.3 0L4 11Z" />
    <circle cx="8" cy="8" r="1.2" fill="currentColor" stroke="none" />
  </Svg>
);

export const Shield = (props) => (
  <Svg {...props}>
    <path d="M12 3.5 5 6.2v5.4c0 4.1 2.9 7.6 7 8.9 4.1-1.3 7-4.8 7-8.9V6.2L12 3.5Z" />
    <path d="m9.2 11.8 1.9 1.9 3.7-3.9" />
  </Svg>
);

export const User = (props) => (
  <Svg {...props}>
    <circle cx="12" cy="8.5" r="3.8" />
    <path d="M5 20c.8-3.6 3.6-5.6 7-5.6S18.2 16.4 19 20" />
  </Svg>
);

export const Globe = (props) => (
  <Svg {...props}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17" />
    <path d="M12 3.5c2.2 2.3 3.3 5.3 3.3 8.5s-1.1 6.2-3.3 8.5c-2.2-2.3-3.3-5.3-3.3-8.5S9.8 5.8 12 3.5Z" />
  </Svg>
);

export const Diamond = (props) => (
  <Svg {...props}>
    <path d="M7.5 4h9l4 5.5L12 20.5 3.5 9.5 7.5 4Z" />
    <path d="M3.5 9.5h17M12 20.5 9 9.5l3-5.5 3 5.5-3 11" />
  </Svg>
);

export const Support = (props) => (
  <Svg {...props}>
    <path d="M4.5 15v-3a7.5 7.5 0 0 1 15 0v3" />
    <rect x="3" y="13.5" width="4" height="6" rx="1.4" />
    <rect x="17" y="13.5" width="4" height="6" rx="1.4" />
    <path d="M19 19.5v.6a2.4 2.4 0 0 1-2.4 2.4H13" />
  </Svg>
);

export const Star = (props) => (
  <Svg {...props}>
    <path d="m12 3.8 2.6 5.3 5.9.8-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8L3.5 9.9l5.9-.8L12 3.8Z" />
  </Svg>
);

export const Sparkle = (props) => (
  <Svg {...props}>
    <path d="M12 3.5 13.6 9 19 10.6 13.6 12.2 12 17.7 10.4 12.2 5 10.6 10.4 9 12 3.5Z" />
    <path d="M18.5 16.5l.7 2.1 2.1.7-2.1.7-.7 2.1-.7-2.1-2.1-.7 2.1-.7.7-2.1Z" />
  </Svg>
);

/* ---------- UI ---------- */

export const ArrowRight = (props) => (
  <Svg {...props}>
    <path d="M4.5 12h15" />
    <path d="m13.5 6 6 6-6 6" />
  </Svg>
);

export const ArrowLeft = (props) => (
  <Svg {...props}>
    <path d="M19.5 12h-15" />
    <path d="m10.5 18-6-6 6-6" />
  </Svg>
);

export const ArrowUpRight = (props) => (
  <Svg {...props}>
    <path d="M7 17 17 7" />
    <path d="M8.5 7H17v8.5" />
  </Svg>
);

export const Close = (props) => (
  <Svg {...props}>
    <path d="M5.5 5.5l13 13M18.5 5.5l-13 13" />
  </Svg>
);

export const Menu = (props) => (
  <Svg {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
);

export const Search = (props) => (
  <Svg {...props}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 4 4" />
  </Svg>
);

export const Sliders = (props) => (
  <Svg {...props}>
    <path d="M4 8h10M18 8h2M4 16h4M12 16h8" />
    <circle cx="16" cy="8" r="2" />
    <circle cx="10" cy="16" r="2" />
  </Svg>
);

export const Check = (props) => (
  <Svg {...props}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </Svg>
);

export const CheckCircle = (props) => (
  <Svg {...props}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="m8 12.2 2.6 2.6L16 9.4" />
  </Svg>
);

export const Info = (props) => (
  <Svg {...props}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 11v5.5M12 8v.1" />
  </Svg>
);

export const Expand = (props) => (
  <Svg {...props}>
    <path d="M9 4H4v5M15 4h5v5M15 20h5v-5M9 20H4v-5" />
  </Svg>
);

export const ChevronLeft = (props) => (
  <Svg {...props}>
    <path d="m14.5 6-6 6 6 6" />
  </Svg>
);

export const ChevronRight = (props) => (
  <Svg {...props}>
    <path d="m9.5 6 6 6-6 6" />
  </Svg>
);

export const ChevronDown = (props) => (
  <Svg {...props}>
    <path d="m6 9.5 6 6 6-6" />
  </Svg>
);

export const Plus = (props) => (
  <Svg {...props}>
    <path d="M12 5v14M5 12h14" />
  </Svg>
);

export const Minus = (props) => (
  <Svg {...props}>
    <path d="M5 12h14" />
  </Svg>
);

export const Spinner = (props) => (
  <Svg {...props}>
    <path d="M12 4.5v4M12 15.5v4M4.5 12h4M15.5 12h4M6.7 6.7l2.8 2.8M14.5 14.5l2.8 2.8M17.3 6.7l-2.8 2.8M9.5 14.5l-2.8 2.8" />
  </Svg>
);

export const Instagram = (props) => (
  <Svg {...props}>
    <rect x="4" y="4" width="16" height="16" rx="4.5" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="16.9" cy="7.1" r=".9" fill="currentColor" stroke="none" />
  </Svg>
);

export const Facebook = (props) => (
  <Svg {...props}>
    <path d="M14.5 8.5h2V5.6h-2.3c-2 0-3.2 1.2-3.2 3.3v1.7H9v3h2v6.8h3v-6.8h2.2l.5-3H14v-1.4c0-.5.2-.7.5-.7Z" />
  </Svg>
);

export const Linkedin = (props) => (
  <Svg {...props}>
    <rect x="4" y="4" width="16" height="16" rx="2.5" />
    <path d="M8 10.5v6M8 7.6v.1M12 16.5v-6M12 12.6c0-1.2.9-2.1 2-2.1s2 .9 2 2.1v3.9" />
  </Svg>
);

/** Icon registry used by data-driven sections (why items, services, socials). */
export const iconMap = {
  diamond: Diamond,
  user: User,
  shield: Shield,
  support: Support,
  star: Star,
  globe: Globe,
  sparkle: Sparkle,
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
};
