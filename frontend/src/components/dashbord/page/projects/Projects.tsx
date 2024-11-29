import { useEffect, useState } from "react";
import { Sidebar } from "../../../dashboard/Sidebar";
import { Display, DisplayObject } from "../../display/Display";
import { projectDisplay } from "./projectsDisplay";
import { getProjects } from "@/api/project";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";

export function Projects() {
  const [projects, setProjects] = useState<DisplayObject[]>([]);

  useEffect(() => {
    const getProject = async () => {
      const fetchData = await getProjects();
      const customer = projectDisplay(fetchData);
      setProjects(() => customer);
    };
    getProject();
  }, []);

  return (
    <main className="flex h-screen w-screen">
      <Sidebar />
      <section className="h-full w-4/5 flex flex-col">
        <DashboardHeader />
        <Display title="projects" displayItems={projects} />
      </section>
    </main>
  );
}
