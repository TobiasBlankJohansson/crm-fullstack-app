import { useEffect, useState } from "react";
import { Sidebar } from "../../Sidebar";
import { Display } from "../../display/Display";
import { projectDisplay } from "./projectsDisplay";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Create, CreateObject } from "../../create/Create";
import { projectsCreate } from "./projectsCreate";
import { getProject } from "@/api/project";

export function Projects() {
  const [createNew, setCreateNew] = useState<boolean>(false);
  const [page, setPage] = useState<JSX.Element>(<></>);
  const title = "project";

  useEffect(() => {
    if (createNew) {
      const create: CreateObject = projectsCreate();
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
      const fetchData = await getProject();
      const customers = projectDisplay(fetchData);
      setPage(() => <Display title={title} displayItems={customers} />);
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
