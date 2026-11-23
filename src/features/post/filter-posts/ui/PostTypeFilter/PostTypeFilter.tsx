import './postTypeFilter.scss';
import { PostFilters } from '@/features/post/filter-posts/model/filterPosts.types';

interface PostTypeFilterProps {
  value: PostFilters['type'];
  onChange: (value: PostFilters['type']) => void;
  className?: string;
}

interface LabelsProps {
  value: PostFilters['type'];
  label: string;
  icon: string;
}

const labels: LabelsProps[] = [
  {
    value: 'all',
    label: 'All',
    icon: ''
  },
  {
    value: 'article',
    label: 'Article',
    icon: '--icon-file'
  },
  {
    value: 'video',
    label: 'Videos',
    icon: '--icon-circle-play'
  },
  {
    value: 'podcast',
    label: 'Podcast',
    icon: '--icon-microphpne'
  }
]

function PostTypeFilter({
  value,
  onChange,
  className = ''
}: PostTypeFilterProps): React.JSX.Element {
  const postTypeFilter = 'post-type-filter'
  return (
    <div className={`${postTypeFilter} ${className}`}>
      <ul className={`${postTypeFilter}__list`}>
        {labels.map((label) => (
          <li
            key={label.value}
            className={`${postTypeFilter}__item`}
          >
            <button
              type='button'
              onClick={() => onChange(label.value)}
              className={`
                ${postTypeFilter}__btn 
                ${value === label.value
                  ? `${postTypeFilter}__btn--active`
                  : ''
                }`}
              aria-pressed={value === label.value}
            >
              {label.icon && (
                <span
                  aria-hidden='true'
                  className={`${postTypeFilter}__icon ${postTypeFilter}__icon${label.icon}`}></span>
              )}
              {label.label}
            </button>
          </li>
        ))}
      </ul>
    </div >
  );
}

export default PostTypeFilter;