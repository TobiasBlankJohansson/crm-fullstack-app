import { SignedOut } from "@clerk/clerk-react";
import { HomePage } from "./pages/HomePage";
import { HomePageHeader } from "./components/homepage/HomePageHeader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Costumer } from "./components/dashbord/page/customer/Customer";
import { Sales } from "./components/dashbord/page/Sales/Sales";
import { Projects } from "./components/dashbord/page/projects/Projects";
import { Toaster } from "./components/ui/toaster";

export function App() {
  return (
    <div>
      <BrowserRouter>
        <SignedOut>
          <HomePageHeader />
          <HomePage />
        </SignedOut>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/customer" element={<Costumer />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}
