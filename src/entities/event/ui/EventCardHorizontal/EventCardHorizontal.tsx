import formateDate from '@/shared/lib/formate-date/formate-date';
import { EventCard } from '../../model/event-types';
import './eventCardHorizontal.scss';
import { Link } from 'react-router';
import { routeMap } from '@/app/routes/routeMap';

function EventCardHorizontal({
  event,
  className = '',
  variant,
  actions
}: EventCard) {
  const eventCardHorizontal = 'event-card-horizontal'

  const day = formateDate(event.date, {
    day: '2-digit'
  })

  const month = formateDate(event.date, {
    month: 'long'
  })

  return (
    <Link
      to={routeMap.eventDetails.navigate(event.id)}
      className={`${eventCardHorizontal} ${eventCardHorizontal}--${variant} ${className}`}>
      <div className={`${eventCardHorizontal}__timing`}>
        <span className={`${eventCardHorizontal}__day`}>
          {day}
        </span>
        <div className={`${eventCardHorizontal}__wrap`}>
          <span className={`${eventCardHorizontal}__month`}>
            {month}
          </span>
          <div className={`${eventCardHorizontal}__time`}>
            <span>{event.startTime}</span> -
            <span>{event.endTime}</span>
          </div>
        </div>
      </div>
      <div className={`${eventCardHorizontal}__body`}>
        <h3 className={`${eventCardHorizontal}__title`}>
          {event.title}
        </h3>
        <div className={`${eventCardHorizontal}__type`}>
          <span>{event.format}</span>
          <span>{event.type}</span>
        </div>
      </div>
      <div className={`${eventCardHorizontal}__actions`}>
        {actions}
      </div>
    </Link>
  );
}

export default EventCardHorizontal;