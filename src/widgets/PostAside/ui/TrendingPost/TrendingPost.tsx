import { Link } from 'react-router';
import './trendingPost.scss';
import { routeMap } from '@/app/routes/routeMap';
import { Post } from '@/entities/post/model/post-types';
import PostCardDate from '@/entities/post/ui/PostCard/PostCardDate';

interface TrendingPostProps {
  post: Post;
  className?: string;
}

function TrendingPost({
  post,
  className = ''
}: TrendingPostProps): React.JSX.Element {
  const trendingPost = 'trending-post'

  return (
    <Link
      to={routeMap.singlePost.navigate(post.id)}
      className={`${trendingPost} ${className}`}
      aria-labelledby={`${trendingPost}--${post.id}-title`}
    >
      <div className={`${trendingPost}__image`}>
        <img
          aria-hidden='true'
          src={post.imageId} alt="" />
      </div>
      <div className={`${trendingPost}__body`}>
        <PostCardDate
          post={post}
          className={`${trendingPost}__date`}
        />
        <h4 className={`${trendingPost}__title`}>
          {post.title}
        </h4>
      </div>
    </Link>
  );
}

export default TrendingPost;