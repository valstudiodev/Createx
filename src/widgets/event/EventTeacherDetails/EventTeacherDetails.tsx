import { Container, Section } from '@/shared/primitives';
import './eventTeacherDetails.scss';
import TeacherDetails from '@/entities/teacher/ui/TeacherDetails/TeacherDetails';
import { teachers } from '@/entities/teacher/data/teacher.data';
import { WarningMessage } from '@/shared/ui/Messages';

interface EventTeacherDetailsProps {
  teacherId: string;
  className?: string;
}

function EventTeacherDetails({
  teacherId,
  className = ''
}: EventTeacherDetailsProps): React.JSX.Element {
  const eventTeacherDetails = 'event-teacher-details'

  const teacher = teachers.find(
    (item) => item.id === teacherId
  )

  if (!teacher) {
    return (
      <WarningMessage message='Teacher not found.' />
    )
  }

  return (
    <Section className={`${eventTeacherDetails} ${className}`}>
      <Container className={`${eventTeacherDetails}__container`}>
        <TeacherDetails teacher={teacher} />
      </Container>
    </Section>
  );
}

export default EventTeacherDetails;