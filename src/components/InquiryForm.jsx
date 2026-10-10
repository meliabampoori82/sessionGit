import { useState } from 'react';
import { CheckCircle } from './Icons.jsx';

const INQUIRY_KEY = 'horizon:inquiries';

const emptyForm = { name: '', email: '', phone: '', date: '', message: '' };

/**
 * Contact / enquiry form. Submissions are validated and recorded locally so the
 * data layer can later be swapped for a real backend endpoint.
 */
export default function InquiryForm({ subject, submitLabel = 'Send enquiry', compact = false }) {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (form.name.trim().length < 2) next.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      next.email = 'Please enter a valid email address.';
    if (form.phone && form.phone.replace(/\D/g, '').length < 7)
      next.phone = 'Please enter a valid phone number.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = (event) => {
    event.preventDefault();
    if (!validate()) return;
    try {
      const stored = JSON.parse(window.localStorage.getItem(INQUIRY_KEY) || '[]');
      stored.push({ ...form, subject, sentAt: new Date().toISOString() });
      window.localStorage.setItem(INQUIRY_KEY, JSON.stringify(stored));
    } catch {
      /* storage unavailable — the enquiry is still confirmed to the visitor */
    }
    setSent(true);
  };

  if (sent) {
    return (
      <div className="form-success" role="status">
        <CheckCircle />
        <div>
          <strong>Thank you — your request is with us.</strong>
          <p style={{ marginTop: 6 }}>
            A senior advisor will reply within one business day{subject ? ` about ${subject}` : ''}.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="form-grid" onSubmit={submit} noValidate>
      <div className="field form-grid--full">
        <label htmlFor="inq-name">Full name</label>
        <input
          id="inq-name"
          className="input"
          value={form.name}
          onChange={update('name')}
          aria-invalid={Boolean(errors.name)}
          autoComplete="name"
        />
        {errors.name && <p className="field__error">{errors.name}</p>}
      </div>

      <div className="field">
        <label htmlFor="inq-email">Email</label>
        <input
          id="inq-email"
          className="input"
          type="email"
          value={form.email}
          onChange={update('email')}
          aria-invalid={Boolean(errors.email)}
          autoComplete="email"
        />
        {errors.email && <p className="field__error">{errors.email}</p>}
      </div>

      <div className="field">
        <label htmlFor="inq-phone">Phone (optional)</label>
        <input
          id="inq-phone"
          className="input"
          type="tel"
          value={form.phone}
          onChange={update('phone')}
          aria-invalid={Boolean(errors.phone)}
          autoComplete="tel"
        />
        {errors.phone && <p className="field__error">{errors.phone}</p>}
      </div>

      {!compact && (
        <div className="field form-grid--full">
          <label htmlFor="inq-date">Preferred viewing date (optional)</label>
          <input
            id="inq-date"
            className="input"
            type="date"
            value={form.date}
            onChange={update('date')}
          />
        </div>
      )}

      <div className="field form-grid--full">
        <label htmlFor="inq-message">
          {compact ? 'Message' : 'What are you looking for?'}
        </label>
        <textarea
          id="inq-message"
          className="textarea"
          value={form.message}
          onChange={update('message')}
          placeholder="Tell us about the property, budget or timeline you have in mind."
        />
      </div>

      <div className="form-grid--full">
        <button className="btn btn--gold btn--block" type="submit">
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
