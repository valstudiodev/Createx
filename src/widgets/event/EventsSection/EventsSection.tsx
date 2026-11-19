import { Container, Section } from '@/shared/primitives';
import './eventsSection.scss';
import EventGrid from '@/entities/event/ui/EventGrid/EventGrid';
import { EventCardVariant } from '@/entities/event/model/event-types';
import { Pagination, SpinnerDefault, Title } from '@/shared/ui';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { selectEvents, selectEventsError, selectEventsLoading, selectLatestEventsLoaded } from '@/entities/event/model/eventSelector';
import { ErrorMessage, WarningMessage } from '@/shared/ui/Messages';
import { useEffect } from 'react';
import { fetchEvents } from '@/entities/event/model/eventThunk';

interface EventsSectionProps {
  variant: EventCardVariant;
  className?: string;

  currentPage: number;
  onPageChange: (page: number) => void;
  itemsPerPage?: number;
}

function EventsSection({
  variant,
  className = '',
  currentPage,
  onPageChange,
  itemsPerPage = 0
}: EventsSectionProps): React.JSX.Element {
  const eventsSection = 'events-section'

  const { t } = useTranslation()

  const dispatch = useAppDispatch()

  const events = useAppSelector(selectEvents)
  const isLoading = useAppSelector(selectEventsLoading)
  const isLoaded = useAppSelector(selectLatestEventsLoaded)
  const error = useAppSelector(selectEventsError)

  useEffect(() => {
    dispatch(fetchEvents())
  }, [dispatch]);

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

  if (events.length === 0) {
    return (
      <WarningMessage message='Events not found.' />
    )
  }

  const totalPages = Math.ceil(events.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const visibleEvents = events.slice(startIndex, endIndex)

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

        <EventGrid
          events={visibleEvents}
          variant={variant}
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