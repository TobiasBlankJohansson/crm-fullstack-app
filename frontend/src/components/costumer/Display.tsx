type DisplayProp = {
  title: string;
  displayItems: List<DisplayItems>;
};

export function Display({ title }: DisplayProp) {
  return (
    <section className="pt-20 pl-14 bg-green-600 w-full h-full">
      <h2 className="text-4xl">My {title}</h2>
      <main>
        <h3 className="ml-4 mt-8">Listed {title}</h3>
        <hr className="border-black border-b-2 mt-1"/>
      </main>
    </section>
  );
}
