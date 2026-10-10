/** Consistent section heading: eyebrow label + title + optional intro or aside. */
export default function SectionHead({
  label,
  title,
  intro,
  aside,
  center = false,
  as: Tag = 'h2',
}) {
  const head = (
    <div className="section-head">
      {label && <p className={`eyebrow${center ? ' eyebrow--center' : ''}`}>{label}</p>}
      <Tag>{title}</Tag>
      {intro && <p style={{ marginTop: 18 }}>{intro}</p>}
    </div>
  );

  if (aside) {
    return (
      <div className="section-head--split">
        {head}
        <div>{aside}</div>
      </div>
    );
  }

  return center ? <div className="section-head--center">{head}</div> : head;
}
