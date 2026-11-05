import { Container, Section } from '@/shared/primitives';
import '../styles/contactsPage.scss';
import ContactFormWrap from '@/widgets/Contacts/ContactFormWrap/ContactFormWrap';
import ContactGetInTouch from '@/widgets/Contacts/ContactGetInTouch/ContactGetInTouct';

function ContactsPage(): React.JSX.Element {
  const contactsPage = 'contacts-page'
  return (
    <Section className={contactsPage}>
      <Container className={`${contactsPage}__container`}>
        <ContactGetInTouch />
        <ContactFormWrap />
      </Container>
    </Section>
  );
}

export default ContactsPage;