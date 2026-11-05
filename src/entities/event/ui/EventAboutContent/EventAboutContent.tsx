import { Accordion } from '@/shared/ui/Accordion';
import { EventFullDetails } from '../../model/event-types';
import './styles.scss';

interface EventAboutContentProps {
  event: EventFullDetails;
  className?: string;
}

function EventAboutContent({
  event,
  className = ''
}: EventAboutContentProps): React.JSX.Element {
  const eventAboutContent = 'event-about-content'

  return (
    <section className={`${eventAboutContent} ${className}`}>
      <h2 className={`${eventAboutContent}__title`}>
        We will talk about:
      </h2>

      <Accordion
        items={event.about}
        itemLabel='Theme'
        className={`${eventAboutContent}__accordion`}
      />

    </section>
  );
}

export default EventAboutContent;