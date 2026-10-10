import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Gallery from '../components/Gallery.jsx';
import InquiryModal from '../components/InquiryModal.jsx';
import Carousel from '../components/Carousel.jsx';
import PropertyCard from '../components/PropertyCard.jsx';
import Reveal from '../components/Reveal.jsx';
import {
  ArrowRight,
  Bath,
  Bed,
  Calendar,
  Check,
  Heart,
  Mail,
  MapPin,
  Phone,
  Ruler,
  Shield,
} from '../components/Icons.jsx';
import { useFavorites } from '../context/FavoritesContext.jsx';
import { formatPrice, getPropertyById, similarProperties } from '../data/properties.js';
import { site, team } from '../data/site.js';
import NotFound from './NotFound.jsx';

export default function PropertyDetail() {
  const { id } = useParams();
  const property = getPropertyById(id);
  const { isFavorite, toggleFavorite } = useFavorites();
  const [modal, setModal] = useState(null); // 'contact' | 'viewing'

  if (!property) return <NotFound />;

  const saved = isFavorite(property.id);
  const similar = similarProperties(property);

  return (
    <div className="detail-page">
      <div className="shell" style={{ paddingTop: 'calc(var(--header-h) + 40px)' }}>
        <nav className="crumbs" style={{ color: 'var(--muted)' }} aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/properties">Properties</Link>
          <span>/</span>
          <span>{property.name}</span>
        </nav>

        <div className="detail-head">
          <div>
            <h1>{property.name}</h1>
            <p className="detail-head__loc">
              <MapPin />
              {property.location}
            </p>
          </div>
          <div className="detail-head__right">
            <p className="detail-head__price">{formatPrice(property.price)}</p>
            <span className="detail-head__tag">
              {property.type} · Built {property.year}
            </span>
          </div>
        </div>

        <div className="detail-layout">
          <div>
            <Gallery images={property.images} name={property.name} />

            <ul className="detail-specs">
              <li className="detail-spec">
                <Bed />
                <strong>{property.beds}</strong>
                <span>Bedrooms</span>
              </li>
              <li className="detail-spec">
                <Bath />
                <strong>{property.baths}</strong>
                <span>Bathrooms</span>
              </li>
              <li className="detail-spec">
                <Ruler />
                <strong>{property.sqft.toLocaleString('en-US')}</strong>
                <span>Sq ft</span>
              </li>
              <li className="detail-spec">
                <Calendar />
                <strong>{property.year}</strong>
                <span>Year built</span>
              </li>
            </ul>

            <div className="detail-body">
              <section>
                <h2>About this property</h2>
                <p>{property.description}</p>
              </section>

              <section>
                <h2>Key features</h2>
                <ul className="tick-list">
                  {property.features.map((feature) => (
                    <li key={feature}>
                      <Check />
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2>Amenities</h2>
                <ul className="amenities-grid">
                  {property.amenities.map((amenity) => (
                    <li className="amenity" key={amenity}>
                      <Shield />
                      {amenity}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          <aside className="detail-side">
            <div className="agent-card">
              <div className="agent-card__head">
                <img src={team[1].image} alt={team[1].name} loading="lazy" />
                <div>
                  <p className="agent-card__name">{team[1].name}</p>
                  <p className="agent-card__role">{team[1].role}</p>
                </div>
              </div>

              <div className="agent-card__rows">
                <a href={site.phoneHref}>
                  <Phone />
                  {site.phone}
                </a>
                <a href={`mailto:${site.email}`}>
                  <Mail />
                  {site.email}
                </a>
                <span>
                  <MapPin />
                  Viewings by appointment
                </span>
              </div>

              <div className="agent-card__actions">
                <button className="btn btn--gold" type="button" onClick={() => setModal('viewing')}>
                  Schedule a Viewing
                </button>
                <button className="btn btn--outline" type="button" onClick={() => setModal('contact')}>
                  Contact Agent
                </button>
                <button
                  type="button"
                  className={`save-btn${saved ? ' is-on' : ''}`}
                  onClick={() => toggleFavorite(property.id)}
                  aria-pressed={saved}
                >
                  <Heart filled={saved} />
                  {saved ? 'Saved' : 'Save property'}
                </button>
              </div>
            </div>
          </aside>
        </div>

        <section className="section section--tight">
          <div className="featured__head">
            <div className="section-head">
              <p className="eyebrow">Similar properties</p>
              <h2>You may also like</h2>
            </div>
            <Link className="link-arrow" to="/properties">
              View all inventory
              <ArrowRight />
            </Link>
          </div>
          <Carousel
            items={similar}
            label="Similar properties"
            renderItem={(item) => <PropertyCard property={item} />}
          />
        </section>
      </div>

      <div className="sticky-cta">
        <button className="btn btn--gold" type="button" onClick={() => setModal('viewing')}>
          Schedule Viewing
        </button>
        <button
          type="button"
          className={`save-btn${saved ? ' is-on' : ''}`}
          onClick={() => toggleFavorite(property.id)}
          aria-pressed={saved}
          aria-label={saved ? 'Remove from saved' : 'Save property'}
        >
          <Heart filled={saved} />
        </button>
      </div>

      <InquiryModal
        open={modal !== null}
        onClose={() => setModal(null)}
        title={modal === 'viewing' ? 'Schedule a viewing' : 'Contact the agent'}
        subject={property.name}
        submitLabel={modal === 'viewing' ? 'Request viewing' : 'Send enquiry'}
      />
    </div>
  );
}
