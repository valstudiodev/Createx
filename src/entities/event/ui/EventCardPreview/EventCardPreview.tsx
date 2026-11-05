import './eventCardPreview.scss';
import { Event } from '../../model/event-types';

interface EventCardPreviewProps {
  event: Event;
  className?: string;
  actions: React.ReactElement[]
}

function EventCardPreview({
  event,
  className = '',
  actions
}: EventCardPreviewProps): React.JSX.Element {
  const eventCardPreview = 'event-card-preview'

  return (
    <article className={`${eventCardPreview} ${className}`}>
      <div className={`${eventCardPreview}__top`}>
        <span className={`${eventCardPreview}__date`}>{event.date}</span>
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
      <div className={`${eventCardPreview}__actions`}>
        {actions}
      </div>
    </article>
  );
}

export default EventCardPreview;