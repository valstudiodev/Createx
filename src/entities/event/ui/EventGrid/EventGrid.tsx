import './eventGrid.scss';
import EventCardPreview from '../EventCardPreview/EventCardPreview';
import { ButtonBasic } from '@/shared/ui/Button';
import { Event, EventCardVariant } from '../../model/event-types';
import EventCardHorizontal from '../EventCardHorizontal/EventCardHorizontal';
import { useTranslation } from 'react-i18next';
import { routeMap } from '@/app/routes/routeMap';

interface EventGridProps {
  events: Event[];
  className?: string;
  variant: EventCardVariant;
}

function EventGrid({
  events,
  className = '',
  variant
}: EventGridProps): React.JSX.Element {
  const eventGrid = 'event-grid'

  const { t } = useTranslation()

  return (
    <div className={`${eventGrid} ${eventGrid}--${variant} ${className}`}>
      <ul className={`${eventGrid}__list`}>
        {events.map((event) => (
          <li
            key={event.id}
            className={`${eventGrid}__item`}
          >
            {variant === 'primary' ? (
              <EventCardPreview
                variant='featured'
                event={event}
                actions={
                  <ButtonBasic
                    type='link'
                    to={routeMap.eventDetails.navigate(event.id)}
                    variant='secondary'
                    className='event-card-btn'>
                    {t('buttons.viewMore')}
                  </ButtonBasic>
                }
              />
            ) : (
              <EventCardHorizontal
                variant='featured'
                event={event}
                actions={
                  <ButtonBasic
                    variant='secondary'
                    type='link'
                    to={routeMap.eventDetails.navigate(event.id)}
                    className='event-card-btn'
                  >
                    {t('buttons.viewMore')}
                  </ButtonBasic>
                }
              />
            )}

          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventGrid;