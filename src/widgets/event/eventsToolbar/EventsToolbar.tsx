import EventCategorySelect from '@/features/event/event-filter/ui/EventCategorySelect/EventCategorySelect';
import './eventsToolbar.scss';
import EventSortSelect from '@/features/event/event-filter/ui/EventSortSelect/EventSortSelect';
import EventsPerPageSelect from '@/features/event/event-filter/ui/EventsPerPageSelect/EventsPerPageSelect';
import EventViewSwitcher from '@/features/event/event-filter/ui/EventViewSwitcher/EventViewSwitcher';
import { Search } from '@/shared/ui';
import { EventFilters } from '@/features/event/event-filter/model/event-filter.types';

interface EventsToolbarProps {
  filters: EventFilters;
  onFiltersChange: (filters: EventFilters) => void;
}

function EventsToolbar({
  filters,
  onFiltersChange
}: EventsToolbarProps): React.JSX.Element {
  const eventsToolbar = 'events-toolbar'

  const handleChange = <K extends keyof EventFilters>(
    key: K,
    value: EventFilters[K],
  ): void => {
    onFiltersChange({
      ...filters,
      [key]: value,
    });
  };

  return (
    <div className={`${eventsToolbar}`}>
      <EventCategorySelect
        value={filters.category}
        onChange={(value) => handleChange('category', value)}
        className={`${eventsToolbar}__category`}
      />
      <EventSortSelect
        value={filters.sortBy}
        onChange={(value) => handleChange('sortBy', value)}
        className={`${eventsToolbar}__sort`}
      />
      <EventsPerPageSelect
        value={filters.perPage}
        onChange={(value) => handleChange('perPage', value)}
        className={`${eventsToolbar}__pages`}
      />
      <Search
        value={filters.search}
        onChange={(value) => handleChange('search', value)}
        className={`${eventsToolbar}__search`}
      />
      <EventViewSwitcher
        value={filters.viewMode}
        onChange={(value) => handleChange('viewMode', value)}
        className={`${eventsToolbar}__switcher`}
      />
    </div>
  );
}

export default EventsToolbar;