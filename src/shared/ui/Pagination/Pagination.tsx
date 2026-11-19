import './pagination.scss';

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  totalPages: number;
  className?: string;
}

function Pagination({
  currentPage,
  onPageChange,
  totalPages,
  className = ''
}: PaginationProps): React.JSX.Element {
  const pagination = 'pagination'

  const pages = Array.from(
    { length: Math.max(0, totalPages) },
    (_, index) => index + 1
  );

  const handlePrev = (): void => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <nav
      aria-label='pagination'
      className={`${pagination} ${className}`}>

      {currentPage > 1 && (
        <button
          type='button'
          onClick={handlePrev}
          disabled={currentPage <= 1}
          aria-label='Go to previous page'
          className={`${pagination}__btn ${pagination}__btn--left ${pagination}__btn--icon-arrow`}
        >
        </button>
      )}

      <ul className={`${pagination}__list`}>
        {pages.map((page) => (
          <li
            key={page}
            className={`${pagination}__item`}
          >
            <button
              type='button'
              onClick={() => onPageChange(page)}
              className={`${pagination}__btn ${page === currentPage ? 'is-active' : ''}`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>

      {currentPage < totalPages && (
        <button
          type='button'
          onClick={handleNext}
          disabled={currentPage === totalPages}
          aria-label='Go to the next page'
          className={`${pagination}__btn ${pagination}__btn--right ${pagination}__btn--icon-arrow`}
        >
        </button>
      )}

    </nav>
  );
}

export default Pagination;