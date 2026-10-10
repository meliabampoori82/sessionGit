import { Link } from 'react-router-dom';
import { footerCategories, navItems, site, socials } from '../data/site.js';
import { iconMap, Mail, MapPin, Mark, Phone } from './Icons.jsx';
import NewsletterForm from './NewsletterForm.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="site-footer__news">
          <div>
            <p className="eyebrow">Stay in the loop</p>
            <h2 className="site-footer__news-title">New arrivals, first</h2>
            <p className="site-footer__news-text">
              Occasional updates when a notable vehicle reaches the showroom.
            </p>
          </div>
          <NewsletterForm />
        </div>

        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Link className="logo logo--light" to="/" aria-label={`${site.name} home`}>
              <Mark className="logo__mark" />
              <span className="logo__text">
                <span className="logo__name">Apex</span>
                <span className="logo__sub">Motors</span>
              </span>
            </Link>
            <p className="site-footer__about">
              An independent dealership curating luxury, performance and pre-owned vehicles for
              drivers who care about the details.
            </p>
            <ul className="socials">
              {socials.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={item.label}
                    >
                      <Icon />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <nav className="site-footer__col" aria-label="Footer navigation">
            <h3>Explore</h3>
            <ul>
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="site-footer__col" aria-label="Vehicle categories">
            <h3>Categories</h3>
            <ul>
              {footerCategories.map((item) => (
                <li key={item.label}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__col">
            <h3>Showroom</h3>
            <ul className="site-footer__contact">
              <li>
                <Phone />
                <a href={site.phoneHref}>{site.phone}</a>
              </li>
              <li>
                <Mail />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <MapPin />
                <span>{site.address}</span>
              </li>
              <li>
                <span className="site-footer__hours">
                  {site.hours} · {site.hoursNote}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} {site.name}. Demonstration site.</p>
          <ul className="site-footer__legal">
            <li>
              <Link to="/privacy">Privacy policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms and conditions</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
