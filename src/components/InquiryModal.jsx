import { useEffect } from 'react';
import { Close } from './Icons.jsx';
import InquiryForm from './InquiryForm.jsx';

export default function InquiryModal({ open, onClose, title, subject, submitLabel }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="modal__panel">
        <div className="modal__head">
          <div>
            <h3>{title}</h3>
            {subject && <p className="form-note" style={{ marginTop: 8 }}>{subject}</p>}
          </div>
          <button type="button" className="modal__close" onClick={onClose} aria-label="Close" autoFocus>
            <Close />
          </button>
        </div>
        <InquiryForm subject={subject} submitLabel={submitLabel} />
      </div>
    </div>
  );
}
