import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navItems, site } from '../data/site.js';
import { useFavorites } from '../context/FavoritesContext.jsx';
import { Close, Heart, Mark, Menu, Phone } from './Icons.jsx';

export default function Header({ transparent = false }) {
  const [solid, setSolid] = useState(!transparent);
  const [menuOpen, setMenuOpen] = useState(false);
  const { count } = useFavorites();
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

  return (
    <>
      <header
        className={`site-header${solid ? ' is-solid' : ''}${transparent && !solid ? ' site-header--over-hero' : ''}`}
      >
        <div className="shell site-header__inner">
          <Link className="logo" to="/" aria-label={`${site.name} home`}>
            <Mark className="logo__mark" />
            <span className="logo__text">
              <span className="logo__name">Horizon</span>
              <span className="logo__sub">Properties</span>
            </span>
          </Link>

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
              to="/properties?saved=1"
              aria-label={`Saved properties (${count})`}
            >
              <Heart filled={count > 0} />
              {count > 0 && <span className="header__saved-count">{count}</span>}
            </Link>
            <a className="btn btn--outline header__phone" href={site.phoneHref}>
              <Phone className="btn__icon" />
              {site.phone}
            </a>
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
          <Link className="logo" to="/" onClick={() => setMenuOpen(false)}>
            <Mark className="logo__mark" />
            <span className="logo__text">
              <span className="logo__name">Horizon</span>
              <span className="logo__sub">Properties</span>
            </span>
          </Link>
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
              className={({ isActive }) =>
                `mobile-menu__link${isActive ? ' is-active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="mobile-menu__foot">
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <p>{site.address}</p>
        </div>
      </div>
    </>
  );
}
