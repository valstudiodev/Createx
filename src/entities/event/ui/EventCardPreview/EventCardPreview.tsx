import './eventCardPreview.scss';
import formateDate from '@/shared/lib/formate-date/formate-date';
import { Link } from 'react-router';
import { routeMap } from '@/app/routes/routeMap';
import { Event, EventCardVariant } from '../../model/event-types';

interface EventCardProps {
  event: Event;
  className?: string;
  variant: EventCardVariant;
  actions?: React.ReactNode;
}


function EventCardPreview({
  event,
  className = '',
  variant,
  actions
}: EventCardProps): React.JSX.Element {
  const eventCardPreview = 'event-card-preview'

  const formattedDate = formateDate(event.date, {
    day: '2-digit',
    month: 'short',
  })

  return (
    <article className={`${eventCardPreview}`}>
      <Link
        to={routeMap.eventDetails.navigate(event.id)}
        className={`${eventCardPreview}__link ${eventCardPreview}--${variant} ${className}`}>
        <div className={`${eventCardPreview}__top`}>
          <span className={`${eventCardPreview}__date`}>{formattedDate}</span>
          <div className={`${eventCardPreview}__time`}>
            <span>{event.startTime}</span> -
            <span>{event.endTime}</span>
          </div>
        </div>
        <div className={`${eventCardPreview}__body`}>
          <h3 className={`${eventCardPreview}__title`}>{event.title}</h3>
          <div className={`${eventCardPreview}__wrap`}>
            <span className={`${eventCardPreview}__format`}>{event.format}</span>
            <span className={`${eventCardPreview}__type`}>{event.type}</span>
          </div>
        </div>
      </Link>
      <div className={`${eventCardPreview}__actions`}>
        {actions}
      </div>
    </article>
  );
}

export default EventCardPreview;