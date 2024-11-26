import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <Sidebar />
      </SignedIn>
    </div>
  );
}
