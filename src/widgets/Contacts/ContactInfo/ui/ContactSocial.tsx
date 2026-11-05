import { Link } from 'react-router';
import { contactInfoData } from '../config/contactInfoData';
import '../styles/contactSocial.scss';
import { useTranslation } from 'react-i18next';

interface ContactSocialProps {
  className?: string
}

function ContactSocial({
  className = ''
}: ContactSocialProps): React.JSX.Element {
  const contactSocial = 'contact-social'

  const { t } = useTranslation()

  return (
    <div className={`${contactSocial} ${className}`}>
      <h4 className={`${contactSocial}__title`}>
        {t('labels.followUs')}
      </h4>
      <ul className={`${contactSocial}__list`}>
        {contactInfoData.socials.map((item) => (
          <li
            key={item.id}
            className={`${contactSocial}__item`}
          >
            <Link
              to={item.href}
              className={`${contactSocial}__link ${contactSocial}__link${item.icon}`}
              aria-label={item.label}
            >
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactSocial;