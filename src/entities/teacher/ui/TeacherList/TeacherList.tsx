import { Teacher } from '../../model/teacher.types';
import TeacherCard from '../TeacherCard/TeacherCard';
import './teacherList.scss';

interface TeacherListProps {
  teachers: Teacher[];
  className?: string;
}

function TeacherList({
  teachers,
  className = ''
}: TeacherListProps): React.JSX.Element {
  const teacherList = 'teacher-list'

  return (
    <ul className={`${teacherList} ${className}`}>
      {teachers.map((teacher) => (
        <li
          key={teacher.id}
          className={`${teacherList}__item`}
        >
          <TeacherCard teacher={teacher} />
        </li>
      ))}
    </ul>
  );
}

export default TeacherList;