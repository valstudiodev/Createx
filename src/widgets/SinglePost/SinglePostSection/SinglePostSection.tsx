import { Container, Section } from '@/shared/primitives';
import './singlePostSection.scss';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { selectPostError, selectPostLoading, selectPosts, selectSinglePost } from '@/entities/post/model/postSelector';
import { useEffect } from 'react';
import { fetchPostById, fetchPosts } from '@/entities/post/model/postThunk';
import { SpinnerDefault } from '@/shared/ui';
import { ErrorMessage, WarningMessage } from '@/shared/ui/Messages';
import PostDetails from '@/entities/post/ui/PostDetails/PostDetails';
import { teachers } from '@/entities/teacher/data/teacher.data';
import { PostAside } from '@/widgets/PostAside';
import getTrendingPosts from '@/entities/post/lib/getTrendingPost';

interface SinglePostSectionProps {
  className?: string;
}

function SinglePostSection({
  className = ''
}: SinglePostSectionProps): React.JSX.Element {
  const singlePostSection = 'single-post-section'

  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()

  const post = useAppSelector(selectSinglePost)
  const posts = useAppSelector(selectPosts)
  const postLoading = useAppSelector(selectPostLoading)
  const postError = useAppSelector(selectPostError)

  useEffect(() => {
    if (!id) return

    dispatch(fetchPostById({ postId: id }))
    dispatch(fetchPosts())

  }, [dispatch, id]);

  const author = teachers.find(
    (teacher) => teacher.id === post?.teacherId
  )

  if (postLoading) {
    return (
      <div className={`${singlePostSection}__loading`}>
        <SpinnerDefault size='large' />
      </div>
    )
  }

  if (postError) {
    return <ErrorMessage message={`${postError}`} />
  }

  if (!post) {
    return <WarningMessage message='Post not found.' />
  }

  const trendingPosts = getTrendingPosts(posts, post.id)

  return (
    <Section className={`${singlePostSection} ${className}`}>
      <Container className={`${singlePostSection}__container`}>
        <PostDetails
          className={`${singlePostSection}__details`}
          post={post} />
        <PostAside
          author={author}
          posts={trendingPosts}
          className={`${singlePostSection}__aside`}
        />
      </Container>
    </Section>
  );
}

export default SinglePostSection;