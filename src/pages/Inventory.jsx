import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { inventoryNote, vehicles } from '../data/vehicles.js';
import { useFavorites } from '../context/FavoritesContext.jsx';
import PageBanner from '../components/PageBanner.jsx';
import VehicleCard from '../components/VehicleCard.jsx';
import VehicleFilters from '../components/VehicleFilters.jsx';
import Reveal from '../components/Reveal.jsx';
import { ArrowRight, Search } from '../components/Icons.jsx';

const defaults = {
  q: '',
  make: '',
  model: '',
  category: '',
  bodyStyle: '',
  fuel: '',
  transmission: '',
  minPrice: '',
  maxPrice: '',
  year: '',
  maxMileage: '',
  sort: 'featured',
  saved: false,
};

const fromParams = (params) => ({
  ...defaults,
  q: params.get('q') ?? '',
  make: params.get('make') ?? '',
  model: params.get('model') ?? '',
  category: params.get('category') ?? '',
  bodyStyle: params.get('bodyStyle') ?? '',
  fuel: params.get('fuel') ?? '',
  transmission: params.get('transmission') ?? '',
  minPrice: params.get('minPrice') ?? '',
  maxPrice: params.get('maxPrice') ?? '',
  year: params.get('year') ?? '',
  maxMileage: params.get('maxMileage') ?? '',
  sort: params.get('sort') ?? 'featured',
  saved: params.get('saved') === '1',
});

export default function Inventory() {
  const [params] = useSearchParams();
  const { favorites, isFavorite } = useFavorites();
  const [values, setValues] = useState(() => fromParams(params));

  const paramKey = params.toString();
  useEffect(() => {
    setValues(fromParams(params));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramKey]);

  const results = useMemo(() => {
    const query = values.q.trim().toLowerCase();
    const list = vehicles.filter((vehicle) => {
      if (values.saved && !favorites.includes(vehicle.id)) return false;
      if (values.make && vehicle.make !== values.make) return false;
      if (values.model && vehicle.model !== values.model) return false;
      if (values.category && vehicle.category !== values.category) return false;
      if (values.bodyStyle && vehicle.bodyStyle !== values.bodyStyle) return false;
      if (values.fuel && vehicle.fuel !== values.fuel) return false;
      if (values.transmission && vehicle.transmission !== values.transmission) return false;
      if (values.year && String(vehicle.year) !== String(values.year)) return false;
      if (values.minPrice && vehicle.price < Number(values.minPrice)) return false;
      if (values.maxPrice && vehicle.price > Number(values.maxPrice)) return false;
      if (values.maxMileage && vehicle.mileage > Number(values.maxMileage)) return false;
      if (query) {
        const haystack = [
          vehicle.make,
          vehicle.model,
          vehicle.category,
          vehicle.bodyStyle,
          vehicle.fuel,
          vehicle.transmission,
          vehicle.exteriorColor,
          vehicle.interiorColor,
          vehicle.engine,
          String(vehicle.year),
        ]
          .join(' ')
          .toLowerCase();
        if (!haystack.includes(query)) return false;
      }
      return true;
    });

    const sorted = [...list];
    switch (values.sort) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'year-desc':
        sorted.sort((a, b) => b.year - a.year);
        break;
      case 'mileage-asc':
        sorted.sort((a, b) => a.mileage - b.mileage);
        break;
      case 'mileage-desc':
        sorted.sort((a, b) => b.mileage - a.mileage);
        break;
      default:
        sorted.sort((a, b) => Number(b.featured) - Number(a.featured) || b.price - a.price);
    }
    return sorted;
  }, [values, favorites, isFavorite]);

  const onChange = (patch) => setValues((current) => ({ ...current, ...patch }));
  const onClear = () => setValues({ ...defaults });

  return (
    <>
      <PageBanner
        label="Inventory"
        title="Find Your Next Car"
        text="Browse the full demonstration collection by make, model, price, body style and specification."
        crumbs={[{ label: 'Inventory' }]}
      />

      <section className="section section--tight inventory">
        <div className="shell">
          <VehicleFilters
            values={values}
            onChange={onChange}
            onClear={onClear}
            resultCount={results.length}
          />

          <div id="results" className="inventory__results">
            {results.length > 0 ? (
              <ul className="inventory__grid">
                {results.map((vehicle, index) => (
                  <Reveal as="li" key={vehicle.id} delay={Math.min(index, 6) * 50}>
                    <VehicleCard vehicle={vehicle} eager={index < 3} />
                  </Reveal>
                ))}
              </ul>
            ) : (
              <div className="empty-state">
                <Search className="empty-state__icon" />
                <h2>No vehicles match those filters</h2>
                <p>
                  Try widening the price range, removing the model year, or clearing the search
                  term.
                </p>
                <button type="button" className="btn btn--gold" onClick={onClear}>
                  Clear all filters
                  <ArrowRight className="btn__icon" />
                </button>
              </div>
            )}
          </div>

          <p className="inventory__note">{inventoryNote}</p>
        </div>
      </section>
    </>
  );
}
