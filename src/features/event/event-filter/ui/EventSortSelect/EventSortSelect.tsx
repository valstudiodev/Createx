import { EventSortOption } from '../../model/event-filter.types';
import './eventSortEvent.scss';

interface EventCategorySelectProps {
  value: EventSortOption;
  onChange: (value: EventSortOption) => void;
  className?: string;
}

const sortOptions: {
  value: EventSortOption;
  label: string;
}[] = [
    { value: 'newest', label: 'Newest' },
    { value: 'oldest', label: 'Oldest' },
    { value: 'date-asc', label: 'Upcoming first' },
    { value: 'date-desc', label: 'Furthest first' },
  ];

function EventSortSelect({
  value,
  onChange,
  className = ''
}: EventCategorySelectProps): React.JSX.Element {
  const eventSortSelect = 'event-sort-select'
  return (
    <div className={`${eventSortSelect} ${className}`}>
      <label
        htmlFor='event-sort'
        className={`${eventSortSelect}__label`}>
        Sort by
      </label>
      <select
        id='event-sort'
        value={value}
        onChange={(e) => onChange(e.target.value as EventSortOption)}
        className={`${eventSortSelect}__select`}>
        {sortOptions.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className={`${eventSortSelect}__option`}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default EventSortSelect;