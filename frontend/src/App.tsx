import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { HomePage } from "./pages/HomePage";
import { HomePageHeader } from "./components/HomePageHeader";
import { Costumer } from "./components/dashbord/page/customer/Customer";

export function App() {
  return (
    <div>
      <SignedOut>
        <HomePageHeader />
        <HomePage />
      </SignedOut>
      <SignedIn>
        <Costumer />
      </SignedIn>
    </div>
  );
}
