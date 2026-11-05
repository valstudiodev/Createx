import { contactAddress } from '@/shared/constatnts/constants';
import { MapProps } from '../model/contactInfo.types';
import '../styles/contactLocation.scss';

function ContactLocation({
  title,
  className = ''
}: MapProps): React.JSX.Element {
  const contactLocation = 'contact-location'

  const locationSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    contactAddress.value,
  )}&output=embed`;

  return (
    <section className={`${contactLocation} ${className}`}>
      <iframe
        className={`${contactLocation}__iframe`}
        src={locationSrc}
        title={title}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      >
      </iframe>
    </section>

  );
}

export default ContactLocation;