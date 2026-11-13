import { Container, Section } from '@/shared/primitives';
import '../styles/singlePost.scss';
import SinglePostSection from '@/widgets/SinglePost/SinglePostSection/SinglePostSection';
import SinglePostRecommended from '@/widgets/SinglePost/SinglePostRecommended/SinglePostRecommended';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { selectPostsError, selectPostsLoading, selectRecommendedPosts } from '@/entities/post/model/postSelector';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { fetchPosts } from '@/entities/post/model/postThunk';
import { ErrorMessage } from '@/shared/ui/Messages';
import { SubscribeSection } from '@/widgets';


function SinglePostPage(): React.JSX.Element {
  const singlePostPage = 'single-post-page';

  const { id } = useParams<{ id: string }>()

  const dispatch = useAppDispatch()

  const postsLoading = useAppSelector(selectPostsLoading)
  const postsError = useAppSelector(selectPostsError)

  const recommendedPosts = useAppSelector((state) =>
    selectRecommendedPosts(state, id ?? '')
  )

  useEffect(() => {
    if (!id) return

    dispatch(fetchPosts())

  }, [dispatch, id]);

  return (
    <Section className={singlePostPage}>
      <SinglePostSection />

      <SubscribeSection variant='newsletter' />
      <SinglePostRecommended
        loading={postsLoading}
        posts={recommendedPosts} />

      {postsError && (
        <ErrorMessage message={postsError} />
      )}
    </Section>
  );
}

export default SinglePostPage