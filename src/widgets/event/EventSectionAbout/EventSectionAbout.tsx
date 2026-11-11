import { EventFullDetails } from '@/entities/event/model/event-types';
import './styles.scss';
import EventAboutContent from '@/entities/event/ui/EventAboutContent/EventAboutContent';
import EventInfoCard from '@/entities/event/ui/EventInfoCard/EventInfoCard';
import { Link } from 'react-router';
import { ButtonBasic } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';

function EventSectionAbout({
  event
}: { event: EventFullDetails }): React.JSX.Element {
  const eventSectionAbout = 'event-section-about'

  const { t } = useTranslation()

  return (
    <div className={eventSectionAbout}>
      <EventAboutContent
        className={`${eventSectionAbout}__content`}
        event={event} />
      <EventInfoCard
        className={`${eventSectionAbout}__info-card`}
        event={event}
        actions={[
          <Link
            className={`${eventSectionAbout}__link`}
            to='/'>
            event on facebook
          </Link>,
          <ButtonBasic
            className={`${eventSectionAbout}__btn`}
          >
            {t('buttons.joinEvent')}
          </ButtonBasic>
        ]}
      />
    </div>
  );
}

export default EventSectionAbout;