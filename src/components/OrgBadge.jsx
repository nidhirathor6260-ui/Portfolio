import BrandLogo from './BrandLogo';

/**
 * Organisation mark for certificates: the organisation's logo when it can be loaded,
 * otherwise a plain text monogram.
 */
export default function OrgBadge({ organization, mark, logo, domain }) {
  return (
    <span className="org-badge">
      <BrandLogo
        logo={logo}
        domain={domain}
        size={32}
        alt={`${organization} logo`}
        fallback={
          <span role="img" aria-label={organization}>
            {mark}
          </span>
        }
      />
    </span>
  );
}
