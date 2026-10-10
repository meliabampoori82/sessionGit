// Property catalogue. Shaped like a database row set so it can be swapped for a
// real API/table later without touching the components that read it.
// `price` is a number in USD; format with `formatPrice`.

const img = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const pool = {
  lakeside: 'photo-1600596542815-ffad4c1539a9',
  glass: 'photo-1600607687939-ce8a6c25118c',
  desert: 'photo-1512917774080-9991f1c4c750',
  ocean: 'photo-1613490493576-7fde63acd811',
  hillside: 'photo-1600047509807-ba8f99d2cdde',
  palm: 'photo-1580587771525-78b9dba3b914',
  tahoe: 'photo-1568605114967-8130f3a36994',
  penthouse: 'photo-1570129477492-45c003edd2be',
  garden: 'photo-1583608205776-bfd35f0d9f83',
  court: 'photo-1449844908441-8829872d2607',
  deck: 'photo-1523217582562-09d0def993a6',
  brick: 'photo-1564013799919-ab600027ffc6',
  interior: 'photo-1600566753086-00f18fb6b3ea',
  living: 'photo-1600210492486-724fe5c67fb0',
  kitchen: 'photo-1502672260266-1c1ef2d93688',
  lounge: 'photo-1560448204-e02f11c3d0e2',
};

export const gallery = {
  exterior: img(pool.lakeside),
  glass: img(pool.glass),
  interior: img(pool.interior),
  living: img(pool.living),
  kitchen: img(pool.kitchen),
  lounge: img(pool.lounge),
};

export const heroImage = img(pool.ocean, 2200);
export const aboutImages = {
  main: img(pool.glass, 1400),
  side: img(pool.living, 800),
};

export const properties = [
  {
    id: 'lakeside-modern-villa',
    name: 'Lakeside Modern Villa',
    city: 'Austin',
    state: 'Texas',
    country: 'USA',
    location: 'Austin, Texas, USA',
    price: 2350000,
    type: 'Villa',
    beds: 5,
    baths: 4,
    sqft: 4200,
    year: 2021,
    featured: true,
    description:
      'A horizontal composition of glass and pale stone set directly on the water, with a cantilevered living wing that opens entirely to the lake. Interiors are calm and continuous, finished in oak, limestone and brushed brass.',
    features: [
      'Infinity edge pool over the lake',
      'Double-height glazed living wing',
      'Chef’s kitchen with stone island',
      'Primary suite with private terrace',
      'Four-car garage and motor court',
    ],
    amenities: [
      'Smart home automation',
      'Wine room',
      'Home cinema',
      'Gym and wellness suite',
      'Boat dock',
      'Guest house',
    ],
    images: [
      img(pool.lakeside),
      img(pool.living),
      img(pool.kitchen),
      img(pool.glass),
      img(pool.lounge),
    ],
    featuredPosition: 0,
  },
  {
    id: 'pacific-glass-house',
    name: 'Pacific Glass House',
    city: 'Malibu',
    state: 'California',
    country: 'USA',
    location: 'Malibu, California, USA',
    price: 4800000,
    type: 'Villa',
    beds: 6,
    baths: 5,
    sqft: 5600,
    year: 2020,
    featured: true,
    description:
      'An ocean-facing glass pavilion where every principal room looks straight down the coastline. Retractable walls dissolve the boundary between the living space, the terrace and the Pacific beyond.',
    features: [
      'Uninterrupted ocean frontage',
      'Retractable glass walls',
      'Roof terrace with outdoor kitchen',
      'Solar and battery storage',
      'Direct beach access',
    ],
    amenities: [
      'Heated infinity pool',
      'Spa and sauna',
      'Wine cellar',
      'Elevator',
      'Gated entry',
      'EV charging',
    ],
    images: [
      img(pool.glass),
      img(pool.lounge),
      img(pool.interior),
      img(pool.kitchen),
      img(pool.ocean),
    ],
    featuredPosition: 1,
  },
  {
    id: 'desert-horizon-estate',
    name: 'Desert Horizon Estate',
    city: 'Scottsdale',
    state: 'Arizona',
    country: 'USA',
    location: 'Scottsdale, Arizona, USA',
    price: 3150000,
    type: 'Estate',
    beds: 5,
    baths: 5,
    sqft: 6100,
    year: 2019,
    featured: false,
    description:
      'Low, long and deliberately quiet, the house frames the desert with deep overhangs and shaded courtyards. Materials are drawn from the site: rammed earth, travertine and weathered steel.',
    features: [
      'Single-level desert modern plan',
      'Shaded courtyards and reflecting pool',
      'Detached casita',
      'Desert-native landscaping',
      'Mountain panorama from every room',
    ],
    amenities: [
      'Resort pool and spa',
      'Outdoor fireplace',
      'Home office wing',
      'Climate-controlled garage',
      'Firepit terrace',
      'Security system',
    ],
    images: [
      img(pool.desert),
      img(pool.interior),
      img(pool.deck),
      img(pool.living),
      img(pool.garden),
    ],
    featuredPosition: 2,
  },
  {
    id: 'oceanfront-residence',
    name: 'Oceanfront Residence',
    city: 'Miami',
    state: 'Florida',
    country: 'USA',
    location: 'Miami, Florida, USA',
    price: 5200000,
    type: 'Residence',
    beds: 6,
    baths: 6,
    sqft: 7200,
    year: 2022,
    featured: true,
    description:
      'A contemporary waterfront residence with 60 metres of private frontage, a double-height arrival hall and a summer kitchen that opens to the pool deck for entertaining at scale.',
    features: [
      '60 metres of private water frontage',
      'Double-height arrival hall',
      'Summer kitchen and pool deck',
      'Dock for a 20-metre vessel',
      'Staff and guest quarters',
    ],
    amenities: [
      'Waterfront pool',
      'Private dock',
      'Cinema room',
      'Gym',
      'Wine wall',
      'Smart glazing',
    ],
    images: [
      img(pool.ocean),
      img(pool.living),
      img(pool.kitchen),
      img(pool.glass),
      img(pool.lounge),
    ],
    featuredPosition: 3,
  },
  {
    id: 'modern-hillside-retreat',
    name: 'Modern Hillside Retreat',
    city: 'Los Angeles',
    state: 'California',
    country: 'USA',
    location: 'Los Angeles, California, USA',
    price: 3750000,
    type: 'Villa',
    beds: 4,
    baths: 4,
    sqft: 4400,
    year: 2020,
    featured: false,
    description:
      'Terraced into the hillside so that each level holds its own terrace and view, the house moves from shaded garden to open sky in three calm steps.',
    features: [
      'Three terraced levels',
      'Cantilevered pool deck',
      'Floor-to-ceiling glazing',
      'Native hillside planting',
      'Separate studio',
    ],
    amenities: [
      'Infinity pool',
      'Outdoor shower',
      'Yoga terrace',
      'Two-car garage',
      'Firepit lounge',
      'Drip irrigation',
    ],
    images: [
      img(pool.hillside),
      img(pool.deck),
      img(pool.interior),
      img(pool.garden),
      img(pool.lounge),
    ],
    featuredPosition: 4,
  },
  {
    id: 'palm-garden-residence',
    name: 'Palm Garden Residence',
    city: 'Beverly Hills',
    state: 'California',
    country: 'USA',
    location: 'Beverly Hills, California, USA',
    price: 6400000,
    type: 'Estate',
    beds: 7,
    baths: 7,
    sqft: 8400,
    year: 2018,
    featured: true,
    description:
      'A gated estate arranged around a mature palm garden, with formal reception rooms to the front and a relaxed family wing opening to the lawn and pool at the rear.',
    features: [
      'Gated half-acre garden plot',
      'Formal reception and library',
      'Family wing with open-plan kitchen',
      'Pool house with changing suite',
      'Motor court for six cars',
    ],
    amenities: [
      'Show pool and spa',
      'Library',
      'Wine room and tasting table',
      'Gym and treatment room',
      'Staff apartment',
      'Full-house automation',
    ],
    images: [
      img(pool.palm),
      img(pool.garden),
      img(pool.interior),
      img(pool.kitchen),
      img(pool.lounge),
    ],
    featuredPosition: 5,
  },
  {
    id: 'contemporary-lake-house',
    name: 'Contemporary Lake House',
    city: 'Lake Tahoe',
    state: 'Nevada',
    country: 'USA',
    location: 'Lake Tahoe, Nevada, USA',
    price: 2950000,
    type: 'House',
    beds: 4,
    baths: 3,
    sqft: 3800,
    year: 2021,
    featured: false,
    description:
      'Timber, stone and glass in equal measure, built for long winters and clear-water summers. The great room rises to a ridge skylight above the fireplace wall.',
    features: [
      'Timber and stone great room',
      'Ridge skylight',
      'Private lake access',
      'Heated boot and ski room',
      'Guest wing',
    ],
    amenities: [
      'Hot tub terrace',
      'Ski storage',
      'Chef’s kitchen',
      'Home office',
      'Two decks',
      'Radiant heating',
    ],
    images: [
      img(pool.tahoe),
      img(pool.deck),
      img(pool.living),
      img(pool.interior),
      img(pool.court),
    ],
    featuredPosition: 6,
  },
  {
    id: 'architectural-downtown-penthouse',
    name: 'Architectural Downtown Penthouse',
    city: 'Austin',
    state: 'Texas',
    country: 'USA',
    location: 'Austin, Texas, USA',
    price: 1850000,
    type: 'Penthouse',
    beds: 3,
    baths: 3,
    sqft: 2600,
    year: 2023,
    featured: false,
    description:
      'A full-floor penthouse above the city with wraparound glazing, a private lift lobby and a planted terrace that turns the skyline into a living backdrop.',
    features: [
      'Full-floor private lift lobby',
      'Wraparound glazing',
      'Planted 300 sq ft terrace',
      'Two secure parking bays',
      'Concierge building',
    ],
    amenities: [
      'Residents’ pool',
      'Residents’ gym',
      'Concierge',
      'Wine storage',
      'Terrace kitchen',
      'Storage unit',
    ],
    images: [
      img(pool.penthouse),
      img(pool.lounge),
      img(pool.kitchen),
      img(pool.living),
      img(pool.interior),
    ],
    featuredPosition: 7,
  },
];

export const propertyTypes = ['Villa', 'Estate', 'Residence', 'House', 'Penthouse'];

export const locations = [...new Set(properties.map((p) => `${p.city}, ${p.state}`))].sort();

export const getPropertyById = (id) => properties.find((p) => p.id === id);

export const similarProperties = (property, count = 3) =>
  properties
    .filter((p) => p.id !== property.id)
    .sort((a, b) => {
      const score = (item) =>
        (item.type === property.type ? 2 : 0) +
        (item.state === property.state ? 1 : 0);
      return score(b) - score(a);
    })
    .slice(0, count);

export const propertyLeadImage = (id) => properties.find((p) => p.id === id)?.images[0];

export const formatPrice = (value) => {
  if (value >= 1000000) {
    const millions = value / 1000000;
    return `$${millions.toFixed(2).replace(/\.00$/, '')} Million`;
  }
  return `$${value.toLocaleString('en-US')}`;
};

export const priceBounds = {
  min: Math.min(...properties.map((p) => p.price)),
  max: Math.max(...properties.map((p) => p.price)),
};
