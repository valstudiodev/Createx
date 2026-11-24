import './trendingPostsList.scss';
import TrendingPostsList from './TrendingPostsList';
import { Post } from '@/entities/post/model/post-types';

interface TrendingPostsListWrapProps {
  posts: Post[];
  className?: string;
}

function TrendingPostsListWrap({
  posts,
  className = ''
}: TrendingPostsListWrapProps): React.JSX.Element | null {
  const trendingPostsListWrap = 'trending-posts-list-wrap'

  if (!posts.length) return null

  return (
    <div className={`${trendingPostsListWrap} ${className}`}>
      <h3 className={`${trendingPostsListWrap}__title`}>
        Trending Articles
      </h3>
      <TrendingPostsList posts={posts} />
    </div>
  );
}

export default TrendingPostsListWrap;