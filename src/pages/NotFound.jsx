import { Link } from 'react-router-dom';
import { ArrowRight } from '../components/Icons.jsx';

export default function NotFound() {
  return (
    <section className="section notfound">
      <div className="shell notfound__inner">
        <p className="eyebrow">Error 404</p>
        <h1>This page has left the showroom</h1>
        <p>
          The address you followed does not exist. Head back to the inventory, or browse by brand.
        </p>
        <div className="notfound__actions">
          <Link className="btn btn--gold" to="/inventory">
            View inventory
            <ArrowRight className="btn__icon" />
          </Link>
          <Link className="btn btn--outline" to="/">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
