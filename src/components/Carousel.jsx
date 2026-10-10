import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from './Icons.jsx';

/**
 * Horizontal, snap-scrolling rail with pointer drag, touch swipe, arrow buttons
 * and keyboard support. Children are rendered via `renderItem`.
 */
export default function Carousel({ items, renderItem, label = 'Vehicles' }) {
  const viewport = useRef(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: 0 });
  const [progress, setProgress] = useState(0);
  const [edges, setEdges] = useState({ start: true, end: false });

  const measure = useCallback(() => {
    const node = viewport.current;
    if (!node) return;
    const max = node.scrollWidth - node.clientWidth;
    const ratio = max > 0 ? node.scrollLeft / max : 0;
    setProgress(Math.min(1, Math.max(0, ratio)));
    setEdges({ start: node.scrollLeft <= 4, end: max - node.scrollLeft <= 4 });
  }, []);

  useEffect(() => {
    measure();
    const node = viewport.current;
    if (!node) return undefined;
    node.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    return () => {
      node.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
    };
  }, [measure, items.length]);

  const step = (direction) => {
    const node = viewport.current;
    if (!node) return;
    const first = node.querySelector('[data-carousel-item]');
    const gap = 24;
    const amount = first ? first.getBoundingClientRect().width + gap : node.clientWidth * 0.8;
    node.scrollBy({ left: amount * direction, behavior: 'smooth' });
  };

  const onPointerDown = (event) => {
    if (event.pointerType === 'touch') return; // native touch scrolling is better
    const node = viewport.current;
    if (!node) return;
    drag.current = {
      active: true,
      startX: event.clientX,
      startScroll: node.scrollLeft,
      moved: 0,
    };
    node.classList.add('is-dragging');
    node.setPointerCapture?.(event.pointerId);
  };

  const onPointerMove = (event) => {
    const node = viewport.current;
    if (!drag.current.active || !node) return;
    const delta = event.clientX - drag.current.startX;
    drag.current.moved = Math.abs(delta);
    node.scrollLeft = drag.current.startScroll - delta;
  };

  const endDrag = (event) => {
    const node = viewport.current;
    if (!drag.current.active || !node) return;
    drag.current.active = false;
    node.classList.remove('is-dragging');
    node.releasePointerCapture?.(event.pointerId);
    // Snap to the nearest card after a drag.
    const first = node.querySelector('[data-carousel-item]');
    if (first) {
      const gap = 24;
      const width = first.getBoundingClientRect().width + gap;
      const index = Math.round(node.scrollLeft / width);
      node.scrollTo({ left: index * width, behavior: 'smooth' });
    }
  };

  const onKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      step(1);
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      step(-1);
    }
  };

  return (
    <div className="carousel">
      <div
        className="carousel__viewport"
        ref={viewport}
        role="group"
        aria-label={`${label} carousel`}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
      >
        {items.map((item, index) => (
          <div className="carousel__item" data-carousel-item key={item?.id ?? index}>
            {renderItem(item, index)}
          </div>
        ))}
      </div>

      <div className="carousel__progress" aria-hidden="true">
        <span style={{ width: '34%', transform: `translateX(${progress * (100 / 34 - 1) * 100}%)` }} />
      </div>

      <div className="carousel__controls-row">
        <div className="carousel__controls">
          <button
            type="button"
            className="icon-btn"
            onClick={() => step(-1)}
            disabled={edges.start}
            aria-label="Previous vehicles"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={() => step(1)}
            disabled={edges.end}
            aria-label="Next vehicles"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
