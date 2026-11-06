import { Container, Section } from '@/shared/primitives';
import '../styles/eventsPage.scss';
import EventGrid from '@/entities/event/ui/EventGrid/EventGrid';
function EventsPage(): React.JSX.Element {
  const eventsPage = 'events-page'

  return (
    <Section className={eventsPage}>
      <Container className={`${eventsPage}__container`}>

        <EventGrid variant='primary' />

      </Container>
    </Section>
  );
}

export default EventsPage;