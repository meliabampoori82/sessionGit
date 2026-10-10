import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { vehicleTitle } from '../data/vehicles.js';
import BookingForm from '../components/BookingForm.jsx';
import { Close } from '../components/Icons.jsx';

const BookingContext = createContext(null);

/** Drives a single app-wide test drive dialog so every CTA opens the same form. */
export function BookingProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [vehicle, setVehicle] = useState(null);

  const openBooking = useCallback((selected = null) => {
    setVehicle(selected);
    setOpen(true);
  }, []);

  const closeBooking = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const value = useMemo(() => ({ openBooking, closeBooking }), [openBooking, closeBooking]);

  return (
    <BookingContext.Provider value={value}>
      {children}
      {open && (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-title"
          onClick={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div className="modal__panel">
            <div className="modal__head">
              <div>
                <p className="eyebrow">Test drive</p>
                <h2 id="booking-title">
                  {vehicle ? `Drive the ${vehicleTitle(vehicle)}` : 'Book a Test Drive'}
                </h2>
              </div>
              <button
                type="button"
                className="modal__close"
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                <Close />
              </button>
            </div>
            <div className="modal__body">
              <BookingForm vehicle={vehicle} onDone={closeBooking} />
            </div>
          </div>
        </div>
      )}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) throw new Error('useBooking must be used within BookingProvider');
  return context;
}
