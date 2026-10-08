import { useState } from 'react';
import { Layers } from 'lucide-react';
import { ICONS } from './icons';
import { SHOW_PLACEHOLDERS } from '../data/site';

/**
 * Project screenshot. If the image file is missing, shows a neutral placeholder
 * instead of a broken image. Add screenshots under /public/assets/projects.
 */
export default function ProjectThumb({ project }) {
  const [failed, setFailed] = useState(!project.image);
  const Icon = ICONS[project.icon] || Layers;

  if (!failed) {
    return (
      <img
        className="thumb__img"
        src={project.image}
        alt={`Screenshot of ${project.name}`}
        width="800"
        height="500"
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <div className="thumb__fallback" role="img" aria-label={`${project.name} preview placeholder`}>
      <Icon size={40} strokeWidth={1.5} aria-hidden="true" />
      {SHOW_PLACEHOLDERS ? <span className="placeholder">[Add Project Screenshot]</span> : null}
    </div>
  );
}
