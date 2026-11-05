import { Container, Section } from '@/shared/primitives';
import '../styles/adminLayout.scss';
import { Outlet } from 'react-router';
import AdminNavigation from '@/widgets/Admin/AdminNavigation/ui/AdminNavigation';

function AdminLayout(): React.JSX.Element {
  const adminLAyout = 'admin-layout'
  return (
    <Section className={adminLAyout}>
      <Container className={`${adminLAyout}__container`}>
        <AdminNavigation />
        <Outlet />
      </Container>
    </Section>
  );
}

export default AdminLayout;