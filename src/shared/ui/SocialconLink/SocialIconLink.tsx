import './socialIconLink.scss';

interface SocialIconLinkProps {
  href: string;
  label: string;
  className?: string;
  iconClass: string;
}

function SocialIconLink({
  href,
  label,
  iconClass,
  className = '',
  ...props
}: SocialIconLinkProps) {
  const socialIconLink = 'social-icon-link'
  return (
    <a
      href={href}
      target='_blank'
      rel="noopener noreferrer"
      {...props}
      aria-label={label}
      className={`${socialIconLink} ${className}`}
    >
      <span
        aria-hidden='true'
        className={`${socialIconLink}__icon ${iconClass}`}
      >
      </span>
    </a>
  );
}

export default SocialIconLink;