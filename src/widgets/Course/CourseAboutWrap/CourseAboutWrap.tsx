import CourseContent from '@/entities/course/ui/CourseContent/CourseContent';
import './courseAboutWrap.scss';
import CourseInfoCard from '@/entities/course/ui/CourseInfoCard/CourseInfoCard';
import { CourseFullDetails } from '@/entities/course/model/course.types';

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
    <div className={`${courseAboutWrap} ${className}`}>
      <CourseContent
        className={`${courseAboutWrap}__content`}
        course={course} />
      <CourseInfoCard
        className={`${courseAboutWrap}__info-card`}
        course={course} />
    </div>
  );
}

export default CourseAboutWrap;