import { Container, Section } from '@/shared/primitives';
import '../styles/aboutPage.scss';
import AboutUsHeroSection from '@/widgets/AboutUs/AboutUsHeroSection/ui/AboutUsHeroSection';

function AboutPage(): React.JSX.Element {
  const aboutPage = 'about-page'

  return (
    <Section className={aboutPage}>
      <Container className={`${aboutPage}__container`}>
        <AboutUsHeroSection />
      </Container>
    </Section>
  );
}

export default AboutPage;