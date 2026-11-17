import { CourseFullDetails } from '@/entities/course/model/course.types';
import './courseDetails.scss';
import { teachers } from '@/entities/teacher/data/teacher.data';
import { WarningMessage } from '@/shared/ui/Messages';

interface CourseDetailsProps {
  course: CourseFullDetails
  className?: string;
}

function CourseDetails({
  course,
  className = ''
}: CourseDetailsProps): React.JSX.Element {
  const courseDetails = 'course-details'

  const teacher = teachers.find(
    (teacher) => teacher.id === course.teacherId
  )

  if (!teacher) {
    return (
      <WarningMessage message='Teacher not found.' />
    )
  }

  return (
    <article className={`${courseDetails} ${className}`}>
      {teacher.image && (
        <div className={`${courseDetails}__image`}>
          <img
            className={`${courseDetails}__image-content`}
            src={teacher.image}
            alt={teacher.name}
          />
        </div>
      )}
      <div className={`${courseDetails}__body`}>
        {teacher.position && (
          <span className={`${courseDetails}__position`}>
            {teacher.position}
          </span>
        )}
        {teacher.name && (
          <h3 className={`${courseDetails}__name`}>
            {teacher.name}
          </h3>
        )}
        {teacher.specialty && (
          <p className={`${courseDetails}__specialty`}>
            {teacher.specialty}
          </p>
        )}

        <div className={`${courseDetails}__info`}>
          {teacher.rating != null && (
            <div className={`${courseDetails}__rating`}>
              <span
                aria-hidden='true'
                className={`${courseDetails}__icon ${courseDetails}__icon--icon-star`}>
              </span>
              <span className={`${courseDetails}__stat-value`}>
                {teacher.rating}
              </span>
              <span className={`${courseDetails}__stat-label`}>rate</span>
            </div>
          )}
          {teacher.coursesCount != null && (
            <div className={`${courseDetails}__courses`}>
              <span
                aria-hidden='true'
                className={`${courseDetails}__icon ${courseDetails}__icon--icon-circle-play`}>
              </span>
              <span className={`${courseDetails}__stat-value`}>{teacher.coursesCount}</span>
              <span className={`${courseDetails}__stat-label`}>courses</span>
            </div>
          )}
          {teacher.studentsCount != null && (
            <div className={`${courseDetails}__students`}>
              <span
                aria-hidden='true'
                className={`${courseDetails}__icon ${courseDetails}__icon--icon-user`}>
              </span>
              <span className={`${courseDetails}__stat-value`}>
                {teacher.studentsCount}
              </span>
              <span className={`${courseDetails}__stat-label`}>students</span>
            </div>
          )}
        </div>

        {teacher.description && (
          <p className={`${courseDetails}__description`}>
            {teacher.description}
          </p>
        )}

        {teacher.socialMedia && teacher.socialMedia.length > 0 && (
          <div className={`${courseDetails}__social-media`}>
            <ul className={`${courseDetails}__list`}>
              {teacher.socialMedia?.map((link) => (
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