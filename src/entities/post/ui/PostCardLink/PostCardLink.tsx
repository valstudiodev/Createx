import './postCardLink.scss';

interface PostCardLinkProps {
  key: string;
  label: string;
  className?: string;
}

function PostCardLink({
  key,
  className = '',
  label,
}: PostCardLinkProps) {
  const postCardLink = 'post-card-link'
  return (
    <button
      type='button'
      className={`${postCardLink} ${className}`}
      key={key}
      aria-label={label}
    >
      <span className={`${postCardLink}__label`}>
        {label}
      </span>
      <span
        aria-hidden='true'
        className={`${postCardLink}__icon ${postCardLink}__icon--icon-arrow`}></span>
    </button>
  );
}

export default PostCardLink;