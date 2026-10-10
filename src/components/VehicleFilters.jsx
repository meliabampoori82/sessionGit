import { useState } from 'react';
import {
  bodyStyles,
  categories,
  fuelTypes,
  makes,
  modelYears,
  priceBounds,
  transmissions,
  vehicles,
} from '../data/vehicles.js';
import { ArrowRight, Close, Search, Sliders } from './Icons.jsx';

const priceSteps = [90000, 120000, 150000, 200000, 250000, 300000];

const sortOptions = [
  { value: 'featured', label: 'Featured first' },
  { value: 'price-asc', label: 'Price: low to high' },
  { value: 'price-desc', label: 'Price: high to low' },
  { value: 'year-desc', label: 'Year: newest first' },
  { value: 'mileage-asc', label: 'Mileage: lowest first' },
  { value: 'mileage-desc', label: 'Mileage: highest first' },
];

export default function VehicleFilters({ values, onChange, onClear, resultCount }) {
  const [expanded, setExpanded] = useState(false);

  const models = values.make
    ? [...new Set(vehicles.filter((v) => v.make === values.make).map((v) => v.model))].sort()
    : [...new Set(vehicles.map((v) => v.model))].sort();

  const activeChips = [
    values.q && { key: 'q', label: `“${values.q}”` },
    values.make && { key: 'make', label: values.make },
    values.model && { key: 'model', label: values.model },
    values.category && { key: 'category', label: values.category },
    values.bodyStyle && { key: 'bodyStyle', label: values.bodyStyle },
    values.fuel && { key: 'fuel', label: values.fuel },
    values.transmission && { key: 'transmission', label: values.transmission },
    values.year && { key: 'year', label: values.year },
    values.maxPrice && { key: 'maxPrice', label: `under $${Number(values.maxPrice).toLocaleString()}` },
    values.minPrice && { key: 'minPrice', label: `over $${Number(values.minPrice).toLocaleString()}` },
    values.maxMileage && {
      key: 'maxMileage',
      label: `under ${Number(values.maxMileage).toLocaleString()} mi`,
    },
    values.saved && { key: 'saved', label: 'Saved only' },
  ].filter(Boolean);

  return (
    <section className="filters" aria-label="Vehicle search and filters">
      <div className="filters__primary">
        <div className="filters__search">
          <label className="sr-only" htmlFor="filter-q">
            Search vehicles
          </label>
          <Search />
          <input
            id="filter-q"
            type="search"
            placeholder="Search by make, model or keyword"
            value={values.q}
            onChange={(event) => onChange({ q: event.target.value })}
          />
        </div>

        <div className="filters__row">
          <div className="field field--bare">
            <label htmlFor="filter-make">Make</label>
            <select
              id="filter-make"
              value={values.make}
              onChange={(event) => onChange({ make: event.target.value, model: '' })}
            >
              <option value="">All Makes</option>
              {makes.map((make) => (
                <option key={make} value={make}>
                  {make}
                </option>
              ))}
            </select>
          </div>

          <div className="field field--bare">
            <label htmlFor="filter-model">Model</label>
            <select
              id="filter-model"
              value={values.model}
              onChange={(event) => onChange({ model: event.target.value })}
            >
              <option value="">All Models</option>
              {models.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>

          <div className="field field--bare">
            <label htmlFor="filter-maxPrice">Price</label>
            <select
              id="filter-maxPrice"
              value={values.maxPrice}
              onChange={(event) => onChange({ maxPrice: event.target.value })}
            >
              <option value="">Any Price</option>
              {priceSteps.map((step) => (
                <option key={step} value={step}>
                  Under ${step.toLocaleString()}
                </option>
              ))}
            </select>
          </div>

          <div className="field field--bare">
            <label htmlFor="filter-body">Body Style</label>
            <select
              id="filter-body"
              value={values.bodyStyle}
              onChange={(event) => onChange({ bodyStyle: event.target.value })}
            >
              <option value="">All Types</option>
              {bodyStyles.map((style) => (
                <option key={style} value={style}>
                  {style}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            className="btn btn--gold filters__submit"
            onClick={() => document.getElementById('results')?.scrollIntoView({ block: 'start' })}
          >
            Find My Car
            <ArrowRight className="btn__icon" />
          </button>
        </div>
      </div>

      <div className="filters__meta">
        <p className="filters__count">
          <strong>{resultCount}</strong> {resultCount === 1 ? 'vehicle' : 'vehicles'} in this
          collection
        </p>
        <button
          type="button"
          className={`filters__toggle${expanded ? ' is-open' : ''}`}
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          aria-controls="filters-more"
        >
          <Sliders />
          {expanded ? 'Hide filters' : 'More filters'}
        </button>
      </div>

      <div className="filters__more" id="filters-more" hidden={!expanded}>
        <div className="filters__grid">
          <div className="field field--bare">
            <label htmlFor="filter-category">Vehicle type</label>
            <select
              id="filter-category"
              value={values.category}
              onChange={(event) => onChange({ category: event.target.value })}
            >
              <option value="">All types</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="field field--bare">
            <label htmlFor="filter-fuel">Fuel</label>
            <select
              id="filter-fuel"
              value={values.fuel}
              onChange={(event) => onChange({ fuel: event.target.value })}
            >
              <option value="">Any fuel</option>
              {fuelTypes.map((fuel) => (
                <option key={fuel} value={fuel}>
                  {fuel}
                </option>
              ))}
            </select>
          </div>

          <div className="field field--bare">
            <label htmlFor="filter-transmission">Transmission</label>
            <select
              id="filter-transmission"
              value={values.transmission}
              onChange={(event) => onChange({ transmission: event.target.value })}
            >
              <option value="">Any transmission</option>
              {transmissions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="field field--bare">
            <label htmlFor="filter-year">Model year</label>
            <select
              id="filter-year"
              value={values.year}
              onChange={(event) => onChange({ year: event.target.value })}
            >
              <option value="">Any year</option>
              {modelYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="field field--bare">
            <label htmlFor="filter-minPrice">Minimum price</label>
            <input
              id="filter-minPrice"
              type="number"
              min={0}
              step={5000}
              placeholder={`$${priceBounds.min.toLocaleString()}`}
              value={values.minPrice}
              onChange={(event) => onChange({ minPrice: event.target.value })}
            />
          </div>

          <div className="field field--bare">
            <label htmlFor="filter-maxMileage">Maximum mileage</label>
            <input
              id="filter-maxMileage"
              type="number"
              min={0}
              step={500}
              placeholder="Any mileage"
              value={values.maxMileage}
              onChange={(event) => onChange({ maxMileage: event.target.value })}
            />
          </div>

          <div className="field field--bare">
            <label htmlFor="filter-sort">Sort by</label>
            <select
              id="filter-sort"
              value={values.sort}
              onChange={(event) => onChange({ sort: event.target.value })}
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <label className="checkbox">
            <input
              type="checkbox"
              checked={values.saved}
              onChange={(event) => onChange({ saved: event.target.checked })}
            />
            <span>Saved vehicles only</span>
          </label>
        </div>

        {activeChips.length > 0 && (
          <div className="filters__chips">
            {activeChips.map((chip) => (
              <button
                key={chip.key}
                type="button"
                className="chip"
                onClick={() =>
                  onChange({ [chip.key]: chip.key === 'saved' ? false : '' })
                }
              >
                {chip.label}
                <Close />
                <span className="sr-only">Remove filter</span>
              </button>
            ))}
            <button type="button" className="filters__clear" onClick={onClear}>
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
