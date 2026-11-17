import { Title } from '@/shared/ui';
import { EventFullDetails } from '../../model/event-types';
import './styles.scss';
import { useTranslation } from 'react-i18next';

interface EventInformationProps {
  event: EventFullDetails;
}

function EventInformation({
  event
}: EventInformationProps): React.JSX.Element {
  const eventInformation = 'event-information'

  const { t } = useTranslation()

  return (
    <div className={eventInformation}>
      <div className={`${eventInformation}__content`}>
        <Title
          label={t('labels.forWhom')}
          className={`${eventInformation}__title`}
        >
          {t('titles.whoWillBenefitFromEvent')}
        </Title>
      </div>
      <div className={`${eventInformation}__items`}>
        <ul className={`${eventInformation}__list`}>
          {event.details.information?.map((item, index) => (
            <li
              key={index}
              className={`${eventInformation}__item`}
            >
              <span
                aria-hidden='true'
                className={`${eventInformation}__icon ${eventInformation}__icon--icon-circle-check-big`}></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EventInformation;