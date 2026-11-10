import CourseContent from '@/entities/course/ui/CourseContent/CourseContent';
import './courseAboutWrap.scss';
import CourseInfoCard from '@/entities/course/ui/CourseInfoCard/CourseInfoCard';
import { CourseFullDetails } from '@/entities/course/model/course.types';
import { Container, Section } from '@/shared/primitives';

interface CourseAboutWrapProps {
  course: CourseFullDetails,
  className?: string
}

function CourseAboutWrap({
  course,
  className = ''
}: CourseAboutWrapProps): React.JSX.Element {
  const courseAboutWrap = 'course-about-wrap'

  return (
    <Section className={`${courseAboutWrap} ${className}`}>
      <Container className={`${courseAboutWrap}__container`}>
        <CourseContent
          className={`${courseAboutWrap}__content`}
          course={course} />
        <CourseInfoCard
          className={`${courseAboutWrap}__info-card`}
          course={course} />
      </Container>
    </Section>
  );
}

export default CourseAboutWrap;