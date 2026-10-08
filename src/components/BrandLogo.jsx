import { useState } from 'react';

/**
 * A brand logo with a safe fallback chain, so nothing ever shows a broken image:
 *   1. `logo`   : an official file you add yourself inside /public (best quality, optional)
 *   2. `domain` : the organisation's own site icon (favicon), loaded from their website
 *   3. `fallback`: whatever you pass (an icon or a text monogram)
 * No logo is ever drawn or imitated in this project.
 */
const siteIcon = (domain) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

export default function BrandLogo({ logo, domain, size = 24, alt = '', fallback = null, className = '' }) {
  const sources = [logo, domain ? siteIcon(domain) : null].filter(Boolean);
  const [index, setIndex] = useState(0);

  if (index >= sources.length) return fallback;

  return (
    <img
      className={`brand-logo ${className}`.trim()}
      src={sources[index]}
      alt={alt}
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setIndex((i) => i + 1)}
    />
  );
}
