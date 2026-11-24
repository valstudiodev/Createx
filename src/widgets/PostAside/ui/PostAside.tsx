import { Search } from '@/shared/ui';
import './postAside.scss';
import PostAuthorWrap from './PostAuthor/PostAuthorWrap';
import { Teacher } from '@/entities/teacher/model/teacher.types';
import TrendingPostsListWrap from './TrendingPostsList/TrendingPostsListWrap';
import { Post } from '@/entities/post/model/post-types';
import TagItemsWrap from './TagItems/TagItemsWrap';

interface PostAsideProps {
  author: Teacher | undefined;
  posts: Post[];
  className?: string;
}

function PostAside({
  author,
  posts,
  className = ''
}: PostAsideProps): React.JSX.Element {
  const postAside = 'post-aside'

  return (
    <aside className={`${postAside} ${className}`}>
      <Search
        className={`${postAside}__search`}
      />

      <PostAuthorWrap
        className={`${postAside}__author`}
        author={author} />

      <TrendingPostsListWrap
        className={`${postAside}__posts`}
        posts={posts} />

      <TagItemsWrap />
    </aside>
  );
}

export default PostAside;