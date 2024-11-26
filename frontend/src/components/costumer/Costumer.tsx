import { Display } from "./Display";

export function Costumer() {
  return (
    <main className="flex h-screen w-screen">
      <aside className="h-full w-1/5 bg-red-500"></aside>
      <section className="h-full w-4/5 flex flex-col">
        <nav className="h-10 bg-black"></nav>
        <Display title="project" />
      </section>
    </main>
  );
}
