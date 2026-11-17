import { Link } from "react-router";
import { Course } from "../../model/course.types";
import { routeMap } from "@/app/routes/routeMap";
import { coursesCategoryConfig } from "../../config/course-category.config";
import './coursePreview.scss';
import { teachers } from "@/entities/teacher/data/teacher.data";

interface CourseCardPreviewProps {
  className?: string;
  course: Course
}

function CourseCardPreview({
  course,
  className = ''
}: CourseCardPreviewProps) {
  const courseCardPreview = 'course-card-preview'

  const category = coursesCategoryConfig[course.category]

  const teacher = teachers.find(
    (item) => item.id === course.teacherId
  )

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(course.price)
  return (
    <Link
      to={routeMap.courseDetails.navigate(course.id)}
      className={[courseCardPreview, className].filter(Boolean).join(' ')}
      aria-labelledby={`${courseCardPreview}-${course.id}-title`}
    >
      {teacher?.image && (
        <div className={`${courseCardPreview}__image`}>
          <img
            src={teacher.image} alt='' loading='lazy' />
        </div>
      )}
      <div className={`${courseCardPreview}__body`}>
        <span
          className={`${courseCardPreview}__category`}
          style={{
            backgroundColor: category.background,
            color: category.color
          }}
        >
          {category.label}
        </span>
        <h3
          id={`${courseCardPreview}-${course.id}-title`}
          className={`${courseCardPreview}__title`}>
          {course.title}
        </h3>
        <div className={`${courseCardPreview}__info`}>
          <span className={`${courseCardPreview}__price`}>
            {formattedPrice}
          </span> |
          <div className={`${courseCardPreview}__teacher`}>
            <span>by</span>
            <span className={`${courseCardPreview}__teacher-name`}>
              {teacher?.name ?? 'Teacher is not found.'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CourseCardPreview;