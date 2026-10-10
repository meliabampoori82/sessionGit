import { Link } from 'react-router-dom';
import { aboutImages, roadImage, workshopImage, showroomImage } from '../data/vehicles.js';
import { site, whyItems } from '../data/site.js';
import PageBanner from '../components/PageBanner.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { ArrowRight, iconMap, Sparkle } from '../components/Icons.jsx';

export default function About() {
  return (
    <>
      <PageBanner
        label="About Apex"
        title="More Than Just a Car"
        text="An independent dealership built around careful selection and straight answers."
        image={roadImage}
        crumbs={[{ label: 'About Us' }]}
      />

      <section className="section">
        <div className="shell about-page__intro">
          <Reveal>
            <p className="eyebrow">Our approach</p>
            <h2>A small collection, chosen deliberately</h2>
            <p>
              We only list vehicles we would be comfortable putting on our own driveway. That means
              fewer cars, fuller histories and specifications we are happy to explain line by line.
            </p>
            <p>
              Buyers arrive with questions — about mileage, servicing, running costs, or whether a
              car genuinely suits the way they drive. Our job is to answer them clearly, then get
              out of the way.
            </p>
            <Link className="link-arrow" to="/inventory">
              Browse the collection
              <ArrowRight />
            </Link>
          </Reveal>
          <Reveal className="about-page__media" delay={120}>
            <img src={aboutImages.main} alt="A coupe photographed outside the showroom" loading="lazy" />
            <img
              className="about-page__media-small"
              src={workshopImage}
              alt="Technicians checking a vehicle"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <section className="section section--mist about-page__values">
        <div className="shell">
          <SectionHead
            label="The Apex difference"
            title="Confidence in Every Mile"
            text="Four commitments that shape how we work."
            align="center"
          />
          <ul className="values-grid">
            {whyItems.map((item, index) => {
              const Icon = iconMap[item.icon] ?? Sparkle;
              return (
                <Reveal as="li" key={item.title} delay={index * 70}>
                  <Icon />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section about-page__visit">
        <div className="shell about-page__visit-grid">
          <Reveal>
            <img src={showroomImage} alt="The Apex Motors showroom floor" loading="lazy" />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">Visit</p>
            <h2>The showroom</h2>
            <p>
              You will find us at {site.address}. Appointments are recommended so the car you want
              is ready and unoccupied when you arrive.
            </p>
            <dl className="visit-facts">
              <div>
                <dt>Opening hours</dt>
                <dd>
                  {site.hours} · {site.hoursNote}
                </dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={site.phoneHref}>{site.phone}</a>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
            </dl>
            <Link className="btn btn--dark" to="/contact">
              Book a visit
              <ArrowRight className="btn__icon" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
