import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './PostSearch.scss';

interface PostSearchProps {
  className?: string;
}

function PostSearch({
  className = '',
}: PostSearchProps): React.JSX.Element {
  const postSearch = 'post-search';

  const [searchQuery, setSearchQuery] = useState<string>('');

  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const query = searchQuery.trim();

    if (!query) return;

    navigate(`/blog?search=${encodeURIComponent(query)}`);
  };

  return (
    <form
      className={`${postSearch} ${className}`}
      onSubmit={handleSubmit}
      role="search"
    >
      <input
        className={`${postSearch}__input`}
        type="search"
        name="search"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder="Search articles..."
        aria-label="Search articles"
      />

      <button
        className={`${postSearch}__button`}
        type="submit"
        aria-label="Search"
      >
        <span className="icon-search" aria-hidden="true" />
      </button>
    </form>
  );
}

export default PostSearch;