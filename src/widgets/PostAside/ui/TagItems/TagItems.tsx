import { postTags } from '@/entities/post/config/post-label.config';
import './tagItems.scss';
import TagItem from '@/entities/post/ui/PostDetails/TagItem';

interface TagItemProps {
  className?: string;
}

function TagItems({
  className = ''
}: TagItemProps): React.JSX.Element {
  const tagItemsList = 'tag-items-list'
  return (
    <ul className={`${tagItemsList} ${className}`}>
      {postTags.map((tag, index) => (
        <li
          key={index}
          className={`${tagItemsList}__item`}
        >
          <TagItem label={tag} />
        </li>
      ))}
    </ul>
  );
}

export default TagItems;