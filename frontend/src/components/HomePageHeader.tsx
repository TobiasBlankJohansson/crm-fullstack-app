import { SignInButton } from "@clerk/clerk-react";

export function HomePageHeader() {
  return (
    <header className="flex w-screen shadow-lg justify-between items-center p-4">
      <div>
        <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
      </div>
      <nav className="flex space-x-4">
        <button className="p-4 py-1 hover:text-blue-700 hover:font-bold inline-block">Home</button>
        <button className="p-4 py-1 hover:text-blue-700 hover:font-bold inline-block">About</button>
        <button className="p-4 py-1 hover:text-blue-700 hover:font-bold inline-block">
          Pricing
        </button>
        <button className="p-4 py-1 hover:text-blue-700 hover:font-bold inline-block">
          Contact
        </button>
        <div className="p-4 py-1 bg-blue-700 text-white rounded-lg hover:bg-transparent hover:border hover:border-blue-700 hover:text-blue-700 hover:font-bold transition-all duration-300">
          <SignInButton />
        </div>
      </nav>
    </header>
  );
}
