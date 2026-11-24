import { routeMap } from '@/app/routes/routeMap';
import './postDetails.scss';

interface TagItemProps {
  label: string;
}

function TagItem({
  label
}: TagItemProps): React.JSX.Element {
  const tagItem = 'tag-item'

  return (
    <a
      className={tagItem}
      href={routeMap.blog.path}>
      {label}
    </a>
  );
}

export default TagItem;