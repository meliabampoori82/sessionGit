import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { ArrowRight } from '../components/Icons.jsx';
import { properties } from '../data/properties.js';
import { services } from '../data/site.js';

const process = [
  {
    step: '01',
    title: 'Brief',
    text: 'We define the brief together: budget, location, timing and how the property will be used.',
  },
  {
    step: '02',
    title: 'Search',
    text: 'Portals, off-market contacts and our own register are combined into a shortlist.',
  },
  {
    step: '03',
    title: 'Assess',
    text: 'Comparable evidence, condition and running costs are set out before you offer.',
  },
  {
    step: '04',
    title: 'Close',
    text: 'We negotiate, coordinate survey and legal teams, and manage the handover.',
  },
];

export default function Services() {
  return (
    <div>
      <PageBanner
        label="Services"
        title="Advisory across the whole ownership cycle"
        intro="From first search to eventual sale, six services designed for private clients and investors."
        image={properties[2].images[0]}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
      />

      <section className="section">
        <div className="shell">
          <div className="service-grid">
            {services.map((service, index) => (
              <Reveal key={service.id} delay={(index % 3) * 80}>
                <article className="service-tile">
                  <img src={service.image} alt="" loading="lazy" />
                  <div className="service-tile__body">
                    <p className="service-tile__index">{String(index + 1).padStart(2, '0')}</p>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="shell">
          <SectionHead center label="Process" title="How an instruction runs" />
          <div className="process" style={{ marginTop: 56 }}>
            {process.map((item, index) => (
              <Reveal className="process__step" key={item.step} delay={index * 80}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="shell">
          <Reveal className="cta-band">
            <div className="cta-band__left">
              <div>
                <h2>Not sure which service you need?</h2>
                <p>Tell us what you are trying to achieve and we will scope it with you.</p>
              </div>
            </div>
            <Link className="btn btn--navy" to="/contact">
              Get in Touch
              <ArrowRight className="btn__icon" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
