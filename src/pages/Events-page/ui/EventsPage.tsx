import { Container, Section } from '@/shared/primitives';
import '../styles/eventsPage.scss';
import EventsSection from '@/widgets/event/EventsSection/EventsSection';
function EventsPage(): React.JSX.Element {
  const eventsPage = 'events-page'

  return (
    <Section className={eventsPage}>
      <Container className={`${eventsPage}__container`}>

        <EventsSection variant='primary' />

      </Container>
    </Section>
  );
}

export default EventsPage;