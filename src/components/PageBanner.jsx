import { Link } from 'react-router-dom';
import { ChevronRight } from './Icons.jsx';

/** Dark editorial banner used at the top of inner pages. */
export default function PageBanner({ label, title, text, image, crumbs = [] }) {
  return (
    <section className={`page-banner${image ? ' page-banner--image' : ''}`}>
      {image && <img className="page-banner__bg" src={image} alt="" aria-hidden="true" />}
      <div className="shell page-banner__inner">
        {crumbs.length > 0 && (
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {crumbs.map((crumb) => (
              <span key={crumb.label}>
                <ChevronRight />
                {crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : <span>{crumb.label}</span>}
              </span>
            ))}
          </nav>
        )}
        {label && <p className="eyebrow">{label}</p>}
        <h1>{title}</h1>
        {text && <p className="page-banner__text">{text}</p>}
      </div>
    </section>
  );
}
