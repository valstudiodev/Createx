import EventCreateForm from "@/features/event/create-event/ui/EventCreateForm";
import { Container, Section } from "@/shared/primitives";
import AdminTitle from "@/widgets/Admin/AdminTitle/AdminTitle";

function AdminEvents() {
  return (
    <Section>
      <Container>
        <AdminTitle title="Add an event." />
        <EventCreateForm />
      </Container>
    </Section>
  );
}

export default AdminEvents;