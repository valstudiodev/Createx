import { Container, Section } from '@/shared/primitives';
import './aboutValuesSection.scss';
import ValuesItemsList from './ValuesItemsList';
import { Title } from '@/shared/ui';
import { useTranslation } from 'react-i18next';

interface AboutValuesSectionProps {
  className?: string;
}

function AboutValuesSection({
  className = ''
}: AboutValuesSectionProps): React.JSX.Element {
  const aboutValuesSection = 'about-values-section'

  const { t } = useTranslation()

  return (
    <Section className={`${aboutValuesSection} ${className}`}>
      <Container className={`${aboutValuesSection}__container`}>
        <Title
          label={t('labels.weAlwaysStandFor')}
          variant='centered'
          className={`${aboutValuesSection}__title`}
        >
          {t('titles.ourCoreValues')}
        </Title>
        <ValuesItemsList />
      </Container>
    </Section>
  );
}

export default AboutValuesSection;