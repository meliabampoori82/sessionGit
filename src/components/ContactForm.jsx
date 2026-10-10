import { useState } from 'react';
import { contactMethods, contactSubjects, site } from '../data/site.js';
import { ArrowRight, CheckCircle, Spinner } from './Icons.jsx';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const STORAGE_KEY = 'apex:enquiries';

const empty = {
  name: '',
  email: '',
  phone: '',
  subject: contactSubjects[0],
  method: contactMethods[0],
  message: '',
};

const validate = (values) => {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = 'Enter your full name.';
  if (!EMAIL.test(values.email.trim())) errors.email = 'Enter a valid email address.';
  if (values.phone && values.phone.replace(/[^\d]/g, '').length < 7) {
    errors.phone = 'That phone number looks incomplete.';
  }
  if (values.message.trim().length < 10) {
    errors.message = 'Tell us a little more (at least 10 characters).';
  }
  return errors;
};

/** Contact form. There is no backend, so success is reported honestly as local-only. */
export default function ContactForm() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const set = (field) => (event) => {
    const { value } = event.target;
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => (current[field] ? { ...current, [field]: undefined } : current));
  };

  const submit = (event) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      document.getElementById(`contact-${Object.keys(found)[0]}`)?.focus();
      return;
    }
    setStatus('sending');
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      const list = raw ? JSON.parse(raw) : [];
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify([...list, { ...values, submittedAt: new Date().toISOString() }])
      );
    } catch {
      /* storage unavailable — nothing persisted */
    }
    window.setTimeout(() => setStatus('sent'), 650);
  };

  if (status === 'sent') {
    return (
      <div className="form-success" role="status">
        <CheckCircle className="form-success__icon" />
        <h3>Thanks for getting in touch</h3>
        <p>
          Your message has been recorded in this browser. To reach a person right now, call{' '}
          <a href={site.phoneHref}>{site.phone}</a>.
        </p>
        <p className="form-success__note">
          This is a demonstration site — your message was <strong>not delivered</strong> to a
          dealership inbox.
        </p>
        <button
          type="button"
          className="btn btn--outline"
          onClick={() => {
            setValues(empty);
            setStatus('idle');
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={submit} noValidate>
      <div className="field-row">
        <div className="field">
          <label htmlFor="contact-name">Full name</label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={set('name')}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
          />
          {errors.name && (
            <p className="field-error" id="contact-name-error" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={set('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
          />
          {errors.email && (
            <p className="field-error" id="contact-email-error" role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="contact-phone">
            Phone <span className="field__hint">optional</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={set('phone')}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
          />
          {errors.phone && (
            <p className="field-error" id="contact-phone-error" role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor="contact-subject">Subject</label>
          <select id="contact-subject" value={values.subject} onChange={set('subject')}>
            {contactSubjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>
      </div>

      <fieldset className="field field--group">
        <legend>Preferred contact method</legend>
        <div className="radio-row">
          {contactMethods.map((method) => (
            <label key={method} className="radio">
              <input
                type="radio"
                name="method"
                value={method}
                checked={values.method === method}
                onChange={set('method')}
              />
              <span>{method}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          rows={5}
          value={values.message}
          onChange={set('message')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          placeholder="Which vehicle are you interested in?"
        />
        {errors.message && (
          <p className="field-error" id="contact-message-error" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <button type="submit" className="btn btn--gold" disabled={status === 'sending'}>
        {status === 'sending' ? <Spinner className="btn__icon is-spinning" /> : null}
        {status === 'sending' ? 'Sending' : 'Send message'}
        {status !== 'sending' && <ArrowRight className="btn__icon" />}
      </button>

      <p className="form-note">{site.demoNotice}</p>
    </form>
  );
}
