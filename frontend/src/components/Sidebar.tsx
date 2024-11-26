import { menuItems } from "../helpers/SidebarItems";

export function Sidebar() {
  const sidebarOptions = menuItems.map((item, index) => (
    <li key={index}>
      <a
        href="#"
        className="block px-4 py-2 rounded hover:bg-blue-700 hover:text-white flex items-center"
      >
        {item.icon}
        {item.name}
      </a>
    </li>
  ));

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-white text-black flex flex-col">
        <div className="p-4">
          <img src="/logo.png" alt="Logo" className="h-12 w-auto mx-auto" />
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">{sidebarOptions}</ul>
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
