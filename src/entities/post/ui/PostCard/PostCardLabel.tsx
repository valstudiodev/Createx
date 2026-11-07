import { postLabelConfig } from "../../config/post-label.config";
import { Post } from "../../model/post-types";

type PostCardLabelVariant = 'absolute' | 'static'

interface PostCardLabelProps {
  post: Post;
  variant: PostCardLabelVariant;
  className?: string;
}

function PostCardLabel({
  post,
  variant,
  className = ''
}: PostCardLabelProps) {
  const postCardLabel = 'post-card-label'

  const combinedStyles = [
    postCardLabel,
    className,
    `${postCardLabel}--${variant}`
  ].filter(Boolean).join(' ')

  const label = postLabelConfig[post.label]

  return (
    <div className={combinedStyles}>
      <span
        aria-hidden='true'
        className={`${postCardLabel}__icon ${postCardLabel}__label${label.icon}`}></span>
      <span
        className={`${postCardLabel}__label`}
        style={{
          backgroundColor: label.background
        }}
      >
        {post.label}
      </span>
    </div>
  );
}

export default PostCardLabel;