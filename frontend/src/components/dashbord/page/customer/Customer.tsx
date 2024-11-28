import { useEffect, useState } from "react";
import { Sidebar } from "../../Sidebar";
import { Display, DisplayObject } from "../../display/Display";
import { getCostumer } from "@/api/costumer";
import { customerDisplay } from "./customerDisplay";
import { Create } from "../../create/Create";
import { ButtonCreate } from "../../create/ButtonCreate";

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
  //<Display title={title} displayItems={costumers} />
  return (
    <main className="flex h-screen w-screen">
      <Sidebar />
      <section className="h-full w-4/5 flex flex-col">
        <nav className="h-16 border-b-2 border-gray-400"></nav>
        <Create title={title} input={mockData} />
      </section>
    </main>
  );
}

const mockActions = [
  () => alert("Action 1 executed!"),
  () => console.log("Action 2 executed!"),
  () => alert("Action 3 executed!"),
  () => console.log("Action 4 executed!"),
];

const mockData: JSX.Element[] = [
  <ButtonCreate key={1} label="Create User" onClick={mockActions[0]} />,
  <ButtonCreate key={2} label="Add Item" onClick={mockActions[1]} />,
  <ButtonCreate key={3} label="New Project" onClick={mockActions[2]} />,
  <ButtonCreate key={4} label="Add Task" onClick={mockActions[3]} />,
];
