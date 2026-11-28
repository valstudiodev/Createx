import { Container, Section } from '@/shared/primitives';
import './heroSectionDetails.scss';
import { Title } from '@/shared/ui';
import { TitleVariant } from '@/shared/ui/Title/Title';

interface HeroSectionDetailsProps {
  title: string;
  variant?: TitleVariant;
  label: string;
  className?: string;
}

function HeroSectionDetails({
  title,
  label,
  variant = 'centered',
  className = ''
}: HeroSectionDetailsProps): React.JSX.Element {
  const heroSectionDetails = 'hero-section-details'

  return (
    <Section className={`${heroSectionDetails} ${className}`}>
      <div className={`${heroSectionDetails}__wrapper`}>
        <Container className={`${heroSectionDetails}__container`}>
          <Title
            label={label}
            className={`${heroSectionDetails}__title`}
            variant={variant}
          >
            {title}
          </Title>
        </Container>
      </div>
    </Section>
  );
}

export default HeroSectionDetails;