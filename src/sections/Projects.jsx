import { useMemo, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projectFilters, projects } from '../data/projects';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const visible = useMemo(
    () => projects.filter((p) => filter === 'All' || p.filters.includes(filter)),
    [filter],
  );

  const countFor = (f) => (f === 'All' ? projects.length : projects.filter((p) => p.filters.includes(f)).length);

  return (
    <section id="projects" data-section="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionTitle id="projects-title" title="Projects">
          Things I've built while learning. The AI chatbot is my main full-stack project; the others are where I
          practised frontend fundamentals.
        </SectionTitle>

        <div className="filters" role="group" aria-label="Filter projects">
          {projectFilters.map((f) => (
            <button
              key={f}
              type="button"
              className="filter"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
              <span className="filter__count" aria-hidden="true">
                {countFor(f)}
              </span>
            </button>
          ))}
        </div>
        <p className="sr-only" role="status">
          Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
          {filter === 'All' ? '' : ` filtered by ${filter}`}
        </p>

        <div className="project-grid">
          {visible.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>

    </section>
  );
}
