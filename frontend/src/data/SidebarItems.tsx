import HomeIcon from "../assets/icons/HomeIcon";
import SalesIcon from "../assets/icons/SalesIcon";
import ProjectIcon from "../assets/icons/ProjectsIcon";
import CustomerIcon from "../assets/icons/CustomerIcon";

export const menuItems = [
  {
    name: "Dashboard",
    icon: <HomeIcon className="mr-2 hover:fill-white" />,
    to: "/",
  },
  {
    name: "Customers",
    icon: <CustomerIcon className="mr-2" />,
    to: "/customer",
  },
  { name: "Projects", icon: <ProjectIcon className="mr-2" />, to: "/projects" },
  { name: "Sales", icon: <SalesIcon className="mr-2" />, to: "/sales" },
];
