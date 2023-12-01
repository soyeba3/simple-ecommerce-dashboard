import { BsFillQuestionCircleFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { sidebarItems } from "../data";
import Button from "./buttons/Button";
import logo from "/images/logo.png";

function Sidebar({ children }) {
  const { pathname } = useLocation();
  const pathArray = location.pathname.split("");
  const routeName = pathname.slice(1, pathArray.length);

  return (
    <div className="flex min-h-screen font-Inter">
      <div className="flex flex-col justify-between w-1/5 py-8 bg-white">
        <div className="flex flex-col gap-8">
          <Link to="/">
            <div className="flex justify-center items-center gap-2">
              <img className="w-6 h-6" src={logo} alt="logo" />
              <h2 className="text-primary-600 text-2xl font-Audiowide">
                Tajdid Store
              </h2>
            </div>
          </Link>
          <div className="flex flex-col gap-4">
            {sidebarItems.map((item) => (
              <Link
                to={item.href}
                key={item.id}
                className={`flex justify-between items-center px-8 py-2 ${
                  routeName === item.name.toLocaleLowerCase()
                    ? "bg-primary-50 border-l-4 border-primary-600"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="h-4 w-4 text-gray-500">
                    {<item.leftIcon />}
                  </div>
                  <div>{item.name}</div>
                </div>
                {item.rightIcon ? (
                  <div className="h-4 w-4 text-gray-500">
                    {<item.rightIcon />}
                  </div>
                ) : (
                  ""
                )}
              </Link>
            ))}
          </div>
        </div>
        <div className="px-3 relative flex justify-center mt-10">
          <span className="absolute -top-7 z-10 rounded-full p-2 bg-white shadow-2xl shadow-gray-700">
            <BsFillQuestionCircleFill className="h-8 w-8  text-primary-600" />
          </span>
          <div className="flex flex-col gap-4 px-6 py-3 pt-10 bg-primary-50 rounded-md">
            <h2 className="text-lg text-center font-semibold">Help Center</h2>
            <p className="text-gray-500 text-xs font-normal">
              Getting trouble on Simple book? Reach out and solve your problem
            </p>
            <Button size="large">Consult Now</Button>
          </div>
        </div>
      </div>
      <div className="w-4/5 bg-gray-100">{children}</div>
    </div>
  );
}

export default Sidebar;
