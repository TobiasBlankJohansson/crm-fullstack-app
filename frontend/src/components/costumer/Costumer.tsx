import { Display } from "./Display";
import { DisplayItemProp } from "./DisplayItem";

export function Costumer() {
  const mockDisplayItems: DisplayItemProp[] = [
    {
      title: "project",
      count: "1",
      detail: [
        { title: "Date", value: "2003" },
        { title: "Sales", value: "200k" },
      ],
      itemProperty: [],
    },
    {
      title: "project",
      count: "2",
      detail: [
        { title: "Date", value: "2005" },
        { title: "Sales", value: "20k" },
      ],
      itemProperty: [],
    },
  ];

  return (
    <main className="flex h-screen w-screen">
      <aside className="h-full w-1/5 bg-red-500"></aside>
      <section className="h-full w-4/5 flex flex-col">
        <nav className="h-10 bg-black"></nav>
        <Display title="project" displayItems={mockDisplayItems} />
      </section>
    </main>
  );
}
