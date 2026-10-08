import { m } from 'framer-motion';
import { Download, FolderGit2, GraduationCap, Mail, MapPin } from 'lucide-react';
import Button from '../components/Button';
import ProfilePhoto from '../components/ProfilePhoto';
import SocialLinks from '../components/SocialLinks';
import { site } from '../data/site';
import { education } from '../data/education';
import { leetcode } from '../data/achievements';
import { projects } from '../data/projects';
import { certifications } from '../data/certifications';
import { useResumeStatus } from '../hooks/useResumeStatus';

// One orchestrated entrance for the first screen. Nothing else on the page animates on load.
const enter = (i) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.07 * i, ease: [0.22, 1, 0.36, 1] },
});

const stats = [
  { value: education.cgpa, unit: `/ ${education.cgpaScale}`, label: 'CGPA' },
  { value: leetcode.solved, label: 'LeetCode problems solved' },
  { value: String(projects.length), label: 'Projects built' },
  { value: String(certifications.length), label: 'Certifications' },
];

export default function Hero() {
  const resume = useResumeStatus(site.resume.path);
  const resumeReady = resume !== 'missing';

  return (
    <section id="home" data-section="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <m.ul className="hero__facts" {...enter(0)}>
            <li>
              <GraduationCap size={16} aria-hidden="true" /> ABES Engineering College
            </li>
            <li>
              <MapPin size={16} aria-hidden="true" /> Ghaziabad, India
            </li>
          </m.ul>

          <m.h1 id="hero-title" className="hero__name" {...enter(1)}>
            {site.name}
          </m.h1>

          <m.p className="hero__title" {...enter(2)}>
            <span>{site.titleParts[0]}</span>
            <span className="sr-only"> | </span>
            <span>{site.titleParts[1]}</span>
          </m.p>

          <m.p className="hero__tagline" {...enter(3)}>
            {site.tagline}
          </m.p>

          <m.div className="hero__cta" {...enter(4)}>
            <Button href="#projects" icon={FolderGit2}>
              View Projects
            </Button>
            {resumeReady ? (
              <Button variant="secondary" icon={Download} href={site.resume.path} download={site.resume.downloadName}>
                Download Resume
              </Button>
            ) : null}
            <Button variant="ghost" icon={Mail} href="#contact">
              Contact Me
            </Button>
          </m.div>

          <m.div className="hero__social" {...enter(5)}>
            <SocialLinks />
          </m.div>
        </div>

        <m.div className="hero__photo" {...enter(3)}>
          <ProfilePhoto />
        </m.div>
      </div>

      <div className="container">
        <m.dl className="stats" {...enter(6)}>
          {stats.map((s) => (
            <div className="stats__item" key={s.label}>
              <dt>{s.label}</dt>
              <dd>
                {s.value}
                {s.unit ? <span className="stats__unit">{s.unit}</span> : null}
              </dd>
            </div>
          ))}
        </m.dl>
      </div>
    </section>
  );
}
