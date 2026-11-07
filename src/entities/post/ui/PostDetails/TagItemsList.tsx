import { PostDetailsInterface } from '../../model/post-types';
import './postDetails.scss';
import TagItem from './TagItem';

interface TagItemsListProps {
  post: PostDetailsInterface;
  className?: string;
}

function TagItemsList({
  post,
  className = ''
}: TagItemsListProps): React.JSX.Element {
  const tagItems = 'tag-items'

  return (
    <div className={`${tagItems} ${className}`}>
      <span className={`${tagItems}__label`}>
        Tags:
      </span>
      <ul className={`${tagItems}__list`}>
        {post.tags.map((tag) => (
          <TagItem label={tag} />
        ))}
      </ul>
    </div>
  );
}

export default TagItemsList;