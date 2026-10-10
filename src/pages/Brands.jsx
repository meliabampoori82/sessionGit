import { Link } from 'react-router-dom';
import { formatPrice, makes, vehicles, vehicleTitle } from '../data/vehicles.js';
import { brandNotes } from '../data/site.js';
import PageBanner from '../components/PageBanner.jsx';
import Reveal from '../components/Reveal.jsx';
import { ArrowRight } from '../components/Icons.jsx';

export default function Brands() {
  return (
    <>
      <PageBanner
        label={brandNotes.label}
        title={brandNotes.headline}
        text={brandNotes.text}
        crumbs={[{ label: 'Brands' }]}
      />

      <section className="section">
        <div className="shell">
          <ul className="brand-list">
            {makes.map((make, index) => {
              const stock = vehicles.filter((vehicle) => vehicle.make === make);
              const from = Math.min(...stock.map((vehicle) => vehicle.price));
              return (
                <Reveal as="li" className="brand-row" key={make} delay={index * 40}>
                  <div className="brand-row__name">
                    <h2>{make}</h2>
                    <p>
                      {stock.length} {stock.length === 1 ? 'vehicle' : 'vehicles'} · from{' '}
                      {formatPrice(from)}
                    </p>
                  </div>
                  <ul className="brand-row__models">
                    {stock.map((vehicle) => (
                      <li key={vehicle.id}>
                        <Link to={`/inventory/${vehicle.id}`}>
                          <span>{vehicleTitle(vehicle)}</span>
                          <span className="brand-row__year">{vehicle.year}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link className="link-arrow" to={`/inventory?make=${encodeURIComponent(make)}`}>
                    View {make}
                    <ArrowRight />
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
