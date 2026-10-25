import { Link } from "react-router";
import { Course } from "../../model/course.types";
import { routeMap } from "@/app/routes/routeMap";
import { coursesCategoryConfig } from "../../config/course-category.config";
import './coursePreview.scss';

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

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(course.price)
  return (
    <Link
      to={routeMap.courseDetails.path}
      className={[courseCardPreview, className].filter(Boolean).join(' ')}
      aria-labelledby={`${courseCardPreview}-${course.id}-title`}
    >
      {course.image && (
        <div className={`${courseCardPreview}__image`}>
          <img
            src={course.image} alt='' loading='lazy' />
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
              {course.teacherName}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CourseCardPreview;