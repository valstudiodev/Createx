import { courses } from '@/entities/course/data/course.data';
import './courseList.scss';
import CourseCard from '@/entities/course/ui/CourseCard/CourseCard';

interface CourseListProps {
  className?: string;
}

function CourseListCard({
  className = ''
}: CourseListProps): React.JSX.Element {
  const courseList = 'course-list'

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

export default CourseListCard;