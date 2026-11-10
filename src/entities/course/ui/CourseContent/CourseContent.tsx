import { CourseFullDetails } from '../../model/course.types';
import './courseContent.scss';

interface CourseContentProps {
  course: CourseFullDetails;
  className?: string;
}

function CourseContent({
  course,
  className = ''
}: CourseContentProps): React.JSX.Element {
  const courseContent = 'course-content'

  return (
    <>
      {course.learningOutcomes && course.learningOutcomes.length > 0 && (
        <div className={`${courseContent} ${className}`}>
          <div className={`${courseContent}__content`}>
            <h2 className={`${courseContent}__title`}> About the course</h2>
            <p className={`${courseContent}__description`}>
              {course.about}
            </p>
          </div>
          <div className={`${courseContent}__items`}>
            <h3 className={`${courseContent}__subtitle`}>You will learn:</h3>
            <ul className={`${courseContent}__list`}>
              {course.learningOutcomes?.map((item, index) => (
                <li
                  key={index}
                  className={`${courseContent}__item`}
                >
                  <p className={`${courseContent}__text`}>
                    <span
                      aria-hidden='true'
                      className={`${courseContent}__icon ${courseContent}__icon--icon-circle-check-big`}></span>
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>

  );
}

export default CourseContent;