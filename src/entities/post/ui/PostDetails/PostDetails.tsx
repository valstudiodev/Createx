import { PostDetailsInterface } from '../../model/post-types';
import './postDetails.scss';
import PostCardDate from '../PostCard/PostCardDate';
import PostCardLabel from '../PostCard/PostCardLabel';
import ShareItems from '../PostCard/ShareItems';
import TagItemsList from './TagItemsList';
import PostDetailsItemsList from './PostDetailsItemsList';
import braces from "@/assets/icons/braces.svg";

interface PostDetailsProps {
  post: PostDetailsInterface;
  className?: string;
}

function PostDetails({
  post,
  className = ''
}: PostDetailsProps): React.JSX.Element {
  const postDetails = 'post-details'
  const headerPostDetails = 'header-post-details'
  const contentPostDetails = 'content-post-details'

  return (
    <article className={`${postDetails} ${className}`}>
      <div className={`${postDetails}__header ${headerPostDetails}`}>
        <div className={`${headerPostDetails}__top`}>
          <PostCardLabel
            className={`${headerPostDetails}__label`}
            variant='static' post={post} />
          <span className={`${headerPostDetails}__category`}>
            {post.category}
          </span>
        </div>
        <h1 className={`${headerPostDetails}__title`}>{post.title}</h1>
        <div className={`${headerPostDetails}__wrap`}>
          <div className={`${headerPostDetails}__info`}>
            <PostCardDate post={post} />
            <span className={`${headerPostDetails}__duration`}>{post.duration} min</span>
          </div>
          <ShareItems post={post} />
        </div>
      </div>

      <div className={`${postDetails}__image`}>
        <img src={post.imageId} alt={post.title} loading='lazy' />
      </div>
      {post.paragraphs.map((paragraph, index) => (
        <div
          key={index}
          className={`${postDetails}__content`}>
          <p className={`${contentPostDetails}__paragraph`}>{paragraph}</p>
        </div>
      ))}

      {post.quote && (
        <div className={`${postDetails}__qoute`}>
          <img src={braces} alt="" />
          <p>{post.quote}</p>
        </div>
      )}

      {post.list.length > 0 && (
        <PostDetailsItemsList post={post} />
      )}

      <div className={`${contentPostDetails}__bottom`}>
        <TagItemsList post={post} />
        <ShareItems post={post} />
      </div>

    </article>
  );
}

export default PostDetails;