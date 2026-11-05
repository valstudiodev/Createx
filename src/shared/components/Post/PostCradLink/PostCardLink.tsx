import { Link } from 'react-router';
import './postCardLink.scss';

interface PostCardLinkProps {
  className?: string;
  to: string
}

function PostCardLink({
  className = '',
  to
}: PostCardLinkProps): React.JSX.Element {
  const postCardLink = 'post-card-link'

  return (
    <Link
      className={postCardLink}
      to={to}
    >
      
    </Link>
  );
}

export default PostCardLink;