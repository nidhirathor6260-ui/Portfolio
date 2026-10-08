import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import { ICONS } from '../components/icons';
import { skillGroups, skillLegend } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" data-section="skills" className="section section--alt" aria-labelledby="skills-title">
      <div className="container">
        <SectionTitle id="skills-title" title="Skills">
          Grouped by where I honestly am with each one, so you can see what I've built with and what I'm still learning.
        </SectionTitle>

        <ul className="legend" aria-label="How to read the skill badges">
          {skillLegend.map((l) => (
            <li key={l.status}>
              <span className={`legend__swatch legend__swatch--${l.status}`} aria-hidden="true" />
              {l.label}
            </li>
          ))}
        </ul>

        <div className="skills">
          {skillGroups.map((group, index) => {
            const Icon = ICONS[group.icon];
            return (
              <Reveal
                as="article"
                key={group.id}
                delay={Math.min(index, 3) * 0.05}
                className={`skill-group skill-group--${group.status} ${group.width === 'wide' ? 'skill-group--wide' : ''}`}
              >
                <header className="skill-group__head">
                  <span className="skill-group__icon" aria-hidden="true">
                    {Icon ? <Icon size={20} /> : null}
                  </span>
                  <div>
                    <h3>{group.title}</h3>
                    {group.statusLabel ? <p className="skill-group__status">{group.statusLabel}</p> : null}
                  </div>
                </header>
                {group.blurb ? <p className="skill-group__blurb">{group.blurb}</p> : null}
                <ul className="skill-list">
                  {group.items.map((item) => (
                    <li className={`skill skill--${group.status}`} key={item.name}>
                      {item.name}
                      {item.note ? <span className="skill__note">{item.note}</span> : null}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
