import { Link } from 'react-router';
import './logo-styles.scss';
import LogoCreatex from "@/shared/ui/logoCreatex/assets/logo.svg";
import { routeMap } from '@/app/routes/routeMap';

function Logo(): React.JSX.Element {
  const logo = 'logo'
  return (
    <Link
      to={routeMap.home.path}
      className={logo}
      aria-label="Createx — home"
    >
      <img
        className={`${logo}__img`}
        src={LogoCreatex} alt=""
        aria-hidden='true'
      />
    </Link>
  );
}

export default Logo;