import { useState } from 'react';
import { Link } from 'react-router-dom';
import { heroImage, aboutImages, properties } from '../data/properties.js';
import { heroStats, services, site, team, whyItems } from '../data/site.js';
import Carousel from '../components/Carousel.jsx';
import InquiryModal from '../components/InquiryModal.jsx';
import PropertyCard from '../components/PropertyCard.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { ArrowRight, Crown, Globe, Key, Mark, Shield, User } from '../components/Icons.jsx';

const whyIcons = { crown: Crown, shield: Shield, user: User, globe: Globe };

export default function Home() {
  const [modal, setModal] = useState(false);

  return (
    <div className="home">
      {/* ---------------- Hero ---------------- */}
      <section className="hero">
        <div className="hero__media" aria-hidden="true">
          <img src={heroImage} alt="" fetchpriority="high" decoding="async" />
        </div>

        <div className="shell hero__inner">
          <div className="hero__content">
            <p className="eyebrow">Horizon Properties · Since 2007</p>
            <h1>
              Discover Exceptional
              <br />
              Homes &amp; Investments
            </h1>
            <p className="hero__lede">
              Premium properties in prime locations. Find your dream home or the perfect
              investment with confidence.
            </p>
            <div className="hero__actions">
              <Link className="btn btn--gold" to="/properties">
                Explore Properties
                <ArrowRight className="btn__icon" />
              </Link>
              <button
                type="button"
                className="btn btn--ghost-light"
                onClick={() => setModal(true)}
              >
                Speak to an Advisor
              </button>
            </div>
          </div>
        </div>

        <div className="shell" style={{ position: 'relative', zIndex: 2 }}>
          <ul className="hero__stats">
            {heroStats.map((stat) => (
              <li className="hero__stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <span className="hero__scroll" aria-hidden="true">
          Scroll to explore
        </span>
      </section>

      {/* ---------------- Who we are ---------------- */}
      <section className="section">
        <div className="shell about-split">
          <Reveal className="about-split__copy">
            <p className="eyebrow">About Us</p>
            <h2>Who We Are</h2>
            <p>
              At Horizon Properties, we connect people with extraordinary homes and smart
              investments. Integrity, transparency, and client satisfaction are at the heart
              of everything we do.
            </p>
            <div className="about-split__actions">
              <Link className="btn btn--navy" to="/about">
                Learn More
                <ArrowRight className="btn__icon" />
              </Link>
              <Link className="link-arrow" to="/team">
                Meet the team
                <ArrowRight />
              </Link>
            </div>

            <ul className="about-split__facts">
              <li className="about-fact">
                <strong>$1.2B</strong>
                <span>Transacted</span>
              </li>
              <li className="about-fact">
                <strong>640</strong>
                <span>Homes placed</span>
              </li>
              <li className="about-fact">
                <strong>9</strong>
                <span>Prime markets</span>
              </li>
            </ul>
          </Reveal>

          <Reveal className="about-media" delay={120}>
            <div className="about-media__main">
              <img src={aboutImages.main} alt="Modern glass residence at dusk" loading="lazy" decoding="async" />
            </div>
            <div className="about-media__side">
              <img src={aboutImages.side} alt="Open plan living room with garden view" loading="lazy" decoding="async" />
            </div>
            <div className="about-media__accent">
              <strong>18</strong>
              <span>Years advising</span>
            </div>
            <Link className="icon-btn about-media__arrow" to="/properties" aria-label="Browse properties">
              <ArrowRight />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Featured properties ---------------- */}
      <section className="section section--ivory">
        <div className="shell">
          <div className="featured__head">
            <SectionHead label="Featured" title="Featured Properties" />
            <Link className="link-arrow" to="/properties">
              View all inventory
              <ArrowRight />
            </Link>
          </div>
        </div>

        <div className="shell">
          <Carousel
            items={properties}
            label="Featured properties"
            renderItem={(property) => <PropertyCard property={property} />}
          />
        </div>
      </section>

      {/* ---------------- Services ---------------- */}
      <section className="section">
        <div className="shell">
          <div className="featured__head">
            <SectionHead
              label="What we do"
              title="Services"
              intro="Advisory, marketing and transactional support for private clients and investors."
            />
            <Link className="link-arrow" to="/services">
              All services
              <ArrowRight />
            </Link>
          </div>

          <div className="service-grid">
            {services.slice(0, 3).map((service, index) => (
              <Reveal key={service.id} delay={index * 80}>
                <Link className="service-tile" to="/services">
                  <img src={service.image} alt="" loading="lazy" decoding="async" />
                  <div className="service-tile__body">
                    <p className="service-tile__index">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Why choose ---------------- */}
      <section
        className="section section--navy"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(7,23,37,0.94) 0%, rgba(7,23,37,0.86) 45%, rgba(7,23,37,0.97) 100%), url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=70)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="shell">
          <div className="section-head section-head--center" style={{ marginBottom: 56 }}>
            <p className="eyebrow eyebrow--center">The difference</p>
            <h2>Why Choose Horizon Properties?</h2>
            <p>
              Four commitments that shape how we advise, list and negotiate on your behalf.
            </p>
          </div>

          <div className="why-grid">
            {whyItems.map((item, index) => {
              const Icon = whyIcons[item.icon] ?? Mark;
              return (
                <Reveal className="why-item" key={item.title} delay={index * 80}>
                  <span className="why-item__icon">
                    <Icon />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- Team ---------------- */}
      <section className="section">
        <div className="shell">
          <div className="featured__head">
            <SectionHead
              label="Our people"
              title="A team that knows the market"
              intro="Senior advisors only — no handovers, no junior negotiators."
            />
            <Link className="link-arrow" to="/team">
              Meet everyone
              <ArrowRight />
            </Link>
          </div>

          <div className="team-grid">
            {team.map((member, index) => (
              <Reveal key={member.id} delay={index * 80}>
                <article className="team-card">
                  <div className="team-card__media">
                    <img src={member.image} alt={member.name} loading="lazy" decoding="async" />
                  </div>
                  <div className="team-card__body">
                    <h3>{member.name}</h3>
                    <p className="team-card__role">{member.role}</p>
                    <p className="team-card__bio">{member.bio}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="section section--tight" style={{ paddingTop: 0 }}>
        <div className="shell">
          <Reveal className="cta-band">
            <div className="cta-band__left">
              <span className="cta-band__icon">
                <Key />
              </span>
              <div>
                <h2>Ready to Find Your Perfect Property?</h2>
                <p>Let our experts guide you to the right home or investment.</p>
              </div>
            </div>
            <button className="btn btn--navy" type="button" onClick={() => setModal(true)}>
              Get in Touch
              <ArrowRight className="btn__icon" />
            </button>
          </Reveal>
        </div>
      </section>

      <InquiryModal
        open={modal}
        onClose={() => setModal(false)}
        title="Speak to an advisor"
        subject={site.name}
        submitLabel="Request a call"
      />
    </div>
  );
}
