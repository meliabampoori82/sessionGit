import { Link } from 'react-router-dom';
import {
  aboutImages,
  bodyStyles,
  categories,
  featuredVehicles,
  formatPrice,
  heroImage,
  makes,
  vehicles,
  vehicleTitle,
  whyImage,
} from '../data/vehicles.js';
import {
  about,
  brandNotes,
  ctaSection,
  featuredSection,
  hero,
  services,
  site,
  team,
  whyItems,
  whySection,
} from '../data/site.js';
import { useBooking } from '../context/BookingContext.jsx';
import Carousel from '../components/Carousel.jsx';
import FinanceCalculator from '../components/FinanceCalculator.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import VehicleCard from '../components/VehicleCard.jsx';
import {
  ArrowRight,
  ArrowUpRight,
  iconMap,
  Mark,
  Sparkle,
} from '../components/Icons.jsx';

export default function Home() {
  const { openBooking } = useBooking();
  const featured = featuredVehicles();

  const stats = [
    { value: `${makes.length}`, label: 'Marques curated' },
    { value: `${vehicles.length}`, label: 'Vehicles listed' },
    { value: `${bodyStyles.length + categories.length}`, label: 'Body styles & types' },
  ];

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <img className="hero__bg" src={heroImage} alt="" aria-hidden="true" />
        <div className="hero__scrim" aria-hidden="true" />
        <div className="shell hero__inner">
          <p className="eyebrow hero__anim hero__anim--1">{hero.label}</p>
          <h1 className="hero__title hero__anim hero__anim--2">{hero.headline}</h1>
          <p className="hero__text hero__anim hero__anim--3">{hero.text}</p>
          <div className="hero__actions hero__anim hero__anim--4">
            <Link className="btn btn--gold" to={hero.primaryCta.to}>
              {hero.primaryCta.label}
              <ArrowRight className="btn__icon" />
            </Link>
            <button
              type="button"
              className="btn btn--ghost-light"
              onClick={() => openBooking()}
            >
              {hero.secondaryCta.label}
            </button>
          </div>

          <dl className="hero__stats hero__anim hero__anim--5">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- About ---------- */}
      <section className="section about-apex">
        <div className="shell about-apex__grid">
          <Reveal className="about-apex__text">
            <p className="eyebrow">{about.label}</p>
            <h2>{about.headline}</h2>
            <p className="about-apex__body">{about.text}</p>
            <Link className="link-arrow" to={about.cta.to}>
              {about.cta.label}
              <ArrowRight />
            </Link>
          </Reveal>

          <Reveal className="about-apex__media" delay={120}>
            <div className="about-apex__main">
              <img
                src={aboutImages.main}
                alt="A performance coupe photographed from the front three-quarter angle"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="about-apex__side">
              <img
                src={aboutImages.side}
                alt="Detail of a hand-finished interior"
                loading="lazy"
                decoding="async"
              />
            </div>
            <Link className="icon-btn icon-btn--gold about-apex__badge" to="/about">
              <span className="sr-only">Discover our story</span>
              <ArrowUpRight />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- Featured vehicles ---------- */}
      <section className="section section--dark featured">
        <div className="shell">
          <SectionHead
            label={featuredSection.label}
            title={featuredSection.headline}
            text={featuredSection.text}
            align="center"
            action={{ label: 'View all inventory', to: '/inventory' }}
            className="section-head--stack"
          />
          <Carousel
            items={featured}
            label="Featured vehicles"
            renderItem={(vehicle, index) => <VehicleCard vehicle={vehicle} eager={index < 2} />}
          />
        </div>
      </section>

      {/* ---------- Brands ---------- */}
      <section className="section section--tight brands">
        <div className="shell">
          <SectionHead
            label={brandNotes.label}
            title={brandNotes.headline}
            text={brandNotes.text}
            align="center"
          />
          <ul className="brand-strip">
            {makes.map((make) => (
              <li key={make}>
                <Link to={`/inventory?make=${encodeURIComponent(make)}`}>
                  <span>{make}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="brand-strip__cta">
            <Link className="link-arrow" to="/brands">
              Browse by brand
              <ArrowRight />
            </Link>
          </p>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className="section services-teaser">
        <div className="shell services-teaser__grid">
          <Reveal className="services-teaser__media">
            <img
              src={whyImage}
              alt="A vehicle in a studio-lit showroom"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <div className="services-teaser__list">
            <SectionHead
              label="Experience excellence"
              title="Premium Services"
              text="Support that continues well beyond the handover."
            />
            <ul>
              {services.slice(0, 6).map((service, index) => (
                <Reveal as="li" key={service.id} delay={index * 60}>
                  <span className="services-teaser__index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
            <Link className="link-arrow" to="/services">
              All services
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Why choose Apex ---------- */}
      <section className="section section--dark why">
        <div className="shell">
          <SectionHead label={whySection.label} title={whySection.headline} text={whySection.text} />
          <div className="why__grid">
            {whyItems.map((item, index) => {
              const Icon = iconMap[item.icon] ?? Sparkle;
              return (
                <Reveal className="why__item" key={item.title} delay={index * 80}>
                  <Icon className="why__icon" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Finance & trade-in ---------- */}
      <section className="section section--mist finance-cta">
        <div className="shell finance-cta__grid">
          <Reveal className="finance-cta__text">
            <p className="eyebrow">Financing &amp; trade-in</p>
            <h2>Plan the numbers before you visit</h2>
            <p>
              Model a monthly payment in seconds, or ask us to value the car you are replacing. No
              pressure, no jargon — just the figures you need to decide.
            </p>
            <ul className="tick-list">
              <li>Transparent pricing with no hidden add-ons</li>
              <li>Trade-in valuation against your next vehicle</li>
              <li>Financing options explained by a specialist</li>
            </ul>
            <div className="finance-cta__actions">
              <Link className="btn btn--dark" to="/contact">
                Ask about financing
                <ArrowRight className="btn__icon" />
              </Link>
              <Link className="btn btn--outline" to="/services">
                Trade-in valuation
              </Link>
            </div>
          </Reveal>
          <Reveal className="finance-cta__calc" delay={120}>
            <FinanceCalculator defaultPrice={142900} />
          </Reveal>
        </div>
      </section>

      {/* ---------- Team ---------- */}
      <section className="section team-teaser">
        <div className="shell">
          <SectionHead
            label="The people"
            title="Meet the Team"
            text="A small group of specialists, not a sales floor of strangers."
            action={{ label: 'More about us', to: '/about' }}
          />
          <ul className="team-grid">
            {team.map((member, index) => (
              <Reveal as="li" className="team-card" key={member.id} delay={index * 70}>
                <div className="team-card__media">
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3>{member.name}</h3>
                <p className="team-card__role">{member.role}</p>
                <p className="team-card__bio">{member.bio}</p>
                <a className="link-arrow" href={`mailto:${member.email}`}>
                  Get in touch
                  <ArrowRight />
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Closing CTA ---------- */}
      <section className="section closing-cta">
        <div className="shell closing-cta__inner">
          <span className="closing-cta__mark" aria-hidden="true">
            <Mark />
          </span>
          <h2>{ctaSection.headline}</h2>
          <p>{ctaSection.text}</p>
          <div className="closing-cta__actions">
            <Link className="btn btn--dark" to={ctaSection.primary.to}>
              {ctaSection.primary.label}
              <ArrowRight className="btn__icon" />
            </Link>
            <Link className="btn btn--outline" to={ctaSection.secondary.to}>
              {ctaSection.secondary.label}
            </Link>
          </div>
          <p className="closing-cta__note">{site.demoNotice}</p>
        </div>
      </section>
    </>
  );
}
