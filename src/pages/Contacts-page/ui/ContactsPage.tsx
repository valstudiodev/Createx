import { Container, Section } from '@/shared/primitives';
import '../styles/contactsPage.scss';

function ContactsPage(): React.JSX.Element {
  const contactsPage = 'contacts-page'
  return (
    <Section className={contactsPage}>
      <Container className={`${contactsPage}__container`}>
        <h1>Contacts page</h1>
      </Container>
    </Section>
  );
}

export default ContactsPage;