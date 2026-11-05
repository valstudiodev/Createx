import { Link } from 'react-router';
import './postCard.scss';
import { Post } from '../../model/post-types';
import { postLabelConfig } from '../../config/post-label.config';
import { routeMap } from '@/app/routes/routeMap';

interface PostCardProps {
  post: Post,
  className?: string;
  actions: React.ReactElement[]
}

function PostCard({
  post,
  actions,
  className = ''
}: PostCardProps): React.JSX.Element {
  const postCard = 'post-card'
  const categoryInfo = 'category-info'

  const label = postLabelConfig[post.label]

  return (
    <article className={postCard}>
      <Link
        to={routeMap.singlePost.navigate(post.id)}
        className={`${postCard}__inner ${className}`}
        aria-labelledby={`${postCard}--${post.id}-title`}
      >
        {post.imageId && (
          <div className={`${postCard}__image`}>
            <img src={post.imageId} alt='' loading='lazy' />
            <span
              className={`${postCard}__label ${label.icon}`}
              style={{
                backgroundColor: label.background
              }}
            >
              {label.label}
            </span>
          </div>
        )}

        <div className={`${postCard}__body`}>
          <div className={`${postCard}__info ${categoryInfo}`}>
            <span className={`${categoryInfo}__category`}>{post.category}</span>
            <div className={`${categoryInfo}__date`}>
              <span
                aria-hidden='true'
                className={`${categoryInfo}__icon`}></span>
              <span className={`${categoryInfo}__label`}>{post.date}</span>
            </div>
            <div className={`${categoryInfo}__duration`}>
              <span
                aria-hidden='true'
                className={`${categoryInfo}__icon`}></span>
              <span className={`${categoryInfo}__label`}>{post.duration}</span>
            </div>
          </div>
          <div className={`${postCard}__content`}>
            <h3
              id={`${postCard}--${post.id}-title`}
              className={`${postCard}__title`}>{post.title}</h3>
            <p className={`${postCard}__text`}>{post.text}</p>
            {actions}
          </div>
        </div>
      </Link>
    </article>
  );
}

export default PostCard;