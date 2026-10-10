import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';
import { ArrowRight } from './Icons.jsx';

/**
 * Section heading block: eyebrow label, title, supporting text and an optional
 * trailing link. Used by every home/inner section so spacing stays consistent.
 */
export default function SectionHead({
  label,
  title,
  text,
  align = 'left',
  action,
  as: Tag = 'h2',
  className = '',
}) {
  return (
    <Reveal
      className={`section-head section-head--${align}${className ? ` ${className}` : ''}`}
    >
      <div className="section-head__text">
        {label && <p className="eyebrow">{label}</p>}
        {title && <Tag>{title}</Tag>}
        {text && <p className="section-head__lede">{text}</p>}
      </div>
      {action && (
        <Link className="link-arrow" to={action.to}>
          {action.label}
          <ArrowRight />
        </Link>
      )}
    </Reveal>
  );
}
