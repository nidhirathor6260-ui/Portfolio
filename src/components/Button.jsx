/**
 * Link-or-button with consistent styling.
 * variant: 'primary' | 'secondary' | 'ghost'
 * Pass `href` for a link (add `external` to open in a new tab), or `onClick` for a button.
 */
export default function Button({
  href,
  external = false,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  className = '',
  children,
  ...rest
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();
  const content = (
    <>
      {Icon ? <Icon size={size === 'sm' ? 16 : 18} aria-hidden="true" /> : null}
      <span>{children}</span>
    </>
  );

  if (href) {
    const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    return (
      <a className={classes} href={href} {...externalProps} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}
