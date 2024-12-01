import { Button } from "@/components/ui/button";

type DisplayCreateProp = {
  title: string;
  input: JSX.Element[];
  onSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    setCreateNew: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  setCreateNew: React.Dispatch<React.SetStateAction<boolean>>;
};

export type CreateObject = {
  input: JSX.Element[];
  onSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    setCreateNew: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
};

export function Create({
  title,
  input,
  onSubmit,
  setCreateNew,
}: DisplayCreateProp) {
  return (
    <section className="pt-10 pb-10 pl-14 w-full h-full">
      <main className="flex h-full w-full justify-center items-center">
        <section className="h-full w-3/5 bg-white rounded-2xl p-5">
          <h2 className="font-bold text-2xl">Create new {title}</h2>
          <form
            className="grid grid-cols-[minmax(100px,_1fr)_3fr] justify-between h-full"
            onSubmit={(e) => onSubmit(e, setCreateNew)}
          >
            {input.map((element) => element)}
            <div className="flex justify-end my-3 col-span-2">
              <Button className="w-1/4" type="submit">
                Create
              </Button>
            </div>
          </form>
        </section>
      </main>
    </section>
  );
}
