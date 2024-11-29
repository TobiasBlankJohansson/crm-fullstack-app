import { useEffect, useState } from "react";
import { Sidebar } from "../../../dashboard/Sidebar";
import { DisplayObject } from "../../display/Display";
import { getCostumer } from "@/api/costumer";
import { customerDisplay } from "./customerDisplay";
import { Create } from "../../create/Create";
import { costumerCreate } from "./customerCreate";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";

export function Costumer() {
  const [costumers, setCostumers] = useState<DisplayObject[]>([]);
  const title = "customer";

  useEffect(() => {
    const getCostemers = async () => {
      const fetchData = await getCostumer();
      const custumer = customerDisplay(fetchData);
      setCostumers(() => custumer);
    };
    getCostemers();
  }, []);
  const create = costumerCreate();
  //<Display title={title} displayItems={costumers} />
  return (
    <main className="flex h-screen w-screen">
      <Sidebar />
      <section className="h-full w-4/5 flex flex-col">
        <DashboardHeader />
        <Create title={title} onSubmit={create.onSubmit} input={create.input} />
      </section>
    </main>
  );
}
