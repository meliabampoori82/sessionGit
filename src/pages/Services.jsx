import { Link } from 'react-router-dom';
import { services, site } from '../data/site.js';
import PageBanner from '../components/PageBanner.jsx';
import Reveal from '../components/Reveal.jsx';
import { ArrowRight, Phone } from '../components/Icons.jsx';

export default function Services() {
  return (
    <>
      <PageBanner
        label="Experience excellence"
        title="Premium Services"
        text="From first enquiry to long-term ownership — the same team, the same standards."
        crumbs={[{ label: 'Services' }]}
      />

      <section className="section">
        <div className="shell services-page__grid">
          {services.map((service, index) => (
            <Reveal as="article" className="service-card" key={service.id} delay={index * 50}>
              <div className="service-card__media">
                <img src={service.image} alt="" loading="lazy" decoding="async" />
              </div>
              <div className="service-card__body">
                <span className="service-card__index">{String(index + 1).padStart(2, '0')}</span>
                <h2>{service.title}</h2>
                <p>{service.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="shell services-page__cta">
          <div>
            <h2>Not sure where to start?</h2>
            <p>
              Tell us what you are looking for and we will come back with a shortlist — or call the
              showroom during opening hours.
            </p>
          </div>
          <div className="services-page__actions">
            <Link className="btn btn--dark" to="/contact">
              Contact our team
              <ArrowRight className="btn__icon" />
            </Link>
            <a className="btn btn--outline" href={site.phoneHref}>
              <Phone className="btn__icon" />
              {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
