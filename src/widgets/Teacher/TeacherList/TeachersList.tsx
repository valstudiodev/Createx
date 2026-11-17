import { Teacher } from '@/entities/teacher/model/teacher.types';
import './teachersList.scss';
import TeacherCard from '@/entities/teacher/ui/TeacherCard/TeacherCard';

interface TeachersListProps {
  teachers: Teacher[];
  className?: string;
}

function TeachersList({
  teachers,
  className = ''
}: TeachersListProps): React.JSX.Element {
  const teachersList = 'teachers-list'

  return (
    <ul className={`${teachersList} ${className}`}>
      {teachers.map((teacher) => (
        <li
          key={teacher.id}
          className={`${teachersList}__item`}
        >
          <TeacherCard teacher={teacher} />
        </li>
      ))}
    </ul>
  );
}

export default TeachersList;