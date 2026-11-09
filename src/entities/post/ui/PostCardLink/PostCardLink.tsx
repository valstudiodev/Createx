import { useTranslation } from 'react-i18next';
import { PostAction } from '../../model/post-types';
import './postCardLink.scss';

interface PostCardLinkProps {
  action: PostAction,
  label?: string;
  className?: string;
}

function PostCardLink({
  className = '',
  action,
  label,
}: PostCardLinkProps) {
  const postCardLink = 'post-card-link'

  const { t } = useTranslation()

  return (
    <div
      className={`${postCardLink} ${className}`}
      aria-label={label}
    >
      <span className={`${postCardLink}__label`}>
        {t(`posts.actions.${action}`)}
      </span>
      <span
        aria-hidden='true'
        className={`${postCardLink}__icon ${postCardLink}__icon--icon-arrow`}></span>
    </div>
  );
}

export default PostCardLink;