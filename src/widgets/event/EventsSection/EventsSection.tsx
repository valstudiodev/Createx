import { Container, Section } from '@/shared/primitives';
import './eventsSection.scss';
import EventGrid from '@/entities/event/ui/EventGrid/EventGrid';
import { EventCardVariant } from '@/entities/event/model/event-types';
import { Title } from '@/shared/ui';
import { useTranslation } from 'react-i18next';

interface EventsSectionProps {
  variant: EventCardVariant;
  className?: string;
}

function EventsSection({
  variant,
  className = ''
}: EventsSectionProps): React.JSX.Element {
  const eventsSection = 'events-section'

  const { t } = useTranslation()

  return (
    <Section className={`${eventsSection} ${className}`}>
      <Container className={`${eventsSection}__container`}>
        <Title
          label={t('labels.ourEvents')}
          variant='centered'
          className={`${eventsSection}__title`}
        >
          {t('titles.lecturesWorkshopsMasterclasses')}
        </Title>

        {/* filter */}

        <EventGrid variant={variant} />

        {/* pagination */}
      </Container>
    </Section>
  );
}

export default EventsSection;