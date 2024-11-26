import CustomerIcon from "../assets/icons/CustomerIcon";
import HomeIcon from "../assets/icons/HomeIcon";
import ProjectIcon from "../assets/icons/ProjectsIcon";
import SalesIcon from "../assets/icons/SalesIcon";

export function Sidebar() {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-white text-black flex flex-col">
        <div className="p-4 text-2xl font-bold">
          <img src="/logo.png" alt="Logo" className="h-12 w-auto mx-auto" />
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="block px-4 py-2 rounded hover:bg-blue-700 hover:text-white hover:rounded-lg flex items-center"
              >
                <HomeIcon className="mr-2 hover:fill-white" />
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 rounded hover:bg-blue-700 hover:text-white flex items-center"
              >
                <SalesIcon className="mr-2" />
                Sales
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 rounded hover:bg-blue-700 hover:text-white flex items-center"
              >
                <ProjectIcon className="mr-2" />
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 rounded hover:bg-blue-700 hover:text-white flex items-center"
              >
                <CustomerIcon className="mr-2" />
                Customers
              </a>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-light-gray-700">
          <button className="w-full px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded">
            Logout button
          </button>
        </div>
      </aside>
    </div>
  );
}
