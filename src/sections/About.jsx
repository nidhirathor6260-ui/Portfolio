import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import { about } from '../data/site';

export default function About() {
  return (
    <section id="about" data-section="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionTitle id="about-title" title="About me" />

        <div className="about">
          <Reveal className="about__text">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>

          <Reveal className="about__interests" delay={0.08}>
            <h3 className="about__sub">Interests</h3>
            <ul className="chips" aria-label="Interests">
              {about.interests.map((i) => (
                <li className="chip" key={i}>
                  {i}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
