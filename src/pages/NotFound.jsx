import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="shell notfound">
      <p className="eyebrow eyebrow--center">404</p>
      <h1>We couldn’t find that page</h1>
      <p>The property may have been sold or the link may be out of date.</p>
      <Link className="btn btn--navy" to="/properties">
        Browse all properties
      </Link>
    </div>
  );
}
