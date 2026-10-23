import { Container, Section } from '@/shared/primitives';
import '../styles/coursesPage.scss';
import { Link } from 'react-router';
import { routeMap } from '@/app/routes/routeMap';

function CoursesPage(): React.JSX.Element {
  const coursesPage = 'courses-page'
  const courseId = 12
  return (
    <Section className={coursesPage}>
      <Container className={`${coursesPage}__container`}>
        <h1>Courses page</h1>
        <Link
          to={routeMap.courseDetails.navigate(courseId)}
        >
          Go to Course details page
        </Link>
      </Container>
    </Section>
  );
}

export default CoursesPage;