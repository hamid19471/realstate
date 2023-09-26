import {
  HomeIcon,
  BuildingOfficeIcon,
  EnvelopeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const ResponsiveMenu = () => {
  return (
    <div className="sm:hidden w-full fixed bottom-0 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-end mb-4 justify-center mx-auto">
      <ul className="menu gap-4 menu-horizontal bg-base-200 rounded-box">
        <li>
          <NavLink to="/" className="tooltip" data-tip="Home">
            <HomeIcon className="h-5 w-5" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="tooltip" data-tip="About">
            <UsersIcon className="h-5 w-5" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/hotels" className="tooltip" data-tip="Hotels">
            <BuildingOfficeIcon className="h-5 w-5" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact-us" className="tooltip" data-tip="Contact">
            <EnvelopeIcon className="h-5 w-5" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default ResponsiveMenu;
