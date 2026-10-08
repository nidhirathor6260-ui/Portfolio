import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import { education } from '../data/education';

export default function Education() {
  return (
    <section id="education" data-section="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <SectionTitle id="education-title" title="Education" />

        <ol className="timeline">
          {education.timeline.map((item, i) => (
            <Reveal as="li" key={item.id} className={`timeline__item ${item.current ? 'is-current' : ''}`} delay={i * 0.06}>
              <span className="timeline__dot" aria-hidden="true" />
              <p className="timeline__period">{item.period}</p>
              <div className="timeline__card">
                <div>
                  <h3 className="timeline__title">{item.title}</h3>
                  {item.institution ? <p className="timeline__inst">{item.institution}</p> : null}
                  {item.status ? <p className="timeline__status">{item.status}</p> : null}
                </div>

                {item.current ? (
                  <p className="score score--main">
                    <span className="score__label">CGPA</span>
                    <span className="score__value">{education.cgpa}</span>
                    <span className="score__scale">/ {education.cgpaScale}</span>
                  </p>
                ) : (
                  <p className="score">
                    <span className="score__label">Score</span>
                    <span className="score__value">{item.score}</span>
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
