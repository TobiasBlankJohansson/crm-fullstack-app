import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { Costumer } from "./components/dashbord/page/customer/Customer";
import { Sales } from "./components/dashbord/page/sales/Sales";
import { Projects } from "./components/dashbord/page/projects/Projects";

export function App() {
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <Projects />
      </SignedIn>
    </div>
  );
}
