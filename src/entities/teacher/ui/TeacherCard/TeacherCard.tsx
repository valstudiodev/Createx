import { Teacher } from '../../model/teacher.types';
import './teacherCard.scss';

interface TeacherCardProps {
  teacher: Teacher;
  className?: string;
}

function TeacherCard({
  teacher,
  className = ''
}: TeacherCardProps): React.JSX.Element {
  const teacherCard = 'teacher-card'

  return (
    <article className={`${teacherCard} ${className}`}>
      <div className={`${teacherCard}__image`}>
        <img src={teacher.image} alt="" />
      </div>
      <div className={`${teacherCard}__content`}>
        <h3 className={`${teacherCard}__title`}>
          {teacher.name}
        </h3>
        <span className={`${teacherCard}__specialty`}>
          {teacher.specialty}
        </span>
      </div>
    </article>
  );
}

export default TeacherCard;