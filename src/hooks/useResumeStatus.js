import { useEffect, useState } from 'react';

let pending = null;

/**
 * Checks once whether the resume PDF really exists.
 * The dev server answers unknown paths with index.html (text/html), so a
 * "200 OK" alone is not enough; an HTML response counts as missing.
 */
function checkResume(url) {
  if (!pending) {
    pending = fetch(url, { method: 'HEAD' })
      .then((res) => res.ok && !(res.headers.get('content-type') || '').toLowerCase().includes('text/html'))
      .catch(() => false);
  }
  return pending;
}

/** @returns {'checking' | 'available' | 'missing'} */
export function useResumeStatus(url) {
  const [status, setStatus] = useState('checking');

  useEffect(() => {
    let alive = true;
    checkResume(url).then((ok) => {
      if (alive) setStatus(ok ? 'available' : 'missing');
    });
    return () => {
      alive = false;
    };
  }, [url]);

  return status;
}
