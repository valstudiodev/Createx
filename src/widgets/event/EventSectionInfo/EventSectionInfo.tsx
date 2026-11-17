import './eventSectionInfo.scss';
import { EventFullDetails } from '@/entities/event/model/event-types';
import { Container, Section } from '@/shared/primitives';
import { Title } from '@/shared/ui';
import { useTranslation } from 'react-i18next';

function EventSectionInfo({
  event
}: { event: EventFullDetails }): React.JSX.Element {
  const eventSectionInfo = 'event-section-info'

  const { t } = useTranslation()

  return (
    <Section className={eventSectionInfo}>
      <Container className={`${eventSectionInfo}__container`}>
        <div className={`${eventSectionInfo}__content`}>
          <Title
            label={t('labels.forWhom')}
            className={`${eventSectionInfo}__title`}
          >
            {t('titles.whoWillBenefitFromEvent')}
          </Title>
        </div>
        <div className={`${eventSectionInfo}__items`}>
          <ul className={`${eventSectionInfo}__list`}>
            {event.details.information?.map((item, index) => (
              <li
                key={index}
                className={`${eventSectionInfo}__item`}
              >
                <span
                  aria-hidden='true'
                  className={`${eventSectionInfo}__icon ${eventSectionInfo}__icon--icon-circle-check-big`}></span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

export default EventSectionInfo;