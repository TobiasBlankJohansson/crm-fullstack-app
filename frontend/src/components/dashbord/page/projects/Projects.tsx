import { useEffect, useState } from "react";
import { Sidebar } from "../../../dashboard/Sidebar";
import { Display } from "../../display/Display";
import { projectDisplay } from "./projectsDisplay";
import { getProjects } from "@/api/project";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";

export function Projects() {
  const [createNew, setCreateNew] = useState<boolean>(false);
  const [page, setPage] = useState<JSX.Element>(<></>);
  const title = "customer";

  useEffect(() => {
    if (createNew) {
      const create = projectCreate();
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
      const fetchData = await getProjects();
      const costumers = projectDisplay(fetchData);
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
