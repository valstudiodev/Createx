import { CourseFullDetails } from '../../model/course.types';
import './courseContent.scss';

interface CourseContentProps {
  course: CourseFullDetails;
  className?: string;
}

function CourseContent({
  course,
  className = '',
}: CourseContentProps): React.JSX.Element {
  const courseContent = 'course-content';

  const { about, learningOutcomes } = course.details ?? {};

  const hasAbout = Boolean(about?.trim());

  return (
    <>
      {(hasAbout || (learningOutcomes?.length ?? 0) > 0) && (
        <div className={[courseContent, className].filter(Boolean).join(' ')}>
          {hasAbout && (
            <div className={`${courseContent}__content`}>
              <h2 className={`${courseContent}__title`}>
                About the course
              </h2>

              <p className={`${courseContent}__description`}>
                {about}
              </p>
            </div>
          )}

          {learningOutcomes && learningOutcomes.length > 0 && (
            <div className={`${courseContent}__items`}>
              <h3 className={`${courseContent}__subtitle`}>
                You will learn:
              </h3>

              <ul className={`${courseContent}__list`}>
                {learningOutcomes.map((item, index) => (
                  <li
                    key={`${item}-${index}`}
                    className={`${courseContent}__item`}
                  >
                    <p className={`${courseContent}__text`}>
                      <span
                        aria-hidden="true"
                        className={`${courseContent}__icon ${courseContent}__icon--icon-circle-check-big`}
                      />
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default CourseContent;