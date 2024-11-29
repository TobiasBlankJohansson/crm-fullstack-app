import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { HomePage } from "./pages/HomePage";
import { HomePageHeader } from "./components/HomePageHeader";
import { Projects } from "./components/dashbord/page/projects/Projects";


export function App() {
  return (
    <div>
      <SignedOut>
        <HomePageHeader />
        <HomePage />
      </SignedOut>
      <SignedIn>
        <Projects />
      </SignedIn>
    </div>
  );
}
