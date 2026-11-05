import { Container, Section } from "@/shared/primitives";

function AdminDashboard(): React.JSX.Element {
  const adminDashboard = 'admin-dashboard'

  return (
    <Section className={adminDashboard}>
      <Container className={`${adminDashboard}__container`}>
        <h1>Admin dashboard</h1>
      </Container>
    </Section>
  );
}

export default AdminDashboard;