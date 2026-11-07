import { PostDetailsInterface } from '../../model/post-types';
import './postDetails.scss';

interface PostDetailsItemsListProps {
  post: PostDetailsInterface,
  className?: string;

}

function PostDetailsItemsList({
  post,
  className = ''
}: PostDetailsItemsListProps): React.JSX.Element {
  const postDetailsItemsList = 'post-details-items-list'

  return (
    <div className={`${postDetailsItemsList} ${className}`}>
      <p className={`${postDetailsItemsList}__text`}>
        Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis.
        Vitae mus blandit in neque amet non fringilla blandit:
      </p>
      <ul className={`${postDetailsItemsList}__list`}>
        {post.list.map((item, index) => (
          <li
            key={index}
            className={`${postDetailsItemsList}__item`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostDetailsItemsList;