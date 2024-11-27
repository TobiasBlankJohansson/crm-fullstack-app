import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { Costumer } from "./components/dashbord/page/costumer/Costumer";

export function App() {
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <Costumer />
      </SignedIn>
    </div>
  );
}
