import i18n from "@/app/i18n/i18n";
import formatLocalizedDate from "@/shared/lib/formatLocalizedDate/formatLocalizedDate";
import { Post } from "../../model/post-types";
import './postCard.scss';

interface PostCardDateProps {
  post: Post;
  className?: string;
}

function PostCardDate({
  post,
  className = ''
}: PostCardDateProps) {
  const postCardDate = 'post-card-date'

  const formattedDate = formatLocalizedDate(
    post.date,
    i18n.resolvedLanguage === 'uk' ? 'uk-UA' : 'en-US'
  )

  return (
    <div className={`${postCardDate} ${className}`}>
      <span
        aria-hidden='true'
        className={`${postCardDate}__icon ${postCardDate}__icon--icon-calendar`}></span>
      <span className={`${postCardDate}__label`}>{formattedDate}</span>
    </div>

  );
}

export default PostCardDate;