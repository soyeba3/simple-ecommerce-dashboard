import { BiBarChart } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa6";
import { FiDollarSign, FiUser } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { LuLayers } from "react-icons/lu";
import { MdOutlineLogout } from "react-icons/md";

export const sidebarItems = [
  {
    id: 1,
    name: "Products",
    leftIcon: LuLayers,
    rightIcon: "",
    href: "/products",
  },
  {
    id: 2,
    name: "Analytics",
    leftIcon: BiBarChart,
    rightIcon: FaChevronDown,
    href: "/analytics",
  },
  {
    id: 3,
    name: "Billing",
    leftIcon: FiDollarSign,
    rightIcon: FaChevronDown,
    href: "/billing",
  },
  {
    id: 4,
    name: "Company",
    leftIcon: GoHome,
    rightIcon: FaChevronDown,
    href: "/company",
  },
  {
    id: 5,
    name: "Admin",
    leftIcon: FiUser,
    rightIcon: FaChevronDown,
    href: "/admin",
  },
  {
    id: 6,
    name: "Logout",
    leftIcon: MdOutlineLogout,
    rightIcon: "",
  },
];
