import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Sidebar } from "./components/Sidebar";
import { HomePage } from "./pages/HomePage";
import { HomePageHeader } from "./components/HomePageHeader";

export function App() {
  return (
    <div>
      <SignedOut>
        <HomePageHeader />
        <HomePage />
      </SignedOut>
      <SignedIn>
        <Sidebar />
      </SignedIn>
    </div>
  );
}
