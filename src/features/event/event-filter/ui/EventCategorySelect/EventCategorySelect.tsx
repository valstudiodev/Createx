import { EventType } from '@/entities/event/model/event-types';
import './styles.scss';
import { EventCategory } from '../../model/event-filter.types';

interface EventCategorySelectProps {
  value: EventCategory;
  onChange: (value: EventType) => void;
  className?: string;
}

const categories: { value: EventCategory; label: string }[] = [
  { value: 'all', label: 'All categories' },
  { value: 'master-class', label: 'Master class' },
  { value: 'lecture', label: 'Lecture' },
  { value: 'workshop', label: 'Workshop' },
];

function EventCategorySelect({
  value,
  onChange,
  className = ''
}: EventCategorySelectProps): React.JSX.Element {
  const eventCategorySelect = 'event-category-select'
  return (
    <div className={`${eventCategorySelect} ${className}`}>
      <label
        htmlFor='event-category'
        className={`${eventCategorySelect}__label`}>
        Event category
      </label>
      <select
        id='event-category'
        value={value}
        onChange={(e) => onChange(e.target.value as EventType)}
        className={`${eventCategorySelect}__select`}>
        {categories.map((category) => (
          <option
            key={category.value}
            value={category.value}
            className={`${eventCategorySelect}__option`}
          >
            {category.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default EventCategorySelect;