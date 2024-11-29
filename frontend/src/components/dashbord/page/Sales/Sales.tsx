import { useEffect, useState } from "react";
import { Sidebar } from "../../../dashboard/Sidebar";
import { Display, DisplayObject } from "../../display/Display";
import { getSales } from "@/api/sales";
import { salesDisplay } from "./salesDisplay";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";

export function Sales() {
  const [sales, setSales] = useState<DisplayObject[]>([]);

  useEffect(() => {
    const getCostemers = async () => {
      const fetchData = await getSales();
      const custumer = salesDisplay(fetchData);
      setSales(() => custumer);
    };
    getCostemers();
  }, []);

  return (
    <main className="flex h-screen w-screen">
      <Sidebar />
      <section className="h-full w-4/5 flex flex-col">
        <DashboardHeader />
        <Display title="sales" displayItems={sales} />
      </section>
    </main>
  );
}
