import { useNavigate } from "react-router-dom";
import AddIcon from "../../assets/icons/AddIcon";

type DashboardHeaderProp = {
  path: string;
};

export function DashboardHeader({ path }: DashboardHeaderProp) {
  const navigate = useNavigate();

  return (
    <header className="h-16 border-b-2 border-gray-400 flex justify-end pr-10 shadow-sm">
      <div className="flex items-center gap-4 ml-auto">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-black rounded-full hover:bg-stone-100"
          onClick={() => navigate("/" + path + "/create")}
        >
          Add new
          <AddIcon className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
