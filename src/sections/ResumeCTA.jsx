import { Download, Eye } from 'lucide-react';
import Button from '../components/Button';
import Placeholder from '../components/Placeholder';
import Reveal from '../components/Reveal';
import { site } from '../data/site';
import { useResumeStatus } from '../hooks/useResumeStatus';

export default function ResumeCTA() {
  const status = useResumeStatus(site.resume.path);
  const missing = status === 'missing';

  return (
    <section id="resume" data-section="contact" className="section section--tight" aria-labelledby="resume-title">
      <div className="container">
        <Reveal className="resume">
          <div>
            <h2 id="resume-title" className="resume__title">
              Let's Build Something Together
            </h2>
            <p className="resume__text">Looking for opportunities to learn, build and contribute.</p>
          </div>

          <div className="resume__actions">
            {missing ? (
              <>
                <span className="btn btn--primary btn--md is-disabled" aria-disabled="true">
                  <Download size={18} aria-hidden="true" />
                  <span>Download Resume</span>
                </span>
                <span className="btn btn--secondary btn--md is-disabled" aria-disabled="true">
                  <Eye size={18} aria-hidden="true" />
                  <span>View Resume</span>
                </span>
                <p className="resume__note" role="status">
                  Resume coming soon.
                </p>
                <Placeholder as="p" className="resume__config">
                  {site.resume.instruction}
                </Placeholder>
              </>
            ) : (
              <>
                <Button href={site.resume.path} download={site.resume.downloadName} icon={Download}>
                  Download Resume
                </Button>
                <Button href={site.resume.path} external variant="secondary" icon={Eye}>
                  View Resume
                </Button>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
