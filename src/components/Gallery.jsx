import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Close, Expand } from './Icons.jsx';

/** Vehicle image gallery with thumbnails and a fullscreen viewer. */
export default function Gallery({ images, name }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
      if (event.key === 'ArrowRight') setIndex((i) => (i + 1) % images.length);
      if (event.key === 'ArrowLeft') setIndex((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, images.length]);

  const go = (direction) => setIndex((i) => (i + direction + images.length) % images.length);

  return (
    <>
      <div className="gallery">
        <button
          type="button"
          className="gallery__main"
          onClick={() => setOpen(true)}
          aria-label={`Open image ${index + 1} of ${images.length} full screen`}
        >
          <img
            src={images[index]}
            alt={`${name} — photo ${index + 1}`}
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
          <span className="gallery__expand" aria-hidden="true">
            <Expand />
          </span>
        </button>

        <div className="gallery__thumbs" role="tablist" aria-label={`${name} gallery`}>
          {images.map((src, i) => (
            <button
              key={`${src}-${i}`}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show photo ${i + 1}`}
              className={`gallery__thumb${i === index ? ' is-active' : ''}`}
              onClick={() => setIndex(i)}
            >
              <img src={src} alt="" loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${name} images`}>
          <div className="lightbox__bar">
            <span>
              {index + 1} / {images.length}
            </span>
            <button
              type="button"
              className="lightbox__close"
              onClick={() => setOpen(false)}
              aria-label="Close viewer"
              autoFocus
            >
              <Close />
            </button>
          </div>

          <div className="lightbox__stage">
            <img src={images[index]} alt={`${name} — photo ${index + 1}`} />
            <button
              type="button"
              className="lightbox__nav lightbox__nav--prev"
              onClick={() => go(-1)}
              aria-label="Previous photo"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              className="lightbox__nav lightbox__nav--next"
              onClick={() => go(1)}
              aria-label="Next photo"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
