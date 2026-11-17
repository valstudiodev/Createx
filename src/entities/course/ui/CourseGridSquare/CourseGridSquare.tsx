import './styles.scss';
import CourseCard from '../CourseCard/CourseCard';
import { WarningMessage } from '@/shared/ui/Messages';
import { Course } from '../../model/course.types';
import { SpinnerDefault } from '@/shared/ui';

interface CourseGridSquareProps {
  courses: Course[],
  loading: boolean,
  error: string | null,
  className?: string;
}

function CourseGridSquare({
  courses,
  loading,
  error,
  className = ''
}: CourseGridSquareProps): React.JSX.Element {
  const courseGridSquare = 'course-grid-square'

  if (loading) {
    return (
      <div className={`${courseGridSquare}__loading`}>
        <SpinnerDefault size='large' />
      </div>
    )
  }

  if (error) {
    return (
      <div>{error}</div>
    )
  }

  if (courses.length === 0) {
    return (
      <WarningMessage message='Courses not found.' />
    )
  }

  return (
    <div className={`${courseGridSquare} ${className}`}>
      <ul className={`${courseGridSquare}__list`}>
        {courses.map((course) => (
          <li
            className={`${courseGridSquare}__item`}
            key={course.id}
          >
            <CourseCard course={course} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseGridSquare;