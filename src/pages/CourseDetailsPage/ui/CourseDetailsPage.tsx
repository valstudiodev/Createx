import { Container, Section } from '@/shared/primitives';
import '../styles/courseDetails.scss';

function CourseDetailsPage(): React.JSX.Element {
  const courseDetailsPage = 'course-details-page'
  return (
    <Section className={courseDetailsPage}>
      <Container className={`${courseDetailsPage}__container`}>
        <h1>Course details page</h1>
      </Container>
    </Section>
  );
}

export default CourseDetailsPage;