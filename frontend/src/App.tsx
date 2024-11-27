import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { Costumer } from "./components/dashbord/page/costumer/Costumer";
import { Sales } from "./components/dashbord/page/sales/Sales";

export function App() {
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <Sales />
      </SignedIn>
    </div>
  );
}
