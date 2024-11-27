import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Sidebar } from "./components/Sidebar";
import { HomePage } from "./pages/HomePage";

export function App() {
  return (
    <div>
      <SignedOut>
        <HomePage />
      </SignedOut>
      <SignedIn>
        <Sidebar />
      </SignedIn>
    </div>
  );
}
