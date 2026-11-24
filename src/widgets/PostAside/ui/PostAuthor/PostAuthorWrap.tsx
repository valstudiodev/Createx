import { Teacher } from '@/entities/teacher/model/teacher.types';
import PostAuthor from './PostAuthor';
import './postAuthor.scss';

interface PostAuthorWrapProps {
  author: Teacher | undefined;
  className?: string;
}

function PostAuthorWrap({
  author,
  className = ''
}: PostAuthorWrapProps) {
  const postAuthorWrap = 'post-author-wrap'

  if (!author) {
    return null
  }

  return (
    <div className={`${postAuthorWrap} ${className}`}>
      <h3 className={`${postAuthorWrap}__title`}>
        author
      </h3>
      <PostAuthor author={author} />
    </div>
  );
}

export default PostAuthorWrap;