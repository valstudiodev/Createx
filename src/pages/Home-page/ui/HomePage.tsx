import Section from '@/shared/primitives/Section/Section';
import '../styles/homePage.scss';
import Container from '@/shared/primitives/Container/Container';

function HomePage(): React.JSX.Element {
  const homePage = 'home-page'

  return (
    <Section className={homePage}>
      <Container className={`${homePage}__container`}>
        <h1>Home page</h1>
        <span className='icon--icon-minus'></span>
      </Container>
    </Section>
  );
}

export default HomePage;