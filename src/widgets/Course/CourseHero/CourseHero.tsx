import { Container, Section } from '@/shared/primitives';
import './courseHero.scss';
import { Title } from '@/shared/ui';
import { useTranslation } from 'react-i18next';

interface CourseHeroProps {
  className?: string;
}

function CourseHero({
  className = ''
}: CourseHeroProps): React.JSX.Element {
  const courseHero = 'course-hero'

  const { t } = useTranslation()

  return (
    <Section className={`${courseHero} ${className}`}>
      <Container className={`${courseHero}__container`}>
        <Title
          label={t('labels.course')}
          className={`${courseHero}__title`}
          variant='centered'
        >
          {t('titles.userExperience')}
        </Title>
      </Container>
    </Section>
  );
}

export default CourseHero;