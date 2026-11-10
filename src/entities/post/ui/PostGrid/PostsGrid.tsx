import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import './postsGrid.scss';
import { selectPosts, selectPostsError, selectPostsLoading } from '../../model/postSelector';
import { useEffect } from 'react';
import { fetchPosts } from '../../model/postThunk';
import PostCard from '../PostCard/PostCard';

interface PostsGridProps {
  className?: string;
}

function PostsGrid({
  className = ''
}: PostsGridProps): React.JSX.Element {
  const postsGrid = 'posts-grid'

  const dispatch = useAppDispatch()

  const posts = useAppSelector(selectPosts)
  const postsLoading = useAppSelector(selectPostsLoading)
  const postsError = useAppSelector(selectPostsError)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch]);

  if (postsLoading) {
    return <div className='text-center text-4xl'>Loading Posts list...</div>
  }

  if (postsError) {
    return (
      <div>{postsError}</div>
    )
  }

  return (
    <div className={`${postsGrid} ${className}`}>
      <ul className={`${postsGrid}__list`}>
        {posts.map((post) => (
          <li
            className={`${postsGrid}__item`}
            key={post.id}
          >
            {/* <PostCard
              post={post}
              actions={[
                ...(post.action === 'listen'
                  ? [<PostCardLink
                    className={`${postsGrid}__btn`}
                    key='listen' label='Listen' />] : []
                ),

                ...(post.action === 'read'
                  ? [<PostCardLink
                    className={`${postsGrid}__btn`}
                    key='read' label='read' />] : []
                ),

                ...(post.action === 'watch'
                  ? [<PostCardLink
                    className={`${postsGrid}__btn`}
                    key='watch' label='Watch' />] : []
                )
              ]}
            /> */}
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsGrid;


