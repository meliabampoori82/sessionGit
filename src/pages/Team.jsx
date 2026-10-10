import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner.jsx';
import Reveal from '../components/Reveal.jsx';
import { ArrowRight, Linkedin, Mail, Phone } from '../components/Icons.jsx';
import { properties } from '../data/properties.js';
import { site, team } from '../data/site.js';

export default function Team() {
  return (
    <div>
      <PageBanner
        label="Our team"
        title="Senior advisors, one per client"
        intro="Four specialists covering luxury sales, investment, valuation and international relocation."
        image={properties[4].images[0]}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Team' }]}
      />

      <section className="section">
        <div className="shell">
          <div className="team-grid">
            {team.map((member, index) => (
              <Reveal key={member.id} delay={(index % 4) * 70}>
                <article className="team-card">
                  <div className="team-card__media">
                    <img src={member.image} alt={member.name} loading="lazy" />
                  </div>
                  <div className="team-card__body">
                    <h3>{member.name}</h3>
                    <p className="team-card__role">{member.role}</p>
                    <p className="team-card__bio">{member.bio}</p>
                    <div className="team-card__links">
                      <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`}>
                        <Mail />
                      </a>
                      <a href={site.phoneHref} aria-label={`Call ${member.name}`}>
                        <Phone />
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <Linkedin />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight" style={{ paddingTop: 0 }}>
        <div className="shell">
          <Reveal className="cta-band">
            <div className="cta-band__left">
              <div>
                <h2>Work with a senior advisor</h2>
                <p>Book an introduction call — no obligation, no mailing list.</p>
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
