import { PostCreateForm } from "@/features/post";
import { Container, Section } from "@/shared/primitives";
import AdminTitle from "@/widgets/Admin/AdminTitle/AdminTitle";

function AdminPosts(): React.JSX.Element {
  const adminPosts = 'admin-posts'
  return (
    <Section className={adminPosts}>
      <Container className={`${adminPosts}__container`}>
        <AdminTitle title="Add a post." />
        <PostCreateForm />
      </Container>
    </Section>
  );
}

export default AdminPosts;