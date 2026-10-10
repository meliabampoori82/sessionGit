import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { ArrowRight, Shield } from '../components/Icons.jsx';
import { aboutImages, properties } from '../data/properties.js';
import { heroStats } from '../data/site.js';

const principles = [
  {
    title: 'Evidence, not opinion',
    text: 'Every recommendation starts with comparable sales, absorption rates and a written rationale you can challenge.',
  },
  {
    title: 'One advisor, start to finish',
    text: 'The person who walks you through a home is the person who negotiates it and closes it.',
  },
  {
    title: 'Discretion by default',
    text: 'Off-market listings, private viewings and NDAs are standard, not an upgrade.',
  },
  {
    title: 'Design fluency',
    text: 'We represent architecturally significant homes and know what makes them worth more.',
  },
];

export default function About() {
  return (
    <div>
      <PageBanner
        label="About Us"
        title="An agency built around the property, not the portal"
        intro="Horizon Properties was founded in 2007 to advise private clients on the purchase, sale and holding of architecturally significant homes."
        image={properties[1].images[0]}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
      />

      <section className="section">
        <div className="shell about-split">
          <Reveal className="about-split__copy">
            <p className="eyebrow">Who we are</p>
            <h2>Trusted across nine prime markets</h2>
            <p>
              We work with a deliberately small number of clients at a time. That means deep
              local knowledge, patient advice and the freedom to tell you when a property is
              not right for you.
            </p>
            <p style={{ marginTop: 18 }}>
              Our team combines valuation, investment analysis and design expertise, supported
              by a marketing studio that photographs and films every listing in-house.
            </p>
            <div className="about-split__actions">
              <Link className="btn btn--navy" to="/properties">
                Browse properties
                <ArrowRight className="btn__icon" />
              </Link>
            </div>
            <ul className="about-split__facts">
              {heroStats.map((stat) => (
                <li className="about-fact" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="about-media" delay={120}>
            <div className="about-media__main">
              <img src={aboutImages.main} alt="Modern glass house at dusk" loading="lazy" />
            </div>
            <div className="about-media__side">
              <img src={aboutImages.side} alt="Interior living space" loading="lazy" />
            </div>
            <div className="about-media__accent">
              <strong>9</strong>
              <span>Prime markets</span>
            </div>
            <Link className="icon-btn about-media__arrow" to="/contact" aria-label="Contact us">
              <ArrowRight />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="shell">
          <SectionHead
            center
            label="How we work"
            title="Principles we hold to"
            intro="Four commitments applied to every instruction we take on."
          />
          <div className="why-grid" style={{ marginTop: 56 }}>
            {principles.map((item, index) => (
              <Reveal className="why-item" key={item.title} delay={index * 80}>
                <span className="why-item__icon">
                  <Shield />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
