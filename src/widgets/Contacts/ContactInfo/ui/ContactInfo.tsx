import { useTranslation } from 'react-i18next';
import '../styles/contactInfo.scss';
import ContactDetails from './ContactDetails';
import ContactSocial from './ContactSocial';
import Title from '@/shared/ui/Title/Title';

interface ContactInfoProps {
  className?: string;
}

function ContactInfo({
  className = ''
}: ContactInfoProps): React.JSX.Element {
  const contactInfo = 'contact-info'

  const { t } = useTranslation()

  return (
    <div className={`${contactInfo} ${className}`}>
      <Title
        label={t('labels.contactInfo')}
        className={`${contactInfo}__title`}
      >
        {t('titles.getInTouch')}
      </Title>
      <ContactDetails className={`${contactInfo}__details`} />
      <ContactSocial />
    </div>
  );
}

export default ContactInfo;