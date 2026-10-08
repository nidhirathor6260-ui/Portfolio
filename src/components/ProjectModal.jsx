import { useEffect, useRef } from 'react';
import { Check, X } from 'lucide-react';
import ProjectThumb from './ProjectThumb';
import ProjectLinks from './ProjectLinks';
import Placeholder from './Placeholder';

/**
 * Details dialog built on the native <dialog> element, which gives us the
 * focus trap, Escape to close and focus restore without extra code.
 * Render it only while a project is selected.
 */
export default function ProjectModal({ project, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return undefined;
    if (!dialog.open) dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const close = () => ref.current?.close();

  return (
    <dialog
      ref={ref}
      className="modal"
      aria-labelledby="modal-title"
      onClose={onClose}
      onClick={(e) => {
        // Clicks on the backdrop land on the <dialog> itself, never on its content.
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="modal__panel">
        <button type="button" className="modal__close" onClick={close} aria-label="Close details">
          <X size={20} aria-hidden="true" />
        </button>

        <div className="modal__media">
          <ProjectThumb project={project} />
        </div>

        <div className="modal__body">
          <p className="project__category">{project.category}</p>
          <h3 id="modal-title" className="project__title">
            {project.name}
          </h3>
          <p className="project__desc">{project.description}</p>

          <h4 className="modal__sub">Built with</h4>
          {project.technologies.length ? (
            <ul className="chips chips--tech" aria-label="Technologies">
              {project.technologies.map((t) => (
                <li className="chip chip--tech" key={t}>
                  {t}
                </li>
              ))}
            </ul>
          ) : (
            <Placeholder>[Add Technologies]</Placeholder>
          )}

          {project.features.length ? (
            <>
              <h4 className="modal__sub">Key features</h4>
              <ul className="ticks">
                {project.features.map((f) => (
                  <li key={f}>
                    <Check size={15} aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          <ProjectLinks project={project} showDetails={false} />
        </div>
      </div>
    </dialog>
  );
}
