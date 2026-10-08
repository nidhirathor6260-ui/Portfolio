import { BadgeCheck, Calendar, ExternalLink } from 'lucide-react';
import Button from './Button';
import OrgBadge from './OrgBadge';
import Placeholder from './Placeholder';
import Reveal from './Reveal';

/** Shared card for certificates and event records. */
export default function CredentialCard({ item, delay = 0 }) {
  return (
    <Reveal as="li" className="cred" delay={delay}>
      <div className="cred__top">
        <OrgBadge organization={item.organization} mark={item.mark} logo={item.logo} domain={item.domain} />
        <div>
          <h3 className="cred__name">{item.name}</h3>
          <p className="cred__org">{item.organization}</p>
        </div>
      </div>

      {item.type ? (
        <p className="cred__type">
          <BadgeCheck size={16} aria-hidden="true" />
          {item.type}
        </p>
      ) : null}

      <dl className="cred__meta">
        <div>
          <dt>
            <Calendar size={14} aria-hidden="true" /> Issued
          </dt>
          <dd>
            <time dateTime={item.issuedISO}>{item.issued}</time>
          </dd>
        </div>
        {item.credentialId ? (
          <div>
            <dt>Credential ID</dt>
            <dd className="cred__id">{item.credentialId}</dd>
          </div>
        ) : null}
        {item.skills && item.skills.length ? (
          <div>
            <dt>Skills</dt>
            <dd>{item.skills.join(', ')}</dd>
          </div>
        ) : null}
      </dl>

      {item.credentialUrl ? (
        <Button
          href={item.credentialUrl}
          external
          variant="secondary"
          size="sm"
          icon={ExternalLink}
          aria-label={`View credential: ${item.name} (opens in a new tab)`}
        >
          View Credential
        </Button>
      ) : (
        <Placeholder>[Add Credential Link]</Placeholder>
      )}
    </Reveal>
  );
}
