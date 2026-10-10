import { Link } from 'react-router-dom';

/** Dark banner used at the top of inner pages. `image` is optional. */
export default function PageBanner({ label, title, intro, image, crumbs = [] }) {
  return (
    <section className="page-banner">
      {image && (
        <div className="page-banner__media" aria-hidden="true">
          <img src={image} alt="" />
        </div>
      )}
      <div className="shell page-banner__inner">
        {crumbs.length > 0 && (
          <nav className="crumbs" aria-label="Breadcrumb">
            {crumbs.map((crumb) => (
              <span key={crumb.to ?? crumb.label}>
                {crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : crumb.label}
              </span>
            ))}
          </nav>
        )}
        {label && <p className="eyebrow">{label}</p>}
        <h1>{title}</h1>
        {intro && <p>{intro}</p>}
      </div>
    </section>
  );
}
