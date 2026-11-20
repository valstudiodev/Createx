import { Container, Section } from '@/shared/primitives';
import './eventsSection.scss';
import EventGrid from '@/entities/event/ui/EventGrid/EventGrid';
import { EventCardVariant } from '@/entities/event/model/event-types';
import { Pagination, SpinnerDefault, Title } from '@/shared/ui';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { selectEvents, selectEventsError, selectEventsLoading, selectLatestEventsLoaded } from '@/entities/event/model/eventSelector';
import { ErrorMessage, WarningMessage } from '@/shared/ui/Messages';
import { useEffect, useMemo, useState } from 'react';
import { fetchEvents } from '@/entities/event/model/eventThunk';
import EventsToolbar from '../eventsToolbar/EventsToolbar';
import { EventFilters } from '@/features/event/event-filter/model/event-filter.types';
import { DEFAULT_EVENT_FILTERS } from '@/features/event/event-filter/model/constants';
import { filterEvents } from '@/features/event/event-filter/lib/filterEvents';
import { paginateEvents } from '@/features/event/event-filter/lib/paginateEvents';

interface EventsSectionProps {
  variant: EventCardVariant;
  className?: string;

  currentPage: number;
  onPageChange: (page: number) => void;
}

function EventsSection({
  variant,
  className = '',
  currentPage,
  onPageChange,
  // itemsPerPage = 0
}: EventsSectionProps): React.JSX.Element {
  const eventsSection = 'events-section'

  const { t } = useTranslation()

  const dispatch = useAppDispatch()

  const [filters, setFilters] = useState<EventFilters>(DEFAULT_EVENT_FILTERS);

  const events = useAppSelector(selectEvents)
  const isLoading = useAppSelector(selectEventsLoading)
  const isLoaded = useAppSelector(selectLatestEventsLoaded)
  const error = useAppSelector(selectEventsError)

  useEffect(() => {
    dispatch(fetchEvents())
  }, [dispatch]);

  const filteredEvents = useMemo(
    () => filterEvents(events, filters),
    [events, filters]
  )

  const {
    events: visibleEvents,
    totalPages,
  } = useMemo(
    () =>
      paginateEvents({
        events: filteredEvents,
        page: currentPage,
        perPage: filters.perPage,
      }),
    [filteredEvents, currentPage, filters.perPage],
  );

  if (isLoading || !isLoaded) {
    return (
      <div className={`${eventsSection}__loading`}>
        <SpinnerDefault size='large' />
      </div>
    )
  }

  if (error) {
    return (
      <ErrorMessage message={error} />
    )
  }

  if (filteredEvents.length === 0) {
    return <WarningMessage message="No events found." />;
  }

  return (
    <Section className={`${eventsSection} ${className}`}>
      <Container className={`${eventsSection}__container`}>
        <Title
          label={t('labels.ourEvents')}
          variant='centered'
          className={`${eventsSection}__title`}
        >
          {t('titles.lecturesWorkshopsMasterclasses')}
        </Title>

        {/* filter */}
        <EventsToolbar
          filters={filters}
          onFiltersChange={(newFilter) => {
            setFilters(newFilter)
            onPageChange(1)
          }}
        />

        <EventGrid
          events={visibleEvents}
          variant={variant}
          viewMode={filters.viewMode}
          className={`${eventsSection}__grid`}
        />

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            onPageChange={onPageChange}
            totalPages={totalPages}
          />
        )}

      </Container>
    </Section>
  );
}

export default EventsSection;