import { useEffect, useState } from "react";
import { Sidebar } from "../../Sidebar";
import { Display } from "../../display/Display";
import { getSales } from "@/api/sales";
import { salesDisplay } from "./salesDisplay";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Create, CreateObject } from "../../create/Create";
import { salesCreate } from "./salesCreate";

export function Sales() {
  const [createNew, setCreateNew] = useState<boolean>(false);
  const [page, setPage] = useState<JSX.Element>(<></>);
  const title = "project";

  useEffect(() => {
    if (createNew) {
      const create: CreateObject = salesCreate();
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
      const fetchData = await getSales();
      const sales = salesDisplay(fetchData);
      setPage(() => <Display title="sales" displayItems={sales} />);
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
