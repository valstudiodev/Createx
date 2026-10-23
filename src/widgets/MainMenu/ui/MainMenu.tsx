import { routes } from '@/app/routes/routes';
import '../styles/mainMenu.scss';
import { NavLink } from 'react-router';
import { MainMenuProps } from '../model/mainMenuTypes';
import { Logo } from '@/shared/ui/logoCreatex';
import { ButtonBasic } from '@/shared/ui/Button';
import AuthHeader from '@/widgets/Header/ui/AuthHeader';
import MobileMenu from '@/shared/ui/MobileMenu/ui/MobileMenu';
import { useEffect, useState } from 'react';
import useMediaQuery from '@/shared/lib/adaptive/useMediaQuery';

function MainMenu({
  className = ''
}: MainMenuProps): React.JSX.Element {
  const classMainMenu = 'main-menu'

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const isMobile = useMediaQuery('(max-width:530px)')

  useEffect(() => {
    document.documentElement.dataset.menuOpen = String(isMenuOpen)

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      delete document.documentElement.dataset.menuOpen
      document.body.style.overflow = ''
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return (): void => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, []);

  const toggleMenu = (): void => {
    setIsMenuOpen(prev => !prev)
  }

  const closeMenu = (): void => {
    setIsMenuOpen(false)
  }

  const menuItems = routes[0].children.filter(
    (route) => route?.meta?.isInMenu
  ) ?? []

  return (
    <nav
      className={`${classMainMenu} ${className}`}
      aria-label="Main navigation"
    >
      <Logo />
      <ul className={`${classMainMenu}__list`}>
        {menuItems.map((route) => {
          const path = route.index ? '/' : route.path

          if (!path || !route.meta?.title) return null

          return (
            <li
              key={route.id}
              className={`${classMainMenu}__item`}
            >
              <NavLink
                to={path ?? ''}
                className={({ isActive }) => `${classMainMenu}__link ${isActive ? 'is-active' : ''}`}
                end={Boolean(route.index)}
                onClick={closeMenu}
              >
                {route?.meta?.title}
              </NavLink>
            </li>

          )
        })}
        {isMobile && (
          <li className={`${classMainMenu}__item`}>
            <AuthHeader />
          </li>
        )}
      </ul>
      <div className={`${classMainMenu}__actions`}>
        <ButtonBasic
          type='button'
          size='large'
          className={`${classMainMenu}__btn`}
        >
          Get consultation
        </ButtonBasic>
        {!isMobile && (
          <AuthHeader />
        )}
      </div>

      <MobileMenu
        isOpen={isMenuOpen}
        onToggle={toggleMenu}
        className={`${className}__btn-menu`}
        color='var(--color-garay-900)'
      />
    </nav>
  );
}

export default MainMenu;