import { useEffect, useState } from "react";
import { Sidebar } from "../../../Sidebar";
import { Display, DisplayObject } from "../../display/Display";
import { projectDisplay } from "./projectsDisplay";

export function Sales() {
  const [costumers, setCostumers] = useState<DisplayObject[]>([]);

  useEffect(() => {
    const getProject = async () => {
      const fetchData = await getProjects();
      const custumer = projectDisplay(fetchData);
      setCostumers(() => custumer);
    };
    getProject();
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
