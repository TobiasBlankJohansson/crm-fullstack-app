import { useEffect, useState } from "react";
import { Sidebar } from "../../Sidebar";
import { Display, DisplayObject } from "../../display/Display";
import { getCostumer } from "@/api/costumer";
import { customerDisplay } from "./customerDisplay";
import { Create } from "../../create/create";

export function Costumer() {
  const [costumers, setCostumers] = useState<DisplayObject[]>([]);

  useEffect(() => {
    const getCostemers = async () => {
      const fetchData = await getCostumer();
      const custumer = customerDisplay(fetchData);
      setCostumers(() => custumer);
    };
    getCostemers();
  }, []);
//<Display title="customer" displayItems={costumers} />
  return (
    <main className="flex h-screen w-screen">
      <Sidebar />
      <section className="h-full w-4/5 flex flex-col">
        <nav className="h-16 border-b-2 border-gray-400"></nav>
        <Create/>
      </section>
    </main>
  );
}
