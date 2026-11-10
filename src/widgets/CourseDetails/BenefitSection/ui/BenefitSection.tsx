import { Container, Section } from '@/shared/primitives';
import './benefitSection.scss';
import { useTranslation } from 'react-i18next';
import { Title } from '@/shared/ui';
import { courseBenefit } from '../data/benefitSection.data';

interface BenefitSectionProps {
  className?: string;
}

function BenefitSection({
  className = ''
}: BenefitSectionProps): React.JSX.Element {
  const benefitSection = 'benefit-section'

  const { t } = useTranslation()

  return (
    <Section className={`${benefitSection} ${className}`}>
      <Container className={`${benefitSection}__container`}>
        <div className={`${benefitSection}__headline`}>
          <Title
            label={t('labels.forWhom')}
            className={`${benefitSection}__title`}
          >
            {t('titles.whoWillBenefit')}
          </Title>
        </div>
        <ul className={`${benefitSection}__list`}>
          {courseBenefit.map(({ id, icon, translationKey }) => (
            <li
              key={id}
              className={`${benefitSection}__item`}
            >
              <span
                aria-hidden='true'
                className={`${benefitSection}__icon ${benefitSection}__icon${icon}`}></span>
              <p className={`${benefitSection}__text`}>
                {t(`courseBenefits.${translationKey}.description`)}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export default BenefitSection;