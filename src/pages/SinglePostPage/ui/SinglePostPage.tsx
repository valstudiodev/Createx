import { Container, Section } from '@/shared/primitives';
import '../styles/singlePost.scss';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { selectPostError, selectPostLoading, selectSinglePost } from '@/entities/post/model/postSelector';
import { useEffect } from 'react';
import { fetchPostById } from '@/entities/post/model/postThunk';
import { SpinnerDefault } from '@/shared/ui';
import { ErrorMessage, WarningMessage } from '@/shared/ui/Messages';
import PostDetails from '@/entities/post/ui/PostDetails/PostDetails';

function SinglePostPage(): React.JSX.Element {
  const singlePostPage = 'single-post-page'

  const { id } = useParams<{ id: string }>()

  const dispatch = useAppDispatch()

  const post = useAppSelector(selectSinglePost)
  const postLoading = useAppSelector(selectPostLoading)
  const postError = useAppSelector(selectPostError)

  useEffect(() => {
    if (!id) return

    dispatch(fetchPostById({ postId: id }))

  }, [dispatch, id]);

  if (postLoading) {
    return (
      <div className={`${singlePostPage}__loading`}>
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

  return (
    <Section className={singlePostPage}>
      <Container className={`${singlePostPage}__container`}>
        <PostDetails post={post} />
      </Container>
    </Section>
  );
}

export default SinglePostPage;