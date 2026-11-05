import { ButtonBasic } from '@/shared/ui/Button';
import { CourseFullDetails } from '../../model/course.types';
import './courseInfoCard.scss';

interface CourseInfoCardProps {
  course: CourseFullDetails;
  className?: string;
}

function CourseInfoCard({
  course,
  className = ''
}: CourseInfoCardProps): React.JSX.Element {
  const courseInfoCard = 'course-info-card'
  const dateCourseInfo = 'date-course-info'
  const durationCourseInfo = 'duration-course-info'
  const priceCourseInfo = 'price-course-info'

  return (
    <article className={`${courseInfoCard} ${className}`}>
      <div className={`${courseInfoCard}__wrap ${dateCourseInfo}`}>
        <span className={`${courseInfoCard}__label`}>dates</span>
        <div className={`${courseInfoCard}__dates`}>
          <span>{course.startDate}</span>
          <span>{course.endDate}</span>
        </div>
        <p className={`${courseInfoCard}__text`}>
          Metus turpis sit lorem lacus, in elit tellus lacus.
        </p>
      </div>
      <div className={`${courseInfoCard}__wrap ${durationCourseInfo}`}>
        <span className={`${courseInfoCard}__label`}>duration</span>
        <div className={`${courseInfoCard}__duration`}>
          <span>{course.durationMonths} months</span> -
          <span>{course.lessonsCount} lessons</span>
        </div>

        <p className={`${courseInfoCard}__text`}>
          Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.
        </p>
      </div>
      <div className={`${courseInfoCard}__wrap ${priceCourseInfo}`}>
        <span className={`${courseInfoCard}__label`}>price</span>
        <div className={`${courseInfoCard}__price`}>
          <span>${course.price} per month</span>
        </div>

        <p className={`${courseInfoCard}__text`}>
          Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.
        </p>
      </div>

      <ButtonBasic className={`${courseInfoCard}__btn`}>
        Join the course
      </ButtonBasic>
    </article>
  );
}

export default CourseInfoCard;