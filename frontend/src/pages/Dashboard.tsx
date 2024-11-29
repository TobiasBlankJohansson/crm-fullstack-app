import { SignedIn, useUser } from "@clerk/clerk-react";
import { Sidebar } from "../components/Sidebar";
import { DashboardHeader } from "../components/DashboardHeader";

export function Dashboard() {
  const { user } = useUser();

  return (
    <SignedIn>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <DashboardHeader />
          <main className="mt-16 p-8">
            <h2 className="text-3xl font-semibold text-blue-700 text-center mb-8 mt-20">
              Welcome to ANCHOR {user?.firstName}!
            </h2>
            <p className="text-lg text-gray-600 text-center mb-16">
              You can check your recent activity here or go directly to the sections we have
              provided for you.
            </p>
            <div className="flex justify-center space-x-6">
              <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <h3 className="text-2xl font-semibold text-blue-600">Recent Projects</h3>
                <p className="text-gray-500">Check out your latest projects here...</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <h3 className="text-2xl font-semibold text-blue-600">Recent Sales</h3>
                <p className="text-gray-500">Here are your most recent sales...</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <h3 className="text-2xl font-semibold text-blue-600">Recent Customers</h3>
                <p className="text-gray-500">
                  See the latest customers you have interacted with...
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SignedIn>
  );
}
