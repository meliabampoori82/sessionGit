import { Bed, Bath, Heart, MapPin, Ruler } from './Icons.jsx';
import { Link } from 'react-router-dom';
import { formatPrice } from '../data/properties.js';
import { useFavorites } from '../context/FavoritesContext.jsx';

/**
 * One property card, used by the grid, the carousel and the "similar
 * properties" rail.
 */
export default function PropertyCard({ property, showType = true }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const saved = isFavorite(property.id);

  return (
    <article className="prop-card">
      <div className="prop-card__media">
        <Link to={`/properties/${property.id}`} aria-label={`View ${property.name}`}>
          <img
            src={property.images[0]}
            alt={`${property.name}, ${property.location}`}
            loading="lazy"
            decoding="async"
          />
        </Link>
        {showType && <span className="prop-card__tag">{property.type}</span>}
        <button
          type="button"
          className={`prop-card__fav${saved ? ' is-on' : ''}`}
          onClick={() => toggleFavorite(property.id)}
          aria-pressed={saved}
          aria-label={saved ? `Remove ${property.name} from saved` : `Save ${property.name}`}
        >
          <Heart filled={saved} />
        </button>
      </div>

      <div className="prop-card__body">
        <div className="prop-card__head">
          <div>
            <h3 className="prop-card__name">
              <Link to={`/properties/${property.id}`}>{property.name}</Link>
            </h3>
            <p className="prop-card__loc">
              <MapPin />
              {property.location}
            </p>
          </div>
          <p className="prop-card__price">{formatPrice(property.price)}</p>
        </div>

        <div className="prop-card__foot">
          <ul className="specs">
            <li className="spec">
              <Bed />
              {property.beds}
              <span className="sr-only">bedrooms</span>
            </li>
            <li className="spec">
              <Bath />
              {property.baths}
              <span className="sr-only">bathrooms</span>
            </li>
            <li className="spec">
              <Ruler />
              {property.sqft.toLocaleString('en-US')}
              <span className="sr-only">square feet</span>
            </li>
          </ul>
          <Link className="link-arrow prop-card__link" to={`/properties/${property.id}`}>
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}
