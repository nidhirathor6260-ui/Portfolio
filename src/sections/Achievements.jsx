import { Award, ExternalLink, Flame } from 'lucide-react';
import BrandLogo from '../components/BrandLogo';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import { ICONS, PROFILE_ICONS } from '../components/icons';
import { codingActivities, leetcode, scholarship } from '../data/achievements';
import { profiles } from '../data/site';

/** Company name badge. Shows the company's logo beside the name when it can be loaded. */
function ScholarshipMark() {
  return (
    <span className="scholar__mark">
      <BrandLogo logo={scholarship.logo} domain={scholarship.domain} size={28} className="scholar__logo" />
      {scholarship.organization}
    </span>
  );
}

export default function Achievements() {
  const codingProfiles = profiles.filter((p) => ['leetcode', 'codechef', 'codolio'].includes(p.id));

  return (
    <section
      id="achievements"
      data-section="achievements"
      className="section section--alt"
      aria-labelledby="achievements-title"
    >
      <div className="container">
        <SectionTitle id="achievements-title" title="Coding & Achievements">
          Consistent problem-solving practice, plus a company scholarship.
        </SectionTitle>

        <div className="ach">
          <Reveal as="article" className="ach__leet" aria-labelledby="leet-title">
            <h3 id="leet-title" className="ach__heading">
              LeetCode
            </h3>
            <p className="ach__number">
              {leetcode.solved}
              <span className="ach__number-label"> problems solved</span>
            </p>
            <ul className="badges" aria-label="LeetCode badges">
              {leetcode.badges.map((b) => (
                <li className="badge" key={b}>
                  <Flame size={16} aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
            <Button href={leetcode.url} external variant="secondary" size="sm" icon={ExternalLink}>
              View LeetCode profile
            </Button>
          </Reveal>

          <Reveal as="article" className="ach__scholar" delay={0.08} aria-labelledby="scholar-title">
            <p className="ach__flag">
              <Award size={16} aria-hidden="true" /> Scholarship
            </p>
            <ScholarshipMark />
            <h3 id="scholar-title" className="ach__scholar-title">
              {scholarship.title}
            </h3>
            <p className="ach__scholar-batch">{scholarship.batch}</p>
          </Reveal>
        </div>

        <Reveal className="activities">
          <h3 className="activities__title">Coding & technical activities</h3>
          <ul className="activities__list">
            {codingActivities.map((a) => {
              const Icon = ICONS[a.icon];
              return (
                <li key={a.id}>
                  <Icon size={18} aria-hidden="true" />
                  {a.label}
                </li>
              );
            })}
          </ul>
          <ul className="activities__profiles" aria-label="Coding profiles">
            {codingProfiles.map((p) => {
              const Icon = PROFILE_ICONS[p.id];
              return (
                <li key={p.id}>
                  <a className="text-link" href={p.url} target="_blank" rel="noopener noreferrer">
                    <BrandLogo domain={p.domain} size={20} fallback={<Icon size={16} aria-hidden="true" />} />
                    {p.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
