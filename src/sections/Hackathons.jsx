import CredentialCard from '../components/CredentialCard';
import SectionTitle from '../components/SectionTitle';
import { events } from '../data/certifications';

// Shares the "Certifications" nav highlight via data-section.
export default function Hackathons() {
  return (
    <section
      id="hackathons"
      data-section="certifications"
      className="section section--tight section--alt"
      aria-labelledby="events-title"
    >
      <div className="container">
        <SectionTitle id="events-title" title="Hackathons & Technical Events">
          Events I've taken part in to build, compete and learn alongside other students.
        </SectionTitle>
        <ul className="cred-grid cred-grid--three">
          {events.map((e, i) => (
            <CredentialCard key={e.id} item={e} delay={i * 0.06} />
          ))}
        </ul>
      </div>
    </section>
  );
}
