import '../styles/courseFilterButton.scss';

interface CourseFilterButtonProps {
  className?: string;
  onClick: () => void;
  label: string;
  isActive: boolean;
  amount: number;
}

function CourseFilterButton({
  className = '',
  amount,
  onClick,
  isActive,
  label
}: CourseFilterButtonProps): React.JSX.Element {
  const filterButton = 'filter-button'

  const combinedClasses = [
    filterButton,
    className,
    `${isActive ? `${filterButton}--active` : ''}`
  ].filter(Boolean).join(' ')

  return (
    <button
      type='button'
      className={combinedClasses}
      aria-pressed={isActive}
      onClick={onClick}
    >
      {label}
      <span className={`${filterButton}__amount`}>{amount}</span>
    </button>
  );
}

export default CourseFilterButton;