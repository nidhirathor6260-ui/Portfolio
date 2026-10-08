import { m } from 'framer-motion';

/**
 * Small fade-up used once per block as it scrolls into view.
 * Reduced-motion users get no movement (MotionConfig in App.jsx).
 */
export default function Reveal({ as = 'div', delay = 0, className, children, ...rest }) {
  const Tag = m[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
