import Reveal from './Reveal';

export default function SectionTitle({ id, title, children }) {
  return (
    <Reveal className="section-head">
      <h2 id={id}>{title}</h2>
      {children ? <p className="section-lead">{children}</p> : null}
    </Reveal>
  );
}
