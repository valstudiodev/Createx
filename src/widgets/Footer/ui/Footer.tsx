import Container from '@/shared/primitives/Container/Container';
import '../model/_footerStyles.scss';

function Footer(): React.JSX.Element {
  const classFooter = 'footer'
  return (
    <footer className={classFooter}>
      <Container className={`${classFooter}__container`}>
        <p className={`${classFooter}__text`}>Footer</p>
      </Container>
    </footer>
  );
}

export default Footer;