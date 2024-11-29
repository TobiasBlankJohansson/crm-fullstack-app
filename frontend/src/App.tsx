import { SignedOut } from "@clerk/clerk-react";
import { HomePage } from "./pages/HomePage";
import { HomePageHeader } from "./components/homepage/HomePageHeader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}
