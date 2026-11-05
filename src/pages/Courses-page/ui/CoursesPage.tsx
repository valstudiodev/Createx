import { Container, Section } from '@/shared/primitives';
import '../styles/coursesPage.scss';
// import CourseList from '@/widgets/Course/CourseList/CourseList';
import CourseGridSquare from '@/entities/course/ui/CourseGridSquare/CourseGridSquare';
// import CourseGridRectangle from '@/entities/course/ui/CourseGridRectangle/CourseGridRectangle';

function CoursesPage(): React.JSX.Element {
  const coursesPage = 'courses-page'

  return (
    <Section className={coursesPage}>
      <Container className={`${coursesPage}__container`}>
        {/* <CourseList /> */}
        <CourseGridSquare />
        {/* <CourseGridRectangle /> */}
      </Container>
    </Section>
  );
}

export default CoursesPage;