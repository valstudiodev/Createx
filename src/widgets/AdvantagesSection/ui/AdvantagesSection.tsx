import { Container, Section } from '@/shared/primitives';
import './advantagesSection.scss';
import Title from '@/shared/ui/Title/Title';
import { useTranslation } from 'react-i18next';
import AdvantagesList from './AdvantagesList';
import AdvantagesContent from './AdvantagesContent';

interface AdvantagesSectionProps {
  className?: string;
}

function AdvantagesSection({
  className = ''
}: AdvantagesSectionProps): React.JSX.Element {
  const advantagesSection = 'advantages-section'

  const { t } = useTranslation()

  return (
    <Section className={`${advantagesSection} ${className}`}>
      <Container className={`${advantagesSection}__container`}>
        <Title
          label={t('labels.ourBenefits')}
          variant='centered'
          className={`${advantagesSection}__title`}
        >
          {t('titles.howWeDoIt')}
        </Title>
        <AdvantagesList />
        <AdvantagesContent />
      </Container>
    </Section>
  );
}

export default AdvantagesSection;