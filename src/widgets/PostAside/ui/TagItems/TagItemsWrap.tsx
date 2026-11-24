import TagItems from './TagItems';
import './tagItems.scss';

interface TagItemsWrapProps {
  className?: string;
}

function TagItemsWrap({
  className = ''
}: TagItemsWrapProps) {
  const tagItemsWrap = 'tag-items-wrap'

  return (
    <div className={`${tagItemsWrap} ${className}`}>
      <h4 className={`${tagItemsWrap}__title`}>
        tags
      </h4>
      <TagItems />
    </div>
  );
}

export default TagItemsWrap;