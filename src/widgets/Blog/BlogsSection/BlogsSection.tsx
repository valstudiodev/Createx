import { Container, Section } from '@/shared/primitives';
import './blogsSection.scss';
import PostsGrid from '@/entities/post/ui/PostGrid/PostsGrid';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { selectPosts, selectPostsError, selectPostsLoading } from '@/entities/post/model/postSelector';
import { useEffect } from 'react';
import { fetchPosts } from '@/entities/post/model/postThunk';
import { Pagination, SpinnerDefault, Title } from '@/shared/ui';
import { ErrorMessage, WarningMessage } from '@/shared/ui/Messages';
import { useTranslation } from 'react-i18next';


interface BlogsSectionProps {
  className?: string;

  currentPage: number;
  onChagePage: (page: number) => void;
  itemsPerPage?: number;
}

function BlogsSection({
  currentPage,
  onChagePage,
  itemsPerPage = 0,
  className = ''
}: BlogsSectionProps): React.JSX.Element {
  const blogsSection = 'blogs-section'

  const { t } = useTranslation()

  const dispatch = useAppDispatch()

  const posts = useAppSelector(selectPosts)
  const postsLoading = useAppSelector(selectPostsLoading)
  const postsError = useAppSelector(selectPostsError)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch]);

  if (postsLoading) {
    return (
      <div className={`${blogsSection}__loading`}>
        <SpinnerDefault size='large' />
      </div>
    )
  }

  if (postsError) {
    return (
      <ErrorMessage message={postsError} />
    )
  }

  if (posts.length === 0) {
    return (
      <WarningMessage message='Posts are not found.' />
    )
  }

  const totalPages = Math.ceil(posts.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const visiblePosts = posts.slice(startIndex, endIndex)

  return (
    <Section className={`${blogsSection} ${className}`}>
      <Container className={`${blogsSection}__container`}>
        <Title
          label={t('labels.ourBlog')}
          variant='centered'
          className={`${blogsSection}__title`}
        >
          {t('titles.createxSchoolJournal')}
        </Title>
        {/* filter */}
        <PostsGrid
          posts={visiblePosts}
          className={`${blogsSection}__grid`}
        />

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            onPageChange={onChagePage}
            totalPages={totalPages}
          />
        )}

      </Container>
    </Section>
  );
}

export default BlogsSection;