import { Link } from 'react-router-dom';
import { formatMileage, formatPrice, vehicleTitle } from '../data/vehicles.js';
import { useFavorites } from '../context/FavoritesContext.jsx';
import { ArrowRight, Bolt, Fuel, Gearbox, Heart, Route } from './Icons.jsx';

/** Reusable vehicle card used by the featured rail, inventory grid and detail page. */
export default function VehicleCard({ vehicle, eager = false }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const saved = isFavorite(vehicle.id);
  const title = vehicleTitle(vehicle);
  const href = `/inventory/${vehicle.id}`;

  return (
    <article className="vcard">
      <div className="vcard__media">
        <Link to={href} aria-label={`View ${title}`}>
          <img
            src={vehicle.images[0]}
            alt={`${title} ${vehicle.year} in ${vehicle.exteriorColor}`}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
          />
        </Link>
        {vehicle.badge && <span className="vcard__badge">{vehicle.badge}</span>}
        <button
          type="button"
          className={`vcard__save${saved ? ' is-saved' : ''}`}
          onClick={() => toggleFavorite(vehicle.id)}
          aria-pressed={saved}
          aria-label={saved ? `Remove ${title} from favourites` : `Save ${title} to favourites`}
        >
          <Heart filled={saved} />
        </button>
      </div>

      <div className="vcard__body">
        <p className="vcard__make">{vehicle.make}</p>
        <h3 className="vcard__name">
          <Link to={href}>{vehicle.model}</Link>
        </h3>

        <p className="vcard__meta">
          {vehicle.year} · {vehicle.category}
        </p>

        <div className="vcard__price">
          <span className="vcard__price-value">{formatPrice(vehicle.price)}</span>
          <span className="vcard__price-note">{vehicle.condition}</span>
        </div>

        <ul className="vcard__specs">
          <li>
            <Route />
            <span>{formatMileage(vehicle.mileage)}</span>
          </li>
          <li>
            <Gearbox />
            <span>{vehicle.transmission}</span>
          </li>
          <li>
            {vehicle.fuel === 'Electric' ? <Bolt /> : <Fuel />}
            <span>{vehicle.fuel}</span>
          </li>
        </ul>

        <Link className="link-arrow vcard__cta" to={href}>
          View Details
          <ArrowRight />
        </Link>
      </div>
    </article>
  );
}
