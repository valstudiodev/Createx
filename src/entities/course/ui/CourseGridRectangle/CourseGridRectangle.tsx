import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import './styles.scss';
import { selectCourses, selectCoursesError, selectCoursesLoading } from '../../model/courseSelector';
import { useEffect } from 'react';
import { fetchCourses } from '../../model/courseThunk';
import CourseCardPreview from '../CoursePreview/CourseCardPreview';

interface CourseGridRectangleProps {
  className?: string;
}

function CourseGridRectangle({
  className = ''
}: CourseGridRectangleProps): React.JSX.Element {
  const courseGridRectangle = 'course-grid-rectangle'

  const dispatch = useAppDispatch()

  const courses = useAppSelector(selectCourses)
  const loading = useAppSelector(selectCoursesLoading)
  const error = useAppSelector(selectCoursesError)

  useEffect(() => {
    dispatch(fetchCourses())
  }, [dispatch]);

  if (loading) return <div className='text-center text-4xl'>Loading Course Grid Rectangle list...</div>

  if (error) {
    return (
      <div>{error}</div>
    )
  }

  if (courses.length === 0) {
    return <div>Courses not found.</div>
  }

  return (
    <div className={`${courseGridRectangle} ${className}`}>
      <ul className={`${courseGridRectangle}__list`}>
        {courses.map((course) => (
          <li
            className={`${courseGridRectangle}__item`}
            key={course.id}
          >
            <CourseCardPreview course={course} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseGridRectangle;