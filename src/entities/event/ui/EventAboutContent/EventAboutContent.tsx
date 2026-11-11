import { Accordion } from '@/shared/ui/Accordion';
import { EventFullDetails } from '../../model/event-types';
import './styles.scss';
import { useTranslation } from 'react-i18next';

interface EventAboutContentProps {
  event: EventFullDetails;
  className?: string;
}

function EventAboutContent({
  event,
  className = ''
}: EventAboutContentProps): React.JSX.Element {
  const eventAboutContent = 'event-about-content'

  const { t } = useTranslation()

  return (
    <section className={`${eventAboutContent} ${className}`}>
      <h2 className={`${eventAboutContent}__title`}>
        {t('titles.weWillTalkAbout')}
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