import { Section } from "@/shared/primitives";
import ContactInfo from "../ContactInfo/ui/ContactInfo";
import ContactLocation from "../ContactInfo/ui/ContactLocation";
import './styles.scss';

function ContactGetInTouch(): React.JSX.Element {
  const contactGetInTouch = 'contact-get-in-touch'
  return (
    <Section className={contactGetInTouch}>
      <div className={`${contactGetInTouch}__inner`}>
        <ContactInfo className={`${contactGetInTouch}__info`} />
        <ContactLocation
          className={`${contactGetInTouch}__map`}
          title="Createx office location on Google Maps" />
      </div>
    </Section>
  );
}

export default ContactGetInTouch;