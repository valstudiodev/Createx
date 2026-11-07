import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import './eventGrid.scss';
import { selectEvents, selectEventsError, selectEventsLoading } from '../../model/eventSelector';
import { useEffect } from 'react';
import { fetchEvents } from '../../model/eventThunk';
import { WarningMessage } from '@/shared/ui/Messages';
import EventCardPreview from '../EventCardPreview/EventCardPreview';
import { ButtonBasic } from '@/shared/ui/Button';
import { EventCardVariant } from '../../model/event-types';
import EventCardHorizontal from '../EventCardHorizontal/EventCardHorizontal';
import { useTranslation } from 'react-i18next';

interface EventGridProps {
  className?: string;
  variant: EventCardVariant;
}

function EventGrid({
  className = '',
  variant
}: EventGridProps): React.JSX.Element {
  const eventGrid = 'event-grid'

  const { t } = useTranslation()

  const dispatch = useAppDispatch()

  const events = useAppSelector(selectEvents)
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
                actions={[
                  <ButtonBasic
                    variant='secondary'
                    className='event-card-btn'>
                    {t('buttons.viewMore')}
                  </ButtonBasic>
                ]}
              />
            ) : (
              <EventCardHorizontal
                variant='featured'
                event={event}
                actions={[
                  <ButtonBasic
                    variant='secondary'
                    className='event-card-btn'
                  >
                    {t('buttons.viewMore')}
                  </ButtonBasic>
                ]}
              />
            )}

          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventGrid;