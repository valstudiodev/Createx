import Icon from '@/shared/ui/Icon/Icon';
import { contactInfoData } from '../config/contactInfoData';
import '../styles/contactDetails.scss'
import { useTranslation } from 'react-i18next';

interface ContactDetailsProps {
  className?: string;
}

function ContactDetails({
  className = ''
}: ContactDetailsProps): React.JSX.Element {
  const contactDetails = 'contact-details'

  const { t } = useTranslation()

  return (
    <div className={`${contactDetails} ${className}`}>
      <ul className={`${contactDetails}__list`}>
        {contactInfoData.details.map((contact) => (
          <li
            key={contact.id}
            className={`${contactDetails}__item`}
          >
            <Icon name={contact.icon} />
            <div className={`${contactDetails}__body`}>
              <span className={`${contactDetails}__label`}>{t(contact.label)}</span>
              {contact.href ? (
                <a
                  aria-label={contact.value}
                  className={`${contactDetails}__link`}
                  href={contact.href}>{contact.value}</a>
              ) : (
                <p className={`${contactDetails}__value`}>{contact.value}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactDetails;