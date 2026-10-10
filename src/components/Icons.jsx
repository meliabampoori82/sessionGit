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

export const Mark = (props) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden focusable="false" {...props}>
    <path d="M3 27.5h26" />
    <path d="M7.5 27.5V13.2L12.6 9l5.1 4.2v14.3" />
    <path d="M17.7 27.5V17.6h7v9.9" />
    <path d="M10 19.4h5" />
    <circle cx="12.6" cy="5.4" r="1.5" fill="currentColor" stroke="none" />
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

export const Heart = ({ filled = false, ...props }) => (
  <svg {...base} {...props} fill={filled ? 'currentColor' : 'none'}>
    <path d="M12 20s-7.5-4.6-7.5-9.6A4.4 4.4 0 0 1 12 7.6a4.4 4.4 0 0 1 7.5 2.8C19.5 15.4 12 20 12 20Z" />
  </svg>
);

export const Bed = (props) => (
  <Svg {...props}>
    <path d="M3 18v-8" />
    <path d="M3 13h18v5" />
    <path d="M3 10h6a2 2 0 0 1 2 2v1" />
    <path d="M21 18v-4a2 2 0 0 0-2-2h-4" />
    <path d="M7.5 10.5h2.5" />
  </Svg>
);

export const Bath = (props) => (
  <Svg {...props}>
    <path d="M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3Z" />
    <path d="M6.5 12V6.8a2.3 2.3 0 0 1 4.3-1.2" />
    <path d="M6 19l-1 2M18 19l1 2" />
  </Svg>
);

export const Ruler = (props) => (
  <Svg {...props}>
    <path d="M4 15.5 15.5 4l4.5 4.5L8.5 20 4 15.5Z" />
    <path d="m8 11.5 1.8 1.8M11 8.5l1.8 1.8M14 5.5l1.8 1.8" />
  </Svg>
);

export const Calendar = (props) => (
  <Svg {...props}>
    <rect x="3.5" y="5" width="17" height="15" rx="1.6" />
    <path d="M3.5 10h17M8 3.5v3M16 3.5v3" />
  </Svg>
);

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

export const Crown = (props) => (
  <Svg {...props}>
    <path d="M4 8l3.4 3L12 5.5 16.6 11 20 8v9.5H4V8Z" />
    <path d="M4 20h16" />
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

export const Key = (props) => (
  <Svg {...props}>
    <circle cx="8" cy="15" r="3.6" />
    <path d="m10.6 12.6 7-7" />
    <path d="m16.4 6.8 2 2M14.2 9l2 2" />
  </Svg>
);

export const Building = (props) => (
  <Svg {...props}>
    <path d="M4 20.5h16" />
    <path d="M6 20.5V5.5h8v15" />
    <path d="M14 20.5V10h4v10.5" />
    <path d="M8.6 8.6h2.8M8.6 12h2.8M8.6 15.4h2.8M16 13h1.5M16 16.4h1.5" />
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
