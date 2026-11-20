import { EventViewMode } from '../../model/event-filter.types';
import './eventViewSwitcher.scss';

interface EventViewSwitcherProps {
  value: EventViewMode;
  onChange: (value: EventViewMode) => void;
  className?: string;
}

function EventViewSwitcher({
  value,
  onChange,
  className = ''
}: EventViewSwitcherProps): React.JSX.Element {
  const eventViewSwitcher = 'event-view-switcher'
  return (
    <div
      className={`${eventViewSwitcher} ${className}`}
      role="group"
      aria-label="Event display mode"
    >
      <button
        type="button"
        className={`${eventViewSwitcher}__button ${value === 'grid' ? `${eventViewSwitcher}__button--active` : ''
          }`}
        aria-label="Grid view"
        aria-pressed={value === 'grid'}
        onClick={() => onChange('grid')}
      >
        <span className="icon--icon-grid" aria-hidden="true" />
      </button>

      <button
        type="button"
        className={`${eventViewSwitcher}__button ${value === 'list' ? `${eventViewSwitcher}__button--active` : ''
          }`}
        aria-label="List view"
        aria-pressed={value === 'list'}
        onClick={() => onChange('list')}
      >
        <span className="icon--icon-panels" aria-hidden="true" />
      </button>
    </div>
  );
}

export default EventViewSwitcher;