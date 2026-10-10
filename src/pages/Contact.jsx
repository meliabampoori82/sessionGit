import { site } from '../data/site.js';
import ContactForm from '../components/ContactForm.jsx';
import PageBanner from '../components/PageBanner.jsx';
import Reveal from '../components/Reveal.jsx';
import { Clock, Mail, MapPin, Phone } from '../components/Icons.jsx';

const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`;

export default function Contact() {
  return (
    <>
      <PageBanner
        label="Contact"
        title="Talk to Apex Motors"
        text="Questions about a vehicle, financing or a viewing — we answer them all in one place."
        crumbs={[{ label: 'Contact' }]}
      />

      <section className="section">
        <div className="shell contact__grid">
          <Reveal className="contact__form">
            <h2>Send us a message</h2>
            <p className="contact__lede">
              We usually reply within one business day. For anything urgent, call the showroom
              directly.
            </p>
            <ContactForm />
          </Reveal>

          <Reveal className="contact__aside" delay={120}>
            <ul className="contact-facts">
              <li>
                <Phone />
                <div>
                  <h3>Phone</h3>
                  <a href={site.phoneHref}>{site.phone}</a>
                </div>
              </li>
              <li>
                <Mail />
                <div>
                  <h3>Email</h3>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              </li>
              <li>
                <MapPin />
                <div>
                  <h3>Showroom</h3>
                  <p>{site.address}</p>
                  <a
                    className="link-arrow"
                    href={mapHref}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Open in maps
                  </a>
                </div>
              </li>
              <li>
                <Clock />
                <div>
                  <h3>Business hours</h3>
                  <p>
                    {site.hours}
                    <br />
                    {site.hoursNote}
                  </p>
                </div>
              </li>
            </ul>
            <p className="contact__note">{site.demoNotice}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
