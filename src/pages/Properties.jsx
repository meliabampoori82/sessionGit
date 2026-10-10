import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageBanner from '../components/PageBanner.jsx';
import PropertyCard from '../components/PropertyCard.jsx';
import Reveal from '../components/Reveal.jsx';
import { Heart, Search } from '../components/Icons.jsx';
import { useFavorites } from '../context/FavoritesContext.jsx';
import { locations, priceBounds, properties, propertyTypes } from '../data/properties.js';

const PER_PAGE = 6;

const priceOptions = [
  { value: 'any', label: 'Any price' },
  { value: '2000000', label: 'Up to $2M' },
  { value: '3000000', label: 'Up to $3M' },
  { value: '5000000', label: 'Up to $5M' },
  { value: '10000000', label: 'Up to $10M' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured first' },
  { value: 'price-asc', label: 'Price: low to high' },
  { value: 'price-desc', label: 'Price: high to low' },
  { value: 'size-desc', label: 'Largest first' },
];

const defaults = {
  q: '',
  location: 'any',
  type: 'any',
  maxPrice: 'any',
  beds: 'any',
  baths: 'any',
  sort: 'featured',
};

export default function Properties() {
  const [params, setParams] = useSearchParams();
  const [filters, setFilters] = useState(defaults);
  const [savedOnly, setSavedOnly] = useState(params.get('saved') === '1');
  const [page, setPage] = useState(1);
  const { favorites } = useFavorites();

  const set = (key) => (event) => {
    const { value } = event.target;
    setFilters((current) => ({ ...current, [key]: value }));
    setPage(1);
  };

  const reset = () => {
    setFilters(defaults);
    setSavedOnly(false);
    setPage(1);
    if (params.get('saved')) setParams({}, { replace: true });
  };

  const toggleSaved = () => {
    const next = !savedOnly;
    setSavedOnly(next);
    setPage(1);
    if (next) setParams({ saved: '1' }, { replace: true });
    else setParams({}, { replace: true });
  };

  const results = useMemo(() => {
    const query = filters.q.trim().toLowerCase();
    const list = properties.filter((property) => {
      if (query) {
        const haystack = `${property.name} ${property.location} ${property.type}`.toLowerCase();
        if (!haystack.includes(query)) return false;
      }
      if (filters.location !== 'any' && `${property.city}, ${property.state}` !== filters.location)
        return false;
      if (filters.type !== 'any' && property.type !== filters.type) return false;
      if (filters.maxPrice !== 'any' && property.price > Number(filters.maxPrice)) return false;
      if (filters.beds !== 'any' && property.beds < Number(filters.beds)) return false;
      if (filters.baths !== 'any' && property.baths < Number(filters.baths)) return false;
      if (savedOnly && !favorites.includes(property.id)) return false;
      return true;
    });

    const sorted = [...list];
    if (filters.sort === 'price-asc') sorted.sort((a, b) => a.price - b.price);
    if (filters.sort === 'price-desc') sorted.sort((a, b) => b.price - a.price);
    if (filters.sort === 'size-desc') sorted.sort((a, b) => b.sqft - a.sqft);
    if (filters.sort === 'featured')
      sorted.sort((a, b) => Number(b.featured) - Number(a.featured) || b.price - a.price);
    return sorted;
  }, [filters, savedOnly, favorites]);

  const pages = Math.max(1, Math.ceil(results.length / PER_PAGE));
  const current = Math.min(page, pages);
  const visible = results.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  return (
    <div>
      <PageBanner
        label="Inventory"
        title="Browse Our Properties"
        intro="A curated selection of luxury homes, estates and penthouses across nine prime markets."
        image={properties[3].images[0]}
      />

      <div className="shell" style={{ paddingBottom: 'clamp(60px, 8vw, 110px)' }}>
        <div className="filters">
          <div className="filters__row">
            <div className="field">
              <label htmlFor="f-q">Search</label>
              <input
                id="f-q"
                className="input"
                type="search"
                placeholder="Name, city or type"
                value={filters.q}
                onChange={set('q')}
              />
            </div>

            <div className="field">
              <label htmlFor="f-location">Location</label>
              <select id="f-location" className="select" value={filters.location} onChange={set('location')}>
                <option value="any">Any location</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="f-type">Property type</label>
              <select id="f-type" className="select" value={filters.type} onChange={set('type')}>
                <option value="any">Any type</option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="f-price">Max price</label>
              <select id="f-price" className="select" value={filters.maxPrice} onChange={set('maxPrice')}>
                {priceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="f-beds">Bedrooms</label>
              <select id="f-beds" className="select" value={filters.beds} onChange={set('beds')}>
                <option value="any">Any</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>
          </div>

          <div className="filters__row">
            <div className="field">
              <label htmlFor="f-baths">Bathrooms</label>
              <select id="f-baths" className="select" value={filters.baths} onChange={set('baths')}>
                <option value="any">Any</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="6">6+</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="f-sort">Sort by</label>
              <select id="f-sort" className="select" value={filters.sort} onChange={set('sort')}>
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <span className="field__label">Saved</span>
              <button
                type="button"
                className={`chip${savedOnly ? ' is-on' : ''}`}
                onClick={toggleSaved}
                aria-pressed={savedOnly}
              >
                <Heart filled={savedOnly} />
                {favorites.length} saved
              </button>
            </div>

            <div className="field">
              <span className="field__label">&nbsp;</span>
              <button type="button" className="btn btn--outline" onClick={reset}>
                Reset filters
              </button>
            </div>
          </div>
        </div>

        <div className="filters__meta">
          <p className="filters__count">
            <strong>{results.length}</strong> {results.length === 1 ? 'property' : 'properties'}
            {savedOnly ? ' in your saved list' : ''} · {priceBounds.min.toLocaleString('en-US')} –{' '}
            {priceBounds.max.toLocaleString('en-US')} USD
          </p>
          <p className="filters__count">
            Showing page {current} of {pages}
          </p>
        </div>

        {visible.length === 0 ? (
          <div className="empty-state">
            <Search style={{ width: 28, height: 28, color: 'var(--champagne)', margin: '0 auto 18px' }} />
            <h3>No properties match those filters</h3>
            <p>Try widening the price range or clearing the location filter.</p>
            <button type="button" className="btn btn--navy" onClick={reset}>
              Reset filters
            </button>
          </div>
        ) : (
          <div className="prop-grid">
            {visible.map((property, index) => (
              <Reveal key={property.id} delay={(index % 3) * 70}>
                <PropertyCard property={property} />
              </Reveal>
            ))}
          </div>
        )}

        {pages > 1 && (
          <nav className="pagination" aria-label="Pagination">
            <button
              type="button"
              onClick={() => setPage(current - 1)}
              disabled={current === 1}
              aria-label="Previous page"
            >
              Prev
            </button>
            {Array.from({ length: pages }, (_, index) => index + 1).map((number) => (
              <button
                key={number}
                type="button"
                className={number === current ? 'is-on' : ''}
                onClick={() => setPage(number)}
                aria-current={number === current ? 'page' : undefined}
              >
                {number}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setPage(current + 1)}
              disabled={current === pages}
              aria-label="Next page"
            >
              Next
            </button>
          </nav>
        )}
      </div>
    </div>
  );
}
