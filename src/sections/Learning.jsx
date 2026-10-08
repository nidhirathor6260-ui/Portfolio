import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import { learning } from '../data/learning';

export default function Learning() {
  return (
    <section
      id="learning"
      data-section="education"
      className="section section--tight section--alt"
      aria-labelledby="learning-title"
    >
      <div className="container">
        <SectionTitle id="learning-title" title="Currently Learning">
          Work in progress, not finished expertise.
        </SectionTitle>
        <Reveal as="ul" className="learning">
          {learning.map((item) => (
            <li key={item.id}>
              <span className="learning__dot" aria-hidden="true" />
              {item.label}
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
