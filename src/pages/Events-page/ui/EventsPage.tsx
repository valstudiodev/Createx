import { Container, Section } from '@/shared/primitives';
import '../styles/eventsPage.scss';
import { routeMap } from '@/app/routes/routeMap';
import { Link } from 'react-router';

function EventsPage(): React.JSX.Element {
  const eventsPage = 'events-page'
  const eventId = 13
  return (
    <Section className={eventsPage}>
      <Container className={`${eventsPage}__container`}>
        <h1>Events page</h1>
        <Link
          to={routeMap.eventDetails.navigate(eventId)}
        >
          Go to event details page
        </Link>
      </Container>
    </Section>
  );
}

export default EventsPage;