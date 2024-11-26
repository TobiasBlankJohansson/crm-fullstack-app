import { Display } from "./Display";
import { DisplayItemProp } from "./DisplayItem";

export function Costumer() {
  const mockDisplayItems: DisplayItemProp[] = [
    {
      title: "Anchor",
      count: "1",
      detail: [
        { title: "Date", value: "2003" },
        { title: "Sales", value: "200k" },
      ],
    },
    {
      title: "Petpals",
      count: "2",
      detail: [
        { title: "Date", value: "2005" },
        { title: "Sales", value: "20k" },
      ],
    },
  ];

  return (
    <main className="flex h-screen w-screen">
      <aside className="h-full w-1/5 bg-white"></aside>
      <section className="h-full w-4/5 flex flex-col">
        <nav className="h-16 bg-slate-300 border-b-2 border-gray-400"></nav>
        <Display
          title="project"
          displayItems={mockDisplayItems}
          itemProperty={[
            { title: "Project name", info: ["Anchor"] },
            { title: "Description", info: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptatum?"] },
            { title: "Date", info: ["2003"] },
          ]}
        />
      </section>
    </main>
  );
}
