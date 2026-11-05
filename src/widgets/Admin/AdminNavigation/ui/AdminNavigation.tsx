import { Link, NavLink } from "react-router";
import { linksNavigations } from "../model/adminNavigation-data";
import { routeMap } from "@/app/routes/routeMap";
import './adminNavigation.scss';

function AdminNavigation(): React.JSX.Element {
  const adminNavigation = 'admin-nav'

  return (
    <div
      aria-label="Admin navigation"
      className={adminNavigation}>
      <ul className={`${adminNavigation}__list`}>
        {linksNavigations.map((link) => (
          <li
            key={link.id}
            className={`${adminNavigation}__item`}>
            <NavLink
              to={`${link.path}`}
              className={({ isActive }) => `${adminNavigation}__link ${isActive ? 'is-active' : ''}`}
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className={`${adminNavigation}__actions`}>
        <Link
          className={`${adminNavigation}__link-back`}
          to={routeMap.admin.path}
        >
          Back
        </Link>
        <Link
          className={`${adminNavigation}__link-home`}
          to={routeMap.home.path}
        >
          Home
        </Link>
      </div>
    </div>
  );
}

export default AdminNavigation;