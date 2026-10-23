import { Container, Section } from '@/shared/primitives';
import '../styles/aboutPage.scss';

function AboutPage(): React.JSX.Element {
  const aboutPage = 'about-page'

  return (
    <Section className={aboutPage}>
      <Container className={`${aboutPage}__container`}>
        <h1>About page</h1>
      </Container>
    </Section>
  );
}

export default AboutPage;