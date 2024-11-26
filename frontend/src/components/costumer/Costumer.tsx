import { Display } from "./Display";

export function Costumer() {
  return (
    <main className="flex">
      <aside className="h-screen w-1/5 bg-red-500"></aside>
      <section className="h-screen w-4/5">
        <nav className="w-full h-10 bg-black"></nav>
        <Display />
      </section>
    </main>
  );
}
