import { Section } from '@/shared/primitives';
import '../styles/eventsDetails.scss';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { selectEvent, selectEventError, selectEventLoading, selectEventsError, selectEventsLoading, selectEventsRecommended } from '@/entities/event/model/eventSelector';
import { useEffect } from 'react';
import { fetchEventByID, fetchEvents } from '@/entities/event/model/eventThunk';
import { ErrorMessage, WarningMessage } from '@/shared/ui/Messages';
import { EventSectionAbout, EventSectionInfo } from '@/widgets/event';
import { SpinnerDefault } from '@/shared/ui';
import EventTeacherDetails from '@/widgets/event/EventTeacherDetails/EventTeacherDetails';
import { FormSection, HeroSectionDetails, SubscribeSection } from '@/widgets';
import { useTranslation } from 'react-i18next';
import EventsRecommended from '@/widgets/event/EventsRecommended/EventsRecommended';

function EventsDetailsPage(): React.JSX.Element {
  const eventsDetailsPage = 'events-details-page'

  const { id } = useParams()

  const { t } = useTranslation()

  const dispatch = useAppDispatch()

  const event = useAppSelector(selectEvent)
  const eventsLoading = useAppSelector(selectEventsLoading)
  const eventLoading = useAppSelector(selectEventLoading)
  const eventsError = useAppSelector(selectEventsError)
  const eventError = useAppSelector(selectEventError)

  const recommendedEvents = useAppSelector((state) =>
    selectEventsRecommended(state, id ?? '')
  )

  useEffect(() => {
    if (!id) return

    dispatch(fetchEventByID({ eventId: id }))
    dispatch(fetchEvents())
  }, [dispatch, id]);

  if (eventsLoading || eventLoading) {
    return (
      <div className={`${eventsDetailsPage}__loading`}>
        <SpinnerDefault size='large' />
      </div>
    )
  }

  if (eventsError || eventError) {
    return <ErrorMessage message={`${eventsError}`} />
  }

  if (!event) {
    return <WarningMessage message='Event is not found.' />
  }

  return (
    <Section className={eventsDetailsPage}>
      <HeroSectionDetails
        label={t('labels.onlineLecture')}
        title={t('titles.organizationalStructure')}
      />
      <EventSectionAbout event={event} />
      <EventTeacherDetails teacherId={event.teacherId} />
      <EventSectionInfo event={event} />
      <SubscribeSection variant='compact' />
      <FormSection type='request' />
      <EventsRecommended
        loading={eventsLoading}
        events={recommendedEvents}
      />
    </Section>
  );
}

export default EventsDetailsPage
