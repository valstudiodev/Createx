import { Container, Section } from '@/shared/primitives';
import './lectureSection.scss';
import Title from '@/shared/ui/Title/Title';
import { useTranslation } from 'react-i18next';
import EventGrid from '@/entities/event/ui/EventGrid/EventGrid';
import ExploreWrap from '../ExploreWrap/ExploreWrap';
import { ButtonBasic } from '@/shared/ui/Button';
import { routeMap } from '@/app/routes/routeMap';

function LectureSection(): React.JSX.Element {
  const leactureSection = 'lecture-section'

  const { t } = useTranslation()

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