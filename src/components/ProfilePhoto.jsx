import { useState } from 'react';
import { SHOW_PLACEHOLDERS, site } from '../data/site';

/** Shows /assets/profile.jpg, or a neutral monogram placeholder if the file is missing. */
export default function ProfilePhoto() {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="portrait">
      <div className="portrait__frame">
        {failed ? (
          <div className="portrait__placeholder" role="img" aria-label="Profile photo placeholder">
            <span className="portrait__initials">NR</span>
            {SHOW_PLACEHOLDERS ? <span className="placeholder">[Add profile photo]</span> : null}
          </div>
        ) : (
          <img
            src={site.profilePhoto}
            alt={`Portrait of ${site.name}`}
            width="480"
            height="600"
            decoding="async"
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </figure>
  );
}
