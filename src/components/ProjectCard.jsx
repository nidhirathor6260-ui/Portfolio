import { memo } from 'react';
import { Layers } from 'lucide-react';
import { ICONS } from './icons';
import ProjectLinks from './ProjectLinks';
import Placeholder from './Placeholder';
import Reveal from './Reveal';

function TechList({ tech }) {
  if (!tech.length) return <Placeholder>[Add Technologies]</Placeholder>;
  return (
    <ul className="chips chips--tech" aria-label="Technologies">
      {tech.map((t) => (
        <li className="chip chip--tech" key={t}>
          {t}
        </li>
      ))}
    </ul>
  );
}

function ProjectCard({ project }) {
  const Icon = ICONS[project.icon] || Layers;
  const featured = Boolean(project.featured);

  return (
    <Reveal
      as="article"
      className={`project ${featured ? 'project--featured' : ''}`}
      aria-labelledby={`project-${project.id}`}
    >
      <div className="project__head">
        <span className="project__icon">
          <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
        </span>
        <p className="project__category">{project.category}</p>
        {featured ? <span className="project__flag">Featured</span> : null}
      </div>

      <h3 id={`project-${project.id}`} className="project__title">
        {project.name}
      </h3>
      <p className="project__desc">{project.description}</p>

      <TechList tech={project.technologies} />

      <ProjectLinks project={project} />
    </Reveal>
  );
}

export default memo(ProjectCard);
