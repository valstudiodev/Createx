import { Container, Section } from '@/shared/primitives';
import './coursesSection.scss';
import CourseGridSquare from '@/entities/course/ui/CourseGridSquare/CourseGridSquare';
import { Title } from '@/shared/ui';
import { useTranslation } from 'react-i18next';

interface CoursesSectionProps {
  className?: string;
}

function CoursesSection({
  className = ''
}: CoursesSectionProps): React.JSX.Element {
  const coursesSection = 'courses-section'

  const { t } = useTranslation()

  return (
    <Section className={`${coursesSection} ${className}`}>
      <Container className={`${coursesSection}__container`}>
        <Title
          label={t('labels.enjoyYourStudying')}
          variant='centered'
          className={`${coursesSection}__title`}
        >
          {t('titles.ourOnlineCourses')}
        </Title>
        {/* filter */}
        <CourseGridSquare />
      </Container>
    </Section>
  );
}

export default CoursesSection;