import { Container, Section } from '@/shared/primitives';
import '../styles/adminLayout.scss';

function AdminLayout(): React.JSX.Element {
  const adminLAyout = 'admin-layout'
  return (
    <Section className={adminLAyout}>
      <Container className={`${adminLAyout}__container`}>
        <h1>Admin Layout</h1>
      </Container>
    </Section>
  );
}

export default AdminLayout;