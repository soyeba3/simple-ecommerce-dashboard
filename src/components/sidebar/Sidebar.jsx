import { useEffect, useState } from "react";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { sidebarItems } from "../../data";
import Button from "../buttons/Button";
import SidebarTabItem from "./SidebarTabItem";
import logo from "/images/logo.png";

function Sidebar({ children }) {
  const [route, setRoute] = useState();
  const { pathname } = useLocation();
  const routeName = location.pathname.substring(1);

  useEffect(() => {
    if (pathname === "/") {
      setRoute("products");
    } else {
      setRoute(routeName);
    }
  }, [routeName]);

  return (
    <div className="flex min-h-screen font-Inter">
      <div className="fixed flex flex-col justify-between py-5 bg-white w-72">
        <div className="flex flex-col gap-8">
          <Link to="/">
            <div className="flex items-center justify-center gap-2">
              <img className="w-6 h-6" src={logo} alt="logo" />
              <h2 className="text-2xl text-primary-600 font-Audiowide">
                Tajdid Store
              </h2>
            </div>
          </Link>
          <div className="flex flex-col gap-4">
            {sidebarItems.map((item) => (
              <SidebarTabItem key={item.id} item={item} route={route} />
            ))}
          </div>
        </div>
        <div className="relative flex justify-center px-3 mt-8">
          <span className="absolute z-10 p-2 bg-white rounded-full shadow-2xl -top-7 shadow-gray-700">
            <BsFillQuestionCircleFill className="w-8 h-8 text-primary-600" />
          </span>
          <div className="flex flex-col gap-4 px-6 py-3 pt-10 rounded-md bg-primary-50">
            <h2 className="text-lg font-semibold text-center">Help Center</h2>
            <p className="text-xs font-normal text-gray-500">
              Getting trouble on Simple book? Reach out and solve your problem
            </p>
            <Button size="large">Consult Now</Button>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-50 pl-72">{children}</div>
    </div>
  );
}

export default Sidebar;
