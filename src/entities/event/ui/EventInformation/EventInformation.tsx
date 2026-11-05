import { EventFullDetails } from '../../model/event-types';
import './styles.scss';

interface EventInformationProps {
  event: EventFullDetails;
}

function EventInformation({
  event
}: EventInformationProps): React.JSX.Element {
  const eventInformation = 'event-information'

  return (
    <div className={eventInformation}>
      <div className={`${eventInformation}__content`}>
        <span className={`${eventInformation}__label`}>
          for whom?
        </span>
        <h2 className={`${eventInformation}__title`}>
          Who will benefit from the event:
        </h2>
      </div>
      <div className={`${eventInformation}__items`}>
        <ul className={`${eventInformation}__list`}>
          {event.information?.map((item, index) => (
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