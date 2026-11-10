import { Post } from '@/entities/post/model/post-types';
import './postsList.scss';
import PostCard from '@/entities/post/ui/PostCard/PostCard';

interface PostListProps {
  posts: Post[];
  className?: string;
  renderActions?: (post: Post) => React.ReactElement[]
}

function PostList({
  posts,
  className = ''
}: PostListProps): React.JSX.Element {
  const postList = 'post-list'

  return (
    <div className={`${postList} ${className}`}>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
        // actions={renderActions?.(post) ?? []}
        />
      ))}
    </div>
  );
}

export default PostList;