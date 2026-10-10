import { Link } from 'react-router-dom';
import { team } from '../data/site.js';
import PageBanner from '../components/PageBanner.jsx';
import Reveal from '../components/Reveal.jsx';
import { ArrowRight, Mail } from '../components/Icons.jsx';

export default function Team() {
  return (
    <>
      <PageBanner
        label="The people"
        title="Meet the Team"
        text="Four specialists who between them cover sales, finance and everything after the handover."
        crumbs={[{ label: 'Team' }]}
      />

      <section className="section">
        <div className="shell team-page__grid">
          {team.map((member, index) => (
            <Reveal as="article" className="team-profile" key={member.id} delay={index * 70}>
              <div className="team-profile__media">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h2>{member.name}</h2>
              <p className="team-profile__role">{member.role}</p>
              <p className="team-profile__bio">{member.bio}</p>
              <a className="link-arrow" href={`mailto:${member.email}`}>
                <Mail />
                Email {member.name.split(' ')[0]}
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--mist">
        <div className="shell closing-cta__inner">
          <h2>Prefer to speak to someone?</h2>
          <p>Tell us what you are looking for and the right specialist will be in touch.</p>
          <div className="closing-cta__actions">
            <Link className="btn btn--dark" to="/contact">
              Contact us
              <ArrowRight className="btn__icon" />
            </Link>
            <Link className="btn btn--outline" to="/inventory">
              Browse inventory
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
