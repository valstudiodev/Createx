import ContactCreateForm from '@/features/contact/ui/ContactCreateForm';
import './contactFormWrap.scss';
import Title from '@/shared/ui/Title/Title';
import contactImage from "@/assets/images/contact/contacts-imaage.png";
import { useTranslation } from 'react-i18next';

interface ContactFormWrapProps {
  className?: string;
}

function ContactFormWrap({
  className = ''
}: ContactFormWrapProps): React.JSX.Element {
  const contactFormWrap = 'contact-form-wrap'

  const { t } = useTranslation()

  return (
    <section className={`${contactFormWrap} ${className}`}>
      <div className={`${contactFormWrap}__image`}>
        <img
          aria-hidden='true'
          src={contactImage} alt="" />
      </div>
      <div className={`${contactFormWrap}__body`}>
        <Title
          label={t('labels.anyQuestions')}
          variant='left'
          className={`${contactFormWrap}__title`}
        >
          {t('titles.dropUsALine')}
        </Title>
        <ContactCreateForm />
      </div>
    </section>
  );
}

export default ContactFormWrap;