import AddIcon from "../../assets/icons/AddIcon";

export function DashboardHeader() {
  return (
    <header className="fixed top-0 left-64 w-[calc(100%-16rem)] h-16 bg-transparent border-b border-gray-300 flex items-center px-6 shadow-sm">
      <div className="flex items-center gap-4 ml-auto">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-black rounded-full hover:bg-gray-100">
          Add new
          <AddIcon className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
