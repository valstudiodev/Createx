import { useTranslation } from 'react-i18next';
import { FormSectionProps } from '../model/formSection.types';
import './formSection.scss';
import { formSectionConfig } from '../config/formSection.config';
import { SubmitForm } from '@/features';
import Title from '@/shared/ui/Title/Title';

function FormSection({
  type,
  className = ''
}: FormSectionProps): React.JSX.Element {
  const formSection = 'form-section'

  const stylesCombined = [
    formSection,
    className,
    `${formSection}--${type}`
  ].filter(Boolean).join(' ')

  const { t } = useTranslation()

  const { title, label, image } = formSectionConfig[type]

  return (
    <section className={stylesCombined}>
      <div className={`${formSection}__body`}>
        <div className={`${formSection}__header`}>
          <Title
            label={t(label)}
            variant='left'
            className={`${formSection}__title`}
          >
            {t(title)}
          </Title>
        </div>
        <SubmitForm type={type} />
      </div>
      <div className={`${formSection}__image`}>
        <img src={image} alt="" />
      </div>
    </section>
  );
}

export default FormSection;