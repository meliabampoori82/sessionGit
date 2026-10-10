// Single source of truth for site-wide copy and navigation.
// Contact details are placeholders until real dealership information is provided.
export const site = {
  name: 'Apex Motors',
  tagline: 'Luxury and performance, curated',
  phone: '(555) 018-2400',
  phoneHref: 'tel:+15550182400',
  email: 'showroom@apexmotors.com',
  address: '240 Meridian Boulevard, Los Angeles, California 90045',
  hours: 'Mon – Sat, 9:00 – 19:00',
  hoursNote: 'Closed Sunday',
  demoNotice:
    'Demo site: inventory, contact details and submissions are sample content until connected to a live dealership system.',
};

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Inventory', to: '/inventory' },
  { label: 'Brands', to: '/brands' },
  { label: 'Services', to: '/services' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export const hero = {
  label: 'Drive the extraordinary',
  headline: 'Drive Beyond The Ordinary',
  text: 'Discover exceptional vehicles, uncompromising craftsmanship, and a driving experience designed around you.',
  primaryCta: { label: 'Explore Our Collection', to: '/inventory' },
  secondaryCta: { label: 'Book a Test Drive' },
};

export const about = {
  label: 'About Apex',
  headline: 'More Than Just a Car',
  text: 'At Apex Motors, we believe exceptional vehicles should deliver more than performance. We combine carefully selected vehicles, transparent service, and personalized guidance to make every step of your automotive journey exceptional.',
  cta: { label: 'Discover Our Story', to: '/about' },
};

export const featuredSection = {
  label: 'Our Collection',
  headline: 'Featured Vehicles',
  text: 'Explore a curated collection of exceptional vehicles selected for their design, performance, and quality.',
};

export const whySection = {
  label: 'The Apex Difference',
  headline: 'Confidence in Every Mile',
  text: 'Buying a car should feel considered, not pressured. Here is what that looks like in practice.',
};

export const whyItems = [
  {
    title: 'Carefully Selected Vehicles',
    text: 'Every vehicle is presented with clear specifications and transparent information.',
    icon: 'diamond',
  },
  {
    title: 'Personalized Guidance',
    text: 'Get assistance finding a vehicle that suits your preferences and budget.',
    icon: 'user',
  },
  {
    title: 'Transparent Process',
    text: 'Clear vehicle information and straightforward communication throughout the buying journey.',
    icon: 'shield',
  },
  {
    title: 'Dedicated After-Sales Support',
    text: 'Access dealership assistance and relevant ownership services.',
    icon: 'support',
  },
];

export const services = [
  {
    id: 'luxury-vehicle-sales',
    title: 'Luxury Vehicle Sales',
    text: 'A curated floor of performance and luxury cars, presented with full specifications.',
    image:
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'premium-pre-owned',
    title: 'Premium Pre-Owned Vehicles',
    text: 'Carefully selected pre-owned stock with documented history and condition notes.',
    image:
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'financing-assistance',
    title: 'Vehicle Financing Assistance',
    text: 'Straightforward guidance on lending options, terms and monthly cost.',
    image:
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'vehicle-trade-in',
    title: 'Vehicle Trade-In',
    text: 'A clear, evidence-based valuation of your current car against your next one.',
    image:
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'test-drive-appointments',
    title: 'Test Drive Appointments',
    text: 'Book a time that suits you and drive the car on your own roads.',
    image:
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'vehicle-sourcing',
    title: 'Vehicle Sourcing',
    text: 'Looking for a specific specification? We search beyond the showroom floor.',
    image:
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'ownership-consultation',
    title: 'Ownership Consultation',
    text: 'Servicing intervals, running costs and ownership planning explained simply.',
    image:
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'after-sales-support',
    title: 'After-Sales Support',
    text: 'A single point of contact for anything that follows the handover.',
    image:
      'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80',
  },
];

export const team = [
  {
    id: 'daniel-morgan',
    name: 'Daniel Morgan',
    role: 'Managing Director',
    bio: 'Two decades buying, selling and appraising performance cars across the West Coast.',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80',
    email: 'daniel@apexmotors.com',
  },
  {
    id: 'olivia-carter',
    name: 'Olivia Carter',
    role: 'Luxury Vehicle Specialist',
    bio: 'Guides clients through specification choices, from grand tourers to flagship SUVs.',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80',
    email: 'olivia@apexmotors.com',
  },
  {
    id: 'james-wilson',
    name: 'James Wilson',
    role: 'Automotive Finance Consultant',
    bio: 'Explains lending options plainly and models monthly cost before you commit.',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=900&q=80',
    email: 'james@apexmotors.com',
  },
  {
    id: 'sophia-bennett',
    name: 'Sophia Bennett',
    role: 'Customer Experience Advisor',
    bio: 'Looks after handovers, servicing bookings and everything that follows the sale.',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=80',
    email: 'sophia@apexmotors.com',
  },
];

export const brandNotes = {
  label: 'Marques',
  headline: 'Brands We Curate',
  text: 'We present vehicles from the marques below. Apex Motors is an independent dealership and is not affiliated with, authorised by, or an official partner of any manufacturer.',
};

export const footerCategories = [
  { label: 'Sports Cars', to: '/inventory?category=Sports%20Car' },
  { label: 'Luxury Sedans', to: '/inventory?category=Luxury%20Sedan' },
  { label: 'SUVs', to: '/inventory?bodyStyle=SUV' },
  { label: 'Electric Vehicles', to: '/inventory?fuel=Electric' },
  { label: 'Performance Cars', to: '/inventory?category=Performance%20Coupe' },
];

export const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: 'facebook' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
];

export const ctaSection = {
  headline: 'Your Next Drive Starts Here',
  text: 'Discover your next vehicle with expert guidance and a collection curated around quality, performance, and style.',
  primary: { label: 'Explore Inventory', to: '/inventory' },
  secondary: { label: 'Contact Our Team', to: '/contact' },
};

export const contactSubjects = [
  'Vehicle enquiry',
  'Book a test drive',
  'Financing question',
  'Trade-in valuation',
  'Servicing or after-sales',
  'Something else',
];

export const contactMethods = ['Email', 'Phone', 'Either is fine'];
