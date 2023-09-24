import { useEffect, useState } from "react";
import {
  UserIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";
import { NavLink } from "react-router-dom";
import ResponsiveMenu from "../ResponsiveMenu/ResponsiveMenu";
const Header = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const { data } = await axios.get(" http://localhost:3001/menu");
      setMenu(data);
    };
    fetchMenu();
  }, []);

  return (
    <div className="flex items-center justify-between shadow-md pb-4">
      <div className="font-bold text-xl md:text-3xl">
        soge<span className="text-blue-700">King</span>
      </div>
      <div>
        <ResponsiveMenu />
      </div>
      <div className="hidden sm:flex">
        <ul className="flex items-center justify-center gap-8 font-semibold ">
          {menu?.map((item) => (
            <li
              key={item.id}
              className="hover:text-blue-700 hover:scale-105 duration-300"
            >
              <NavLink to={item.path}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center gap-2">
        <button className="btn btn-sm md:btn-md capitalize btn-outline">
          Login
          <ArrowLeftOnRectangleIcon className="h-5 w-5" />
        </button>
        <button className="btn btn-sm md:btn-md btn-primary text-white capitalize">
          <UserIcon className="h-5 w-5" />
          Register
        </button>
      </div>
    </div>
  );
};
export default Header;
