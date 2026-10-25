import { Container, Section } from '@/shared/primitives';
import '../styles/coursesPage.scss';
import CourseListCard from '@/widgets/Course/CourseList/CourseLIstCard';

function CoursesPage(): React.JSX.Element {
  const coursesPage = 'courses-page'

  return (
    <Section className={coursesPage}>
      <Container className={`${coursesPage}__container`}>
        <h1>Courses page</h1>

        <CourseListCard />
      </Container>
    </Section>
  );
}

export default CoursesPage;