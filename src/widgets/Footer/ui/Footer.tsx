import Container from '@/shared/primitives/Container/Container';
import '../styles/footer.scss';
import FooterBrand from './FooterBrand';
import FooterContacts from './FooterContacts';
import FooterMenu from './FooterMenu';
import FooterNewsletter from './FooterNewsletter';

function Footer(): React.JSX.Element {
  const classFooter = 'footer'
  return (
    <footer className={classFooter}>
      <Container className={`${classFooter}__container`}>
        <FooterBrand />
        <FooterMenu />
        <FooterContacts />
        <FooterNewsletter />
      </Container>
    </footer>
  );
}

export default Footer;