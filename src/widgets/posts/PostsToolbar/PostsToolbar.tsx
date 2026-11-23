import PostCategorySelect from '@/features/post/filter-posts/ui/PostCategorySelect/PostCategorySelect';
import './postsToolbar.scss';
import PostTypeFilter from '@/features/post/filter-posts/ui/PostTypeFilter/PostTypeFilter';
import { Search } from '@/shared/ui';
import { PostFilters } from '@/features/post/filter-posts/model/filterPosts.types';
import { useCallback } from 'react';

interface PostsToolbarProps {
  filters: PostFilters;
  onFiltersChange: (filters: PostFilters) => void;
  className?: string;
}

function PostsToolbar({
  filters,
  onFiltersChange,
  className = ''
}: PostsToolbarProps): React.JSX.Element {
  const postsToolbar = 'posts-toolbar'

  const handleChange = <K extends keyof PostFilters>(
    key: K,
    value: PostFilters[K]
  ): void => {
    onFiltersChange({
      ...filters,
      [key]: value
    })
  }

  const handleSearchChange = useCallback(
    (value: string): void => {
      handleChange('seacrh', value)
    },
    [handleChange]
  )

  return (
    <div className={`${postsToolbar} ${className}`}>
      <PostTypeFilter
        value={filters.type}
        onChange={(value) => handleChange('type', value)}
        className={`${postsToolbar}__type-filter`}
      />
      <PostCategorySelect
        value={filters.category}
        onChange={(value) => handleChange('category', value)}
        className={`${postsToolbar}__category`}
      />
      <Search
        value={filters.seacrh}
        onChange={handleSearchChange}
        className={`${postsToolbar}__search`}
      />
    </div>
  );
}

export default PostsToolbar;