import { Teacher } from '@/entities/teacher/model/teacher.types';
import './postAuthor.scss';

interface PostAuthorProps {
  author: Teacher | undefined,
  className?: string;
}

function PostAuthor({
  author,
  className = ''
}: PostAuthorProps): React.JSX.Element | null {
  const postAuthor = 'post-author'

  if (!author) {
    return null
  }

  return (

    <article className={`${postAuthor} ${className}`}>
      <div className={`${postAuthor}__avatar`}>
        <img src={author.image} alt={author.name} />
      </div>
      <div className={`${postAuthor}__body`}>
        <h4 className={`${postAuthor}__name`}>
          {author.name}
        </h4>
        <p className={`${postAuthor}__specialty`}>
          {author.specialty}
        </p>
        <ul className={`${postAuthor}__socials`}>
          {author.socialMedia?.map((item) => (
            <li
              key={item.platform}
              className={`${postAuthor}__socials-item`}
            >
              <a
                aria-label={item.label}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${postAuthor}__socials-link ${postAuthor}__socials-link${item.iconClass}`}
              >

              </a>
            </li>
          ))}
        </ul>
      </div>
    </article>

  );
}

export default PostAuthor;