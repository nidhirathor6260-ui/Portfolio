import CredentialCard from '../components/CredentialCard';
import SectionTitle from '../components/SectionTitle';
import { certifications } from '../data/certifications';

export default function Certifications() {
  return (
    <section id="certifications" data-section="certifications" className="section" aria-labelledby="certs-title">
      <div className="container">
        <SectionTitle id="certs-title" title="Certifications">
          Courses and assessments I've completed while building my foundations in JavaScript, web development and
          problem solving.
        </SectionTitle>
        <ul className="cred-grid">
          {certifications.map((c, i) => (
            <CredentialCard key={c.id} item={c} delay={(i % 2) * 0.06} />
          ))}
        </ul>
      </div>
    </section>
  );
}
