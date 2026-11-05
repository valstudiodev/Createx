import './eventSectionInfo.scss';
import EventInformation from '@/entities/event/ui/EventInformation/EventInformation';
import { EventFullDetails } from '@/entities/event/model/event-types';

function EventSectionInfo({
  event
}: { event: EventFullDetails }): React.JSX.Element {
  const eventSectionInfo = 'event-section-info'

  return (
    <div className={`${eventSectionInfo}`}>
      <EventInformation event={event} />
    </div>
  );
}

export default EventSectionInfo;