import { Link } from "react-router";
import { coursesCategoryConfig } from "../../config/course-category.config";
import { Course } from "../../model/course.types";
import './courseCard.scss';
import { routeMap } from "@/app/routes/routeMap";
import { teachers } from "@/entities/teacher/data/teacher.data";

interface CourseCardProps {
  className?: string;
  course: Course
}

function CourseCard({
  course,
  className = ''
}: CourseCardProps): React.JSX.Element {
  const courseCard = 'course-card'

  const category = coursesCategoryConfig[course.category]

  const teacher = teachers.find(
    (item) => item.id === course.teacherId
  )

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(course.price)

  console.log('CourseCard:', {
    id: course.id,
    title: course.title,
    teacherId: course.teacherId,
  });

  return (
    <Link
      to={routeMap.courseDetails.navigate(course.id)}
      className={[courseCard, className].filter(Boolean).join(' ')}
      aria-labelledby={`${courseCard}-${course.id}-title`}
    >
      {teacher?.image && (
        <div className={`${courseCard}__image`}>
          <img
            src={teacher.image} alt='' loading='lazy' />
        </div>
      )}
      <div className={`${courseCard}__body`}>
        <span
          className={`${courseCard}__category`}
          style={{
            backgroundColor: category.background,
            color: category.color
          }}
        >
          {category.label}
        </span>
        <h3
          id={`${courseCard}-${course.id}-title`}
          className={`${courseCard}__title`}>
          {course.title}
        </h3>
        <div className={`${courseCard}__info`}>
          <span className={`${courseCard}__price`}>
            {formattedPrice}
          </span> |
          <div className={`${courseCard}__teacher`}>
            <span>by</span>
            <span className={`${courseCard}__teacher-name`}>
              {teacher?.name ?? 'Teacher is not found.'}
            </span>
          </div>
        </div>
      </div>
    </Link >
  );
}

export default CourseCard;