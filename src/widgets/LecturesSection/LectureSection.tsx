import { Container, Section } from '@/shared/primitives';
import './lectureSection.scss';
import Title from '@/shared/ui/Title/Title';
import { useTranslation } from 'react-i18next';
import EventGrid from '@/entities/event/ui/EventGrid/EventGrid';
import ExploreWrap from '../ExploreWrap/ExploreWrap';
import { ButtonBasic } from '@/shared/ui/Button';
import { routeMap } from '@/app/routes/routeMap';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { selectLatestEvents, selectLatestEventsError, selectLatestEventsLoading } from '@/entities/event/model/eventSelector';
import { useEffect } from 'react';
import { fetchLatestEvents } from '@/entities/event/model/eventThunk';
import { ErrorMessage, WarningMessage } from '@/shared/ui/Messages';
import { SpinnerDefault } from '@/shared/ui';

function LectureSection(): React.JSX.Element {
  const leactureSection = 'lecture-section'

  const { t } = useTranslation()

  const dispatch = useAppDispatch()

  const latestEvents = useAppSelector(selectLatestEvents)
  const isLoading = useAppSelector(selectLatestEventsLoading)
  const error = useAppSelector(selectLatestEventsError)

  useEffect(() => {
    dispatch(fetchLatestEvents())
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className={`${leactureSection}__loading`}>
        <SpinnerDefault size='large' />
      </div>
    )
  }

  if (error) {
    return (
      <ErrorMessage message={error} />
    )
  }

  if (latestEvents.length === 0) {
    return (
      <WarningMessage message='Latest events not found.' />
    )
  }

  return (
    <Section className={leactureSection}>
      <Container className={`${leactureSection}__container`}>
        <Title
          variant='centered'
          label={t('labels.ourEvents')}
          className={`${leactureSection}__title`}
        >
          {t('titles.lecturesWorkshops')}
        </Title>
        <EventGrid
          events={latestEvents}
          variant='featured'
        />
        <ExploreWrap
          title={t('labels.doYouWantMore')}
          actions={
            <ButtonBasic
              type='link'
              to={routeMap.events.path}
            >
              {t('buttons.exploreAllEvents')}
            </ButtonBasic>
          }
        />
      </Container>
    </Section>
  );
}

export default LectureSection;