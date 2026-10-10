import { useEffect, useMemo, useState } from 'react';
import { formatPrice, vehicleTitle, vehicles } from '../data/vehicles.js';
import { ArrowRight, CheckCircle, Spinner } from './Icons.jsx';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const STORAGE_KEY = 'apex:test-drives';

const pad = (value) => String(value).padStart(2, '0');
const todayISO = () => {
  const now = new Date();
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
};

const timeSlots = () => {
  const slots = [];
  for (let hour = 9; hour <= 18; hour += 1) {
    slots.push(`${pad(hour)}:00`);
    if (hour < 18) slots.push(`${pad(hour)}:30`);
  }
  return slots;
};

const emptyForm = (vehicleId = '') => ({
  vehicleId,
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  notes: '',
});

const validate = (values) => {
  const errors = {};
  if (!values.vehicleId) errors.vehicleId = 'Choose the vehicle you would like to drive.';
  if (values.name.trim().length < 2) errors.name = 'Enter your full name.';
  if (!EMAIL.test(values.email.trim())) errors.email = 'Enter a valid email address.';
  if (values.phone.replace(/[^\d]/g, '').length < 7) {
    errors.phone = 'Enter a phone number we can reach you on.';
  }
  if (!values.date) {
    errors.date = 'Choose a preferred date.';
  } else if (values.date < todayISO()) {
    errors.date = 'Choose today or a later date.';
  }
  if (!values.time) errors.time = 'Choose a preferred time.';
  return errors;
};

/**
 * Test drive request form. There is no backend in this project, so a valid
 * submission is stored locally and confirmed as a demo request — never as a
 * booked appointment.
 */
export default function BookingForm({ vehicle, onDone }) {
  const slots = useMemo(timeSlots, []);
  const [values, setValues] = useState(() => emptyForm(vehicle?.id ?? ''));
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  useEffect(() => {
    setValues(emptyForm(vehicle?.id ?? ''));
    setErrors({});
    setStatus('idle');
  }, [vehicle?.id]);

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
      const first = document.getElementById(`booking-${Object.keys(found)[0]}`);
      first?.focus();
      return;
    }

    setStatus('sending');
    const selected = vehicles.find((item) => item.id === values.vehicleId);
    const request = {
      ...values,
      vehicle: selected ? vehicleTitle(selected) : values.vehicleId,
      submittedAt: new Date().toISOString(),
    };
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      const list = raw ? JSON.parse(raw) : [];
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...list, request]));
    } catch {
      /* storage unavailable — the request is not persisted anywhere */
    }
    window.setTimeout(() => setStatus('sent'), 650);
  };

  if (status === 'sent') {
    const selected = vehicles.find((item) => item.id === values.vehicleId);
    return (
      <div className="form-success" role="status">
        <CheckCircle className="form-success__icon" />
        <h3>Request recorded</h3>
        <p>
          Thanks {values.name.split(' ')[0]} — we have your details for the{' '}
          <strong>{selected ? vehicleTitle(selected) : 'selected vehicle'}</strong> on{' '}
          {values.date} at {values.time}.
        </p>
        <p className="form-success__note">
          This is a demonstration site. Your request was saved in this browser only and was{' '}
          <strong>not sent to a dealership</strong> — no appointment has been booked.
        </p>
        {onDone && (
          <button type="button" className="btn btn--outline" onClick={onDone}>
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <form className="form" onSubmit={submit} noValidate>
      <div className="field">
        <label htmlFor="booking-vehicleId">Vehicle</label>
        <select
          id="booking-vehicleId"
          value={values.vehicleId}
          onChange={set('vehicleId')}
          aria-invalid={Boolean(errors.vehicleId)}
          aria-describedby={errors.vehicleId ? 'booking-vehicleId-error' : undefined}
        >
          <option value="">Select a vehicle…</option>
          {vehicles.map((item) => (
            <option key={item.id} value={item.id}>
              {item.year} {vehicleTitle(item)} — {formatPrice(item.price)}
            </option>
          ))}
        </select>
        {errors.vehicleId && (
          <p className="field-error" id="booking-vehicleId-error" role="alert">
            {errors.vehicleId}
          </p>
        )}
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="booking-name">Full name</label>
          <input
            id="booking-name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={set('name')}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'booking-name-error' : undefined}
          />
          {errors.name && (
            <p className="field-error" id="booking-name-error" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor="booking-email">Email</label>
          <input
            id="booking-email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={set('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'booking-email-error' : undefined}
          />
          {errors.email && (
            <p className="field-error" id="booking-email-error" role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor="booking-phone">Phone</label>
        <input
          id="booking-phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={set('phone')}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? 'booking-phone-error' : undefined}
        />
        {errors.phone && (
          <p className="field-error" id="booking-phone-error" role="alert">
            {errors.phone}
          </p>
        )}
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="booking-date">Preferred date</label>
          <input
            id="booking-date"
            type="date"
            min={todayISO()}
            value={values.date}
            onChange={set('date')}
            aria-invalid={Boolean(errors.date)}
            aria-describedby={errors.date ? 'booking-date-error' : undefined}
          />
          {errors.date && (
            <p className="field-error" id="booking-date-error" role="alert">
              {errors.date}
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor="booking-time">Preferred time</label>
          <select
            id="booking-time"
            value={values.time}
            onChange={set('time')}
            aria-invalid={Boolean(errors.time)}
            aria-describedby={errors.time ? 'booking-time-error' : undefined}
          >
            <option value="">Select a time…</option>
            {slots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          {errors.time && (
            <p className="field-error" id="booking-time-error" role="alert">
              {errors.time}
            </p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor="booking-notes">
          Notes <span className="field__hint">optional</span>
        </label>
        <textarea
          id="booking-notes"
          rows={3}
          value={values.notes}
          onChange={set('notes')}
          placeholder="Anything we should know before your visit?"
        />
      </div>

      <button type="submit" className="btn btn--gold btn--block" disabled={status === 'sending'}>
        {status === 'sending' ? <Spinner className="btn__icon is-spinning" /> : null}
        {status === 'sending' ? 'Sending request' : 'Request test drive'}
        {status !== 'sending' && <ArrowRight className="btn__icon" />}
      </button>

      <p className="form-note">
        Demonstration site: requests are stored in your browser only and are not sent to a real
        dealership.
      </p>
    </form>
  );
}
