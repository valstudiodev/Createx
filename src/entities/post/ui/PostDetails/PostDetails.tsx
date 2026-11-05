import { PostDetailsInterface } from '../../model/post-types';
import './postDetails.scss';

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
        <div></div>
        <h1 className={`${headerPostDetails}__title`}>{post.title}</h1>
        <div>
          <div className={`${headerPostDetails}__info`}>
            <span className={`${headerPostDetails}__date`}>{post.date}</span>
            <span className={`${headerPostDetails}__duration`}>{post.duration}</span>
          </div>
          <div className={`${headerPostDetails}__share`}>Share:{post.share}</div>
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

      <div className={`${contentPostDetails}__tags`}>
        <span>Tags:</span>
        <ul className={`${contentPostDetails}__list`}>
          {post.tags.map((tag, index) => (
            <li
              key={index}
              className={`${contentPostDetails}__item`}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

    </article>
  );
}

export default PostDetails;