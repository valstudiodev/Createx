import { Container, Section } from '@/shared/primitives';
import './latestPosts.scss';
import PostList from '@/widgets/PostListCategory/ui/PostsList';
import { selectLatestPosts, selectLatestPostsError, selectLatestPostsLoading } from '@/entities/post/model/postSelector';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { useEffect } from 'react';
import { fetchLatestPosts } from '@/entities/post/model/postThunk';
import Headline from '@/shared/ui/Headline/Headline';
import { ButtonBasic } from '@/shared/ui/Button';
import { routeMap } from '@/app/routes/routeMap';
import { useTranslation } from 'react-i18next';

interface LatestPostsProps {
  className?: string;
}

function LatestPosts({
  className = ''
}: LatestPostsProps): React.JSX.Element {
  const clLatestPosts = 'latest-posts'

  const { t } = useTranslation()

  const dispatch = useAppDispatch()

  const latestPosts = useAppSelector(selectLatestPosts)
  const isLoading = useAppSelector(selectLatestPostsLoading)
  const error = useAppSelector(selectLatestPostsError)

  useEffect(() => {
    dispatch(fetchLatestPosts())
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading LATEST posts...</div>
  }

  if (error) {
    return (
      <div>
        <p>{error}</p>
      </div>
    )
  }

  return (
    <Section className={`${clLatestPosts} ${className}`}>
      <Container className={`${clLatestPosts}__container`}>
        <Headline
          className={`${clLatestPosts}__headline`}
          title={t('titles.latestPosts')} label={t('labels.ourBlog')}>
          <ButtonBasic
            type='link'
            to={routeMap.blog.path}
            className={`${clLatestPosts}__btn`}
          >
            {t('buttons.goToBlock')}
          </ButtonBasic>
        </Headline>
        <PostList posts={latestPosts} />
      </Container>
    </Section>
  );
}

export default LatestPosts;