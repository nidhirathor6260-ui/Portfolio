import { profiles } from '../data/site';
import { PROFILE_ICONS } from './icons';
import BrandLogo from './BrandLogo';

/** variant: 'icons' (round logo buttons) | 'text' (logo + label) */
export default function SocialLinks({ variant = 'icons', className = '' }) {
  const size = variant === 'icons' ? 24 : 20;
  return (
    <ul className={`social social--${variant} ${className}`.trim()} aria-label="Profiles">
      {profiles.map((p) => {
        const Icon = PROFILE_ICONS[p.id];
        return (
          <li key={p.id}>
            <a
              className="social__link"
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.label} (opens in a new tab)`}
              title={p.label}
            >
              <BrandLogo domain={p.domain} size={size} fallback={<Icon size={size - 4} aria-hidden="true" />} />
              {variant === 'text' ? <span>{p.label}</span> : null}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
