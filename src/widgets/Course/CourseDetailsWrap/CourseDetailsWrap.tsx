import { Container, Section } from '@/shared/primitives';
import './courseDetailsWrap.scss';
import { CourseDetails } from '@/entities';
import { CourseFullDetails } from '@/entities/course/model/course.types';

interface CourseDetailsWrapProps {
  course: CourseFullDetails;
  className?: string;
}

function CourseDetailsWrap({
  course,
  className = ''
}: CourseDetailsWrapProps): React.JSX.Element {
  const courseDetailsWrap = 'course-details-wrap'
  return (
    <Section className={`${courseDetailsWrap} ${className}`}>
      <Container className={`${courseDetailsWrap}__container`}>
        <CourseDetails course={course} />
      </Container>
    </Section>
  );
}

export default CourseDetailsWrap;