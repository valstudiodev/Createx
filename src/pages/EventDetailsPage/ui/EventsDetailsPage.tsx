import { Container, Section } from '@/shared/primitives';
import '../styles/eventsDetails.scss';

function EventsDetailsPage(): React.JSX.Element {
  const eventsDetailsPage = 'events-details-page'
  return (
    <Section className={eventsDetailsPage}>
      <Container className={`${eventsDetailsPage}__container`}>
        <h1>Events details page</h1>
      </Container>
    </Section>
  );
}

export default EventsDetailsPage
