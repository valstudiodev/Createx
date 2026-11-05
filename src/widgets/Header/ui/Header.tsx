import Container from '@/shared/primitives/Container/Container';
import '../styles/header.scss';
import MainMenu from '@/widgets/MainMenu/ui/MainMenu';
import { useEffect, useState } from 'react';

function Header(): React.JSX.Element {
  const header = 'header'

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScrolled = (): void => {
      setIsScrolled(window.scrollY > 0)
    }

    handleScrolled()

    window.addEventListener('scroll', handleScrolled, {
      passive: true
    })

    return () => {
      window.removeEventListener('scroll', handleScrolled)
    }
  }, []);

  const headerClassName = [
    header,
    isScrolled && 'header--scrolled'
  ].filter(Boolean).join(' ')

  return (
    <header className={headerClassName}>
      <Container className={`${header}__container`}>
        <MainMenu className={`${header}__menu`} />
      </Container>
    </header>
  );
}

export default Header;