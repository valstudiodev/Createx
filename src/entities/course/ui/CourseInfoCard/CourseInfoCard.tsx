import { ButtonBasic } from '@/shared/ui/Button';
import { CourseFullDetails } from '../../model/course.types';
import './courseInfoCard.scss';
import formatDateByStyle from '@/shared/lib/formatDateByStyle/formatDateByStyle';

interface CourseInfoCardProps {
  course: CourseFullDetails;
  className?: string;
}

function CourseInfoCard({
  course,
  className = '',
}: CourseInfoCardProps): React.JSX.Element {
  const courseInfoCard = 'course-info-card';
  const dateCourseInfo = 'date-course-info';
  const durationCourseInfo = 'duration-course-info';
  const priceCourseInfo = 'price-course-info';

  const { startDate, endDate, durationMonths, lessonsCount } =
    course.details ?? {};

  const hasDates = Boolean(startDate && endDate);
  const hasDuration = durationMonths != null || lessonsCount != null;

  const formattedStartDate = startDate
    ? formatDateByStyle(startDate, 'short')
    : '';

  const formattedEndDate = endDate
    ? formatDateByStyle(endDate, 'short')
    : '';

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(course.price);

  return (
    <article
      className={[courseInfoCard, className].filter(Boolean).join(' ')}
    >
      {hasDates && (
        <div className={`${courseInfoCard}__wrap ${dateCourseInfo}`}>
          <span className={`${courseInfoCard}__label`}>Dates</span>

          <div className={`${courseInfoCard}__dates`}>
            <span>{formattedStartDate} - </span>
            <span>{formattedEndDate}</span>
          </div>

          <p className={`${courseInfoCard}__text`}>
            Metus turpis sit lorem lacus, in elit tellus lacus.
          </p>
        </div>
      )}

      {hasDuration && (
        <div className={`${courseInfoCard}__wrap ${durationCourseInfo}`}>
          <span className={`${courseInfoCard}__label`}>Duration</span>

          <div className={`${courseInfoCard}__duration`}>
            {durationMonths != null && (
              <span>{durationMonths} months</span>
            )}

            {durationMonths != null && lessonsCount != null && (
              <span> - </span>
            )}

            {lessonsCount != null && (
              <span>{lessonsCount} lessons</span>
            )}
          </div>

          <p className={`${courseInfoCard}__text`}>
            Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.
          </p>
        </div>
      )}

      <div className={`${courseInfoCard}__wrap ${priceCourseInfo}`}>
        <span className={`${courseInfoCard}__label`}>Price</span>

        <div className={`${courseInfoCard}__price`}>
          <span>{formattedPrice} per month</span>
        </div>

        <p className={`${courseInfoCard}__text`}>
          Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris
          quam ac elit tristique dis.
        </p>
      </div>

      <ButtonBasic className={`${courseInfoCard}__btn`}>
        Join the course
      </ButtonBasic>
    </article>
  );
}

export default CourseInfoCard;