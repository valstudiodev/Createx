import { EventFullDetails } from '../../model/event-types';
import './eventInfoCard.scss';

interface EventInfoCardProps {
  className?: string;
  event: EventFullDetails;
  actions: React.ReactElement[]
}

function EventInfoCard({
  className = '',
  event,
  actions
}: EventInfoCardProps): React.JSX.Element {
  const eventInfoCard = 'event-info-card'

  return (
    <article className={`${eventInfoCard} ${className}`}>
      <div className={`${eventInfoCard}__wrap`}>
        <span className={`${eventInfoCard}__label`}>Time</span>
        <div className={`${eventInfoCard}__info`}>
          <span className={`${eventInfoCard}__date`}>{event.date}</span>,
          <div className={`${eventInfoCard}__time`}>
            <span>{event.startTime}</span> -
            <span>{event.endTime}</span>
          </div>
        </div>
        <p className={`${eventInfoCard}__text`}>
          Metus turpis sit lorem lacus, in elit tellus lacus.
        </p>
      </div>
      <div className={`${eventInfoCard}__wrap`}>
        <div className={`${eventInfoCard}__price`}>
          <span className={`${eventInfoCard}__label`}>price</span>
          <span className={`${eventInfoCard}__amount`}>{event.price}</span>
        </div>
        <p className={`${eventInfoCard}__text`}>
          Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.
        </p>
      </div>
      <div className={`${eventInfoCard}__actions`}>
        {actions}
      </div>
    </article>
  );
}

export default EventInfoCard;