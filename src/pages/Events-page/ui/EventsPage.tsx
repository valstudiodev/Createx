import { Section } from '@/shared/primitives';
import '../styles/eventsPage.scss';
import EventsSection from '@/widgets/event/EventsSection/EventsSection';
import { SubscribeSection } from '@/widgets';
function EventsPage(): React.JSX.Element {
  const eventsPage = 'events-page'

  return (
    <Section className={eventsPage}>
      <EventsSection variant='primary' />
      <SubscribeSection variant='default' />
    </Section>
  );
}

export default EventsPage;