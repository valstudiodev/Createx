import CourseCreateForm from "@/features/course/create-course/ui/CourseCreateForm";
import { Container, Section } from "@/shared/primitives";
import AdminTitle from "@/widgets/Admin/AdminTitle/AdminTitle";

function AdminCoursesPage(): React.JSX.Element {
  const adminCoursesPage = 'admin-courses-page'

  return (
    <Section className={adminCoursesPage}>
      <Container className={`${adminCoursesPage}__container`}>
        <AdminTitle title="Add a course." />
        <CourseCreateForm />
      </Container>
    </Section>
  );
}

export default AdminCoursesPage;