import { Link, Navigate, useParams } from 'react-router-dom';
import {
  formatMileage,
  formatPrice,
  getVehicleById,
  inventoryNote,
  similarVehicles,
  vehicleTitle,
} from '../data/vehicles.js';
import { site } from '../data/site.js';
import { useFavorites } from '../context/FavoritesContext.jsx';
import { useBooking } from '../context/BookingContext.jsx';
import Carousel from '../components/Carousel.jsx';
import FinanceCalculator from '../components/FinanceCalculator.jsx';
import Gallery from '../components/Gallery.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import VehicleCard from '../components/VehicleCard.jsx';
import {
  ArrowRight,
  Bolt,
  Check,
  ChevronRight,
  Engine,
  Fuel,
  Gauge,
  Gearbox,
  Heart,
  Palette,
  Phone,
  Route,
  Seat,
  Shield,
  Sparkle,
} from '../components/Icons.jsx';

const specGroups = (vehicle) => [
  { label: 'Key features', icon: Sparkle, items: vehicle.features },
  { label: 'Safety features', icon: Shield, items: vehicle.safety },
  { label: 'Technology', icon: Bolt, items: vehicle.technology },
  { label: 'Performance', icon: Gauge, items: vehicle.performance },
];

export default function VehicleDetail() {
  const { id } = useParams();
  const vehicle = getVehicleById(id);
  const { isFavorite, toggleFavorite } = useFavorites();
  const { openBooking } = useBooking();

  if (!vehicle) return <Navigate to="/inventory" replace />;

  const title = vehicleTitle(vehicle);
  const saved = isFavorite(vehicle.id);

  const specs = [
    { label: 'Mileage', value: formatMileage(vehicle.mileage), icon: Route },
    { label: 'Transmission', value: vehicle.transmission, icon: Gearbox },
    { label: 'Engine', value: vehicle.engine, icon: Engine },
    { label: 'Power', value: `${vehicle.horsepower} hp`, icon: Gauge },
    { label: 'Torque', value: `${vehicle.torque} lb-ft`, icon: Gauge },
    { label: 'Drivetrain', value: vehicle.drivetrain, icon: Gearbox },
    { label: 'Fuel', value: vehicle.fuel, icon: vehicle.fuel === 'Electric' ? Bolt : Fuel },
    { label: 'Body style', value: vehicle.bodyStyle, icon: Seat },
    { label: 'Exterior', value: vehicle.exteriorColor, icon: Palette },
    { label: 'Interior', value: vehicle.interiorColor, icon: Palette },
    { label: 'Seats', value: `${vehicle.seats} seats`, icon: Seat },
    { label: 'Condition', value: vehicle.condition, icon: Shield },
  ];

  return (
    <>
      <div className="detail">
        <div className="shell">
          <nav className="crumbs crumbs--light" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>
              <ChevronRight />
              <Link to="/inventory">Inventory</Link>
            </span>
            <span>
              <ChevronRight />
              <span>
                {vehicle.make} {vehicle.model}
              </span>
            </span>
          </nav>

          <div className="detail__top">
            <div className="detail__gallery">
              <Gallery images={vehicle.images} name={title} />
            </div>

            <div className="detail__summary">
              {vehicle.badge && <p className="tag-badge">{vehicle.badge}</p>}
              <p className="detail__make">{vehicle.make}</p>
              <h1>{vehicle.model}</h1>
              <p className="detail__meta">
                {vehicle.year} · {vehicle.category} · {vehicle.bodyStyle}
              </p>

              <p className="detail__price">
                {formatPrice(vehicle.price)}
                <span>Est. {formatPrice(Math.round(vehicle.price / 60))} / month</span>
              </p>

              <ul className="detail__status">
                <li>
                  <Check />
                  {vehicle.availability}
                </li>
                <li>Stock no. {vehicle.stockNumber}</li>
                <li>Ref. {vehicle.year} · {formatMileage(vehicle.mileage)}</li>
              </ul>

              <div className="detail__actions">
                <button
                  type="button"
                  className="btn btn--gold btn--block"
                  onClick={() => openBooking(vehicle)}
                >
                  Book a Test Drive
                  <ArrowRight className="btn__icon" />
                </button>
                <button
                  type="button"
                  className={`btn btn--outline${saved ? ' is-saved' : ''}`}
                  onClick={() => toggleFavorite(vehicle.id)}
                  aria-pressed={saved}
                >
                  <Heart filled={saved} />
                  {saved ? 'Saved' : 'Save to favourites'}
                </button>
                <a className="btn btn--ghost-dark" href={site.phoneHref}>
                  <Phone className="btn__icon" />
                  {site.phone}
                </a>
              </div>

              <dl className="detail__quick">
                {specs.slice(0, 6).map((spec) => (
                  <div key={spec.label}>
                    <dt>{spec.label}</dt>
                    <dd>{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      <section className="section detail__body">
        <div className="shell detail__body-grid">
          <div className="detail__main">
            <Reveal>
              <p className="eyebrow">Overview</p>
              <h2>About this {vehicle.model}</h2>
              <p className="detail__description">{vehicle.description}</p>
            </Reveal>

            <Reveal className="detail__specs-block">
              <h3>Specifications</h3>
              <dl className="spec-grid">
                <div>
                  <dt>Manufacturer</dt>
                  <dd>{vehicle.make}</dd>
                </div>
                <div>
                  <dt>Model</dt>
                  <dd>{vehicle.model}</dd>
                </div>
                {specs.map((spec) => (
                  <div key={spec.label}>
                    <dt>{spec.label}</dt>
                    <dd>{spec.value}</dd>
                  </div>
                ))}
                <div>
                  <dt>Stock number</dt>
                  <dd>{vehicle.stockNumber}</dd>
                </div>
              </dl>
            </Reveal>

            <div className="detail__feature-groups">
              {specGroups(vehicle).map((group, index) => (
                <Reveal className="feature-group" key={group.label} delay={index * 60}>
                  <h3>
                    <group.icon />
                    {group.label}
                  </h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>
                        <Check />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>

          <aside className="detail__aside">
            <div className="dealer-card">
              <p className="eyebrow">Dealer</p>
              <h3>{site.name}</h3>
              <p>{site.address}</p>
              <p>
                {site.hours} · {site.hoursNote}
              </p>
              <a href={site.phoneHref}>
                <Phone />
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <button
                type="button"
                className="btn btn--gold btn--block"
                onClick={() => openBooking(vehicle)}
              >
                Arrange a viewing
              </button>
              <Link className="link-arrow" to="/contact">
                Send an enquiry
                <ArrowRight />
              </Link>
            </div>

            <div className="finance-card">
              <p className="eyebrow">Financing</p>
              <h3>Estimate a payment</h3>
              <FinanceCalculator defaultPrice={vehicle.price} />
            </div>

            <p className="detail__note">{inventoryNote}</p>
          </aside>
        </div>
      </section>

      <section className="section section--dark">
        <div className="shell">
          <SectionHead label="You may also like" title="Similar Vehicles" align="center" />
          <Carousel
            items={similarVehicles(vehicle, 6)}
            label="Similar vehicles"
            renderItem={(item) => <VehicleCard vehicle={item} />}
          />
        </div>
      </section>

      <div className="sticky-cta">
        <div>
          <span className="sticky-cta__price">{formatPrice(vehicle.price)}</span>
          <span className="sticky-cta__name">
            {vehicle.year} {title}
          </span>
        </div>
        <button
          type="button"
          className="btn btn--gold btn--sm"
          onClick={() => openBooking(vehicle)}
        >
          Book a Test Drive
        </button>
      </div>
    </>
  );
}
