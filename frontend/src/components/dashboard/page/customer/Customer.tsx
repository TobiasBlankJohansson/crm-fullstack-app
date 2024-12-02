import { useEffect, useState } from "react";
import { Sidebar } from "../../Sidebar";
import { Display } from "../../display/Display";
import { getCostumer } from "@/api/costumer";
import { customerDisplay } from "./customerDisplay";
import { Create } from "../../create/Create";
import { costumerCreate } from "./customerCreate";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";

export function Costumer() {
  const [createNew, setCreateNew] = useState<boolean>(false);
  const [page, setPage] = useState<JSX.Element>(<></>);
  const title = "customer";

  useEffect(() => {
    if (createNew) {
      const create = costumerCreate();
      setPage(() => (
        <Create
          title={title}
          onSubmit={create.onSubmit}
          input={create.input}
          setCreateNew={setCreateNew}
        />
      ));
      return;
    }
    const getCostemers = async () => {
      const fetchData = await getCostumer();
      const costumers = customerDisplay(fetchData);
      setPage(() => <Display title={title} displayItems={costumers} />);
    };
    getCostemers();
  }, [createNew]);

  return (
    <main className="flex h-screen w-screen">
      <Sidebar />
      <section className="h-full w-4/5 flex flex-col">
        <DashboardHeader setCreateNew={setCreateNew} />
        {page}
      </section>
    </main>
  );
}
