import { Container, Section } from '@/shared/primitives';
import './aboutCompanySection.scss';
import { Title } from '@/shared/ui';
import { useTranslation } from 'react-i18next';
import AboutCompanyList from './AboutCompanyList';

interface AboutCompanySectionProps {
  className?: string;
}

function AboutCompanySection({
  className = ''
}: AboutCompanySectionProps): React.JSX.Element {
  const aboutCompanySection = 'about-company-section'

  const { t } = useTranslation()

  return (
    <Section className={`${aboutCompanySection} ${className}`}>
      <Container className={`${aboutCompanySection}__container`}>
        <Title
          label={t('labels.bestTutors')}
          variant='centered'
          className={`${aboutCompanySection}__title`}
        >
          {t('titles.meetOurTeam')}
        </Title>
        <AboutCompanyList />
      </Container>
    </Section>
  );
}

export default AboutCompanySection;