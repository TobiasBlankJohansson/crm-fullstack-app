import { SignedIn } from "@clerk/clerk-react";
import { Sidebar } from "../components/Sidebar";
import { DashboardHeader } from "../components/DashboardHeader";

export function Dashboard() {
  return (
    <SignedIn>
      <Sidebar />
      <DashboardHeader />
    </SignedIn>
  );
}
