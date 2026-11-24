import { Post } from '@/entities/post/model/post-types';
import './trendingPostsList.scss';
import TrendingPost from '../TrendingPost/TrendingPost';

interface TrendingPostsListProps {
  posts: Post[];
  className?: string;
}

function TrendingPostsList({
  posts,
  className = ''
}: TrendingPostsListProps): React.JSX.Element | null {
  const trendingPostsList = 'trending-posts-list'

  if (!posts.length) return null

  return (
    <ul className={`${trendingPostsList} ${className}`}>
      {posts.map((post) => (
        <li
          key={post.id}
          className={`${trendingPostsList}__item`}
        >
          <TrendingPost post={post} />
        </li>
      ))}
    </ul>
  );
}

export default TrendingPostsList;