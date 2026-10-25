import { Container, Section } from '@/shared/primitives';
import '../styles/courseDetails.scss';
import CourseDetails from '@/entities/course/ui/CourseDetails/CourseDetails';
import { coursesDetails } from '@/entities/course/data/course.data';
import { useParams } from 'react-router';

function CourseDetailsPage(): React.JSX.Element {
  const courseDetailsPage = 'course-details-page'

  const { id } = useParams<{ id: string }>()
  if (!id) return (
    <p>Error!!!</p>
  )

  const course = coursesDetails.find(
    (course) => course.id === id
  )

  if (!course) {
    return (
      <p>Course not found.</p>
    )
  }

  return (
    <Section className={courseDetailsPage}>
      <Container className={`${courseDetailsPage}__container`}>
        <CourseDetails course={course} />
      </Container>
    </Section>
  );
}

export default CourseDetailsPage;