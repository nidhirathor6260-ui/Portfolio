import { SHOW_PLACEHOLDERS } from '../data/site';

/**
 * A visible, clearly-not-real marker for information that has not been provided yet.
 * Renders nothing when SHOW_PLACEHOLDERS is false (src/data/site.js).
 */
export default function Placeholder({ children, as: Tag = 'span', className = '' }) {
  if (!SHOW_PLACEHOLDERS) return null;
  return (
    <Tag className={`placeholder ${className}`.trim()} title="Placeholder: fill this in inside src/data">
      {children}
    </Tag>
  );
}
