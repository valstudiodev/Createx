import './postCategorySelect.scss';
import { PostFilters } from '../../model/filterPosts.types';

interface PostCategorySelectProps {
  value: PostFilters['category'];
  onChange: (value: PostFilters['category']) => void;
  className?: string;
}

const categories: { value: PostFilters['category']; label: string }[] = [
  { value: 'all', label: 'All categories' },
  { value: 'design', label: 'Design' },
  { value: 'development', label: 'Development' },
  { value: 'hr', label: 'Hr' },
  { value: 'management', label: 'Management' },
  { value: 'marketing', label: 'Marketing' }
]

function PostCategorySelect({
  value,
  onChange,
  className = ''
}: PostCategorySelectProps): React.JSX.Element {
  const postCategorySelect = 'post-category-select'
  return (
    <div className={`${postCategorySelect} ${className}`}>
      <label
        htmlFor="post-category"
        className={`${postCategorySelect}__label`}
      >
        Blog category
      </label>
      <select
        id='post-category'
        value={value}
        onChange={(e) => onChange(e.target.value as PostFilters['category'])}
        className={`${postCategorySelect}__select`}
      >
        {categories.map((category) => (
          <option
            key={category.value}
            value={category.value}
            className={`${postCategorySelect}__option`}
          >
            {category.label}
          </option>
        ))}

      </select>
    </div>
  );
}

export default PostCategorySelect;