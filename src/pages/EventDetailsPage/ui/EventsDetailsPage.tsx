import { Container, Section } from '@/shared/primitives';
import '../styles/eventsDetails.scss';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { selectEvent, selectEventError, selectEventLoading } from '@/entities/event/model/eventSelector';
import { useEffect } from 'react';
import { fetchEventByID } from '@/entities/event/model/eventThunk';
import { ErrorMessage, WarningMessage } from '@/shared/ui/Messages';
import { EventSectionAbout, EventSectionInfo } from '@/widgets/event';
import { SpinnerDefault } from '@/shared/ui';

function EventsDetailsPage(): React.JSX.Element {
  const eventsDetailsPage = 'events-details-page'

  const { id } = useParams()

  const dispatch = useAppDispatch()

  const event = useAppSelector(selectEvent)
  const eventLoading = useAppSelector(selectEventLoading)
  const eventError = useAppSelector(selectEventError)

  useEffect(() => {
    if (!id) return

    dispatch(fetchEventByID({ eventId: id }))
  }, [dispatch, id]);

  if (eventLoading) {
    return (
      <div className={`${eventsDetailsPage}__loading`}>
        <SpinnerDefault size='large' />
      </div>
    )
  }

  if (eventError) {
    return <ErrorMessage message={`${eventError}`} />
  }

  if (!event) {
    return <WarningMessage message='Event is not found.' />
  }

  return (
    <Section className={eventsDetailsPage}>
      <Container className={`${eventsDetailsPage}__container`}>
        <EventSectionAbout event={event} />

        {/* Teacher */}

        <EventSectionInfo event={event} />
      </Container>
    </Section>
  );
}

export default EventsDetailsPage
