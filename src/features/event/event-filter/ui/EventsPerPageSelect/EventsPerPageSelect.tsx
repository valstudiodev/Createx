import { EventsPerPage } from '../../model/event-filter.types';
import './styles.scss'

interface EventsPerPageSelectProps {
  value: EventsPerPage;
  onChange: (value: EventsPerPage) => void;
  className?: string;
}

const options: EventsPerPage[] = [3, 6, 9, 12, 18];

function EventsPerPageSelect({
  value,
  onChange,
  className = ''
}: EventsPerPageSelectProps): React.JSX.Element {
  const eventsPerPageSelect = 'events-per-page-select'
  return (
    <div className={`${eventsPerPageSelect} ${className}`}>
      <label
        className={`${eventsPerPageSelect}__label`}
        htmlFor="event-per-page">
        Show
      </label>
      <select
        name=""
        id="event-per-page"
        value={value}
        onChange={(e) => onChange(Number(e.target.value) as EventsPerPage)}
        className={`${eventsPerPageSelect}__control`}
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
            className={`${eventsPerPageSelect}__option`}
          >
            {option}
          </option>
        ))}
      </select>

      <span className={`${eventsPerPageSelect}__text`}>
        events per page
      </span>
    </div>
  );
}

export default EventsPerPageSelect;