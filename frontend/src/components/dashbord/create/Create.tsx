type CreateProp = {
  title: string;
};

export function Create({ title }: CreateProp) {
  return (
    <section className="pt-20 pb-10 pl-14 w-full h-full">
      <main className="flex h-full w-full justify-center items-center">
        <section className="h-full w-3/5 bg-white rounded-2xl">
          <h2>Create new {title}</h2>
        </section>
      </main>
    </section>
  );
}
