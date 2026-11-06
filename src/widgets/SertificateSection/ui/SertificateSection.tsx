import { Container, Section } from '@/shared/primitives';
import './sertificateSection.scss';
import Title from '@/shared/ui/Title/Title';
import { useTranslation } from 'react-i18next';
import InstitutesList from './InstitutesList';
import sertificate from "../assets/sertificate-img.jpg";

interface SertificateSectionProps {
  className?: string;
}

function SertificateSection({
  className = ''
}: SertificateSectionProps): React.JSX.Element {
  const sertificateSection = 'sertificate-section'

  const { t } = useTranslation()

  return (
    <Section className={`${sertificateSection} ${className}`}>
      <Container className={`${sertificateSection}__container`}>
        <div className={`${sertificateSection}__content`}>
          <Title
            label={t('labels.createxCertificate')}
            variant='left'
            className={`${sertificateSection}__title`}
          >
            {t('titles.expertiseConfirmed')}
          </Title>
          <p className={`${sertificateSection}__text`}>
            {t('text.accreditation')}
          </p>
          <InstitutesList />
        </div>
        <div className={`${sertificateSection}__image`}>
          <img src={sertificate} alt="" />
        </div>
      </Container>
    </Section>
  );
}

export default SertificateSection;