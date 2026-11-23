import { Container, Section } from '@/shared/primitives';
import './blogsSection.scss';
import PostsGrid from '@/entities/post/ui/PostGrid/PostsGrid';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { selectPosts, selectPostsError, selectPostsHasLoaded, selectPostsLoading } from '@/entities/post/model/postSelector';
import { useEffect, useMemo, useState } from 'react';
import { fetchPosts } from '@/entities/post/model/postThunk';
import { Pagination, SpinnerDefault, Title } from '@/shared/ui';
import { ErrorMessage, WarningMessage } from '@/shared/ui/Messages';
import { useTranslation } from 'react-i18next';
import PostsToolbar from '@/widgets/posts/PostsToolbar/PostsToolbar';
import { initialPostFilters, PostFilters } from '@/features/post/filter-posts/model/filterPosts.types';
import filterPosts from '@/features/post/filter-posts/lib/filterPosts';


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
  const isLoaded = useAppSelector(selectPostsHasLoaded)

  const [filters, setFilters] = useState<PostFilters>(initialPostFilters);

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch]);

  const filteredPosts = useMemo(
    () => filterPosts(posts, filters),
    [posts, filters]
  )

  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage

  const visiblePosts = filteredPosts.slice(startIndex, startIndex + itemsPerPage)

  if (postsLoading || !isLoaded) {
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

        <PostsToolbar
          filters={filters}
          onFiltersChange={(newFilter) => {
            setFilters(newFilter)
          }}
        />

        {visiblePosts.length > 0 ? (
          <PostsGrid
            posts={visiblePosts}
            className={`${blogsSection}__grid`}
          />
        ) : (
          <WarningMessage message="No posts match your filters." />
        )}

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