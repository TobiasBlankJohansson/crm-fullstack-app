import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { Costumer } from "./components/dashbord/page/customer/Customer";

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
