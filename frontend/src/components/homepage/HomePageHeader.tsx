import { SignInButton } from "@clerk/clerk-react";

export function HomePageHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white flex w-screen shadow-lg justify-between items-center p-4">
      <div>
        <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
      </div>
      <nav className="flex space-x-4">
        <button className="p-4 py-1 hover:text-blue hover:font-bold inline-block">
          <a href="#home">Home</a>
        </button>
        <button className="p-4 py-1 hover:text-blue hover:font-bold inline-block">
          <a href="#about">About</a>
        </button>
        <button className="p-4 py-1 hover:text-blue hover:font-bold inline-block">
          <a href="#pricing">Pricing</a>
        </button>
        <button className="p-4 py-1 hover:text-blue hover:font-bold inline-block">
          <a href="#contact">Contact</a>
        </button>
        <div className="p-4 py-1 bg-blue text-white rounded-lg hover:bg-transparent hover:border hover:border-blue hover:text-blue hover:font-bold transition-all duration-300">
          <SignInButton />
        </div>
      </nav>
    </header>
  );
}
