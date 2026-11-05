import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import './eventGrid.scss';
import { selectEvenets, selectEventsError, selectEventsLoading } from '../../model/eventSelector';
import { useEffect } from 'react';
import { fetchEvents } from '../../model/eventThunk';
import { WarningMessage } from '@/shared/ui/Messages';
import EventCardPreview from '../EventCardPreview/EventCardPreview';
import { ButtonBasic } from '@/shared/ui/Button';
import { routeMap } from '@/app/routes/routeMap';

interface EventGridProps {
  className?: string;
}

function EventGrid({
  className = ''
}: EventGridProps): React.JSX.Element {
  const eventGrid = 'event-grid'

  const dispatch = useAppDispatch()

  const events = useAppSelector(selectEvenets)
  const loading = useAppSelector(selectEventsLoading)
  const error = useAppSelector(selectEventsError)

  useEffect(() => {
    dispatch(fetchEvents())
  }, [dispatch]);

  if (loading) {
    return <div className='text-center text-4xl'>Loading Event list...</div>
  }

  if (error) {
    return (
      <div>{error}</div>
    )
  }

  if (events.length === 0) {
    return <WarningMessage message='Events not found.' />
  }

  return (
    <div className={`${eventGrid} ${className}`}>
      <ul className={`${eventGrid}__list`}>
        {events.map((event) => (
          <li
            key={event.id}
            className={`${eventGrid}__item`}
          >
            <EventCardPreview
              event={event}
              actions={[
                <ButtonBasic
                  type='link'
                  to={routeMap.eventDetails.navigate(event.id)}
                  variant='secondary'
                  className='event-card-btn'>
                  View more
                </ButtonBasic>
              ]}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventGrid;