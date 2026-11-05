import { Container, Section } from '@/shared/primitives';
import './aboutSection.scss';
import AboutSectionContent from './AboutSectionContent';
import aboutSectionImage from "../assets/about-section-img.jpg";

function AboutSection(): React.JSX.Element {
  const aboutSection = 'about-section'
  return (
    <Section className={aboutSection}>
      <Container className={`${aboutSection}__container`}>
        <div className={`${aboutSection}__image`}>
          <img
            aria-hidden='true'
            src={aboutSectionImage} alt="" />
        </div>
        <AboutSectionContent className={`${aboutSection}__content`} />
      </Container>
    </Section>
  );
}

export default AboutSection;