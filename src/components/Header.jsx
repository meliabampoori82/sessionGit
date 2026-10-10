import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navItems, site } from '../data/site.js';
import { useFavorites } from '../context/FavoritesContext.jsx';
import { useBooking } from '../context/BookingContext.jsx';
import { ArrowRight, Close, Heart, Mark, Menu, Phone } from './Icons.jsx';

export default function Header({ transparent = false }) {
  const [solid, setSolid] = useState(!transparent);
  const [menuOpen, setMenuOpen] = useState(false);
  const { count } = useFavorites();
  const { openBooking } = useBooking();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setSolid(!transparent || window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [transparent]);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const logo = (
    <Link className="logo" to="/" aria-label={`${site.name} home`}>
      <Mark className="logo__mark" />
      <span className="logo__text">
        <span className="logo__name">Apex</span>
        <span className="logo__sub">Motors</span>
      </span>
    </Link>
  );

  return (
    <>
      <header
        className={`site-header${solid ? ' is-solid' : ''}${
          transparent && !solid ? ' site-header--over-hero' : ''
        }`}
      >
        <div className="shell site-header__inner">
          {logo}

          <nav className="nav" aria-label="Primary">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="header__actions">
            <Link
              className="header__saved"
              to="/inventory?saved=1"
              aria-label={`Saved vehicles (${count})`}
            >
              <Heart filled={count > 0} />
              {count > 0 && <span className="header__saved-count">{count}</span>}
            </Link>
            <button
              type="button"
              className="btn btn--outline btn--sm header__cta"
              onClick={() => openBooking()}
            >
              Book a Test Drive
            </button>
            <button
              type="button"
              className="burger"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? ' is-open' : ''}`} hidden={!menuOpen}>
        <div className="mobile-menu__top">
          <span className="logo logo--light">
            <Mark className="logo__mark" />
            <span className="logo__text">
              <span className="logo__name">Apex</span>
              <span className="logo__sub">Motors</span>
            </span>
          </span>
          <button
            type="button"
            className="mobile-menu__close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <Close />
          </button>
        </div>

        <nav className="mobile-menu__nav" aria-label="Mobile">
          {navItems.map((item, index) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              style={{ animationDelay: `${80 + index * 55}ms` }}
              className={({ isActive }) => `mobile-menu__link${isActive ? ' is-active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="mobile-menu__foot">
          <button
            type="button"
            className="btn btn--gold btn--block"
            onClick={() => {
              setMenuOpen(false);
              openBooking();
            }}
          >
            Book a Test Drive
            <ArrowRight className="btn__icon" />
          </button>
          <a href={site.phoneHref}>
            <Phone />
            {site.phone}
          </a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
    </>
  );
}
