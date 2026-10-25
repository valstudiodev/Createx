import { CourseDetailsInterface } from '../../model/course.types';
import './courseDetails.scss';

interface CourseDetailsProps {
  course: CourseDetailsInterface
  className?: string;
}

function CourseDetails({
  course,
  className = ''
}: CourseDetailsProps): React.JSX.Element {
  const courseDetails = 'course-details'

  return (
    <article className={`${courseDetails} ${className}`}>
      {course.image && (
        <div className={`${courseDetails}__image`}>
          <img
            className={`${courseDetails}__image-content`}
            src={course.image}
            alt={course.teacherName}
          />
        </div>
      )}
      <div className={`${courseDetails}__body`}>
        {course.position && (
          <span className={`${courseDetails}__position`}>
            {course.position}
          </span>
        )}
        {course.teacherName && (
          <h3 className={`${courseDetails}__name`}>
            {course.teacherName}
          </h3>
        )}
        {course.specialty && (
          <p className={`${courseDetails}__specialty`}>
            {course.specialty}
          </p>
        )}

        <div className={`${courseDetails}__info`}>
          {course.rating != null && (
            <div className={`${courseDetails}__rating`}>
              <span
                aria-hidden='true'
                className={`${courseDetails}__icon ${courseDetails}__icon--icon-star`}>
              </span>
              <span className={`${courseDetails}__stat-value`}>
                {course.rating}
              </span>
              <span className={`${courseDetails}__stat-label`}>rate</span>
            </div>
          )}
          {course.coursesCount != null && (
            <div className={`${courseDetails}__courses`}>
              <span
                aria-hidden='true'
                className={`${courseDetails}__icon ${courseDetails}__icon--icon-circle-play`}>
              </span>
              <span className={`${courseDetails}__stat-value`}>{course.coursesCount}</span>
              <span className={`${courseDetails}__stat-label`}>courses</span>
            </div>
          )}
          {course.studentsCount != null && (
            <div className={`${courseDetails}__students`}>
              <span
                aria-hidden='true'
                className={`${courseDetails}__icon ${courseDetails}__icon--icon-user`}>
              </span>
              <span className={`${courseDetails}__stat-value`}>
                {course.studentsCount}
              </span>
              <span className={`${courseDetails}__stat-label`}>students</span>
            </div>
          )}
        </div>

        {course.description && (
          <p className={`${courseDetails}__description`}>
            {course.description}
          </p>
        )}

        {course.socialMedia && course.socialMedia.length > 0 && (
          <div className={`${courseDetails}__social-media`}>
            <ul className={`${courseDetails}__list`}>
              {course.socialMedia?.map((link) => (
                <li
                  key={link.platform}
                  className={`${courseDetails}__item`}
                >
                  <a
                    className={`${courseDetails}__social-link`}
                    aria-label={link.label}
                    target='_blank'
                    rel='noopener noreferrer'
                    href={link.url}>
                    <span
                      aria-hidden='true'
                      className={`${courseDetails}__social-icon ${link.iconClass}`}></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </article>
  );
}

export default CourseDetails;