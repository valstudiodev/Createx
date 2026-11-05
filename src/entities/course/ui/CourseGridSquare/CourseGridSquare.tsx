import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import './styles.scss';
import { selectCourses, selectCoursesError, selectCoursesLoading } from '../../model/courseSelector';
import { useEffect } from 'react';
import { fetchCourses } from '../../model/courseThunk';
import CourseCard from '../CourseCard/CourseCard';
import { WarningMessage } from '@/shared/ui/Messages';

interface CourseGridSquareProps {
  className?: string;
}

function CourseGridSquare({
  className = ''
}: CourseGridSquareProps): React.JSX.Element {
  const courseGridSquare = 'course-grid-square'

  const dispatch = useAppDispatch()

  const courses = useAppSelector(selectCourses)
  const loading = useAppSelector(selectCoursesLoading)
  const error = useAppSelector(selectCoursesError)

  useEffect(() => {
    dispatch(fetchCourses())
  }, [dispatch]);

  console.log('Courses:', courses);
  console.log('Courses length:', courses.length);
  console.log('Loading:', loading);
  console.log('Error:', error);

  if (loading) return <div className='text-center text-4xl'>Loading Course Grid Square list...</div>

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