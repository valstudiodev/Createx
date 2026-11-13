import './postsGrid.scss';
import PostCard from '../PostCard/PostCard';
import { Post } from '../../model/post-types';

interface PostsGridProps {
  posts: Post[]
  className?: string;
}

function PostsGrid({
  posts,
  className = ''
}: PostsGridProps): React.JSX.Element {
  const postsGrid = 'posts-grid'

  return (
    <div className={`${postsGrid} ${className}`}>
      <ul className={`${postsGrid}__list`}>
        {posts.map((post) => (
          <li
            className={`${postsGrid}__item`}
            key={post.id}
          >
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsGrid;


