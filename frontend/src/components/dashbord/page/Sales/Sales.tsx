import { useEffect, useState } from "react";
import { Sidebar } from "../../../Sidebar";
import { Display, DisplayObject } from "../../display/Display";
import { getCostumer } from "@/api/costumer";
import { costumerDisplay } from "./salesDisplay";

export function Costumer() {
  const [costumers, setCostumers] = useState<DisplayObject[]>([]);

  useEffect(() => {
    const getCostemers = async () => {
      const fetchData = await getCostumer();
      const custumer = costumerDisplay(fetchData);
      setCostumers(() => custumer);
    };
    getCostemers();
  }, []);

  return (
    <main className="flex h-screen w-screen">
      <Sidebar />
      <section className="h-full w-4/5 flex flex-col">
        <nav className="h-16 border-b-2 border-gray-400"></nav>
        <Display title="sales" displayItems={costumers} />
      </section>
    </main>
  );
}
