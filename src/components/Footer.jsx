import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navItems, site } from '../data/site.js';
import { CheckCircle, Facebook, Instagram, Linkedin, Mail, MapPin, Mark, Phone } from './Icons.jsx';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('idle'); // idle | error | done

  const subscribe = (event) => {
    event.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
    setState(valid ? 'done' : 'error');
  };

  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link className="logo" to="/">
              <Mark className="logo__mark" />
              <span className="logo__text">
                <span className="logo__name">Horizon</span>
                <span className="logo__sub">Properties</span>
              </span>
            </Link>
            <p>
              A private-client agency for architecturally significant homes and considered
              property investment across the United States.
            </p>
            <div className="footer__socials">
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </div>
          </div>

          <div>
            <h3>Navigate</h3>
            <ul className="footer__list">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Contact</h3>
            <ul className="footer__list">
              <li>
                <a href={site.phoneHref}>
                  <Phone style={{ width: 14, height: 14, display: 'inline', marginRight: 8 }} />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>
                  <Mail style={{ width: 14, height: 14, display: 'inline', marginRight: 8 }} />
                  {site.email}
                </a>
              </li>
              <li>
                <span>
                  <MapPin style={{ width: 14, height: 14, display: 'inline', marginRight: 8 }} />
                  {site.address}
                </span>
              </li>
            </ul>
          </div>

          <div className="footer__newsletter-col">
            <h3>Newsletter</h3>
            <div className="footer__newsletter">
              <p style={{ marginBottom: 16 }}>
                New listings and market notes, once a month.
              </p>
              {state === 'done' ? (
                <p className="form-success">
                  <CheckCircle />
                  You are subscribed. Look out for our next note.
                </p>
              ) : (
                <form onSubmit={subscribe} noValidate>
                  <label className="sr-only" htmlFor="footer-email">
                    Email address
                  </label>
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    <input
                      id="footer-email"
                      className="input"
                      type="email"
                      placeholder="you@email.com"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                        setState('idle');
                      }}
                      style={{ flex: '1 1 190px' }}
                      aria-invalid={state === 'error'}
                    />
                    <button className="btn btn--gold" type="submit">
                      Join
                    </button>
                  </div>
                  {state === 'error' && (
                    <p className="field__error" style={{ marginTop: 8 }}>
                      Please enter a valid email address.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Licensed real estate brokerage · Texas · California · Florida</p>
        </div>
      </div>
    </footer>
  );
}
