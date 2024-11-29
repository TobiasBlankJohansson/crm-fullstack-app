import { UserButton, useUser } from "@clerk/clerk-react";
import { menuItems } from "../../data/SidebarItems";

export function Sidebar() {
  const { user } = useUser();

  const sidebarOptions = menuItems.map((item, index) => (
    <li key={index}>
      <a
        href={item.href}
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
          <div className="ml-4 flex items-center">
            <UserButton />
            <p className="ml-2">{user?.fullName}</p>
          </div>
        </div>
      </aside>
    </div>
  );
}
