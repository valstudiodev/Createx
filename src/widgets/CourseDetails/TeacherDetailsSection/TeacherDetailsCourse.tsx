import { Container, Section } from '@/shared/primitives';
import './teacherDetailsSection.scss';
import TeacherDetails from '@/entities/teacher/ui/TeacherDetails/TeacherDetails';
import { teachers } from '@/entities/teacher/data/teacher.data';
import { WarningMessage } from '@/shared/ui/Messages';

interface TeacherDetailsSectionProps {
  teacherId: string;
  className?: string;
}

function TeacherDetailsCourse({
  teacherId,
  className = ''
}: TeacherDetailsSectionProps): React.JSX.Element {
  const teacherDetailsSection = 'teacher-details-section'

  const teacher = teachers.find(
    (item) => item.id === teacherId
  )

  if (!teacher) {
    return (
      <WarningMessage message='Teacher not found.' />
    )
  }

  return (
    <Section className={`${teacherDetailsSection} ${className}`}>
      <Container className={`${teacherDetailsSection}__container`}>
        <TeacherDetails teacher={teacher} />
      </Container>
    </Section>
  );
}

export default TeacherDetailsCourse;