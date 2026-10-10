import PageBanner from '../components/PageBanner.jsx';
import InquiryForm from '../components/InquiryForm.jsx';
import Reveal from '../components/Reveal.jsx';
import { Mail, MapPin, Phone, Calendar } from '../components/Icons.jsx';
import { properties } from '../data/properties.js';
import { site } from '../data/site.js';

export default function Contact() {
  return (
    <div>
      <PageBanner
        label="Contact"
        title="Start a conversation"
        intro="Tell us what you are looking for and a senior advisor will come back to you within one business day."
        image={properties[5].images[0]}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <section className="section">
        <div className="shell contact-layout">
          <Reveal>
            <div className="contact-cards">
              <div className="contact-card">
                <Phone />
                <div>
                  <h3>Phone</h3>
                  <p>
                    <a href={site.phoneHref}>{site.phone}</a>
                  </p>
                </div>
              </div>
              <div className="contact-card">
                <Mail />
                <div>
                  <h3>Email</h3>
                  <p>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </p>
                </div>
              </div>
              <div className="contact-card">
                <MapPin />
                <div>
                  <h3>Office</h3>
                  <p>{site.address}</p>
                </div>
              </div>
              <div className="contact-card">
                <Calendar />
                <div>
                  <h3>Opening hours</h3>
                  <p>{site.hours}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="contact-form" delay={120}>
            <h2>Send us a message</h2>
            <p>Fields marked optional can be left blank.</p>
            <InquiryForm subject={site.name} submitLabel="Send message" />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
