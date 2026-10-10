import { useState } from 'react';
import { ArrowRight, Spinner } from './Icons.jsx';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Footer newsletter signup. There is no backend in this project, so the address
 * is validated locally and the confirmation says plainly that nothing was sent.
 */
export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | done

  const submit = (event) => {
    event.preventDefault();
    const value = email.trim();
    if (!value) {
      setError('Enter your email address.');
      return;
    }
    if (!EMAIL.test(value)) {
      setError('That email address does not look right.');
      return;
    }
    setError('');
    setStatus('sending');
    window.setTimeout(() => setStatus('done'), 600);
  };

  if (status === 'done') {
    return (
      <p className="newsletter__done" role="status">
        Thanks — this is a demo site, so <strong>{email}</strong> was not added to a real mailing
        list.
      </p>
    );
  }

  return (
    <form className="newsletter" onSubmit={submit} noValidate>
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        name="email"
        placeholder="Your email address"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          if (error) setError('');
        }}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? 'newsletter-error' : undefined}
      />
      <button type="submit" className="btn btn--gold" disabled={status === 'sending'}>
        {status === 'sending' ? <Spinner className="btn__icon is-spinning" /> : null}
        Subscribe
        {status !== 'sending' && <ArrowRight className="btn__icon" />}
      </button>
      {error && (
        <p className="field-error" id="newsletter-error" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
