import { Section } from '@/shared/primitives';
import '../styles/eventsPage.scss';
import EventsSection from '@/widgets/event/EventsSection/EventsSection';
import { SubscribeSection } from '@/widgets';
import { useState } from 'react';


function EventsPage(): React.JSX.Element {
  const eventsPage = 'events-page'

  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <Section className={eventsPage}>
      <EventsSection
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        itemsPerPage={3}
        variant='primary' />
      <SubscribeSection variant='default' />
    </Section>
  );
}

export default EventsPage;