import { ExternalLink, Github } from 'lucide-react';
import Button from './Button';
import { SHOW_LIVE_PLACEHOLDER } from '../data/site';

/**
 * The two buttons on every project card.
 *  - GitHub: the project's repo (your profile until you add the exact repo URL).
 *  - Live Demo: a real link only when `live` holds a URL. Otherwise a greyed-out, unclickable
 *    "Live soon" button (or nothing at all if SHOW_LIVE_PLACEHOLDER is false). No URL is ever invented.
 */
export default function ProjectLinks({ project }) {
  return (
    <div className="project__buttons">
      {project.github ? (
        <Button
          href={project.github}
          external
          variant="secondary"
          size="sm"
          icon={Github}
          aria-label={`${project.name} on GitHub${project.githubIsProfile ? ' (links to my GitHub profile)' : ''} (opens in a new tab)`}
        >
          GitHub
        </Button>
      ) : null}

      {project.live ? (
        <Button
          href={project.live}
          external
          variant="primary"
          size="sm"
          icon={ExternalLink}
          aria-label={`${project.name} live demo (opens in a new tab)`}
        >
          Live Demo
        </Button>
      ) : SHOW_LIVE_PLACEHOLDER ? (
        <Button
          variant="secondary"
          size="sm"
          icon={ExternalLink}
          className="is-disabled"
          disabled
          title="Deployed link coming soon"
          aria-label={`${project.name} live demo: not available yet`}
        >
          Live soon
        </Button>
      ) : null}
    </div>
  );
}
