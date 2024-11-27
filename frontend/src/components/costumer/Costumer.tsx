import { Sidebar } from "../Sidebar";
import { Display, DisplayObject } from "../display/Display";

export function Costumer() {
  const mockDisplayItems: DisplayObject[] = [
    {
      title: "Anchor",
      count: "1",
      detail: [
        { title: "Date", value: "2003" },
        { title: "Sales", value: "200k" },
      ],
      itemProperty: [
        { title: "Project name", info: ["Anchor"] },
        {
          title: "Description",
          info: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptatum?",
          ],
        },
        { title: "Date", info: ["2003"] },
      ],
    },
    {
      title: "Petpals",
      count: "2",
      detail: [
        { title: "Date", value: "2005" },
        { title: "Sales", value: "20k" },
      ],
      itemProperty: [
        { title: "Project name", info: ["Petpals"] },
        {
          title: "Description",
          info: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptatum?",
          ],
        },
        { title: "Date", info: ["203"] },
      ],
    },
  ];

  return (
    <main className="flex h-screen w-screen">
      <Sidebar />
      <section className="h-full w-4/5 flex flex-col">
        <nav className="h-16 bg- border-b-2 border-gray-400"></nav>
        <Display title="project" displayItems={mockDisplayItems} />
      </section>
    </main>
  );
}
