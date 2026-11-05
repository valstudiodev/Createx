import './courseList.scss';
import CourseCard from '@/entities/course/ui/CourseCard/CourseCard';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { selectCourses, selectCoursesError, selectCoursesLoading } from '@/entities/course/model/courseSelector';
import { useEffect } from 'react';
import { fetchCourses } from '@/entities/course/model/courseThunk';
import { CourseCardPreview } from '@/entities';

interface CourseListProps {
  className?: string;
}

function CourseList({
  className = ''
}: CourseListProps): React.JSX.Element {
  const courseList = 'course-list'

  const dispatch = useAppDispatch()

  const courses = useAppSelector(selectCourses)
  const loading = useAppSelector(selectCoursesLoading)
  const error = useAppSelector(selectCoursesError)

  useEffect(() => {
    dispatch(fetchCourses())
  }, [dispatch]);

  if (loading) return <div className='text-center text-4xl'>Loading Courses list...</div>

  if (error) {
    return (
      <div>{error}</div>
    )
  }

  if (courses.length === 0) {
    return <div>Courses not found.</div>
  }

  return (
    <ul className={`${courseList} ${className}`}>
      {courses.map((course) => (
        <li
          className={`${courseList}__item`}
          key={course.id}
        >
          <CourseCard course={course} />
        </li>
      ))}
    </ul>
  );
}

export default CourseList;