import { Teacher } from '../../model/teacher.types';
import './teacherDetails.scss';

interface TeacherDetailsProps {
  teacher: Teacher;
  className?: string;
}

function TeacherDetails({
  teacher,
  className = ''
}: TeacherDetailsProps) {
  const teacherDetails = 'teacher-details'

  return (
    <article className={`${teacherDetails} ${className}`}>
      {teacher.image && (
        <div className={`${teacherDetails}__image`}>
          <img
            className={`${teacherDetails}__image-content`}
            src={teacher.image}
            alt={teacher.name}
          />
        </div>
      )}
      <div className={`${teacherDetails}__body`}>
        {teacher.position && (
          <span className={`${teacherDetails}__position`}>
            {teacher.position}
          </span>
        )}
        {teacher.name && (
          <h3 className={`${teacherDetails}__name`}>
            {teacher.name}
          </h3>
        )}
        {teacher.specialty && (
          <p className={`${teacherDetails}__specialty`}>
            {teacher.specialty}
          </p>
        )}

        <div className={`${teacherDetails}__info`}>
          {teacher.rating != null && (
            <div className={`${teacherDetails}__rating`}>
              <span
                aria-hidden='true'
                className={`${teacherDetails}__icon ${teacherDetails}__icon--icon-star`}>
              </span>
              <span className={`${teacherDetails}__stat-value`}>
                {teacher.rating}
              </span>
              <span className={`${teacherDetails}__stat-label`}>rate</span>
            </div>
          )}
          {teacher.coursesCount != null && (
            <div className={`${teacherDetails}__courses`}>
              <span
                aria-hidden='true'
                className={`${teacherDetails}__icon ${teacherDetails}__icon--icon-circle-play`}>
              </span>
              <span className={`${teacherDetails}__stat-value`}>{teacher.coursesCount}</span>
              <span className={`${teacherDetails}__stat-label`}>courses</span>
            </div>
          )}
          {teacher.studentsCount != null && (
            <div className={`${teacherDetails}__students`}>
              <span
                aria-hidden='true'
                className={`${teacherDetails}__icon ${teacherDetails}__icon--icon-user`}>
              </span>
              <span className={`${teacherDetails}__stat-value`}>
                {teacher.studentsCount}
              </span>
              <span className={`${teacherDetails}__stat-label`}>students</span>
            </div>
          )}
        </div>

        {teacher.description && (
          <p className={`${teacherDetails}__description`}>
            {teacher.description}
          </p>
        )}

        {teacher.socialMedia && teacher.socialMedia.length > 0 && (
          <div className={`${teacherDetails}__social-media`}>
            <ul className={`${teacherDetails}__list`}>
              {teacher.socialMedia?.map((link) => (
                <li
                  key={link.platform}
                  className={`${teacherDetails}__item`}
                >
                  <a
                    className={`${teacherDetails}__social-link`}
                    aria-label={link.label}
                    target='_blank'
                    rel='noopener noreferrer'
                    href={link.url}>
                    <span
                      aria-hidden='true'
                      className={`${teacherDetails}__social-icon ${link.iconClass}`}></span>
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

export default TeacherDetails;