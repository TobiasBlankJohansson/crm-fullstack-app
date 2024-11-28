import { Button } from "@/components/ui/button";

type CreateProp = {
  title: string;
  input: JSX.Element[];
};

type inputCreate = {
  label: string;
  type: "text" | "email" | "tel";
};

export function Create({ title, input }: CreateProp) {
  return (
    <section className="pt-20 pb-10 pl-14 w-full h-full">
      <main className="flex h-full w-full justify-center items-center">
        <section className="h-full w-3/5 bg-white rounded-2xl p-5">
          <h2>Create new {title}</h2>
          <form
            className="grid grid-cols-[minmax(100px,_1fr)_3fr]"
            onSubmit={() => {}}
          >
            {input.map((element) => element)}
            <Button type="submit">Create</Button>
          </form>
        </section>
      </main>
    </section>
  );
}
