import { SignedIn, useUser } from "@clerk/clerk-react";
import { Sidebar } from "../components/dashboard/Sidebar";
import customersData from "../data/customersData.json";
import salesData from "../data/salesData.json";
import projectsData from "../data/projectsData.json";
import { SalesChart } from "@/components/dashboard/SalesChart";

export function Dashboard() {
  const { user } = useUser();

  const sortedCustomers = [...customersData].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  const latestCustomers = sortedCustomers.slice(0, 3).map((customer, index) => (
    <div key={index}>
      <h3 className="text-l font-semibold text-gray-600 mt-5">
        {customer.company}
      </h3>
      <p className="text-gray-500">Latest project: {customer.project[0]}</p>
    </div>
  ));

  const sortedSales = [...salesData].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  const latestSales = sortedSales.slice(0, 3).map((sale, index) => (
    <div key={index}>
      <h3 className="text-l font-semibold text-gray-600 mt-5">{sale.name}</h3>
      <p className="text-gray-500">Amount: ${sale.sale}</p>
      <p className="text-gray-500">
        Date: {new Date(sale.timestamp).toLocaleDateString()}
      </p>
    </div>
  ));

  const sortedProjects = [...projectsData].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  const latestProjects = sortedProjects.slice(0, 3).map((project, index) => (
    <div key={index}>
      <h3 className="text-l font-semibold text-gray-600 mt-5">
        {project.name}
      </h3>
      <p className="text-gray-500">
        Start Date: {new Date(project.timestamp).toLocaleDateString()}
      </p>
    </div>
  ));

  return (
    <SignedIn>
      <div className="flex">
        <div className="sticky top-0 h-screen">
          <Sidebar />
        </div>
        <div className="flex-1 overflow-auto">
          <main className="mt-16 p-8">
            <h2 className="text-3xl font-semibold text-blue-700 text-center mb-8 mt-10">
              Welcome to ANCHOR {user?.firstName}!
            </h2>
            <p className="text-lg text-gray-600 text-center mb-16">
              You can check your recent activity here or go directly to the
              sections we have provided for you.
            </p>
            <div className="flex justify-center space-x-6">
              <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <h3 className="text-xl font-semibold text-blue-600">
                  Recent Projects
                </h3>
                {latestProjects}
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <h3 className="text-xl font-semibold text-blue-600">
                  Recent Sales
                </h3>
                {latestSales}
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <h3 className="text-xl font-semibold text-blue-600 mb-5">
                  Recent Customers
                </h3>
                {latestCustomers}
              </div>
            </div>
            <div className="mt-10">
              <SalesChart />
            </div>
          </main>
        </div>
      </div>
    </SignedIn>
  );
}